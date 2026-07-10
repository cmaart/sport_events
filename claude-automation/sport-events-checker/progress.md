# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-09)
- Events gesamt: **1132** | upcoming (>= heute): **594** | past (noindex): **538**
- Letzter Lauf: k226.com-Batch 1 (2026-07-09) — +15 europäische Tris (scope erweitert auf EU-Breite auf Userwunsch)
- Build zuletzt grün: 1182 pages, 0 errors; Sitemap ohne past-URLs (noindex ab Session 27)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- `etape-caledonia-2026` — offizielle Seite bewirbt nur 2027; prüfen ob 2026-Ausgabe
  überhaupt stattfand, sonst entfernen
- `mallorca-312-2026` — Seite zeigt nur April 2027; 2026-Austragung gegenprüfen

### BACKLOG (offene Aufgaben aus letztem Lauf)
- **k226-Batch 2 (bereits offiziell verifiziert, nur noch anlegen — je start=end):**
  - `triathlon-lac-du-bouchet-2026` (FR, Langdistanz, 2026-07-12, Cayres/Lac du Bouchet, 44.9139/3.7906, 2,7/107/21,7, 1908 Hm, triathlon-lac-du-bouchet.fr)
  - `triathlon-saint-cirq-lapopie-2026` (FR, Langdistanz, 2026-09-26, Saint-Cirq-Lapopie, 44.4658/1.6717, 3,8/180/42,2, ~2000 Hm, triathlondulot.com)
  - `openlakes-atlantique-royan-2026` (FR, Mitteldistanz, 2026-09-06, Royan, 45.628/-1.028, 1,9/90/21, 750 Hm, openlakes.eu/openlakesatlantique)
  - `100x100half-el-vendrell-2026` (ES, Mitteldistanz, 2026-09-20, El Vendrell/Coma-ruga, 41.176/1.531, 1,9/80/21, 648 Hm, 100x100half.com/en/vendrell)
  - `100x100half-platja-daro-2026` (ES, Mitteldistanz, 2026-10-04, Platja d'Aro, 41.817/3.066, 1,9/80/21, 100x100half.com/en/platja-daro)
  - `spirit-of-78-porto-2026` (PT, Mitteldistanz, 2026-10-10, Porto/Freixo, 41.148/-8.556, Distanzen n.v., spiritof78.com)
  - `ocean-lava-montenegro-kotor-2026` (ME, Mitteldistanz, 2026-10-11, Kotor, 42.424/18.771, 1,9/90/21, 500 Hm, oceanlava.me)
  - `olympusman-paphos-2026` (CY, Langdistanz, 2026-11-07, Paphos→Troodos, 34.775/32.424, 3,8/178/43, ~4920 Hm, xtri-series.com/olympusman) — **erst `CY` zu COUNTRIES in src/lib/types.ts hinzufügen!**
- k226 NICHT bestätigt (nur Aggregator-Datum, nicht anlegen): Lost Sheep Kenmare (IE), Balatonman Kenese (HU — offiziell nur Fűzfő 2026)
- Datenqualität (upcoming): fehlende distanceKm/elevationGainM, dünne Beschreibungen (siehe Session 29)

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-07 |
| triathlondeutschland.de/termine (Tri DE) | 2026-07-07 |
| triathlon-austria.at/de/service-termine (Tri AT) | 2026-07-07 |
| ironman.com Kalender (europaweit) | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-07 |
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-09 |

---

## Quellen-Durchgang: 2026-07-09 (k226.com – Batch 1, EU-Scope)
- **Scope auf Userwunsch erweitert:** nicht mehr nur DE/AT + Ironman/Challenge, sondern europaweite Tris aus k226 (weiterhin kein USA/Japan/Australien).
- Lückenanalyse: ~23 fehlende EU-Tris offiziell verifiziert (4 Research-Agents). **+15 diesen Lauf angelegt** (Anti-Flut-Grenze eingehalten), 8 verifizierte im BACKLOG als „Batch 2".
- **Neu (15):** bayman-mont-saint-michel, natureman-var, vercorsman-saint-nazaire-en-royans (FR); ican-gandia, half-madrid (ES); estrela-xtreme-manteigas (PT); vitruvian-rutland, sandman-newborough, odyssey-st-neots, cotswold-classic (GB); gelreman-arnhem (NL); eaglexman-gran-sasso, aronamen-arona (IT); axtri-aurland (NO); olympos-x (GR).
- Alle Daten gegen offizielle Veranstalter-/FFTRI-Seiten verifiziert; elevationGainM nur wo offiziell belegt; keine imageUrls (keine tauglichen Hero-Bilder gefunden).
- Nicht bestätigt/übersprungen: Lost Sheep (IE), Balatonman Kenese (HU).
- Build grün: 1182 pages, 0 errors.

---

## Quellen-Durchgang: 2026-07-09 (k226.com)
- **k226.com** vollständig durchgegangen (globaler Tri-Aggregator); Scope-Filter DE/AT + Ironman/Challenge Europa angewandt.
- Fast alle in-scope-Events bereits im Bestand (Ostseeman, KnappenMan, Allgäu-Immenstadt, Köln, Trumer, Podersdorf, Südkärntner, Uster, Extrememan Nagyátád, alle Ironman/Challenge Europa).
- **+1 neu:** `hoelle-von-q-quedlinburg-2026` (DE, Mitteldistanz, 30.08., Quedlinburg/Harz) — offiziell über hoelle-von-q.de verifiziert (10. Auflage, 2,0/83/21,1 km, 1600 Hm, Ziel Rathaus).
- Datum-Abgleich bestehender DE/AT-Events gegen k226: nur 1–2-Tage-Abweichungen nach Muster „Wochenendstart (DB) vs. Haupttag (k226)" → keine Änderung.
- Build grün: 1165 pages, 0 errors.

---

## Session date: 2026-07-07 (Session 29 – Enrichment-first Wartungslauf)

## Current state (after Session 29):
- **Total events: 1116** (unverändert; keine Neuanlagen, keine Löschungen)
- **Upcoming (>= 2026-07-07): 579 | Past (indexiert via noindex): 537**
- Build: 1164 pages, 0 errors, 0 warnings, ~72 s
- Sitemap: 627 URLs (579 künftige Event-Detailseiten + Landing/Country/Category-Seiten), keine vergangenen Events (noindex-Filter aus Session 27 aktiv)
- Latest push: (this session) — push auf master triggert Deployment

## Kontext dieses Laufs
Fokus wieder ausschließlich auf **Enrichment und Datenqualität**, keine Neuanlagen — Anti-Flut-Regel gilt. Ziel: künftige Event-Detailseiten so faktenreich machen, dass Google sie indexiert (statt "Gecrawlt/Gefunden – nicht indexiert").

## Enrichment (20 künftige Events angereichert)

**Große/bekannte Events — Beschreibungen faktenreich verdichtet und/oder Fakten korrigiert:**
- `schwarzwald-bike-marathon-furtwangen-2026` — distanceKm 94 + elevationGainM 1900 ergänzt; 28. Ausgabe, 6 Strecken (Rothaus 94/1900, Ketterer 59/1000, Scherzinger Gravel 56/880, Singer 46/700, Magna E-Cup 46/700, Jugend 46) belegt, Spendenanteil Katharinenhöhe.
- `bootshaus-gravel-bonn-2026` — distanceKm 100 ergänzt; 5. Edition, alle Strecken (100/60/Family 28/24/300), Ultra 400 km/6500 Hm am Vortag, Start Bootshaus OWV Oberkassel.
- `niederrhein-gravel-kalkar-2026` — distanceKm 110 ergänzt; 2. Edition, drei Distanzen 110/160/300 km mit Gravel-Anteil, Landhaus Beckmann als Start-Ziel.
- `rennsteigride-schmiedefeld-2026` — distanceKm 100 + elevationGainM 2666 ergänzt; 10. Auflage, 6 Strecken (Supermarathon 100/2666, Marathon 67/1820, Halbmarathon 36/950, E-Bike, BasicRIDE, JuniorRIDE) je einzeln recherchiert.
- `duensberg-bike-marathon-2026` — distanceKm auf 124 korrigiert + elevationGainM 2610 ergänzt; 20. Auflage, alle 5 Streckenvarianten (30/560, 41/870, 57/1030, 82/1749, 124/2610) belegt, Deutsche Meisterschaft.
- `greifenstein-bike-marathon-2026` — distanceKm 69 ergänzt; 24-jährige Historie, 23-km-Rundkurs 1-2-3 Runden, MTB Sachsen Cup.
- `sparkassen-heide-gravel-2026` — **Koordinaten korrigiert** (irrtümliches Taura b. Chemnitz → richtiges Taura in Belgern-Schildau/Dahlener Heide, 51.454°/13.101°); distanceKm 100 + elevationGainM 900 ergänzt; alle 3 Distanzen 30/300, 60/600, 100/900 belegt, DGM-Kurs 2025.
- `letape-slovakia-2026` — distanceKm 112 + elevationGainM 1700 ergänzt; 6. Edition, THE RACE 112/1700, THE RIDE 60/900, Family Ride, Kids Race, Botschafter Velits-Brüder.
- `gfny-grand-ballon-2026` — distanceKm auf 138 korrigiert (offizielle Angabe 2026); Beschreibung um Vogesen-Klassiker (Wasserbourg 21 %, Petit Ballon, Viel Armand), FFC Gold Label und Post-Race-Feier erweitert.
- `ronde-picarde-2026` — distanceKm auf 158 + elevationGainM 1450 korrigiert; alle 5 Strecken (Sat Gravel 78/700, Sun Touring 38/284, Kurz 85/880, Mitte 117/1000, Lang 158/1450), Trikot-Regel, Preissteigerung 19.07.
- `teuto-muensterland-trophy-2026` — distanceKm auf 239 korrigiert; Marathon 239 + Halbmarathon 142 (ab Ibbenbüren) bzw. 149 (ab Warendorf), Startgebühren 30/15 €, Anmeldeschluss 29.07. 18:00 Uhr.
- `challenge-turku-2026` — **Datum-Erweiterung** (07-26 → 07-25/07-26, weil Junior/Sprint-Rennen bereits am Vortag stattfinden); alle Junior-, Youth- und Elite-Kategorien mit Distanzen belegt, Qualifier für The Championship, Suomen Triathlonliitto sanktioniert.

**Datums-/Namens-/URL-Korrekturen (kritische Datenfehler behoben):**
- `helsinki-gran-fondo-2026` — **Datum korrigiert** 2026-08-29 (Sa) → 2026-08-30 (So); offizielle Angabe "Sunday, 30 August 2026" mit Startgebühren 85–125 € und Start/Ziel am Helsinki Velodrome.
- `gravel-grit-n-grind-halmstad-2026` — **Datum verschoben** wegen Genehmigungsproblemen: 15–16.08. → **26–27.09.2026** (offizielle Ankündigung). UCI Gravel World Series (Sa) + NGS-Wertung + EM-Qualifikation Lahti 2027 (So).
- `altwarmbuchener-triathlon-hannover-2026` — **Rebranding erkannt und dokumentiert**: Event heißt jetzt "Hannover-Lahe Triathlon" (Redirect von alter Domain); websiteUrl auf hannover-lahe-triathlon.de aktualisiert; Description erklärt den früheren Namen zur Suchbarkeit.
- `flatlands-spreewald-2026` — **websiteUrl ergänzt** (gravelmania.cc/events/flatlands-spreewald, vom Veranstalter Gravelmania); distanceKm 150, "Adventure Ride kein Rennen", 100/150 km Distanzen, BBQ im STORK CLUB.

**Detailergänzungen (nur Description, keine strukturellen Felder verfügbar):**
- `kosmopiloten-paarzeitfahren-baernkopf-2026` — Route Bärnkopf→Zwettl bestätigt, negative Höhendifferenz, 25+ Jahre Historie, 2026 erstmals ZF-CUP Speed-Finale.
- `altriman-les-angles-2026` — 18. Auflage, 4 Distanzen (XXL/Half/Olympic/Sprint), Selbstverständnis "Auseinandersetzung mit sich selbst".
- `rennsteig-gravel-oberhof-2026` — 3-Klassen-System PRO/AGEGROUP/OPEN mit Zeitzielen (~4h/3h/2h), Zeitnahme via zpn-timing.de.
- `colnago-gf-luberon-2026` — 3 Distanzen (155/101/65), Ventoux Events + Pays d'Apt Luberon Tourisme als Partner.

## Datenqualität-Delta (vor → nach Session 29)
- Missing distanceKm (upcoming cycling): **17 → 9** (−8)
- Missing elevationGainM (upcoming cycling): **75 → 69** (−6)
- Thin descriptions (<200 Zeichen oder <3 Sätze): **138 → 126** (−12)
- Missing imageUrl (upcoming): 18 unverändert (überwiegend Aggregator-blockierte oder tote Domains)

## Nicht erreichbare/verifizierbare Quellen dieser Session (Backlog für Session 30)
- `piratentriathlon-amberg-2026` — piratentriathlon.de HTTP 530 (Cloudflare-Fehler)
- `cross-triathlon-karlstadt-2026` — HTTP 503, erneut
- `sauerland-rodeo-brilon-2026` — natureholix.de/sauerland-rodeo/ 404, Hauptseite hat kein Detail-Content
- `miriquidi-bike-challenge-2026` — Detail-Subpages blockieren WebFetch
- `hugenotten-duathlon-2026` — hugenotten-duathlon.de + tv-neu-isenburg.de DNS-Fehler (ENOTFOUND)
- `fuenf-seen-rundfahrt-diessen-2026` — ascyclingteam.com HTTP 403
- `granfondo-tavira-2026` — Hosting-Konto suspendiert (clubebiketeamtavira.com)
- `exmoor-beast-sportive-2026` — sportivaevents.co.uk leer/blockiert für WebFetch
- `flatlands-spreewald-2026` (Höhenmeter) — offiziell nicht veröffentlicht, "Spreewald ist flach" bewusst nicht geschätzt
- `bike-maraton-jelenia-gora-2026` — Veranstalter arbeitet noch an Content ("pracujemy nad treścią")
- `ironman-703-luxembourg-2026` — ironman.com blockiert für WebFetch

## SEO / Sitemap – Session 29 verifiziert
- `astro build` grün: 1164 pages, 0 errors, 0 warnings
- Sitemap enthält 627 URLs (579 künftige Event-Detailseiten + Landing/Category-Seiten)
- Vergangene Events korrekt aus Sitemap ausgeschlossen (0 Past-URLs) und rendern `<meta name="robots" content="noindex, follow">` (aus Session 27 stabil)
- JSON-LD (`SportsEvent`, `BreadcrumbList`) und OG/Twitter-Meta unverändert intakt

## Keine Neuanlagen
Erneut bewusster Verzicht auf neue Events. Anti-Flut-Regel + noch reichlich Bestandsevents mit Enrichment-Bedarf (126 dünne Beschreibungen, 69 fehlende Höhenmeter). Nächste Runde: gezielt an obige Backlog-Quellen (falls wieder erreichbar) und weitere kleine AT/DE-Events mit fehlenden Höhenmetern.

---

## Session date: 2026-07-02 (Session 28 – Enrichment-first Wartungslauf)

## Current state (after Session 28):
- **Total events: 1116** (1119 → −3 Duplikate = 1116)
- **Upcoming (>= 2026-07-02): 634 | Past (indexiert via noindex): 482**
- Build: 1164 pages, 0 errors, 0 warnings
- Sitemap: 682 URLs — vergangene Events korrekt ausgeschlossen (noindex-Feature aus Session 27 aktiv)
- Latest push: (this session) — push auf master triggert Deployment

## Kontext dieses Laufs
Fokus lag ausschließlich auf **Enrichment und Datenqualität**, keine Neuanlagen (Ziel: Google-Throttle-Aufhebung durch Qualität statt Menge, nicht neuerliches Fluten).

## Enrichment (23 künftige Events angereichert)

**Große/bekannte Events — Beschreibungen faktenreich verdichtet und Distanzen/Höhenmeter belegt oder korrigiert:**
- `challenge-roth-2026` — Beschreibung von 1 Satz auf 6+ Sätze verdichtet (Geschichte seit 1984, Volunteers 7500, Solarer Berg, Zieleinlauf, Slot-Rush)
- `wachau-radmarathon-2026` — Beschreibung von 133 Zeichen auf ~7 Sätze, Rassinger-Zitat "2000+ Teilnehmer", drei Distanzen (Light/Power/Krone Champions) belegt
- `salzkammergut-trophy-2026` — Distanz von falsch 209 km/9000 Hm auf **korrekt 201 km/7020 Hm** gefixt, 7 Strecken (22/37/55/57/75/119/201) belegt, seit 1998
- `sauerland-marathon-schmallenberg-2026` — Distanz 116→117 km, elevationGainM **3863 m ergänzt**, Ultra Rothaarsteig / Marathon / Wilzenberg-Klassiker / Studenten belegt, imageUrl ergänzt
- `black-forest-ultra-bike-marathon-kirchzarten-2026` — elevationGainM **4000 ergänzt**, Streckenbeschreibung um Schauinsland/Höhenzüge erweitert
- `flugfeld-giro-boeblingen-2026` — distanceKm **208 + elevationGainM 2590 ergänzt**, alle 6 Tour-Varianten (208/161/132/87/40/15 km) mit Hm belegt
- `montafon-m3-mtb-marathon-2026` — distanceKm **75 ergänzt**, 5 Streckenvarianten (M¹/M²/M³ + 2x E-MTB) belegt
- `rad-marathon-tannheimer-tal-2026` — Beschreibung verdichtet, alle 4 Distanzen (66/103/138/214) mit Hm belegt, Ausverkaufsstatus 2026

**Kleine/spezialisierte AT-Events — websiteUrl + distanceKm + elevationGainM + faktenreiche Beschreibung ergänzt (Research-Agent + eigene Recherche):**
- `mucki-bergrennen-lilienfeld-2026` — 10 km/930 m, alpenteamcup.at, Muckenkogel/Traisnerhütte, Mucki-Alpen-Team-Cup-Serie
- `landsthalsprint-hainfeld-2026` — 6 km/510 m, urchainfeld.sportunion.at, Kirchenberg/Wirtshaus Landsthal, Saisonfinale ATC
- `muehldorfer-almtrophy-2026` — 12 km/980 m, eisenwadl.com, 14. Ausgabe, Möllbrücke→Klinghütte, MTB/Gravel/E-Bike/Handbike, imageUrl
- `lhistorica-bad-wimsbach-2026` — lhistorica.at, drei Kategorien (Traditional/Vintage Tweed/Classic Racer), Moorlandschaft Neydharting
- `vintage-tour-donau-2026` — vintage-tour.at, 99 km/820 m, Start Weingut Lenz Moser Rohrendorf, imageUrl, Schloss Gobelsburg
- `kurt-honisch-gedenkrennen-2026` — 61 km/873 m, radclub-moedling.at, Wienerwald-Rundkurs Dornbach, 10:00 Uhr Start
- `oestm-gravel-pama-2026` — 132 km/1347 m, rc-awr.at, ÖSTM Gravel im Auftrag Cycling Austria, 3 Distanzen (132/88/44), imageUrl

**Sonstige DE Events — Beschreibungen erweitert / Fakten korrigiert:**
- `kanalfahrt-westerroenfeld-2026` — 6 Distanzen (Familie/43/79/129/160/207 km), Start OTSV Osterrönfeld 7:30 Uhr, Anmeldeschluss 2. Juli 23:59
- `aluman-triathlon-grevesmuehlen-2026` — Edition-Fix (14.→18.), distanceKm 28 ergänzt, exakte 500/21,5/6,5 km + Startgebühren + Ort
- `iok-triathlon-verl-2026` — 21. Ausgabe, Verler See (Vinkenbach-Areal), Beschreibung von 130 Zeichen auf 6 Sätze
- `sparkassen-triathlon-schopfheim-2026` — 15. Ausgabe (seit 2012), Kategorien detailliert, TSCH Langenau
- `gealan-triathlon-hof-2026` — 43. Ausgabe + 27. Stadtwerke Youth Triathlon parallel, Untreusee-Kulisse, Frühbucher-Deadline
- `karlsfelder-triathlon-2026` — Beschreibung von 205 Zeichen auf 7 Sätze, Dachauer Moos + Amper-Auwälder + Rundkurs am See
- `welzheimer-triathlon-2026` — 41. Ausgabe, Naturpark Schwäbisch-Fränkischer Wald, TSF Welzheim, 6 Sätze
- `tour-dalba-schwarzach-2026` — distanceKm **50 + elevationGainM 1000 ergänzt**, kleine (20/500)/große (50/1000) Route

## Duplikate entfernt (3)
- `muhldorfer-almtrophy-2026.json` — dublette von `muehldorfer-almtrophy-2026.json` (gleicher Termin 22.08., Kärnten)
- `horstel-triathlon-2026.json` — dublette von `riesenbecker-triathlon-2026.json` (43. Riesenbecker-Polyvlies-Triathlon am 30.08., Hörstel-Bevergern; besser gepflegte Version behalten)
- `sudkarntner-triathlon-2026.json` — dublette von `suedkaerntner-triathlon-2026.json` (8. Südkärntner Triathlon 12./13.09. am Klopeinersee; version mit distanceKm+elevationGainM behalten)

## Datenfixes (1)
- `altwarmbuchener-triathlon-hannover-2026.json` — `id` von `"altwarmbüchener-…"` (mit Umlaut) auf `"altwarmbuchener-…"` korrigiert, damit slug == filename == id.

## Verbleibende Enrichment-Backlog (Snapshot nach diesem Lauf)
- Missing image (upcoming): **20** (war 24) — meist Aggregator-blockierte Sites (Piratentriathlon Amberg keine offizielle Site auffindbar, Koog Kollektiv/Hugenotten kein DNS, Cross Triathlon Karlstadt 503, thueringer-gravel-night, flatlands-spreewald, miriquidi-mtb.de blockt WebFetch für Detail-Pages)
- Missing distanceKm (upcoming cycling): **77** (war 88)
- Missing elevationGainM (upcoming cycling): **318** (war 330)
- Thin descriptions (<200 Zeichen ODER <3 Sätze): **166** (war 184)
- **Backlog für Session 29:** Piratentriathlon Amberg offizielle Site aufspüren (bikeboard-Umleitung o.ä.), Koog Kollektiv Triathlon Risum-Lindholm (DTU-Detailseite tote Deep-Links), Cross Triathlon Karlstadt (503 wiederholt), miriquidi-mtb.de Detail-Pages (nur via Facebook-Feed erreichbar), Sauerland Rodeo Brilon (05.09.), Duensberg Bike Marathon (30.08.), flatlands-spreewald (Streckenlängen).

## SEO / Sitemap
- Build grün (1164 Seiten, 52s)
- Sitemap enthält 682 URLs (nur indexierbare Seiten, keine noindex/vergangenen Events)
- noindex-Feature aus Session 27 (commit e12215f) läuft stabil — 482 vergangene Events werden korrekt aus dem Sitemap ausgeschlossen und mit `noindex, follow` gerendert.

## Keine Neuanlagen
Bewusster Verzicht auf neue Events in diesem Lauf (Anti-Flut-Regel + noch hoher Bedarf an Enrichment bei Bestandsevents). Backlog neuer Kandidaten aus letzten Sessions bleibt in Aggregator-Quellen abrufbar; Priorität nächster Lauf bleibt Enrichment (>= 20 künftige Events veredeln, Titel/Beschreibungen inhaltlich verdichten).

---

## Session date: 2026-06-16 (Session 27)

## Current state (after Session 27):
- **Total events: 1120** (1093 → +27 new events = 1120)
- Build: 0 errors, 0 warnings (astro check)
- Latest push: commit 977154d to master ✓ (deployment triggered)

## Changes made this session (Session 27):

### imageUrls added to existing events (3):
- `zeitfahr-cup-perg-2026` ← official 2026 Perg race photo (zeitfahr-cup.at, 1024×683)
- `loewensteiner-berge-radmarathon-2026` ← group photo on road (rsv-heidelberg.de, 1024×768)
- `laacher-see-mtb-marathon-2026` ← YouTube race thumbnail (1280×720, verified 200 OK)

### New triathlon events (6, DTU/ÖTRV confirmed):
- `piratentriathlon-amberg-2026` — DE/Bayern, Olympische Distanz, Jul 11, Amberg
- `koog-kollektiv-2026` — DE/Schleswig-Holstein, Olympische Distanz, Jul 25, Risum-Lindholm
- `hugenotten-duathlon-2026` — DE/Hessen, Duathlon, Nov 1, Neu-Isenburg
- `crossduathlon-naturfreunde-klaus-2026` — AT/OÖ, Duathlon, Jun 20, Klaus an der Pyhrnbahn
- `gaishorner-bergduathlon-2026` — AT/Steiermark, Duathlon, Sep 5, Gaishorn am See
- `kosiak-loewe-2026` — AT/Kärnten, Duathlon, Oct 3, Feistritz im Rosental

### New cycling events AT (8, radmarathon.at/ÖRV calendar):
- `lochau-bergzeitfahren-2026` — AT/Vorarlberg, Berg+Zeitfahren, Jun 18, Lochau (6km/590Hm)
- `mucki-bergrennen-lilienfeld-2026` — AT/NÖ, Berg+Zeitfahren, Jul 18, Lilienfeld
- `muehldorfer-almtrophy-2026` — AT/Kärnten, Berg, Aug 22, Lurnfeld
- `landsthalsprint-hainfeld-2026` — AT/NÖ, Berg+Zeitfahren, Aug 22, Hainfeld
- `oestm-gravel-pama-2026` — AT/Burgenland, Gravel, Sep 12, Pama (Austrian Gravel Championship)
- `kurt-honisch-gedenkrennen-2026` — AT/NÖ, Gran Fondo, Sep 13, Dornbach/Wienerwald
- `lhistorica-bad-wimsbach-2026` — AT/OÖ, Gran Fondo, Aug 29, Bad Wimsbach-Neydharting (vintage bikes)
- `vintage-tour-donau-2026` — AT/NÖ, Gran Fondo, Aug 30, Rohrendorf/Krems (Donau, vintage bikes)

### New cycling events DE (13, cycloworld.cc/research confirmed):
- `saarlandschwein-radmarathon-2026` — DE/Saarland, Radmarathon, Jun 20, Überherrn (400km ultra)
- `gran-gravelfondo-ueberrherrn-2026` — DE/Saarland, Gran Fondo+Gravel, Jun 20, Überherrn (130km)
- `duesseldorf-300-2026` — DE/NRW, Radmarathon, Jun 19-20, Düsseldorf (300km overnight)
- `cycling-paradise-sylt-2026` — DE/Schleswig-Holstein, Gran Fondo, Aug 29, Wenningstedt-Braderup (100km)
- `bayrisch-lettn-2026` — DE/Bayern, Gravel, Jun 18, Nürnberg (387km/7360Hm bikepacking)
- `ultra-500-leipzig-2026` — DE/Sachsen, Gravel, Jun 20, Leipzig (500km/5000Hm bikepacking)
- `kanalfahrt-westerroenfeld-2026` — DE/Schleswig-Holstein, Radmarathon, Jul 5, Westerrönfeld (207km)
- `black-forest-ultra-bike-marathon-kirchzarten-2026` — DE/BW, Radmarathon, Jul 26, Kirchzarten (118km MTB)
- `sauerland-marathon-schmallenberg-2026` — DE/NRW, Radmarathon, Aug 15, Schmallenberg-Grafschaft (116km MTB)
- `miriquidi-bike-challenge-2026` — DE/Sachsen, Radmarathon, Aug 22, Marienberg/Erzgebirge (90km MTB)
- `duensberg-bike-marathon-2026` — DE/Hessen, Gravel+Radmarathon, Aug 30, Biebertal (85km)
- `flatlands-spreewald-2026` — DE/Brandenburg, Gravel, Jul 25, Schlepzig
- `cycling-paradise-sylt-2026` — DE/Schleswig-Holstein, Gran Fondo, Aug 29

### Already in DB (confirmed during check — no action needed):
- race-across-the-alps (525km ultra, exists with imageUrl)
- Alpentour Trophy Schladming, Fuga 300 Heiligenblut, Ironbike Ischgl, Montafon M3, Mostviertler Bike Marathon, Race Across Germany, Rodenkirchener Eifelmarathon, Schwalm-Tal Marathon, Schwarzwald Bike Marathon Furtwangen, VulkanBike Eifel, 3RIDES Winterberg, Black Forest Ultra Gravel, Saarschleifen Bike Mettlach, Bodensee Gravel Giro, Schwetzinger Höllgrund, EBM Erzgebirgs Bike Marathon, NordSchwarzwald Trophy, Lautertal Bikemarathon, Gravel Rallye Black Forest, Shades of Speed Bad Feilnbach, Dirndltal Race Frankenfels, World Games MTB Saalbach, Monaco di Baviera Classic München

### Coverage confirmed complete (Session 27):
- IRONMAN Full Distance Europe 2026: all 17 events in DB ✓
- IRONMAN 70.3 Europe 2026: all ~35 events in DB ✓
- Challenge Family Europe 2026: all 17 events in DB ✓
- T100 World Tour Europe 2026: all 3 events in DB ✓
- Austrian cycling (radmarathon.at): comprehensive, 8 new events added

### Cancelled/paused events confirmed (not added):
- Hexenturm-Radmarathon Idstein: date conflict between sources (cycloworld: Jun 28, research agent: Aug 16) — needs verification before adding

---

---

> Ältere Sessions (25 und davor) ausgelagert nach `progress-archive.md`.
