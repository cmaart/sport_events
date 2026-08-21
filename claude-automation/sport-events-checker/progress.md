# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-21)
- Events gesamt: **1134** | upcoming (>= heute): **362** | past (noindex): **772**
- Letzter Lauf: Enrichment + Verifikation (2026-08-21) — 22 Bestandsevents veredelt/korrigiert (soonest-first, 22.08.–05.09.2026, AT/DE + CH/FR/BE/DK/NL), 0 Neuanlagen (Anti-Flut), **2 entfernt** (3RIDES Gravel Ostbelgien → offiziell auf Juli 2027 verschoben; Bergzeitfahren Schmelz → 2026 abgesagt), diverse Distanz-/Kategorie-/Venue-/URL-Fehler behoben
- Build zuletzt grün: 1184 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **415** URLs (nur indexierbar, keine past-URLs; 418→415 durch 2 Removals + saisonalen past-Zuwachs)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 179→**155** (−24: 22 veredelt + 2 dünne entfernt); missing distanceKm (upcoming) 36→**32** (−4 ergänzt: göttingen 26, ingelheim-hält, aischgrund 25,4, elbe 51,5, pöttsching 4,3 u.a.); missing elevationGainM (upcoming) 190→**196** (+6 unbelegte Werte entfernt statt geraten: leipzig, vichy-full, wendelstein, podersdorf, hannover-maschsee, sauerland −); missing imageUrl (upcoming) 27→**36** (+9 Aggregator-/Low-Res-/tote Bilder ohne offiziellen Ersatz entfernt: leipzig, vichy-full, podersdorf, bergwitz, ingelheim, kallinchen, pellworm, aischgrund, gochness)

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
- 3RIDES Gravel Ostbelgien (Eupen, BE) — offiziell von September 2026 auf **Juli 2027** verschoben (ostbelgien.3rides.de: „wird von September 2026 auf Juli 2027 verschoben"). Am 21.08. entfernt. Erst mit dem 2027-Termin wieder anlegen.
- Bergzeitfahren Schmelz (Lollar-Salzböden, Hessen) — 2026 kurzfristig abgesagt (rsg-giessen-wieseck.de: „Das Rennen 2026 findet leider nicht statt!"). Am 21.08. entfernt. Nicht anlegen bis die RSG Gießen-Wieseck offiziell eine neue Ausgabe ankündigt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (236 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~155 dünne Beschreibungen; September-Events (soonest-first ab 05.09., dann Mitte September) als Nächstes priorisieren (bis 05.09. weitgehend abgearbeitet). imageUrl-Lücken (36) bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist (odyssey-st-neots, gelreman-arnhem, Hannover-Lahe, taegi-tri, ladies-tri-breitenbrunn, 3muc-muenchen, ironman-703-leipzig, podersdorf, kallinchen, pellworm, aischgrund, gochness).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 22.08.–05.09.:** 22 Events veredelt/verifiziert (s. Session-Summary unten). 2 nicht-stattfindende entfernt (3RIDES Ostbelgien → Juli 2027; Bergzeitfahren Schmelz → abgesagt).
- **QUELLEN-STAND re-check:** UCI Gran Fondo World Series + challenge-family.com (seit 07-07/07-14 offen) via Discovery-Agent geprüft — beide Kalender vollständig mit dem Repo in Sync, **0 net-neue EU-Kandidaten**. Beide auf 2026-08-21 gesetzt.
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 155 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-08-21 (Discovery-Recheck: 5 EU-upcoming, 0 fehlend — alle im Repo) |
| challenge-family.com Kalender | 2026-08-21 (Discovery-Recheck: 6 EU-upcoming, 0 fehlend — alle im Repo) |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-19 (Bad Zwischenahn/Beucha/Krefeld/Riesenbeck/RunSwimRepeat über DTU + Landesverbände NDS/NRW/Hessen gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-19 (XTERRA Austria ÖM + Bad Radkersburg IUTA-WM gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 (IRONMAN 70.3 Poznań via ironmanpoznan.com.pl bestätigt; ironman.com selbst weiter bot-blocked) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-21 wurden UCI GFWS + challenge-family (die am längsten offenen Discovery-Quellen) re-gecheckt — beide vollständig in Sync, 0 net-neue EU-Kandidaten. Jetzt am längsten offen: **k226.com (07-14)** und **cycloworld.cc (07-29)** — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). Enrichment/Verifikation der angefassten Events lief wie üblich über die offiziellen Veranstalter-/Verbands-/Serienseiten.

---

## Quellen-Durchgang: 2026-08-21 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 179 dünnen upcoming-Beschreibungen ausschließlich veredelt/verifiziert). 4 Research-Agents haben 24 künftige Events (soonest-first, 22.08.–05.09.2026, AT/DE + CH/FR/BE/DK/NL) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert; **22 angereichert, 2 als nicht-stattfindend entfernt.** Ein separater Discovery-Agent hat die am längsten offenen Quellen (UCI GFWS, challenge-family) re-gecheckt — beide 0 net-neue EU-Kandidaten. Aggregatoren nur Discovery, kein prommer.net. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`) intakt geprüft — keine Code-Änderung nötig.

- **22 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/Venue-/URL-Fehler behoben):
  - **Cycling (10):** `wendelsteinrundfahrt` (35. Auflage; Kat. `Radmarathon`→**RTF** = offiziell keine Zeitnahme; distanceKm 205→208; unbelegte 3050 Hm **entfernt** — Aggregatoren widersprüchlich; ausgebucht m. Ticketbörse), `gfny-alpes-vaujany-croix-de-fer` (unverifizierte „Frühjahrs-/Herbstausgabe" entfernt; 118 km/4000 Hm offiziell), `marmotte-granfondo-valais` (Ultrafondo 242→241, Mediofondo 77/3000; 4700 Hm belegt via offiziellem GPX behalten), `talsperren-rundfahrt-gevelsberg` (29. Auflage, 5 Strecken 42–203 km; websiteUrl skiclubgevelsberg→**skiclub-gevelsberg.de**), `uec-gravel-european-championship-houffalize` (48-km-Runde ×3=**144 km**; Côte de Saint-Roch 11,2 %; 70 % offroad; WM-Qualifier), `sauerland-rundfahrt` (Deutschlands 2. UCI-Etappenrennen, 4 Etappen **403,5 km**; 600→404; unbelegte 8000 Hm **entfernt**; disputierte UCI-Kategorie weggelassen), `shelter-attack-flensburg` (Bikepacking 600 km; Skamlingsbanken/Himmelbjerget; Gruppen- vs. Individualstart), `nuffna-horb-am-neckar` (Erstauflage, self-supported Gravel-Bikepacking 500 km/9000 Hm, 4 Checkpoints).
  - **Triathlon (12):** `ironman-703-leipzig` (Premiere Cospudener See, ~2.400 Athleten; unbelegte 600 Hm **entfernt**; endurance.biz-Bild **entfernt**), `ironman-703-vichy` (**gleicher Tag** wie Volldistanz 23.08.), `ironman-vichy` (Voll — **neu im IRONMAN-Europa-Kalender 2026**; unbelegte 1100 Hm + kavval-Bild **entfernt**), `poettschinger-aquathlon` (ÖTRV; Fun 200/3, Speed 266/4; distanceKm +4,3), `trifun-pellworm` (22. Auflage, Nordsee-Insel; websiteUrl→**pellworm-trifun.de**; distanceKm 25→25,5; Aggregator-Bild entfernt), `aischgrund-triathlon-neustadt-aisch` (38. Auflage, Mittelfränk. Meisterschaft; Veranstalter **DLRG OV** korrigiert; websiteUrl→**tri-nea.de**; distanceKm +25,4; hdsports-Bild entfernt), `elbe-triathlon-hamburg` (14. Auflage, ~1.900 Startplätze; Venue **Dove Elbe/Regattastrecke Allermöhe**; distanceKm +51,5), `gochnesstriathlon` (500/18/5; distanceKm 26→23,5; totes 404-Bild entfernt), `goettinger-stadtwerke-volkstriathlon` (Veranstalter **GoeSF** korrigiert; distanceKm +26), `ingelheimer-triathlon-der-kleine-karl` (2. Auflage; 256×256-Logo-Bild entfernt), `kallinchen-triathlon-zossen` (seit 1989, ausgebucht; Venue **Motzener See** korrigiert; distanceKm 26→32; kavval-Bild entfernt), `podersdorf-triathlon` (~39. Auflage, 4 Distanzen; unbelegte 100 Hm + tri2b-Bild entfernt), `bergwitz-triathlon-kemberg` (35. Auflage; 2026 **nur Sprint** — Olympische Distanz entfernt; distanceKm 51→28,75; kavval-Bild entfernt), `hannover-triathlon-maschsee` (19. Auflage, ausverkauft >2.500; distanceKm 52→49,7; unbelegte 200 Hm entfernt).
- **2 Events entfernt:** `3rides-gravel-ostbelgien-2026` (offiziell auf Juli 2027 verschoben) + `bergzeitfahren-schmelz-lollar-2026` (2026 abgesagt). Beide gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, **1184 pages**, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap **415** URLs (nur indexierbar, keine past-URLs; 418→415 durch 2 Removals + saisonalen past-Zuwachs). noindex-Feature + JSON-LD (`SportsEvent`) intakt — keine Code-Änderung nötig.

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
