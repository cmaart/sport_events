# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-09)
- Events gesamt: **1136** | upcoming (>= heute): **419** | past (noindex): **717**
- Letzter Lauf: Enrichment + Verifikation (2026-08-09) — 25 Bestandsevents veredelt/korrigiert (soonest-first, 23.–30.08.2026, AT/DE + CH/NO/HU/FI/IE/GB int'l), 0 Neuanlagen (Anti-Flut, weiterhin 155 dünne upcoming), 0 entfernt (alle 25 offiziell bestätigt); Fehler behoben: Käringsund Mitteldistanz 113→**Olympisch 51,5** km, tote/Föderations-URLs korrigiert (aischgrund→tri-nea.de, trifun-pellworm→pellworm-trifun.de, lausanne→trilausanne.ch), unbelegte Elevation aus 6 Events entfernt
- Build zuletzt grün: 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **474 URLs** (nur indexierbar, keine past-URLs; Rückgang 492→474 durch neu vergangene Events, keine Removals)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 179→**155** (−24); missing distanceKm (upcoming) 36→**35** (−1); missing elevationGainM (upcoming) 214→**221** (+7 — unbelegte Werte entfernt statt geraten: Breisgau, Bad Radkersburg, XTERRA, 3MUC, Hardman, Covestro, GFNY Bremen); missing imageUrl (upcoming) 27→**27**

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
- **ladies-tri-breitenbrunn:** offizielle Domain ladies-triathlon.at löste diesen Lauf nicht auf (DNS ENOTFOUND aus der Umgebung); Datum/Distanz via offizielle events.at-Registrierung „14. P3 Ladies Triathlon" (23.08.2026, 0,5/20/4) bestätigt. Domain nächsten Lauf erneut prüfen — falls dauerhaft tot, websiteUrl korrigieren.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (155 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~155 dünne Beschreibungen; nächste soonest-first-Batch ab 30.08. → September-Events (sauerland-rundfahrt, shelter-attack-flensburg, 3rides-gravel, podersdorf, oetztaler-radmarathon, letape-romania …) priorisieren. imageUrl-Lücken bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist (odyssey-st-neots, gelreman-arnhem, altwarmbuchener/Hannover-Lahe, taegi-tri).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Enrichment-Backlog soonest-first (23.–30.08.):** 25 Events veredelt/verifiziert; thin upcoming 179→155.
- **Käringsund Triathlon Åland:** war fälschlich als Mitteldistanz 113 km erfasst — offiziell (triathlon.ax) gibt es keine Mitteldistanz; 2026 neu Olympisch als längste Distanz → Kat.→Olympisch/Sprint, distanceKm→51,5.
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-09 (Bärentriathlon/Trifun-Pellworm/Elbe/Aischgrund/Covestro/Goch/Beuchaer event-DB gegengeprüft) |
| triathlon-austria.at / ÖTRV event-DB | 2026-08-09 (Pöttschinger Aquathlon, XTERRA Austria, Bad Radkersburg gegengeprüft) |
| swisstriathlon.ch / trilausanne.ch / triathlonbasel.ch | 2026-08-09 (Lausanne 32. Aufl. Gold-Status, Basel 3. Aufl. gegengeprüft) |
| birken.no (Birkebeiner-Serie NO) | 2026-08-09 (Birkebeinerrittet 33. Aufl. + GravelBirken Distanzen offiziell) |
| ironman.com Kalender (europaweit) | 2026-08-05 (Tallinn 70.3 EM via IRONMAN-Europe-Kanal; ironman.com selbst bot-blocked) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten) |
> Hinweis: 2026-08-09 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 25 Events 23.–30.08.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~1 Monat am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten).

---

## Quellen-Durchgang: 2026-08-09 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 179 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 25 künftige Events (soonest-first, 23.–30.08.2026, AT/DE + CH/NO/HU/FI/IE/GB) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes veredelte Event hat ein offiziell bestätigtes 2026-Datum. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`, `BreadcrumbList`, `ItemList`, `Organization`/`WebSite`) intakt geprüft — keine Code-Änderung nötig.

- **25 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Venue-/Distanz-/Kategorie-/URL-/Elevation-Fehler behoben):
  - **Triathlon DE (10):** `breisgau-triathlon-malterdingen` (35. Aufl., ausverkauft; Mittel 1,9/80/21,1 + Jedermann 0,7/32/5; unbelegte 800 Hm entfernt), `baerentriathlon-bad-zwischenahn` (33. Aufl. via DTU; Zeitplan Sa Swim&Run/So Haupttag), `beuchaer-triathlon` (28. Aufl.; Schwimmen 200/400 m Autobahnsee), `knappenman-lohsa` (38. Aufl., 5 Distanzen, Meldeschluss 31.07.), `mendener-cross-triathlon` (30. Aufl.; **falsche Distanzen 0,5/15/6 → real 1,0/24,8/9,4**; distanceKm 21→35), `trifun-pellworm` (22. Aufl.; **websiteUrl Föderationsportal → pellworm-trifun.de**; Nordsee-Schwimmen), `aischgrund-triathlon-neustadt-aisch` (38. Aufl.; **Veranstalter DLRG statt „TC ATSV 04"; tote URL → tri-nea.de**; nur Sprint 0,4/20/5, erfundene 2. Distanz entfernt), `covestro-triathlon-krefeld` (seit 1988; **Rad 38,5→40**; ausverkauft; unbelegte 150 Hm entfernt), `elbe-triathlon-hamburg` (**14. Aufl.**, ausverkauft ~1.900 Plätze; +distanceKm 52), `gochnesstriathlon` (seit 2010, TV Goch; **Rad 20→18**; distanceKm 26→24), `3muc-triathlon-muenchen` (Regattastrecke '72; Volksdistanz/Olympisch; unbelegte 200 Hm entfernt).
  - **Triathlon AT/CH/int'l (7):** `ladies-tri-breitenbrunn` (**14. P3 Ladies Triathlon** via events.at; 0,5/20/4), `poettschinger-aquathlon` (16. Aufl.; FUN 200/3000 + SPEED 266/4000), `xterra-austria` (**2. Aufl.**, neue Strecke Altausseer Seepark, ÖM Crosstriathlon; distanceKm 37→**46,5**; unbelegte 1200 Hm entfernt), `ultra-triathlon-bad-radkersburg` (Single/Double/Triple-Ultra, Triple = IUTA-WM 2026; **„Hügelkurs"/Thermalbad-Ziel falsch → flach, Ziel Sportzentrum, Parktherme-Becken**; unbelegte 2500 Hm entfernt), `karingsund-triathlon-aland` (**Mitteldistanz 113 → Olympisch 51,5**; seit 2009, Pause 22–23), `triathlon-basel` (3. Aufl., Rhein-Schwimmen; Runden 5×8/2×8 km), `triathlon-lausanne` (**32. Aufl.**, Swiss-Triathlon Gold; **websiteUrl → trilausanne.ch**).
  - **Cycling (6):** `balaton-gravel-derby` (Challenge 370/4.000 + Explore 100/1.200 + Adventure ohne Zeitnahme; 1.000er-Limit), `birkebeinerrittet-lillehammer` (**33. Aufl.**; **Pflichtrucksack 3,5→2 kg korrigiert**, unbelegte „16.000 TN" entfernt), `gravelbirken-lillehammer` (100 = 110,4/1.729, 200 = 203,6/>3.000; distanceKm 195→204), `exmoor-beast-sportive` (Beast 161/Beauty 105/Breeze 68 km, Dunkery Beacon), `hardman-killarney` (Irlands einzige Volldistanz, ~15 J. Historie, 15.000 € Preisgeld; unbelegte 2000 Hm entfernt), `arboe-bergpreis-afritz` (**28. Aufl.**; EZF 6,2/540 @9 % + Massenstart 2,1/198).
- **0 Event entfernt / 0 neu.** Alle 25 offiziell bestätigt; keine neuen Absagen.
- **Datenqualität:** thin upcoming 179→155 (−24). 7 unbelegte Elevation-Werte entfernt statt geraten (Breisgau, Bad Radkersburg, XTERRA, 3MUC, Hardman, Covestro, GFNY Bremen).
- **SEO / Sitemap:** `astro build` grün, 1186 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 474 URLs (nur indexierbar, keine past-URLs; 492→474 durch neu vergangene Events). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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
