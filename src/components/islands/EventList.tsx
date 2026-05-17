import { useMemo, useState } from 'preact/hooks';
import type { EventData } from '../../lib/filters';
import { sortEvents } from '../../lib/filters';
import { formatDateRange, t } from '../../lib/i18n';

interface Props {
  events: EventData[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  baseUrl: string;
}

type SortKey = 'dateAsc' | 'dateDesc' | 'nameAsc';

export default function EventList({ events, selectedId, onSelect, baseUrl }: Props) {
  const [sort, setSort] = useState<SortKey>('dateAsc');
  const sorted = useMemo(() => sortEvents(events, sort), [events, sort]);

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
      <ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-3">
        {sorted.map((e) => {
          const start = new Date(e.dates.start);
          const end = e.dates.end ? new Date(e.dates.end) : undefined;
          const dateLabel = e.dates.confirmed ? formatDateRange(start, end) : t('event.date.tba');
          const isSelected = selectedId === e.slug;
          const sportColor = e.sport === 'cycling'
            ? 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)]'
            : 'bg-orange-100 text-orange-700';
          return (
            <li
              key={e.slug}
              id={`event-${e.slug}`}
              class={`rounded-2xl bg-white border transition cursor-pointer ${
                isSelected
                  ? 'border-[var(--color-brand-500)] shadow-md ring-2 ring-[var(--color-brand-500)]/20'
                  : 'border-[var(--color-ink-100)] hover:border-[var(--color-brand-500)] hover:shadow-sm'
              }`}
              onMouseEnter={() => onSelect(e.slug)}
              onClick={() => onSelect(e.slug)}
            >
              <a href={`${baseUrl}/events/${e.slug}/`} class="block p-4">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <span class={`inline-flex items-center text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-full ${sportColor}`}>
                    {e.sport === 'cycling' ? t('filter.sport.cycling') : t('filter.sport.triathlon')}
                  </span>
                  <span class="text-xs text-[var(--color-ink-500)] text-right shrink-0">{dateLabel}</span>
                </div>
                <h3 class="font-semibold leading-snug mb-1">{e.name}</h3>
                <p class="text-xs text-[var(--color-ink-500)] mb-2">{e.location.name} · {e.location.region}</p>
                <div class="flex flex-wrap gap-1 mb-2">
                  {e.categories.map((c) => (
                    <span key={c} class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-ink-100)] text-[var(--color-ink-700)]">{c}</span>
                  ))}
                </div>
                <div class="flex gap-3 text-xs text-[var(--color-ink-500)]">
                  {e.distanceKm && <span><strong class="text-[var(--color-ink-900)]">{e.distanceKm}</strong> {t('event.distance.unit')}</span>}
                  {e.elevationGainM && <span><strong class="text-[var(--color-ink-900)]">{e.elevationGainM}</strong> {t('event.elevation.unit')}</span>}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
