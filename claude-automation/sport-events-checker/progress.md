# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-23)
- Events gesamt: **1133** | upcoming (>= heute): **340** | past (noindex): **793**
- Letzter Lauf: Enrichment + Verifikation (2026-08-23) — 24 Bestandsevents veredelt/korrigiert (soonest-first, 03.–06.09.2026, AT/DE + BE/CH/GB/PL/SI/DK/FR/IT/SE/BG/NO/EE), 0 Neuanlagen (Anti-Flut), **3 entfernt** (Bergzeitfahren Schmelz abgesagt, 3RIDES Ostbelgien auf 2027 verschoben, berlinman-triathlon Dublette zu berlin-wo-man), diverse Distanz-/Kategorie-/Venue-/URL-Fehler behoben
- Build zuletzt grün: **1183 pages**, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **390** URLs (davon 340 Event-Seiten = exakt alle upcoming; keine past-URLs, korrekt date-driven)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming **153** (Pool durch 3 Removals + saisonalen past-Zuwachs verschoben; 24 soonest-first-Events auf 4–8 faktenreiche Sätze gebracht); missing distanceKm (upcoming) **35**; missing elevationGainM (upcoming) **176** (mehrere unbelegte Werte entfernt statt geraten: sauerland-rundfahrt 8000, podersdorf 100, hannover 200, sauerland-rodeo 3500, the-wolf 1500 −; shelter-attack +2940, gaishorner +1028 belegt); missing imageUrl (upcoming) **27** (Aggregator-/Low-Res-Bilder ohne offiziellen Ersatz entfernt: podersdorf tri2b, bergwitz kavval/finishers, zschorna hdsports)

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
- Bergzeitfahren Schmelz (Lollar-Salzböden, Hessen) — 2026 kurzfristig aus organisatorischen Gründen abgesagt; offizielle Seite rsg-giessen-wieseck.de: „Das Rennen 2026 findet leider nicht statt!". Am 23.08. entfernt. Nicht anlegen bis neue Ausgabe offiziell angekündigt.
- 3RIDES Gravel Ostbelgien (Eupen, BE) — Premiere offiziell von September 2026 auf **Juli 2027 verschoben** (ostbelgien.3rides.de). Keine 2026-Ausgabe. Am 23.08. entfernt. Als 2027-Event neu anlegbar, sobald exaktes Juli-2027-Datum offiziell publiziert ist.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten upcoming-Events wurden gegen offizielle Quellen bestätigt; die 3 nicht bestätigten wurden entfernt (s. BLACKLIST).
- **triathlon-gerardmer-xl**: elevationGainM bewusst NICHT gesetzt — offizielle Seite triathlondegerardmer.com lieferte über den Proxy nur cache-vergiftete Inhalte; nur Snippet-Quellen nannten ~2.130 Hm. Bei Gelegenheit offiziell nachverifizieren und ggf. ergänzen.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (236 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~153 dünne Beschreibungen; Anfang-September-Batch (03.–06.09.) diesen Lauf abgearbeitet — nächster Lauf soonest-first ab **~06.–13.09.** priorisieren. imageUrl-Lücken bleiben bei international/flat-/self-supported-Events, wo kein offizielles Hero-Bild verifizierbar ist (podersdorf, bergwitz, zschorna-duathlon, sauerland-rodeo, gaishorner-bergduathlon, odyssey-st-neots, gelreman-arnhem, Hannover-Lahe, taegi-tri, ladies-tri-breitenbrunn, 3muc-muenchen).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 03.–06.09.:** 24 Events veredelt/verifiziert (s. Session-Summary unten). 3 nicht bestätigte Events entfernt (2 abgesagt/verschoben, 1 Dublette).
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, ~153 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-23 (Bergwitz Sprint-only + Zschorna-Duathlon + Hannover-Maschsee 19. Aufl. über DTU-Kalender gegengeprüft) |
| triathlon-austria.at / austria-triathlon.at | 2026-08-23 (Podersdorf 39. Aufl. + Gaishorner Bergduathlon gegengeprüft) |
| radmarathon.at (ÖRV-Kalender AT) | 2026-08-23 (Kärntner Rad Bergkönig 17. Aufl., 6 km/440 Hm gegengeprüft) |
| ucigravelworldseries.com (Gravel-WS-Kalender) | 2026-08-23 (Graean Cymru + The Wolf/Dronninglund 2026 gegengeprüft) |
| letapeseries.com (L'Étape by TdF Serie) | 2026-08-23 (L'Étape Slovenia Kranj 5. Aufl., 131 km/1804 Hm) |
| triathlon.org / XTRI World Tour | 2026-08-23 (Powerman Zofingen WM + ICON Livigno 10. Aufl. gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 (IRONMAN 70.3 Poznań via ironmanpoznan.com.pl bestätigt; ironman.com selbst weiter bot-blocked) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-23 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 24 Events 03.–06.09.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~6–7 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls fällig.

---

## Quellen-Durchgang: 2026-08-23 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei ~153 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, 03.–06.09.2026, AT/DE + BE/CH/GB/PL/SI/DK/FR/IT/SE/BG/NO/EE) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`) intakt geprüft — keine Code-Änderung nötig.

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Venue-/URL-Fehler behoben):
  - **Cycling AT/DE (9):** `sauerland-rundfahrt` (neue UCI-**2.2**-Etappenfahrt, 4 Etappen; **Distanzfehler** 600→404 km via offizielle Etappenliste; unbelegte 8000 Hm **entfernt**), `shelter-attack-flensburg` (Bikepacking 600/470 km; +elevationGainM 2940 = Summe der vier offiziellen Etappen-Hm), `nuffna-horb-am-neckar` (Schwarzwald-Bikepacking 500 km/9000 Hm, gemeinnütziger Marmorwerk e.V.), `sauerland-rodeo-brilon` (natureholix-Gravel 200 km; unbelegte 3500 Hm **entfernt** — alle Quellen ~2000), `velofondo-lausitzring` (24h-Rundstreckenrennen; Rundenlänge 11,2→11,3 km), `kaerntner-rad-bergkoenig` (17. Aufl., 6 km/440 Hm; **Geo-Fehler** korrigiert: Kraigerberg bei St. Veit, nicht Ossiacher See), `styroica` (Vintage-Radrundfahrt Fehring, Streckensplits 58/117/200 km exakt), `letape-slovenia-kranj` (5. Aufl.; 130→**131** km / 1800→**1804** Hm exakt; websiteUrl → slovenia.letapeseries.com), `graean-cymru-llyn-brenig` (UCI Gravel WS Wales, 2. Aufl.; „1000-Teilnehmer-Limit"→Teilnehmerzahl-Korrektur).
  - **Gravel int'l (2):** `the-wolf-gravel-dronninglund` (UCI Gravel WS + Nordische Meisterschaft; **Distanzfehler** 120→**162** km, Runden 54/108/162; unbelegte 1500 Hm **entfernt**), `gotland360-visby` (**Kategorie-Fix** Gran Fondo→**RTF** = nicht-gewertetes Motionslopp; Distanzpakete 180/280/360).
  - **Triathlon/Duathlon (13):** `podersdorf-triathlon` (39. Aufl. „Fast. Hard. Legendary."; unbelegte 100 Hm + tri2b-Bild **entfernt**), `bergwitz-triathlon-kemberg` (35. Aufl.; **Sprint-only** → Kat. „Olympische Distanz" entfernt; distanceKm 51→29; kavval/finishers-Bild entfernt), `hannover-triathlon-maschsee` (19. Aufl. eichels:Event, ausverkauft; distanceKm 52→50; unbelegte 200 Hm entfernt), `islandman-norderney` (Comeback nach 6 Jahren, Titelsponsor sebamed; **Geo-Fix** Ostfriesland statt „Nordfriesland"), `duathlon-brettmuehlenteich-zschorna` (SV Motor Großenhain, via DTU-Kalender 2026 bestätigt; hdsports-Bild entfernt), `berlin-wo-man` (biennial, Weltraumjogger e.V.; Sprint ausverkauft), `powerman-zofingen` (Powerman Langdistanz-**WM** 10/150/30), `lion-heart-cross-triathlon-primorsko` (BG Ultra-Cross 3/96/21, Ropotamo-Reservat), `pzu-granfondo-torun` (PZU-GF-Serienfinale 114 km/383 Hm; unbelegte „Kopfsteinpflaster-Altstadt" entfernt), `triathlon-gerardmer-xl` (Vogesen-Mitteldistanz 1,9/90/21; elevation bewusst offen gelassen, s. ZU PRÜFEN), `icon-xtri-livigno` (XTRI World Tour, **10. Aufl.**; 5 Pässe, Ziel Carosello 3000), `gaishorner-bergduathlon` (+distanceKm 12,2 / +elevationGainM 1028 offiziell).
- **3 Events entfernt:** `bergzeitfahren-schmelz-lollar` (2026 offiziell abgesagt), `3rides-gravel-ostbelgien` (auf Juli 2027 verschoben), `berlinman-triathlon` (Dublette zu `berlin-wo-man` — 2026 ausschließlich als „BerlinWoMan" ausgetragen, alte BerlinMan-Distanzen falsch). Erste zwei in BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, **1183 pages**, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 390 URLs (340 Event-Seiten = alle upcoming; keine past-URLs). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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

> Ältere Sessions (07-31, 07-29, 07-27, 07-14, k226-Batch 07-09, Session 29, 08-03 und davor) ausgelagert nach `progress-archive.md`.
