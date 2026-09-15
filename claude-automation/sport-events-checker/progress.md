# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-09-15)
- Events gesamt: **1134** | upcoming (>= heute): **125** | past (noindex): **1009**
- Letzter Lauf: Enrichment + Verifikation (2026-09-15) — 22 Bestandsevents veredelt/korrigiert (soonest-first, 17.–26.09.2026, AT/DE + CH/IT/ES/FR/BE/PT/TR/EE), 0 Neuanlagen (Anti-Flut), **2 entfernt** (rodltal-bergkaiser offiziell abgesagt, jurmala-cycling-marathon keine offizielle 2026-Ausgabe), 1 Datumskorrektur (gravendel 18–20→17–19.09), diverse Distanz-/Elevation-/URL-Fehler behoben
- Build zuletzt grün: 1183 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **174** URLs (nur indexierbar, keine past-URLs; Rückgang 418→174 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 65→**42** (−23); missing distanceKm (upcoming) **13**; missing elevationGainM (upcoming) **58** (mehrere unbelegte Werte diesen Lauf entfernt statt geraten, belegte ergänzt: openlakes +900, girona 940→980, alpen-challenge +4215, letape-istanbul +1477); missing imageUrl (upcoming) **10**

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
- Rodltal-Bergkaiser (Rottenegg, OÖ) — Bergzeitfahren von Rottenegg nach Wieshof 2026 offiziell abgesagt (radclub-walding.at: „aus organisatorischen Gründen"; Hoffnung 2027). Am 15.09.2026 entfernt. Nicht anlegen bis offizielle Neu-Ankündigung.
- Jūrmala Cycling Marathon (Jūrmala, LV) — keine offiziell verifizierbare 2026-Ausgabe: Veranstalter Baltijas Maratoni listet 2026 nur Running Festival/Triathlon T25/Color Run, kein Velomaratons; offizielle Seite zeigt nur 2025 (~30 km). „26.09.2026"/~62 km nur Aggregatoren. Am 15.09.2026 entfernt. Nicht anlegen bis baltijasmaratoni.lv eine Radmarathon-Ausgabe ankündigt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- **gravendel-trail-seefeld-2026:** Datum diesen Lauf von 18.–20. auf **17.–19.09.** korrigiert, aber die offizielle Seite (gravendel-trail.de) druckt kein Jahr explizit. Nächsten Lauf gegen aktualisierte offizielle Seite gegenverifizieren.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut):** Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09 — evtl. bereits vergangen, prüfen), RügenChallenge (Sellin, 11.10). SURM ist bereits im Bestand (diesen Lauf veredelt) — aus Kandidatenliste entfernt. Nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (42 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~42 dünne Beschreibungen; Oktober-Events (soonest-first ab ~27.09.) als Nächstes priorisieren. imageUrl-Lücken (10) bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 17.–26.09.:** 22 Events veredelt/verifiziert (s. Session-Summary unten), inkl. SURM (war Discovery-Kandidat, jetzt im Bestand veredelt).
- **2 Phantom-Verdachtsfälle bestätigt entfernt:** rodltal-bergkaiser (abgesagt), jurmala-cycling-marathon (keine offizielle 2026-Ausgabe) → BLACKLIST + CLAUDE.md.
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst; bleibt offen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 |
| birken.no (Birken-Serie NO) | 2026-08-19 |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-15 (Grafschafter Cross-Duathlon über DTU-Kalender gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-09-15 (IKB Baggersee Aquathlon Innsbruck über ÖTRV-Kalender gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-09-15 (IM 70.3 Italy Emilia-Romagna via DiscoverCervia/Comune Cervia; ironman.com weiter bot-blocked) |
| UCI Gravel World Series | 2026-09-15 (Girona Sea Otter + Tartu Rattamaraton als GWS-Läufe direkt bestätigt) |
| L'Étape Series / ASO | 2026-09-15 (L'Étape Istanbul 3. Auflage über turkiye.letapeseries.com bestätigt) |
| PTO T100 World Tour | 2026-09-15 (T100 French Riviera 19.09 über offiziellen 2026-Kalender + triathlon.org gegengeprüft) |
> Hinweis: 2026-09-15 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 22 Events 17.–26.09., 2 Removals) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **challenge-family (07-14), k226 (07-14)** und **cycloworld.cc (07-29)** sind am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-09-15 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 65 dünnen upcoming-Beschreibungen ausschließlich veredelt/verifiziert). 4 Research-Agents haben 24 künftige Events (soonest-first, 17.–26.09.2026, AT/DE + CH/IT/ES/FR/BE/PT/TR/EE) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. **22 bestätigt & veredelt, 2 entfernt** (offiziell abgesagt bzw. keine 2026-Ausgabe), 1 Datumskorrektur. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`/`ItemList`/`BreadcrumbList`/`Organization`) intakt geprüft — keine Code-Änderung nötig.

- **22 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Elevation-/URL-/Venue-Fehler behoben):
  - **AT/DE-Cycling (7):** `backyard-gravel-camp-carinthia` (Camp-Details, 200–325 km/3.500–7.500 Hm, 90 € ab 25.01. via The Cake Movement), `gravendel-trail-seefeld` (**Datum 18–20→17–19.09**; self-supported, Soiernhaus/Plumsjochalm, 150 € inkl. 2 Frühstücke), `allgaeu-gravel-rallye-pfronten` (5-Seen-Tour; **spekulative 80/1800 → offiziell 90/106/125 km**, längste 125/2.600; Umlaut-Fix), `ebersteinburg-bergzeitfahren` (5 km/290 Hm statt 4/200; Limit 100, Streckenrekorde, 100-€-Prämie), `schwarzwald-ultra-radmarathon` (**35. Auflage**; falsche 82/147/230+4500 → offiziell 85/150/231 km/4.020 Hm; Umlaut-Fix), `albstadt-mtb-classic` (Bullentäle-XCO, DM U15/U17-Finale, 2h-Teamrennen; distanceKm bewusst weggelassen — Rundstreckenrennen), `alb-gold-trophy` (30. Auflage; 30/60/90 km, Untergrund-Split, neue Gravel-Challenge/3Lions Cup).
  - **DE/AT-Triathlon (4):** `wuppertaler-sparkassen-crosstriathlon` (**Datum 19→20.09**; tote websiteUrl → triclub-wuppertal.de; 2 Distanzen, +distanceKm 32,75/+700 Hm), `naturafit-triathlon-hoechstadt` (12. Auflage; distanceKm 52→51,5), `grafschafter-crossduathlon` (+distanceKm 16,8 = 3,0/12,0/1,8; Veranstalter TuS Ahrweiler korrigiert), `ikb-baggersee-aquathlon-innsbruck` (TTCI-Saisonabschluss, +distanceKm 6 = 1 km Schwimmen + 5 km Laufen).
  - **International Triathlon (6):** `openlakes-belgium-half` (belg. Mitteldistanz-Meisterschaft; **+elevationGainM 900** = 2×450 Hm/Runde), `t100-triathlon-french-riviera` (T100 World Tour, Base Nature Fréjus; Datum via offiziellen 2026-Kalender bestätigt trotz veralteter Event-Page), `ironman-703-italy-emilia-romagna` (Cervia, Tag nach Volldistanz; über DiscoverCervia verifiziert), `triathlon-cap-dail` (24. Auflage, Format M, ~250 TN + Animathlon), `triatlon-ciudad-santander` (Media + Olympic; Playa de Los Peligros, Stadtkurs, Limit 750), `100x100half-el-vendrell` (Rundendetails; unbelegter „Penedès"-Claim durch offizielle Streckenbeschreibung ersetzt).
  - **International Cycling/Gravel (5):** `sea-otter-europe-girona-gravel` (UCI GWS-Finale; **elevation 940→980**; Anstiegsdetails), `tartu-rattamaraton-otepaa` (**29. Auflage**; Distanzen 126/86/40/21 → offiziell 123/83/39/21; unbelegte 1.500 Hm entfernt; erster estnischer GWS-Lauf), `alpen-challenge-lenzerheide` (**25. Auflage**; 189/115 → offiziell 192,4/117,9 km, +4.215 Hm; 4 Pässe), `letape-istanbul` (**3. Auflage**; 109/59 → offiziell 101,6/49,8 km, +1.477 Hm; Bosporusbrücke), `moncao-melgaco-granfondo` (**8. Auflage**; 130/96/73 → offiziell 123/93/57 km; unbelegte 2.560 Hm entfernt).
- **2 Events entfernt:** `rodltal-bergkaiser-2026` (Rottenegg, OÖ — offiziell abgesagt „aus organisatorischen Gründen") und `jurmala-cycling-marathon-2026` (LV — keine offizielle 2026-Radmarathon-Ausgabe, nur 2025 + Aggregatoren). Beide → BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1183 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 174 URLs (nur indexierbar, keine past-URLs; 418→174 durch saisonalen past-Zuwachs). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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
