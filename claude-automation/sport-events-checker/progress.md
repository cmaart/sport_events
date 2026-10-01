# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **378 Events** (10-01: +31 neu). upcoming thin = 0. Nächste Läufe: fehlende `imageUrl` (158) / `elevationGainM` (224) nachziehen, BACKLOG-re-checks (Termine, die erst Okt–Dez 2026 erscheinen), `registrationUrl` nachtragen sobald Anmeldungen öffnen. **cycloworld-2027-Kalender (JS-gerendert) konnte per WebFetch nicht gescannt werden — ~290 „Date not confirmed"-Einträge weiter offen; nächster Lauf browser-/API-fähigen Fetch nutzen.**

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) ergänzt für das neue 100er-Format (2 km Schwimmen / 80 km Rad / 18 km Laufen = 100 km), auf das Challenge Family (in Kooperation mit der PTO) mehrere Rennen umstellt. `distanceKm: 100` statt 113; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`. Zod/Filter/Landingpages übernehmen automatisch. Aktuell 6 T100-Events: Cesenatico, Gdańsk, Mogán Gran Canaria, Salou, The Championship (Šamorín), Kaiserwinkl-Walchsee.

### Kennzahlen (Stand: 2026-10-01)
- Events gesamt: **1508** | Saison 2026: 1130 (upcoming ≥ heute **63** | past/noindex **1067**) | Saison 2027: **378** (confirmed 340 | confirmed:false 38)
- Letzter Lauf: 2026-10-01 — **31 neue 2027-Ausgaben** (12 Tri + 19 Rad; 17 confirmed, 14 confirmed:false), **33 Bestands-Events veredelt/korrigiert** (11 dünne entschärft + 22 Rad-Felder/URLs), **0 Removals** (keine neuen offiziellen Absagen gefunden). 2 Dubletten-Löschungen (marmotte-granfondo-valais-2026, dolomitenradrundfahrt-lienz-2026) vom Permission-Classifier blockiert → für User offen.
- Build zuletzt grün: **1581 pages**, 0 errors; Sitemap **514 URLs** (nur indexierbar), 23 Landingpages `/…/2027`; past/noindex geprüft (3-peaks-yorkshire-2026 ausgeschlossen, neue 2027 enthalten)
- Datenqualität (upcoming, Stand 10-01): thin **0**; missing distanceKm **12**; missing elevationGainM **224**; missing imageUrl **158** (Anstieg bewusst: unbelegte/Aggregator-Werte entfernt statt geraten)
- Qualitäts-Check 10-01: alle 31 neuen Dateien 6–9 Sätze, ≥640 Zeichen, Ähnlichkeit zum 2026-Sibling ≤0,58 (letape-romania umgeschrieben von 0,75→0,47).

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

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ ironman-703-duisburg-2027 (kavval-Aggregatorbild entfernt, 10-01). ✅ krk-granfondo-2027 angelegt (confirmed:false 24.04.2027, Seite bestätigt 2027-Ausgabe). ✅ neuseen-classics 212→100 km (Marathon 2027 nicht im Programm). ✅ 24h-grieskirchen websiteUrl gefixt.
- **⚠ OFFEN (Permission-Classifier blockiert Löschen): Dubletten 2026 (past):** marmotte-granfondo-valais-2026 = tour-des-stations-verbier-2026; dolomitenradrundfahrt-lienz-2026 = dolomitenradrundfahrt-2026. Löschen der Datei ohne 2027-Sibling wurde zweimal als „Irreversible Local Destruction" verweigert → **User muss manuell löschen** (beide past/noindex, geringe Prio).
- **granfondo-riccione:** Homepage zeigt 10-01 weiter nur 2025/2026-Content, kein 2027-Datum — NICHT anlegen, re-check. **swedeman-xtri-are:** kein 2027 auf swextri.com-Homepage — re-check.
- **NEU zu prüfen:** DTU listet „Spreewald Triathlon" Briesensee 29.05.2027 — Repo hat spreewald-triathlon-vetschau-2027 gleiches Datum (evtl. 2 Events oder falscher Ort). nirvana-gran-fondo-antalya-2026 Datum 15.11. evtl. falsch (~07.–09.11.). tour-transalp-2027 ist confirmed:false, aber offizielles Fenster 20.–26.06.2027 ist publiziert (+ Rebrand „MyTransalp") → ggf. auf confirmed:true heben, sobald Orte stehen.
- **Alt-Reste (2026 past/noindex, niedrigste Prio, bislang übersprungen):** GranFondo→RTF (chiemgau-bike-trophy-ruhpolding, duisburg-steel, cycling-paradise-sylt); falsche websiteUrl (loser-bergzeitfahren-altaussee, gaisberg-vertical-salzburg); kaputte imageUrl (top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon); Distanzfehler (hansbergland-cross-triathlon, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld).

### BACKLOG (offene Aufgaben — Stand 10-01)
- **✅ ERLEDIGT 10-01 (31 neue 2027-Dateien):** ironman-703-belgrade; braunauer-sprinttriathlon, aloha-tri-linz/traun/mondseeland, thiersee-triathlon, vulkanlandaquathlon-riegersburg (ÖTRV); slateman, lakesman, castle-race-chantilly/belvoir/hever (GB/FR); uci-istria-granfondo, uci-gran-fondo-cyprus, gfny-nyborg, eurobec-granfondo, race-across-austria-east-west; confirmed:false: krk, tour-transalp, letape-slovenia-kranj, letape-romania-bucharest, ardechoise, quebrantahuesos, marmotte-granfondo-alpes, schleck-gran-fondo-luxembourg, ariegeoise, lbl-challenge, muensterland-giro-jedermann, carinthia200, brezel-race-region-stuttgart, gravelei-suedsteiermark.
- **NEU re-check (offizielles Datum/Fortführung noch offen):** tour-d-energie Göttingen (Seite 503, finishers „Ende Apr 2027"); RACA-Gravel 850/350 2026 wirken durch „East to West" ersetzt (keine 2027-Gravel-Variante — nicht rollen); Brockenheroes (kein offizielles 2027, nicht anlegen), Velowino Weinheim (Schloss-Umbau, Fortführung unklar); 5150 Kraichgau 2027 (23.05., gleicher Tag wie 70.3 — klären ob separat führen). Aggregator-only (nicht offiziell): ATW Grafman, Obernai-Benfeld, Infinitri Peñíscola, Ayia Napa, AT-Wintertriathlons Jänner 2027.
- **Weiterhin offen (bestehende Liste, Stand 09-24):**
- **IRONMAN 2027 ohne Datum (race page „TBD"/zeigt Okt-2026):** 70.3 Gdynia, Krakau, Posen, Warschau, Hradec Králové, Belgrad, 5150 Cervia · Cascais (70.3 + Full), Málaga, Poreč, Versailles, Costa Navarino · **Barcelona-Calella** (triatlonchannel meldet 03.10.2027, Anmeldung ab 08.10.2026 → offiziell re-check). Tipp: ironman.com via `https://r.jina.ai/https://www.ironman.com/races/<slug>` lesbar. IRONMAN 5150 Kraichgau 23.05.2027 offiziell, noch keine Datei.
- **Challenge Okt-Rennen 2027:** Peguera, Sanremo, Vieux-Boucau, Forte Village, Barcelona — re-check Herbst/Winter. challenge-sandefjord-2027 bleibt confirmed:false („June 2027").
- **confirmed:false 2027 (24) — exaktes Datum nachtragen sobald offiziell:** u. a. king-of-the-lake, styroica, woerthersee-gravel-race, paris-roubaix-challenge, hansbergland, swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, berliner-volkstriathlon, lipperlandtriathlon-lage, arheilger-muehlchen, guenzburg-cross, stadttriathlon-forchheim, zytturm-zug, aarau, basel, weiden, dublin-city, kocevje, xterra-croatia/scanno/longemer/weston-park, challenge-sandefjord.
- **Rad EU ohne 2027-Datum (Fortführung signalisiert → ggf. confirmed:false):** L'Étape Slovenia/Romania, Ardéchoise, Ariégeoise, La Pyrénéenne (2027 Saint-Lary-Soulan), Portes du Soleil, The River Gravel („Sept 2027"), Tour of Pembrokeshire. **Ohne Info:** Etape du Tour (nach Tour-Präsentation Okt), Tour Transalp (Orte 2027), Marmotte Alpes, Quebrantahuesos, LBL Challenge, Il Lombardia, Schleck, Majestics, Helsinki GF, Istria (UCI 03.04.2027, Seite DNS-tot), Cyclosportive du Valais (Distanzen widersprüchlich).
- **Rad AT/DE ohne 2027-Datum:** münsterland-giro, velothon, tour d'energie, tour-de-kärnten, carinthia200, grand-escape-innsbruck, allgäu-gravel, tour-de-herz, rosenheimer (Rad+Gravel), löwensteiner-berge, saarschleifen, sauerlandride, gravelei, nockbike, brezel-race, lidl-deutschland-tour, RACA 850/350 (+ neu „RACA East to West" 24.–28.08.2027), brockenheroes (25.09.2027 nur Drittseite), velowino, Salt&Lake Trail. ~290 cycloworld-„Date not confirmed"-Einträge ohne Repo-Sibling noch nicht einzeln geprüft.
- **Tri AT ohne 2027-Datum:** suedkaerntner, aloha-tri (linz/mondseeland; alohatri.at 502), amstetten, backwaterman, braunauer, ferlach, ikb-baggersee, jannersee, kraigersee, luschnouar, mistelbacher, pöttschinger, riverthlon, schwarzataler, knittelfeld, wels, steiraman, thiersee, tri-cross-völkermarkt, langau, ultra-bad-radkersburg, unterberg, wolfgangsee-strobl, xterra-austria, ladies-triathlon (502), keltenman (403). ÖTRV-Kalender 2027 enthält bisher nur Apfelland.
- **Tri DE/EU ohne 2027-Datum:** datagroup-nürnberg, herzoman (40. Auflage), müritz, ratingen (PDF), taunusstein, bocholt, uelzen, hamm, viernheim, leipzig, lauingen, drachentriathlon-furth, norseman, openlakes, timisoara, la-tour-genève, powerman-zofingen, castle-race-hever, T100 London/Pamplona/French Riviera, güstrow-trinale (Ort unklar), triahatz, karlsfeld. **46 Seiten nicht abrufbar** (JS/403) — re-check (Liste: schluchsee, tölzer, rheinstetten, licher, borken, dortmund, aischgrund, aquariusman, holzland, bad-sobernheim, wuppertal, rheinhessen, römermann, amberg, alpe-dhuez, bayman, castilla-leon, doñana, greek-hero, olympusman, wroclaw, la-brévine, bern …).
- **Neue Kandidaten (keine 2026-Datei, offiziell prüfen):** GFNY Nyborg (08.08.2027), UCI GF Cyprus (26.03.2027), Viana/Eurobec Granfondo (PT), Wintertriathlon Jänner 2027 (fun-sports.at), k226: Slateman, Lakesman, Grafman, Roadford Lake, Castle Race Chantilly/Belvoir, OpenLakes Champagne, Obernai-Benfeld, Setúbal, Portocolom, Infinitri Peñíscola, Ayia Napa.
- **2027-Enrichment:** `registrationUrl` nachtragen, sobald Anmeldung öffnet (viele 2027-Kopien bewusst ohne alte 2026-Anmelde-URL).
- **Elevation offiziell nicht publiziert (nicht schätzen):** Stadt-Tris (frankfurt-city, bremen, nürnberg), rad-am-salzburgring, viele IRONMAN-Course-Seiten.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen, siehe routine-prompt „Recherche-Umfang“)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-01 (10 datierte 2027: braunauer, aloha linz/traun/mondseeland, thiersee, vulkanland + bereits im Repo) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-01 (6 datierte 2027; Spreewald-Briesensee-Flag) |
| ironman.com (via r.jina.ai-Reader, direkt 403) | 2026-10-01 (Belgrade 2027 neu; viele Herbst-70.3 noch TBD) |
| challengefamily.com + Race-Sites | 2026-10-01 (Herbst-2027 noch nicht im Kalender; sandefjord bleibt cf:false) |
| k226.com/events/events.aspx | 2026-10-01 (GB Castle/Slateman/Lakesman bestätigt) |
| cycloworld.cc/de/kalender-de | 2026-10-01 ⚠ **2027-Kalender JS-gerendert, per WebFetch NICHT extrahierbar — ~290 Einträge ungescannt; nächster Lauf Browser/API** |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert `?page=N`) | 2026-10-01 (alle 9 Rad-Seiten/169 Einträge gescannt; ⚠ 2027-Spalte ist algorithmische Prognose = NICHT confirmed) |
| UCI Gran Fondo World Series | 2026-10-01 (Zentral-Kalender noch bis Ende 2026; 2027-Quali-Termine via Einzelseiten: Cyprus, Istria, Schleck, Eurobec) |
| L'Étape-Serie, GFNY, hauteroute, raceacrossaustria, castleraceseries, protime.si | 2026-10-01 |
| Veranstalterseiten aller 2026-Events (automatischer 2027-/Absage-Scan) | 2026-10-01 |
> Nicht erreichbar 10-01: tour-d-energie.de (503), carinthia200.cc/grand-escape.cc (NXDOMAIN; korrekt .com), tribraunau.at (503), thiersee-triathlon.at (nur 2026), krkgranfondo.com (403), challenge-peguera (422). cycloworld-2027 JS-gerendert (s.o.).

---

## Session 2026-10-01 — 31 neue 2027-Ausgaben + 33 Enrichment/Korrekturen + SEO-Check (0 Removals)

Wartungslauf eine Woche nach der 09-24-Großwelle. 6 parallele Research/Enrichment-Agents (Thin-Descriptions, 2027-Rad-Felder, ÖTRV/DTU/k226-Tri, IRONMAN/Challenge, Rad AT/DE cycloworld+hdsports, Rad EU/UCI), danach 2 Builder-Agents für die verifizierten Neuanlagen. Alle Termine gegen offizielle Veranstalter-/Verbandsseiten geprüft; Aggregatoren nur Discovery; kein prommer.net; unbelegte Felder (v. a. elevationGainM) weggelassen statt geraten.

- **31 neue 2027-Dateien** (17 confirmed, 14 confirmed:false; alle 6–9 Sätze, ≥640 Zeichen, Sibling-Ähnlichkeit ≤0,58):
  - **Triathlon (12):** ironman-703-belgrade (12.09.), braunauer-sprinttriathlon (23.05.), aloha-tri-linz (03.07.)/-traun (31.07.)/-mondseeland (05.09.), thiersee-triathlon (15.08.), vulkanlandaquathlon-riegersburg (29.08.), castle-race-hever (25.–26.09.)/-chantilly (12.–13.06.)/-belvoir (17.–18.07.), slateman (13.06.), lakesman (20.06.).
  - **Cycling confirmed (5):** uci-istria-granfondo (03.04.), uci-gran-fondo-cyprus (26.–28.03.), gfny-nyborg (08.08.), eurobec-granfondo (11.04.), race-across-austria-east-west (24.–28.08., RACA 1000/500, distinkt von Race AROUND Austria).
  - **Cycling confirmed:false (14):** krk, tour-transalp (off. Fenster 20.–26.06. + Rebrand „MyTransalp"), letape-slovenia-kranj, letape-romania-bucharest, ardechoise, quebrantahuesos, marmotte-granfondo-alpes, schleck-gran-fondo-luxembourg, ariegeoise, lbl-challenge, muensterland-giro-jedermann, carinthia200, brezel-race-region-stuttgart, gravelei-suedsteiermark.
- **33 Bestands-Events veredelt/korrigiert:** 11 dünne Seiten (<4 Sätze) auf 6–7 faktenreiche Sätze gehoben + 4 kaputte IRONMAN-websiteUrls gefixt (im703-cascais/-greece/-croatia/-cascais-full) + unbelegte Elevation bei barcelona-calella/portugal-cascais/muensterland entfernt + Distanzen korrigiert (alentejo 121, muensterland-giro 125, la-nucia 132/2275 verifiziert). 22 Rad-2027-Events gegen offizielle Seite geprüft: neuseen-classics 212→100 km (212er nicht im 2027-Programm), 24h-grieskirchen URL-Fix; Rest ohne belegbare Elevation bewusst ohne Wert. ironman-703-duisburg-2027 kavval-Bild entfernt.
- **0 Removals:** Agents fanden keine neuen offiziellen Absagen. (Brockenheroes/Velowino/Velothon/VeloCity: 2027 nicht bestätigt → BACKLOG, nicht Blacklist.) 2 Dubletten-Löschungen (marmotte-granfondo-valais-2026, dolomitenradrundfahrt-lienz-2026) vom Permission-Classifier blockiert → User-Aufgabe.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1581 pages**, 0 errors. Sitemap **514 URLs** (nur indexierbar), 23 Jahres-Landingpages 2027; neue 2027 enthalten, past/noindex ausgeschlossen (Stichprobe 3-peaks-yorkshire-2026), confirmed:false-Seiten indexierbar + „Datum noch offen". Keine Code-Änderung nötig.
- **Quellen-Lücke:** cycloworld-2027-Kalender JS-gerendert, per WebFetch nicht scannbar (~290 Einträge offen) → nächster Lauf browserfähiger Fetch. hdsports vollständig gescannt, aber 2027-Spalte = algorithmische Prognose (nicht als confirmed übernehmen).

---

## Session 2026-09-24 — Großwelle 2027: 306 neu (erster Lauf ohne Mengen-Limit) + ~35 Enrichment + 5 Removals

Erster Lauf nach Aufhebung des 15er-Limits (User-Wunsch) und mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel (ÖTRV, DTU+k226, IRONMAN/Challenge, cycloworld AT/DE, Rad EU/UCI, Enrichment), alle Termine gegen offizielle Veranstalter-/Serienseiten; Aggregatoren nur Discovery.

- **306 neue 2027-Dateien** (282 confirmed, 24 confirmed:false; fast alle als Folgeausgabe mit gleichem Slug-Stamm, Beschreibung neu geschrieben mit 2027-Datum/Auflage/Neuerungen; alte 2026-registrationUrls bewusst entfernt; nicht verifizierbare Bilder entfernt):
  - Triathlon AT 20 (ÖTRV) · Triathlon DE/EU 134 (DTU/k226, inkl. neu Munich Triathlon + ChtriMan Gravelines) · IRONMAN/Challenge 29 · Rad AT/DE 76 (cycloworld, inkl. SURM) · Rad EU 47 (UCI/Classics/L'Étape/GFNY/Sella Ronda).
  - Neue Stämme: ironman-les-sables-dolonne (70.3→Volldistanz), ironman-knokke-heist (erste belgische Volldistanz), ironman-5150-erkner.
- **Korrekturen Bestand:** ironman-703-duisburg-2027 (15.08.→**29.08.**, confirmed, Strecke Regattabahn), erkner-2027 confirmed (unbelegte Hm + falsche WM-Quali raus), challenge-sandefjord (Rad 85 km), mogán (1.462 Hm statt Lauf-Hm), cesenatico/salou/samorín/almere/turku elevation; desafio-donana-2026 **04.→17.10.** (FETRI, XVI. Ausgabe), vuelta-ibiza distanceKm 300→164, cyclotour-du-leman Gran Fondo→RTF, istria300 302 km/5.300 Hm, uec-varese 2.120 Hm, letape-czech-flat 04.→03.10.; + ~20 weitere Beschreibungs-/Bild-/URL-Fixes (Enrichment-Agent 25 Dateien).
- **5 Removals:** muerzer-oberland-duathlon-2026 (ÖTRV „ABGESAGT"), granfondo-pag-2026 (Phantom, 7. Ausgabe erst 15.05.2027), bergzeitfahren-schmelz-lollar-2026 + rodltal-bergkaiser-2026 (abgesagt) → BLACKLIST + CLAUDE.md. IRONMAN 70.3 Knokke-Heist „Discontinued" + 2027-Pausen (Fichkona, Montafon M3, Bayrisch Lettn, RügenChallenge) dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1547 pages**, 0 errors. Sitemap 508 URLs (nur indexierbar), 21 Jahres-Landingpages 2027; entfernte + past URLs nicht enthalten; noindex stichprobenartig geprüft. Keine Code-Änderung.
- **Risiko-Hinweis:** +306 Seiten auf einen Schlag bei laufendem Scaled-Content-Throttle. Qualitäts-Gate per Skript geprüft (≥4 Sätze, ≥350 Zeichen, Ähnlichkeit zu 2026 ≤0,75; ein Ausreißer — Scharmützelsee — umgeschrieben). Search-Console-Indexierung der 2027-Seiten in den nächsten Wochen beobachten.

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

> Ältere Session-Summaries (2026-09-17 und früher) in `progress-archive.md`.
