import { useEffect, useRef } from 'preact/hooks';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  lat: number;
  lng: number;
  name: string;
  sport: 'cycling' | 'triathlon';
  locationName: string;
}

export default function EventDetailMap({ lat, lng, name, sport, locationName }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [lat, lng],
      zoom: 12,
      scrollWheelZoom: false,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const color = sport === 'cycling' ? '#F05D23' : '#d63c6b';
    const icon = L.divIcon({
      className: '',
      html: `<div style="width:36px;height:36px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 4px 10px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:700;">${sport === 'cycling' ? '🚴' : '🏊'}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(`<div style="font-weight:600;margin-bottom:2px;">${name}</div><div style="font-size:12px;color:#64748b;">${locationName}</div>`)
      .openPopup();

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [lat, lng, name, sport, locationName]);

  return (
    <div
      ref={containerRef}
      class="w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[var(--color-ink-100)] shadow-sm"
      aria-label={`Karte: ${name} – ${locationName}`}
    />
  );
}
