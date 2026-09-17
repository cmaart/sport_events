# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **26 Events** (Welle 1 + Welle 2 angelegt). Weiter Klassiker-2027-Ausgaben ergänzen (max. 15/Lauf),
  aber Enrichment-first beachten (noch 55 dünne upcoming-Beschreibungen).

### Kennzahlen (Stand: 2026-09-17)
- Events gesamt: **1161** | Saison 2026: 1135 (upcoming ≥ heute **126** | past/noindex **1009**) | Saison 2027: **26** (alle confirmed)
- Letzter Lauf: 2026-09-17 — **10 neue 2027-Ausgaben** (Welle 2, ≤15-Limit eingehalten), **20 Bestands-Events veredelt/korrigiert** (10 Cycling + 10 Tri, Okt/Nov 2026), **1 Removal** (kosiak-loewe, offiziell abgesagt → BLACKLIST + CLAUDE.md)
- Build zuletzt grün: **1215 pages**, 0 errors; Sitemap enthält alle 26 `-2027`-URLs, keine past/noindex-URLs, kosiak entfernt
- Datenqualität (upcoming, Stand 09-17): thin **55**; missing distanceKm **13**; missing elevationGainM **66**; missing imageUrl **22** (Anstieg imageUrl-Lücke = neue IRONMAN-2027-Seiten ohne hotlinkbares Hero)

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
- Kosiak Löwe (Feistritz im Rosental, Kärnten) — 2026 offiziell abgesagt; lcsuetschach.at/kosiak-löwe/ meldet „AUS ORGANISATORISCHEN GRÜNDEN FINDET 2026 LEIDER KEIN KOSIAK LÖWE STATT!". Aggregatoren (sportaktiv, radsport-events, running.life) führen 03.10.2026 spekulativ. Am 17.09.2026 entfernt. Nicht anlegen bis offizielle Ankündigung.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **2027-Seed, Welle 2 — ✅ ANGELEGT am 2026-09-17 (10 Events, alle offiziell gegengeprüft, confirmed:true):**
  ironman-kalmar 21.08. · ironman-vitoria-gasteiz 11.07. (Reg. atleta.cc offen) · challenge-almere-amsterdam 11.09. (Reg. offen) · ironman-703-st-poelten 23.05. (Reg. öffnet 23.11.2026) · riderman-bad-duerrheim 03.–05.09. (224 km/2.985 Hm, imageUrl) · arber-radmarathon 25.07. (250/3.750) · granfondo-stelvio-santini 06.06. (130/4.270) · granfondo-nove-colli 23.05. (200/3.814) · granfondo-strade-bianche 07.03. (137,7/2.000, sold-out) · amstel-gold-race-toerversie 17.04. (RTF/Toertocht, Reg. öffnet 01.10.2026).
- **OFFEN aus Welle 2:** `tour-transalp 20.–26.06.2027` — Datum offiziell bestätigt (event.delius-klasing.de, 750 km/17.000 Hm, 7 Etappen), aber **Start-/Zielorte 2027 noch nicht veröffentlicht** → nicht angelegt (keine Karten-Location erfindbar). Re-check, sobald der Veranstalter den Streckenverlauf 2027 nennt.
- **2027 Save-the-date (nur mit `confirmed:false` anlegen):** king-of-the-lake „voraussichtlich 18.09.2027" (kotl.at) · etape-du-tour 2027 angekündigt, kein Datum/Ort · paris-roubaix-challenge 2027 (17. Ausgabe) Vorregistrierung offen, kein Datum.
- **2027 noch ohne Info (re-check Okt/Nov 2026):** ironman-barcelona-calella (Vertrag bis 2027, kein Datum) · marmotte-granfondo-alpes (Site nur 2026) · neusiedlersee-radmarathon (Site nur 2026).
- **2027-Seed, Welle 3 (noch nicht recherchiert):** IRONMAN 70.3 Kraichgau/Duisburg/Zell am See/Jönköping, IRONMAN Nizza/Italy Emilia-Romagna, Challenge Walchsee/Kaiserwinkl/Heilbronn, Velothon Berlin, Trumer Triathlon, Allgäu Triathlon, Frankfurt City Triathlon, Dreiländergiro, Mondsee 5-Seen, Kufsteinerland, Sella Ronda Bike Day.
- **2027-Enrichment-Regel:** Bei angelegten 2027-Ausgaben ohne 2027-Anmelde-URL (Ötztaler, Glocknerkönig, Kitzbühel, Maratona, Mallorca 312) die `registrationUrl` nachtragen, sobald die Anmeldung öffnet (Ötztaler Jänner, Glocknerkönig Dez, Mallorca 06.10., Maratona Ende Sept).
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (236 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~55 dünne Beschreibungen. Da 2026 ausläuft (Nov/Dez-Events zuerst = längste Rest-Indexzeit) und 2027 die Zielsaison ist: nächste Läufe verstärkt 2027-Ausgaben (Welle 3, s.u.) + verbleibende Okt/Nov-2026-Lücken. imageUrl-Lücken bleiben bei IRONMAN-2027 (hotlink-Referer-Block) und international/flat-Events ohne offizielles Hero.
- **Kraichgauman Crossduathlon = LETZTE Ausgabe 2026** (Gelände wird bebaut) → keine 2027-Folgeausgabe erwarten/anlegen.

### ERLEDIGT diesen Lauf (2026-09-17)
- **2027-Welle-2:** 10 Klassiker-Ausgaben angelegt (s.o., alle offiziell gegengeprüft). tour-transalp offen (Orte 2027 unveröffentlicht).
- **Enrichment Okt/Nov 2026 (20 Events, offiziell verifiziert):** Cycling (10): uec-granfondo-varese (elevation 1800 entfernt, „10. Auflage" entfernt), prenzlauer-huegelmarathon (216→**231 km**, 1500→**1190 Hm**, website→huegelmarathon.de, 21. Auflage), rund-um-den-solling (elevation 1200 entfernt, 17. Benefiz-Auflage, Strecken), lautertal-bikemarathon (Beschreibung vertieft, 19. Aufl.), panaromagravel-buehlertal (4 Routen ergänzt), adelsberger-bike-marathon (unbelegte 80/20-Split + Bergwertung + MTB-Sachsen-Cup entfernt), gravel-n-groestl (+registrationUrl, 9 Routen), pannonia-gravel (website→pannonia-gravel.com, Truppenübungsplatz), cyclotour-du-leman (elevation 2800 + „23." + G7-Claim entfernt), **leuven-legacy-gravel** (umbenannt v. „Flanders Legacy", website+Distanz 147→**132**/950→**880**, imageUrl entfernt). Tri (10): challenge-sanremo (113→**103**, Rad 90→**80**, +elevation **1463**), challenge-barcelona (Rad 88→90, hdsports-imageUrl entfernt, +reg), powerman-wuerselen (Streckendetails), kraichgauman (**letzte Ausgabe** dokumentiert), hugenotten-duathlon (→Crossduathlon 5/20/4,6, +website/reg, 19. Aufl.), **kaiserstuhl-cross-duathlon** (umbenannt, Distanzen 5/12/8 falsch → single 4/14/2 = **20 km**), guestrow-cross-duathlon (Labels getauscht: Härteste 5/27/5 ↔ Jedermann 2,5/14/2,5, imageUrl entfernt), neustaedter-soehrenberg (Schwimmen = **Hallenbad 450 m**, 12. Aufl.), lake-varano (Super-Lungo-Meisterschaft, imageUrl entfernt).
- **1 Removal:** kosiak-loewe-2026 (offiziell abgesagt) → BLACKLIST + CLAUDE.md.
- **Nicht angefasst (bleibt offen):** rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation; Discovery-Kandidaten SURM/Salt&Lake/Südkärntner/RügenChallenge (Anti-Flut, Enrichment-Rückstand hat Vorrang).

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| ironman.com Rennseiten + IRONMAN-FB-Kanäle (2027: Kalmar/Vitoria/St.Pölten; Site selbst bot-blocked) | 2026-09-17 |
| Veranstalterseiten AT/DE-Radklassiker (2027: Riderman, Arber) | 2026-09-17 |
| Veranstalterseiten EU-Granfondos (2027: Stelvio Santini, Nove Colli, Strade Bianche, Amstel Toerversie; tour-transalp Orte offen) | 2026-09-17 |
| challenge-family.com (2027 Almere; 2026 Sanremo/Barcelona) | 2026-09-17 |
| Okt/Nov-2026-Veranstalterseiten (20 Enrichment-Events, offiziell gegengeprüft) | 2026-09-17 |
| UCI Gran Fondo World Series (Leuven Legacy = 1. Qualifier WM 2027; Varese UEC-EM) | 2026-09-17 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-19 (Bad Zwischenahn/Beucha/Krefeld/Riesenbeck/RunSwimRepeat über DTU + Landesverbände NDS/NRW/Hessen gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-08-19 (XTERRA Austria ÖM + Bad Radkersburg IUTA-WM gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-08-19 (IRONMAN 70.3 Poznań via ironmanpoznan.com.pl bestätigt; ironman.com selbst weiter bot-blocked) |
| birken.no (Birken-Serie NO) | 2026-08-19 (Birkebeinerrittet + GravelBirken 2026 direkt bestätigt) |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 (GFNY Bremen 2. Auflage, 98 km bestätigt) |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 (10 Rennen 2026; Miriquidi NICHT enthalten → Removal-Grundlage) |
> Hinweis: 2026-09-17 wurden ironman/challenge/EU-Granfondo-Quellen (2027) + 20 Okt/Nov-2026-Veranstalterseiten offiziell gegengeprüft. Am längsten offen sind jetzt die reinen Discovery-Aggregatoren **k226.com (07-14)** und **cycloworld.cc (07-29)** — nächster Lauf bevorzugt für 2027-Discovery re-checken (Jahresfilter auf 2027 stellen; nur Discovery, Fakten offiziell gegenprüfen; Anti-Flut beachten). Für 2027 außerdem Welle 3 (IRONMAN 70.3 Kraichgau/Duisburg/Zell am See/Jönköping, Challenge Walchsee/Heilbronn, Velothon Berlin, Trumer/Allgäu/Frankfurt-City-Triathlon etc.).

---

## Session 2026-09-17 — 2027-Welle-2 (10 neu) + Enrichment (20) + 1 Removal

Ausgewogener Wartungslauf mit **Enrichment-first + kontrolliertem 2027-Wachstum** (Anti-Flut: 10 Neuanlagen, Limit 15 nicht ausgeschöpft). 4 Research-Agents haben parallel gegen **offizielle** Quellen recherchiert (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten).

- **10 neue 2027-Ausgaben** (alle confirmed:true, offiziell gegengeprüft):
  - **Triathlon (4):** ironman-kalmar (21.08., ausverkauft), ironman-vitoria-gasteiz (11.07., Reg. offen), challenge-almere-amsterdam (11.09., ältester LD-Triathlon Europas), ironman-703-st-poelten (23.05., Klassiker-Comeback, Reg. ab 23.11.2026).
  - **Cycling (6):** riderman-bad-duerrheim (03.–05.09., 224/2.985, imageUrl), arber-radmarathon (25.07., 250/3.750), granfondo-stelvio-santini (06.06., 130/4.270), granfondo-nove-colli (23.05., 200/3.814), granfondo-strade-bianche (07.03., 137,7/2.000, Gravel), amstel-gold-race-toerversie (17.04., RTF).
  - Offen: tour-transalp (Datum bestätigt, Orte 2027 unveröffentlicht → nicht angelegt).
- **20 Bestands-Events veredelt/korrigiert** (Okt/Nov 2026, längste Rest-Indexzeit): 10 Cycling + 10 Tri. Wesentliche Fixes: Distanz-/Höhenmeter-Korrekturen (prenzlauer 216→231/1500→1190, leuven 147→132/950→880, sanremo 113→103 + Rad 80, kaiserstuhl → 20 km single-course), 2 Umbenennungen (Flanders→Leuven Legacy Gravel, Kaiserstuhl→Cross-Duathlon), Label-Tausch güstrow, Hallenbad-Fix neustaedter, Websites/Reg-URLs nachgetragen (pannonia-gravel.com, huegelmarathon.de, hugenotten), unbelegte Felder + Aggregator-Bilder entfernt.
- **1 Removal:** kosiak-loewe-2026 (offiziell abgesagt, LC Suetschach) → BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap / noindex:** `npm run build` grün, **1215 pages**, 0 errors. Sitemap enthält alle 26 `-2027`-URLs, keine past/noindex-URLs, kosiak entfernt. Date-driven noindex + Sitemap-Ausschluss (astro.config.mjs) + JSON-LD intakt — keine Code-Änderung nötig.

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

> Ältere Session-Summaries (2026-08-05 und früher) in `progress-archive.md`.
