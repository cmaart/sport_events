import { seasonOf, type Country, type Sport } from './types';

export const MIN_EVENTS_PER_LANDING = 3;

export const SPORT_SLUGS: Record<Sport, string> = {
  cycling: 'radrennen',
  triathlon: 'triathlon',
};

export const SPORT_BY_SLUG: Record<string, Sport> = Object.fromEntries(
  Object.entries(SPORT_SLUGS).map(([k, v]) => [v, k as Sport]),
);

export const COUNTRY_SLUGS: Record<Country, string> = {
  AT: 'oesterreich',
  DE: 'deutschland',
  CH: 'schweiz',
  FR: 'frankreich',
  IT: 'italien',
  ES: 'spanien',
  PT: 'portugal',
  NL: 'niederlande',
  BE: 'belgien',
  LU: 'luxemburg',
  GB: 'grossbritannien',
  IE: 'irland',
  DK: 'daenemark',
  NO: 'norwegen',
  SE: 'schweden',
  FI: 'finnland',
  CZ: 'tschechien',
  SK: 'slowakei',
  PL: 'polen',
  HU: 'ungarn',
  SI: 'slowenien',
  HR: 'kroatien',
  EE: 'estland',
  BG: 'bulgarien',
  RS: 'serbien',
  GR: 'griechenland',
  LV: 'lettland',
  LT: 'litauen',
  MC: 'monaco',
  RO: 'rumaenien',
  ME: 'montenegro',
  AD: 'andorra',
  TR: 'tuerkei',
  CY: 'zypern',
};

export const COUNTRY_BY_SLUG: Record<string, Country> = Object.fromEntries(
  Object.entries(COUNTRY_SLUGS).map(([k, v]) => [v, k as Country]),
);

export interface LandingPath {
  sport: Sport;
  country: Country;
  /** Season (start year) — one landing page per sport × country × year. */
  year: number;
  sportSlug: string;
  countrySlug: string;
  count: number;
}

export const landingHref = (base: string, l: LandingPath): string =>
  `${base}/${l.sportSlug}/${l.countrySlug}/${l.year}`;

export function collectLandingPaths(
  events: { data: { sport: Sport; country: Country; dates: { start: Date | string } } }[],
): LandingPath[] {
  const counts = new Map<string, { sport: Sport; country: Country; year: number; count: number }>();
  for (const e of events) {
    const year = seasonOf(e.data.dates.start);
    const key = `${e.data.sport}|${e.data.country}|${year}`;
    const existing = counts.get(key);
    if (existing) {
      existing.count++;
    } else {
      counts.set(key, { sport: e.data.sport, country: e.data.country, year, count: 1 });
    }
  }
  return Array.from(counts.values())
    .filter((c) => c.count >= MIN_EVENTS_PER_LANDING)
    .map((c) => ({
      sport: c.sport,
      country: c.country,
      year: c.year,
      sportSlug: SPORT_SLUGS[c.sport],
      countrySlug: COUNTRY_SLUGS[c.country],
      count: c.count,
    }));
}

/** Newest season first, then by event count — the order used in nav menus. */
export const sortLandings = (a: LandingPath, b: LandingPath): number =>
  b.year - a.year || b.count - a.count;
