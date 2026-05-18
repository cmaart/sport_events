import { useEffect, useRef } from 'preact/hooks';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import type { EventData } from '../../lib/filters';
import { formatDateRange, t } from '../../lib/i18n';

interface Props {
  events: EventData[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onShowInList?: (id: string) => void;
  baseUrl: string;
}

const DACH_CENTER: L.LatLngTuple = [49.5, 11.5];
const DACH_BOUNDS = L.latLngBounds([46.3, 5.8], [55.1, 17.2]);
const INITIAL_ZOOM = 6;

const makeIcon = (sport: 'cycling' | 'triathlon', selected: boolean) => {
  const color = sport === 'cycling' ? '#F05D23' : '#d63c6b';
  const size = selected ? 36 : 28;
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 4px 10px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:white;font-size:14px;font-weight:700;${selected ? 'transform:scale(1.15);' : ''}">${sport === 'cycling' ? '🚴' : '🏊'}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

export default function EventMap({ events, selectedId, onSelect, onShowInList, baseUrl }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const clusterRef = useRef<L.MarkerClusterGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onShowInListRef = useRef(onShowInList);
  onShowInListRef.current = onShowInList;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      scrollWheelZoom: true,
      worldCopyJump: true,
    });
    map.setView(DACH_CENTER, INITIAL_ZOOM);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const cluster = L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      maxClusterRadius: 45,
      iconCreateFunction: (c) => {
        const n = c.getChildCount();
        const size = n < 10 ? 32 : n < 30 ? 40 : 48;
        return L.divIcon({
          html: `<div class="cluster-icon" style="width:${size}px;height:${size}px;font-size:${size > 40 ? 16 : 14}px;">${n}</div>`,
          className: '',
          iconSize: [size, size],
        });
      },
    });
    map.addLayer(cluster);
    mapRef.current = map;
    clusterRef.current = cluster;

    // Re-sync size after the container has been laid out
    const raf = requestAnimationFrame(() => {
      map.invalidateSize();
      map.setView(DACH_CENTER, INITIAL_ZOOM, { animate: false });
    });

    // Keep the map's internal size in sync with container resizes
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
      clusterRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Update markers when events change
  useEffect(() => {
    const cluster = clusterRef.current;
    if (!cluster) return;
    cluster.clearLayers();
    markersRef.current.clear();

    events.forEach((e) => {
      const marker = L.marker([e.location.lat, e.location.lng], {
        icon: makeIcon(e.sport, e.slug === selectedId),
      });
      const start = new Date(e.dates.start);
      const end = e.dates.end ? new Date(e.dates.end) : undefined;
      const dateLabel = e.dates.confirmed ? formatDateRange(start, end) : t('event.date.tba');
      const sportLabel = e.sport === 'cycling' ? t('filter.sport.cycling') : t('filter.sport.triathlon');
      const placeLine = e.location.region ? `${e.location.name} · ${e.location.region}` : e.location.name;
      marker.bindPopup(`
        <div style="min-width:200px">
          <div style="font-size:11px;text-transform:uppercase;color:#64748b;letter-spacing:.05em;margin-bottom:4px;">${sportLabel}</div>
          <div style="font-weight:600;margin-bottom:2px;">${e.name}</div>
          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">${placeLine}</div>
          <div style="font-size:12px;margin-bottom:8px;">${dateLabel}</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <a href="${baseUrl}/events/${e.slug}/" style="color:#F05D23;font-size:13px;text-decoration:none;font-weight:500;">${t('event.details')} →</a>
            <button type="button" data-show-in-list="${e.slug}" style="align-self:flex-start;background:none;border:none;padding:0;color:#475569;font-size:12px;text-decoration:underline;cursor:pointer;font-family:inherit;">${t('event.showInList')}</button>
          </div>
        </div>
      `);
      marker.on('click', () => onSelect(e.slug));
      marker.on('popupopen', (ev) => {
        const root = (ev as L.PopupEvent).popup.getElement();
        const btn = root?.querySelector<HTMLButtonElement>('button[data-show-in-list]');
        if (btn) {
          btn.onclick = () => {
            const slug = btn.getAttribute('data-show-in-list');
            if (slug) onShowInListRef.current?.(slug);
          };
        }
      });
      cluster.addLayer(marker);
      markersRef.current.set(e.slug, marker);
    });

    if (events.length > 0 && mapRef.current) {
      const map = mapRef.current;
      const group = L.featureGroup(events.map((e) => L.marker([e.location.lat, e.location.lng])));
      const bounds = group.getBounds();
      if (bounds.isValid()) {
        // Defer so container size is accurate when bounds are calculated
        requestAnimationFrame(() => {
          map.invalidateSize();
          map.fitBounds(bounds.pad(0.15), { maxZoom: 11, animate: true });
        });
      }
    } else if (mapRef.current) {
      // No events match — show DACH overview
      const map = mapRef.current;
      requestAnimationFrame(() => {
        map.invalidateSize();
        map.fitBounds(DACH_BOUNDS, { animate: true });
      });
    }
  }, [events, baseUrl]);

  // Update selected marker icon + open popup
  useEffect(() => {
    markersRef.current.forEach((marker, slug) => {
      const event = events.find((e) => e.slug === slug);
      if (event) {
        marker.setIcon(makeIcon(event.sport, slug === selectedId));
      }
    });
    if (selectedId) {
      const marker = markersRef.current.get(selectedId);
      const map = mapRef.current;
      if (marker && map) {
        const cluster = clusterRef.current;
        if (cluster) {
          cluster.zoomToShowLayer(marker, () => {
            marker.openPopup();
          });
        }
      }
    }
  }, [selectedId, events]);

  return (
    <div
      ref={containerRef}
      class="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-[var(--color-ink-100)] shadow-sm"
      aria-label="Karte mit Sportevents in Österreich und Deutschland"
    />
  );
}
