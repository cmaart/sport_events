import { useEffect, useMemo, useState } from 'preact/hooks';
import type { EventData } from '../../lib/filters';
import { sortEvents } from '../../lib/filters';
import { formatDateRange, t } from '../../lib/i18n';
import { COUNTRY_LABELS, isRtf } from '../../lib/types';

interface Props {
  events: EventData[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  baseUrl: string;
}

type SortKey = 'dateAsc' | 'dateDesc' | 'nameAsc';

const PAGE_SIZE = 30;

export default function EventList({ events, selectedId, onSelect, baseUrl }: Props) {
  const [sort, setSort] = useState<SortKey>('dateAsc');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sorted = useMemo(() => sortEvents(events, sort), [events, sort]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [events, sort]);

  // A map-marker selection may point at a card beyond the rendered slice —
  // grow the slice so the card exists and the explorer's scroll can find it.
  useEffect(() => {
    if (!selectedId) return;
    const idx = sorted.findIndex((e) => e.slug === selectedId);
    if (idx >= visibleCount) {
      setVisibleCount(Math.ceil((idx + 1) / PAGE_SIZE) * PAGE_SIZE);
    }
  }, [selectedId, sorted, visibleCount]);

  const visible = sorted.slice(0, visibleCount);
  const remaining = sorted.length - visible.length;

  if (events.length === 0) {
    return (
      <div class="rounded-2xl bg-white border border-dashed border-[var(--color-ink-300)] p-10 text-center">
        <p class="font-semibold text-[var(--color-ink-900)] mb-1">{t('list.empty.title')}</p>
        <p class="text-sm text-[var(--color-ink-500)]">{t('list.empty.hint')}</p>
      </div>
    );
  }

  return (
    <div>
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm text-[var(--color-ink-500)]">
          {events.length === 1 ? t('filter.results.one') : t('filter.results', { count: events.length })}
        </p>
        <label class="text-sm flex items-center gap-2">
          <span class="text-[var(--color-ink-500)]">{t('list.sort.label')}:</span>
          <select
            value={sort}
            onChange={(e) => setSort((e.target as HTMLSelectElement).value as SortKey)}
            class="px-2 py-1 rounded-md border border-[var(--color-ink-300)] bg-white text-sm"
          >
            <option value="dateAsc">{t('list.sort.dateAsc')}</option>
            <option value="dateDesc">{t('list.sort.dateDesc')}</option>
            <option value="nameAsc">{t('list.sort.nameAsc')}</option>
          </select>
        </label>
      </div>
      <ul class="grid grid-cols-1 gap-3">
        {visible.map((e) => {
          const start = new Date(e.dates.start);
          const end = e.dates.end ? new Date(e.dates.end) : undefined;
          const dateLabel = e.dates.confirmed ? formatDateRange(start, end) : t('event.date.tba');
          const isSelected = selectedId === e.slug;
          const sportColor = e.sport === 'cycling'
            ? 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)]'
            : 'bg-pink-100 text-pink-700';
          const countryFlag = COUNTRY_LABELS[e.country].flag;
          return (
            <li
              key={e.slug}
              id={`event-${e.slug}`}
              class={`rounded-2xl bg-white border transition cursor-pointer overflow-hidden ${
                isSelected
                  ? 'border-[var(--color-brand-500)] shadow-md ring-2 ring-[var(--color-brand-500)]/20'
                  : 'border-[var(--color-ink-100)] hover:border-[var(--color-brand-500)] hover:shadow-sm'
              }`}
              onClick={() => onSelect(e.slug)}
            >
              {e.imageUrl && (
                <div class="h-32 overflow-hidden">
                  <img src={e.imageUrl} alt={e.name} class="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <div class="block p-4">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <span class={`inline-flex items-center text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-full ${sportColor}`}>
                    {e.sport === 'cycling'
                      ? isRtf(e.categories)
                        ? t('sport.cycling.rtf')
                        : t('filter.sport.cycling')
                      : t('filter.sport.triathlon')}
                  </span>
                  <span class="text-xs text-[var(--color-ink-500)] text-right shrink-0">{dateLabel}</span>
                </div>
                <h3 class="font-semibold leading-snug mb-1">{e.name}</h3>
                <p class="text-xs text-[var(--color-ink-500)] mb-2">
                  <span aria-hidden="true">{countryFlag}</span> {e.location.name}{e.location.region ? ` · ${e.location.region}` : ''}
                </p>
                <div class="flex flex-wrap gap-1 mb-2">
                  {e.categories.map((c) => (
                    <span key={c} class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-ink-100)] text-[var(--color-ink-700)]">{c}</span>
                  ))}
                </div>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div class="flex gap-3 text-xs text-[var(--color-ink-500)]">
                    {e.distanceKm && <span><strong class="text-[var(--color-ink-900)]">{e.distanceKm}</strong> {t('event.distance.unit')}</span>}
                    {e.elevationGainM && <span><strong class="text-[var(--color-ink-900)]">{e.elevationGainM}</strong> {t('event.elevation.unit')}</span>}
                  </div>
                  <div class="flex flex-wrap items-center gap-1.5 ml-auto">
                    {e.registrationUrl && (
                      <a
                        href={e.registrationUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(ev) => ev.stopPropagation()}
                        aria-label={`${t('event.registration')}: ${e.name}`}
                        class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white transition"
                      >
                        {t('event.registration')}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" class="w-3 h-3" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                      </a>
                    )}
                    {e.websiteUrl && (
                      <a
                        href={e.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(ev) => ev.stopPropagation()}
                        aria-label={`${t('event.website')}: ${e.name}`}
                        class="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-[var(--color-ink-300)] hover:border-[var(--color-brand-500)] text-[var(--color-ink-700)] transition"
                      >
                        {t('event.website')}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" class="w-3 h-3" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                      </a>
                    )}
                    <a
                      href={`${baseUrl}/events/${e.slug}/`}
                      onClick={(ev) => ev.stopPropagation()}
                      class="text-xs font-medium text-[var(--color-brand-700)] hover:text-[var(--color-brand-500)] px-1 shrink-0"
                    >
                      {t('event.details')} →
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {remaining > 0 && (
        <div class="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[var(--color-ink-300)] hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-700)] font-medium text-sm shadow-sm transition"
          >
            {t('list.loadMore', { count: remaining })}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}
