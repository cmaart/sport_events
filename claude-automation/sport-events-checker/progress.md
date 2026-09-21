# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **33 Events** (Welle 1–3; 31 confirmed, 2 save-the-date `confirmed:false`). Weiter Klassiker-2027-Ausgaben
  ergänzen (max. 15/Lauf), Enrichment-first beachten. Datenbestand ist inzwischen reif (wenige echte Lücken).

### Kennzahlen (Stand: 2026-09-21)
- Events gesamt: **1168** | Saison 2026: 1135 (upcoming ≥ heute **94** | past/noindex **1041**) | Saison 2027: **33** (31 confirmed, 2 `confirmed:false`: cyclassics-hamburg, king-of-the-lake)
- Letzter Lauf: 2026-09-21 — **7 neue 2027-Ausgaben** (Welle 3, ≤15-Limit eingehalten), **15 Bestands-Events veredelt** (6× imageUrl auf 2027-Events + 9× Okt/Nov-2026 Felder+Beschreibung), **1 Datenqualität-Fix** (cyclassics-hamburg-2027 `confirmed:true`→`false`, kein offizieller 2027-Termin), **1 BLACKLIST** (Velothon Berlin, dauerhaft eingestellt)
- Build zuletzt grün: **1223 pages**, 0 errors; Sitemap **183 indexierbare URLs**, alle 6 neuen confirmed `-2027`-URLs drin, king-of-the-lake-2027 (future) indexiert, keine past/noindex-URLs
- Datenqualität (upcoming, Stand 09-21): thin(<260) **12**; missing distanceKm(cyc) **2**; missing elevationGainM **51** (überwiegend flach/Stadt/IRONMAN — offiziell nicht publiziert, nicht schätzen); missing imageUrl **21** (überwiegend IRONMAN-2027 mit hotlink-/Referer-Block)

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
- Velothon Berlin (DE) — Straßenrennen dauerhaft eingestellt (nur 2011–2015 ausgetragen). ACHTUNG: „VELOBerlin 2027" (Tempelhof) ist eine Fahrrad-Publikumsmesse, KEIN Rennen. 2026-09-21 als Welle-3-Kandidat verworfen → CLAUDE.md „Known Cancelled". Nicht anlegen.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **2027-Welle 3 — ✅ ANGELEGT am 2026-09-21 (7 Events, offiziell gegengeprüft):** dreilaendergiro 27.06. (168/3.600) · mondsee-5-seen-radmarathon 19./20.06. (200/2.600, Reg. offen, imageUrl) · arlberg-giro 01.08. (150/2.500) · rad-am-ring 23.–25.07. (Reg. ab 08.10.2026) · ironman-70-3-zell-am-see 29.08. (113/870, imageUrl, host-partner-site bestätigt) · walchsee-challenge 27.06. (Challenge 100 = 2,0/80/18, Reg. offen) · **king-of-the-lake `confirmed:false`** 18.09. („voraussichtlich", kotl.at).
- **Salzkammergut Trophy 2027 (Bad Goisern, MTB):** Reg. 2027 offen (salzkammergut-trophy.at), aber **exaktes Datum steht NICHT auf der offiziellen Anmeldeseite** (Aggregator: 17.07.2027). Nächster Lauf: entweder `confirmed:false` mit Best-Guess Mitte Juli anlegen oder Datum re-checken. Stem `salzkammergut-trophy-2027`.
- **IRONMAN Barcelona-Calella 2027:** 03.10.2027 nur Aggregator-Konsens (Reg. öffnet ~08.10.2026). ironman.com ist auch für die Haupt-Session bot-blocked → NICHT angelegt. Re-check, sobald ironman.com erreichbar ist oder das offizielle Datum anderswo primär bestätigt wird. Stem `ironman-barcelona-calella-2027`.
- **IRONMAN 70.3 Save-the-date (2027-Existenz offiziell signalisiert via IRONMAN-Germany-Post „Weg nach Chattanooga", exaktes Datum nur Aggregator):** Duisburg (~Mitte Aug) · Erkner (~12.09) · Leipzig (~Ende Aug) · Kraichgau (~Ende Mai). `confirmed:false` möglich, aber Datum vor Anlage auf ironman.com prüfen (derzeit bot-blocked).
- **OFFEN/Holds (kein anlegbares Datum/Ort):** tour-transalp 20.–26.06.2027 (Orte 2027 unveröffentlicht) · etape-du-tour 2027 (nur Teaser) · paris-roubaix-challenge 2027 · marmotte-granfondo-alpes (Site nur 2026) · neusiedlersee-radmarathon (Site nur 2026, Aggregator 18.04.2027).
- **Discovery-Leads 2026-09-21 (k226, unverifiziert — offiziell prüfen, DANN erst anlegen):** Berlin Triathlon 06.06. · Ingolstadt Triathlon 06.06. · Schloss Triathlon Moritzburg 13.06. · Viking Triathlon Schleswig 20.06. · Apfelland Triathlon Stubenberg 23.05. · Austria eXtreme Graz-Dachstein 19.06.
- **2027-Enrichment-Regel:** Bei angelegten 2027-Ausgaben ohne 2027-Anmelde-URL (Ötztaler, Glocknerkönig, Kitzbühel, Maratona, Mallorca 312) die `registrationUrl` nachtragen, sobald die Anmeldung öffnet (Ötztaler Jänner, Glocknerkönig Dez, Mallorca 06.10., Maratona Ende Sept).
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~55 dünne Beschreibungen. Da 2026 ausläuft (Nov/Dez-Events zuerst = längste Rest-Indexzeit) und 2027 die Zielsaison ist: nächste Läufe verstärkt 2027-Ausgaben (Welle 3, s.u.) + verbleibende Okt/Nov-2026-Lücken. imageUrl-Lücken bleiben bei IRONMAN-2027 (hotlink-Referer-Block) und international/flat-Events ohne offizielles Hero.
- **Kraichgauman Crossduathlon = LETZTE Ausgabe 2026** (Gelände wird bebaut) → keine 2027-Folgeausgabe erwarten/anlegen.

### ERLEDIGT diesen Lauf (2026-09-21)
- **2027-Welle 3 (7 neu):** dreilaendergiro, mondsee-5-seen-radmarathon, arlberg-giro, rad-am-ring, ironman-70-3-zell-am-see, walchsee-challenge (alle confirmed, offiziell gegengeprüft) + king-of-the-lake (`confirmed:false`). Slug-Stämme passen zu den 2026-Dateien → „Weitere Ausgaben"-Verlinkung greift.
- **Enrichment 6× imageUrl auf 2027-Events (alle Referer-getestet, HTTP 200):** amstel-gold-race-toerversie, arber-radmarathon, challenge-almere-amsterdam, granfondo-nove-colli, granfondo-stelvio-santini, granfondo-strade-bianche.
- **Enrichment 9× Okt/Nov-2026 (Felder + Beschreibung 4–8 Sätze, offiziell verifiziert):** istria300 (+elevation **5.300**, 302/209/134,5, „Distanz während der Fahrt wählbar", unbelegte „1.500 TN" entfernt), letape-czech-flat (Umzug nach Pardubice, náměstí Republiky, Wellenstart 2.000/23 km/h), granfondo-serra-dossa (144→**143,9**, Redondo/Vila Viçosa/Borba/Estremoz), ican-gandia (Playa de Gandia, Formate voll/half/short/aquabike), alentejo-gravel-ourique (119→**120,6**, 1750→**1912**, UCI-Quali WM 2027), zadar-granfondo (5. Aufl., Nin, elevation bewusst weggelassen = nur Aggregator), ourem-fatima-granfondo (**1. Auflage/Premiere**, Agroal/Burg Ourém), granfondo-portimao (3. Aufl., bergigstes Cabreira-GF), ironman-703-costa-navarino (Gialova Bay/Divari-Lagune; Datum nur sekundär, ironman.com blocked).
- **1 Datenqualität-Fix:** cyclassics-hamburg-2027 `confirmed:true`→`false` (offizielle Seite nennt nur 2026, für 2027 nur „voranmelden") + Beschreibung angepasst („Termin noch nicht bestätigt").
- **1 BLACKLIST:** Velothon Berlin (dauerhaft eingestellt; „VELOBerlin" ist Messe) → CLAUDE.md „Known Cancelled".
- **Nicht angefasst (bleibt offen):** rad-am-salzburgring / Ratekau-Muster / Stadt-Tri-Elevation; Discovery-Kandidaten 07-29 (SURM/Salt&Lake/Südkärntner/RügenChallenge); IRONMAN-70.3-Save-the-dates (Duisburg/Erkner/Leipzig/Kraichgau, Datum ironman.com-blocked); Salzkammergut Trophy 2027 (Datum offen); Barcelona-Calella 2027 (ironman.com-blocked).

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| AT/DE-Radklassiker Veranstalterseiten (2027: Dreiländergiro, Mondsee, Arlberg Giro, Rad am Ring, Salzkammergut Trophy) | 2026-09-21 |
| challenge-walchsee.com (2027 27.06., Challenge 100 = 2,0/80/18, Reg. offen) | 2026-09-21 |
| zellamsee-kaprun.com Host-Partner (IRONMAN 70.3 Zell am See 29.08.2027 + 870 Hm bestätigt; ironman.com selbst blocked) | 2026-09-21 |
| kotl.at (King of the Lake „voraussichtlich 18.09.2027" → save-the-date) | 2026-09-21 |
| cyclassics-hamburg.de (nur 2026-Termin offiziell → 2027 auf confirmed:false) | 2026-09-21 |
| Okt/Nov-2026 PT/HR/CZ/ES-Veranstalterseiten (9 Enrichment-Events, offiziell gegengeprüft) | 2026-09-21 |
| k226.com/events/events.aspx (Tri, europaweit — 2027-Discovery-Leads, unverifiziert) | 2026-09-21 |
| ironman.com Rennseiten (weiterhin bot-blocked; 2027 nur via Host-Partner/FB-Kanäle) | 2026-09-21 |
| Veranstalterseiten EU-Granfondos (2027: Stelvio Santini, Nove Colli, Strade Bianche, Amstel Toerversie) | 2026-09-17 |
| challenge-family.com (2027 Almere/Walchsee; 2026 Sanremo/Barcelona) | 2026-09-21 |
| UCI Gran Fondo World Series (Leuven Legacy WM-Quali 2027; Varese UEC-EM) | 2026-09-17 |
| cycloworld.cc/de/kalender-de (Rad AT/DE — 2026-09-21 HTTP 403, nicht scrapebar) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-08-19 |
| triathlon-austria.at/de/service-termine | 2026-08-19 |
| birken.no (Birken-Serie NO) | 2026-08-19 |
| GFNY-Serie (bremen.gfny.com) | 2026-08-19 |
| mtb-sachsen-cup.de/events (Serie Sachsen) | 2026-08-05 |
> Hinweis: 2026-09-21 wurden AT/DE-Radklassiker + challenge-walchsee + Zell-am-See-Host-Partner (2027) sowie 9 Okt/Nov-2026-Veranstalterseiten offiziell gegengeprüft. ironman.com bleibt bot-blocked (2027-Termine nur über Host-Partner/FB-Kanäle verifizierbar) → IRONMAN-70.3-Save-the-dates (Duisburg/Erkner/Leipzig/Kraichgau) und Barcelona-Calella 2027 warten auf offiziellen Zugang. Am längsten offen: **triathlon-DE/AT-Kalender (08-19)** und **Serien birken/GFNY/mtb-sachsen (08-19/08-05)** — nächster Lauf für 2027-Discovery re-checken (Jahresfilter 2027; nur Discovery, Fakten offiziell prüfen; Anti-Flut beachten).

---

## Session 2026-09-21 — 2027-Welle-3 (7 neu) + Enrichment (15) + 1 Datenfix + 1 Blacklist

Ausgewogener Wartungslauf mit **Enrichment-first + kontrolliertem 2027-Wachstum** (Anti-Flut: 7 Neuanlagen, Limit 15 nicht ausgeschöpft). 5 Research-Agents haben parallel gegen **offizielle** Quellen recherchiert (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten). Alle imageUrls per Foreign-Referer-Curl auf HTTP 200 getestet.

- **7 neue 2027-Ausgaben (Welle 3):** dreilaendergiro (27.06., 168/3.600), mondsee-5-seen-radmarathon (19./20.06., 200/2.600, Reg. offen, imageUrl), arlberg-giro (01.08., 150/2.500), rad-am-ring (23.–25.07., Reg. ab 08.10.2026), ironman-70-3-zell-am-see (29.08., 113/870, imageUrl — über Host-Partner zellamsee-kaprun.com bestätigt, da ironman.com blocked), walchsee-challenge (27.06., Challenge 100 = 2,0/80/18, Reg. offen), king-of-the-lake (`confirmed:false`, „voraussichtlich 18.09."). Alle Slug-Stämme passen zu den 2026-Dateien → „Weitere Ausgaben"-Verlinkung greift (im Build verifiziert).
- **15 Bestands-Events veredelt:** 6× imageUrl auf 2027-Klassiker (amstel-toerversie, arber, challenge-almere, nove-colli, stelvio-santini, strade-bianche) + 9× Okt/Nov-2026 (Felder + Beschreibung 4–8 Sätze): istria300 (+5.300 Hm, wählbare Distanz), letape-czech-flat (Umzug Pardubice), serra-dossa (143,9), ican-gandia, alentejo-gravel (120,6/1912, +UCI-Quali), zadar (5. Aufl.), ourem-fatima (Premiere), portimao, ironman-costa-navarino.
- **1 Datenqualität-Fix:** cyclassics-hamburg-2027 `confirmed:true`→`false` (offiziell nur 2026-Termin, für 2027 nur Voranmeldung).
- **1 BLACKLIST:** Velothon Berlin (Rennen seit 2015 eingestellt; „VELOBerlin" ist Messe) → CLAUDE.md.
- **Verworfen/verschoben (nicht angelegt, Verifikation gescheitert/blockiert):** Salzkammergut Trophy 2027 (Reg. offen, aber exaktes Datum nicht auf offizieller Seite), IRONMAN Barcelona-Calella 2027 + 70.3 Duisburg/Erkner/Leipzig/Kraichgau (ironman.com bot-blocked, Datum nur Aggregator), Neusiedler See/Marmotte/tour-transalp/etape-du-tour (kein anlegbares 2027-Datum/Orte). Alle im BACKLOG dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1223 pages**, 0 errors. Sitemap **183 indexierbare URLs**, alle 6 neuen confirmed `-2027`-URLs enthalten, king-of-the-lake-2027 (future) indexiert, keine past/noindex-URLs. Date-driven noindex (astro.config.mjs + [slug].astro) + JSON-LD intakt — keine Code-Änderung nötig. AT-2027-Radrennen-Landingpage vorhanden.

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

> Ältere Session-Summaries (2026-08-19 und früher) in `progress-archive.md`.
