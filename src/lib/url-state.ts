import { CATEGORIES, COUNTRIES, SPORTS, type Category, type Country, type Sport } from './types';
import { defaultFilters, type Filters } from './filters';

const SPORT_SET = new Set<string>(SPORTS);
const CATEGORY_SET = new Set<string>(CATEGORIES);
const COUNTRY_SET = new Set<string>(COUNTRIES);

export function filtersFromSearch(search: string): Filters {
  const p = new URLSearchParams(search);
  const sport = p.get('sport');
  return {
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

const STORAGE_KEY = 'sport_events.filters.v1';

export function saveFiltersToStorage(f: Filters) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, filtersToSearch(f));
  } catch {
    /* ignore quota/security errors */
  }
}

export function loadFiltersFromStorage(): Filters | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    return filtersFromSearch(raw);
  } catch {
    return null;
  }
}
