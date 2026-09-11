# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-09-11)
- Events gesamt: **1135** | upcoming (>= heute): **184** | past (noindex): **951**
- Letzter Lauf: Enrichment + Verifikation (2026-09-11) — 23 Bestandsevents veredelt/korrigiert (soonest-first, 18.–27.09.2026, AT/DE + IT/ES/PT/CH/EE/FR/BE/SI), 0 Neuanlagen (Anti-Flut, 74 dünne upcoming haben Vorrang), **1 entfernt** (rodltal-bergkaiser offiziell abgesagt), viele Distanz-/Höhen-/Kategorie-/Datum-/Venue-/URL-Fehler behoben (u.a. gran-fondo-prosecco: tote Domain → „Prosecco Cycling", 130→100 km/3200→1510 Hm)
- Build zuletzt grün: 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **238** URLs (188 Event-URLs, nur indexierbar, keine past-URLs; Rückgang 418→238 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven — Großteil der Aug-Events jetzt past)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 98→**74** (−24 veredelt); missing distanceKm (upcoming) **25** (+1: triatlon-bled unbelegte 51 entfernt); missing elevationGainM (upcoming) **89** (openlakes +900 belegt; king-of-the-lake −200 unbelegt entfernt); missing imageUrl (upcoming) **14** (unverändert)

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
- Rodltal-Bergkaiser (Rottenegg/Walding, OÖ) — „Rodltal-Bergkaiser 10.0" (19.09.2026) vom Veranstalter offiziell **abgesagt** („aus organisatorischen Gründen"; radclub-walding.at), Hoffnung auf 2027. Am 11.09. entfernt. Nicht anlegen bis radclub-walding.at eine neue Ausgabe ankündigt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten (offiziell verifizieren, DANN erst anlegen — Anti-Flut):** Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), RügenChallenge (Sellin, 11.10) noch nicht angelegt. *(SURM/Schwarzwald Ultra + Südkärntner Triathlon existieren bereits im Datenbestand — SURM diesen Lauf enriched/korrigiert, Südkärntner noch dünn.)* Neuanlage weiter zurückgestellt, solange 74 dünne upcoming Vorrang haben.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~74 dünne Beschreibungen; Events 11.–17.09. (unmittelbar bevorstehend, geringer Rest-Indexwert) diesen Lauf bewusst übersprungen zugunsten 18.–27.09. Nächster Lauf: soonest-first ab dem dann aktuellen Datum + verbliebene Okt/Nov-Events (viele Cross-Duathlons Hessen/BW noch dünn: hugenotten, ruesselcross, lorsbacher, kaiserstuhl, kraichgauman, guestrow — meist ohne offizielle Distanz/Elevation). imageUrl-Lücken bleiben bei international/flat-Events ohne verifizierbares Hero-Bild.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 18.–27.09.:** 23 Events veredelt/verifiziert (s. Session-Summary unten), 1 entfernt (rodltal offiziell abgesagt).
- **SURM (Schwarzwald Ultra Radmarathon):** war Discovery-Kandidat, existiert bereits — diesen Lauf korrigiert (Strecken 231/150/85 km, 4020 Hm, 35. Auflage) → aus Kandidatenliste entfernt.
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der Batch); bleibt offen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-19 (Bad Zwischenahn/Beucha/Krefeld/Riesenbeck/RunSwimRepeat über DTU + Landesverbände NDS/NRW/Hessen gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-19 (XTERRA Austria ÖM + Bad Radkersburg IUTA-WM gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-09-11 (IRONMAN 70.3 Italy/Emilia-Romagna via comune Cervia bestätigt) |
| t100triathlon.com (T100-Serie) | 2026-09-11 (T100 French Riviera Fréjus/Saint-Raphaël 19.–20.09. bestätigt) |
| letapeseries.com (L'Étape by TdF) | 2026-09-11 (L'Étape Istanbul 20.09., Queen-Route 102 km/1477 Hm, 3. Auflage) |
| ucigravelworldseries.com | 2026-09-11 (Sea Otter Girona + Tartu Rattamaraton als UCI-Gravel-Qualifier 19.09. bestätigt) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-09-11 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 23 Events 18.–27.09.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~8–9 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls fällig.

---

## Quellen-Durchgang: 2026-09-11 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 98 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, 18.–27.09.2026, AT/DE + IT/ES/PT/CH/EE/FR/BE/SI) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert; 23 angereichert, **1 entfernt**. Events 11.–17.09. (unmittelbar bevorstehend, geringer Rest-Indexwert nach baldigem noindex) bewusst übersprungen. Aggregatoren nur Discovery, kein prommer.net. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past confirmed) und JSON-LD (`SportsEvent`/`ItemList`/`Organization`) intakt geprüft — keine Code-Änderung nötig.

- **23 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Höhen-/Kategorie-/Datum-/Venue-/URL-Fehler behoben):
  - **Cycling AT/DE (5):** `backyard-gravel-camp-carinthia` (non-competitive, 325/7500 + 200/3500, €90, Rosental-Camp), `gravendel-trail-seefeld` (**Datum 18.–20.→17.–19.09.**; 170 km/3790 Hm, 2 Hüttennächte), `allgaeu-gravel-rallye-pfronten` (**Distanz-Fix** 80/1800→**125 km/2600 Hm**, 3 Routen), `ebersteinburg-bergzeitfahren` (**4/200→5 km/300 Hm**; 100er-Limit, Rekorde), `schwarzwald-ultra-radmarathon/SURM` (**35. Auflage**, 231/150/85 km, 4020 Hm — Strecken/Höhen korrigiert).
  - **Cycling international (5):** `sea-otter-europe-girona-gravel` (UCI-Gravel-Qualifier, neuer Kurs 109/940), `tartu-rattamaraton-otepaa` (**126→123 km**, 29. Aufl., 93 % Offroad), `alpen-challenge-lenzerheide` (**4500→4400 Hm**, Pässe korrigiert), `letape-istanbul` (**109→102 km**, +1477 Hm, Bosporus-Querung), `moncao-melgaco-granfondo` (**130→123 km/2560→2415 Hm**, 8. Aufl.).
  - **Cycling AT/DE (Berg/MTB/Fondo, 4):** `king-of-the-lake` (16. Aufl., 47,2 km Attersee-TT, Lotterie; **unbelegte 200 Hm entfernt**), `albstadt-mtb-classic` (Bullentäle-Kurs; falsche Meisterschafts-Claims entfernt), `alb-gold-trophy` (**30. Aufl.**, 30/60/90 km @350/700/1050, Gravel Challenge), `la-reine-freiburg` (**135→170 km** Gran Fondo, Markgräflerland/Kaiserstuhl), `gran-fondo-prosecco`→**„Prosecco Cycling"** (tote Domain granfondoprosecco.it → proseccocycling.it; **130→100 km/3200→1510 Hm**, 22. Aufl., nur 3 gewertete Bergsegmente).
  - **Triathlon (8):** `openlakes-belgium-half` (BEL Half-Meisterschaft; **+900 Hm belegt**), `t100-triathlon-french-riviera` (Fréjus/Saint-Raphaël, Pro Sa + AG So), `wuppertaler-sparkassen-crosstriathlon` (**Datum 19.→20.09.**; Beckenschwimmen Freibad Neuenhof statt Freiwasser; Veranstalter/URL-Fix), `naturafit-triathlon-hoechstadt` (12. Aufl.; unbelegte Startzeit-Claims entfernt), `triathlon-cap-dail` (24. Aufl., Format M), `ironman-703-italy-emilia-romagna` (Cervia; „flat"-Overstatement korrigiert), `weinstadt-triathlon` (2. Aufl.; **Distanzen 18,8/5,4→18,7/4,6; distanceKm 25→23,6**), `triatlon-bled` (**Kategorie Olympisch→Sprint**/Super-Sprint Junior Cup; **unbelegte 51 km entfernt**).
- **1 Event entfernt:** `rodltal-bergkaiser-2026` (Rottenegg/Walding, OÖ) — offiziell **abgesagt** (radclub-walding.at: „aus organisatorischen Gründen", Hoffnung 2027). Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 238 URLs (188 Event-URLs, nur indexierbar, keine past-URLs; rodltal korrekt raus). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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

> Ältere Sessions (07-31, 07-29, 07-27, 07-14, k226-Batch 07-09, 08-03, Session 29 und davor) ausgelagert nach `progress-archive.md`.
