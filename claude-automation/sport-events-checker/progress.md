# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-25)
- Events gesamt: **1135** | upcoming (>= heute): **312** | past (noindex): **823**
- Letzter Lauf: Enrichment + Verifikation (2026-08-25) — 23 Bestandsevents veredelt/korrigiert (soonest-first, 25.08.–06.09.2026, AT/DE + CH/GR/BE), 0 Neuanlagen (Anti-Flut), **1 Dublette entfernt** (goettingen-triathlon), 0 Phantom-Removals (alle 2026-Ausgaben offiziell bestätigt); diverse Datenfehler behoben (tote Domains, Kategorien RTF/UCI-2.1, Distanzen/Etappensummen, unbelegte Felder entfernt)
- Build zuletzt grün: 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **364** URLs (nur indexierbar, keine past-URLs; Rückgang 418→364 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven)
- Datenqualität (Heuristik <4 Sätze / <55 Wörter): thin upcoming 234→**211** (−23); missing distanceKm (upcoming) 36→**34**; missing elevationGainM (upcoming) **161**; missing imageUrl (upcoming) 23→**34** (+11 durch bewusstes Entfernen von 404-/Aggregator-/Low-Res-Bildern ohne offiziellen Ersatz — Policy: lieber kein Bild als ein schlechtes)

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

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (236 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~211 dünne Beschreibungen; September-Events (soonest-first ab 04.09.) als Nächstes priorisieren (bis 03.09. weitgehend abgearbeitet). imageUrl-Lücken (34) bleiben bewusst bei Events, wo kein offizielles ≥1200×630-Hero verifizierbar ist bzw. nur 404-/Aggregator-/Low-Res-Bilder existierten (gochness, hoelle-von-q, ingelheimer, trifun-pellworm, aischgrund, kallinchen, moret, sauwaldgiro, sauerland, shelter-attack u.a.) — nicht durch schlechte Bilder ersetzen.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 25.08.–06.09.:** 23 Events veredelt/verifiziert (s. Session-Summary unten), alle 2026-Ausgaben offiziell bestätigt (0 Phantom-Removals).
- **Dubletten-Fix:** `goettingen-triathlon-2026` als Dublette zu `goettinger-stadtwerke-volkstriathlon-2026` erkannt und entfernt (kanonische Datei mit offizieller URL angereichert).
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 211 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| UEC/eurogravel26.com + ucigravelworldseries.com | 2026-08-25 (UEC Gravel-EM 2026 Host Houffalize + 30.08. bestätigt, 138 km/2190 Hm) |
| rad-net.de / breitensport (BDR-RTF-Kalender) | 2026-08-25 (16-Talsperren-Rundfahrt als RTF-Marathon bestätigt; elevation „k.A.") |
| tourdesstations.ch (Marmotte/Tour des Stations, CH) | 2026-08-25 (4 Strecken, Ultrafondo 241 km/8848 Hm bestätigt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-25 (Trifun Pellworm/GochNess/Göttingen/Kallinchen über DTU + Landesverbände gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-25 (Pöttschinger Aquathlon Burgenländ. LM gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 (IRONMAN 70.3 Poznań via ironmanpoznan.com.pl bestätigt; ironman.com selbst weiter bot-blocked) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-25 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 23 Events 25.08.–06.09.) über offizielle Veranstalter-/Verbands-/Serienseiten (rad-net/BDR, DTU, ÖTRV, UEC/eurogravel, tourdesstations). Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~6–7 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls fällig.

---

## Quellen-Durchgang: 2026-08-25 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 234 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 23 künftige Events (soonest-first, 25.08.–06.09.2026, AT/DE + CH/GR/BE) gegen offizielle Veranstalter-/Verbands-/Serienquellen (rad-net/BDR, DTU, ÖTRV, UEC/eurogravel26.com, tourdesstations.ch) verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum — **0 Phantom-Removals**, **1 Dublette entfernt**. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`/`ItemList`/`Organization`/`WebSite`) intakt geprüft — keine Code-Änderung nötig.

- **23 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Domain-/Kategorie-/Distanz-/Feld-Fehler behoben):
  - **Ultra/Road-Cycling (8):** `gravel-ultra-850-raca` (Race Across Austria; dates.end→29.08. Siegerehrung Feldkirch; 850 km/16.000 Hm bestätigt), `raca-gravel-ultra-350` (Gerlos→Feldkirch, 350 km/8.800 Hm), `race-across-germany` (Aachen→Görlitz Nonstop, 800 km/7.800 Hm, RAAM-Qualifier), `marmotte-granfondo-valais` (Tour des Stations; distanceKm→**133**/4700 offizielle Granfondo-Seite, alle 4 Strecken), `tour-des-stations-verbier` (distanceKm 133→**241** Ultrafondo, elevation 4700→**8848**), `sauwaldgiro` (Route A 105/1600 + B 61/900, OÖ), `sauerland-rundfahrt` (**UCI-2.1-Etappenrennen**; distanceKm 600→**404** Etappensumme; unbelegte 8000 Hm entfernt), `talsperren-rundfahrt-gevelsberg` (Kat. Radmarathon→**RTF**; websiteUrl/imageUrl-Host korrigiert; unbelegte 3100 Hm entfernt).
  - **Gravel/Bikepacking/MTB (3):** `uec-gravel-european-championship-houffalize` (2026-Host Houffalize + 30.08. via UEC/eurogravel bestätigt; 141→**138** km, 2100→**2190** Hm), `shelter-attack-flensburg` (Kat. Gravel→**RTF** selbstversorgt/ohne Wertung; 600/470 km), `duensberg-bike-marathon` (Deutsche MTB-Marathon-Meisterschaft; 124 km/2610 Hm bestätigt, Gipfel 494→498 m).
  - **Triathlon DE (8):** `elbe-triathlon-hamburg` (14. Auflage, ~1.900 Plätze; +distanceKm 51,5), `gochnesstriathlon` (distanceKm 26→23,5; 404-imageUrl entfernt), `hoelle-von-q-triathlon` (10. Auflage 2/83/21,1 + 1600 Hm; Aggregator-Bild entfernt), `ingelheimer-triathlon-der-kleine-karl` (2. Auflage; distanceKm 26→25,5), `goettinger-stadtwerke-volkstriathlon` (kanonisch behalten, Kiessee, distanceKm→25,5), `aischgrund-triathlon` (38. Auflage; tote Domain→tri-nea.de; +distanceKm 25,4; Veranstalter DLRG korrigiert), `kallinchen-triathlon-zossen` (+Olympische Distanz; Aggregator-Bild + geratene distanceKm entfernt), `moret-triathlon-babenhausen` (42. Auflage/VfL-Jubiläum; Aggregator-Bild entfernt).
  - **Triathlon AT/GR (4):** `poettschinger-aquathlon` (16. Auflage, Burgenländ. LM; +distanceKm 4,27), `olympos-x` (XTRI 7/7, max 100; unbelegte kombinierte elevation entfernt, Komponenten in Prosa), `trifun-pellworm` (22. Auflage; websiteUrl DTU→offiziell pellworm-trifun.de; distanceKm 25→25,5), `zugspitz-arena-gravel-triathlon` (DACH-Premiere Heiterwanger See; unbelegte distanceKm/elevation entfernt bis offizielle Streckenprofile publiziert).
- **1 Event entfernt:** `goettingen-triathlon-2026` — Dublette zu `goettinger-stadtwerke-volkstriathlon-2026` (gleiche Auflage/Datum/Bild; entfernte Datei nutzte Aggregator-URL finishers.com). Kanonische Datei angereichert.
- **SEO / Sitemap:** `astro build` grün, 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 364 URLs (nur indexierbar, keine past-URLs; 418→364 saisonal). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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
