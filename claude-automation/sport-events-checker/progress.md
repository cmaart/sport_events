# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-09-01)
- Events gesamt: **1133** | upcoming (>= heute): **254** | past (noindex): **879**
- Letzter Lauf: Enrichment + Verifikation (2026-09-01) — 21 Bestandsevents veredelt/korrigiert (soonest-first, 03.–13.09.2026, AT/DE + BE/CH/GB/DK/FR/PL/SI/BG/NO), 0 Neuanlagen (Anti-Flut), **3 entfernt** (2026 offiziell abgesagt/verschoben: 3RIDES Ostbelgien → Juli 2027, Bergzeitfahren Schmelz Lollar, Zschorna Duathlon), diverse Distanz-/Kategorie-/Höhen-/URL-/Namens-Fehler behoben
- Build zuletzt grün: **1183 pages**, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **304** URLs (nur indexierbar, keine past-URLs; Rückgang 418→304 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven; 879 past-Slugs, 0 in Sitemap geleakt)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 163→**139** (−24: 21 veredelt + 3 dünne entfernt); missing distanceKm (non-tri upcoming) **7**; missing elevationGainM (non-tri upcoming) **33** (mehrere unbelegte Werte entfernt statt geraten: sauerland-rundfahrt 8000, podersdorf 100, hannover-maschsee 200, letape-slovenia 1800 −; sauerland-rodeo 3500→2000 korrigiert, gaishorner +1028 belegt); missing imageUrl (upcoming) **18** (Aggregator-Bilder ohne offiziellen Ersatz entfernt: podersdorf tri2b, bergwitz kavval)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen); cycloworld führt 02.08.2026 weiterhin spekulativ.
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell (fnldgrvl.com: „taking a hiatus in 2026"). Am 03.08. entfernt.
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine offiziell verifizierbare 2026-Ausgabe (miriquidi-mtb.de nur 2024, aus MTB-Sachsen-Cup-2026 gefallen). Am 05.08. entfernt.
- **3RIDES Gravel Ostbelgien (Eupen, BE)** — Premiere offiziell von Sep 2026 auf **Juli 2027** verschoben (ostbelgien.3rides.de). Am 01.09. entfernt. Für 2027 neu anlegbar, sobald Termin fix.
- **Bergzeitfahren Schmelz (Lollar-Salzböden, Hessen)** — 2026 abgesagt (zu wenige Helfer; rsg-giessen-wieseck.de). Hessen Berg Cup 2026 nur 3 Rennen. Am 01.09. entfernt. Wiederaufnahme 2027 geplant.
- **Jedermann Duathlon am Brettmühlenteich (Zschorna, Sachsen)** — vom Veranstalter SV Motor Großenhain offiziell abgesagt; letzte Ausgabe 29. (Aug 2024). Am 01.09. entfernt. Nicht anlegen bis offizielle neue Ankündigung.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt bzw. bei Nicht-Stattfinden entfernt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (139 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt — plausibel belassen, bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~139 dünne Beschreibungen; September-Events ab ~06.09. (soonest-first) als Nächstes priorisieren (03.–13.09. weitgehend abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events ohne offizielles Hero-Bild.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 03.–13.09.:** 21 Events veredelt/verifiziert (s. Session-Summary unten), 3 entfernt (offiziell abgesagt/verschoben).
- **rad-am-salzburgring / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 139 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-09-01 (Graean Cymru Wales + The Wolf Gravel Dronninglund als GWS-Quali direkt über ucigravelworldseries.com bestätigt) |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-01 (Bergwitz/Hannover-Maschsee/Islandman über DTU + Landesverbände gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-09-01 (Austria Triathlon Podersdorf 39. Aufl. gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 |
| World Triathlon (triathlon.org) | 2026-09-01 (Powerman Zofingen Long Distance Duathlon WM bestätigt) |
| L'Étape / GFNY / PZU Serien | 2026-09-01 (L'Étape Slovenia Kranj, PZU Toruń Finale bestätigt) |
> Hinweis: Die reinen Discovery-Aggregatoren **challenge-family (07-14), k226 (07-14)** sind am längsten offen (~7 Wochen) — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls fällig.

---

## Quellen-Durchgang: 2026-09-01 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 163 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, 03.–13.09.2026, AT/DE + BE/CH/GB/DK/FR/PL/SI/BG/NO) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert; Aggregatoren nur Discovery, kein prommer.net. **21 veredelt, 3 entfernt** (offiziell abgesagt/verschoben). SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`/`ItemList`/`BreadcrumbList`) intakt geprüft — keine Code-Änderung nötig.

- **21 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Höhen-/Venue-/URL-/Namens-Fehler behoben):
  - **Cycling AT/DE/int'l (11):** `sauerland-rundfahrt` (UCI **2.2** statt 2.1; distanceKm 600→**404**, unbelegte 8000 Hm entfernt; 4 Etappen + EZF Brilon, Jedermann-Premiere), `shelter-attack-flensburg` (Bikepacking 600/470 km, Gruppenstart-Limit 90, DK-Süd bis höchster Punkt), `nuffna-horb-am-neckar` (~500 km/9000 Hm, 4 Checkpoints, Marmorwerk e.V.), `graean-cymru-llyn-brenig` (einzige UCI-GWS-Runde Wales + Worlds-Quali, 105 km/1915 Hm, Sa Frauen/50+, So Elite; unbelegte „1000 Limit/31 Nationen" entfernt), `kaerntner-rad-bergkoenig` (**17.** Aufl.; 6→**6,4 km**/440 Hm, Kraigersee→Eggen; erfundene „Ossiacher See/Karawanken" entfernt), `letape-slovenia-kranj` (5. Aufl.; unbelegte 130 km/1800 Hm **entfernt** — offiziell „~150 km", Route noch offen), `pzu-granfondo-torun` (Serienfinale 05.–06.09., GF 114/68/27 km, gesperrte Straßen; „Kopfsteinpflaster"-Claim entfernt), `ride-across-britain` (**Deloitte-Titel entfernt** — kein Titelsponsor mehr; 05.–13.09., ~1577 km/9 Tage/23 Counties, Threshold Sports), `styroica` (**11.** Aufl.; Kat. `Gran Fondo`→**RTF** = nicht gewertete Vintage-Ausfahrt Pre-1990-Stahl), `sauerland-rodeo-brilon` (2. Aufl.; elevation 3500→**2000** offiziell; 200 km, ausverkauft/Anmeldeschluss 30.06.), `the-wolf-gravel-dronninglund` (**Distanzfehler** 120/90/55→**82/123/165 km**; distanceKm →165, elevation 1500→1400; UCI-GWS-Quali + Nordic Championship, Voergaard Slot).
  - **Triathlon/Duathlon AT/DE/CH/BG/FR (10):** `podersdorf-triathlon` (39. Aufl.; Splits LD 3,8/180/42 + MD 1,9/88/21 = neue AUT-StM Mitteldistanz; unbelegte 100 Hm + tri2b-Bild entfernt), `bergwitz-triathlon-kemberg` (35. Aufl.; **keine Olympische Distanz** → nur Jedermann + Sprint/LM; Kat. korrigiert, distanceKm 51→26; kavval-Bild entfernt), `berlinman-triathlon`/`berlin-wo-man` (Strandbad Wannsee, Weltraumjogger e.V. seit 1992; **Distanzfehler** MD 2,2/90/20→2/80/20, Sprint 750/20; Grunewaldturm-Anstieg statt „Willi"; distanceKm 113→102), `gaishorner-bergduathlon` (Gaishorn am See; +websiteUrl/registrationUrl; MTB 8,2 km/813 Hm + Lauf 4 km/215 Hm zur Mödlinger Hütte; +distanceKm 12, +elevationGainM **1028** belegt), `hannover-triathlon-maschsee` (19. Aufl., 1. Triathlon-Bundesliga, ausverkauft >2500; unbelegte 200 Hm entfernt), `islandman-norderney` (**Region-Fix** Nordfriesland→Ostfriesische Insel; Comeback/neuer Sponsor, 120-Slot-Limit; distanceKm 52→51,5), `lion-heart-cross-triathlon-primorsko` (BG; 3/96/21, Strandzha/Ropotamo, ~1750+450 Hm belegt), `powerman-zofingen` (World-Triathlon **Long-Distance-Duathlon-WM** 10/150/30, seit 1989), `triathlon-gerardmer-xl` (38. Aufl.; XL 1,9/90/21, 3 Radrunden ~1900 Hm, ausverkauft, Le Tholy).
- **3 Events entfernt** (offiziell abgesagt/verschoben — s. BLACKLIST + CLAUDE.md „Known Cancelled"): `3rides-gravel-ostbelgien` (Premiere auf Juli 2027 verschoben), `bergzeitfahren-schmelz-lollar` (2026 abgesagt, zu wenige Helfer), `duathlon-brettmuehlenteich-zschorna` (Veranstalter offiziell abgesagt, letzte Aufl. 2024).
- **SEO / Sitemap:** `astro build` grün, 1183 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 304 URLs (nur indexierbar; 879 past-Slugs, 0 geleakt; 418→304 saisonal). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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

---

> Ältere Sessions (08-03, 07-31, 07-29, 07-27, 07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
