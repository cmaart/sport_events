# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-15)
- Events gesamt: **1135** | upcoming (>= heute): **397** | past (noindex): **738**
- Letzter Lauf: Enrichment + Verifikation (2026-08-15) — 29 Bestandsevents veredelt/korrigiert (soonest-first, 23.–30.08.2026, AT/DE + international/IRONMAN/GFNY/Norwegen/Irland/UK/CH), 0 Neuanlagen (Anti-Flut), 1 Event entfernt (LadiesTri Breitenbrunn — laut ÖTRV-Verbandskalender „ABGESAGT"), diverse Distanz-/Venue-/Kategorie-/URL-Fehler behoben, viele unbelegte Elevation-Werte und Aggregator-Bilder entfernt
- Build zuletzt grün: **1185 pages, 0 errors**; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **451 URLs** (401 Event-Detailseiten, nur indexierbar, keine past-confirmed-URLs; entferntes LadiesTri nicht enthalten)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 179→**150** (−29); missing distanceKm (upcoming) 36→**31** (−5); missing elevationGainM (upcoming) 204→**208** (unbelegte Werte entfernt statt geraten); missing imageUrl (upcoming) 27→**36** (Aggregator-/falsch-proportionierte Bilder entfernt ohne offiziellen Ersatz)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen); cycloworld führt 02.08.2026 weiterhin spekulativ.
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell (fnldgrvl.com: „taking a hiatus in 2026"). Am 03.08. entfernt.
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine offiziell verifizierbare 2026-Ausgabe: miriquidi-mtb.de zeigt nur 2024-Inhalte, im MTB-Sachsen-Cup-Kalender 2026 nicht mehr enthalten. Am 05.08. entfernt.
- LadiesTri Breitenbrunn (Neusiedler See, Burgenland, AT) — 2026-Ausgabe (23.08.2026) laut ÖTRV-Verbandskalender „ABGESAGT LadiesTri Neuer Strand"; Veranstalterdomain ladies-triathlon.at nicht erreichbar (DNS ENOTFOUND). Am 15.08. entfernt. Nicht anlegen bis offizielle Neu-Ankündigung.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Veranstalter-/Verbandsquellen bestätigt (Ausnahme LadiesTri Breitenbrunn → als abgesagt entfernt).

### BACKLOG (offene Aufgaben)
- **Pure-Discovery-Aggregatoren am längsten offen (nächster Lauf priorisiert re-checken, nur Discovery):** UCI Gran Fondo World Series (zuletzt 2026-07-07), challenge-family.com Kalender (2026-07-14), k226.com Tri-Kalender (2026-07-14). Seit ~5 Wochen nicht gecrawlt — die letzten Läufe (07-31 … 08-15) waren reine Enrichment-/Verifikationsläufe über offizielle Einzelseiten. Kandidaten daraus nur nach offizieller Gegenprüfung + Anti-Flut anlegen.
- **Discovery-Kandidaten 2026-07-29 (weiterhin NICHT bearbeitet — offiziell verifizieren, DANN erst anlegen):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (~150 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei Gelegenheit entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt — plausibel belassen, bei Gelegenheit offiziell nachverifizieren.
- **ultra-triathlon-bad-radkersburg:** `dates.start` steht auf 28.08 (Festival-Auftakt/Triple Ultra); der Single-Ultra (Langdistanz-Referenz) läuft ggf. am 29.08. Falls gewünscht auf 29.08 anpassen.
- **Enrichment-Backlog (upcoming):** noch ~150 dünne Beschreibungen; September-Events (soonest-first) als Nächstes priorisieren (August weitgehend abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events ohne verifizierbares offizielles Hero-Bild.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-15 (Beuchaer/GochNess/Ingelheim/Aischgrund event-DB direkt gegengeprüft) |
| triathlon-austria.at/de/service-termine (ÖTRV) | 2026-08-15 (Pöttsching + XTERRA Austria bestätigt; LadiesTri Breitenbrunn als „ABGESAGT" gelistet → entfernt) |
| ironman.com / IRONMAN-Regionalseiten | 2026-08-15 (70.3 Poznań via ironmanpoznan.com.pl bestätigt/ausverkauft) |
| birken.no (Birkebeinerrittet/Gravelbirken, NO) | 2026-08-15 |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 |
> Hinweis: 2026-08-15 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 29 Events 23.–30.08.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~5 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-08-15 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 179 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 30 künftige Events (soonest-first, 23.–30.08.2026, AT/DE + international/IRONMAN/GFNY/Norwegen/Irland/UK/CH/PL/RO) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs` + `src/pages/events/[slug].astro`) und JSON-LD intakt geprüft — keine Code-Änderung nötig.

- **29 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Venue-/Kategorie-/URL-Fehler behoben):
  - **Triathlon DE (14):** `breisgau-triathlon-malterdingen` (35. Auflage, Malterdinger Baggersee; Distanzfehler → Mittel 1,9/80/21, ausverkauft; unbelegte 800 Hm + Aggregator-Bild entfernt), `3muc-triathlon-muenchen` (Regattastrecke Oberschleißheim, Volks-/Olympische Distanz, Limits; 200 Hm + hdsports-Bild entfernt), `baerentriathlon-bad-zwischenahn` (33. Auflage, Zwischenahner Meer; kavval-Bild entfernt), `beuchaer-triathlon` (28. Auflage, Autobahnsee Beucha; distanceKm 26→19), `knappenman-lohsa` (38. Auflage, Dreiweiberner See; alle 5 Distanzen), `mendener-cross-triathlon` (30. Auflage; **Venue-Fix:** beheiztes 50-m-Bad statt Freiwasser; distanceKm 21→35), `trifun-pellworm` (22. Auflage; websiteUrl-Fix → pellworm-trifun.de; distanceKm 25→26), `gochnesstriathlon` (TV Goch; distanceKm 26→24), `aischgrund-triathlon-neustadt-aisch` (38. Auflage, Mittelfränkische Meisterschaft; websiteUrl → tri-nea.de; distanceKm +25,4), `covestro-triathlon-krefeld` (Elfrather See seit 1988; Rad 38,5→40; distanceKm 50→51,5; 150 Hm + Aggregator-Bild entfernt), `elbe-triathlon-hamburg` (14. Auflage, ausverkauft; **Venue-Fix:** Dove Elbe/Eichbaumsee statt „Allermöher See"; distanceKm +51,5), `goettinger-stadtwerke-volkstriathlon` (Volkstri 0,5/20/5, Limit 600; distanceKm +25,5), `ingelheimer-triathlon-der-kleine-karl` (2. Auflage, von Mai 2025 verlegt; distanceKm 26→25,5), `kallinchen-triathlon-zossen` (seit 1989, ausverkauft; **Venue-Fix:** Motzener See; +Olympische Distanz; distanceKm 26→50,5).
  - **Triathlon AT/CH/int'l (8):** `poettschinger-aquathlon` (16. Auflage, Freibad Pöttsching; +distanceKm 4), `triathlon-basel` (3. Auflage; **Rhein-Abwärts-Schwimmen 3 km**; distanceKm 52→53), `triathlon-lausanne` (32. Auflage, Bellerive/Ouchy; Koordinaten verfeinert), `karingsund-triathlon-aland` (16. Auflage; **neu Olympische Distanz 2026** statt Mittel; distanceKm 113→51,5), `ultra-triathlon-bad-radkersburg` (**Beschreibungs-Fix:** flacher Rundkurs Parktherme statt „hügelige Weinregion"; websiteUrl → ultratriathlon.at; 2500 Hm entfernt), `xterra-austria` (2. Auflage, Altaussee, ÖM; distanceKm 37→46,5; 1200 Hm entfernt), `hardman-killarney-full-triathlon` (Ring of Kerry/Killarney NP; 2000 Hm entfernt), `ironman-703-poznan` (ausverkauft; **Beschreibungs-Fix:** flach statt „hügelig"; Kierski See; offizielles Hero-Bild).
  - **Cycling (7):** `balaton-gravel-derby` (Challenge 370/4000, Explore 100/1000 Hm; offizielles 2026-Header-Bild), `lhistorica-bad-wimsbach` (Kat. `Gran Fondo`→**RTF** = untimed Genussfahrt; ~17 km, Moorbad Neydharting), `birkebeinerrittet-lillehammer` (33. Auflage, Rena→Håkons Hall; Rucksack-Mindestgewicht 3,5→**2 kg**; Cut-offs), `gravelbirken-lillehammer` (100 = 110,4 km/1729 Hm, 200 = 203,6 km/3000+ Hm; distanceKm 195→204), `exmoor-beast-sportive` (Beast 161/Beauty 105/Breeze 68 km, Dunkery Beacon; keine offizielle Elevation → keine gesetzt), `arboe-bergpreis-afritz` (3 Bergstrecken 1,1/2,1/6,2 km; **Location-Fix:** Afritz am See–Verditz; radsport-news-Bild entfernt), `letape-romania-bucharest` (5. Auflage, Constitution Square; 3 Strecken; +elevationGainM 200).
- **1 Event entfernt:** `ladies-tri-breitenbrunn-2026` — ÖTRV-Verbandskalender führt 23.08.2026 als „ABGESAGT LadiesTri Neuer Strand"; Veranstalterdomain nicht erreichbar. Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, **1185 pages, 0 errors**; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 451 URLs (401 Event-Detailseiten, nur indexierbar, keine past-confirmed-URLs; entferntes LadiesTri nicht enthalten). noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss, date-driven) und JSON-LD (`SportsEvent`, `ItemList`, `BreadcrumbList`, `Organization`/`WebSite`) intakt — keine Code-Änderung nötig.

---

## Quellen-Durchgang: 2026-08-05 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 199 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 26 künftige Events (soonest-first, 07.–23.08.2026, AT/DE + international/IRONMAN/GFNY) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD intakt geprüft — keine Code-Änderung nötig.

- **25 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Venue-/Distanz-/Kategorie-/URL-Fehler behoben):
  - **Triathlon DE (9):** `altwarmbuchener-triathlon-hannover` (→ offizieller Name **Hannover-Lahe Triathlon**, 12. Auflage; Sprint 750/20/5 + Olympisch 1500/40/10; distanceKm +51,5; Aggregator-imageUrl 2,9:1 entfernt), `salzlandsparkassen-triathlon-hecklingen` (8. Auflage, Löderburger See; Olympic-Rad **42** statt 40 km; distanceKm 52→54), `viernheimer-triathlon` (42. Auflage, Hemsbacher Wiesensee, Para-DM + 2. BL Süd), `muldental-triathlon-grimma` (21. Auflage; distanceKm +51,5), `triathlon-hildesheim` (JoWiese, Oberliga; distanceKm 26→28,5), `tri-4-fun-minden` (17. Auflage, Kutenhausen; distanceKm +25,5), `swk-triathlon-kaiserslautern` (**Comeback**; Warmfreibad; distanceKm 25→25,5; websiteUrl→fck-triathlon.de), `erfurt-triathlon` (38. Auflage, Strandbad Stotternheim; distanceKm 52→51,5), `schlosstriathlon-kossenblatt` (10. Auflage Cross-Tri; +registrationUrl).
  - **Triathlon AT/CH/int'l (7):** `jannersee-triathlon` (32. Auflage, Dornbirn; distanceKm 20→20,4; unbelegte 100 Hm entfernt), `thiersee-triathlon` (8. Auflage; distanceKm 52→51,5, elevation 500→**440**; ausverkauft), `kraigerseetriathlon-launsdorf` (**Venue-Fix:** Kraigersee/Seebichl; 10. Auflage), `taegi-tri-wettingen` (33. Auflage; distanceKm 52→44,8; Aggregator-imageUrl entfernt), `odyssey-st-neots` (ATW, Half+Full), `gelreman-arnhem` (**distanceKm 113→226** = Volldistanz; ausverkauft), `ironman-703-tallinn` (70.3 **EM** 2026; Voll-IRONMAN am Vortag).
  - **Cycling (9):** `sommerholz-bergsprint` (3,43 km/205 Hm), `zeitfahr-cup-seibersdorf-44` (44 km TT; unbelegte 128 Hm + „King of the Lake"-Claim entfernt), `alpina-zeitfahrcup-st-georgen` (11,5 km Bergzeitfahren; 300 Hm entfernt), `erzgebirgstour-crottendorf` (20. Erzgebirgstour, 90 km/2200 Hm), `kufsteinerland-radmarathon` (Kat. Gran Fondo→**Radmarathon**, 95 km/1160 Hm), `gfny-orcieres` (elevation 4469→4400), `pzu-granfondo-warszawa` (109/81/25 km; keine Hm), `garmin-triathlon-tour-stezyca` (**Location-Fix:** Stężyca *Lubelskie*), `triatlon-kocevje` (SLO-Staatsmeisterschaft; distanceKm 25→25,65).
- **1 Event entfernt:** `miriquidi-bike-challenge-2026` (Marienberg) — keine offiziell verifizierbare 2026-Ausgabe. Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints. Sitemap 492 URLs (nur indexierbar). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

---

## Quellen-Durchgang: 2026-08-03 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 275 dünnen upcoming-Beschreibungen und 43 fehlenden distanceKm ausschließlich veredelt). 4 Research-Agents haben 38 künftige Events (soonest-first, komplett August 2026, AT/DE + große internationale + IRONMAN) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes angefasste Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur intakt geprüft — keine Code-Änderung nötig.

- **38 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; viele Venue-/Kategorie-/Distanz-Fehler behoben):
  - **AT/DE-Cycling (8):** `laacher-see-mtb-marathon` (elevation 1300→**2240**), `gainfeldclassic-bischofshofen` (distanceKm 4→3,4; 281 Hm), `gravel-around-salzkammergut` (**Distanzfehler:** 238→**217 km**, 4500→**3800 Hm**; RAA), `hahnenkamm-mtb-kitzbuehel` (37. Auflage, 9 km/940 Hm), `gaisberg-vertical-salzburg` (8,5 km/650 Hm), `cyclassics-hamburg` (elevation 400 entfernt — flach; 110/60/206), `eroica-germania` (Kat. `Gran Fondo`→**RTF**), `grosse-weserrunde-rinteln` (16. Auflage; elevation 5800 entfernt).
  - **DE-Triathlon (10):** `bornsdorf-triathlon` (websiteUrl fix, Waldbad; +Olympisch; distanceKm 56), `nordschwarzwald-triathlon` (Nagoldtalsperre; Kat.→**Sprintdistanz**; elevation 3500→**1484**), `edermuender-triathlon` (websiteUrl fix, Freibad Holzhausen; distanceKm 16), `kn-foerde-triathlon-kiel` (Schwimmen 750→**500 m**, Rad 20→22; distanceKm 26→28), `rodgau-triathlon` (23. Auflage, ausverkauft), `stadtwerke-halle-triathlon` (Olympisch **entfernt** — nur Sprint; Saale; distanceKm 51→26), `triathlon-festival-rheinhessen` (Neubornbad Wörrstadt; elevation 300 entfernt; distanceKm 51), `ilmenauer-teamtriathlon` (websiteUrl→teamtria.de, Talsperre Heyda; distanceKm 26), `elm-lappwald-triathlon-helmstedt` (Waldbad Birkerteich; distanceKm 26→27), `emsland-triathlon-meppen` (Möllersee; Olympisch **entfernt**; distanceKm 51→30).
  - **International Triathlon (10):** `ironman-kalmar`/`ironman-copenhagen`/`ironman-tallinn` (unbelegte Elevation 500/400/700 entfernt), `ironman-leeds` (Venue **Waterloo Lake**; Elevation 1600 entfernt), `ironman-703-duisburg` (Elevation 700 entfernt), `ironman-703-hradec-kralove` (3. Auflage), `inferno-triathlon` (3/97/30/25; Schilthorn; 5500 Hm bestätigt), `valais-triathlon-festival` (3. Auflage), `aberfeldy-triathlon` (Loch Tay; „national championship"-Claim entschärft), `odyssey-st-neots` (+**Langdistanz**).
  - **Gravel/Ultra/Rad international (10):** `gravel-weekend-tukums` (UCI Gravel WS, LV; 140/75), `tortour-ultracycling` (Schaffhausen; 1000/500/250/50), `nordic-chase-cph-osl` (Offroad 60→**>80 %**, elevation 7300→**7200**), `axtri-aurland` (Rad 94→**98 km**; distanceKm 117→**121**, elevation 3050→**4200**), `lidl-deutschland-tour` (**741 km**/>10.000 m; UCI ProSeries), `hallig-dreeathlon-langenhorn` (19. Auflage; distanceKm 31), `dublin-city-triathlon` (Liffey 750 m; keine Olympic 2026), `emede-triatlon-valladolid` (Erstauflage, Pisuerga; cap 450), `gelreman-arnhem` (7. Auflage; Half ausverkauft), `iron-power-bauer-wittstock` (17. Auflage, Dranse).
- **1 Event entfernt:** `fnld-grvl-lahti-2026` — Veranstalter pausiert 2026 offiziell. Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1187 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints. Sitemap 494 URLs (nur indexierbar). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

---

> Ältere Sessions (07-31, 07-29, 07-27, 07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
