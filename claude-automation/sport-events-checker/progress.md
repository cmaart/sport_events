# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-09-03)
- Events gesamt: **1132** | upcoming (>= heute): **253** | past (noindex): **879**
- Letzter Lauf: Enrichment + Verifikation (2026-09-03) — 25 Bestandsevents veredelt/korrigiert (soonest-first, 03.–06.09.2026, AT/DE + BE/CH/DK/FR/GB/PL/SI/BG), 0 Neuanlagen (Anti-Flut), **1 Dublette gemergt** (berlin-wo-man → berlinman-triathlon), **3 entfernt** (offiziell abgesagt/verschoben), diverse Distanz-/Kategorie-/Venue-/URL-Fehler behoben
- Build zuletzt grün: **1182 pages**, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **303** URLs (nur indexierbar, keine past-URLs; Rückgang 418→303 durch saisonalen past-Zuwachs seit 08-19 — viele Ende-Aug-Events jetzt past, korrekt date-driven)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 144→**116** (−28); missing distanceKm (upcoming) 31→**29** (gaishorner +12,2, aquariusman +26); missing elevationGainM (upcoming) **128** (+ unbelegte Werte entfernt statt geraten: podersdorf, hannover-maschsee, aloha-tri, letape-slovenia, pzu-torun, the-wolf-gravel −; gaishorner +1028, sauerland-rodeo 3500→2000, artour 3800→3550, berlinman +700, locarno +530 belegt); missing imageUrl (upcoming) 16→**20** (+4 Aggregator-/Low-Res-Bilder ohne offiziellen Ersatz entfernt: podersdorf, bergwitz, aquariusman, kaerntner-rad-bergkoenig)

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
- 3RIDES Gravel Ostbelgien (BE) — 2026 (04.–06.09.) offiziell auf **Juli 2027** verschoben (ostbelgien.3rides.de: „findet statt – aber mit neuem Termin"). Am 03.09. entfernt. Nicht mit 2026-Datum anlegen; 2027 erst nach offizieller Terminbestätigung.
- Bergzeitfahren Schmelz (Lollar-Salzböden, Hessen) — 2026 offiziell abgesagt (RSG Gießen-Wieseck: „Das Rennen 2026 findet leider nicht statt! … kurzfristig absagen"). Am 03.09. entfernt.
- Jedermann Duathlon am Brettmühlenteich (Zschorna b. Großenhain, Sachsen) — 2026 (30., geplant 04.09.) vom SV Motor Großenhain ~2 Wochen vor Termin wegen zu geringer Anmeldezahlen abgesagt (31 Anm., nur 21 mit Zahlung; Startgeld-Erstattung). Am 03.09. entfernt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (236 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~116 dünne Beschreibungen; nächster Lauf soonest-first ab **~07.09.2026** fortsetzen (03.–06.09. diesen Lauf abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist (odyssey-st-neots, gelreman-arnhem, Hannover-Lahe, taegi-tri, ladies-tri-breitenbrunn, 3muc-muenchen, + neu: podersdorf, bergwitz, aquariusman, kaerntner-rad-bergkoenig, gaishorner — Aggregator-Bilder entfernt, kein offizieller Ersatz gefunden).
- **BerlinMan Mitteldistanz-Zahlen:** offizielle Seite (berlin-wo-man.de) ist intern widersprüchlich (Header 1,9/90/21 vs. Distanzen-Seite 2/80/20). Diesen Lauf auf die Distanzen-Seite (2/80/20, 700 Hm, distanceKm 102) vereinheitlicht; bei Gelegenheit erneut gegenprüfen, falls die Seite konsolidiert wird.

### ZU PRÜFEN (nächster Lauf, aus Batch-D-Hinweisen)
- **triathlon-gerardmer-xl:** offizielle Domain triathlondegerardmer.com lieferte über Proxy Spam/Parked-Content; /registrations, /program, /xl-triathlon-Unterseiten + offizielle Facebook-Seite bestätigen 2026 aber. websiteUrl belassen; bei Gelegenheit prüfen, ob die Hauptdomain wieder sauber lädt.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 03.–06.09.:** 25 Events veredelt/verifiziert (s. Session-Summary unten) + 1 Dublette gemergt.
- **3 Removals** (offiziell abgesagt/verschoben): 3RIDES Ostbelgien (→2027), Bergzeitfahren Schmelz, Brettmühlenteich-Duathlon → BLACKLIST + CLAUDE.md.
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 116 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-03 (Bergwitz/Hannover-Maschsee/Bibermann-Bleckede über DTU + Landesverbände Sachsen-Anhalt/NDS gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-09-03 (Podersdorf 39. Austria Triathlon + Aloha Tri Mondseeland über ÖTRV gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 (IRONMAN 70.3 Poznań via ironmanpoznan.com.pl bestätigt; ironman.com selbst weiter bot-blocked) |
| ucigravelworldseries.com (UCI Gravel WS) | 2026-09-03 (The Wolf Gravel Dronninglund DK als Nordic Championship + WS-Runde bestätigt) |
| letapeseries.com (L'Étape by TdF) | 2026-09-03 (L'Étape Slovenia Kranj 5. Auflage bestätigt; 2026-Route noch TBA → elevation weggelassen) |
| Powerman / events.triathlon.org (World Triathlon) | 2026-09-03 (Powerman Zofingen LD-Duathlon-WM 06.09. bestätigt) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-09-03 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 25 Events 03.–06.09.) über offizielle Veranstalter-/Verbands-/Serienseiten (DTU, ÖTRV, UCI Gravel WS, L'Étape-Serie, PZU/GF-Serie, Powerman/World Triathlon). Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14), cycloworld.cc (07-29)** sind weiterhin am längsten offen (6–8 Wochen) — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-09-03 (Enrichment-, Verifikations- & Dubletten-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 144 dünnen upcoming-Beschreibungen ausschließlich veredelt/bereinigt). 4 Research-Agents haben 28 künftige Events (soonest-first, 03.–06.09.2026, AT/DE + BE/CH/DK/FR/GB/PL/SI/BG) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert; Aggregatoren nur Discovery, kein prommer.net. **25 veredelt/korrigiert, 1 Dublette gemergt, 3 offiziell abgesagte/verschobene entfernt.** SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`; `noindex, follow` + Sitemap-Ausschluss für past in `[slug].astro`) und JSON-LD (`SportsEvent` Detailseite, `Organization`/`WebSite`/`ItemList` Startseite) intakt geprüft — keine Code-Änderung nötig.

- **25 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Venue-/URL-Fehler behoben):
  - **Triathlon DE/AT (11):** `podersdorf-triathlon` (39. Austria Triathlon, 4 Distanzen; unbelegte 100 Hm + Aggregator-Bild **entfernt**), `bergwitz-triathlon-kemberg` (35. Auflage; **Kat.-Fix** nur Sprint, „Olympische Distanz" entfernt; distanceKm 51→29; Aggregator-Bild entfernt), `hannover-triathlon-maschsee` (19. Auflage, ausgebucht, Bundesliga; unbelegte 200 Hm entfernt), `berlinman-triathlon` (**Dublette gemergt** — s.u.; Distanzen 2/80/20, +elevation 700), `aloha-tri-mondseeland` (Premiere 2021; distanceKm 110→111; unbelegte 800 Hm entfernt), `aquariusman-loehne` (29. Auflage; **dead domain fix** aquariusman.de→triathlon-loehne.de; **Kat.-Fix** kein Olympic; Venue Freibad statt „Aquarius-See"; +distanceKm 26), `bibermann-triathlon-bleckede` (14. Auflage, Elbhafen), `islandman-norderney` (**Ort-Fix** Ostfriesland statt „Nordfriesland"; Comeback nach 6 Jahren), `powerman-zofingen` (LD-Duathlon-WM 10/150/30), `triathlon-gerardmer-xl` (Lac de Gérardmer; elevation weggelassen), `triathlon-locarno-3locarno` (seit 1984; unbelegter „Schweizer Meisterschaft"-Claim entfernt; +elevation 530 belegt).
  - **Cycling/Gravel (14):** `shelter-attack-flensburg` (Erstauflage Bikepacking, 600/470 km; elevation offen gelassen), `sauerland-rodeo-brilon` (2. Auflage, self-supported; **elevation 3500→2000** belegt), `velofondo-lausitzring` (Rundenlänge 11,2→11,3), `artour-radmarathon-heidenau` (**distanceKm 200→215, elevation 3800→3550** belegt; 4 Distanzen), `nuffna-horb-am-neckar` (500 km/9000 Hm, Selbstversorger), `gaishorner-bergduathlon` (**+distanceKm 12,2, +elevation 1028, +websiteUrl** MTB-Bergduathlon), `kaerntner-rad-bergkoenig` (17. Auflage, 6,4 km/440 Hm; websiteUrl offiziell statt Aggregator; Aggregator-Bild entfernt), `styroica` (**Kat. Gran Fondo→RTF** — „keine Zeitnehmung"), `letape-slovenia-kranj` (5. Auflage; unbelegte 1800 Hm entfernt — Route TBA), `pzu-granfondo-torun` (Saisonfinale; distanceKm 114→110; unbelegte 383 Hm entfernt), `the-wolf-gravel-dronninglund` (Nordic Champ + UCI Gravel WS; distanceKm 120→165; unbelegte 1500 Hm entfernt), `ride-across-britain` (LEJOG 9 Tage, Threshold Sports), `lion-heart-cross-triathlon-primorsko` (3/96/21 = 120 km), + `berlin-wo-man`→gemergt.
- **1 Dublette gemergt:** `berlin-wo-man-2026` (BerlinWoMan) war identisch mit `berlinman-triathlon-2026` (BerlinMan & BerlinWoMan) — gleicher Veranstalter (berlin-wo-man.de), Ort (Strandbad Wannsee), Datum (05.–06.09.), Kategorien. In `berlinman-triathlon` zusammengeführt (bessere Name + offizielles Bild; Distanzen 2/80/20 von der offiziellen Distanzen-Seite, +elevation 700), `berlin-wo-man-2026.json` gelöscht.
- **3 Events entfernt** (offiziell abgesagt/verschoben → BLACKLIST + CLAUDE.md „Known Cancelled"): `3rides-gravel-ostbelgien` (auf Juli 2027 verschoben), `bergzeitfahren-schmelz-lollar` (2026 abgesagt), `duathlon-brettmuehlenteich-zschorna` (2026 abgesagt, zu wenige Anmeldungen).
- **SEO / Sitemap:** `astro build` grün, 1182 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 303 URLs (nur indexierbar, keine past-URLs; 418→303 durch saisonalen past-Zuwachs seit 08-19). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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
