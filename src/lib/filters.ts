import type { Category, Country, Region, Sport } from './types';

export interface EventData {
  slug: string;
  id: string;
  name: string;
  sport: Sport;
  categories: Category[];
  country: Country;
  dates: { start: string; end?: string; confirmed: boolean };
  location: { name: string; lat: number; lng: number; region?: Region };
  websiteUrl?: string;
  registrationUrl?: string;
  imageUrl?: string;
  description: string;
  distanceKm?: number;
  elevationGainM?: number;
}

export interface Filters {
  sport: Sport | 'all';
  categories: Category[];
  countries: Country[];
  dateFrom: string | null;
  dateTo: string | null;
  query: string;
  upcomingOnly: boolean;
}

export const defaultFilters: Filters = {
  sport: 'all',
  categories: [],
  countries: [],
  dateFrom: null,
  dateTo: null,
  query: '',
  upcomingOnly: true,
};

export function applyFilters(events: EventData[], filters: Filters, searchMatches?: Set<string>): EventData[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const from = filters.dateFrom ? new Date(filters.dateFrom) : null;
  const to = filters.dateTo ? new Date(filters.dateTo) : null;
  if (to) to.setHours(23, 59, 59, 999);

  return events.filter((e) => {
    if (filters.sport !== 'all' && e.sport !== filters.sport) return false;
    if (filters.categories.length > 0 && !filters.categories.some((c) => e.categories.includes(c))) return false;
    if (filters.countries.length > 0 && !filters.countries.includes(e.country)) return false;
    const start = new Date(e.dates.start);
    const end = e.dates.end ? new Date(e.dates.end) : start;
    if (filters.upcomingOnly && end < today) return false;
    if (from && end < from) return false;
    if (to && start > to) return false;
    if (filters.query.trim() && searchMatches && !searchMatches.has(e.slug)) return false;
    return true;
  });
}

export function countActive(filters: Filters): number {
  let n = 0;
  if (filters.sport !== 'all') n++;
  if (filters.categories.length > 0) n++;
  if (filters.countries.length > 0) n++;
  if (filters.dateFrom) n++;
  if (filters.dateTo) n++;
  if (filters.query.trim()) n++;
  if (!filters.upcomingOnly) n++;
  return n;
}

export function sortEvents(events: EventData[], by: 'dateAsc' | 'dateDesc' | 'nameAsc'): EventData[] {
  const copy = [...events];
  switch (by) {
    case 'dateAsc':
      return copy.sort((a, b) => +new Date(a.dates.start) - +new Date(b.dates.start));
    case 'dateDesc':
      return copy.sort((a, b) => +new Date(b.dates.start) - +new Date(a.dates.start));
    case 'nameAsc':
      return copy.sort((a, b) => a.name.localeCompare(b.name, 'de'));
  }
}
