# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-09-09)
- Events gesamt: **1135** | upcoming (>= heute): **186** | past (noindex): **949**
- Letzter Lauf: Enrichment + Verifikation (2026-09-09) — 24 Bestandsevents veredelt/korrigiert (soonest-first, 10.–13.09.2026, AT/DE + NL/CH/IT/PT/FI/SE/FR/RS), 0 Neuanlagen (Anti-Flut), **1 entfernt** (`center-triathlon-neubrandenburg` — laut offiziellem Verbandskalender reiner Schüler-/Nachwuchswettkampf in der Schwimmhalle, nicht der im JSON behauptete Erwachsenen-Olympisch/Sprint am Tollensesee → out of scope). Diverse Distanz-/Kategorie-/Venue-/Land-/URL-Fehler behoben.
- Build zuletzt grün: 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing); Sitemap **238** URLs (nur indexierbar, keine past-URLs; Rückgang 418→238 durch saisonalen past-Zuwachs seit 08-19, korrekt date-driven — upcoming 367→186)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): thin upcoming 116→**96** (−20); missing distanceKm (upcoming) 24→**20** (−4: rennsteig +130, jelenia +81, esslinger +5,5, falling-leaves +175 ergänzt; cyclodome −70 als ungültig für Rundstrecken-Kriterium entfernt); missing elevationGainM (upcoming) **91** (net ±0 — belegte ergänzt: rennsteig 2250, jelenia 2170, bodensee 2376, bootshaus 1800; unbelegte entfernt statt geraten: almere, suedkaerntner, vienna, weseler); missing imageUrl (upcoming) 14→**15** (+1: bildchen-sprint generisches NRV-Verbandsbild entfernt, kein offizielles Hero verifizierbar)

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
- Center Triathlon Neubrandenburg (neu.sw / Bethanien-Center, MV) — **kein Amateur-Erwachsenenrennen**: laut offiziellem Verbandskalender triathlon-mv.de ein reiner Schüler-/Nachwuchswettkampf (Schüler A–D, Schwimmen in der Schwimmhalle, Rad/Lauf auf 1-km-Rundkurs am Bethanien-Center). Das bisherige JSON war frei erfunden (Olympisch/Sprint, Tollensesee-Open-Water). Am 09.09.2026 entfernt (out of scope). Nicht wieder als Erwachsenen-Triathlon anlegen.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), RügenChallenge (Sellin, 11.10). Südkärntner Triathlon (12.09) ist inzwischen im Bestand und wurde diesen Lauf veredelt/verifiziert → aus der Liste gestrichen. Verbleiben drei; nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (96 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **imageUrl-Ersatz (nicht-faktisch, niedrige Prio):** slowtwitch-Bild bei ironman-703-wm-nice und kavval/Cloudinary-Aggregator-Bilder bei diversen IRONMAN/DTU-Events (5150-erkner, oranke-berlin, belgrade) — funktionierende OG-Previews, aber nicht offiziell; bei Gelegenheit durch offizielle Heros ersetzen. estrela-xtreme weiterhin ohne imageUrl (Hero-Dimensionen nicht verifizierbar).
- **Enrichment-Backlog (upcoming):** noch ~96 dünne Beschreibungen; nächste soonest-first-Batch ab ~14.09. priorisieren (10.–13.09. diesen Lauf abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events ohne offiziell verifizierbares Hero (odyssey-st-neots, gelreman-arnhem, Hannover-Lahe, taegi-tri).
- **Kategorie-Gap MTB:** mehrere MTB-Marathons laufen mangels `MTB`-Enum unter `Gravel` (vulkanbike-eifel, laacher-see, hahnenkamm u.a.). Kein spekulatives Enum anlegen; falls die Zahl weiter wächst, MTB-Kategorie in `lib/types.ts` als bewusste Erweiterung erwägen.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 10.–13.09.:** 24 Events veredelt/verifiziert (s. Session-Summary unten), 1 out-of-scope entfernt.
- **Südkärntner Triathlon (Discovery-Kandidat 07-29):** inzwischen im Bestand, diesen Lauf veredelt/verifiziert (Olympisch-Distanz-Fehler 40/10→45/10,5 korrigiert, unbelegte 900 Hm entfernt).
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-09 (Oranke Berlin via pfeffersport+DTU, Heidesee/Holdorf → Landkreis-Fehler, Weseler via triathlon-wesel.de, 5150+70.3 Erkner via IRONMAN Germany gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-09-09 (Südkärntner, Vienna Triathlon, Cyclodome Salzburg via LRV Salzburg + stadt-salzburg.at gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-09-09 (70.3 WM Nice, 5150 Erkner, 70.3 Belgrade via offizielle IRONMAN-Serbia/Germany-Kanäle bestätigt; ironman.com selbst weiter bot-/429-geblockt) |
| swisstriathlon.ch | 2026-09-09 (Yverdon-les-Bains als SM-Gastgeber Elite/Nachwuchs 2026 bestätigt) |
| German Gravel League / gravelmania.cc | 2026-09-09 (Rennsteig Gravel Oberhof Lauf #5, Streckendistanzen bestätigt) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-09-09 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 24 Events 10.–13.09., + 1 out-of-scope entfernt) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit >8 Wochen am längsten offen — nächster Lauf DRINGEND bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls überfällig.

---

## Quellen-Durchgang: 2026-09-09 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 116 dünnen upcoming-Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 25 künftige Events (soonest-first, 10.–13.09.2026, AT/DE + NL/CH/IT/PT/FI/SE/FR/RS) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. SEO/noindex/Sitemap-Infrastruktur (date-driven in `astro.config.mjs`, `noindex, follow` + Sitemap-Ausschluss für past) und JSON-LD (`SportsEvent`/`BreadcrumbList` + `Organization`/`WebSite`/`ItemList`) intakt geprüft — keine Code-Änderung nötig.

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich):
  - **Cycling (10):** `cyclodome-salzburg` (2-Tage-Format 2026: MTB-Eliminator Do + Straßen-Kriterium Fr, neue Streckenführung; **distanceKm 70 entfernt** — ungültig für Rundstrecken-Kriterium), `rennsteig-gravel-oberhof` (GGL-Finale #5; **+distanceKm 130 / +elevationGainM 2250** aus offiziellen Rundendaten 5×26 km/450 Hm), `bike-maraton-jelenia-gora` (Saisonfinale, Start Park Zdrojowy/Cieplice → **Koordinaten korrigiert**; +distanceKm 81 / +elevation 2170; GIGA/MEGA/CLASSIC/FUN), `bildchen-sprint-siedlinghausen` (distanceKm 7→**7,4**; generisches NRV-Verbandsbild **entfernt**), `bodensee-radmarathon` (**Land-/Venue-Fehler: AT/Bregenz → CH/Altenrhein** — Veranstalter RV Altenrhein, 5 Startorte CH/DE, keiner in AT; distanceKm 260→**300** Platin-Tour, elevation 1500→**2376**), `bootshaus-gravel-bonn` (distanceKm 100→**104** / +elevation 1800; Ultra 6.500→**7.000 Hm** korrigiert), `falling-leaves-lahti` (+distanceKm 175; UCI-GWS-Qualifier + NGS), `sellaronda-bike-day-september` (**Kategorie Gran Fondo → RTF** — kostenlos, ohne Anmeldung/Zeitnahme; keine Kombination mit Gran Fondo), `vatternrundan-gravel` (**Streckenfehler:** nicht „rund um den Vätternsee", sondern Göta-Kanal/Boren/Roxen um Motala; unbelegter „Qualifikations"-Claim entfernt), `vulkanbike-eifel` (elevation 2400→**2300** offiziell; als MTB-Marathon präzisiert).
  - **Triathlon (14):** `challenge-almere-amsterdam` (45. Auflage + Langdistanz-EM; unbelegte 100 Hm **entfernt**), `esslinger-insel-swimrun` (+distanceKm 5,5; Klassen/Barzahlung), `estrela-xtreme-manteigas` (**Full-/Half-Verwechslung korrigiert:** Full = 4/190/41 = distanceKm 150→**235**, elevation 2600→**6300** = 4700 Rad + 1600 Lauf), `heidesee-triathlon-holdorf` (**Landkreis-Fehler Osnabrück → Vechta**; distanceKm 25→27,5 = 0,5/22/5), `ironman-5150-erkner` (Sa 12.09. neben 70.3 So 13.09.), `ironman-703-wm-nice` (Frauen Sa / Männer So; Alpes-Maritimes; slowtwitch-Bild belassen mangels offiziellem Ersatz), `oranke-triathlon-berlin` (17. Auflage, PfefferSport, inklusiv, 350 Limit), `suedkaerntner-triathlon` (**Olympisch-Distanz-Fehler 40/10 → 45/10,5**; unbelegte 900 Hm **entfernt**), `triathlon-yverdon-les-bains` (SM-Gastgeber Elite/Nachwuchs 2026), `vienna-triathlon` (10. Auflage; unbelegte 100 Hm **entfernt**), `weseler-triathlon` (**websiteUrl finishers.com → offizielle triathlon-wesel.de**; distanceKm 52→53; unbelegte 150 Hm **entfernt**), `bad-arolser-twistesee-triathlon` (distanceKm 51→52; 700 Hm offiziell belegt/behalten), `ironman-703-belgrade` („neu"-Claim entfernt — „The Journey Continues", Vorgängerausgaben existieren), `city-hill-climb-salzburg` (**Format-Fehler:** kein Einzelzeitfahren, sondern K.-o.-Duellsystem; 6. Auflage, neu Elite-MTB-Wertung).
- **1 Event entfernt:** `center-triathlon-neubrandenburg-2026` — laut offiziellem Verbandskalender triathlon-mv.de reiner Schüler-/Nachwuchswettkampf (Schwimmhalle, 1-km-Rundkurs am Bethanien-Center), nicht der im JSON behauptete Erwachsenen-Olympisch/Sprint am Tollensesee. Out of scope → gelöscht + BLACKLIST.
- **0 neu** (Anti-Flut). Alle 24 veredelten Events haben ein offiziell bestätigtes 2026-Datum.
- **SEO / Sitemap:** `astro build` grün, 1185 pages, 0 errors; `astro check` 0 errors/0 warnings/8 hints (pre-existing). Sitemap 238 URLs (nur indexierbar, keine past-URLs; 418→238 durch saisonalen past-Zuwachs seit 08-19). noindex-Feature + JSON-LD intakt — keine Code-Änderung nötig.

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
