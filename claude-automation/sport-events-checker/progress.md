# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### FOKUS — 150 indexierbare Seiten (seit 2026-10-17, höchste Priorität)
- Nur `src/data/index-focus.json` ist indexierbar (150 Events: DE 88, AT 59, ES 3) + 4 Landingpages
  (Radrennen/Triathlon × DE/AT 2027). Alle anderen Event-Seiten `noindex, follow`. Sitemap: 157 URLs
  (150 Fokus-Events + 4 Landing + Startseite/Formulare).
- Pro Lauf: `node scripts/select-index-focus.mjs --report` → mind. 15 Fokus-Events mit Tiefenfeldern
  (`distances`, `entryFee`, `registrationDeadline`, `startTime`, `participantLimit`) + Beschreibung
  ≥ 120 Wörter vertiefen. Am Ende Script ohne Flags laufen lassen, JSON mit committen.
- Limit 150 **nicht** erhöhen, bis der User meldet, dass Google Seiten aus dem Set indexiert.
- **Stand 10-19: 21/150 Fokus-Events haben Tiefenfelder** (10-19 erstmals befüllt; vorher 0). Schwächste
  im Set jetzt (zuerst vertiefen): swimrun-rheinsberg-2027, allgaeu-gravel-ride-isny-2027,
  bad-arolser-twistesee-triathlon-2027, grand-escape-innsbruck-2027,
  black-forest-ultra-bike-marathon-kirchzarten-2027, sv3sathlon-muehltal-2027,
  world-games-mountainbiking-saalbach-2027, granfondo-the-millars-castellon-2027,
  gravel-rallye-black-forest-2027, ironman-703-alcudia-mallorca-2027 (IRONMAN: nur definitorische
  `distances`, offizielle Seite blockt — s. BACKLOG).

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **407 Events** (Stand 10-19; confirmed 379, confirmed:false 28). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, die ab Herbst/Winter 2026 gestaffelt erscheinen; ironman.com war 10-19 geblockt), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, weitere Fokus-Events mit Tiefenfeldern befüllen.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Kategorie-Enums (WICHTIG beim Neuanlegen — Werte aus `src/lib/types.ts`)
- **Cycling:** Kriterium, Gran Fondo, Radmarathon, RTF, Gravel, Rundstreckenrennen, Etappenrennen, Berg, Zeitfahren. (KEIN „MTB"/„Bikepacking"/„Jedermann" — MTB-Marathons → Radmarathon; XC-Rundkurs → Rundstreckenrennen; Jedermann-Rennen → Gran Fondo; Bikepacking/Ultra → RTF.)
- **Triathlon:** Sprintdistanz, Olympische Distanz, Mitteldistanz, T100, Langdistanz, Cross-Triathlon, Aquathlon, Duathlon. (KEIN „Sprint"/„Olympisch"/„Swimrun" — Swimrun → Aquathlon; XTRI/Ultra → Langdistanz.)

### Kennzahlen (Stand: 2026-10-19)
- Events gesamt: **1533** | Saison 2026: 1126 (upcoming/open ≥ heute **15** | past/noindex **1111**) | Saison 2027: **407** (confirmed 379 | confirmed:false 28)
- Letzter Lauf: 2026-10-19 — **21 Fokus-Events erstmals mit Tiefenfeldern** (Haupt-Ziel: distances/entryFee/registrationDeadline/startTime/participantLimit + Beschreibungen ≥120 W, nur offiziell belegt), **8 neue 2027-Ausgaben** (2 Challenge: peguera-mallorca 16.10., vieux-boucau 09.10.; 6 AT via ÖTRV: xterra-austria 21.08., jannersee 07.08., suedkaerntner 18.09., stadttriathlon-knittelfeld 01.05., luschnouar-ironmaennli 05.06., poettschinger-aquathlon 28.08.), **6 confirmed:false→confirmed** (ÖTRV: swim-run-swim-laengsee 07.08., thermentriathlon-fuerstenfeld 04.07., triathlon-kirchbichl 05.06.; offiziell: marmotte-granfondo-alpes 27.06., quebrantahuesos 19.06., ariegeoise 26.06.), **1 Datenfix** (paradiestriathlon-jena: Kategorien→nur Sprintdistanz, distanceKm 25.75, falsches elevationGainM entfernt), ariegeoise websiteUrl→cyclosport-ariegeoise.com (alte Domain DNS-tot).
- Build zuletzt grün: **1607 pages**, 0 errors; Sitemap **157 URLs** (150 Fokus + 4 Landing + Start/Formulare, nur indexierbar), past/noindex ausgeschlossen, `grep -o '/events/' = 150`.

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
- IRONMAN 70.3 Knokke-Heist (BE) — „Discontinued", ab 2027 Volldistanz IRONMAN Belgium Knokke-Heist (eigene Datei)
- Granfondo Pag Okt-2026 — Phantom (7. Ausgabe erst 15.05.2027). 2027-Datei korrekt.
- Bergzeitfahren Schmelz Lollar 2026 + Rodltal-Bergkaiser 2026 — offiziell abgesagt
- Granfondo Bratislava (SK) — „V roku 2026 si dávame pauzu"
- RideLondon 100 (GB), Velothon Wales (GB), IRONMAN 70.3 Edinburgh (GB), Challenge Lisboa (PT), Styrkeprøven Trondheim-Oslo (NO) — eingestellt/abgesagt
- Velothon Berlin — defunct (→ VeloCity, letzte ~2022)
- LadiesTri Breitenbrunn (Neusiedler See, Burgenland, AT) — 23.08.2026 ÖTRV „ABGESAGT"; Veranstalterdomain tot.
- Backwaterman SwimRun Ottenstein (Ottensteiner Stausee, Zwettl, NÖ, AT) — dauerhaft eingestellt; backwaterman.at nennt 2026 „The Last ONE".
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- **neu (10-19) — poettschinger-triathlon:** 2027 NICHT im ÖTRV-Kalender; langjähriger Organisator (Mitteregger sen.) nach der 35. Ausgabe 2026 zurückgetreten, kein Nachfolger/2027-Termin (meinbezirk.at). **Kein Triathlon-2027 anlegen**, bis offizielle Fortführung. Der Aquathlon läuft weiter → `poettschinger-aquathlon-2027` (28.08.) angelegt. Bei bestätigter Triathlon-Absage → BLACKLIST.
- **neu (10-19) — Datenqualitäts-Flag IRONMAN-2027-Termine:** `ironman-frankfurt-2027` (confirmed:true, 2027-06-27) und `ironman-austria-kaernten-2027` (confirmed:true, 2027-06-13) stehen nur auf Aggregator-Konsens; ironman.com war 10-19 geblockt (403 direkt + r.jina.ai). endurance.biz: Frankfurt-2027-Datum offiziell noch nicht released. Bei Erreichbarkeit offiziell gegenprüfen (ggf. auf confirmed:false, falls offiziell nur 2026).
- ✅ krk-granfondo, swedeman-xtri-are, Il-Lombardia-Dedup (alle 10-09 gelöst). **Offen:** GF Il Lombardia **2027-Datum** nicht verifizierbar → BACKLOG.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026; loser-bergzeitfahren-altaussee-2026.
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon.
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld.
- **la-pyreneenne-bagneres-2027:** 2027 Umzug nach Saint-Lary-Soulan; Slug-Stamm „bagneres" geografisch stale, bei 2028 ggf. umbenennen.
- **Aggregator-imageUrls in neuen 2027-Dateien (niedrige Prio, noindex):** challenge-vieux-boucau-2027 (kavval entfernt → ohne Bild), paradiestriathlon-jena-2027 (kavval belassen), xterra-austria/knittelfeld/luschnouar (Presse-/Tourismusbilder) — bei Gelegenheit offizielle Hero-Bilder nachziehen.

### BACKLOG (offene Aufgaben — Stand 10-19)
- **Neue AT-Events mit offiziellem ÖTRV-2027-Datum, noch nicht angelegt** (Veranstalterseite für Distanzen prüfen, dann anlegen): **5. Hubiman** 18.07.2027 Kobenz (ST); **14. Int. Parndorfer Speedworld Supersprint Duathlon** 10.05.2027 (BGL). (Europe/Triathlon European Championships 11.06.2027 Kitzbühel = Elite → out of scope.)
- **Neuer PT-Kandidat:** IRONMAN 70.3 **Vilamoura-Algarve** 03.04.2027 (Pressemeldung endurance.biz) — bei ironman.com-Erreichbarkeit offiziell verifizieren, dann anlegen.
- **IRONMAN 2027-Termine (ironman.com 10-19 geblockt — re-check sobald erreichbar):** 70.3 Gdynia, Kraków, Poznań, Warsaw, Hradec Králové, Málaga, Poreč, Versailles (2027 lt. Lokalmedien bestätigt per Mehrjahresvertrag, aber 2026 wetterbedingt abgesagt — Datum offen), Costa Navarino, Cascais (+Full); 5150 Cervia (Lokalmedien: Cervia-WE 18./19.09.2027); IM Barcelona-Calella (confirmed:false). Kein Datum von Aggregatoren mit „?" übernehmen.
- **Challenge 2027:** Sanremo + Sandefjord noch NICHT im Challenge-Family-2027-Kalender (monitor, nicht bestätigt abgesagt); Forte Village + Barcelona (ES) noch nicht publiziert (2026 noch nicht gelaufen). (Peguera-Mallorca + Vieux-Boucau 10-19 angelegt.)
- **confirmed:false 2027 (28) ohne offizielles Exakt-Datum — re-check Herbst/Winter 2026:** woerthersee-gravel-race (offiziell „18.04.2027 vorläufig"), allgaeu-gravel-ride-isny (vecnum nur 2026), carinthia200-villach (carinthia200.com Bot-Wall), rosenheimer-radmarathon (Details Ende Dez), 3rides-gran-fondo-weinstrasse (3rides.cc DNS tot, UCI nur 2026), zugspitz-arena-gravel-triathlon (nur „für 2027 geplant"), letape-romania/slovenia (nur Pre-Reg), king-of-the-lake (kotl.at „voraussichtlich 18.09.2027" → Datum gesetzt, bleibt false), aarau, arheilger-muehlchen, guenzburg-cross, lipperlandtriathlon, stadttriathlon-forchheim, triathlon-basel, zytturm, 4× XTERRA-Serie (xterraplanet 2027), dublin-city, carinthia200, swim-run-swim-klopeiner, u.a.
- **Rad EU ohne offizielles 2027-Datum:** TOUR Transalp (Startort offen), Etape du Tour (Route nach TdF-Präsentation 22.10.2026 → danach re-check), Haute Route Alps, Il Lombardia GF (Gimondi), The River Gravel, Les 3 Ballons, Portes du Soleil, GFNY Europe (Villard-de-Lans u.a.). Verifikation durch 10-19-Scan: maratona-dles-dolomites (04.07.2027, Lotterie 14.10.–10.11.2026), oetztaler (29.08.), arlberg-giro (01.08., ausverkauft), mallorca-312 (24.04.), vatternrundan (18.–19.06.) — alle bereits confirmed im Repo.
- **2027-Enrichment:** weitere Fokus-Events mit Tiefenfeldern (129 offen); `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert; **ALLE IRONMAN-imageUrls 403-hotlinkgeblockt** → imageUrl bleibt offen; JS-SPA ohne og:image → imageUrl offen.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon, fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge; Backwaterman SwimRun (eingestellt).

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV) | 2026-10-19 (Kalender zeigt nur upcoming bis 18.09.2027, `?year=` ohne Wirkung; keine „ABGESAGT"; 6 confirmed:false→confirmed, 6 neue AT-2027 abgeleitet, 2 weitere AT-Kandidaten→BACKLOG) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-19 (2027 bis ~Mitte Juni, keine „abgesagt"; keine neuen confirmten DE-Tri gefunden) |
| ironman.com (direkt + r.jina.ai) | 2026-10-19 (**komplett blockiert**, 403 über alle Wege; keine IRONMAN-2027-Verifikation möglich → BACKLOG, Datenqualitäts-Flag Frankfurt/Kärnten) |
| challengefamily.com + Race-Sites | 2026-10-19 (erreichbar; Peguera-Mallorca 16.10. + Vieux-Boucau 09.10. + Mogan 17.04. bestätigt; Sanremo/Sandefjord/Forte Village/Barcelona noch ohne 2027) |
| k226.com/events/events.aspx | 2026-10-19 (Discovery; nichts Neues confirmtes) |
| cycloworld.cc/de/kalender-de | 2026-10-19 (Discovery; 2027-Daten auto-gerollt=spekulativ; keine neuen confirmten) |
| hdsports.at/rad + /triathlonkalender | 2026-10-19 (Discovery; nur „?"-Projektionen, nicht übernommen) |
| UCI Gran Fondo World Series 2027 | 2026-10-19 (keine neuen DACH-Events ohne Repo-Eintrag; marmotte/quebrantahuesos/ariegeoise offiziell bestätigt) |
| Veranstalterseiten (confirmed:false + Fokus-Enrichment) | 2026-10-19 (21 Fokus-Events vertieft; 6 Datums-Flips; keine neuen Absagen) |
> Nicht erreichbar 10-19: ironman.com (403 alle Wege), ariegeoise.com (DNS tot → cyclosport-ariegeoise.com), 3rides.cc (DNS tot), carinthia200.com + maratona.it (Bot-Wall), arlberg-giro.com (503 nach Ausverkauf).

---

## Session 2026-10-19 — 21 Fokus-Events mit Tiefenfeldern + 8 neue 2027-Ausgaben + 6 Datums-Flips

Erster Lauf nach Einführung der Tiefenfelder, in dem Fokus-Seiten tatsächlich befüllt wurden (vorher 0/150). Voll-Durchsuchung **aller** Quellen; 7 Agents parallel: 4 Enrichment-Agents (je 5–6 Fokus-Events, direkte Edits gegen **offizielle** Veranstalterseiten + Zitat-Nachweis je Feld), 3 Discovery-Agents (ÖTRV AT-Tri; IRONMAN+Challenge; DTU + cycloworld/hdsports + UCI GFWS). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert.

- **21/150 Fokus-Events mit Tiefenfeldern** (`distances`, tw. `entryFee`/`registrationDeadline`/`startTime`/`participantLimit`) + Beschreibung ≥120 W: ith-hennesee-meschede (voll: Fee/Deadline 25.07.2027/Start 10:45/Limit 380; Rad-Leg-Korrektur 40→45 km), koberbachtal-werdau, muenster-city, mainfrankentriathlon-kitzingen (+Elevation je Strecke/Start 13:00), kallmuenzer (Start 14:00), scharmuetzelsee-bad-saarow (Fee/Deadline/Start 10:00), waltriathlon-brunsbuettel, woerthsee (+Elevation 440), wuerzburg (Fee/Start 08:00), paradiestriathlon-jena, challenge-roth (+Late-Entry-Draw-Korrektur auf „mind. 400"), challenge-mogan (T100 + Standard-Split + 1462 hm), ironman-frankfurt/austria-kaernten/703-alcudia (nur definitorische distances — ironman.com blockt), woerthersee-gravel (4 Strecken + Limit-Prosa), bike-the-lies (Fee/Start 10:00), pirker-grenzerfahrung (9 Strecken + Start 07:00), ruegen-rund-tour, jura-radmarathon (Limit 1500 + MTB/Gravel-Elevation), harzer-radmarathon (Start 05:30).
- **8 neue 2027-Ausgaben** (voll ausgearbeitet, offiziell verifiziert):
  - **Challenge (2, challengefamily.com):** challenge-peguera-mallorca (16.10., Mitteldistanz), challenge-vieux-boucau (09.–10.10., Mitteldistanz).
  - **AT via ÖTRV (6):** xterra-austria (21.08., Cross-Tri Altaussee), jannersee-triathlon (07.08., Sprint Lauterach), suedkaerntner-triathlon (18.–19.09., Mittel/Olympisch Klopeiner See), stadttriathlon-knittelfeld (01.05., Olympisch), luschnouar-ironmaennli (05.06., Sprint Lustenau), poettschinger-aquathlon (28.08.).
- **6 confirmed:false → confirmed** (offizielles Exakt-Datum): swim-run-swim-laengsee (ÖTRV 07.08., Datum 06→07 korrigiert), thermentriathlon-fuerstenfeld (ÖTRV 04.07.), triathlon-kirchbichl (ÖTRV 05.06., Datum 29.05→05.06 korrigiert), marmotte-granfondo-alpes (27.06.), quebrantahuesos (19.06.), ariegeoise (26.06. + websiteUrl→cyclosport-ariegeoise.com, alte Domain DNS-tot).
- **1 Datenfix:** paradiestriathlon-jena-2027 — Kategorien [OD,Sprint]→[Sprint] (Event bietet keine Olympische Distanz), distanceKm 52→25.75, falsches elevationGainM 400 entfernt, distances (Sprint + Einsteiger) ergänzt.
- **Keine neuen BLACKLIST-Einträge** (ÖTRV ohne „ABGESAGT"; keine neuen offiziellen Absagen). poettschinger-triathlon 2027 nicht im ÖTRV, Organisator zurückgetreten → ZU PRÜFEN (nicht angelegt).
- **SEO / Sitemap / noindex:** `npm run build` grün, **1607 pages**, 0 errors. Sitemap **157 URLs** (150 Fokus + 4 Landing + Start/Formulare), `grep -o '/events/' dist/sitemap-0.xml = 150`, past/noindex ausgeschlossen. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-0pfoed` (Harness-Vorgabe; Deployment triggert erst beim Übernehmen auf master).

---

## Session 2026-10-11 — 9 neue 2027-Ausgaben + 25 Enrichment + 1 BLACKLIST

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 6 Agents parallel gegen **offizielle** Quellen (ÖTRV AT-Tri; DTU/k226 DE/EU-Tri; IRONMAN/Challenge via r.jina.ai + JSON-LD-startDate; cycloworld Rad AT/DE; UCI GFWS/GFNY/L'Étape/Classics Rad EU; Enrichment bestehender 2027-Events). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten.

- **9 neue 2027-Dateien:** Tri (6): keltenman, zugspitz-arena-gravel-triathlon (confirmed:false), o-see-triathlon-uelzen, spreewald-duathlon-vetschau, vierlanden-triathlon-hamburg, infinitri-113-triathlon-peniscola; Rad (3): brezel-race-region-stuttgart, 3rides-gran-fondo-weinstrasse (confirmed:false), ironman-703-mamaia-constanta.
- **25 Bestands-2027 veredelt** (24 imageUrl offiziell + curl-200-geprüft; + tour-of-pembrokeshire distanceKm 169).
- **1 Datenfix:** vierlanden-triathlon-hamburg (kavval-Aggregatorbild entfernt, Kategorien OD/Sprint).
- **1 neuer BLACKLIST-Eintrag:** Backwaterman SwimRun Ottenstein (eingestellt).
- **Keine confirmed:false→confirmed-Flips** (alle 34 Re-checks nur „voraussichtlich"/Aggregator; woerthersee-gravel-race Datum 04-18 gesetzt, bleibt false).
- **SEO / Sitemap:** Build grün, **1599 pages**, Sitemap **514 URLs**, Code intakt.
- **Branch:** `claude/intelligent-clarke-desh2z`.

---

## Session 2026-10-09 — 9 neue 2027-Ausgaben + 5 Datums-Confirms + 25 Enrichment + 1 Dedup

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel gegen **offizielle** Quellen (IRONMAN/Challenge via r.jina.ai + challenge-family; ÖTRV/DTU Tri AT/DE; cycloworld/hdsports Rad AT/DE; UCI GFWS/GFNY/L'Étape/Classics Rad EU; 34× confirmed:false Datums-Nachverfolgung; Enrichment + Phantom-Verifikation).

- **9 neue 2027-Dateien:** Tri (4): ironman-barcelona-calella (confirmed:false), ultra-triathlon-bad-radkersburg, neustaedter-triathlon-donau, swedeman-xtri-are; Rad (5): velofondo-9h11-leipzig, sudety-tour, la-pyreneenne-bagneres (confirmed:false), tour-of-pembrokeshire (confirmed:false), krk-granfondo.
- **5 confirmed:false → confirmed:** ardechoise (09.–12.06.), berliner-volkstriathlon (27.06.), gravelei-suedsteiermark (21.–23.05.), paris-roubaix-challenge (10.04.), styroica (18.09.).
- **25 Enrichment-Felder** (18 imageUrl, 3 distanceKm, 4 elevationGainM).
- **1 Dedup:** granfondo-il-lombardia-2026 entfernt; bergamo-Variante behalten.
- **SEO / Sitemap:** Build grün, **1582 pages**, Sitemap **500 URLs**, Code intakt.
- **Nachtrag 10-10:** 10-09-Lauf per Fast-Forward auf `master`; 9 einzigartige Castle-Race/EU-Events aus nie gemergten Branches dedupliziert angelegt; ladies-tri-breitenbrunn-2026 entfernt (ÖTRV „ABGESAGT"). PRs #13/#15 als überholt zu schließen.

---

> Ältere Session-Summaries (2026-10-03 und früher) in `progress-archive.md`.
