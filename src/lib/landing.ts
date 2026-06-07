import type { Country, Sport } from './types';

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
};

export const COUNTRY_BY_SLUG: Record<string, Country> = Object.fromEntries(
  Object.entries(COUNTRY_SLUGS).map(([k, v]) => [v, k as Country]),
);

export interface LandingPath {
  sport: Sport;
  country: Country;
  sportSlug: string;
  countrySlug: string;
  count: number;
}

export function collectLandingPaths(
  events: { data: { sport: Sport; country: Country } }[],
): LandingPath[] {
  const counts = new Map<string, { sport: Sport; country: Country; count: number }>();
  for (const e of events) {
    const key = `${e.data.sport}|${e.data.country}`;
    const existing = counts.get(key);
    if (existing) {
      existing.count++;
    } else {
      counts.set(key, { sport: e.data.sport, country: e.data.country, count: 1 });
    }
  }
  return Array.from(counts.values())
    .filter((c) => c.count >= MIN_EVENTS_PER_LANDING)
    .map((c) => ({
      sport: c.sport,
      country: c.country,
      sportSlug: SPORT_SLUGS[c.sport],
      countrySlug: COUNTRY_SLUGS[c.country],
      count: c.count,
    }));
}
