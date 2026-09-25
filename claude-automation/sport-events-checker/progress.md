# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **349 Events** (09-25: +3 Folgeausgaben riccione/swedeman/krk). Nächste Läufe: fehlende `imageUrl` (140) / `elevationGainM` (215) nachziehen, BACKLOG-re-checks (Termine, die erst Okt–Dez 2026 erscheinen), `registrationUrl` nachtragen sobald Anmeldungen öffnen.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) ergänzt für das neue 100er-Format (2 km Schwimmen / 80 km Rad / 18 km Laufen = 100 km), auf das Challenge Family (in Kooperation mit der PTO) mehrere Rennen umstellt. `distanceKm: 100` statt 113; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`. Zod/Filter/Landingpages übernehmen automatisch. Aktuell 6 T100-Events: Cesenatico, Gdańsk, Mogán Gran Canaria, Salou, The Championship (Šamorín), Kaiserwinkl-Walchsee.

### Kennzahlen (Stand: 2026-09-25)
- Events gesamt: **1477** | Saison 2026: 1128 (upcoming ≥ heute **88** | past/noindex **1040**) | Saison 2027: **349** (confirmed 324 | confirmed:false 25)
- Letzter Lauf: 2026-09-25 — Delta-Lauf: **3 neue 2027-Ausgaben** (riccione 21.03., swedeman-xtri 10.07., krk confirmed:false), **7 Enrichment/Korrekturen** (u. a. Antalya Datum 15.→08.11. + Loutraki 1.360 Hm), **2 Dubletten entfernt**, **3 RTF-Fixes**
- Build zuletzt grün: **1549 pages**, 0 errors; Sitemap **512 URLs** (nur indexierbar), Landingpages `/…/2027`; keine past/noindex-/entfernten URLs
- Datenqualität (upcoming, Stand 09-25): thin **8** (Rest = 2026-Events dieses Wochenendes, ~0 Rest-Indexzeit); missing distanceKm **12**; missing elevationGainM **215**; missing imageUrl **140** (ironman.com-Bilder nicht hotlinkbar)
- Qualitäts-Check 09-25: 3 neue Dateien ≥5 Sätze, ≥600 Zeichen, Ähnlichkeit zur 2026-Beschreibung ≤0,52.

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
- ✅ letape-czech-republic-flat-2026 → offiziell 03.10.2026, korrigiert (09-24).
- ✅ **Dubletten 2026 entfernt (09-25):** marmotte-granfondo-valais-2026 + dolomitenradrundfahrt-lienz-2026 (jeweils die Datei ohne 2027-Sibling).
- ✅ **Gran Fondo → RTF gefixt (09-25):** chiemgau-bike-trophy-ruhpolding-2026, duisburg-steel-2026, cycling-paradise-sylt-2026.
- ✅ **granfondo-riccione-2027 angelegt (09-25):** 21.03.2027 offiziell („21 MARZO 2027").
- ✅ **swedeman-xtri-are-2027 angelegt (09-25):** 10.07.2027 (XTRI World Tour offiziell; k226-„03.07." falsch). **krk-granfondo-2027 angelegt confirmed:false** — offizielle Seite widersprüchlich (Header 17.04. vs. Body „Saturday 24. April 2027"), Bestguess 24.04.; exaktes Datum bei nächster Prüfung bestätigen.
- **Falsche websiteUrl (offen):** loser-bergzeitfahren-altaussee-2026, gaisberg-vertical-salzburg-2026.
- **Kaputte imageUrl in 2026-Dateien** (in 2027-Kopien entfernt): top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon; aggregator-Bild ironman-703-duisburg-2027 (kavval) ersetzen/entfernen.
- **2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).

### BACKLOG (offene Aufgaben — Stand 09-24)
- **IRONMAN 2027 ohne Datum (race page „TBD"/zeigt Okt-2026):** 70.3 Gdynia, Krakau, Posen, Warschau, Hradec Králové, Belgrad, 5150 Cervia · Cascais (70.3 + Full), Málaga, Poreč, Versailles, Costa Navarino · **Barcelona-Calella** (triatlonchannel meldet 03.10.2027, Anmeldung ab 08.10.2026 → offiziell re-check). Tipp: ironman.com via `https://r.jina.ai/https://www.ironman.com/races/<slug>` lesbar. IRONMAN 5150 Kraichgau 23.05.2027 offiziell, noch keine Datei.
- **Challenge Okt-Rennen 2027:** Peguera, Sanremo, Vieux-Boucau, Forte Village, Barcelona — re-check Herbst/Winter. challenge-sandefjord-2027 bleibt confirmed:false („June 2027").
- **confirmed:false 2027 (24) — exaktes Datum nachtragen sobald offiziell:** u. a. king-of-the-lake, styroica, woerthersee-gravel-race, paris-roubaix-challenge, hansbergland, swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, berliner-volkstriathlon, lipperlandtriathlon-lage, arheilger-muehlchen, guenzburg-cross, stadttriathlon-forchheim, zytturm-zug, aarau, basel, weiden, dublin-city, kocevje, xterra-croatia/scanno/longemer/weston-park, challenge-sandefjord.
- **Rad EU ohne 2027-Datum (Fortführung signalisiert → ggf. confirmed:false):** L'Étape Slovenia/Romania, Ardéchoise, Ariégeoise, La Pyrénéenne (2027 Saint-Lary-Soulan), Portes du Soleil, The River Gravel („Sept 2027"), Tour of Pembrokeshire. **Ohne Info:** Etape du Tour (nach Tour-Präsentation Okt), Tour Transalp (Orte 2027), Marmotte Alpes, Quebrantahuesos, LBL Challenge, Il Lombardia, Schleck, Majestics, Helsinki GF, Istria (UCI 03.04.2027, Seite DNS-tot), Cyclosportive du Valais (Distanzen widersprüchlich).
- **Rad AT/DE ohne 2027-Datum:** neusiedlersee, münsterland-giro, velothon, tour d'energie, tour-de-kärnten, carinthia200, grand-escape-innsbruck, allgäu-gravel, tour-de-herz, rosenheimer (Rad+Gravel), löwensteiner-berge, saarschleifen, sauerlandride, gravelei, nockbike, brezel-race, lidl-deutschland-tour, RACA 850/350 (+ neu „RACA East to West" 24.–28.08.2027), brockenheroes (25.09.2027 nur Drittseite), velowino, Salt&Lake Trail. ~290 cycloworld-„Date not confirmed"-Einträge ohne Repo-Sibling noch nicht einzeln geprüft.
- **Tri AT ohne 2027-Datum:** suedkaerntner, aloha-tri (linz/mondseeland; alohatri.at 502), amstetten, backwaterman, braunauer, ferlach, ikb-baggersee, jannersee, kraigersee, luschnouar, mistelbacher, pöttschinger, riverthlon, schwarzataler, knittelfeld, wels, steiraman, thiersee, tri-cross-völkermarkt, langau, ultra-bad-radkersburg, unterberg, wolfgangsee-strobl, xterra-austria, ladies-triathlon (502), keltenman (403). ÖTRV-Kalender 2027 enthält bisher nur Apfelland.
- **Tri DE/EU ohne 2027-Datum:** datagroup-nürnberg, herzoman (40. Auflage), müritz, ratingen (PDF), taunusstein, bocholt, uelzen, hamm, viernheim, leipzig, lauingen, drachentriathlon-furth, norseman, openlakes, timisoara, la-tour-genève, powerman-zofingen, castle-race-hever, T100 London/Pamplona/French Riviera, güstrow-trinale (Ort unklar), triahatz, karlsfeld. **46 Seiten nicht abrufbar** (JS/403) — re-check (Liste: schluchsee, tölzer, rheinstetten, licher, borken, dortmund, aischgrund, aquariusman, holzland, bad-sobernheim, wuppertal, rheinhessen, römermann, amberg, alpe-dhuez, bayman, castilla-leon, doñana, greek-hero, olympusman, wroclaw, la-brévine, bern …).
- **Neue Kandidaten (keine 2026-Datei, offiziell prüfen):** GFNY Nyborg (08.08.2027), UCI GF Cyprus (26.03.2027), Viana/Eurobec Granfondo (PT), Wintertriathlon Jänner 2027 (fun-sports.at), k226: Slateman, Lakesman, Grafman, Roadford Lake, Castle Race Chantilly/Belvoir, OpenLakes Champagne, Obernai-Benfeld, Setúbal, Portocolom, Infinitri Peñíscola, Ayia Napa.
- **2027-Enrichment:** `registrationUrl` nachtragen, sobald Anmeldung öffnet (viele 2027-Kopien bewusst ohne alte 2026-Anmelde-URL).
- **Elevation offiziell nicht publiziert (nicht schätzen):** Stadt-Tris (frankfurt-city, bremen, nürnberg), rad-am-salzburgring, viele IRONMAN-Course-Seiten.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen, siehe routine-prompt „Recherche-Umfang“)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; Monatsansicht `?month=M&year=YYYY` ohne Slash) | 2026-09-25 (Delta-Scan: keine neuen Absagen; einzig „ABGESAGT Mürzer Oberland Duathlon" = bereits BLACKLIST) |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-25 (Delta-Scan: keine Absagen) |
| ironman.com | 2026-09-25 **nicht erreichbar** (Cloudflare 403, WebFetch/WebSearch geblockt); Fallback offizielle Partner-/Tourismusseiten (plavalaguna.com, visitcascais.com) |
| challengefamily.com + Race-Sites | 2026-09-25 (sandefjord/roth-Race-Sites geprüft) |
| k226.com/events/events.aspx | 2026-09-24 (Delta-Lauf: nicht voll re-gescannt) |
| cycloworld.cc/de/kalender-de | 2026-09-24 (Delta-Lauf: nicht voll re-gescannt) |
| UCI Gran Fondo World Series | 2026-09-25 (Loutraki 113,9/1.360 + Antalya 6.–8.11. Fakten korrigiert) |
| L'Étape-Serie, GFNY, xterraplanet, birken.no, vatternrundan, hauteroute | 2026-09-25 (GFNY Bremen/Lourdes, XTRI Swedeman, hauteroute geprüft) |
| Veranstalterseiten (Delta-Scan 2027-Termine/Felder) | 2026-09-25 (riccione, krkgranfondo, swextri, bodensee-radmarathon, erzgebirgstour, seaside-ride, inveloveritas u. a.) |
> ironman.com am 09-25 durchgängig geblockt (Cloudflare 403) — für Kurs-Details/Höhenmeter auf offizielle Partner-/Tourismusseiten ausweichen. Übrige „nicht erreichbar 09-24"-Liste (istriadiscovery.hr, lacharlygaul.lu, themajestics.ch, topdolomites.it, granfondoamsterdam.nl, alohatri.at, ladies-triathlon.at, keltenman.at, ironmanbelgrade.com, desafiodonana.com, bayman.fr + 46 Tri-Seiten) 09-25 nicht erneut versucht.

---

## Session 2026-09-25 — Delta-Lauf: 3 neue 2027-Ausgaben + 7 Enrichment/Korrekturen + 2 Dubletten + 3 RTF-Fixes

Konsolidierungs-/Delta-Lauf einen Tag nach der 306er-Großwelle (09-24). Bewusst **Enrichment & Korrekturen statt Mengenwachstum** wegen anhaltendem Scaled-Content-Throttle — nur offiziell verifizierte Neuanlagen. 3 Research-Agents parallel: (1) Rad-2027-Höhenmeter/Distanzen offiziell, (2) Quellen-Delta-Scan (Absagen + confirmed:false-Recheck + neue Kandidaten), (3) Tri/GF-Beschreibungs-Enrichment. Aggregatoren nur Discovery, kein prommer.net; nicht offiziell belegte Felder weggelassen statt geraten.

- **3 neue 2027-Ausgaben** (alle Folgeausgaben bestehender Events, Slug-Stamm = 2026-Sibling, Beschreibung neu ≥5 Sätze, Ähnlichkeit zu 2026 ≤0,52):
  - granfondo-riccione-2027 (**21.03.2027** offiziell „21 MARZO 2027", 24. Ausgabe, 106/1.800), swedeman-xtri-are-2027 (**10.07.2027** XTRI World Tour, 252/4.077), krk-granfondo-2027 (**confirmed:false**, 24.04.2027 Bestguess — offizielle Seite widersprüchlich 17. vs. 24. April, 82 km).
- **Enrichment/Korrekturen (7 Dateien, offiziell belegt):**
  - **Datenfehler:** nirvana-gran-fondo-antalya-2026 **Datum 15.11.→08.11.** (UCI-Kalender: Rennwochenende 6.–8.11., GF So 8.11.), Höhe 517→500; gran-fondo-greece-loutraki-2026 **112→114 km / 889→1.360 Hm** (UCI 2026-Seite) + Beschreibung.
  - **Rad-2027-Felder (nur offiziell belegte):** bodensee-radmarathon (Hm 2.376), erzgebirgstour-crottendorf (90/2.200), gfny-lourdes-tourmalet (157/4.064), seaside-ride-gravel-rerik (Hm 640), in-velo-veritas-korneuburg (210 km).
  - ironman-portugal-cascais-2026 Beschreibung präzisiert (Sintra-Cascais-Naturpark/Estoril/Belém, Quelle: visitcascais.com).
- **2 Dubletten entfernt** (gleiches Event/Datum/Ort, Datei ohne 2027-Sibling): marmotte-granfondo-valais-2026 (= tour-des-stations-verbier-2026), dolomitenradrundfahrt-lienz-2026 (= dolomitenradrundfahrt-2026).
- **3 Kategoriefixes Gran Fondo→RTF** (nicht-kompetitiv, spiegelt verifizierte 2027-Siblings): chiemgau-bike-trophy-ruhpolding-2026, duisburg-steel-2026, cycling-paradise-sylt-2026.
- **Quellen-Delta-Scan:** keine neuen Absagen (ÖTRV/DTU). confirmed:false-Recheck: king-of-the-lake (18.09.2027 „voraussichtlich" → bleibt confirmed:false), paris-roubaix-challenge (nur Save-the-date-Anmeldung → bleibt), woerthersee-gravel (18.04.2027 „subject to final confirmation" → bleibt confirmed:false), challenge-sandefjord (kein konkreter 2027-Termin, NICHT abgesagt → bleibt).
- **SEO / Sitemap / noindex:** `npm run build` grün, **1549 pages**, 0 errors. Sitemap **512 URLs** (nur indexierbar), 3 neue `-2027` indexierbar + enthalten; past/noindex stichprobenartig geprüft (dolomitenradrundfahrt-2026 noindex + nicht in Sitemap; tour-des-stations-verbier-2027 index + in Sitemap). Keine Code-Änderung nötig.
- **Datenqualität (upcoming):** thin 11→**8** (Rest = 2026-Events dieses Wochenendes, ~0 Rest-Indexzeit → niedrigste Prio); missing distanceKm 15→12; missing elevationGainM 218→215.

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
