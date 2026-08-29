# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-29)
- Events gesamt: **1135** | upcoming (>= heute): **305** | past (noindex): **830**
- Letzter Lauf: Enrichment + Verifikation (2026-08-29) — 23 Bestandsevents veredelt/korrigiert (soonest-first, 03.–13.09.2026, AT/DE + CH/FR/BE/GB/NL/DK/SI/PL/SE/IT/RS/CZ), **1 entfernt** (3RIDES Gravel Ostbelgien — offiziell auf Juli 2027 verschoben), 0 Neuanlagen (Anti-Flut), diverse Distanz-/Kategorie-/Elevation-/Name-Fehler behoben, 3 non-timed rides auf RTF umklassifiziert
- Build zuletzt grün: 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **361** URLs (nur indexierbar, keine past-URLs; Rückgang 418→361 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin/incomplete upcoming candidates 177→**157** (−20 diesen Lauf angereichert). Elevation nur wo offiziell belegt ergänzt (Gérardmer 1890, Locarno 530, Shelter-Attack 2940 Hm), unbelegte Werte entfernt statt geraten (sauerland-rundfahrt 8000, letape-slovenia 1800, wolf-gravel 1500, bodensee 1500, challenge-almere 100, vienna 100 −); Distanzkorrekturen (koeln 112→109, wolf 120→156, bodensee 260→300, letape 130→150)

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
- 3RIDES Gravel Ostbelgien (BE) — offiziell von Sep 2026 auf **Juli 2027 verschoben** (ostbelgien.3rides.de: „…wird von September 2026 auf Juli 2027 verschoben"). Am 29.08. entfernt. Nicht vor bestätigtem Juli-2027-Termin wieder anlegen.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (157 dünne) es zulässt. Hinweis: `suedkaerntner-triathlon-2026.json` existiert bereits als Bestandsevent (dünn) — beim Enrichment mitnehmen statt neu anlegen.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~157 unvollständige/dünne Events; September-Events ab **06.09.** (soonest-first) als Nächstes priorisieren (03.–13.09. diesen Lauf weitgehend abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist (vitruvian-rutland, fuenf-seen-diessen u.a.).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 03.–13.09.:** 23 Events veredelt/verifiziert (s. Session-Summary unten). 1 Removal (3RIDES Gravel Ostbelgien — auf Juli 2027 verschoben, in BLACKLIST + CLAUDE.md eingetragen).
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT neu angelegt (Anti-Flut, 157 unvollständige Bestandsevents haben Vorrang); bleiben im BACKLOG (Südkärntner existiert bereits als Bestandsevent).

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| challenge-family.com Kalender | 2026-08-29 (Challenge Almere/Europe LD Championship 45. Auflage 10.–13.09. bestätigt) |
| triathlon.org / World Triathlon | 2026-08-29 (WTCS Karlovy Vary 13.09. + Powerman-WM Zofingen via triathlon.org bestätigt) |
| ironman.com Kalender (europaweit) | 2026-08-29 (IRONMAN Wales + 70.3 Belgrade + 70.3 Knokke-Heist via Tourismus-/Presse-Cross-Check bestätigt; ironman.com selbst weiter bot-blocked/403) |
| UCI Gravel World Series | 2026-08-29 (The Wolf Gravel Dronninglund 05.09. als WS-Runde + Nordic Champ bestätigt) |
| letapeseries.com (L'Étape by TdF) | 2026-08-29 (L'Étape Slovenia Kranj 5. Auflage 05.–06.09. bestätigt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-29 (Islandman Norderney Comeback via DTU + Tri Niedersachsen gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-19 (XTERRA Austria ÖM + Bad Radkersburg IUTA-WM gegengeprüft) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-29 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 23 Events 03.–13.09.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), k226 (07-14), cycloworld.cc (07-29)** sind seit 4–7 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-08-29 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 177 unvollständigen upcoming-Events ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, 03.–13.09.2026, AT/DE + CH/FR/BE/GB/NL/DK/SI/PL/SE/IT/RS/CZ) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. **1 Removal:** 3RIDES Gravel Ostbelgien (offiziell auf Juli 2027 verschoben). SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`) intakt geprüft — keine Code-Änderung nötig.

- **23 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Elevation-/Name-Fehler behoben):
  - **Cycling (10):** `sauerland-rundfahrt` (**UCI 2.1→2.2**, 4-Etappen, distanceKm 600→404 = Etappensumme; unbelegte 8000 Hm + mis-shaped Bild **entfernt**), `shelter-attack-flensburg` (Bikepacking, +elevationGainM 2940 = 4 Etappensummen belegt; **→ RTF** keine Zeitnahme), `nuffna-horb` (self-supported, **→ RTF**; Felder bestätigt), `pzu-granfondo-torun` (GF 114 km/383 Hm bestätigt; „Kopfsteinpflaster"-Claim + square Poster-Bild entfernt), `styroica` (Vintage-Cicloturistica, **Gran Fondo→RTF**; Routen 58/117/200 km korrigiert), `ride-across-britain` (9-Etappen 1577 km bestätigt), `letape-slovenia-kranj` (distanceKm 130→150; unbelegte 1800 Hm entfernt), `the-wolf-gravel-dronninglund` (UCI Gravel WS + Nordic Champ; distanceKm 120→156 = 3 Runden; unbelegte 1500 Hm + Alt-Name-Bild entfernt), `sellaronda-bike-day` (car-free, **Gran Fondo→RTF**), `bodensee-radmarathon` (53. Auflage; **Gran Fondo→Radmarathon**; distanceKm 260→300; unbelegte 1500 Hm entfernt), `vatternrundan-gravel` (Premiere, ~70% Gravel bestätigt).
  - **Triathlon (13):** `powerman-zofingen` (Duathlon-WM, Historie 1989; imageUrl full-size), `triathlon-gerardmer-xl` (+elevationGainM 1890 offiziell Rad-D+), `triathlon-locarno` (+elevationGainM 530 offiziell; CH-Meisterschaft Mitteldistanz), `ironman-703-knokke-heist` (4. Auflage, flach, Koordinaten verfeinert), `koeln-triathlon` (**2 Fehler:** Auflage 6.→5., Distanzen 1,9/90/21→offiziell 2,6/87,3/19; distanceKm 112→109), `islandman-norderney` (Comeback nach ~6 Jahren, Sebamed-Sponsor; **Fehler** Nordfriesland→Ostfriesland), `challenge-almere-amsterdam` (45. Auflage + Europe LD Championship; unbelegte 100 Hm entfernt), `ironman-wales` (Tenby/Heartbreak Hill; elevationGainM 2200→2450 belegt), `ironman-703-belgrade` (Ada Ciganlija; „Neues 2026-Rennen"-Fehler korrigiert), `wtcs-karlovy-vary` (Grand-Final-Vorrunde 13.09.; +distanceKm 51,5), `vitruvian-rutland` (Rutland Water; Organiser/Relay-Detail), `vienna-triathlon` (10. Auflage, Donauinsel; unbelegte 100 Hm entfernt).
- **1 Event entfernt:** `3rides-gravel-ostbelgien-2026` — offiziell auf Juli 2027 verschoben (ostbelgien.3rides.de). Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **3 RTF-Umklassifizierungen:** shelter-attack (+RTF), nuffna (+RTF), styroica (Gran Fondo→RTF) — alle nicht-kompetitiv/keine Zeitnahme; zusätzlich sellaronda-bike-day (Gran Fondo→RTF, car-free) durch Batch-Agent.
- **SEO / Sitemap:** `astro build` grün, 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 361 URLs (nur indexierbar, keine past-URLs; 418→361 durch saisonalen past-Zuwachs). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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
