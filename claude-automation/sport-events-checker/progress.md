# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **349 Events** (324 confirmed, 25 confirmed:false). upcoming thin = 0. Nächste Läufe: fehlende `imageUrl` (144) / `elevationGainM` (200) nachziehen, BACKLOG-re-checks (IRONMAN/Challenge-Herbstrennen + Rad-Klassiker, deren 2027-Termine erst Okt–Dez 2026 erscheinen), `registrationUrl` nachtragen sobald Anmeldungen öffnen.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) für das 100er-Format (2/80/18 = 100 km), auf das Challenge Family (mit PTO) mehrere Rennen umstellt. `distanceKm: 100` statt 113; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`. Zod/Filter/Landingpages übernehmen automatisch. 6 T100-Events: Cesenatico, Gdańsk, Mogán Gran Canaria, Salou, The Championship (Šamorín), Kaiserwinkl-Walchsee.

### Kennzahlen (Stand: 2026-09-29)
- Events gesamt: **1474** | Saison 2026: 1125 (upcoming ≥ heute **63** | past/noindex **1062**) | Saison 2027: **349** (confirmed 324 | confirmed:false 25)
- Letzter Lauf: 2026-09-29 — **2 neue 2027-Ausgaben** (ironman-5150-kraichgau, granfondo-riccione), **17 Events veredelt** (6 thin-Beschreibungen neu, 7 fehlende distanceKm, 4 elevationGainM), **9 Datenfehler gefixt** (2 RTF-Serien, websiteUrl, swedeman-Datum, hansbergland-Distanz, neufeld-Wochentage, 8 Aggregator-/tote imageUrls entfernt), **5 Removals** (Dubletten: marmotte/dolomitenradrundfahrt-lienz + goettingen/kirchenbergrennen-hainfeld/starlim-wels)
- Build zuletzt grün: **1545 pages**, 0 errors; Sitemap **483 URLs** (nur indexierbar), 21 Landingpages `/…/2027`; keine past/noindex-/entfernten URLs
- Datenqualität (upcoming = 2027 + Rest-2026, Stand 09-29): thin **0**; missing distanceKm **5** (nicht offiziell belegbar); missing elevationGainM **200** (viele flache Events / IRONMAN-Course-Seiten publizieren keine Hm); missing imageUrl **144** (ironman.com-Bilder Referer-geblockt)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — bereits 11.–12.07.2026 gelaufen, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 nach Matalascañas verlegt
- Granfondo Tavira (PT) — offizielle Domain löst nicht auf (DNS); nur Aggregatoren führen „27.09.2026". 07-27 entfernt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen).
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell. 08-03 entfernt.
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine verifizierbare 2026-Ausgabe. 08-05 entfernt.
- Kosiak Löwe (Feistritz im Rosental, Kärnten) — 2026 offiziell abgesagt (lcsuetschach.at). 09-17 entfernt.
- Granfondo Alpes d'Azur (Nizza, FR) — Auftaktausgabe 27.09.2026 ~4 Tage vorher abgesagt (gfalpesdazur.com). 09-23 entfernt.
- Mürzer Oberland Naturpark Duathlon (Steiermark) — 26.09.2026 abgesagt (ÖTRV „ABGESAGT", fun-sports.at). 09-24 entfernt.
- IRONMAN 70.3 Knokke-Heist (BE) — ironman.com „Discontinued", ab 2027 Volldistanz IRONMAN Belgium Knokke-Heist (eigene Datei). 70.3 nicht wieder anlegen.
- Granfondo Pag Okt-2026 — Phantom (7. Ausgabe erst 15.05.2027, granfondopag.com). 09-24 entfernt, 2027-Datei korrekt.
- Bergzeitfahren Schmelz Lollar 2026 + Rodltal-Bergkaiser 2026 — offiziell abgesagt, 09-24 entfernt.
- 2027-Pausen: Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier + in CLAUDE.md „Known Cancelled" ergänzen.

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **09-29 erledigt:** Dubletten marmotte-granfondo-valais-2026 (= tour-des-stations, entfernt) + dolomitenradrundfahrt-lienz-2026 (= dolomitenradrundfahrt, entfernt); 3 weitere Dubletten entfernt (goettingen-triathlon-2026 = goettinger-stadtwerke-volkstriathlon, kirchenbergrennen-hainfeld-2026 = landsthalsprint-hainfeld, starlim-city-triathlon-wels-2026 = starlim-city-triathlon-festiwels). Gran Fondo→RTF (chiemgau-bike-trophy, duisburg-steel, cycling-paradise-sylt). websiteUrl gaisberg-vertical→lrv-salzburg.at (loser-bergzeitfahren geprüft: salzkammergut-trophy.at IST offiziell, kein Fehler). swedeman-xtri-are 04.→10.07. Tote/Aggregator-imageUrls entfernt (top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel, ironman-703-duisburg-2027, loser-bergzeitfahren, ironman-703-malaga, ironman-703-costa-navarino). hansbergland-cross-triathlon 30→18,25 km; neufeld-Wochentage korrigiert.
- **granfondo-riccione-2027** (NEU, confirmed:false, 21.03.2027 Schätzung): offizielle Seite Cloudflare-geblockt, exaktes Datum nicht verifizierbar — bei Erreichbarkeit re-check (März-Tradition: 2023–25 immer Ende März).
- **krk-granfondo 2027:** nur 2026-Datei (25.04.2026, korrekt bestätigt). Kein offizielles 2027-Datum publiziert; 17.04./24.04.2027-Konflikt nicht auflösbar → BACKLOG re-check.
- **NEU (Agent-Flags 09-29):** krakonosov-cyklomaraton-trutnov-2027 (Datei 148/101 km, offiziell 135/86 km — evtl. stale); treibjagd-dunkelwald-2027 (offiziell mehrtägiges MTB-Etappenrennen 22.–25.07.2027, Datei zeigt Ein-Tages-60-km — prüfen); shelter-attack-flensburg-2027 (offiziell 3.–6.09.2026, 600/480 km — 2027-Datum verifizieren); granfondo-serra-da-estrela-2027 (location Manteigas vs. 2026 Seia — Startort unklar).
- **2026-Distanz (past, niedrige Prio, offen):** triathlon-kirchbichl (26 = Sprint-Summe vs. sonst Olympisch-Summe — Konventionsfrage), thermentriathlon-fuerstenfeld (kein belegbarer Fehler).

### BACKLOG (offene Aufgaben — Stand 09-29)
- **IRONMAN 2027 ohne offizielles Datum (ironman.com zeigt noch 2026):** 70.3 Barcelona-Calella, Málaga, Cascais/Portugal, Poreč, Costa Navarino, Gdynia, Kraków, Poznań, Warschau, Hradec Králové, Belgrad, 5150 Cervia, Versailles. Tipp: ironman.com via `https://r.jina.ai/https://www.ironman.com/races/<slug>`. **Erledigt 09-29:** 5150 Kraichgau (23.05.2027) angelegt.
- **Challenge Herbst-2027 (challengefamily.com zeigt noch 2026):** Peguera, Sanremo, Vieux-Boucau, Forte Village, Barcelona — re-check Herbst/Winter. challenge-sandefjord bleibt confirmed:false.
- **Rad-Klassiker EU ohne offizielles 2027-Datum:** L'Étape du Tour (Strecke bei Tour-Präsentation **22.10.2026** → danach re-check, provisorisch 18.07.2027), Quebrantahuesos, Marmotte Granfondo Alpes, Il Lombardia GF, L'Ardéchoise, Etape Slovenia/Romania, Tour Transalp (Orte 2027). **DNS-tot:** Istria (UCI 03.04.2027).
- **hdsports „2027-only"-Kandidaten ohne offizielle Bestätigung (nicht anlegen bis Veranstalterseite bestätigt):** Otzberger Bergzeitfahren, EZF Bierbaum, Bike the Bugles MTB (AT), Sachsenringradrennen; sowie in-scope-AT/DE-Rad ohne 2027-Datum: Wilder Kaiser MTB, Nockstein Trophy, Gravel Peaks Leogang, Kalk Trophy Molln, MTB Kernlandtrophy, Glemmride Saalbach, Maintal Bike Marathon, Rund um Hamminkeln, Waldhaus Bike Weilheim, Bike Quest Austria, Giro d'Monte Mariazell, Volksbank Giro Köln.
- **Tri AT/DE 2027-only (hdsports/DTU, ÖTRV/Organiser bestätigt noch nicht):** Vösendorf Zehntelman, TRIWomen Seeboden, Hubiman Kobenz, Jogler Hochwechsel Hero, Auseetriathlon Blindenmarkt, Spreewald Duathlon (DTU 01.05.2027 — separate Datei prüfen). ÖTRV-2027 bislang nur Apfelland (21.05.). Plus alte AT-Tri-BACKLOG (südkärntner, aloha-tri, backwaterman, amstetten, braunauer, ferlach, jannersee, kraigersee, luschnouar, mistelbacher, riverthlon, steiraman, thiersee, wolfgangsee-strobl, xterra-austria …).
- **distanceKm 2027 nicht offiziell belegbar (nicht schätzen):** havelberg-triathlon (Seiten 404, Distanzen widersprüchlich), erzgebirgstour-crottendorf (Altenberg-Strecke TBA), haute-route-alps (2027-Route TBA), in-velo-veritas-korneuburg (Längen unveröffentlicht), nostalrad-zell-am-see (Nostalgie-/Geschicklichkeits-Event, keine feste Distanz).
- **elevationGainM 2027 offiziell nicht publiziert (nicht schätzen):** flache Events (gfny-bremen, king-of-the-lake, ronde-van-noord-holland, gotland360, tour-de-balaton, gran-fondo-rosa, velorace-dresden, seaside-ride-gravel-rerik, cykelvasan-90 …), Stadt-Tris, viele IRONMAN-Course-Seiten. Nur Sekundär-/Aggregatorwerte (treibjagd-dunkelwald, ars-natura-mtb) → weglassen.
- **2027-Enrichment:** `registrationUrl` nachtragen, sobald Anmeldung öffnet (viele 2027-Kopien bewusst ohne alte 2026-Anmelde-URL).
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen, siehe routine-prompt „Recherche-Umfang")
| Quelle | zuletzt |
|---|---|
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert `?page=N`) | **2026-09-29 VOLLSTÄNDIG (9 Rad-Seiten/169 + 4 Tri-Seiten/77) — Lücke geschlossen** |
| triathlon-austria.at/de/service-termine (ÖTRV; `?month=M&year=YYYY`) | 2026-09-29 (2027 Mai–Sep: nur Apfelland; keine ABGESAGT) |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-29 (2027-Einträge alle schon im Repo) |
| ironman.com (via r.jina.ai) + challengefamily.com | 2026-09-29 (Herbst-2027-Termine noch nicht publiziert; 5150 Kraichgau übernommen) |
| k226.com/events/events.aspx | 2026-09-24 (voll; 09-29 nicht erneut voll gescannt) |
| cycloworld.cc/de/kalender-de | 2026-09-24 (voll; 09-29 via hdsports-Überlappung AT/DE als abgedeckt bestätigt) |
| UCI Gran Fondo World Series | 2026-09-24 (Kalender 2027 noch nicht online) |
| L'Étape-Serie, GFNY, xterraplanet, birken.no, vatternrundan, hauteroute | 2026-09-24 (L'Étape 2027-Strecke nach 22.10.2026) |
| Veranstalterseiten aller 2026-Events (automatischer 2027-/Absage-Scan) | 2026-09-24 |
> Cloudflare-/bot-geblockt 09-29: granfondoriccione.it, krkgranfondo.com. Weiterhin nicht erreichbar (s. 09-24): istriadiscovery.hr (DNS), lacharlygaul.lu, themajestics.ch, alohatri.at, ladies-triathlon.at, keltenman.at, bayman.fr.
> Hinweis: 09-29 fokussierte auf die hdsports-Lücke + BACKLOG-/ÖTRV-/DTU-/IRONMAN-/Challenge-Re-checks; cycloworld + k226 wurden zuletzt 09-24 vollständig durchsucht (Feld stabil, hdsports deckt AT/DE-Überlappung ab).

---

## Session 2026-09-29 — Enrichment + Datenfehler-Fixes + 2 Neuanlagen + 5 Dubletten-Removals

Wartungslauf 5 Tage nach der 09-24-Großwelle: Schwerpunkt Qualität/Bereinigung statt Masse (Feld war nach der Welle komplett gescannt). 3 parallele Agents gegen **offizielle** Quellen (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten).

- **2 neue 2027-Ausgaben** (offiziell verifiziert): ironman-5150-kraichgau (23.05.2027, confirmed, ironman.com — BACKLOG-Item abgearbeitet, distanceKm 51,5); granfondo-riccione (confirmed:false, 21.03.2027 Schätzung — offizielle Seite Cloudflare-geblockt, März-Tradition; 106/1800).
- **17 Bestands-Events veredelt** (alle offiziell gegengeprüft): 6 thin-Beschreibungen neu geschrieben + Felder korrigiert (alentejo-gravel-ourique 120,6/1912, ironman-703-costa-navarino, ironman-703-malaga, muensterland-giro-jedermann 100→125 + geratene Elevation entfernt, nirvana-gran-fondo-antalya, uci-granfondo-la-nucia); 7 fehlende distanceKm belegt (24h-radmarathon-grieskirchen, berliner-volkstriathlon, gfny-lourdes-tourmalet 157/4000, granfondo-serra-da-estrela, reiling-triathlon-harsewinkel, stadttriathlon-erding, stadttriathlon-forchheim); 4 elevationGainM belegt (gran-fondo-portorose 1718, amstel-gold-race-toerversie 2715, bodensee-radmarathon 2300, grosse-weserrunde-rinteln 2200). Ziel ≥20 knapp verfehlt (17), weil restliche Kandidaten nur mit Raten füllbar gewesen wären — Regel „nicht schätzen" hatte Vorrang (Details BACKLOG).
- **9 Datenfehler gefixt:** Gran Fondo→RTF (chiemgau-bike-trophy, duisburg-steel, cycling-paradise-sylt); websiteUrl gaisberg-vertical (radmarathon.at-Aggregator → lrv-salzburg.at); swedeman-xtri-are 04.→10.07. (swextri.com); hansbergland-cross-triathlon 30→18,25 km; neufeld-triathlon Wochentage; **8 tote/Aggregator-imageUrls entfernt** (top-race-germany-bostalsee 403, kulturstadttriathlon-weimar 404, ostseeman-gluecksburg 404, slovakman-226-piestany 404, kitzbuehel 404, ironman-703-duisburg-2027 + loser-bergzeitfahren Aggregator, ironman-703-malaga + costa-navarino Aggregator). loser-bergzeitfahren-websiteUrl geprüft — salzkammergut-trophy.at IST offiziell (kein Fehler).
- **5 Removals (Dubletten, alle past/noindex):** marmotte-granfondo-valais-2026 (= tour-des-stations-verbier), dolomitenradrundfahrt-lienz-2026 (= dolomitenradrundfahrt), goettingen-triathlon-2026 (= goettinger-stadtwerke-volkstriathlon, hatte finishers.com-Aggregatorlink), kirchenbergrennen-hainfeld-2026 (= landsthalsprint-hainfeld), starlim-city-triathlon-wels-2026 (= starlim-city-triathlon-festiwels). Jeweils die schwächere Kopie (Aggregator-URL / nicht-kanonischer Slug) entfernt.
- **Recherche:** hdsports.at **vollständig** gescannt (9 Rad-/4 Tri-Seiten — die 09-24 offene Lücke), ÖTRV 2027 + DTU 2027 re-checked (nichts Neues, alles schon im Repo), IRONMAN/Challenge-Herbstrennen + Rad-Klassiker re-checked (2027-Termine noch nicht publiziert außer 5150 Kraichgau). Keine neuen Absagen. Umfangreiche BACKLOG-Aktualisierung (re-check-Termine Herbst/Winter).
- **SEO / Sitemap / noindex:** `npm run build` grün, **1545 pages**, 0 errors. Sitemap **483 URLs** (nur indexierbar), 21 Landingpages 2027; beide Neuanlagen enthalten, keine entfernten/past/noindex-URLs. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung**. granfondo-riccione-2027 vs. 2026: Wort-Overlap 0,31 (< 0,75, kein Duplikat).

---

## Session 2026-09-24 — Großwelle 2027: 306 neu (erster Lauf ohne Mengen-Limit) + ~35 Enrichment + 5 Removals

Erster Lauf nach Aufhebung des 15er-Limits (User-Wunsch) und mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel (ÖTRV, DTU+k226, IRONMAN/Challenge, cycloworld AT/DE, Rad EU/UCI, Enrichment), alle Termine gegen offizielle Veranstalter-/Serienseiten; Aggregatoren nur Discovery.

- **306 neue 2027-Dateien** (282 confirmed, 24 confirmed:false; fast alle als Folgeausgabe mit gleichem Slug-Stamm, Beschreibung neu geschrieben mit 2027-Datum/Auflage/Neuerungen; alte 2026-registrationUrls bewusst entfernt; nicht verifizierbare Bilder entfernt):
  - Triathlon AT 20 (ÖTRV) · Triathlon DE/EU 134 (DTU/k226, inkl. neu Munich Triathlon + ChtriMan Gravelines) · IRONMAN/Challenge 29 · Rad AT/DE 76 (cycloworld, inkl. SURM) · Rad EU 47 (UCI/Classics/L'Étape/GFNY/Sella Ronda).
  - Neue Stämme: ironman-les-sables-dolonne (70.3→Volldistanz), ironman-knokke-heist (erste belgische Volldistanz), ironman-5150-erkner.
- **Korrekturen Bestand:** ironman-703-duisburg-2027 (15.08.→**29.08.**, confirmed, Strecke Regattabahn), erkner-2027 confirmed, challenge-sandefjord (Rad 85 km), mogán (1.462 Hm), cesenatico/salou/samorín/almere/turku elevation; desafio-donana-2026 **04.→17.10.** (FETRI, XVI. Ausgabe), vuelta-ibiza distanceKm 300→164, cyclotour-du-leman Gran Fondo→RTF, istria300 302 km/5.300 Hm, uec-varese 2.120 Hm, letape-czech-flat 04.→03.10.; + ~20 weitere Beschreibungs-/Bild-/URL-Fixes.
- **5 Removals:** muerzer-oberland-duathlon-2026 (ÖTRV „ABGESAGT"), granfondo-pag-2026 (Phantom), bergzeitfahren-schmelz-lollar-2026 + rodltal-bergkaiser-2026 (abgesagt) → BLACKLIST + CLAUDE.md. IRONMAN 70.3 Knokke-Heist „Discontinued" + 2027-Pausen dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1547 pages**, 0 errors. Sitemap 508 URLs (nur indexierbar), 21 Jahres-Landingpages 2027.
- **Risiko-Hinweis:** +306 Seiten auf einen Schlag bei laufendem Scaled-Content-Throttle. Qualitäts-Gate per Skript geprüft (≥4 Sätze, ≥350 Zeichen, Ähnlichkeit zu 2026 ≤0,75). Search-Console-Indexierung beobachten.

---

## Session 2026-09-23 — 14 neue 2027-Ausgaben + T100-Kategorie + 18 Enrichment + 1 Removal

Ausgewogener Wartungslauf, **Enrichment-first + kontrolliertes 2027-Wachstum** (Anti-Flut: 14 Neuanlagen, Limit 15 eingehalten). 5 Research-Agents parallel gegen **offizielle** Quellen. User-Input: Challenge-Family-Discovery + „100"-Format.

- **Neue Kategorie `T100`** (`src/lib/types.ts`), `distanceKm: 100`. 6 Events getaggt (Cesenatico, Gdańsk, Mogán, Salou, The Championship, Walchsee). Zod/Filter/Landing/JSON-LD ziehen automatisch mit.
- **14 neue 2027-Ausgaben** (offiziell gegengeprüft): IRONMAN (6): ironman-70-3-zell-am-see (29.08.), ironman-703-jonkoping (11.07.), ironman-703-nice + ironman-france-nice (12.09.), ironman-703-duisburg (confirmed:false), ironman-703-erkner (confirmed:false). Challenge (8): walchsee/Kaiserwinkl (27.06., T100), challenge-salou (09.05., T100), challenge-cesenatico (16.05., T100), challenge-gdansk (20.06., T100), challenge-turku (25.07.), challenge-sandefjord (confirmed:false), challenge-mogan (17.04., T100), challenge-the-championship-samorin (23.05., T100).
- **18 Bestands-Events veredelt/korrigiert** (soonest-first): Cycling 9 (jurmala 62→30, king-of-the-lake, elektrenu, granfondo-serra-dossa, letape-czech-flat, pyramidenkogelhero, ourem-fatima, zadar, portimao) + Tri/Duathlon 9 (grafschafter-crossduathlon, ikb-baggersee, sandman-newborough, bm-crossduathlon-deining, guestrow-cross, ocean-lava-kotor, kraichgauman, ruesselcross, lorsbach).
- **1 Removal:** granfondo-alpes-dazur-2026 (offiziell abgesagt) → BLACKLIST + CLAUDE.md.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1230 pages**, 0 errors. Sitemap 190 URLs. thin upcoming 13→0.

---

> Ältere Session-Summaries (2026-09-17 und früher) in `progress-archive.md`.
