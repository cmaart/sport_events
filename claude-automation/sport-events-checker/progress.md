# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand ist noch leer → erste Läufe: 2027-Ausgaben der Klassiker (Ironman/Challenge Europa, große
  Radmarathons AT/DE, UCI Gran Fondo Series) anlegen, max. 15/Lauf.

### Kennzahlen (Stand: 2026-09-16)
- Events gesamt: **1154** | Saison 2026: 1139 (upcoming ≥ heute **128** | past/noindex **1011**) | Saison 2027: **15** (alle confirmed)
- Letzter Lauf: Season-Umbau + 2027-Seed (2026-09-16) — UI-Toggle 2026/2027, Landingpages pro Jahr, 15 erste 2027-Ausgaben (Anti-Flut-Limit voll genutzt), 0 Enrichment (Ausnahme wegen Saisonwechsel, s. Summary)
- Build zuletzt grün: 1203 pages, 0 errors; Sitemap enthält 15 `-2027`-URLs + 2 neue Landingpages (`/radrennen/oesterreich/2027`, `/triathlon/deutschland/2027`)
- Datenqualität 2026 (Stand 08-19, unverändert): thin upcoming **152**; missing distanceKm (upcoming) **36**; missing elevationGainM (upcoming) **191**; missing imageUrl (upcoming) **27**

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
- **2027-Seed, Welle 2 (offiziell verifiziert am 2026-09-16, noch NICHT angelegt — Anti-Flut, ≤15/Lauf):**
  ironman-kalmar 21.08.2027 (Reg. ausverkauft, Experiences offen) · ironman-vitoria-gasteiz 11.07.2027 · challenge-almere-amsterdam 09.–12.09.2027 (46. Ausgabe, Hauptrennen Sa 11.09., Reg. offen: endurancecui.active.com/event-reg/select-race?e=97691501) · **IRONMAN 70.3 St. Pölten 23.05.2027** (Nachfolger von Challenge St. Pölten — neuer Slug `ironman-703-st-poelten-2027`, Quelle ironman.com/races/im-703-st-poelten + ÖTRV) · riderman-bad-duerrheim 03.–05.09.2027 (riderman.de/anmeldung) · arber-radmarathon 25.07.2027 (43. Ausgabe, 250 km/3.750 Hm) · tour-transalp 20.–26.06.2027 (nur Datum) · granfondo-stelvio-santini 05.–06.06.2027 (15. Ausgabe, Reg. in.njuko.com/lss2027, 130 km/4.270 Hm) · granfondo-nove-colli 23.05.2027 (56. Ausgabe, Reg. ab 05.12.2026) · granfondo-strade-bianche 07.03.2027 (137,7 km/2.000 Hm, Direktanmeldung bereits sold-out) · amstel-gold-race-sportive 17.04.2027 (Lotterie, Anmeldung 1.–31.10.2026; offizielle Inhalte auf amstel.nl/amstelgoldrace/toerversie).
- **2027 Save-the-date (nur mit `confirmed:false` anlegen):** king-of-the-lake „voraussichtlich 18.09.2027" (kotl.at) · etape-du-tour 2027 angekündigt, kein Datum/Ort · paris-roubaix-challenge 2027 (17. Ausgabe) Vorregistrierung offen, kein Datum.
- **2027 noch ohne Info (re-check Okt/Nov 2026):** ironman-barcelona-calella (Vertrag bis 2027, kein Datum) · marmotte-granfondo-alpes (Site nur 2026) · neusiedlersee-radmarathon (Site nur 2026).
- **2027-Seed, Welle 3 (noch nicht recherchiert):** IRONMAN 70.3 Kraichgau/Duisburg/Zell am See/Jönköping, IRONMAN Nizza/Italy Emilia-Romagna, Challenge Walchsee/Kaiserwinkl/Heilbronn, Velothon Berlin, Trumer Triathlon, Allgäu Triathlon, Frankfurt City Triathlon, Dreiländergiro, Mondsee 5-Seen, Kufsteinerland, Sella Ronda Bike Day.
- **2027-Enrichment-Regel:** Bei angelegten 2027-Ausgaben ohne 2027-Anmelde-URL (Ötztaler, Glocknerkönig, Kitzbühel, Maratona, Mallorca 312) die `registrationUrl` nachtragen, sobald die Anmeldung öffnet (Ötztaler Jänner, Glocknerkönig Dez, Mallorca 06.10., Maratona Ende Sept).
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (236 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~152 dünne Beschreibungen; September-Events (soonest-first ab 03.09.) als Nächstes priorisieren (bis 30.08. weitgehend abgearbeitet). imageUrl-Lücken bleiben bei international/flat-Events, wo kein offizielles Hero-Bild verifizierbar ist (odyssey-st-neots, gelreman-arnhem, Hannover-Lahe, taegi-tri, ladies-tri-breitenbrunn, 3muc-muenchen).

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **Soonest-first-Enrichment 23.–30.08.:** 24 Events veredelt/verifiziert (s. Session-Summary unten). Alle 4 Discovery-Verdachtsevents ohne offizielle 2026-Bestätigung wurden diesmal *doch* bestätigt (0 Removals).
- **rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation:** diesen Lauf nicht angefasst (außerhalb der soonest-first-Batch); bleibt offen.
- **Discovery-Kandidaten (SURM/Salt&Lake/Südkärntner/RügenChallenge):** weiterhin NICHT angelegt (Anti-Flut, 152 dünne Bestandsevents haben Vorrang); bleiben im BACKLOG.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| ironman.com Rennseiten (2027-Termine, 8 Rennen) | 2026-09-16 |
| Veranstalterseiten AT/DE-Radklassiker (2027-Termine, 12 Events) | 2026-09-16 |
| Veranstalterseiten EU-Granfondos (2027-Termine, 9 Events) | 2026-09-16 |
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-19 (Bad Zwischenahn/Beucha/Krefeld/Riesenbeck/RunSwimRepeat über DTU + Landesverbände NDS/NRW/Hessen gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-19 (XTERRA Austria ÖM + Bad Radkersburg IUTA-WM gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 (IRONMAN 70.3 Poznań via ironmanpoznan.com.pl bestätigt; ironman.com selbst weiter bot-blocked) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-08-19 war ein reiner Enrichment-/Verifikationslauf (soonest-first, 24 Events 23.–30.08.) über offizielle Veranstalter-/Verbands-/Serienseiten. Die reinen Discovery-Aggregatoren **UCI Gran Fondo World Series (07-07), challenge-family (07-14), k226 (07-14)** sind seit ~6 Wochen am längsten offen — nächster Lauf bevorzugt re-checken (nur Discovery, gegen offizielle Quelle prüfen; weiterhin Anti-Flut beachten). cycloworld.cc (07-29) ebenfalls fällig.

---

## Session 2026-09-16 — Season-Umbau + 2027-Seed (Welle 1)

- **Infrastruktur (Commit 475309d):** Saison-Modell eingeführt — Event gehört zur Saison seines Startjahres, `SEASONS=[2026,2027]`, UI-Default 2027. Filter-Toggle mit Zählern, localStorage (`sport_events.season.v1`) + `?saison=`-Param (URL gewinnt). Landingpages `[year].astro` pro Sport × Land × Jahr; Header/Footer/Breadcrumbs jahresbewusst. Detailseite verlinkt Geschwister-Ausgaben („Weitere Ausgaben"). CLAUDE.md/README/routine-prompt um Saison-Regeln ergänzt (eine Datei pro Ausgabe, 2026 nie umdatieren).
- **2027-Seed (15 neu, Limit voll):** ironman-frankfurt (27.06., 25. Auflage, sold out), ironman-hamburg (06.06., 10. Auflage, sold out), ironman-austria-kaernten (13.06., sold out), ironman-switzerland-thun (04.07.), ironman-copenhagen (22.08., in 1 h ausverkauft), challenge-roth (04.07., Late Entry Draw bis 09.11.2026), oetztaler-radmarathon (29.08., 2027-Sujet als imageUrl), glocknerkoenig (06.06., 30. Ausgabe), dolomitenradrundfahrt (13.06., 39. Ausgabe + 12. SuperGiro 218 km/5.060 Hm, Reg. offen), kitzbueheler-radmarathon (05.09., 7. Ausgabe), cyclassics-hamburg (15.08.), eschborn-frankfurt-jedermann (01.05., Reg. offen), maratona-dles-dolomites (04.07., 40. Ausgabe), mallorca-312 (24.04., Reg. ab 06.10.2026), race-around-austria (09.–15.08., Reg. ab 01.10.2026). Alle Termine gegen offizielle Seiten/JSON-LD/offizielle FB-Kanäle verifiziert; Beschreibungen neu geschrieben (4–8 Sätze, Anmelde-Status 2027, Auflagen-Nummern).
- **Abweichung von der Enrichment-first-Regel:** 0 Bestandsevents veredelt — bewusst, weil die UI ab sofort standardmäßig 2027 zeigt und die Saison sonst leer wäre. Ab nächstem Lauf wieder Enrichment vor Neuanlage.
- **Erkenntnisse:** Challenge St. Pölten wird 2027 zu IRONMAN 70.3 St. Pölten (neuer Slug nötig, Reg. „opening soon"). ironman.com liefert 2027-Termine im JSON-LD zuverlässig; WebFetch klappt auf `/races/<slug>`. tour-transalp.de → event.delius-klasing.de, oetztaler-radmarathon.com → soelden.com (Redirects). amstelgoldrace.nl liefert HTTP 500, offizielle Inhalte auf amstel.nl.
- Build grün: 1203 pages, 0 errors.

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
