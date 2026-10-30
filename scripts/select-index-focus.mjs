// Select the "index focus set": the small group of event pages that carry
// <meta name="robots" content="index"> and appear in the sitemap. Every other
// event page is noindex,follow (still linked, still useful to visitors).
//
// Background: Google throttled the whole subdomain in June 2026 after ~1500
// templated pages appeared on a brand-new host within weeks (scaled-content
// classification). A small, dense, hand-maintained set of indexable pages is
// how the site earns its way back; the set grows only when Google starts
// indexing what is already in it.
//
// Selection rules
//   - Only future events (end date >= today) or unconfirmed events with a
//     start date in the future.
//   - DE and AT get a large priority bonus (the site's core market); strong
//     international classics can still make the cut on content quality.
//   - Quality score = description depth + filled structured fields.
//   - Sticky: an existing focus entry stays until it becomes past, is deleted,
//     or --rebuild is passed. Churn in the indexable set is itself a bad signal.
//
// Usage
//   node scripts/select-index-focus.mjs            # top up to LIMIT, write JSON
//   node scripts/select-index-focus.mjs --dry-run  # print, don't write
//   node scripts/select-index-focus.mjs --rebuild  # ignore existing list
//   node scripts/select-index-focus.mjs --report   # score table for current set
//   node scripts/select-index-focus.mjs --limit=200

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const EVENTS_DIR = path.join(ROOT, 'src', 'content', 'events');
const OUT = path.join(ROOT, 'src', 'data', 'index-focus.json');

const args = new Set(process.argv.slice(2));
const limitArg = [...args].find((a) => a.startsWith('--limit='));
// 150 from 2026-10-17; cut to 20 on 2026-10-30 after the homepage was crawled
// with the 150 set live and still rejected ("Gecrawlt – zurzeit nicht indexiert").
const LIMIT = limitArg ? Number(limitArg.split('=')[1]) : 20;
const DRY = args.has('--dry-run');
const REBUILD = args.has('--rebuild');
const REPORT = args.has('--report');

const PRIORITY_COUNTRIES = new Set(['DE', 'AT']);
const PRIORITY_BONUS = 30;
// Events starting within this window are about to turn past/noindex; they'd
// only churn the set, so they get a penalty instead of a slot.
const SOON_DAYS = 60;
const SOON_PENALTY = 20;
// Categories with broad search demand (people plan months ahead and compare).
const BIG_CATEGORIES = new Set([
  'Radmarathon',
  'Gran Fondo',
  'Etappenrennen',
  'Gravel',
  'Langdistanz',
  'Mitteldistanz',
  'T100',
]);

const today = new Date();
today.setHours(0, 0, 0, 0);

const words = (s) => (s ?? '').trim().split(/\s+/).filter(Boolean).length;

/** Quality score for one event JSON. Higher = more worth indexing. */
export function scoreEvent(e) {
  let s = 0;
  const reasons = [];
  const w = words(e.description);
  s += Math.min(w, 160) * 0.5; // up to 80
  reasons.push(`desc:${w}w`);
  if (e.distanceKm) (s += 8), reasons.push('km');
  if (e.elevationGainM) (s += 8), reasons.push('hm');
  if (Array.isArray(e.distances) && e.distances.length >= 2) (s += 10), reasons.push(`dist×${e.distances.length}`);
  if (e.imageUrl) (s += 8), reasons.push('img');
  if (e.registrationUrl) (s += 6), reasons.push('reg');
  if (e.websiteUrl) (s += 4), reasons.push('web');
  if (e.entryFee) (s += 6), reasons.push('fee');
  if (e.registrationDeadline) (s += 6), reasons.push('deadline');
  if (e.startTime) (s += 3), reasons.push('start');
  if (e.participantLimit) (s += 3), reasons.push('limit');
  if (e.location?.region) (s += 3), reasons.push('region');
  if (e.dates?.confirmed !== false) (s += 10), reasons.push('confirmed');
  if ((e.categories ?? []).some((c) => BIG_CATEGORIES.has(c))) (s += 5), reasons.push('bigcat');
  if (PRIORITY_COUNTRIES.has(e.country)) (s += PRIORITY_BONUS), reasons.push(e.country);
  const start = new Date(e.dates?.start);
  if (!Number.isNaN(+start) && (start - today) / 86400000 < SOON_DAYS) (s -= SOON_PENALTY), reasons.push('soon');
  return { score: Math.round(s * 10) / 10, reasons };
}

function loadEvents() {
  const out = [];
  for (const file of fs.readdirSync(EVENTS_DIR)) {
    if (!file.endsWith('.json') || file.startsWith('_')) continue;
    const slug = file.replace(/\.json$/, '');
    try {
      const data = JSON.parse(fs.readFileSync(path.join(EVENTS_DIR, file), 'utf8'));
      out.push({ slug, data });
    } catch (err) {
      console.warn(`skip ${file}: ${err.message}`);
    }
  }
  return out;
}

const isFuture = (d) => {
  const end = new Date(d.dates?.end ?? d.dates?.start);
  return !(d.dates?.confirmed !== false && end < today);
};

const events = loadEvents();
const bySlug = new Map(events.map((e) => [e.slug, e]));
const candidates = events
  .filter((e) => isFuture(e.data))
  .map((e) => ({ ...e, ...scoreEvent(e.data) }))
  .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug));

let existing = [];
if (!REBUILD && fs.existsSync(OUT)) {
  try {
    existing = JSON.parse(fs.readFileSync(OUT, 'utf8')).slugs ?? [];
  } catch {
    existing = [];
  }
}

// Keep sticky entries that still exist and are still upcoming. If the limit was
// lowered, keep only the best-scoring ones.
const scoreBySlug = new Map(candidates.map((c) => [c.slug, c.score]));
const kept = existing
  .filter((slug) => bySlug.has(slug) && isFuture(bySlug.get(slug).data))
  .sort((a, b) => scoreBySlug.get(b) - scoreBySlug.get(a) || a.localeCompare(b))
  .slice(0, LIMIT);
const dropped = existing.filter((slug) => !kept.includes(slug));
const keptSet = new Set(kept);
const added = [];
for (const c of candidates) {
  if (keptSet.size + added.length >= LIMIT) break;
  if (keptSet.has(c.slug)) continue;
  added.push(c.slug);
}
const slugs = [...kept, ...added];
// Stable order in the file: by score desc, then slug.
const scoreOf = new Map(candidates.map((c) => [c.slug, c]));
slugs.sort((a, b) => (scoreOf.get(b)?.score ?? 0) - (scoreOf.get(a)?.score ?? 0) || a.localeCompare(b));

const byCountry = {};
for (const s of slugs) {
  const c = bySlug.get(s).data.country;
  byCountry[c] = (byCountry[c] ?? 0) + 1;
}

if (REPORT || DRY) {
  console.log(`slug`.padEnd(60), 'score', 'reasons');
  for (const s of slugs) {
    const c = scoreOf.get(s);
    console.log(s.padEnd(60), String(c.score).padStart(5), c.reasons.join(' '));
  }
}
console.log(`\nfocus set: ${slugs.length}/${LIMIT}  kept ${kept.length}  added ${added.length}  dropped ${dropped.length}`);
console.log('by country:', Object.entries(byCountry).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' '));
if (dropped.length) console.log('dropped (past/deleted/over limit):', dropped.join(', '));
if (added.length && !REBUILD) console.log('added:', added.join(', '));
const weakest = slugs.slice(-10).map((s) => `${s} (${scoreOf.get(s).score})`);
console.log('weakest in set (enrich these first):', weakest.join(', '));
const nextUp = candidates.filter((c) => !slugs.includes(c.slug)).slice(0, 10).map((c) => `${c.slug} (${c.score})`);
console.log('next candidates outside set:', nextUp.join(', '));

if (!DRY) {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const payload = {
    _comment:
      'Generated by scripts/select-index-focus.mjs. Only these event slugs are indexable (robots index + sitemap); all other event pages are noindex,follow. Edit by re-running the script, not by hand.',
    generatedAt: new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10),
    limit: LIMIT,
    count: slugs.length,
    byCountry,
    slugs,
  };
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`wrote ${path.relative(ROOT, OUT)}`);
}
