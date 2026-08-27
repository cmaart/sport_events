# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-27)
- Events gesamt: **1135** | upcoming (>= heute): **312** | past (noindex): **823**
- Letzter Lauf: Enrichment + Verifikation (2026-08-27) — 24 Bestandsevents veredelt/korrigiert (soonest-first, 04.–06.09.2026, AT/DE + SE/SI/PL/GB/DK/CH/FR/BE), 0 Neuanlagen (Anti-Flut, 131 dünne upcoming), 0 entfernt (alle 24 gegen offizielle Quelle als 2026-stattfindend bestätigt), **1 Dublette dedupliziert** (Landsthalsprint/Kirchenbergrennen Hainfeld → 1 Datei, Fakten offiziell verifiziert), diverse Distanz-/Kategorie-/Venue-/URL-Fehler behoben
- Build zuletzt grün: 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **365** URLs (nur indexierbar, keine past-URLs; 0 past-Leaks von 820 past-Slugs; Rückgang 418→365 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter, upcoming-Fenster geschrumpft 367→312): thin upcoming **131**; missing distanceKm **34**; missing elevationGainM **161** (mehrere unbelegte Werte entfernt statt geraten: the-wolf-gravel, aloha-mondsee, nibelungen-xanten −); missing imageUrl **26** (Aggregator-Bilder ohne offiziellen Ersatz entfernt: bergwitz, aquariusman, ironman-703-knokke-heist; koeln-triathlon: offizielles OG-Bild ergänzt)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt. Nicht wieder anlegen bis funktionierende offizielle Seite eine Ausgabe ankündigt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen); cycloworld führt 02.08.2026 weiterhin spekulativ. Nicht anlegen.
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell (fnldgrvl.com: „taking a hiatus in 2026"). Am 03.08. entfernt. Aggregatoren (Battistrada, Strambecco) führen 08.08.2026 spekulativ. Nicht anlegen bis offizielle Ankündigung einer neuen Ausgabe.
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine offiziell verifizierbare 2026-Ausgabe: miriquidi-mtb.de zeigt nur 2024-Inhalte, im offiziellen MTB-Sachsen-Cup-Kalender 2026 (10 Rennen) nicht mehr enthalten. Nur Aggregatoren (Battistrada, granfondoguide, cycloworld, radsport-events) führen 22.08.2026. Am 05.08. entfernt. Nicht anlegen bis miriquidi-mtb.de offiziell eine Ausgabe ankündigt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.
- **Mögliche Dubletten (bei Gelegenheit prüfen, nicht dringend):** gran-fondo-tre-valli-varesine vs. uec-granfondo-varese (beide 03.10., Varese) — Profi-Rennen vs. EM-Granfondo, vermutlich getrennt; saarlandschwein-radmarathon vs. gran-gravelfondo-ueberrherrn (beide 20.06., gleiche Koordinaten) — auf Co-Location vs. Dublette prüfen.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (131 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~131 dünne Beschreibungen; nächster Lauf soonest-first ab **07.09.** fortsetzen (04.–06.09. diesen Lauf abgearbeitet). imageUrl-Lücken (26) bleiben bei international/flat-Events ohne verifizierbares offizielles Hero-Bild (sauerland-rodeo, gaishorner-bergduathlon, ironman-703-knokke-heist, aquariusman-loehne, bergwitz-kemberg u.a.).
- **QUELLEN-STAND: Discovery-Aggregatoren überfällig (~6–7 Wochen):** UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14), cycloworld (07-29) am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; Anti-Flut beachten).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 04.–06.09.:** 24 Events veredelt/verifiziert (s. Session-Summary unten), alle 2026 offiziell bestätigt (0 Removals).
- **Dubletten-Fix (Priorität 2):** Landsthalsprint/Kirchenbergrennen Hainfeld dedupliziert (offiziell als Offroad-/MTB-Bergsprint verifiziert, kanonischer Slug behalten, Stale-Datei gelöscht).
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 131 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-27 (Bergwitz/Islandman Norderney/Köln/Nibelungen Xanten/Aquariusman Löhne/Rochlitzer Bergtri über DTU + Landesverbände gegengeprüft) |
| triathlon-austria.at / radmarathon.at (ÖTRV/ÖRV) | 2026-08-27 (Aloha Mondseeland, Kärntner Rad-Bergkönig, Gaishorner Bergduathlon, Landsthalsprint Hainfeld gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-27 (IRONMAN 70.3 Knokke-Heist via myknokke-heist.be + Lokalpresse bestätigt; ironman.com selbst weiter bot-blocked) |
| Swiss Triathlon / powerman.ch / triathlon.org | 2026-08-27 (Powerman Zofingen = LD-Duathlon-WM 2026, Triathlon Locarno gegengeprüft) |
| FFTRI / letapeseries / regionale Rad-Veranstalter EU | 2026-08-27 (L'Étape Slovenia Kranj, Gérardmer XL, PZU GF Toruń, The Wolf Gravel Dronninglund, styROICA, Gotland360, Ride Across Britain, Velofondo Lausitzring, Sauerland Rodeo, ARTOUR Heidenau, Prinzen-Rolle Polch verifiziert) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-27 war ein reiner Enrichment-/Verifikations-/Dedup-Lauf (soonest-first, 24 Events 04.–06.09.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14), cycloworld (07-29)** sind seit ~6–7 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-08-27 (Enrichment-, Verifikations- & Dedup-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 131 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, 04.–06.09.2026, AT/DE + SE/SI/PL/GB/DK/CH/FR/BE) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum — **0 Removals**. Zusätzlich **1 Dublette dedupliziert** (Priorität 2). SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`/`ItemList`/`Breadcrumb`/`Organization`/`WebSite`) intakt geprüft — keine Code-Änderung nötig.

- **1 Dublette entfernt (Dedup):** `kirchenbergrennen-hainfeld-2026` war stale Zweitdatei desselben Rennens (Umbenennung Kirchenbergrennen→Landsthalsprint, 22.08.2026); beide Dateien widersprachen sich (Rennrad erlaubt vs. nicht). Offiziell (alpenteamcup.at/landsthalsprint) als **Offroad-/MTB-Bergsprint** (nur MTB + E-Bike, keine Rennrad-Klasse, Start Parkplatz Wirtshaus Landsthal, URC Hainfeld, 16:00) verifiziert; korrekte Fakten in den kanonischen Slug `landsthalsprint-hainfeld-2026` konsolidiert, Stale-Datei gelöscht.
- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Venue-/URL-Fehler behoben):
  - **Cycling (12):** `gotland360-visby` (SE; Per-Tag-Optionen + Paket-Struktur), `letape-slovenia-kranj` (SI; 130 km/1800 Hm + 80-km-Ride, offizielle Subdomain), `pzu-granfondo-torun` (PL; 114/68/27 km, falsche „Kopfstein"-Behauptung entfernt), `ride-across-britain` (GB; 9 Etappen Land's End→John o'Groats), `styroica` (AT; drei Routen auf offizielle Werte korrigiert), `the-wolf-gravel-dronninglund` (DK; **distanceKm 120→156**, unbelegte 1500 Hm entfernt), `kaerntner-rad-bergkoenig` (AT; 17. Auflage, distanceKm 6→6,5), `velofondo-lausitzring` (DE; 24h-Format + Jedermann, distanceKm →100), `sauerland-rodeo-brilon` (DE; **elevation 3500→2000**, falscher Selbstversorger-Claim raus), `artour-radmarathon-heidenau` (DE; **distance 200→215, elevation 3800→3550**), `prinzen-rolle-radmarathon-polch` (DE; **websiteUrl Aggregator→offiziell vfb-polch.de**), `gaishorner-bergduathlon` (AT; verifizierte Legs MTB 8,2/813 + Berglauf 4,0/215, +offizielle websiteUrl, unbelegter ÖTRV-Claim raus).
  - **Triathlon (12):** `bergwitz-triathlon-kemberg` (DE; **nicht existente Olympische Distanz entfernt** → Sprint-only), `berlinman-triathlon` (DE; Sprint 750/20/5 + Mittel 1,9/90/21 korrigiert), `islandman-norderney` (DE; **Nordfriesland→Ostfriesland**-Fix, Distanzen), `powerman-zofingen` (CH; **Powerman LD-Duathlon-WM 2026**), `triathlon-gerardmer-xl` (FR; +Olympisch/Discovery-Distanzen), `triathlon-locarno` (CH; unbestätigter SM-Mitteldistanz-Claim raus, +Distanzen), `aloha-tri-mondseeland` (AT; Per-Format-Distanzen, unbelegte 800 Hm raus), `aquariusman-loehne` (DE; **Venue Freibad Löhne**-Fix, Sprint-only, Aggregator-Bild raus), `koeln-triathlon` (DE; offizielle Mitteldistanz-Werte 1,9/81,2/19, offizielles OG-Bild), `nibelungen-triathlon-xanten` (DE; Venue-Fix, unbelegte 200 Hm raus), `ironman-703-knokke-heist` (BE; Streckendetails, unbelegtes Aggregator-Bild raus), `rochlitzer-bergtriathlon` (DE; offizielle Distanzen inkl. 2026-Zweirunden-Schwimmen).
- **0 Event entfernt / 0 neu** (nur 1 Dublette dedupliziert). Keine neuen Absagen (alle 24 bestätigt).
- **SEO / Sitemap:** `astro build` grün, 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 365 URLs (nur indexierbar, 0 past-Leaks von 820 past-Slugs; 418→365 durch saisonalen past-Zuwachs). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

---

## Quellen-Durchgang: 2026-08-19 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 176 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, 23.–30.08.2026, AT/DE + CH/NO/IE/GB/HU/FI/PL/RO) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum — **0 Removals** (alle 24 bestätigt). SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`) intakt geprüft — keine Code-Änderung nötig.

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Venue-/URL-Fehler behoben):
  - **Triathlon AT/DE (10):** `ladies-tri-breitenbrunn` (14. Auflage, jetzt P3 Event Agentur; +distanceKm 24,5; Low-Res-imageUrl + registrationUrl events.at), `ultra-triathlon-bad-radkersburg` (**Streckenkorrektur:** flacher/schneller 50-m-Pool-Start + 10,6-km-Radrunde statt „spektakuläre Hügelroute"; 2026 IUTA-Triple-Ultra-WM; unbelegte 2500 Hm **entfernt**; websiteUrl → ultratriathlon.at), `xterra-austria` (ÖM 2026; distanceKm 37→45,5; elevation 1200→1400 offiziell), `3muc-triathlon-muenchen` (Regattastrecke; distanceKm 51→51,5; unbelegte 200 Hm + Aggregator-Bild **entfernt**), `baerentriathlon-bad-zwischenahn` (33. Auflage; **Umlaut-Fix** Bären/Bär; offizielle Distanzen 1,5/40/10,8), `beuchaer-triathlon` (28. Auflage, ESV Lok Beucha; distanceKm 26→19), `knappenman-lohsa` (38. Auflage, 4 Distanzen LD/MD/OD/Sprint), `mendener-cross-triathlon` (30. Auflage; **Distanzfehler** → offiziell 1,0/24,8/9,4; distanceKm 21→35), `covestro-triathlon-krefeld` (Elfrather-See-Autobahnloop; unbelegte 150 Hm **entfernt**; distanceKm 50→52), `riesenbecker-triathlon` (43. Auflage, SV Teuto).
  - **Triathlon CH/FI/IE/PL (5):** `karingsund-triathlon-aland` (**Kategorie-Korrektur:** 2026 keine Mitteldistanz mehr → Olympisch (neu) + Sprint; distanceKm 113→51,5), `triathlon-basel` (3. Auflage, Rhein-Schwimmen, Rundendetails), `triathlon-lausanne` (32. Auflage; **websiteUrl** Tourismus-Seite → offiziell trilausanne.ch), `hardman-killarney-full-triathlon` (Irlands einziger Full-Distance; unbelegte 2000 Hm **entfernt**; Ring of Kerry/Moll's Gap), `ironman-703-poznan` (Ziel erstmals im Enea-Stadion; ausverkauft, WM-Slots).
  - **Cycling (9):** `oetztaler-radmarathon` (227 km/~5500 Hm, 4 Pässe; Lotterie-Verfahren verifiziert; unbelegte „06:30 Uhr"/„41 Nationen" entschärft), `gfny-bremen` (**2. Auflage** statt „erster"; **Distanzkorrektur** 110→98 km; unbelegte 400 Hm **entfernt** — flaches Norddeutschland), `arboe-bergpreis-afritz` (28. Auflage, Kärntner Bergmeisterschaft; A 6,2/540, B 2,1/198, C 1,1/90), `birkebeinerrittet-lillehammer` (33. Auflage; **Pflichtrucksack 2 kg statt 3,5 kg** laut offizieller Regel), `gravelbirken-lillehammer` (2. Auflage; Distanzen offiziell 110,4/1729 + 203,6/3000+; distanceKm 195→204), `exmoor-beast-sportive` (Wimbleball Lake, 161/105/68 km, Dunkery Beacon), `balaton-gravel-derby` (Challenge 370/4000 + 42h-Limit, Explore 100/1200; +Enddatum 30.08.), `letape-romania-bucharest` (5. Auflage, gesperrte Straßen Bukarest; +elevationGainM 200 belegt), `covestro`… (s.o.).
- **0 Event entfernt / 0 neu.** Keine neuen Absagen (alle 4 Phantom-Verdachtsfälle bestätigt).
- **SEO / Sitemap:** `astro build` grün, 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 418 URLs (nur indexierbar, keine past-URLs; 492→418 durch saisonalen past-Zuwachs). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

---

## Quellen-Durchgang: 2026-08-05 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 199 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 26 künftige Events (soonest-first, 07.–23.08.2026, AT/DE + international/IRONMAN/GFNY) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD intakt geprüft — keine Code-Änderung nötig.

- **25 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Venue-/Distanz-/Kategorie-/URL-Fehler behoben):
  - **Triathlon DE (9):** `altwarmbuchener-triathlon-hannover` (→ offizieller Name **Hannover-Lahe Triathlon**, 12. Auflage; Sprint 750/20/5 + Olympisch 1500/40/10; distanceKm +51,5; Aggregator-imageUrl 2,9:1 entfernt), `salzlandsparkassen-triathlon-hecklingen` (8. Auflage, Löderburger See; Olympic-Rad **42** statt 40 km; distanceKm 52→54), `viernheimer-triathlon` (42. Auflage, Hemsbacher Wiesensee, Para-DM + 2. BL Süd), `muldental-triathlon-grimma` (21. Auflage; distanceKm +51,5; elevation weggelassen), `triathlon-hildesheim` (JoWiese, Oberliga; distanceKm 26→28,5), `tri-4-fun-minden` (17. Auflage, Kutenhausen; distanceKm +25,5), `swk-triathlon-kaiserslautern` (**Comeback**, nicht „seit Jahren"; Warmfreibad; distanceKm 25→25,5; websiteUrl→fck-triathlon.de), `erfurt-triathlon` (38. Auflage, Strandbad Stotternheim; distanceKm 52→51,5; Geo verfeinert), `schlosstriathlon-kossenblatt` (10. Auflage Cross-Tri; +registrationUrl).
  - **Triathlon AT/CH/int'l (7):** `jannersee-triathlon` (32. Auflage, Dornbirn, Abendstart; distanceKm 20→20,4; unbelegte 100 Hm entfernt), `thiersee-triathlon` (8. Auflage; distanceKm 52→51,5, elevation 500→**440** offiziell; ausverkauft), `kraigerseetriathlon-launsdorf` (**Venue-Fix:** Kraigersee/Seebichl, nicht „Launsdorf"; 10. Auflage), `taegi-tri-wettingen` (33. Auflage; distanceKm 52→44,8; Aggregator-imageUrl entfernt), `odyssey-st-neots` (ATW, Half+Full, „First to Full"), `gelreman-arnhem` (**distanceKm 113→226** = Volldistanz Flagship; ausverkauft + Warteliste), `ironman-703-tallinn` (70.3 **EM** 2026; Voll-IRONMAN am Vortag).
  - **Cycling (9):** `sommerholz-bergsprint` (Bergeinzelzeitfahren 3,43 km/205 Hm bestätigt), `zeitfahr-cup-seibersdorf-44` (44 km TT; unbelegte 128 Hm + „King of the Lake"-Claim entfernt), `alpina-zeitfahrcup-st-georgen` (11,5 km Bergzeitfahren; fabrizierte 300 Hm entfernt), `erzgebirgstour-crottendorf` (**20.** Erzgebirgstour, 90 km/2200 Hm, „Dreierlei im Gebirg"-Auftakt), `kufsteinerland-radmarathon` (Kat. Gran Fondo→**Radmarathon**, Seenrunde 95 km/1160 Hm), `gfny-orcieres` (elevation 4469→4400; Medio 75 km/2000 Hm), `pzu-granfondo-warszawa` (109/81/25 km; offiziell keine Hm), `garmin-triathlon-tour-stezyca` (**Location-Fix:** Stężyca *Lubelskie* an der Weichsel, nicht Kaszubien — Koordinaten korrigiert), `triatlon-kocevje` (SLO-Staatsmeisterschaft; distanceKm 25→25,65).
- **1 Event entfernt:** `miriquidi-bike-challenge-2026` (Marienberg) — keine offiziell verifizierbare 2026-Ausgabe (Seite nur 2024, aus MTB-Sachsen-Cup-2026 gefallen). Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 492 URLs (nur indexierbar, keine past-URLs). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

---

> Ältere Sessions (08-03, 07-31, 07-29, 07-27, 07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
