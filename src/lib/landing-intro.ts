import type { Sport } from './types';
import { CATEGORIES } from './types';
import { t } from './i18n';

/**
 * Minimal shape needed to compose a landing-page intro. Matches the mapped
 * `EventData` used in the landing page (dates.start is an ISO string).
 */
export interface LandingEventLike {
  name: string;
  categories: string[];
  dates: { start: string };
  location: { region?: string | null; name: string };
  distanceKm?: number | null;
}

function joinDe(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' und ' + items[items.length - 1];
}

function distinct<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/** Pick up to n items spread evenly across the array, preserving order. */
function pickSpread<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) return distinct(arr);
  const out: T[] = [];
  for (let i = 0; i < n; i++) {
    out.push(arr[Math.round((i * (arr.length - 1)) / (n - 1))]);
  }
  return distinct(out);
}

/**
 * Builds a unique, fact-derived intro paragraph for a sport×country landing
 * page. Every sentence is composed from the actual matched events (timeframe,
 * regions/cities, category spectrum, distance range), so no two landing pages
 * share the same body text — and the copy updates automatically as events
 * change. Nothing is invented: all figures come straight from the event data.
 *
 * The first sentence is keyword-rich and self-contained so it also works as the
 * SEO meta description (which is truncated from this text).
 */
export function buildLandingIntro(
  sport: Sport,
  countryName: string,
  events: LandingEventLike[],
): string {
  const count = events.length;
  const noun = sport === 'cycling' ? 'Radrennen' : 'Triathlons';
  const sentences: string[] = [];

  const sorted = [...events].sort(
    (a, b) => +new Date(a.dates.start) - +new Date(b.dates.start),
  );

  // --- timeframe (month span of the season) ---
  const mMin = new Date(sorted[0].dates.start).getMonth() + 1;
  const mMax = new Date(sorted[sorted.length - 1].dates.start).getMonth() + 1;
  const timeframe =
    mMin === mMax
      ? `im ${t(`month.${mMin}`)} 2026`
      : `von ${t(`month.${mMin}`)} bis ${t(`month.${mMax}`)} 2026`;

  // --- geography: prefer regions (AT/DE), else fall back to example races ---
  const regions = distinct(
    events.map((e) => e.location.region).filter((r): r is string => !!r),
  );
  let geo = '';
  let namesUsedInGeo = false;
  if (regions.length >= 2) {
    geo = `, verteilt auf ${regions.length} Regionen wie ${joinDe(regions.slice(0, 3))}`;
  } else if (regions.length === 1) {
    geo = `, unter anderem in der Region ${regions[0]}`;
  } else {
    const names = pickSpread(sorted.map((e) => e.name), 3);
    geo = `, mit Veranstaltungen wie ${joinDe(names)}`;
    namesUsedInGeo = true;
  }

  sentences.push(
    `${count} ${noun} in ${countryName} für die Saison 2026 — ${timeframe}${geo}.`,
  );

  // --- category spectrum (canonical order → deterministic) ---
  const catsPresent = CATEGORIES.filter((c) =>
    events.some((e) => e.categories.includes(c)),
  );
  if (catsPresent.length === 2) {
    sentences.push(`Das Spektrum reicht von ${catsPresent[0]} bis ${catsPresent[1]}.`);
  } else if (catsPresent.length >= 3) {
    const mid = catsPresent[Math.floor(catsPresent.length / 2)];
    sentences.push(
      `Das Spektrum reicht von ${catsPresent[0]} über ${mid} bis ${catsPresent[catsPresent.length - 1]}.`,
    );
  }

  // --- example races (skip when names already used for geography) ---
  if (!namesUsedInGeo && count >= 5) {
    sentences.push(`Mit dabei etwa ${joinDe(pickSpread(sorted.map((e) => e.name), 3))}.`);
  }

  // --- distance range (cycling only; needs enough data points) ---
  // Only shown when the span is actually informative. Hill-climb sprints (1–9 km)
  // and ultra races (Transcontinental, Race Around Austria, …) otherwise blow the
  // range up to a meaningless "1 bis 2155 km", so those are suppressed.
  if (sport === 'cycling') {
    const dists = events
      .map((e) => e.distanceKm)
      .filter((d): d is number => typeof d === 'number' && d > 0);
    if (dists.length >= 3) {
      const min = Math.min(...dists);
      const max = Math.max(...dists);
      if (max > min && max <= 500 && max / min <= 10) {
        sentences.push(`Die Streckenlängen reichen von ${min} bis ${max} km.`);
      }
    }
  }

  // --- closing (curated, constant) ---
  sentences.push(
    'Kuratierte Übersicht mit Datum, Ort, Distanz und Direktlink zur Anmeldung, sortiert nach Datum.',
  );

  return sentences.join(' ');
}
