export const SPORTS = ['cycling', 'triathlon'] as const;
export type Sport = (typeof SPORTS)[number];

export const CYCLING_CATEGORIES = [
  'Kriterium',
  'Gran Fondo',
  'Radmarathon',
  'Rundstreckenrennen',
  'Etappenrennen',
  'Berg',
] as const;

export const TRIATHLON_CATEGORIES = [
  'Sprintdistanz',
  'Olympische Distanz',
  'Mitteldistanz',
  'Langdistanz',
  'Cross-Triathlon',
] as const;

export const CATEGORIES = [...CYCLING_CATEGORIES, ...TRIATHLON_CATEGORIES] as const;
export type Category = (typeof CATEGORIES)[number];

export const REGIONS = [
  'Wien',
  'Niederösterreich',
  'Oberösterreich',
  'Salzburg',
  'Steiermark',
  'Kärnten',
  'Tirol',
  'Vorarlberg',
  'Burgenland',
] as const;
export type Region = (typeof REGIONS)[number];

export const COUNTRIES = ['AT', 'DE'] as const;
export type Country = (typeof COUNTRIES)[number];

export const COUNTRY_LABELS: Record<Country, { name: string; flag: string }> = {
  AT: { name: 'Österreich', flag: '🇦🇹' },
  DE: { name: 'Deutschland', flag: '🇩🇪' },
};
