# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### FOKUS — 150 indexierbare Seiten (seit 2026-10-17, höchste Priorität)
- Nur `src/data/index-focus.json` ist indexierbar (150 Events: DE 88, AT 59, ES 3) + 4 Landingpages
  (Radrennen/Triathlon × DE/AT 2027). Alle anderen Event-Seiten `noindex, follow`. Sitemap: 157 URLs.
- Pro Lauf: `node scripts/select-index-focus.mjs --report` → mind. 15 Fokus-Events mit Tiefenfeldern
  (`distances`, `entryFee`, `registrationDeadline`, `startTime`, `participantLimit`) + Beschreibung
  ≥ 120 Wörter vertiefen. Am Ende Script ohne Flags laufen lassen, JSON mit committen.
- Limit 150 **nicht** erhöhen, bis der User meldet, dass Google Seiten aus dem Set indexiert.
- Stand 10-23: **17/150 Fokus-Events haben Tiefenfelder** (war 0). distances[] auf allen 17; dazu
  entryFee/registrationDeadline/startTime auf ith-hennesee, scharmuetzelsee-bad-saarow, arber-radmarathon,
  bike-the-lies, granfondo-the-millars; participantLimit auf challenge-roth (3500). Reichste: arber
  (11 Strecken A–K). Schwächste im Set jetzt (zuerst vertiefen): wuerzburg-triathlon-2027,
  kallmuenzer-triathlon-2027, albtal-triathlon-ettlingen-2027, grosse-weserrunde-rinteln-2027,
  heinerman-triathlon-darmstadt-2027, rosa200-faak-am-see-2027, swimrun-rheinsberg-2027,
  allgaeu-gravel-ride-isny-2027, world-games-mountainbiking-saalbach-2027, ironman-703-alcudia-mallorca-2027.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **404 Events** (Stand 10-23; confirmed 370, confirmed:false 34). Nächste Läufe: Fokus-Tiefenfelder weiter (Ziel ≥15/Lauf, aktuell 17/150), BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, gestaffelt ab Herbst/Winter 2026), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Kategorie-Enums (WICHTIG beim Neuanlegen — Werte aus `src/lib/types.ts`)
- **Cycling:** Kriterium, Gran Fondo, Radmarathon, RTF, Gravel, Rundstreckenrennen, Etappenrennen, Berg, Zeitfahren. (KEIN „MTB"/„Bikepacking"/„Jedermann" — MTB-Marathons → Radmarathon; XC-Rundkurs → Rundstreckenrennen; Jedermann-Rennen → Gran Fondo; Bikepacking/Ultra → RTF.)
- **Triathlon:** Sprintdistanz, Olympische Distanz, Mitteldistanz, T100, Langdistanz, Cross-Triathlon, Aquathlon, Duathlon. (KEIN „Sprint"/„Olympisch"/„Swimrun" — Swimrun → Aquathlon; XTRI/Ultra → Langdistanz.)

### Kennzahlen (Stand: 2026-10-23)
- Events gesamt: **1530** | Saison 2026: 1126 (upcoming ≥ heute **15** | past/noindex **1111**) | Saison 2027: **404** (confirmed 370 | confirmed:false 34)
- Letzter Lauf: 2026-10-23 — **Hauptziel Fokus-Tiefenfelder: 17/150** (war 0; distances[] ×17, +Fee/Deadline/Start auf 5, participantLimit challenge-roth 3500). **5 neue 2027-Ausgaben** (ironman-703-cascais 23.10., ironman-portugal-cascais 23.10., ironman-703-malaga 31.10., challenge-peguera-mallorca 16.10., challenge-vieux-boucau 02.10. — alle offiziell verifiziert). Mehrere distanceKm/elevationGainM-Korrekturen aus offizieller Quelle. Keine Absagen/Removals, keine neuen BLACKLIST-Einträge.
- Build zuletzt grün: **1605 pages**, 0 errors; Sitemap **158 URLs** (150 Fokus-Events + Startseite/Formulare/Landingpages), neue Nicht-Fokus-2027 korrekt noindex/nicht in Sitemap.
- Datenqualität: Fokus-Tiefenfelder 17/150 (Rest ToDo künftige Läufe). missing elevationGainM/imageUrl weiter meist offiziell nicht publiziert (JS-SPA ohne og:image, alle IRONMAN-Bilder 403-hotlinkgeblockt) — nicht schätzen.

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
- LadiesTri Breitenbrunn (Neusiedler See, Burgenland, AT) — 23.08.2026 ÖTRV „ABGESAGT"; Veranstalterdomain tot. Am 10-10 entfernt (war fälschlich noch im Repo; PR #13 hatte das nie auf master gebracht).
- Backwaterman SwimRun Ottenstein (Ottensteiner Stausee, Zwettl, NÖ, AT) — dauerhaft eingestellt; backwaterman.at nennt 2026 „The Last ONE". finishers.com führt Phantom „2027". Bestehende 2026-Datei ist finale Ausgabe; keine 2027-Datei anlegen. (10-11)
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **krk-granfondo (HR) aufgelöst (10-09):** nicht abgesagt — krkgranfondo.com nennt nächste Ausgabe Sa 17.04.2027, Punat, 82 km. `krk-granfondo-2027.json` angelegt (confirmed). 2026-Datei war past.
- ✅ **swedeman-xtri-are (SE) aufgelöst (10-09):** nicht abgesagt — offizielle Seite swextri.com (swedeman.se tot) zeigt nächste Ausgabe XTRI „JULY 10" (Sa → 2027). `swedeman-xtri-are-2027.json` angelegt (10.07.2027, confirmed). Konflikt 10.07 vs 03.07 damit gelöst.
- ✅ **Il Lombardia GF Dublette entfernt (10-09):** `granfondo-il-lombardia-2026.json` (135 km, veraltete Como-Strecke) gelöscht; `gran-fondo-il-lombardia-bergamo-2026.json` (110 km, Bergamo-Area, Valico di Valcava — bestätigt durch gfilombardia.it) behalten. **Offen:** GF Il Lombardia **2027-Datum** nicht verifizierbar (gfilombardia.it zeigt nur 2026) → BACKLOG.
- ℹ️ **in-velo-veritas-korneuburg-2027:** Location bereits korrekt auf Schloss Marchegg (Marchfeld) umgestellt; nur Slug-Stamm „korneuburg" kosmetisch stale. Keine Aktion nötig.
- ⚠️ **challenge-sandefjord-2027 (NO, confirmed:false):** Entfernungs-Risiko. challengefamily.com/races/challenge-sandefjord/ liefert jetzt **404** (nicht im 2027-Kalender); eigene Seite challenge-sandefjord.com nur 2026 + „TBA", kein 2027-Termin (10-23 geprüft). Organisator-Seite noch live → diesen Lauf nicht entfernt. **Nächsten Lauf entfernen + BLACKLIST**, wenn weiterhin keine offizielle 2027-Ankündigung.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026 (radmarathon.at generisch); loser-bergzeitfahren-altaussee-2026 (salzkammergut-trophy.at).
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon.
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).
- **neu (10-09) — la-pyreneenne-bagneres-2027:** 2027 zieht von Bagnères-de-Bigorre nach Saint-Lary-Soulan um (Location bereits Saint-Lary); Slug-Stamm „bagneres" damit geografisch stale, bei 2028 ggf. umbenennen.

### BACKLOG (offene Aufgaben — Stand 10-11)
- **IRONMAN 2027-Termine (10-23 via ironman.com JSON-LD, html über r.jina.ai geprüft):** **NEU veröffentlicht + angelegt 10-23:** 70.3 Málaga (31.10.2027), 70.3 Cascais + IRONMAN Cascais Full (beide 23.10.2027). **Noch 2026-startDate → re-check ab Nov 2026:** 70.3 Gdynia, Kraków, Poznań, Warsaw, Hradec Králové, Poreč, Versailles, Costa Navarino, 5150 Cervia. **Barcelona-Calella** bleibt confirmed:false (ironman.com zeigt noch 2026-10-04). (10-11 angelegt: ironman-703-mamaia-constanta 26.09.2027.)
- **Challenge Herbst-Rennen 2027:** **NEU bestätigt + angelegt 10-23:** Peguera-Mallorca (16.10.2027, Start 09:00), Vieux-Boucau (02.–03.10.2027, Start 10:00). **Noch 2026-Daten:** Sanremo, Forte Village, Barcelona (re-check). challenge-sandefjord → ZU PRÜFEN (challengefamily-Seite jetzt 404). Bonus 10-23 bestätigt (bereits im Repo): Salou 09.05., Cesenatico 16.05., The Championship Šamorín 23.05., Gdańsk 20.06., Kaiserwinkl-Walchsee 27.06., Roth 04.07., Almere 11.09., Mogán 17.04.
- **confirmed:false 2027 (34) — exaktes Datum nachtragen sobald offiziell:** 10-11 alle re-checked, keiner mit offiziellem Exakt-Datum. woerthersee-gravel-race hat jetzt offiziell „April 18, 2027 (subject to final confirmation)" → Datum 04-18 gesetzt, bleibt confirmed:false. Weiter nur provisorisch/Monat: aarau, arheilger-muehlchen, guenzburg-cross, king-of-the-lake, lipperlandtriathlon, stadttriathlon-forchheim, triathlon-basel, zytturm, marmotte-granfondo-alpes, 4× XTERRA (xterraplanet 2027 noch nicht publiziert), allgaeu-gravel-ride-isny, carinthia200-villach, dublin-city, letape-romania/slovenia, quebrantahuesos, rosenheimer-radmarathon, swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, triathlon-weiden, triatlon-kocevje, hansbergland, la-pyreneenne-bagneres, tour-of-pembrokeshire + neu 3rides-gran-fondo-weinstrasse, zugspitz-arena-gravel-triathlon. **ariegeoise-2027:** ariegeoise.com DNS weiter tot (10-11).
- **Rad AT/DE ohne offizielles 2027-Datum (10-11):** tour d'energie Göttingen (Ende Apr), brockenheroes, salt&lake-trail, velowino (Ort unklar), saarschleifen, nockbike, löwensteiner-berge, Rhön 300, Rennsteigride, Alb Extrem, Albstadt-Bike-Marathon, Hegau Gravel, Glemmride, OÖ Classics, Granitmarathon, Race Around Niederösterreich (nur 2peak-Guess), Pyramidenkogel Hero (Verdacht: evtl. Turmlauf, nicht Radrennen) — re-check Nov 2026–Feb 2027. **brezel-race NEU 10-11 angelegt** (19.09.2027, confirmed).
- **Rad EU ohne offizielles 2027-Datum:** TOUR Transalp (20.–26.06.2027 fix, Startort offen), Etape du Tour (Route erst nach TdF-Präsentation **22.10.2026** → danach re-check), Haute Route Alps (keine Termine), Il Lombardia GF (Gimondi, kein 2027-Datum), The River Gravel (Bouillon BE), Les 3 Ballons (Ronchamp, Vosges), Portes du Soleil Rad (Champéry CH, ~20.06.2027 unbestätigt), GFNY Europe (Villard-de-Lans ~Mai, Grand Ballon/Vaujany/Orcières/Uppsala kein Datum). **3rides-gran-fondo-weinstrasse NEU 10-11** (confirmed:false, 10.04.).
- **Tri AT/DE/EU ohne 2027-Datum:** DTU-Kalender zeigt 2027 nur bis ~20.06 (rolling) → Herbst-2027 nächsten Lauf re-scannen. Offen: Swim and Run TV1848 Coburg (06.03.2027 DTU, Aquathlon, keine Veranstalterseite/Distanzen), Wolfsburger Crossduathlon (07.03.2027 DTU vs 28.02 hdsports, keine offizielle Seite), Grafman MD (GB, ATW-Seite CAPTCHA), Setubal (PT)/Ayia Napa (CY)/Obernai (FR)/Roadford Lake (GB). **AT-Tri re-check (ÖTRV noch leer, Veranstalterseiten nur 2026):** challenge-st-poelten (zuerst!), xterra-austria, steiraman, jannersee, kraigerseetriathlon, suedkaerntner, schwarzataler, svsee-cross, poettschinger (Organisator-Rücktritt → Absage-Risiko), starlim-city-triathlon-wels. **NEU 10-11 angelegt:** keltenman, o-see-triathlon-uelzen, spreewald-duathlon-vetschau, vierlanden-triathlon-hamburg, infinitri-113-peniscola, zugspitz-arena-gravel-triathlon (false).
- **2027-Enrichment:** `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert (fast nie — in GPX/Bildern); **ALLE IRONMAN-imageUrls 403-hotlinkgeblockt** (34 richtige og:images gefunden, keine ladbar) → imageUrl bleibt bei IRONMAN offen. JS-SPA ohne og:image (dreilaendergiro, bodensee-radmarathon, neusiedlersee, wachau, allgaeu-gravel-ride, marcialonga, munich-triathlon, slovakman, ostseeman u.a.) → imageUrl offen.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge; Backwaterman SwimRun (eingestellt, s. BLACKLIST).

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-23 (2027-Liste bis ~Mitte Sept, keine „ABGESAGT"; Kandidaten: Ober-Grafendorf 08.05., Jannersee 07.08., Schwarzataler 17.05., Südkärntner 18.09., Mußbach 06.06. u.a. — 2027-Siblings noch anzulegen) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-23 (2027 nur bis ~Mitte Juni rolling; Mußbach-Kandidat) |
| ironman.com (JSON-LD html über r.jina.ai + proxy; direkt 403) | 2026-10-23 (Málaga 31.10. + Cascais 70.3/Full 23.10. NEU published→angelegt; Gdynia/Kraków/Poznań/Warsaw/Hradec/Poreč/Versailles/Costa-Navarino/5150-Cervia noch 2026) |
| challengefamily.com + Race-Sites | 2026-10-23 (Peguera 16.10. + Vieux-Boucau 02.10. NEU bestätigt→angelegt; sandefjord 404→ZU PRÜFEN; Sanremo/Forte Village/Barcelona noch 2026) |
| k226.com/events/events.aspx | 2026-10-23 (Discovery; keine neuen confirmten Termine) |
| cycloworld.cc/de/kalender-de | 2026-10-23 (Discovery; 2027-Ansicht noch leer/auto-gerollt) |
| hdsports.at/rad (paginiert) + hdsports.at/triathlonkalender | 2026-10-23 (Rad-Kandidaten alle nur projiziert, kein offiz. 2027-Datum: Rhön 300, Alb Extrem, Sachsenring, Rund um die Kö, Pyramidenkogel Hero u.a. → re-check Dez–Feb) |
| UCI Gran Fondo World Series | 2026-10-23 (alle EU-2027-Qualifier bereits im Repo; nichts Neues anzulegen) |
| GFNY / L'Étape-Serie / Classics (RCS, Marmotte, Haute Route) | 2026-10-23 (keine neuen confirmten Termine) |
| Veranstalterseiten Fokus-Events (Tiefenfelder) + confirmed:false-Scan | 2026-10-23 (17 Fokus vertieft; keine Flips; woerthersee bleibt „vorläufig") |
> Nicht erreichbar 10-23: grenzerfahrung.vcc-pirk.de (503, Pirker nur Beschreibung), riderman.de (nur 2026-Detail trotz 2027-Header), alle ironman.com-Bildhosts (403 Hotlink); ironman.com-Daten nur via r.jina.ai-html+JSON-LD.

---

## Session 2026-10-23 — Fokus-Tiefenfelder 17/150 + 5 neue 2027-Ausgaben

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 5 Agents parallel: 3 Enrichment (Fokus-Tiefenfelder Rad/Tri/Big-Events) + 2 Discovery (Tri ÖTRV/DTU/k226; Rad cycloworld/hdsports/UCI + IRONMAN/Challenge-Datums-Recheck) gegen **offizielle** Quellen. Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert.

- **Hauptziel erfüllt: 17 Fokus-Events mit Tiefenfeldern** (war 0). `distances[]` auf allen 17; zusätzlich `entryFee`/`registrationDeadline`/`startTime` auf ith-hennesee-meschede, scharmuetzelsee-bad-saarow, arber-radmarathon, bike-the-lies, granfondo-the-millars; `participantLimit` auf challenge-roth (3500). Reichste Seite: **arber-radmarathon** (11 Strecken A–K, Fee 40–75 €, Meldeschluss 21.07., Start 06:00). Beschreibungen alle ≥120 Wörter. Mehrere `distanceKm`/`elevationGainM`-Korrekturen aus offizieller Quelle (ith-hennesee Rad 40→45; woerthersee 120/2000→150/1713 offiz. 2026-Kurs; gravel-rallye 180/5000→250/4300; black-forest-ultra 118/4000→115/3550), Ortsname-Fix waltriathlon (Freibad Ulitzhörn).
- **5 neue 2027-Ausgaben** (offiziell verifizierte Termine, aus 2026-Sibling, Beschreibung angepasst ≥120 W, Aggregatorbilder weggelassen): ironman-703-cascais (23.10.), ironman-portugal-cascais (23.10.), ironman-703-malaga (31.10., 2. Ausgabe/Marbella-Nachfolge), challenge-peguera-mallorca (16.10., Start 09:00), challenge-vieux-boucau (02.–03.10., Start 10:00). Quellen: ironman.com JSON-LD (html via r.jina.ai) + challengefamily.com Race-Seiten.
- **Keine Absagen/Removals, keine neuen BLACKLIST-Einträge.** ÖTRV 2027 ohne „ABGESAGT"; woerthersee-gravel-race bleibt confirmed:false (offiziell „18.04.2027 vorläufig"). **ZU PRÜFEN neu:** challenge-sandefjord-2027 (challengefamily-Seite jetzt 404, eigene Seite nur 2026 → Entfernung nächsten Lauf wenn weiter ohne 2027-Termin).
- **Discovery-Kandidaten (2027-Siblings noch anzulegen, ÖTRV/DTU-bestätigt):** Ober-Grafendorf, Jannersee, Schwarzataler, Südkärntner, Stadttriathlon Knittelfeld, Mußbach (DE), XTERRA Austria (confirmed:false). Rad-Kandidaten (Rhön 300, Alb Extrem, Sachsenring …) alle nur projiziert → re-check Dez–Feb. In BACKLOG/QUELLEN-STAND notiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1605 pages**, 0 errors. Sitemap **158 URLs** (150 Fokus-Events + Startseite/Formulare/Landingpages), neue Nicht-Fokus-2027 korrekt noindex/nicht in Sitemap, Fokus-Event (arber) enthalten. Fokus-Set regeneriert (sticky; 150 identisch, nur Reihenfolge nach neuen Scores). Keine Code-Änderung nötig.
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-4mc4gr` (Harness-Vorgabe; Deployment triggert erst beim Übernehmen auf master).

---

## Session 2026-10-11 — 9 neue 2027-Ausgaben + 25 Enrichment + 1 BLACKLIST

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 6 Agents parallel gegen **offizielle** Quellen (ÖTRV AT-Tri; DTU/k226 DE/EU-Tri; IRONMAN/Challenge via r.jina.ai + JSON-LD-startDate; cycloworld Rad AT/DE; UCI GFWS/GFNY/L'Étape/Classics Rad EU; Enrichment bestehender 2027-Events). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Container-Neustart mitten im Enrichment-Agent — 11 bereits gespeicherte Dateien blieben erhalten, Agent per SendMessage fortgesetzt. Alle Änderungen per `npm run build` (Zod) validiert; alle imageUrls per curl auf HTTP 200 geprüft.

- **9 neue 2027-Dateien** (Beschreibungen 6–10 Sätze, deutsch, faktenreich; Slug-Stamm = 2026-Sibling wo vorhanden):
  - **Tri (6):** keltenman (AT OÖ, 29.05., Sprint, keltenman.at bestätigt), zugspitz-arena-gravel-triathlon (AT Tirol, confirmed:false 28.08., Mitteldistanz geplant lt. Veranstalter), o-see-triathlon-uelzen (DE NDS, 30.05.), spreewald-duathlon-vetschau (DE BB, 01.05.), vierlanden-triathlon-hamburg (DE HH, 20.06., DTU-Kalender), infinitri-113-triathlon-peniscola (ES, 25.04., Mitteldistanz, FETRI/PTO).
  - **Rad (3):** brezel-race-region-stuttgart (DE BW, 19.09., brezelrace.de + Countdown), 3rides-gran-fondo-weinstrasse (DE RLP, confirmed:false 10.04., UCI GFWS-Qualifier), ironman-703-mamaia-constanta (RO, 26.09., erstes IRONMAN Rumäniens).
- **25 Bestands-2027 veredelt** (24 imageUrl offiziell + curl-200-geprüft: u.a. gfny-bremen/lourdes, gotland360, gravelei, hansbergland, la-pyreneenne, lakesman, letape-slovenia, muensterland-giro, race-across-austria, granfondo-rosa, tour-de-balaton, erzgebirgstour, king-of-the-lake, trumer-triathlon, jura-radmarathon, duisburg-steel, kitzbuehel-triathlon, eaglexman-gran-sasso, vitruvian-rutland, 3rides-winterberg, woerthersee-gravel-race, thiersee-triathlon, vulkanlandtriathlon; + tour-of-pembrokeshire distanceKm 169).
- **1 Datenfix:** vierlanden-triathlon-hamburg — kavval-Aggregatorbild entfernt + Mitteldistanz-Satz korrigiert (Kategorien OD/Sprint).
- **1 neuer BLACKLIST-Eintrag:** Backwaterman SwimRun Ottenstein (NÖ) — backwaterman.at nennt 2026 „The Last ONE", dauerhaft eingestellt → CLAUDE.md + BLACKLIST. (Kein Repo-File zu entfernen; 2026-Datei ist finale Ausgabe.)
- **Keine confirmed:false→confirmed-Flips** diesen Lauf: alle 34 Re-checks haben offiziell weiterhin nur „voraussichtlich/provisorisch" oder nur Aggregator-Daten (woerthersee-gravel-race: offiziell „April 18 (subject to final confirmation)" → Datum gesetzt, bleibt false).
- **Keine Removals wegen Absage** außer der eingestellten Backwaterman-Dokumentation; ÖTRV ohne „ABGESAGT".
- **SEO / Sitemap / noindex:** `npm run build` grün, **1599 pages**, 0 errors. Sitemap **514 URLs** (nur indexierbar), alle 9 neuen `-2027` enthalten, past/noindex ausgeschlossen. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-desh2z` (Harness-Vorgabe; Deployment triggert erst beim Übernehmen auf master).

---

## Session 2026-10-09 — 9 neue 2027-Ausgaben + 5 Datums-Confirms + 25 Enrichment + 1 Dedup

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 6 Research-Agents parallel gegen **offizielle** Quellen (IRONMAN/Challenge via r.jina.ai + challenge-family; ÖTRV/DTU Tri AT/DE; cycloworld/hdsports Rad AT/DE; UCI GFWS/GFNY/L'Étape/Classics Rad EU; 34× confirmed:false Datums-Nachverfolgung; Enrichment + Phantom-Verifikation). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert; alle 18 imageUrls per curl auf HTTP 200 geprüft.

- **9 neue 2027-Dateien** (Slug-Stamm = 2026-Sibling wo vorhanden → „Weitere Ausgaben" greift; Beschreibungen 5–8 Sätze, deutsch, faktenreich):
  - **Tri (4):** ironman-barcelona-calella (ES, confirmed:false 03.10., Reg 2027 offen nach Wetter-Absage 2026), ultra-triathlon-bad-radkersburg (AT Steiermark, 02.–06.09., IUTA Ultra), neustaedter-triathlon-donau (DE Bayern, 20.06., DTU-bestätigt), swedeman-xtri-are (SE, 10.07., XTRI World Tour).
  - **Rad (5):** velofondo-9h11-leipzig (DE Sachsen, 10.07., Zweierteam-Rundstreckenrennen Porsche-Teststrecke), sudety-tour (CZ, 08.–09.05., einziges UCI-GFWS-Rennen Tschechiens), la-pyreneenne-bagneres (FR, confirmed:false 04.07., 2027 Umzug nach Saint-Lary-Soulan), tour-of-pembrokeshire (GB, confirmed:false 22.05.), krk-granfondo (HR, 17.04., 82 km Punat/Krk).
- **5 confirmed:false → confirmed** (offizielles exaktes Datum verifiziert): ardechoise (Datum 08.→**09.–12.06.**, ardechoise.com), berliner-volkstriathlon (27.06.), gravelei-suedsteiermark (21.–23.05.), paris-roubaix-challenge (10.04.), styroica (18.09.). 29 weitere confirmed:false bleiben (offiziell nur „voraussichtlich"/Monat).
- **25 Enrichment-Felder** (offiziell belegt, Bilder per curl 200 + Maß geprüft): 18 imageUrl (u. a. altmuehltal-radmarathon, fuga-300, grand-escape-innsbruck, gralloch-gravel, imster-radmarathon, bergkaiser-kematen, rund-um-den-harz, seaside-ride-rerik, treibjagd-dunkelwald, granfondo-fausto-coppi, 3× aloha-tri, uci-granfondo-cyprus, rad-am-ring, gelreman-arnhem, thermentriathlon-fuerstenfeld, birkebeinerrittet), 3 distanceKm (ardechoise 160, erzgebirgstour 90, gravelei 126; + istria auf 112 abgeglichen), 4 elevationGainM (erzgebirgstour 2200, istria 1745, letape-slovenia 1804, amstel-toerversie 2715).
- **1 Dedup:** granfondo-il-lombardia-2026 (veraltete 135-km-Como-Strecke) entfernt; gran-fondo-il-lombardia-bergamo-2026 (110 km, Bergamo-Area, offiziell bestätigt) behalten.
- **Keine Removals wegen Absage, keine neuen BLACKLIST-Einträge** diesen Lauf (ÖTRV ohne „ABGESAGT"; Agents fanden keine neuen Absagen; krk + swedeman als lebendig bestätigt).
- **SEO / Sitemap / noindex:** `npm run build` grün, **1582 pages**, 0 errors. Sitemap **500 URLs** (nur indexierbar), alle 9 neuen `-2027` enthalten, entfernte Dublette raus, past/noindex ausgeschlossen. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-jbcp55` (Harness-Vorgabe).

### Nachtrag 2026-10-10 — Konsolidierung auf master (User-Request „alles auf master, auch PRs/Branches")
- **10-09-Lauf per Fast-Forward auf `master`** gebracht (Deployment ausgelöst).
- **Branch-Audit:** mehrere Wartungsläufe (10-01 `xqdjha`, 10-05 `um4xsx`, 10-07 `t9wlsq`, 09-27 `t1leaw`, 09-29 `ba451g`) waren **nie gemergt**. Sie überschneiden sich stark mit master, teils unter **anderen Slugs** (z. B. `ardechoise-cyclosportive` vs. `ardechoise`, `uci-istria-granfondo` vs. `istria-granfondo`, `muensterland-giro-jedermann` vs. `muensterland-giro`) → Wholesale-Merge hätte **Dubletten** erzeugt. Daher **nicht gemergt**, sondern per Name-Dedup die **9 wirklich einzigartigen** Events herausgezogen und (jedes offiziell gegen den Veranstalter re-verifiziert, alle CONFIRM) auf master angelegt: **castle-race-belvoir** (GB, 17.–18.07.), **castle-race-chantilly** (FR, 12.–13.06.), **castle-race-hever** (GB, 25.–26.09.), **eurobec-granfondo** (PT Elvas, 11.04.), **lakesman-triathlon** (GB, 20.06.), **slateman-triathlon** (GB Wales, 13.06.), **tour-transalp/MYTRANSALP** (IT, 20.–26.06., Startorte erst Dez), **openlakes-champagne** (FR Lac du Der, 19.–20.06.), **triathlon-portocolom** (ES Mallorca, 11.04.).
- **1 abgesagtes Event entfernt:** `ladies-tri-breitenbrunn-2026` (ÖTRV „ABGESAGT", PR #13 hatte es nie auf master gebracht) → BLACKLIST + CLAUDE.md.
- **Build grün: 1590 pages**, Sitemap **509 URLs**, alle 9 enthalten, ladies-tri raus.
- **Offene PRs #13 (15.08.) + #15 (07.09.):** veraltet, enrichten nur inzwischen vergangene 2026-Events, kollidieren mit der neu geschriebenen Memory/CLAUDE.md → als überholt **zu schließen** (nicht mergen). Die einzige echte offene Sache daraus (ladies-tri-Removal) ist erledigt.
- **Alte Entwicklungs-Branches** (Mai/Juni 2026, ahead=300+/behind=59, eigene History) sowie `main`-Leftover: nicht anfassen.

---

> Ältere Session-Summaries (2026-10-03 und früher) in `progress-archive.md`.
