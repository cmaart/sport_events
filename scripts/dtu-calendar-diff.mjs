// Diff the DTU triathlon calendar against the repo.
//
// Background: since Nov 2026 the DTU calendar ignores its date_from filter and
// returns the full archive (2009 onward, unsorted, ~350 pages of 20 entries).
// WebFetch-based scans only ever saw page 0 (2021 entries) and found nothing.
// This script pages through the whole list with plain HTTP, keeps entries from
// today on, and reports every adult event that has no matching file in
// src/content/events (match: same start date ±1 day plus a shared name or town
// token, or a shared name token within ±7 days).
//
// Usage
//   node scripts/dtu-calendar-diff.mjs                 # report missing events
//   node scripts/dtu-calendar-diff.mjs --all           # also list matched entries
//   node scripts/dtu-calendar-diff.mjs --json=out.json # write all future entries
//   node scripts/dtu-calendar-diff.mjs --from=2027-01-01

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const EVENTS_DIR = path.join(ROOT, 'src/content/events');
const BASE = 'https://www.triathlondeutschland.de';
const LIST = `${BASE}/termine/veranstaltungskalender`;
const MAX_PAGES = 1000;
const CONCURRENCY = 3;
const failed = [];

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  }),
);
const today = new Date().toISOString().slice(0, 10);
const from = typeof args.from === 'string' ? args.from : today;

const EXCLUDE = /sch[üu]ler|kinder|kids|jugend|schul|bambini|nachwuchs|indoor|hallen/i;
const STOP = new Set([
  'triathlon', 'duathlon', 'aquathlon', 'swimrun', 'swim', 'run', 'and', 'und', 'der', 'die', 'das',
  'des', 'dem', 'den', 'am', 'im', 'in', 'an', 'cross', 'crossduathlon', 'crosstriathlon', 'tri',
  'cup', 'lauf', 'see', 'city', 'stadt', 'stadttriathlon', 'liga', 'jedermann', 'sprint', 'team',
  'challenge', 'ironman', 'deutsche', 'meisterschaft', 'meisterschaften', 'dm', 'landesmeisterschaft',
  'sparkassen', 'sparkasse', 'volksbank', 'raiffeisenbank', 'e', 'v', 'ev', 'tv', 'sv', 'tsv', 'vfl',
  'mittel', 'kurz', 'lang', 'distanz', 'olympisch', 'olympische', '2026', '2027', '2028',
]);

const decode = (s) =>
  s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&');

const tokens = (s) =>
  new Set(
    (s || '')
      .toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, ' ')
      .split(' ')
      .filter((t) => t.length > 2 && !STOP.has(t) && !/^\d+$/.test(t)),
  );

function parsePage(html) {
  const out = [];
  const re = /data-popupcontent="([^"]*)"/g;
  let m;
  while ((m = re.exec(html))) {
    const p = decode(m[1]);
    const date = p.match(/(\d{2})\.(\d{2})\.(\d{4})/);
    const link = p.match(/href="([^"]+)"[^>]*>([^<]+)<\/a>/);
    const place = p.match(/<br \/>([^<]+)<\/p>/);
    if (!date || !link) continue;
    out.push({
      date: `${date[3]}-${date[2]}-${date[1]}`,
      name: link[2].trim(),
      place: place ? place[1].trim() : '',
      url: BASE + link[1],
    });
  }
  return out;
}

async function fetchPage(n) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(`${LIST}?page=${n}`, { headers: { 'User-Agent': 'Mozilla/5.0 (sport-events-checker)' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return parsePage(await res.text());
    } catch (e) {
      if (attempt === 4) {
        failed.push(`${n} (${e.message})`);
        return null;
      }
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
}

async function fetchAll() {
  const all = [];
  let next = 0;
  let done = false;
  async function worker() {
    while (!done && next < MAX_PAGES) {
      const n = next++;
      const rows = await fetchPage(n);
      if (rows === null) continue;
      if (rows.length === 0) done = true;
      all.push(...rows);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  const seen = new Set();
  return all.filter((e) => {
    const k = e.url + e.date;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function loadRepo() {
  return fs
    .readdirSync(EVENTS_DIR)
    .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
    .map((f) => {
      const e = JSON.parse(fs.readFileSync(path.join(EVENTS_DIR, f), 'utf8'));
      return {
        slug: f.replace(/\.json$/, ''),
        start: e.dates?.start,
        country: e.country,
        sport: e.sport,
        nameTok: tokens(`${e.name} ${f.replace(/-\d{4}\.json$/, '').replace(/-/g, ' ')}`),
        placeTok: tokens(e.location?.name),
      };
    })
    .filter((e) => e.sport === 'triathlon');
}

const dayDiff = (a, b) => Math.abs((Date.parse(a) - Date.parse(b)) / 86400000);
const overlap = (a, b) => [...a].some((t) => b.has(t));

function findMatch(entry, repo) {
  const nTok = tokens(entry.name);
  const pTok = tokens(entry.place.split(',')[0]);
  let best = null;
  for (const r of repo) {
    if (!r.start) continue;
    const d = dayDiff(entry.date, r.start);
    if (d > 7) continue;
    const nameHit = overlap(nTok, r.nameTok) || overlap(nTok, r.placeTok);
    const placeHit = overlap(pTok, r.placeTok) || overlap(pTok, r.nameTok);
    if ((d <= 1 && (nameHit || placeHit)) || (nameHit && placeHit)) {
      if (!best || d < best.d) best = { slug: r.slug, d };
    }
  }
  return best;
}

const t0 = Date.now();
const entries = await fetchAll();
const future = entries.filter((e) => e.date >= from).sort((a, b) => a.date.localeCompare(b.date));
const repo = loadRepo();

const missing = [];
const matched = [];
const excluded = [];
for (const e of future) {
  if (EXCLUDE.test(e.name)) { excluded.push(e); continue; }
  const m = findMatch(e, repo);
  if (m) matched.push({ ...e, slug: m.slug });
  else missing.push(e);
}

if (typeof args.json === 'string') fs.writeFileSync(args.json, JSON.stringify(future, null, 2));

const years = {};
for (const e of entries) years[e.date.slice(0, 4)] = (years[e.date.slice(0, 4)] || 0) + 1;
console.log(`DTU calendar: ${entries.length} entries scraped in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
console.log(`Entries per year (last 4): ${Object.keys(years).sort().slice(-4).map((y) => `${y}=${years[y]}`).join(', ')}`);
if (failed.length) console.log(`WARNING: ${failed.length} pages failed, results incomplete: ${failed.join(', ')}`);
console.log(`From ${from}: ${future.length} entries, ${matched.length} matched, ${excluded.length} kids/indoor skipped, ${missing.length} MISSING\n`);
if (args.all) {
  console.log('MATCHED');
  for (const e of matched) console.log(`  ${e.date}  ${e.name}  →  ${e.slug}`);
  console.log('');
}
console.log('MISSING (check organiser site, then add <slug>-<year>.json or note in BACKLOG)');
for (const e of missing) console.log(`  ${e.date}  ${e.name}  |  ${e.place}  |  ${e.url}`);
