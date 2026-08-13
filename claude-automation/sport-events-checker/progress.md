# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-13)
- Events gesamt: **1135** | upcoming (>= heute): **402** | past (noindex): **733**
- Letzter Lauf: Enrichment + Verifikation (2026-08-13) — 27 Bestandsevents veredelt/korrigiert (soonest-first, 22.–30.08.2026, AT/DE-Cycling + GranFondo/Alpen + IRONMAN/Challenge + kleine DE/AT-Triathlons + Nordic/CH), 0 Neuanlagen (Anti-Flut), 1 Event entfernt (LadiesTri Breitenbrunn — offiziell abgesagt), zahlreiche Distanz-/Kategorie-/URL-/Venue-Fehler behoben
- Build zuletzt grün: 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap 453 URLs (nur indexierbar, keine past-URLs; Rückgang ggü. 492 durch 1 Removal + seit 08-05 neu vergangene Events)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter, zu Laufbeginn/-ende): thin upcoming 212→**183** (−29); missing distanceKm (upcoming) 36→**36** (Fixes + neu-vergangene neutralisieren sich); missing elevationGainM (upcoming) 206→**213** (+7 — unbelegte/fabrizierte Werte entfernt statt geraten: Leipzig, Vichy full, Hardman, XTERRA, breisgau, ultra-radkersburg, 3muc, Balaton); missing imageUrl (upcoming) 27→**27** (keine Aggregatorbilder ergänzt)

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
- LadiesTri Breitenbrunn (Breitenbrunn/Neusiedler See, Burgenland) — abgesagt/eingestellt: Veranstalter uttb.at führt „ABGESAGT – LadiesTri Neuer Strand", Event-Domain ladies-triathlon.at ohne DNS (apex+www tot), im BTRV-Kalender 2026 nicht mehr gelistet. Nur Aggregator hdsports.org führt 23.08.2026 spekulativ. Am 13.08. entfernt. Nicht anlegen bis offizielle Ankündigung einer neuen Ausgabe.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (183 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **imageUrl-Kandidaten (Aggregatorbild belassen, offizielles Hero suchen):** `3muc-triathlon-muenchen` (aktuell hdsports-URL; 3muc.com nur Platzhalter-OG). International/flat weiterhin ohne verifizierbares Hero: odyssey-st-neots, gelreman-arnhem, altwarmbuchener/Hannover-Lahe, taegi-tri.
- **Enrichment-Backlog (upcoming):** noch ~183 dünne Beschreibungen; nächste soonest-first-Batch ab **03.09.2026** (sauerland-rundfahrt u.a.) priorisieren (22.–30.08. jetzt weitgehend abgearbeitet).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **LadiesTri Breitenbrunn (REMOVE candidate → entfernt):** uttb.at „ABGESAGT", Domain ladies-triathlon.at ohne DNS, nicht im BTRV-2026-Kalender → gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
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
| ironman.com Kalender (europaweit) | 2026-08-13 (Leipzig/Vichy 70.3+full/Poznań direkt über offizielle Race-/Venue-Seiten bzw. Vichy-Communauté-Kanal bestätigt; ironman.com-Race-Pages teils bot-blocked) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
| burgenland-triathlon.at/termine (BTRV-Kalender) | 2026-08-13 (Pöttschinger Aquathlon bestätigt; LadiesTri Breitenbrunn NICHT gelistet → Removal-Grundlage) |
> Hinweis: 2026-08-13 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 27 Events 22.–30.08.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit >1 Monat am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-08-13 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 212 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 27 künftige Events (soonest-first, 22.–30.08.2026) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`/`ItemList`/`BreadcrumbList`) intakt geprüft — keine Code-Änderung nötig.

- **27 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Distanz-/Kategorie-/URL-/Venue-Fehler behoben):
  - **AT/DE + Alpen-Cycling (7):** `wendelsteinrundfahrt` (35. Auflage, 4 Strecken 50/120/165/205 km, Route erst 1 Woche vorher), `gfny-alpes-vaujany-croix-de-fer` (118 km/4000 Hm über Croix de Fer 2067 m + Glandon), `granfondo-san-gottardo` (110/57/42 km ab Ambrì, Tremola/Furka/Nufenen), `haute-route-alps` (7 Etappen Nice→Thonon, 808 km/19.255 Hm, ausverkauft), `balaton-gravel-derby` (370-km-Challenge + 100-km-Explore; unbelegte 4000 Hm entfernt), `marmotte-granfondo-valais` (Tour des Stations, Marmotte 133 km/4700 Hm + Medio/Super/Ultra), `talsperren-rundfahrt-gevelsberg` (**Kat. `Radmarathon`→`RTF`** = offiziell untimed Breitensport-RTF, 29. Auflage, 203 km/3100 Hm).
  - **IRONMAN/Challenge + intl. Triathlon (7):** `ironman-703-leipzig` (Premiere, Neuseenclassics-Route, flach → unbelegte 600 Hm entfernt), `ironman-703-vichy` + `ironman-vichy` (**Comeback Volldistanz** 23.08. am Lac d'Allier; fabrizierte 1100 Hm entfernt), `ironman-703-poznan` (Kierskie See, Enea-Stadion-Finish, cap 1500 ausverkauft), `hardman-killarney-full-triathlon` (Irlands einzige Volldistanz, Ring of Kerry; unbelegte 2000 Hm entfernt), `xterra-austria` (**distanceKm 37→47**, 2. Auflage Altaussee, ÖM Crosstriathlon; fabrizierte 1200 Hm entfernt), `karingsund-triathlon-aland` (**Kat. Mitteldistanz→Olympische+Sprint**, distanceKm 113→52 — bietet 2026 keine Mitteldistanz).
  - **DE/AT-Triathlon (7):** `breisgau-triathlon-malterdingen` (Lauf 7→5 km korrigiert, fabrizierte 800 Hm entfernt), `ultra-triathlon-bad-radkersburg` (**websiteUrl-Fix** → ultratriathlon.at; IUTA-WM Triple; flache Loops → fabrizierte 2500 Hm entfernt), `3muc-triathlon-muenchen` (Regattastrecke, distanceKm 51→51,5, 200 Hm entfernt), `baerentriathlon-bad-zwischenahn` (33. Auflage, Legs aus TVN-Kalender, distanceKm 52→52,3), `beuchaer-triathlon` (**distanceKm 26→19,2** = reale 0,4/14,4/4,4), `knappenman-lohsa` (38. Auflage, 5 Formate Dreiweiberner See), `poettschinger-aquathlon` (16. Auflage, BTRV, Fun/Speed-Distanzen).
  - **Nordic + CH (6):** `birkebeinerrittet-lillehammer` (33. Auflage, 84 km Rena→Håkons Hall; Rucksack min. 2 kg korrigiert), `gravelbirken-lillehammer` (distanceKm 195→204; 110/204 km, cap verdoppelt), `exmoor-beast-sportive` (Wimbleball Lake, Beast 161 km über Dunkery Beacon), `triathlon-basel` (3. Auflage, Rhein-Schwimmen, Strecken-Details), `triathlon-lausanne` (32. Auflage Ouchy/Lac Léman; stray-quote JSON-Fix), `mendener-cross-triathlon` (**distanceKm 21→35**, 30. Auflage, reale Legs; `trifun-pellworm` **websiteUrl-Fix** → pellworm-trifun.de, 22. Auflage Wattenmeer-Sprint).
- **1 Event entfernt:** `ladies-tri-breitenbrunn-2026` (Breitenbrunn/Neusiedler See) — offiziell abgesagt (uttb.at „ABGESAGT", Domain ladies-triathlon.at ohne DNS, nicht im BTRV-2026-Kalender). Gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 453 URLs (nur indexierbar, keine past-URLs; entfernter LadiesTri nicht enthalten). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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

> Ältere Sessions (07-31, 07-29, 07-27, 07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
