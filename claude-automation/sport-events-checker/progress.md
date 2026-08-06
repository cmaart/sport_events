# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-05)
- Events gesamt: **1136** | upcoming (>= heute): **440** | past (noindex): **696**
- Letzter Lauf: Enrichment + Verifikation (2026-08-05) — 25 Bestandsevents veredelt/korrigiert (soonest-first, 07.–23.08.2026, AT/DE + international/IRONMAN/GFNY), 0 Neuanlagen (Anti-Flut), 1 Event entfernt (Miriquidi Bike Challenge — keine offiziell verifizierbare 2026-Ausgabe), diverse Venue-/Distanz-/Kategorie-/URL-Fehler behoben
- Build zuletzt grün: 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap 492 URLs (nur indexierbar, keine past-URLs; Rückgang ggü. 494 durch 1 Removal + neu vergangene Events)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 199→**176** (−23); missing distanceKm (upcoming) 39→**36** (−3); missing elevationGainM (upcoming) 224→**226** (unbelegte Werte entfernt statt geraten); missing imageUrl (upcoming) 27→**28** (2 Aggregator-Bilder entfernt: Hannover-Lahe, Tägi-Tri)

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
- **Enrichment-Backlog (upcoming):** noch ~176 dünne Beschreibungen; restliche späte-August- und September-Events (soonest-first) als Nächstes priorisieren (07.–23.08. weitgehend abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist (odyssey-st-neots, gelreman-arnhem, altwarmbuchener/Hannover-Lahe, taegi-tri).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Miriquidi Bike Challenge (REMOVE candidate → entfernt):** offizielle Seite nur 2024, im MTB-Sachsen-Cup-2026-Kalender nicht mehr geführt → gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-05 (Minden/Hecklingen/Viernheim/Grimma/Hildesheim/Kaiserslautern event-DB direkt gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-05 (Kraigersee event-DB gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-05 (Tallinn 70.3 EM via IRONMAN-Europe-Kanal bestätigt; ironman.com selbst weiter bot-blocked) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-05 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 25 Events 07.–23.08.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~1 Monat am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

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

## Quellen-Durchgang: 2026-08-03 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 275 dünnen upcoming-Beschreibungen und 43 fehlenden distanceKm ausschließlich veredelt). 4 Research-Agents haben 38 künftige Events (soonest-first, komplett August 2026, AT/DE + große internationale + IRONMAN) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes angefasste Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur intakt geprüft — keine Code-Änderung nötig.

- **38 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; viele Venue-/Kategorie-/Distanz-Fehler behoben):
  - **AT/DE-Cycling (8):** `laacher-see-mtb-marathon` (elevation 1300→**2240** via runtix/zeitplan, s. ERLEDIGT), `gainfeldclassic-bischofshofen` (distanceKm 4→3,4; 281 Hm), `gravel-around-salzkammergut` (**Distanzfehler:** 238→**217 km**, 4500→**3800 Hm**; 300-Limit, RAA), `hahnenkamm-mtb-kitzbuehel` (37. Auflage, 9 km/940 Hm; falsche „Rennrad-Kategorien" entfernt), `gaisberg-vertical-salzburg` (8,5 km/650 Hm; Start Guggenthal→Gaisbergspitze), `cyclassics-hamburg` (elevation 400 entfernt — flach, offiziell keine Hm; ADAC-Route 110/60/206), `eroica-germania` (Kat. `Gran Fondo`→**RTF** = nicht gewertete Cicloturistica), `grosse-weserrunde-rinteln` (16. Auflage; elevation 5800 entfernt — offiziell keine Hm).
  - **DE-Triathlon (10):** `bornsdorf-triathlon` (websiteUrl fix, Venue Waldbad; +Olympische Distanz; distanceKm 56), `nordschwarzwald-triathlon` (Venue Nagoldtalsperre; Kat.→**Sprintdistanz**; elevation 3500→**1484**), `edermuender-triathlon` (websiteUrl fix, Venue Freibad Holzhausen; distanceKm 16), `kn-foerde-triathlon-kiel` (Schwimmen 750→**500 m**, Rad 20→22; distanceKm 26→28), `rodgau-triathlon` (23. Auflage, ausverkauft), `stadtwerke-halle-triathlon` (Olympische Distanz **entfernt** — nur Sprint; Saale-Schwimmen; distanceKm 51→26), `triathlon-festival-rheinhessen` (Venue Neubornbad Wörrstadt; elevation 300 entfernt; distanceKm 51), `ilmenauer-teamtriathlon` (websiteUrl→teamtria.de, Venue Talsperre Heyda; distanceKm 26), `elm-lappwald-triathlon-helmstedt` (Venue Waldbad Birkerteich; distanceKm 26→27), `emsland-triathlon-meppen` (Venue Möllersee statt Ems; Olympische Distanz **entfernt** — nur Sprint; distanceKm 51→30).
  - **International Triathlon (10):** `ironman-kalmar`/`ironman-copenhagen`/`ironman-tallinn` (Beschreibungen; unbelegte Elevation 500/400/700 entfernt), `ironman-leeds` (Venue **Waterloo Lake** statt „Roundhay Lake"; Elevation 1600 entfernt), `ironman-703-duisburg` (Elevation 700 entfernt — Ruhrgebiet flach), `ironman-703-hradec-kralove` (3. Auflage; Teilnehmerzahl-Fehler korrigiert), `inferno-triathlon` (3/97/30/25; Schilthorn 2970 m; 5500 Hm **bestätigt/behalten**), `valais-triathlon-festival` (3. Auflage, 4 Distanzen), `aberfeldy-triathlon` (Loch Tay; unbelegter „national championship"-Claim entschärft), `odyssey-st-neots` (+**Langdistanz** — Half + Full).
  - **Gravel/Ultra/Rad international (10):** `gravel-weekend-tukums` (UCI Gravel WS, LV; 140/75), `tortour-ultracycling` (Schaffhausen; 1000/500/250/50; 48h), `nordic-chase-cph-osl` (Offroad-Anteil 60→**>80 %**, elevation 7300→**7200**; cap 100 ausverkauft), `axtri-aurland` (Rad 94→**98 km**; distanceKm 117→**121**, elevation 3050→**4200**), `lidl-deutschland-tour` (**741 km**/>10.000 m statt 700/7500; UCI ProSeries statt WorldTour), `hallig-dreeathlon-langenhorn` (19. Auflage; distanceKm 31), `dublin-city-triathlon` (Schwimmen 750 m Liffey; keine Olympic 2026), `emede-triatlon-valladolid` (Erstauflage, Pisuerga; cap 450), `gelreman-arnhem` (7. Auflage, Rijkerswoerdse Plas; Half ausverkauft), `iron-power-bauer-wittstock` (17. Auflage, Dranse).
- **1 Event entfernt:** `fnld-grvl-lahti-2026` — Veranstalter pausiert 2026 offiziell (fnldgrvl.com „taking a hiatus in 2026"). Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1187 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 494 URLs (nur indexierbar, keine past-URLs). noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss, date-driven in astro.config.mjs) und JSON-LD intakt — keine Code-Änderung nötig.

---

## Quellen-Durchgang: 2026-07-31 (Enrichment- & Verifikations-Wartungslauf, Code-Fix)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei ~294 dünnen Beschreibungen und 43 fehlenden distanceKm ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, überwiegend August 2026, AT/DE + große internationale) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes angefasste Event hat ein offiziell bestätigtes 2026-Datum.

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Datenfehler behoben):
  - **AT-Cycling (6):** `bergkaiser-radmarathon-kematen` (**gravierender Fehler:** war fiktiver 155 km/3000 Hm „Inntal-Marathon" mit erfundenen „Nordketten-Bergen" → realer Bergsprint **25 km/1400 Hm** Kematen→Kühtai (2.020 m); Kat. `Radmarathon`→`Berg`; tote websiteUrl bergkaiser.at (DNS) → radsportevents.com), `clr-sauwald-bergsprint` (**Datumsfehler:** 13.08.→**14.08.2026** laut offizieller Seite; 10 km/420 Hm Rennrad-Bergzeitfahren bestätigt), `pirker-grenzerfahrung` (elevation 3150→**3050**, 27. Auflage, alle RTF/CTF-Strecken), `arlberg-giro` (**Streckenfehler:** falsche Pässe genannt → reale 2026-Alternativroute Silvretta gesperrt; 152→150 km, 2400→2500 Hm, ausverkauft), `race-around-austria` (Ultracycling-WM 2.200 km/30.000 Hm + Challenge-Varianten), `rad-am-salzburgring` (3 reale Bewerbe R1/R2/R3-EM; unbelegte „ÖM Masters" entfernt).
  - **DE-Cycling (6):** `nordschwarzwald-trophy` (**Distanzfehler:** distanceKm 69→**42** = reale MTB-Strecken 24/42; unplausible 2100 Hm entfernt — offiziell keine Hm publiziert), `goettinger-dreilaendermarathon` (Kat. `Radmarathon`→**RTF** = offiziell Radtourenfahrt, GPS-geführt/nicht gewertet; 222→230 km, 2800→3200 Hm, 5 Strecken), `wendland-chrono` (2. Auflage Zeitfahren, 22,8/45,6 km, neue TT-/Rennrad-Wertung 2026), `sks-sauerland-marathon` (Kat. `Gravel`→**Radmarathon**), `evertsberg-gravel` (**Distanzfehler:** 102/56→**158/90/53 km**, +1800 Hm, Nordic Gravel Series), `laacher-see-mtb-marathon` (bot-blocked → unverändert, s. BACKLOG).
  - **Triathlon AT/HU/SK (7):** `poettschinger-triathlon` (35. Auflage; Rad/Lauf 34/7,6→**36/7,5**; unbelegte 250 Hm entfernt), `steiraman-cross-triathlon` (1/38/12 km, 1200+1000 Hm, Grüne Lagune St. Margarethen; 2300→2200 Hm), `ferlach-aquathlon` (**Schwimmen 0,75→1,0 km** = ÖM-Distanz; ausverkauft/Warteliste), `slovakman-226-piestany` (23. Auflage, 3,8/180/42,2 Váh, SK+CZ-Meisterschaft), `extrememan-nagyatad` (37. Auflage, Baggersee Gyékényesi Kotró, HU-Langdistanz-Meisterschaft), `swim-run-swim-laengsee` (Format 1,5+5,4+1,0 = **7,9 km** statt 5; websiteUrl → alpenadriaswimcup.at), `marchfeld-triathlon-gerasdorf` (Sprint 0,5/20/5 + Olympisch 1,5/40/10; Veranstalter P3Event; unbelegte 100 Hm entfernt).
  - **International (5):** `alpe-dhuez-triathlon` (**halluzinierte Distanzen:** 3,9/177/40 → real **2,2/118/19** L-Format, 21 Kehren; erfundene 5000 Hm entfernt), `ironman-703-krakow` (Zakrzówek-Steinbruchsee, ausverkauft, WM-Quali), `xterra-czech-republic-prachatice` (1,5/33/10,5 Šumava, XTERRA World Tour), `triathlon-nyon` (37. Auflage, FISU WUC 2026; Rad 42, distanceKm 54→53,5), `cykelvasan-90-mora` (Kat. `Gravel`→**Radmarathon**; erfundene 820 Hm = Netto-Abfahrt, entfernt), `eiger-bike-challenge` (Kat. `Gravel`→**Radmarathon**; 80 km/4200 Hm bestätigt).
- **Code-Fix:** `src/lib/landing.ts` — fehlender `CY: 'zypern'` in `COUNTRY_SLUGS` ergänzt (seit 07-14 offen: `Record<Country,string>`-Typfehler in `astro check`, Zypern-Landing-Slug war `undefined`). Zypern hat nur 1 Event (< `MIN_EVENTS_PER_LANDING`) → keine eigene Landingpage, aber Typ jetzt vollständig; `astro check` wieder 0 errors.
- **0 entfernt / 0 neu.** Keine neuen Absagen — bergkaiser war ein Datenfehler, kein Nichtstattfinden.
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 526 URLs (nur indexierbar, keine past-URLs). noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss, date-driven in astro.config.mjs) und JSON-LD (`SportsEvent`, `ItemList`, `BreadcrumbList`) intakt — keine Code-Änderung nötig außer dem landing.ts-Fix.

---

> Ältere Sessions (07-29, 07-27, 07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
