# Sport-Events Wartungs-Routine (wöchentlich)

> Arbeite im **caveman-Modus** (`/caveman full`) für Token-Effizienz. Code/JSON/Commits normal.
> Branch: **master**. Am Ende committen + auf master pushen (triggert Deployment).

## Kontext & oberstes Ziel

Diese Seite (`events.endure-cycling.com`) wurde am 3. Juni 2026 von Google **site-weit
runtergestuft** (Scaled-Content-Throttle): von ~1119 Seiten sind nur ~91 indexiert, der Rest
steht auf "Gecrawlt/Gefunden – nicht indexiert". Ursache war **zu schnelles Fluten dünner,
templatisierter Seiten auf einer jungen, backlink-losen Domain.**

**Daraus folgt die wichtigste Regel: NICHT MEHR FLUTEN.** Das Ziel dieser Routine ist ab sofort
**Qualität und Tiefe pro Seite + kontrolliertes Wachstum**, nicht maximale Menge. Jeder Lauf soll
die Domain *wertvoller* machen, nicht nur *größer*. Ein vollständiger Überblick bleibt langfristiges
Ziel — aber langsam und mit indexwürdigen Seiten, sonst hebt sich der Throttle nie.

## Harte Limits pro Lauf (Anti-Flut)

- **Maximal 15 netto-neue Events pro Lauf.** Keine Massen-Merges (kein "+200 Events"). Wenn du mehr
  Kandidaten findest, notiere sie in `progress.md` als Backlog für spätere Läufe.
- **Enrichment vor Neuanlage.** Priorität pro Lauf, in dieser Reihenfolge:
  1. Vorhandene künftige Events **vervollständigen** (fehlende `distanceKm`, `elevationGainM`,
     `imageUrl`, dünne Beschreibungen verbessern).
  2. Datenfehler/Dubletten fixen, unverifizierbare Events entfernen.
  3. Erst dann bis zu 15 neue, gut recherchierte Events anlegen.
- Wenn in einem Lauf noch viele Bestands-Events unvollständig sind: **keine** neuen anlegen, nur veredeln.

## Detailseiten-Content (gegen "Gecrawlt – nicht indexiert")

Dünne, austauschbare Seiten indexiert Google nicht. Jede Event-Detailseite muss eigenständigen Wert haben:

- **Beschreibung: 4–8 Sätze, einzigartig und faktenreich.** Keine Template-Floskeln, die auf jedem
  Event stehen könnten. Enthalten soll sein, soweit verfügbar: Streckencharakter/Highlights, konkrete
  Distanzen + Höhenmeter je Strecke, Untergrund (Straße/Gravel/Zeitfahren), Anmelde-Besonderheiten
  (Losverfahren, ausverkauft, Startlimit), Historie/Edition, regionaler Bezug. Zahlen und Eigennamen
  statt Allgemeinplätze.
- **Strukturfelder füllen:** `distanceKm` und `elevationGainM` wo aus offizieller Quelle belegbar
  (Rad + Zeitfahren; bei Triathlon Distanzsumme sinnvoll). Nur weglassen wenn keine belegbare Quelle
  (siehe Quellen-Regeln in CLAUDE.md — kein prommer.net, kein Raten).
- **Ziel je Lauf:** mindestens 20 künftige Events inhaltlich anreichern (Felder + Beschreibung),
  auch wenn keine neuen dazukommen.

## Vergangene Events (großer SEO-Hebel)

Aktuell sind ~43% der Seiten bereits vergangene Rennen — reines Ballast-Signal (keine Suchnachfrage,
verdünnt die Domain). Behandlung:

- Events deren Datum **vor heute** liegt: auf `noindex` setzen (siehe Umsetzung unten), damit Google
  Index-Budget auf künftige Rennen konzentriert. Nicht löschen (Datenwert bleibt, evtl. Folgeausgabe).
- Wenn eine **Folgeausgabe** (nächstes Jahr / nächste Saison) offiziell bestätigt ist: Event auf das
  neue Datum aktualisieren statt neu anlegen.
- Vergangene Events sind bei imageUrl/Enrichment **niedrigste Priorität** (können übersprungen werden).

**Umsetzung noindex:** Falls noch nicht vorhanden, `BaseLayout`/Event-Detailseite so erweitern, dass
Events mit Startdatum < heute `<meta name="robots" content="noindex, follow">` ausgeben und aus der
Sitemap ausgeschlossen werden. Wenn du das änderst, dokumentiere es in `progress.md`.

## Verifikation (keine Halluzination)

- Jedes Event **muss ein Datum haben.** Kein Datum aus offizieller Quelle verifizierbar → Event
  **entfernen** (bzw. gar nicht anlegen).
- Vor Anlage/Update: **offizielle Veranstalter- oder Verbandsseite** prüfen, dass die 2026-Ausgabe
  wirklich stattfindet (siehe CLAUDE.md "Verifying an Event Actually Happens" + Quellen-Zuverlässigkeit).
- Aggregatoren (cycloworld, triafreunde, hdsports, ahotu …) nur als **Erst-Metadaten/Discovery**,
  Fakten immer gegen die offizielle Quelle gegenprüfen. Widerspruch → Feld weglassen statt raten.
- Abgesagte/pausierte Events in die "Known Cancelled"-Liste in CLAUDE.md eintragen, damit sie nicht
  im nächsten Lauf wieder auftauchen.

## Recherche-Umfang

Discovery-Quellen (Erst-Metadaten, dann offiziell gegenprüfen):
- Rad AT/DE + Zeitfahren: https://www.cycloworld.cc/de/kalender-de
- Triathlon DE: https://www.triathlondeutschland.de/termine/veranstaltungskalender
- Triathlon AT: https://www.triathlon-austria.at/de/service-termine
- Triathlon europaweit (Discovery, gegen offizielle Quelle prüfen): https://www.k226.com/events/events.aspx
- **Ironman & Challenge (europaweit, Mittel- + Langdistanz):** offizielle Übersichts-/Kalenderseiten
  von ironman.com und challenge-family.com, die Rennen direkt auflisten.
- **Große bekannte Radrennen europaweit:** UCI Gran Fondo World Series, etablierte Marathons/Etappenrennen.

Fokus AT/DE für Breite; Ironman/Challenge + Radklassiker europaweit. Neue `country`/`category`-Werte
bei Bedarf in `src/lib/types.ts` ergänzen (Zod übernimmt automatisch) — neue Filter nur anlegen wenn
inhaltlich nötig, nicht spekulativ.

## imageUrl

- Für **künftige** Events ohne `imageUrl`: passendes offizielles Veranstaltungsbild suchen (Hero der
  offiziellen Seite, ≥1200×630, 1.91:1 oder 16:9). Regeln + Referer-Block-Hinweis in CLAUDE.md.
- Vergangene Events: optional, niedrigste Priorität.

## SEO / Sitemap — jeden Lauf prüfen

- `sitemap` (`@astrojs/sitemap`) baut korrekt, enthält alle **indexierbaren** URLs, keine noindex-URLs.
- JSON-LD aktuell: `SportsEvent` auf Detailseiten (Datum, Ort, Geo, Offers), `ItemList`/`Breadcrumb`
  auf Landingpages, `Organization`/`WebSite` auf Startseite. Bei neuen Feldern/Kategorien mitziehen.
- `npm run build` muss grün sein (Zod-Validierung). Bei Schema-Fehler: fixen, nicht umgehen.

## Gedächtnis zwischen Läufen (rollender Memory)

Memory-Datei: `claude-automation/sport-events-checker/progress.md`. Sie ist **rollend** aufgebaut —
nicht unbegrenzt anhängen, sondern aktuell halten:

**Zu Beginn lesen:** den Block `## STATE (rolling)` am Dateikopf. Er steuert den Lauf:
- **Kennzahlen** (Event-Gesamtzahl, upcoming/past, letzter Lauf/Commit) — als Ausgangsbasis.
- **BLACKLIST** — abgesagte/eingestellte/nicht verifizierbare Events. Diese **nicht** neu anlegen.
- **ZU PRÜFEN** — Phantom-Verdachtsfälle: vorhandene Events gegen offizielle Quelle verifizieren,
  bei bestätigtem Nicht-Stattfinden entfernen und in die BLACKLIST verschieben.
- **BACKLOG** — offene Enrichment-/Kandidaten-Aufgaben zuerst abarbeiten.
- **QUELLEN-STAND** — die am längsten nicht geprüften Discovery-Quellen bevorzugt re-checken.

**Am Ende fortschreiben (rollend halten):**
- STATE-Block aktualisieren: Kennzahlen neu, BLACKLIST um neu entfernte/abgesagte Events ergänzen
  (mit Grund), ZU-PRÜFEN abarbeiten, BACKLOG abhaken/ergänzen, QUELLEN-STAND mit heutigem Datum je
  tatsächlich geprüfter Quelle.
- Kurzes Lauf-Summary **oberhalb** der bisherigen Session-Einträge einfügen.
- **Nur die letzten 3 Session-Summaries im Detail behalten.** Ältere nach
  `progress-archive.md` auslagern, damit `progress.md` kompakt bleibt (Richtwert < 300 Zeilen).

## Abschluss

- `npm run build` grün → committen (aussagekräftige Messages) → **push auf master**.
- Kurzes Lauf-Summary in `progress.md`.
