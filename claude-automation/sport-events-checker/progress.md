# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **40 Events** (Welle 1–3). Enrichment-first beachten, aber upcoming-Beschreibungen sind aktuell **alle ≥250 Zeichen** (0 dünn) — nächste Läufe: fehlende `elevationGainM`/`imageUrl` + Welle-3-Reste + Challenge-Okt-Ausgaben 2027 (re-check ab Herbst 2026).

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) ergänzt für das neue 100er-Format (2 km Schwimmen / 80 km Rad / 18 km Laufen = 100 km), auf das Challenge Family (in Kooperation mit der PTO) mehrere Rennen umstellt. `distanceKm: 100` statt 113; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`. Zod/Filter/Landingpages übernehmen automatisch. Aktuell 6 T100-Events: Cesenatico, Gdańsk, Mogán Gran Canaria, Salou, The Championship (Šamorín), Kaiserwinkl-Walchsee.

### Kennzahlen (Stand: 2026-09-23)
- Events gesamt: **1174** | Saison 2026: 1134 (upcoming ≥ heute **93** | past/noindex **1041**) | Saison 2027: **40** (confirmed 37 | confirmed:false 3)
- Letzter Lauf: 2026-09-23 — **14 neue 2027-Ausgaben** (6 IRONMAN + 8 Challenge; ≤15-Limit eingehalten), **18 Bestands-Events veredelt/korrigiert** (9 Cycling + 9 Tri/Duathlon), **1 Removal** (granfondo-alpes-dazur, offiziell abgesagt → BLACKLIST + CLAUDE.md), **1 neue Kategorie** (T100)
- **2026-09-23 (Re-Fire, verify-only):** Scheduler feuerte den Wochen-Prompt am selben Tag erneut (frischer Container). **Bewusst KEIN zweiter Content-Lauf** — ein voller Lauf am selben Tag wäre genau das Fluten dünner Seiten, das die Routine verbietet (Anti-Flut #1). Stattdessen verifiziert: `npm run build` grün (1230 pages, 0 errors), Sitemap 189 indexierbare URLs, 2027-Landingpages vorhanden, keine past/entfernten Leaks. Hinweis für nächsten echten Lauf: BACKLOG unverändert abarbeiten (Full-Distance-Challenge, IRONMAN Welle 3, k226/cycloworld-Discovery re-check).
- Build zuletzt grün: **1230 pages**, 0 errors; Sitemap 190 URLs (nur indexierbar), alle neuen `-2027`-URLs enthalten, keine past/noindex-/abgesagten URLs
- Datenqualität (upcoming, Stand 09-23): thin **0** (alle veredelt); missing distanceKm **4** (offiziell nicht publiziert: Pontevedra-WM, Albstadt-Teamrennen etc.); missing elevationGainM **62**; missing imageUrl **29** (Anstieg = neue IRONMAN/Challenge-2027-Seiten ohne hotlinkbares Hero)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen); cycloworld führt 02.08.2026 weiterhin spekulativ.
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell (fnldgrvl.com: „taking a hiatus in 2026"). Am 03.08. entfernt.
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine offiziell verifizierbare 2026-Ausgabe (Seite nur 2024, nicht im MTB-Sachsen-Cup 2026). Am 05.08. entfernt.
- Kosiak Löwe (Feistritz im Rosental, Kärnten) — 2026 offiziell abgesagt (lcsuetschach.at). Am 17.09. entfernt.
- **Granfondo Alpes d'Azur (Nizza/Alpes-Maritimes, FR) — Auftaktausgabe für 27.09.2026 ~4 Tage vorher offiziell abgesagt (gfalpesdazur.com: „ANNULATION … un nombre d'inscrits beaucoup trop faible"). Volle Rückerstattung. Am 23.09.2026 entfernt. Aggregatoren führen es weiter aktiv.**
- Mürzer Oberland Naturpark Duathlon (Steiermark) — 26.09.2026 offiziell abgesagt (ÖTRV „ABGESAGT“, fun-sports.at; BH-Genehmigungsstreit). Am 24.09. entfernt.
- IRONMAN 70.3 Knokke-Heist (BE) — ironman.com Status „Discontinued“, ab 2027 ersetzt durch Volldistanz IRONMAN Belgium Knokke-Heist (eigene Datei). 70.3 nicht wieder anlegen.
- Granfondo Pag Okt-2026 — Phantom (7. Ausgabe erst 15.05.2027, granfondopag.com). 2026-Datei am 24.09. entfernt, 2027-Datei korrekt.
- Bergzeitfahren Schmelz Lollar 2026 + Rodltal-Bergkaiser 2026 — offiziell abgesagt, am 24.09. entfernt.
- 2027-Pausen: Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- **letape-czech-republic-flat-2026** — Datumskonflikt: offizielle Flat-Stage-Seite nennt **03.10.2026**, die JSON-Datei führt 04.10.2026 (beide Saison 2026, daher diesen Lauf nicht geändert). Vermutlich Sa/So-Split des L'Étape-Wochenendes; bei nächster Runde offiziell klären und ggf. `dates.start` korrigieren.

### BACKLOG (offene Aufgaben)
- **Challenge-Full-Distance-Lauf 2026-09-23 abgebrochen** (User wollte sofort commit/push): Agent hatte The Championship (Šamorín, 23.05.2027, T100) + Anfi Challenge Mogán (17.04.2027, T100) angelegt (beide offiziell verifiziert, aufgenommen). Full-Distance-Recherche (challengefamily.com `?_triathlon=full-distance&_continent=europe`) NICHT abgeschlossen — nächster Lauf: verbleibende EU-Challenge-Volldistanzen prüfen (Roth+Almere schon 2027 vorhanden).
- **IRONMAN Welle 3 — offen (kein offizielles 2027-Datum am 09-23):** ironman-703-kraichgau (nicht im offiziellen IRONMAN-Germany-2027-Post genannt; Aggregatoren widersprüchlich 23.05. vs 06.06.) · ironman-703-italy-emilia-romagna + ironman-italy-emilia-romagna (nur Aggregator „Mitte Sep 2027"). Re-check ironman.com sobald DE/IT-2027-Termine offiziell.
- **Challenge Okt-2026-Ausgaben ohne 2027-Datum (re-check Herbst/Winter 2026):** challenge-peguera-mallorca, challenge-sanremo, challenge-vieux-boucau, challenge-forte-village-sardinia, challenge-barcelona — 2027-Termine noch nicht publiziert.
- **confirmed:false 2027 (Datum nachtragen sobald offiziell):** ironman-703-duisburg (best guess 15.08.), ironman-703-erkner (12.09.), challenge-sandefjord (27.06.) — Fortführung offiziell signalisiert, exakter Tag fehlt.
- **2027 Save-the-date (nur mit `confirmed:false`):** king-of-the-lake „voraussichtlich 18.09.2027" (kotl.at) · etape-du-tour 2027 · paris-roubaix-challenge 2027 (kein Datum) · tour-transalp 20.–26.06.2027 (Datum bestätigt, Streckenorte 2027 noch unveröffentlicht → keine Karten-Location).
- **2027 noch ohne Info (re-check Okt/Nov 2026):** ironman-barcelona-calella · marmotte-granfondo-alpes · neusiedlersee-radmarathon.
- **2027-Seed, Welle 3 (Rest, noch nicht recherchiert):** IRONMAN 70.3 Zell am See ✅ / Jönköping ✅ / Nice ✅; offen: Duisburg-Datum, Erkner-Datum, Challenge Heilbronn, Velothon Berlin, Trumer/Allgäu/Frankfurt-City-Triathlon, Dreiländergiro, Mondsee 5-Seen, Sella Ronda Bike Day.
- **2027-Enrichment-Regel:** `registrationUrl` bei angelegten 2027-Ausgaben nachtragen, sobald Anmeldung öffnet (Ötztaler Jänner, Glocknerkönig Dez, Mallorca 06.10., Maratona Ende Sept, St. Pölten 23.11.2026).
- **Discovery-Kandidaten (offiziell verifizieren, dann anlegen — Anti-Flut):** SURM Schwarzwald Ultra Radmarathon, Salt&Lake Trail Salzburg, Südkärntner Triathlon, RügenChallenge — weiterhin unbearbeitet.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city, city-bremen, datagroup-nuernberg (Stadt-Tris, flach), rad-am-salzburgring (25/100 unbelegt) — plausibel belassen, nicht neu raten.
- **Kraichgauman Crossduathlon = LETZTE Ausgabe 2026** (Gelände wird bebaut) → keine 2027-Folgeausgabe.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen, siehe routine-prompt „Recherche-Umfang“)
| Quelle | zuletzt |
|---|---|
| ironman.com Rennseiten + IRONMAN-Social (2027: Zell am See/Jönköping/Nice/Duisburg/Erkner; ironman.com selbst bot-blocked) | 2026-09-23 |
| challengefamily.com + einzelne Race-Sites (2027: Walchsee/Salou/Cesenatico/Gdańsk/Turku/Sandefjord/Mogán/The Championship) | 2026-09-23 |
| Veranstalterseiten Rad EU (Enrichment: baltijasmaratoni.lv, kotl.at, dviratai.lt, cabreirasolutions, letapeczech.cz, radmarathon.at, bikeservice.pt, zadar.hr) | 2026-09-23 |
| Veranstalterseiten Tri/Duathlon DE/AT (Enrichment: tus-ahrweiler, ttci.at, alwaysaimhigh, DTU-Kalender, trifun.de, oceanlava.me, kraichgauman.de, tg-tria-ruesselsheim, tvlorsbach) | 2026-09-23 |
| gfalpesdazur.com (Absage verifiziert → Removal) | 2026-09-23 |
| UCI Gran Fondo World Series (Leuven Legacy, Varese UEC-EM) | 2026-09-17 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-23 (Cross-Duathlon-Termine Deining/Rüsselsheim gegengeprüft) |
| triathlon-austria.at/de/service-termine (ÖTRV) | 2026-08-19 |
| birken.no / GFNY-Serie / mtb-sachsen-cup.de | 2026-08-19 / 08-05 |
> Hinweis: Ab sofort werden alle Quellen jeden Lauf durchsucht (keine Rotation). k226.com (07-14) und cycloworld.cc (07-29) sind am längsten nicht gelaufen — beim nächsten Lauf mit 2027-Jahresfilter nachholen. Für Full-Distance-Challenge den abgebrochenen 09-23-Lauf fortsetzen.

---

## Session 2026-09-23 — 14 neue 2027-Ausgaben + T100-Kategorie + 18 Enrichment + 1 Removal

Ausgewogener Wartungslauf, **Enrichment-first + kontrolliertes 2027-Wachstum** (Anti-Flut: 14 Neuanlagen, Limit 15 eingehalten). 5 Research-Agents parallel gegen **offizielle** Quellen (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten). User-Input während des Laufs: Challenge-Family-Discovery für Mittel-/Langdistanz + „100"-Format europaweit.

- **Neue Kategorie `T100`** (`src/lib/types.ts`) für das 100er-Format (2/80/18 = 100 km), auf das Challenge Family mehrere Rennen umstellt. `distanceKm: 100`. 6 Events getaggt (Cesenatico, Gdańsk, Mogán, Salou, The Championship, Walchsee). Zod/Filter/Landing/JSON-LD ziehen automatisch mit — Build grün.
- **14 neue 2027-Ausgaben** (alle offiziell gegengeprüft; Slug-Stamm = 2026-Sibling für „Weitere Ausgaben"):
  - **IRONMAN (6):** ironman-70-3-zell-am-see (29.08., ausverkauft), ironman-703-jonkoping (11.07.), ironman-703-nice + ironman-france-nice (beide 12.09., 2027 in den September verlegt), ironman-703-duisburg (confirmed:false, best guess 15.08.), ironman-703-erkner (confirmed:false, 12.09.).
  - **Challenge (8):** walchsee-challenge/Kaiserwinkl (27.06., T100), challenge-salou (09.05., T100), challenge-cesenatico (16.05., T100), challenge-gdansk (20.06., T100), challenge-turku (25.07., Mitteldistanz), challenge-sandefjord (confirmed:false, 27.06.), challenge-mogan-gran-canaria (17.04., T100), challenge-the-championship-samorin (23.05., T100).
- **18 Bestands-Events veredelt/korrigiert** (soonest-first, längste Rest-Indexzeit): Cycling (9): jurmala (**distanceKm 62→30**, Breitensport-Event, latvia.travel-Bild entfernt), king-of-the-lake (47→47,2, unbelegte 200 Hm entfernt), elektrenu-gran-fondo (Routen 100/130/175, Blog-Bild entfernt), granfondo-serra-dossa (144→146,3/1800→1755), letape-czech-flat (111→110/270→300, Datum geflaggt), pyramidenkogelhero (7,2/400 bestätigt), ourem-fatima-granfondo (Debüt, falsches Amarante-Bild entfernt), zadar-granfondo (Bild+unbelegte Elevation entfernt), granfondo-portimao (139/2194 bestätigt). Tri/Duathlon (9): grafschafter-crossduathlon (+16,8 km, Veranstalter-Fix TuS Ahrweiler), ikb-baggersee-aquathlon (+6 km), sandman-newborough (115→114,9, 4 Formate), bm-crossduathlon-deining (+12,2), guestrow-cross-duathlon (+37), ocean-lava-kotor (+112,9/500), kraichgauman (+39, letzte Ausgabe), ruesselcross (+27,5), lorsbach (+28, hdsports-Bild + unbelegte Elevation entfernt).
- **1 Removal:** granfondo-alpes-dazur-2026 (offiziell abgesagt, gfalpesdazur.com) → BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap / noindex:** `npm run build` grün, **1230 pages**, 0 errors. Sitemap 190 URLs, alle neuen `-2027` enthalten, keine past/noindex/abgesagten URLs. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — keine Code-Änderung nötig (nur types.ts um T100 erweitert).
- **Datenqualität:** thin upcoming 13→**0** (alle veredelt).

---

## Session 2026-09-17 — 2027-Welle-2 (10 neu) + Enrichment (20) + 1 Removal

Ausgewogener Wartungslauf mit **Enrichment-first + kontrolliertem 2027-Wachstum** (Anti-Flut: 10 Neuanlagen, Limit 15 nicht ausgeschöpft). 4 Research-Agents haben parallel gegen **offizielle** Quellen recherchiert (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten).

- **10 neue 2027-Ausgaben** (alle confirmed:true, offiziell gegengeprüft):
  - **Triathlon (4):** ironman-kalmar (21.08., ausverkauft), ironman-vitoria-gasteiz (11.07., Reg. offen), challenge-almere-amsterdam (11.09., ältester LD-Triathlon Europas), ironman-703-st-poelten (23.05., Klassiker-Comeback, Reg. ab 23.11.2026).
  - **Cycling (6):** riderman-bad-duerrheim (03.–05.09., 224/2.985, imageUrl), arber-radmarathon (25.07., 250/3.750), granfondo-stelvio-santini (06.06., 130/4.270), granfondo-nove-colli (23.05., 200/3.814), granfondo-strade-bianche (07.03., 137,7/2.000, Gravel), amstel-gold-race-toerversie (17.04., RTF).
  - Offen: tour-transalp (Datum bestätigt, Orte 2027 unveröffentlicht → nicht angelegt).
- **20 Bestands-Events veredelt/korrigiert** (Okt/Nov 2026, längste Rest-Indexzeit): 10 Cycling + 10 Tri. Wesentliche Fixes: Distanz-/Höhenmeter-Korrekturen (prenzlauer 216→231/1500→1190, leuven 147→132/950→880, sanremo 113→103 + Rad 80, kaiserstuhl → 20 km single-course), 2 Umbenennungen (Flanders→Leuven Legacy Gravel, Kaiserstuhl→Cross-Duathlon), Label-Tausch güstrow, Hallenbad-Fix neustaedter, Websites/Reg-URLs nachgetragen, unbelegte Felder + Aggregator-Bilder entfernt.
- **1 Removal:** kosiak-loewe-2026 (offiziell abgesagt, LC Suetschach) → BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap / noindex:** `npm run build` grün, **1215 pages**, 0 errors. Sitemap enthält alle 26 `-2027`-URLs, keine past/noindex-URLs, kosiak entfernt. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — keine Code-Änderung nötig.

---

## Session 2026-09-16 — Season-Umbau + 2027-Seed (Welle 1)

- **Infrastruktur (Commit 475309d):** Saison-Modell eingeführt — Event gehört zur Saison seines Startjahres, `SEASONS=[2026,2027]`, UI-Default 2027. Filter-Toggle mit Zählern, localStorage (`sport_events.season.v1`) + `?saison=`-Param (URL gewinnt). Landingpages `[year].astro` pro Sport × Land × Jahr; Header/Footer/Breadcrumbs jahresbewusst. Detailseite verlinkt Geschwister-Ausgaben („Weitere Ausgaben").
- **2027-Seed (15 neu, Limit voll):** ironman-frankfurt (27.06.), ironman-hamburg (06.06.), ironman-austria-kaernten (13.06.), ironman-switzerland-thun (04.07.), ironman-copenhagen (22.08.), challenge-roth (04.07.), oetztaler-radmarathon (29.08.), glocknerkoenig (06.06.), dolomitenradrundfahrt (13.06.), kitzbueheler-radmarathon (05.09.), cyclassics-hamburg (15.08.), eschborn-frankfurt-jedermann (01.05.), maratona-dles-dolomites (04.07.), mallorca-312 (24.04.), race-around-austria (09.–15.08.). Alle Termine gegen offizielle Seiten/JSON-LD verifiziert.
- **Abweichung von Enrichment-first:** 0 Bestandsevents veredelt — bewusst, weil die UI ab sofort 2027 zeigt und die Saison sonst leer wäre.
- Build grün: 1203 pages, 0 errors.

---

> Ältere Session-Summaries (2026-08-19 und früher) in `progress-archive.md`.
