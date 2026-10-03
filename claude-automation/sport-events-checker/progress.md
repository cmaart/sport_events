# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **372 Events** (Stand 10-03; confirmed 338, confirmed:false 34). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, die ab Okt 2026 gestaffelt erscheinen), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) für das 100er-Format (2/80/18 = 100 km, Challenge Family + PTO). `distanceKm: 100`; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`.

### Kennzahlen (Stand: 2026-10-03)
- Events gesamt: **1500** | Saison 2026: 1128 (upcoming ≥ heute **64** | past/noindex **1064**) | Saison 2027: **372** (confirmed 338 | confirmed:false 34)
- Letzter Lauf: 2026-10-03 — **25 neue 2027-Ausgaben** (AT-Tri 6, DE/EU-Tri+IRONMAN 2, AT/DE-Rad 4, EU-Rad 13), **~9 Bestands-Events veredelt/korrigiert** (6 IRONMAN-2026-Beschreibungen, 3 Felder), **2 Dubletten entfernt**, **3× Gran Fondo→RTF**, **1 Datumsfehler korrigiert** (IRONMAN 70.3 Versailles 2026 12.07.→**11.10.**).
- Build zuletzt grün: **1572 pages**, 0 errors; Sitemap **509 URLs** (nur indexierbar), alle 25 neuen `-2027` enthalten, entfernte Dubletten raus, Versailles (jetzt wieder upcoming) enthalten.
- Datenqualität (upcoming, Stand 10-03): thin **10** (alle Rest-2026, Okt/Nov, bald past — niedrige Prio); missing distanceKm **15**; missing elevationGainM **210**; missing imageUrl **161**. Hinweis: viele fehlende Elevation-Werte sind offiziell nicht publiziert (Agents verifiziert) → nicht schätzen.

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- IRONMAN 70.3 Budapest — zuletzt 2016; nicht im IRONMAN-Europakalender
- IRONMAN Ireland (Youghal/Cork) — 2024/25 nicht ausgetragen, Rechtsstreit; keine offizielle 2026/27-Bestätigung
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt
- Granfondo Tavira (PT) — offizielle Domain löst nicht auf; nur Aggregatoren
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine verifizierbare 2026/27-Ausgabe
- Kosiak Löwe (Feistritz im Rosental, Kärnten) — 2026 offiziell abgesagt
- Granfondo Alpes d'Azur (Nizza, FR) — Auftaktausgabe 27.09.2026 offiziell abgesagt
- Mürzer Oberland Naturpark Duathlon (Steiermark) — 26.09.2026 offiziell abgesagt
- IRONMAN 70.3 Knokke-Heist (BE) — „Discontinued“, ab 2027 Volldistanz IRONMAN Belgium Knokke-Heist (eigene Datei)
- Granfondo Pag Okt-2026 — Phantom (7. Ausgabe erst 15.05.2027). 2027-Datei korrekt.
- Bergzeitfahren Schmelz Lollar 2026 + Rodltal-Bergkaiser 2026 — offiziell abgesagt
- Granfondo Bratislava (SK) — „V roku 2026 si dávame pauzu"
- RideLondon 100 (GB), Velothon Wales (GB), IRONMAN 70.3 Edinburgh (GB), Challenge Lisboa (PT), Styrkeprøven Trondheim-Oslo (NO) — eingestellt/abgesagt
- Velothon Berlin — defunct (→ VeloCity, letzte ~2022)
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **Dubletten 2026 entfernt (10-03):** marmotte-granfondo-valais-2026 (= tour-des-stations-verbier-2026) und dolomitenradrundfahrt-lienz-2026 (= dolomitenradrundfahrt-2026). Je die Datei ohne 2027-Sibling entfernt.
- ✅ **Gran Fondo→RTF (10-03):** chiemgau-bike-trophy-ruhpolding-2026, duisburg-steel-2026, cycling-paradise-sylt-2026 (an 2027-Siblings angeglichen).
- ✅ **granfondo-riccione-2027 angelegt (10-03):** offiziell „21 MARZO 2027".
- ✅ **IRONMAN 70.3 Versailles 2026 Datumsfehler korrigiert (10-03):** 12.07.→11.10.2026 (ironman.com); war fälschlich past/noindex.
- **offen — krk-granfondo (HR):** krkgranfondo.com 503, kein 2027-Datum verifizierbar → BACKLOG.
- **offen — swedeman-xtri-are (SE):** 10.07. (offiziell?) vs 03.07. (k226) — noch zu klären.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026 (radmarathon.at generisch); loser-bergzeitfahren-altaussee-2026 (salzkammergut-trophy.at). loser-Aggregatorbild bereits entfernt.
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon.
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).

### BACKLOG (offene Aufgaben — Stand 10-03)
- **IRONMAN 2027 noch „TBD"/zeigt Okt-2026 (Datum ab Herbst/Winter re-check via ironman.com):** 70.3 Gdynia, Krakau, Posen, Warschau, Hradec Králové, Málaga, Poreč, Versailles, Costa Navarino, Cascais (70.3 + Full), **Barcelona-Calella** (2027 Reg. ab 08.10.2026 → nach 08.10. re-check), 5150 Cervia. Tipp: `curl https://r.jina.ai/https://www.ironman.com/<slug>` (WebFetch 403t).
- **Challenge Herbst-Rennen 2027 (challengefamily.com führt nur Okt-2026):** Peguera-Mallorca, Sanremo, Vieux-Boucau, Forte Village, Barcelona. challenge-sandefjord-2027 bleibt confirmed:false („June 2027").
- **confirmed:false 2027 (34) — exaktes Datum nachtragen sobald offiziell:** u. a. die neuen (carinthia200-villach, rosenheimer-radmarathon, allgaeu-gravel-ride-isny, gravelei-suedsteiermark, letape-slovenia, letape-romania, ardechoise, ariegeoise, quebrantahuesos, marmotte-granfondo-alpes) + Bestand (king-of-the-lake „voraussichtlich 18.09.2027", styroica „geplant 18.09.2027", woerthersee-gravel-race „18.04.2027 vorläufig", paris-roubaix-challenge, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, swim-run-swim-laengsee, hansbergland, u. v. m.).
- **Rad AT/DE ohne 2027-Datum (Veranstalterseite 503/nur 2026):** tour d'energie Göttingen, brezel-race, brockenheroes, salt&lake-trail, velowino, lidl-deutschland-tour, saarschleifen, nockbike (MTB), löwensteiner-berge. **Dormant/defunct:** tour-de-kärnten (Ossiach, ~2021), velothon-berlin, sauerlandride. ~290 cycloworld-„Date not confirmed"-Einträge ohne Repo-Sibling weiter ungeprüft.
- **Rad EU ohne offizielles 2027-Datum:** La Pyrénéenne (Quellen widersprüchlich Argelès vs Saint-Lary), Portes du Soleil (offiz. Seite 404/503), Tour of Pembrokeshire, Il Lombardia Gimondi (RCS nur 2026), The River Gravel (Event nicht auffindbar), Etape du Tour (nach Tour-Präsentation), Tour Transalp (Orte 2027), haute-route-alps (Route 2027 offen).
- **Tri AT/DE/EU ohne 2027-Datum:** ÖTRV-Kalender 2027 füllt sich (jetzt ~11) — re-check für südkaerntner, amstetten, backwaterman, jannersee, wolfgangsee-strobl, xterra-austria u. a.; DTU-Kandidaten (datagroup-nürnberg, herzoman, müritz, taunusstein, …); Spreewald-Duathlon 2027 (01.05., Brandenburg) + Neustädter Triathlon 2027 (20.06., Bayern) niedrige Prio.
- **2027-Enrichment:** `registrationUrl` nachtragen, sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert (viele Stadt-Tris/IRONMAN-Kurse + flache Rad-Events publizieren keine Höhenmeter → nicht schätzen).
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-03 (2027 jetzt 11 Events; 6 neu übernommen, keine „ABGESAGT") |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-03 (2027: wenige Einträge, Kandidaten in BACKLOG) |
| ironman.com (via r.jina.ai-Reader, direkt 403) | 2026-10-03 (Belgrade + 5150 Kraichgau 2027 bestätigt; viele 70.3 noch TBD) |
| challengefamily.com + Race-Sites | 2026-10-03 (2027-Bestand bestätigt; Herbstrennen noch ohne 2027-Datum) |
| k226.com/events/events.aspx | 2026-10-03 (Discovery) |
| cycloworld.cc/de/kalender-de | 2026-10-03 |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-03 |
| UCI Gran Fondo World Series | 2026-10-03 (Istria + Cyprus 2027 bestätigt) |
| GFNY / L'Étape-Serie / granfondoriccione / activatecyprus | 2026-10-03 |
| Veranstalterseiten aller 2026-Events (2027-/Absage-Scan) | 2026-10-03 |
> Nicht erreichbar 10-03: krkgranfondo.com (503), gravelei.com (503, Datum via steiermark.com), tour-d-energie.de (503), brezel-race.de (503), diverse FR-Portes-du-Soleil-Seiten (404/503).

---

## Session 2026-10-03 — 25 neue 2027-Ausgaben + Enrichment + Dedup/Datenfixes

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 4 Research-Agents parallel gegen **offizielle** Quellen (ÖTRV/DTU/k226 Tri, ironman.com via r.jina.ai + challenge-family, cycloworld/hdsports Rad AT/DE, UCI GFWS/GFNY/L'Étape Rad EU); Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert.

- **25 neue 2027-Dateien** (Slug-Stamm = 2026-Sibling wo vorhanden, Beschreibung je 5–9 Sätze, neu geschrieben):
  - **Tri AT (6, ÖTRV):** aloha-tri-linz (03.07.), aloha-tri-traun (31.07.), aloha-tri-mondseeland (05.09.), braunauer-sprinttriathlon (23.05.), thiersee-triathlon (15.08.), vulkanlandaquathlon-riegersburg (29.08.).
  - **Tri/IRONMAN (2):** ironman-703-belgrade (12.09., 2. Ausgabe), ironman-5150-kraichgau (23.05., Olympisch).
  - **Rad AT/DE (4):** muensterland-giro (03.10.), race-across-austria-east-west (24.–28.08., eigene Ost-West-Route), grand-escape-innsbruck (04.09., RTF-Bikepacking), gravelei-suedsteiermark (confirmed:false, 21.–23.05.) + 3 weitere confirmed:false (carinthia200-villach, rosenheimer-radmarathon RTF, allgaeu-gravel-ride-isny).
  - **Rad EU (13):** confirmed: granfondo-riccione (21.03.), istria-granfondo (03.04.), gfny-nyborg (08.08.), uci-granfondo-cyprus (26.–28.03.); confirmed:false (offiz. Fortführungssignal, Datum geschätzt): letape-slovenia, letape-romania, ardechoise, quebrantahuesos, ariegeoise, marmotte-granfondo-alpes.
- **~9 Bestands-Events veredelt/korrigiert:** 6 dünne IRONMAN-2026-Beschreibungen (cascais, portugal-cascais, malaga +Elevation 250, costa-navarino, porec, barcelona-calella) auf 6–7 Sätze erweitert + tote ironman.com-Slugs gefixt; bodensee-radmarathon-2027 (+Elevation 2376), granfondo-serra-da-estrela-2027 (+distanceKm 132), krakonosov-trutnov-2027 (+Elevation 2613).
- **Datenfixes:** 2 Dubletten entfernt (marmotte-granfondo-valais-2026, dolomitenradrundfahrt-lienz-2026); 3× Gran Fondo→RTF; 2 Aggregatorbilder entfernt (ironman-703-duisburg-2027 kavval, loser-bergzeitfahren-2026 hdsports); **IRONMAN 70.3 Versailles 2026 Datum 12.07.→11.10.** korrigiert (war fälschlich past/noindex).
- **Keine Removals wegen Absage** und **keine neuen BLACKLIST-Einträge** diesen Lauf (ÖTRV ohne „ABGESAGT"; agents fanden keine neuen Absagen).
- **SEO / Sitemap / noindex:** `npm run build` grün, **1572 pages**, 0 errors. Sitemap 509 URLs (nur indexierbar), alle 25 neuen `-2027` enthalten, entfernte Dubletten raus, Versailles wieder enthalten. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.
- **Branch-Hinweis:** Dieser Lauf wurde auf dem zugewiesenen Arbeits-Branch `claude/intelligent-clarke-2hiu6x` committet/gepusht (Harness-Vorgabe), nicht direkt auf `master`. Für das Deployment muss der Branch nach `master` gemerged werden.

---

## Session 2026-09-24 — Großwelle 2027: 306 neu (erster Lauf ohne Mengen-Limit) + ~35 Enrichment + 5 Removals

Erster Lauf nach Aufhebung des 15er-Limits (User-Wunsch) und mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel (ÖTRV, DTU+k226, IRONMAN/Challenge, cycloworld AT/DE, Rad EU/UCI, Enrichment), alle Termine gegen offizielle Veranstalter-/Serienseiten; Aggregatoren nur Discovery.

- **306 neue 2027-Dateien** (282 confirmed, 24 confirmed:false; fast alle als Folgeausgabe mit gleichem Slug-Stamm, Beschreibung neu geschrieben mit 2027-Datum/Auflage/Neuerungen; alte 2026-registrationUrls bewusst entfernt; nicht verifizierbare Bilder entfernt):
  - Triathlon AT 20 (ÖTRV) · Triathlon DE/EU 134 (DTU/k226, inkl. neu Munich Triathlon + ChtriMan Gravelines) · IRONMAN/Challenge 29 · Rad AT/DE 76 (cycloworld, inkl. SURM) · Rad EU 47 (UCI/Classics/L'Étape/GFNY/Sella Ronda).
  - Neue Stämme: ironman-les-sables-dolonne (70.3→Volldistanz), ironman-knokke-heist (erste belgische Volldistanz), ironman-5150-erkner.
- **Korrekturen Bestand:** ironman-703-duisburg-2027 (15.08.→**29.08.**, confirmed, Strecke Regattabahn), erkner-2027 confirmed (unbelegte Hm + falsche WM-Quali raus), challenge-sandefjord (Rad 85 km), mogán (1.462 Hm statt Lauf-Hm), cesenatico/salou/samorín/almere/turku elevation; desafio-donana-2026 **04.→17.10.** (FETRI, XVI. Ausgabe), vuelta-ibiza distanceKm 300→164, cyclotour-du-leman Gran Fondo→RTF, istria300 302 km/5.300 Hm, uec-varese 2.120 Hm, letape-czech-flat 04.→03.10.; + ~20 weitere Beschreibungs-/Bild-/URL-Fixes (Enrichment-Agent 25 Dateien).
- **5 Removals:** muerzer-oberland-duathlon-2026 (ÖTRV „ABGESAGT"), granfondo-pag-2026 (Phantom, 7. Ausgabe erst 15.05.2027), bergzeitfahren-schmelz-lollar-2026 + rodltal-bergkaiser-2026 (abgesagt) → BLACKLIST + CLAUDE.md. IRONMAN 70.3 Knokke-Heist „Discontinued" + 2027-Pausen (Fichkona, Montafon M3, Bayrisch Lettn, RügenChallenge) dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1547 pages**, 0 errors. Sitemap 508 URLs (nur indexierbar), 21 Jahres-Landingpages 2027; entfernte + past URLs nicht enthalten; noindex stichprobenartig geprüft. Keine Code-Änderung.
- **Risiko-Hinweis:** +306 Seiten auf einen Schlag bei laufendem Scaled-Content-Throttle. Qualitäts-Gate per Skript geprüft (≥4 Sätze, ≥350 Zeichen, Ähnlichkeit zu 2026 ≤0,75). Search-Console-Indexierung beobachten.

---

## Session 2026-09-23 — 14 neue 2027-Ausgaben + T100-Kategorie + 18 Enrichment + 1 Removal

Ausgewogener Wartungslauf, **Enrichment-first + kontrolliertes 2027-Wachstum** (Anti-Flut: 14 Neuanlagen, Limit 15 eingehalten). 5 Research-Agents parallel gegen **offizielle** Quellen (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten). User-Input während des Laufs: Challenge-Family-Discovery für Mittel-/Langdistanz + „100"-Format europaweit.

- **Neue Kategorie `T100`** (`src/lib/types.ts`) für das 100er-Format (2/80/18 = 100 km), auf das Challenge Family mehrere Rennen umstellt. `distanceKm: 100`. 6 Events getaggt (Cesenatico, Gdańsk, Mogán, Salou, The Championship, Walchsee). Zod/Filter/Landing/JSON-LD ziehen automatisch mit — Build grün.
- **14 neue 2027-Ausgaben** (alle offiziell gegengeprüft; Slug-Stamm = 2026-Sibling für „Weitere Ausgaben"):
  - **IRONMAN (6):** ironman-70-3-zell-am-see (29.08., ausverkauft), ironman-703-jonkoping (11.07.), ironman-703-nice + ironman-france-nice (beide 12.09.), ironman-703-duisburg (confirmed:false, best guess 15.08.), ironman-703-erkner (confirmed:false, 12.09.).
  - **Challenge (8):** walchsee-challenge/Kaiserwinkl (27.06., T100), challenge-salou (09.05., T100), challenge-cesenatico (16.05., T100), challenge-gdansk (20.06., T100), challenge-turku (25.07., Mitteldistanz), challenge-sandefjord (confirmed:false, 27.06.), challenge-mogan-gran-canaria (17.04., T100), challenge-the-championship-samorin (23.05., T100).
- **18 Bestands-Events veredelt/korrigiert** (soonest-first): Cycling (9): jurmala (distanceKm 62→30), king-of-the-lake, elektrenu-gran-fondo, granfondo-serra-dossa, letape-czech-flat, pyramidenkogelhero, ourem-fatima-granfondo, zadar-granfondo, granfondo-portimao. Tri/Duathlon (9): grafschafter-crossduathlon, ikb-baggersee-aquathlon, sandman-newborough, bm-crossduathlon-deining, guestrow-cross-duathlon, ocean-lava-kotor, kraichgauman, ruesselcross, lorsbach.
- **1 Removal:** granfondo-alpes-dazur-2026 (offiziell abgesagt) → BLACKLIST + CLAUDE.md.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1230 pages**, 0 errors. Sitemap 190 URLs, alle neuen `-2027` enthalten, keine past/noindex/abgesagten URLs.

---

> Ältere Session-Summaries (2026-09-17 und früher) in `progress-archive.md`.
