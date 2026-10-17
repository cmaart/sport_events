# Sport-Events Wartungs-Routine (wöchentlich)

> Arbeite im **caveman-Modus** (`/caveman full`) für Token-Effizienz. Code/JSON/Commits normal.
> Branch: **master**. Am Ende committen + auf master pushen (triggert Deployment).

## Kontext & oberstes Ziel

Diese Seite (`events.endure-cycling.com`) wurde am 3. Juni 2026 von Google **site-weit
runtergestuft** (Scaled-Content-Throttle): von ~1119 Seiten sind nur ~91 indexiert, der Rest
steht auf "Gecrawlt/Gefunden – nicht indexiert". Ursache war **zu schnelles Fluten dünner,
templatisierter Seiten auf einer jungen, backlink-losen Domain.**

**Daraus folgt die wichtigste Regel: KEINE DÜNNEN SEITEN.** Ziel ist ein vollständiger Überblick,
aber jede Seite muss **Qualität und Tiefe** haben — indexwürdig statt austauschbar. Seit 2026-09-24
gibt es kein Mengen-Limit pro Lauf mehr; die Bremse ist das Qualitäts-Gate (siehe „Neuanlagen").

## Fokus-Set: die 150 indexierbaren Seiten (seit 2026-10-17 — höchste Priorität)

Seit 2026-10-17 ist **nur noch ein kleines Fokus-Set von Event-Seiten indexierbar** (`robots: index`
+ Sitemap). Alle anderen Event-Seiten sind `noindex, follow` — sie bleiben online und verlinkt,
zählen aber nicht in Googles Qualitätsurteil über die Site. Landingpages sind nur indexierbar, wenn
sie ≥ 3 Fokus-Events enthalten. Hintergrund: Google hatte am 01.06.2026 die komplette Subdomain
auf 0 indexierte Seiten gesetzt (Startseite inklusive „Gecrawlt – nicht indexiert"); Bing indexiert
parallel ~7.000 Seiten. Der Weg zurück führt über wenige, dichte, DE/AT-fokussierte Seiten.

- **Liste:** `src/data/index-focus.json` (Slugs, Stand, Verteilung nach Land). **Nicht von Hand
  editieren**, sondern mit `node scripts/select-index-focus.mjs` neu erzeugen. Das Script ist
  *sticky*: bestehende Einträge bleiben, bis sie vergangen oder gelöscht sind; frei gewordene Plätze
  werden mit den bestpunktierten Kandidaten aufgefüllt (DE/AT bekommen +30 Bonus, Events mit Start
  in < 60 Tagen −20). `--dry-run` zeigt die Tabelle, `--report` die Score-Begründung je Slug,
  `--rebuild` ignoriert die bestehende Liste (nur bewusst einsetzen, Churn ist selbst ein Signal).
- **Limit 150 bleibt, bis Google Seiten aus dem Set indexiert.** Erst wenn Search Console für das
  Set „Indexiert" meldet (User prüft), wird `--limit` schrittweise erhöht (z. B. +50). Nicht
  eigenmächtig erhöhen.
- **Enrichment-Reihenfolge pro Lauf (ersetzt die alte Reihenfolge, s. u.):**
  1. **Fokus-Events zuerst.** `node scripts/select-index-focus.mjs --report` ausführen; die
     Einträge am Tabellenende („weakest in set") und alle Fokus-Events ohne die neuen Tiefenfelder
     zuerst anfassen. Ziel je Fokus-Seite: Beschreibung ≥ 120 Wörter mit Streckencharakter, Historie,
     Anmelde-Besonderheiten **und** so viele der Tiefenfelder wie offiziell belegbar:
     `distances` (alle Strecken mit km, Höhenmeter, bei Triathlon `split`), `entryFee` (so wie der
     Veranstalter es schreibt, inkl. Staffelung), `registrationDeadline`, `startTime`,
     `participantLimit`. Ohne offizielle Quelle Feld weglassen — nie schätzen.
  2. Fokus-Events auf Absage/Terminänderung prüfen (ein Fokus-Platz für ein Phantom ist der
     teuerste Fehler). Abgesagt → Datei entfernen oder `confirmed:false`, BLACKLIST, Script neu
     laufen lassen, damit der Platz nachbesetzt wird.
  3. Erst danach Nicht-Fokus-Events anreichern und neue Events anlegen.
- **Mindestens 15 Fokus-Events pro Lauf vertiefen** (Tiefenfelder + Beschreibung). Das ist das
  Hauptziel jedes Laufs, Neuanlagen sind nachrangig.
- **Neue starke DE/AT-Events** (Klassiker, Ironman/Challenge, große Radmarathons) werden nur dann
  Teil des Sets, wenn ein Platz frei wird oder das Limit steigt; das entscheidet das Script.
- Nach jedem Lauf: `node scripts/select-index-focus.mjs` (ohne Flags) ausführen und die
  aktualisierte JSON mit committen. Die Zusammenfassung (kept/added/dropped, Länderverteilung,
  „weakest in set") in `progress.md` → STATE → FOKUS übernehmen.
- Startseite und Event-Detailseiten verlinken automatisch in das Set („Weitere Rennen …");
  Verlinkung nicht manuell nachbauen.

## Saisonen: 2026 auslaufend, 2027 Zielsaison (seit 2026-09-16)

Die Site führt mehrere Saisonen parallel (`SEASONS` in `src/lib/types.ts`, UI-Toggle im Filter,
Default 2027). Ein Event gehört zur Saison seines **Startjahres**; pro Ausgabe existiert **eine
eigene JSON-Datei** mit Jahres-Suffix (`<slug>-2026.json`, `<slug>-2027.json`).

- **Neue Events werden ab jetzt als 2027-Ausgaben angelegt** (Dateiname `-2027`, `dates.start` in
  2027). Rest-2026-Events (Okt–Dez 2026) nur noch anlegen, wenn sie klar in Scope und verifiziert
  sind — sie sind in wenigen Wochen past/noindex, also geringer Wert.
- **Folgeausgabe eines bestehenden 2026-Events:** NICHT die 2026-Datei umdatieren. Stattdessen
  `<slug>-2027.json` als Kopie anlegen und gegen die offizielle Seite aktualisieren (Datum,
  Anmelde-URL, Distanzen/Höhenmeter bei Streckenänderung, Auflagen-Nummer/Jubiläum in der
  Beschreibung, `imageUrl` wenn neues Hero). Die Beschreibung darf nicht 1:1 identisch bleiben —
  mindestens Datum/Auflage/Neuerungen einarbeiten, sonst wertet Google beide Seiten als Duplikat.
  Die Detailseite verlinkt Ausgaben mit gleichem Slug-Stamm automatisch („Weitere Ausgaben").
- **2027-Priorität bei Neuanlagen:** zuerst die 2027-Ausgaben der bestehenden, gut gepflegten
  2026-Events (Klassiker, Ironman/Challenge, große Radmarathons) — die sind verifizierbar, haben
  Suchnachfrage und guten Content. Erst danach ganz neue Events.
- **Verifikation 2027:** Eine 2026-Durchführung ist kein Beleg für 2027. Offizielle Seite muss
  2027-Termin nennen („Save the date", Anmeldung offen, Termin im Kalender). Nur Signal der
  Fortführung ohne konkreten Tag → `confirmed: false` mit gleichem Wochenende wie 2026 als Schätzung
  (Datum muss in 2027 liegen). Nichts dergleichen → nicht anlegen, im BACKLOG „re-check" notieren.
- **Kennzahlen in `progress.md` pro Saison führen** (2026 upcoming/past, 2027 gesamt/confirmed).
- **Slug-Konvention prüfen:** 2027-Datei braucht denselben Stamm wie die 2026-Datei, damit die
  Ausgaben-Verlinkung greift (`tour-de-kaernten-2026` ↔ `tour-de-kaernten-2027`).

## Neuanlagen & Priorität pro Lauf

- **Kein Mengen-Limit für neue Events** (seit 2026-09-24 aufgehoben). Alle verifizierten Kandidaten
  aus den Quellen dürfen angelegt werden — 2027-Ausgaben bestehender Events eingeschlossen.
- **Qualitäts-Gate statt Mengen-Gate:** Jede neue Seite muss voll ausgearbeitet sein (Beschreibung
  4–8 Sätze nach „Detailseiten-Content", belegte Felder, offiziell verifiziertes Datum). Keine
  templatisierten Stub-Seiten, keine Massen-Merges aus Aggregator-Daten ohne Einzelprüfung. Kandidaten,
  die in diesem Lauf nicht sauber recherchiert werden können, in `progress.md` als BACKLOG notieren.
- **Reihenfolge pro Lauf:**
  1. **Fokus-Set vertiefen** (siehe Abschnitt „Fokus-Set" oben) — Tiefenfelder + Beschreibung für
     mindestens 15 Fokus-Events.
  2. Übrige künftige Events **vervollständigen** (fehlende `distanceKm`, `elevationGainM`,
     `imageUrl`, dünne Beschreibungen verbessern).
  3. Datenfehler/Dubletten fixen, unverifizierbare Events entfernen.
  4. Neue, gut recherchierte Events anlegen (Zielsaison 2027, siehe oben).

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
- **Tiefenfelder (seit 2026-10-17, Schema in `src/content.config.ts`, Beispiel in `_template.json`):**
  `distances[]` (`name`, `km`, optional `elevationGainM`, bei Triathlon `split` wie
  „1,9 km / 90 km / 21,1 km"), `entryFee` (Freitext wie vom Veranstalter, z. B. „ab 89 €" oder
  „45–65 €"), `registrationDeadline` (ISO-Datum), `startTime` („HH:MM" des ersten Starts),
  `participantLimit` (Zahl). Sie erscheinen als Eckdaten + Streckentabelle auf der Detailseite und
  fließen ins `SportsEvent`-JSON-LD (`offers.price`, `validThrough`, `maximumAttendeeCapacity`).
  Pflicht-Ziel für Fokus-Events, willkommen für alle anderen.
- **Ziel je Lauf:** mindestens 20 künftige Events inhaltlich anreichern (Felder + Beschreibung),
  auch wenn keine neuen dazukommen.

## Vergangene Events (großer SEO-Hebel)

Aktuell sind ~43% der Seiten bereits vergangene Rennen — reines Ballast-Signal (keine Suchnachfrage,
verdünnt die Domain). Behandlung:

- Events deren Datum **vor heute** liegt: auf `noindex` setzen (siehe Umsetzung unten), damit Google
  Index-Budget auf künftige Rennen konzentriert. Nicht löschen (Datenwert bleibt, evtl. Folgeausgabe).
- Wenn eine **Folgeausgabe** (2027) offiziell bestätigt ist: **neue Datei `<slug>-2027.json`**
  anlegen (siehe Abschnitt Saisonen) — die 2026-Datei bleibt unverändert und wird past/noindex.
- Vergangene Events sind bei imageUrl/Enrichment **niedrigste Priorität** (können übersprungen werden).

**Umsetzung noindex:** Falls noch nicht vorhanden, `BaseLayout`/Event-Detailseite so erweitern, dass
Events mit Startdatum < heute `<meta name="robots" content="noindex, follow">` ausgeben und aus der
Sitemap ausgeschlossen werden. Wenn du das änderst, dokumentiere es in `progress.md`.

## Verifikation (keine Halluzination)

- Jedes Event **muss ein Datum haben.** Kein Datum aus offizieller Quelle verifizierbar → Event
  **entfernen** (bzw. gar nicht anlegen).
- Vor Anlage/Update: **offizielle Veranstalter- oder Verbandsseite** prüfen, dass die Ausgabe der
  jeweiligen Saison (neu: 2027) wirklich stattfindet (siehe CLAUDE.md "Verifying an Event Actually Happens" + Quellen-Zuverlässigkeit).
- Aggregatoren (cycloworld, triafreunde, hdsports, ahotu …) nur als **Erst-Metadaten/Discovery**,
  Fakten immer gegen die offizielle Quelle gegenprüfen. Widerspruch → Feld weglassen statt raten.
- Abgesagte/pausierte Events in die "Known Cancelled"-Liste in CLAUDE.md eintragen, damit sie nicht
  im nächsten Lauf wieder auftauchen.

## Recherche-Umfang

**Alle folgenden Quellen werden in JEDEM Lauf vollständig durchsucht** (keine Rotation). Jeder Lauf
gleicht sie gegen den Bestand ab: neue Events → Kandidaten, geänderte Termine und Absagen → übernehmen
(nach offizieller Prüfung). Kein Mengen-Limit; Kandidaten, die nicht sauber recherchiert werden
können, kommen in den BACKLOG. Für 2027 die Kalender explizit auf das Jahr 2027
umstellen (Jahres-Filter/URL-Parameter) — viele zeigen per Default noch die laufende Saison.

Verbands-/Serienquellen (offiziell — für Datum/Durchführung vertrauenswürdig; Distanzen/Details wenn
möglich auf der Veranstalterseite gegenprüfen):
- Triathlon AT (ÖTRV): https://www.triathlon-austria.at/de/service-termine — maßgebliche Liste für
  österreichische Triathlons/Duathlons/Aquathlons, inkl. „ABGESAGT"-Markierungen.
- Triathlon DE (DTU): https://www.triathlondeutschland.de/termine/veranstaltungskalender
- Ironman & Challenge (europaweit, Mittel- + Langdistanz): offizielle Übersichts-/Kalenderseiten von
  ironman.com und challenge-family.com, die Rennen direkt auflisten.
- Große bekannte Radrennen europaweit: UCI Gran Fondo World Series, etablierte Marathons/Etappenrennen.

Aggregatoren (nur Discovery — Fakten immer gegen die offizielle Veranstalterseite prüfen):
- Rad AT/DE + Zeitfahren: https://www.cycloworld.cc/de/kalender-de
- Triathlon europaweit: https://www.k226.com/events/events.aspx
- Rad AT/DE (hdsports): https://www.hdsports.at/rad — paginiert (`?page=2`, `?page=3` …), alle Seiten
  durchgehen; Detailseiten `/rad/<slug>` zeigen auch schon 2027-Termine.
- Triathlon AT/DE (hdsports): https://www.hdsports.at/triathlonkalender — paginiert wie oben.

Fokus AT/DE für Breite; Ironman/Challenge + Radklassiker europaweit. Neue `country`/`category`-Werte
bei Bedarf in `src/lib/types.ts` ergänzen (Zod übernimmt automatisch) — neue Filter nur anlegen wenn
inhaltlich nötig, nicht spekulativ.

## imageUrl

- Für **künftige** Events ohne `imageUrl`: passendes offizielles Veranstaltungsbild suchen (Hero der
  offiziellen Seite, ≥1200×630, 1.91:1 oder 16:9). Regeln + Referer-Block-Hinweis in CLAUDE.md.
- Vergangene Events: optional, niedrigste Priorität.

## SEO / Sitemap — jeden Lauf prüfen

- `sitemap` (`@astrojs/sitemap`) baut korrekt, enthält **nur** Startseite, Formulare, die Fokus-Events
  und Landingpages mit ≥ 3 Fokus-Events (Stand 10-17: 157 URLs). Keine noindex-URLs. Nach dem Build
  `grep -c '/events/' dist/sitemap-0.xml` muss der Fokus-Zahl entsprechen.
- Landingpages sind pro Jahr (`/radrennen/oesterreich/2027`) und entstehen ab 3 Events je
  Sport × Land × Jahr automatisch — kein manuelles Anlegen nötig.
- JSON-LD aktuell: `SportsEvent` auf Detailseiten (Datum, Ort, Geo, Offers), `ItemList`/`Breadcrumb`
  auf Landingpages, `Organization`/`WebSite` auf Startseite. Bei neuen Feldern/Kategorien mitziehen.
- `npm run build` muss grün sein (Zod-Validierung). Bei Schema-Fehler: fixen, nicht umgehen.

## Gedächtnis zwischen Läufen (rollender Memory)

Memory-Datei: `claude-automation/sport-events-checker/progress.md`. Sie ist **rollend** aufgebaut —
nicht unbegrenzt anhängen, sondern aktuell halten:

**Zu Beginn lesen:** den Block `## STATE (rolling)` am Dateikopf. Er steuert den Lauf:
- **Kennzahlen** (Event-Gesamtzahl, je Saison upcoming/past bzw. gesamt/confirmed, letzter
  Lauf/Commit) — als Ausgangsbasis.
- **BLACKLIST** — abgesagte/eingestellte/nicht verifizierbare Events. Diese **nicht** neu anlegen.
- **ZU PRÜFEN** — Phantom-Verdachtsfälle: vorhandene Events gegen offizielle Quelle verifizieren,
  bei bestätigtem Nicht-Stattfinden entfernen und in die BLACKLIST verschieben.
- **BACKLOG** — offene Enrichment-/Kandidaten-Aufgaben zuerst abarbeiten.
- **QUELLEN-STAND** — Nachweis, wann jede Quelle zuletzt durchsucht wurde. Alle Quellen werden jeden
  Lauf geprüft; ist eine Quelle nicht erreichbar/geblockt, dort vermerken und nächsten Lauf erneut versuchen.

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
