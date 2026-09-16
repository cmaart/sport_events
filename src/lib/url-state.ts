import {
  CATEGORIES,
  COUNTRIES,
  DEFAULT_SEASON,
  SPORTS,
  isSeason,
  type Category,
  type Country,
  type Season,
  type Sport,
} from './types';
import { defaultFilters, type Filters } from './filters';

const SPORT_SET = new Set<string>(SPORTS);
const CATEGORY_SET = new Set<string>(CATEGORIES);
const COUNTRY_SET = new Set<string>(COUNTRIES);

/**
 * Season resolution order: explicit `?saison=` in the URL (shared links win),
 * then the visitor's last choice in localStorage, then DEFAULT_SEASON.
 */
export function filtersFromSearch(search: string, fallbackSeason: Season = DEFAULT_SEASON): Filters {
  const p = new URLSearchParams(search);
  const sport = p.get('sport');
  const seasonParam = Number(p.get('saison'));
  return {
    season: isSeason(seasonParam) ? seasonParam : fallbackSeason,
    sport: sport && SPORT_SET.has(sport) ? (sport as Sport) : defaultFilters.sport,
    categories: (p.get('kat')?.split(',') ?? []).filter((c) => CATEGORY_SET.has(c)) as Category[],
    countries: (p.get('country')?.split(',') ?? []).filter((c) => COUNTRY_SET.has(c)) as Country[],
    dateFrom: p.get('from'),
    dateTo: p.get('to'),
    query: p.get('q') ?? '',
    upcomingOnly: p.get('past') === '1' ? false : true,
  };
}

export function filtersToSearch(f: Filters): string {
  const p = new URLSearchParams();
  p.set('saison', String(f.season));
  if (f.sport !== 'all') p.set('sport', f.sport);
  if (f.categories.length) p.set('kat', f.categories.join(','));
  if (f.countries.length) p.set('country', f.countries.join(','));
  if (f.dateFrom) p.set('from', f.dateFrom);
  if (f.dateTo) p.set('to', f.dateTo);
  if (f.query.trim()) p.set('q', f.query.trim());
  if (!f.upcomingOnly) p.set('past', '1');
  const s = p.toString();
  return s ? `?${s}` : '';
}

export function syncUrl(f: Filters) {
  if (typeof window === 'undefined') return;
  const search = filtersToSearch(f);
  const url = `${window.location.pathname}${search}${window.location.hash}`;
  window.history.replaceState({}, '', url);
}

const SEASON_STORAGE_KEY = 'sport_events.season.v1';

export function saveSeasonToStorage(season: Season) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(SEASON_STORAGE_KEY, String(season));
  } catch {
    /* ignore quota/security errors */
  }
}

export function loadSeasonFromStorage(): Season | null {
  if (typeof window === 'undefined') return null;
  try {
    const n = Number(window.localStorage.getItem(SEASON_STORAGE_KEY));
    return isSeason(n) ? n : null;
  } catch {
    return null;
  }
}
