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
