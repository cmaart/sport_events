import { useEffect, useMemo, useState } from 'preact/hooks';
import { lazy, Suspense } from 'preact/compat';
import FilterBar from './FilterBar';
import EventList from './EventList';
import { applyFilters, defaultFilters, type EventData, type Filters } from '../../lib/filters';
import { filtersFromSearch, syncUrl } from '../../lib/url-state';
import { buildIndex, searchMatches } from '../../lib/search';
import { t } from '../../lib/i18n';

const EventMap = lazy(() => import('./EventMap'));

interface Props {
  events: EventData[];
  baseUrl: string;
}

type View = 'list' | 'map' | 'both';

export default function EventsExplorer({ events, baseUrl }: Props) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [view, setView] = useState<View>('both');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFilters(filtersFromSearch(window.location.search));
  }, []);

  useEffect(() => {
    if (isClient) syncUrl(filters);
  }, [filters, isClient]);

  const index = useMemo(() => buildIndex(events), [events]);
  const matches = useMemo(() => searchMatches(index, filters.query), [index, filters.query]);
  const filtered = useMemo(() => applyFilters(events, filters, matches), [events, filters, matches]);

  useEffect(() => {
    if (selectedId && !filtered.find((e) => e.slug === selectedId)) {
      setSelectedId(null);
    }
  }, [filtered, selectedId]);

  const handleSelect = (id: string | null) => {
    setSelectedId(id);
    if (id && view === 'list') {
      // No-op, list-only view, just keep selection
    }
    if (id) {
      const el = document.getElementById(`event-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div class="w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Mobile: filter toggle + view tabs */}
      <div class="lg:hidden flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setMobileFilterOpen(true)}
          class="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[var(--color-ink-100)] font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
          {t('filter.title')} ({filtered.length})
        </button>
        <div class="flex bg-white border border-[var(--color-ink-100)] rounded-xl p-1 shadow-sm">
          {(['list', 'map'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              class={`px-3 py-1.5 text-sm rounded-lg ${view === v ? 'bg-[var(--color-ink-900)] text-white' : 'text-[var(--color-ink-500)]'}`}
            >
              {v === 'list' ? t('view.list') : t('view.map')}
            </button>
          ))}
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-6">
        {/* Desktop filter sidebar */}
        <aside class="hidden lg:block lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
          <FilterBar filters={filters} onChange={setFilters} totalCount={events.length} filteredCount={filtered.length} />
        </aside>

        {/* Mobile filter drawer */}
        {mobileFilterOpen && (
          <div class="lg:hidden fixed inset-0 z-[1100] flex items-end" role="dialog" aria-modal="true">
            <div class="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
            <div class="relative w-full max-h-[85vh] overflow-y-auto bg-white rounded-t-2xl p-4 pb-8">
              <div class="flex justify-end mb-2">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  class="px-3 py-1.5 rounded-lg bg-[var(--color-ink-100)] text-sm font-medium"
                >
                  ✕
                </button>
              </div>
              <FilterBar filters={filters} onChange={setFilters} totalCount={events.length} filteredCount={filtered.length} />
            </div>
          </div>
        )}

        <div class="space-y-6">
          <div class={`grid gap-6 ${view === 'both' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
            {(view === 'map' || view === 'both') && (
              <div class={`${view === 'both' ? 'xl:order-2 xl:sticky xl:top-20 xl:self-start xl:h-[calc(100vh-7rem)]' : 'h-[60vh]'}`}>
                {isClient ? (
                  <Suspense fallback={<div class="rounded-2xl bg-[var(--color-ink-100)] animate-pulse w-full h-full" />}>
                    <EventMap events={filtered} selectedId={selectedId} onSelect={handleSelect} baseUrl={baseUrl} />
                  </Suspense>
                ) : (
                  <div class="rounded-2xl bg-[var(--color-ink-100)] w-full h-full" />
                )}
              </div>
            )}
            {(view === 'list' || view === 'both') && (
              <div class={view === 'both' ? 'xl:order-1' : ''}>
                <EventList events={filtered} selectedId={selectedId} onSelect={handleSelect} baseUrl={baseUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
