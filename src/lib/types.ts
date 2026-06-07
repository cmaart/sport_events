export const SPORTS = ['cycling', 'triathlon'] as const;
export type Sport = (typeof SPORTS)[number];

export const CYCLING_CATEGORIES = [
  'Kriterium',
  'Gran Fondo',
  'Radmarathon',
  'Gravel',
  'Rundstreckenrennen',
  'Etappenrennen',
  'Berg',
  'Zeitfahren',
] as const;

export const TRIATHLON_CATEGORIES = [
  'Sprintdistanz',
  'Olympische Distanz',
  'Mitteldistanz',
  'Langdistanz',
  'Cross-Triathlon',
  'Aquathlon',
  'Duathlon',
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
  'Baden-Württemberg',
  'Bayern',
  'Berlin',
  'Brandenburg',
  'Bremen',
  'Hamburg',
  'Hessen',
  'Mecklenburg-Vorpommern',
  'Niedersachsen',
  'Nordrhein-Westfalen',
  'Rheinland-Pfalz',
  'Saarland',
  'Sachsen',
  'Sachsen-Anhalt',
  'Schleswig-Holstein',
  'Thüringen',
] as const;
export type Region = (typeof REGIONS)[number];

export const COUNTRIES = [
  'AT', 'DE',
  'CH', 'FR', 'IT', 'ES', 'PT',
  'NL', 'BE', 'LU',
  'GB', 'IE',
  'DK', 'NO', 'SE', 'FI',
  'CZ', 'SK', 'PL', 'HU', 'SI', 'HR',
  'EE', 'BG',
  'RS', 'GR',
  'LV', 'LT', 'MC',
  'RO', 'ME',
  'AD',
] as const;
export type Country = (typeof COUNTRIES)[number];

export const COUNTRY_LABELS: Record<Country, { name: string; flag: string }> = {
  AT: { name: 'Österreich', flag: '🇦🇹' },
  DE: { name: 'Deutschland', flag: '🇩🇪' },
  CH: { name: 'Schweiz', flag: '🇨🇭' },
  FR: { name: 'Frankreich', flag: '🇫🇷' },
  IT: { name: 'Italien', flag: '🇮🇹' },
  ES: { name: 'Spanien', flag: '🇪🇸' },
  PT: { name: 'Portugal', flag: '🇵🇹' },
  NL: { name: 'Niederlande', flag: '🇳🇱' },
  BE: { name: 'Belgien', flag: '🇧🇪' },
  LU: { name: 'Luxemburg', flag: '🇱🇺' },
  GB: { name: 'Großbritannien', flag: '🇬🇧' },
  IE: { name: 'Irland', flag: '🇮🇪' },
  DK: { name: 'Dänemark', flag: '🇩🇰' },
  NO: { name: 'Norwegen', flag: '🇳🇴' },
  SE: { name: 'Schweden', flag: '🇸🇪' },
  FI: { name: 'Finnland', flag: '🇫🇮' },
  CZ: { name: 'Tschechien', flag: '🇨🇿' },
  SK: { name: 'Slowakei', flag: '🇸🇰' },
  PL: { name: 'Polen', flag: '🇵🇱' },
  HU: { name: 'Ungarn', flag: '🇭🇺' },
  SI: { name: 'Slowenien', flag: '🇸🇮' },
  HR: { name: 'Kroatien', flag: '🇭🇷' },
  EE: { name: 'Estland', flag: '🇪🇪' },
  BG: { name: 'Bulgarien', flag: '🇧🇬' },
  RS: { name: 'Serbien', flag: '🇷🇸' },
  GR: { name: 'Griechenland', flag: '🇬🇷' },
  LV: { name: 'Lettland', flag: '🇱🇻' },
  LT: { name: 'Litauen', flag: '🇱🇹' },
  MC: { name: 'Monaco', flag: '🇲🇨' },
  RO: { name: 'Rumänien', flag: '🇷🇴' },
  ME: { name: 'Montenegro', flag: '🇲🇪' },
  AD: { name: 'Andorra', flag: '🇦🇩' },
};
