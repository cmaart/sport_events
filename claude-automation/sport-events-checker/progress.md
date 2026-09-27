# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **368 Events** (09-27: +22 neu). Nächste Läufe: fehlende `imageUrl` (133) / `elevationGainM` (36) nachziehen, BACKLOG-re-checks (Termine, die erst Okt–Dez 2026 / Q1 2027 erscheinen), `registrationUrl` nachtragen sobald Anmeldungen öffnen.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) ergänzt für das neue 100er-Format (2 km Schwimmen / 80 km Rad / 18 km Laufen = 100 km), auf das Challenge Family (in Kooperation mit der PTO) mehrere Rennen umstellt. `distanceKm: 100` statt 113; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`. Zod/Filter/Landingpages übernehmen automatisch. Aktuell 6 T100-Events: Cesenatico, Gdańsk, Mogán Gran Canaria, Salou, The Championship (Šamorín), Kaiserwinkl-Walchsee.

### Kennzahlen (Stand: 2026-09-27)
- Events gesamt: **1496** | Saison 2026: 1128 (upcoming ≥ heute **77** | past/noindex **1051**) | Saison 2027: **368** (confirmed 343 | confirmed:false 25)
- Letzter Lauf: 2026-09-27 — **23 neue 2027-Ausgaben**, **~29 Bestands-Events veredelt/korrigiert**, **2 Dubletten entfernt**, 1 falsches confirmed:true→false (klopeiner-see), 1 Datumsfix (cascais 70.3 16.→**23.10.**). Backwaterman als letzte Ausgabe → BLACKLIST.
- Build zuletzt grün: **1569 pages**, 0 errors; Sitemap **518 URLs** (nur indexierbar); keine past/noindex-/entfernten URLs
- Datenqualität (upcoming, Stand 09-27): thin **19** (alle 2026, meist bald past — niedrige Prio); missing distanceKm **11**; missing elevationGainM **36**; missing imageUrl **133** (viele official Heros nur Logos/zu klein oder ironman.com nicht hotlinkbar)
- Qualitäts-Check 09-27: alle 22 neuen Dateien ≥4 Sätze (min 6), ≥350 Zeichen (min 553), Ähnlichkeit zur 2026-Beschreibung ≤0,44 (Skript: Wort-Jaccard gegen Sibling).

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
- **Backwaterman (Ottenstein, NÖ) — 28.06.2026 ist laut Veranstalter die LETZTE Ausgabe überhaupt (Gastgeber My SwimRun World Championships 2026); keine 2027-Ausgabe. Quelle: backwaterman.at. (09-27)**
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **Dubletten entfernt (09-27):** marmotte-granfondo-valais-2026 (= tour-des-stations-verbier, tourdesstations.ch) und dolomitenradrundfahrt-lienz-2026 (= dolomitenradrundfahrt, dolomitensport.at) gelöscht — jeweils die Variante ohne 2027-Sibling.
- ✅ **Gran Fondo → RTF (09-27):** chiemgau-bike-trophy-ruhpolding-2026, duisburg-steel-2026, cycling-paradise-sylt-2026 auf RTF korrigiert.
- ✅ **websiteUrl-Fix (09-27):** loser-bergzeitfahren-altaussee-2026 (→ salzkammergut-trophy.at/bergzeitfahren, hdsports-Bild entfernt), gaisberg-vertical-salzburg-2026 (→ lrv-salzburg.at).
- ✅ **Kaputte/aggregator imageUrl entfernt (09-27):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon (alle 404/403); ironman-703-duisburg-2027 (kavval).
- ✅ **granfondo-riccione-2027** angelegt (21.03.2027, offiziell); **krk-granfondo-2027** angelegt (24.04.2027, Datum geklärt vs. 17.04.); **ironman-703-cascais-2027** Datum 16.→**23.10.2027** korrigiert (offizieller IRONMAN-Portugal-Save-the-Date; Agent-Erstquelle byteseu.com war falsch) + ironman-portugal-cascais-2027 (Volldistanz, 23.10.) angelegt.
- ✅ **swim-run-swim-klopeiner-see-2027** confirmed:true→**false** korrigiert + Beschreibung entschärft (AASC-Site führt nur 2026-Kalender; „Kalender 2027 veröffentlicht" war unbelegt).
- **swedeman-xtri-are:** swedeman.se DNS-tot; 10.07 vs 03.07 weiter offen (kein 2027-File). Backlog.
- **2026-Distanzfehler (past, übersprungen — Events bereits vorbei):** hansbergland-cross, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld. Niedrigste Prio, kein Indexwert mehr.

### BACKLOG (offene Aufgaben — Stand 09-24)
- **IRONMAN 2027 weiter ohne offizielles Datum (race page „TBD"):** 70.3 Gdynia, Krakau, Posen, Warschau, Hradec Králové, Belgrad, 5150 Cervia, Málaga (nur 2026), Poreč (404), Costa Navarino (404), Versailles („Qualifier" ohne Datum), Barcelona-Calella Voll (ironman.com nur 2026; triatlonchannel 03.10.2027 unbestätigt). ✅ 09-27 angelegt: **ironman-5150-kraichgau-2027** (23.05.), **ironman-703-cascais-2027** (23.10.), **ironman-portugal-cascais-2027** (23.10., Voll). r.jina.ai auf ironman.com liefert oft 404 — mehrfach retryen. Quer gesehen (Files prüfen ob Datum stimmt): IM Italy Emilia-Romagna 18.09./70.3 19.09., 5150 Erkner 11.09./70.3 Erkner 12.09., 70.3 Vilamoura 03.04. (inaug.), 70.3 Valencia 18.04., 70.3 Tours 06.06.2027.
- **Challenge Okt-Rennen 2027 (offiziell nur 2026):** Peguera, Sanremo, Vieux-Boucau, Forte Village, Barcelona (418 bot-block). challenge-sandefjord-2027 bleibt confirmed:false („June 2027", kein Tag).
- **confirmed:false 2027 (25) — exaktes Datum nachtragen sobald offiziell:** king-of-the-lake, styroica, woerthersee-gravel-race, paris-roubaix-challenge, hansbergland, swim-run-swim-laengsee, swim-run-swim-klopeiner-see (NEU false 09-27), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, berliner-volkstriathlon, lipperlandtriathlon-lage, arheilger-muehlchen, zytturm-zug, basel, weiden, dublin-city, kocevje, xterra-austria/croatia/scanno/longemer/weston-park, challenge-sandefjord, timisoara, herzoman, norseman. (✅ 09-27 confirmed:true geworden: aarau 19.09., guenzburg-cross 08.05., stadttriathlon-forchheim 13.06.)
- **Rad EU ohne 2027-Datum (Fortführung signalisiert):** L'Étape Slovenia/Romania, Ardéchoise („Rendez-vous 2027!"), Ariégeoise, La Pyrénéenne, Portes du Soleil, The River Gravel, Tour of Pembrokeshire. **Ohne Info:** Etape du Tour (nach Tour-Präsentation Okt), Tour Transalp (Orte 2027), Marmotte Alpes (nur 2026), Quebrantahuesos (Countdown noch auf 2026), LBL Challenge (kein Repo-File), Il Lombardia, Schleck, Majestics, Helsinki GF, Istria (istriadiscovery.hr DNS-tot), UCI GF Cyprus (GFWS-Kalender 2027 noch nicht online), Viana/Eurobec (PT). (✅ 09-27 angelegt: krk-granfondo 24.04., granfondo-riccione 21.03., gfny-nyborg 08.08.)
- **Rad AT/DE ohne 2027-Datum:** münsterland-giro, velothon (Stadt unklar, 503), tour d'energie, tour-de-kärnten, carinthia200, grand-escape-innsbruck (DNS), allgäu-gravel, tour-de-herz, rosenheimer (Rad+Gravel), löwensteiner-berge, saarschleifen, sauerlandride, gravelei, nockbike, brezel-race, lidl-deutschland-tour, RACA 850/350-Gravel, brockenheroes, velowino, Salt&Lake Trail. (✅ 09-27 angelegt: neusiedlersee-radmarathon 24.–25.04., race-across-austria-east-west 24.–28.08.) ~290 cycloworld-„Date not confirmed"-Einträge ohne Repo-Sibling noch nicht einzeln geprüft.
- **Tri AT ohne 2027-Datum:** suedkaerntner, aloha-tri-mondseeland, amstetten, braunauer, ferlach, ikb-baggersee, jannersee, kraigersee, luschnouar, mistelbacher, pöttschinger, riverthlon, schwarzataler, knittelfeld, wels, steiraman, thiersee, tri-cross-völkermarkt, langau, ultra-bad-radkersburg, unterberg, wolfgangsee-strobl, ladies-triathlon. ÖTRV-Kalender 2027 weiter fast leer (nur Apfelland 21.05. + Swim&Run Amstetten 17.10.2026). (✅ 09-27 angelegt: keltenman 29.05., aloha-tri-linz 03.07., xterra-austria 20.–21.08. false.)
- **Tri DE/EU ohne 2027-Datum:** datagroup-nürnberg, müritz (kein Repo-File), taunusstein, bocholt, uelzen, hamm, viernheim, leipzig, lauingen, drachentriathlon-furth, güstrow-trinale, triahatz, karlsfeld, castle-race-hever (nicht im 2027-Kalender), grafman, openlakes-atlantique-royan, ayia-napa (nur Aggregatoren). **46 Seiten nicht abrufbar** (JS/403) — re-check. (✅ 09-27 angelegt: powerman-zofingen 04.–05.09., la-tour-geneve 03.–04.07., ratingen 12.09., triathlon-portocolom 11.04., lakesman 20.06., openlakes-belgium-half 18.–19.09., openlakes-champagne 19.–20.06., slateman 13.06., timisoara/herzoman/norseman false.)
- **Neue Kandidaten (offiziell prüfen):** UCI GF Cyprus (26.03.2027), Viana/Eurobec Granfondo (PT), Wintertriathlon Jänner 2027 (fun-sports.at), Roadford Lake, Castle Race Chantilly/Belvoir, Obernai-Benfeld, Setúbal, Infinitri Peñíscola.
- **2027-Enrichment:** `registrationUrl` nachtragen, sobald Anmeldung öffnet (viele 2027-Kopien bewusst ohne alte 2026-Anmelde-URL).
- **Elevation offiziell nicht publiziert (nicht schätzen):** Stadt-Tris (frankfurt-city, bremen, nürnberg), rad-am-salzburgring, viele IRONMAN-Course-Seiten.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen, siehe routine-prompt „Recherche-Umfang“)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; Monatsansicht `?month=M&year=YYYY` ohne Slash) | 2026-09-27 (2027 fast leer: nur Apfelland 21.05.) |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-27 (2027 noch sparsam) |
| ironman.com (via r.jina.ai-Reader, direkt 403; oft 404 über Proxy) | 2026-09-27 |
| challengefamily.com + Race-Sites | 2026-09-27 |
| k226.com/events/events.aspx | 2026-09-27 |
| cycloworld.cc/de/kalender-de | 2026-09-27 |
| UCI Gran Fondo World Series | 2026-09-27 (Kalender 2027 noch nicht über Dez 2026 hinaus online) |
| L'Étape-Serie, GFNY, xterraplanet, birken.no, hauteroute, powerman.ch | 2026-09-27 |
| Veranstalterseiten aller 2026-Events (automatischer 2027-/Absage-Scan) | 2026-09-27 |
> Nicht erreichbar 09-27: istriadiscovery.hr (DNS), swedeman.se (DNS), grand-escape.cc (DNS), triathlon.barcelona (418), velothon.de (503), pirker-grenzerfahrung (503) + diverse Tri-Seiten (s. BACKLOG).

---

## Session 2026-09-27 — Enrichment/Fixes-Lauf: 23 neu + ~29 veredelt + 2 Dubletten entfernt

Wartungslauf mit **Enrichment- und Fix-Priorität** (bewusst kein neuer Massen-Push — der Scaled-Content-Throttle läuft, +306 Seiten wurden erst am 09-24 angelegt). 6 Research-Agents parallel über disjunkte Datei-Domänen (AT-Tri, DE/EU-Tri, IRONMAN/Challenge, Rad AT/DE, Rad EU/UCI, Fixes/Dubletten), alle Termine gegen **offizielle** Veranstalter-/Serienseiten; Aggregatoren nur Discovery, unbelegte Felder weggelassen statt geraten. Alle Quellen laut Routine durchsucht (ÖTRV/DTU-2027 weiter fast leer, UCI-GFWS-Kalender 2027 noch nicht online).

- **23 neue 2027-Ausgaben** (18 confirmed, 5 confirmed:false; alle Qualitäts-Gate bestanden: ≥6 Sätze, ≥553 Zeichen, Sibling-Ähnlichkeit ≤0,44):
  - **Tri AT (3):** keltenman (29.05.), aloha-tri-linz (03.07.), xterra-austria (20.–21.08., false).
  - **Tri DE/EU (11):** powerman-zofingen (04.–05.09.), la-tour-geneve (03.–04.07.), ratingen (12.09.), triathlon-portocolom (11.04.), lakesman (20.06.), openlakes-belgium-half (18.–19.09.), openlakes-champagne (19.–20.06.), slateman (13.06.); norseman/herzoman/timisoara (false).
  - **IRONMAN (3):** ironman-5150-kraichgau (23.05.), ironman-703-cascais (23.10.), ironman-portugal-cascais (23.10., Voll).
  - **Rad (6):** neusiedlersee-radmarathon (24.–25.04.), race-across-austria-east-west (24.–28.08.), krk-granfondo (24.04.), granfondo-riccione (21.03.), gfny-nyborg (08.08.); (paris-roubaix-challenge blieb korrekt false — ASO nennt kein 2027-Datum).
- **~29 Bestands-Events veredelt/korrigiert:** 14 Rad AT/DE (elevation/imageUrl aus offizieller Quelle, alle Bilder curl-geprüft), 7 Rad EU (distance/imageUrl), 3 confirmed:false→true Tri (aarau 19.09., guenzburg-cross 08.05., forchheim 13.06.), xterra-croatia Datum Mai→**Okt** (22.–24.10.), 2 IRONMAN-Beschreibungen (malaga, barcelona-calella, beide upcoming Okt-2026) + duisburg-2027 kavval-Bild entfernt, 2 confirmed:false-Tri mit offiziellem imageUrl (kirchbichl, fürstenfeld).
- **Korrekturen/Fixes:** cascais-70.3 Datum **16.→23.10.** (offizieller IRONMAN-Save-the-Date; Agent-Erstquelle byteseu.com war falsch); swim-run-swim-klopeiner-see **confirmed:true→false** + Beschreibung entschärft (AASC führt nur 2026); 3× Gran Fondo→RTF (chiemgau, duisburg-steel, sylt 2026); 2× websiteUrl (loser, gaisberg); 5× kaputte/aggregator imageUrl entfernt.
- **2 Dubletten entfernt:** marmotte-granfondo-valais-2026 (= tour-des-stations), dolomitenradrundfahrt-lienz-2026 (= dolomitenradrundfahrt).
- **1 Removal-Doku:** Backwaterman (letzte Ausgabe 2026) → BLACKLIST + CLAUDE.md.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1569 pages**, 0 errors. Sitemap **518 URLs** (nur indexierbar), entfernte/past-URLs nicht enthalten, neue 2027 + confirmed:false-Future enthalten. Date-driven noindex + Sitemap-Ausschluss intakt — **keine Code-Änderung nötig**.

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
