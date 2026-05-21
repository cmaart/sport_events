# Amateur-Sportevents · AT & DE

Statische Website mit einer kuratierten Übersicht aller Amateur-Radrennen und Triathlons in **Österreich und Deutschland** (Saison 2026) — interaktive Karte, mächtige Filter, mobil-freundlich. Präsentiert von [Endure Cycling](https://endure-cycling.com). Gehostet auf GitHub Pages unter **https://events.endure-cycling.com**.

## Tech-Stack

- [Astro 5](https://astro.build/) mit TypeScript
- [Preact](https://preactjs.com/) für interaktive Islands (Filter, Karte)
- [Tailwind CSS v4](https://tailwindcss.com/) für Styling
- [Leaflet](https://leafletjs.com/) mit OpenStreetMap-Tiles für die Karte
- [MiniSearch](https://lucaong.github.io/minisearch/) für Fuzzy-Volltextsuche
- Astro Content Collections + Zod für typsichere Event-Daten

## Lokal entwickeln

```bash
npm install
npm run dev
```

Site läuft dann auf <http://localhost:4321/>.

```bash
npm run build      # Produktions-Build nach ./dist
npm run preview    # Build lokal previewen
npm run check      # Astro-Type-Check
```

## Event hinzufügen

Jedes Event ist eine eigene JSON-Datei unter `src/content/events/`.

### Schritt-für-Schritt

1. Repo forken oder neuen Branch anlegen.
2. `src/content/events/_template.json` nach `src/content/events/<kebab-slug>-2026.json` kopieren.
3. Felder ausfüllen (siehe Schema unten).
4. Koordinaten via [openstreetmap.org](https://www.openstreetmap.org/) holen: Rechtsklick auf Veranstaltungsort → "Adresse anzeigen" → Lat/Lng aus der URL bzw. dem Panel kopieren.
5. Lokal `npm run dev` starten — Zod-Validierungsfehler werden direkt angezeigt.
6. Pull Request öffnen. CI baut die Site; Merge nach `main` deployt automatisch.

### Event-Schema

```json
{
  "id": "eindeutige-id-2026",
  "name": "Eventname",
  "sport": "cycling | triathlon",
  "categories": ["Gran Fondo", "Radmarathon"],
  "country": "AT",
  "dates": {
    "start": "2026-06-15",
    "end": "2026-06-15",
    "confirmed": true
  },
  "location": {
    "name": "Ortsname",
    "lat": 47.5,
    "lng": 13.5,
    "region": "Salzburg"
  },
  "websiteUrl": "https://example.com",
  "registrationUrl": "https://example.com/anmeldung",
  "imageUrl": "https://example.com/hero.jpg",
  "description": "Mehrzeilige Beschreibung.",
  "distanceKm": 120,
  "elevationGainM": 1800
}
```

### Erlaubte Werte

- **`sport`**: `cycling`, `triathlon`
- **`categories`** (Radrennen): `Kriterium`, `Gran Fondo`, `Radmarathon`, `Rundstreckenrennen`, `Etappenrennen`, `Berg`
- **`categories`** (Triathlon): `Sprintdistanz`, `Olympische Distanz`, `Mitteldistanz`, `Langdistanz`, `Cross-Triathlon`
- **`country`**: `AT` oder `DE` (Pflichtfeld)
- **`location.region`** (optional, nur für AT-Bundesländer): `Wien`, `Niederösterreich`, `Oberösterreich`, `Salzburg`, `Steiermark`, `Kärnten`, `Tirol`, `Vorarlberg`, `Burgenland`. Für DE-Events weglassen.
- **`dates.confirmed`**: `false` setzen, wenn der genaue Termin 2026 noch nicht offiziell bestätigt ist. Die Karte/Liste zeigt dann „Datum noch offen“ statt des Datums.
- **`imageUrl`** (optional): URL eines Hero-Bilds vom Veranstalter, das beim Teilen der Event-Detailseite auf WhatsApp, LinkedIn oder Facebook als Preview angezeigt wird. Empfehlung: mindestens 1200×630 px im Seitenverhältnis 1.91:1 (16:9 wie 1920×1080 wird ebenfalls sauber gecroppt). Bei Hotlink-Sperre des Veranstalters oder schlechter Bildqualität das Feld besser weglassen — dann wird das Default-OG-Bild der Seite verwendet.

## Datenqualität

Viele Events sind **noch nicht offiziell für 2026 bestätigt** — sie sind als `"confirmed": false` markiert, und das geschätzte Datum basiert auf dem üblichen Wochenende des Vorjahres. Vor der ersten Veröffentlichung des Pakets bitte die offiziellen Eventseiten checken und Termine korrigieren.

## Deployment

Push auf `main` triggert den GitHub-Actions-Workflow (`.github/workflows/deploy.yml`):

1. `npm ci`
2. `astro build`
3. Upload des `dist/`-Ordners als Pages-Artefakt
4. Deploy via `actions/deploy-pages@v4`

### Einmalige Repo-Einrichtung

**Settings → Pages → Source = „GitHub Actions"** muss einmalig manuell im Repo aktiviert werden, sonst schlägt der Deploy-Step fehl.

## Architektur in Kürze

```
src/
├── content.config.ts           # Zod-Schema, Sport/Kategorie/Region-Enums
├── content/events/*.json       # ein Event pro Datei
├── i18n/de.json                # alle UI-Strings (vorbereitet für i18n)
├── lib/
│   ├── i18n.ts                 # t(key), formatDate
│   ├── filters.ts              # pure Filter-Funktionen
│   ├── url-state.ts            # Filter ⇄ URL-Query-Params
│   └── search.ts               # MiniSearch-Index
├── components/
│   ├── Header.astro / Footer.astro
│   ├── EventCard.astro         # statische Card
│   └── islands/
│       ├── EventsExplorer.tsx  # Parent-Insel mit State
│       ├── FilterBar.tsx       # Filter-UI
│       ├── EventList.tsx       # gefilterte Liste mit Sortierung
│       └── EventMap.tsx        # Leaflet-Karte mit Clustering
└── pages/
    ├── index.astro             # Übersicht (Karte + Liste + Filter)
    └── events/[slug].astro     # Detailseite pro Event
```

Filterzustand wird in der URL gespiegelt (z. B. `?sport=cycling&country=DE&kat=Radmarathon`), so dass Links teilbar sind.

## Lizenz

- Code: MIT
- Kartendaten: © OpenStreetMap-Mitwirkende ([ODbL](https://www.openstreetmap.org/copyright))
- Event-Inhalte: redaktioneller Aufwand der Beiträger:innen — bitte Quellen in der Event-Beschreibung referenzieren.
