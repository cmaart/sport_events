import { useMemo } from 'preact/hooks';
import {
  CYCLING_CATEGORIES,
  REGIONS,
  TRIATHLON_CATEGORIES,
  type Category,
  type Region,
  type Sport,
} from '../../lib/types';
import { defaultFilters, type Filters } from '../../lib/filters';
import { t } from '../../lib/i18n';

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

  const toggleRegion = (r: Region) => {
    const next = filters.regions.includes(r)
      ? filters.regions.filter((x) => x !== r)
      : [...filters.regions, r];
    update({ regions: next });
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
          {t('filter.region.label')}
        </label>
        <div class="flex flex-wrap gap-1.5">
          {REGIONS.map((r) => {
            const active = filters.regions.includes(r);
            return (
              <button
                key={r}
                type="button"
                onClick={() => toggleRegion(r)}
                class={`text-xs px-2.5 py-1.5 rounded-full border transition ${
                  active
                    ? 'bg-[var(--color-ink-900)] border-[var(--color-ink-900)] text-white'
                    : 'bg-white border-[var(--color-ink-300)] text-[var(--color-ink-700)] hover:border-[var(--color-ink-900)]'
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
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
