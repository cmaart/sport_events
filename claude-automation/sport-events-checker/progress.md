# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-09-05)
- Events gesamt: **1136** | upcoming (>= heute): **248** | past (noindex): **888**
- Letzter Lauf: Enrichment + Verifikation (2026-09-05) — 24 Bestandsevents veredelt/korrigiert (soonest-first, 12.–13.09.2026, AT/DE + CH/IT/SE/PT/PL/GB/RS/CZ/BE), 0 Neuanlagen (Anti-Flut), 0 entfernt (alle 24 gegen offizielle Quelle als 2026-stattfindend bestätigt), diverse Distanz-/Kategorie-/Venue-/URL-Fehler behoben
- Build zuletzt grün: 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **306** URLs (255 Event-URLs, nur indexierbar; past-Events korrekt ausgeschlossen; date-driven)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 140→**116** (−24); missing distanceKm (upcoming) 31→**29** (−2); missing elevationGainM (upcoming) 123→**127** (+4 netto: unbelegte Werte entfernt statt geraten bei erkner/wales/sindelfingen/suedkaerntner/vienna/weseler −; belegte ergänzt bei diessen +1400, jelenia +2170); missing imageUrl (upcoming) 16→**24** (+8 Aggregator-/Wrong-Aspect-Bilder ohne offiziellen Ersatz entfernt: heidesee, oranke, erkner, wales, belgrade, sindelfingen, ratingen, twistesee)

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
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), RügenChallenge (Sellin, 11.10). (Südkärntner Triathlon war bereits angelegt und wurde diesen Lauf veredelt/bestätigt — aus der Kandidatenliste entfernt.) Noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (116 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~116 dünne Beschreibungen; nächste September-Events (soonest-first ab 18.09.: backyard-gravel-carinthia, gravendel-seefeld, allgaeu-gravel-pfronten, rodltal-bergkaiser, sea-otter-girona, openlakes-belgium …) priorisieren. Die imminenten 05.–06.09.-Wochenendevents wurden bewusst übersprungen (Index-Lebensdauer ~1 Tag → geringer SEO-ROI). imageUrl-Lücken bleiben bei international/flat-Events ohne verifizierbares offizielles Hero-Bild (heidesee, oranke, erkner, wales, belgrade, sindelfingen, ratingen, vitruvian, estrela, sauerland-rodeo).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 12.–13.09.:** 24 Events veredelt/verifiziert (s. Session-Summary unten). Alle 24 gegen offizielle Quelle als 2026-stattfindend bestätigt (0 Removals).
- **Südkärntner Triathlon:** aus der Discovery-Kandidatenliste erledigt — war bereits angelegt, diesen Lauf veredelt (8. Auflage, Rad Olympic 40→45 km korrigiert).
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 116 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-05 (Twistesee/Sindelfingen/Ratingen/Weseler/Heidesee/Oranke/Erkner über DTU + Landesverbände HE/BW/NRW/NDS/BE gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-09-05 (Südkärntner Triathlon + Vienna Triathlon offiziell gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-09-05 (IRONMAN Wales/70.3 Erkner/70.3 Belgrade via lokale offizielle Race-Seiten bestätigt; ironman.com selbst weiter bot-blocked) |
| events.triathlon.org (World Triathlon / WTCS) | 2026-09-05 (WTCS + Age-Group Karlovy Vary 12.–13.09. bestätigt) |
| swisstriathlon.ch / triyverdon.ch | 2026-09-05 (Triathlon Yverdon-les-Bains 14. Auflage bestätigt) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-09-05 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 24 Events 12.–13.09.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~8 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls fällig.

---

## Quellen-Durchgang: 2026-09-05 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 140 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, Wochenenden 12.–13.09.2026, AT/DE + CH/IT/SE/PT/PL/GB/RS/CZ/BE) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Die imminenten 05.–06.09.-Wochenendevents wurden bewusst übersprungen (Index-Lebensdauer ~1 Tag → geringer SEO-ROI; soonest-first ab 12.09. mit sinnvoller indexierbarer Restlaufzeit). Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum — **0 Removals** (alle 24 bestätigt). SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`; `noindex, follow` + Sitemap-Ausschluss für past confirmed in `[slug].astro`/`BaseLayout.astro`) und JSON-LD (`SportsEvent`) intakt geprüft — keine Code-Änderung nötig.

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Venue-/URL-Fehler behoben):
  - **Cycling (8):** `bodensee-radmarathon` (53. Auflage; **distanceKm 260→300**, **elevation 1500→2376** Platin-Tour; 4 Strecken/5 Startorte), `city-hill-climb-salzburg` (**Kat.-Korrektur** Berg/Zeitfahren→**Berg** — 2026 K.-o.-Duell, kein Zeitfahren; 900 m/120 Hm, Ø15 %/max 32 %), `sellaronda-bike-day-september` (**Kat.-Korrektur** Gran Fondo→**RTF** — kostenlos/keine Zeitnahme/autofrei; **websiteUrl** altabadia.org-404 → sellarondabikeday.com; 53 km/1600 Hm 4 Sellapässe), `vatternrundan-gravel` (Inaugural-Gravel-Edition; 120 km, 70 % Schotter; keine offizielle Elevation → weggelassen), `bike-maraton-jelenia-gora` (Saisonfinale Runde #8; **+distanceKm 81 / +elevation 2170** GIGA; 4 Distanzen), `welt-kult-tour-regensburg` (19. Auflage, 9 Strecken; Marathon 205/2500 belegt), `lousa-granfondo` (**Distanz-/Elevationskorrektur** 135/2590→**123/2690** offiziell 2026), `fuenf-seen-rundfahrt-diessen` (**Premiere** Dießen, RTF; +elevation 1400; websiteUrl auf Event-Seite; +schweriner s.u.).
  - **Triathlon DE (10):** `suedkaerntner-triathlon` (8. Auflage; **Rad Olympic 40→45 km**; unbelegte 900 Hm entfernt), `weseler-triathlon` (15. Auflage; **websiteUrl** finishers.com-Aggregator → triathlon-wesel.de; distanceKm 52→52,6; flach → Elevation entfernt), `heidesee-triathlon-holdorf` (14. Auflage; **Landkreis-Fix** Osnabrück→Vechta; distanceKm 25→27,5; Aggregator-imageUrl entfernt), `oranke-triathlon-berlin` (17. Auflage, Strandbad Orankesee; distanceKm 25→5,15; Aggregator-imageUrl entfernt), `bad-arolser-twistesee-triathlon` (42. Auflage; imageUrl 3,3:1 entfernt), `ironman-703-erkner` (**„Premiere"-Claim korrigiert** — 2024 erste Auflage; Seename Dämeritzsee-Fix; unbelegte 300 Hm + Aggregator-Bild entfernt), `sindelfingen-triathlon` (**Datenfehler:** Olympic+Sprint → nur **Sprintdistanz**; distanceKm 52→21,5; Schwimm-Venue Badezentrum statt „Böblinger Seengebiet"; Elevation/Bild entfernt), `ratingen-triathlon` (18. Auflage; imageUrl 5:1 entfernt), `schweriner-jedermann` (11. Auflage; Distanzen 50→60/90→91 km; unverifizierte Streckenclaims durch belegte ersetzt), `bibermann`… (nicht in Batch).
  - **Triathlon/int'l (6):** `vienna-triathlon` (10. Auflage; distanceKm 52→51,5; flach → 100 Hm entfernt), `triathlon-yverdon-les-bains` (14. Auflage, Swiss Champs; distanceKm 52→49,5), `ironman-wales` (Tenby, 3,8/180/42,2; sich widersprechende Elevation 1500–2500 → entfernt statt geraten; Aggregator-Bild entfernt), `ironman-703-belgrade` (**„neues Rennen 2026"-Claim korrigiert**; Ada Ciganlija/Savsko jezero; Aggregator-Bild entfernt), `vitruvian-rutland` (Whitwell, 1,9/89/21,1; British-Triathlon-gelistet), `world-triathlon-championship-series-karlovy-vary` (WTCS 13.09. Elite + Age-Group 12.09. Sprint; Rolava; +distanceKm 51,5), `estrela-xtreme-manteigas` (**Distanzfehler behoben:** Halb-Rad mit Voll gemischt → real 4/190/41; distanceKm 150→235, elevation 2600→4700; ausverkauft).
- **0 Event entfernt / 0 neu.** Keine neuen Absagen (alle 24 bestätigt).
- **SEO / Sitemap:** `astro build` grün, 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 306 URLs (255 Event-URLs, nur indexierbar; past-Events wie oetztaler/inferno/cyclassics korrekt ausgeschlossen; ironman-wales als upcoming enthalten). noindex-Feature (`noindex, follow` für past confirmed, `index, follow` für upcoming) + JSON-LD intakt — keine Code-Änderung nötig.

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
