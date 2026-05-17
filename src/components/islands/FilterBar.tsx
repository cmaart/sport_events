import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import {
  COUNTRIES,
  COUNTRY_LABELS,
  CYCLING_CATEGORIES,
  TRIATHLON_CATEGORIES,
  type Category,
  type Country,
  type Sport,
} from '../../lib/types';
import { defaultFilters, type Filters } from '../../lib/filters';
import { t } from '../../lib/i18n';

const COUNTRY_SEARCH_THRESHOLD = 8;

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  totalCount: number;
  filteredCount: number;
}

export default function FilterBar({ filters, onChange, totalCount, filteredCount }: Props) {
  const visibleCategories = useMemo<readonly Category[]>(() => {
    if (filters.sport === 'cycling') return CYCLING_CATEGORIES;
    if (filters.sport === 'triathlon') return TRIATHLON_CATEGORIES;
    return [...CYCLING_CATEGORIES, ...TRIATHLON_CATEGORIES];
  }, [filters.sport]);

  const update = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });

  const toggleCategory = (c: Category) => {
    const next = filters.categories.includes(c)
      ? filters.categories.filter((x) => x !== c)
      : [...filters.categories, c];
    update({ categories: next });
  };

  const toggleCountry = (c: Country) => {
    const next = filters.countries.includes(c)
      ? filters.countries.filter((x) => x !== c)
      : [...filters.countries, c];
    update({ countries: next });
  };

  const setSport = (s: Sport | 'all') => {
    const stillValid = filters.categories.filter((c) => {
      if (s === 'cycling') return (CYCLING_CATEGORIES as readonly string[]).includes(c);
      if (s === 'triathlon') return (TRIATHLON_CATEGORIES as readonly string[]).includes(c);
      return true;
    });
    update({ sport: s, categories: stillValid as Category[] });
  };

  return (
    <div class="rounded-2xl bg-white border border-[var(--color-ink-100)] p-4 sm:p-5 shadow-sm space-y-5">
      <div class="flex items-baseline justify-between">
        <h2 class="font-semibold text-base">{t('filter.title')}</h2>
        <button
          type="button"
          class="text-xs text-[var(--color-brand-600)] hover:underline"
          onClick={() => onChange({ ...defaultFilters })}
        >
          {t('filter.reset')}
        </button>
      </div>

      <div>
        <label class="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-500)] mb-2 block">
          {t('filter.search.label')}
        </label>
        <input
          type="search"
          value={filters.query}
          onInput={(e) => update({ query: (e.target as HTMLInputElement).value })}
          placeholder={t('filter.search.placeholder')}
          class="w-full px-3 py-2 rounded-lg border border-[var(--color-ink-300)] focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 outline-none text-sm"
        />
      </div>

      <div>
        <label class="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-500)] mb-2 block">
          {t('filter.sport.label')}
        </label>
        <div class="grid grid-cols-3 gap-1.5 p-1 bg-[var(--color-ink-100)] rounded-lg">
          {(['all', 'cycling', 'triathlon'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSport(s)}
              class={`text-sm py-1.5 px-3 rounded-md transition ${
                filters.sport === s
                  ? 'bg-white shadow-sm font-medium text-[var(--color-ink-900)]'
                  : 'text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)]'
              }`}
            >
              {t(`filter.sport.${s === 'all' ? 'all' : s}`)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label class="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-500)] mb-2 block">
          {t('filter.category.label')}
        </label>
        <div class="flex flex-wrap gap-1.5">
          {visibleCategories.map((c) => {
            const active = filters.categories.includes(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleCategory(c)}
                class={`text-xs px-2.5 py-1.5 rounded-full border transition ${
                  active
                    ? 'bg-[var(--color-brand-500)] border-[var(--color-brand-500)] text-white'
                    : 'bg-white border-[var(--color-ink-300)] text-[var(--color-ink-700)] hover:border-[var(--color-brand-500)]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label class="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-500)] mb-2 block">
          {t('filter.country.label')}
        </label>
        <CountryMultiSelect
          selected={filters.countries}
          onToggle={toggleCountry}
          onClear={() => update({ countries: [] })}
        />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-500)] mb-2 block">
            {t('filter.dateFrom')}
          </label>
          <input
            type="date"
            value={filters.dateFrom ?? ''}
            onInput={(e) => update({ dateFrom: (e.target as HTMLInputElement).value || null })}
            class="w-full px-2.5 py-1.5 rounded-lg border border-[var(--color-ink-300)] focus:border-[var(--color-brand-500)] outline-none text-sm"
          />
        </div>
        <div>
          <label class="text-xs font-medium uppercase tracking-wide text-[var(--color-ink-500)] mb-2 block">
            {t('filter.dateTo')}
          </label>
          <input
            type="date"
            value={filters.dateTo ?? ''}
            onInput={(e) => update({ dateTo: (e.target as HTMLInputElement).value || null })}
            class="w-full px-2.5 py-1.5 rounded-lg border border-[var(--color-ink-300)] focus:border-[var(--color-brand-500)] outline-none text-sm"
          />
        </div>
      </div>

      <label class="flex items-center gap-2 cursor-pointer text-sm">
        <input
          type="checkbox"
          checked={filters.upcomingOnly}
          onInput={(e) => update({ upcomingOnly: (e.target as HTMLInputElement).checked })}
          class="w-4 h-4 rounded border-[var(--color-ink-300)] text-[var(--color-brand-500)]"
        />
        {t('filter.upcoming.label')}
      </label>

      <div class="pt-3 border-t border-[var(--color-ink-100)] text-sm text-[var(--color-ink-500)]">
        <span class="font-semibold text-[var(--color-ink-900)]">{filteredCount}</span> / {totalCount}{' '}
        {t('nav.events')}
      </div>
    </div>
  );
}

interface CountryMultiSelectProps {
  selected: Country[];
  onToggle: (c: Country) => void;
  onClear: () => void;
}

function CountryMultiSelect({ selected, onToggle, onClear }: CountryMultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const showSearch = COUNTRIES.length >= COUNTRY_SEARCH_THRESHOLD;

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKey);
    if (showSearch) searchInputRef.current?.focus();
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, showSearch]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const filteredCountries = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((c) => COUNTRY_LABELS[c].name.toLowerCase().includes(q));
  }, [query]);

  const summary =
    selected.length === 0
      ? t('filter.country.placeholder')
      : selected.length === 1
        ? `${COUNTRY_LABELS[selected[0]].flag} ${COUNTRY_LABELS[selected[0]].name}`
        : t('filter.country.count', { count: selected.length });

  return (
    <div class="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        class="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-[var(--color-ink-300)] bg-white text-sm text-left hover:border-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 outline-none"
      >
        <span class={selected.length === 0 ? 'text-[var(--color-ink-500)]' : 'text-[var(--color-ink-900)]'}>
          {summary}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class={`w-4 h-4 text-[var(--color-ink-500)] transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          class="absolute z-20 left-0 right-0 mt-1 rounded-lg border border-[var(--color-ink-200)] bg-white shadow-lg overflow-hidden"
          role="listbox"
          aria-multiselectable="true"
        >
          {showSearch && (
            <div class="p-2 border-b border-[var(--color-ink-100)]">
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
                placeholder={t('filter.country.search')}
                class="w-full px-2.5 py-1.5 rounded-md border border-[var(--color-ink-300)] focus:border-[var(--color-brand-500)] outline-none text-sm"
              />
            </div>
          )}
          <ul class="max-h-64 overflow-y-auto py-1">
            {filteredCountries.length === 0 ? (
              <li class="px-3 py-2 text-sm text-[var(--color-ink-500)]">{t('filter.country.empty')}</li>
            ) : (
              filteredCountries.map((c) => {
                const active = selected.includes(c);
                return (
                  <li key={c}>
                    <label
                      class="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-[var(--color-ink-100)]"
                      role="option"
                      aria-selected={active}
                    >
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => onToggle(c)}
                        class="w-4 h-4 rounded border-[var(--color-ink-300)] text-[var(--color-brand-500)]"
                      />
                      <span aria-hidden="true">{COUNTRY_LABELS[c].flag}</span>
                      <span class="text-[var(--color-ink-900)]">{COUNTRY_LABELS[c].name}</span>
                    </label>
                  </li>
                );
              })
            )}
          </ul>
          {selected.length > 0 && (
            <div class="p-2 border-t border-[var(--color-ink-100)] flex justify-end">
              <button
                type="button"
                onClick={onClear}
                class="text-xs text-[var(--color-brand-600)] hover:underline"
              >
                {t('filter.country.clear')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
