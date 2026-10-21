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
- Stand 10-21: **17 Fokus-Events haben jetzt Tiefenfelder** (erste Welle, s. Session 10-21).
  Schwächste im Set (zuerst weiter vertiefen): granfondo-the-millars-castellon-2027,
  gravel-rallye-black-forest-2027, koberbachtal-triathlon-werdau-2027,
  scharmuetzelsee-triathlon-bad-saarow-2027, waltriathlon-brunsbuettel-2027, woerthersee-gravel-race-2027,
  bike-the-lies-2027, ironman-703-alcudia-mallorca-2027, pirker-grenzerfahrung-2027, ruegen-rund-tour-2027.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **399 Events** (Stand 10-11; confirmed 365, confirmed:false 34). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, die ab Herbst/Winter 2026 gestaffelt erscheinen), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Kategorie-Enums (WICHTIG beim Neuanlegen — Werte aus `src/lib/types.ts`)
- **Cycling:** Kriterium, Gran Fondo, Radmarathon, RTF, Gravel, Rundstreckenrennen, Etappenrennen, Berg, Zeitfahren. (KEIN „MTB"/„Bikepacking"/„Jedermann" — MTB-Marathons → Radmarathon; XC-Rundkurs → Rundstreckenrennen; Jedermann-Rennen → Gran Fondo; Bikepacking/Ultra → RTF.)
- **Triathlon:** Sprintdistanz, Olympische Distanz, Mitteldistanz, T100, Langdistanz, Cross-Triathlon, Aquathlon, Duathlon. (KEIN „Sprint"/„Olympisch"/„Swimrun" — Swimrun → Aquathlon; XTRI/Ultra → Langdistanz.)

### Kennzahlen (Stand: 2026-10-21)
- Events gesamt: **1526** | Saison 2026: 1126 (upcoming ≥ heute **15** | past/noindex **1111**) | Saison 2027: **400** (confirmed 365 | confirmed:false 35)
- Letzter Lauf: 2026-10-21 — **17 Fokus-Events mit Tiefenfeldern vertieft** (distances[]/entryFee/registrationDeadline/startTime, nur offiziell belegt) + **1 neue 2027-Ausgabe** (xterra-austria, 20.–21.08.2027 Altaussee, organiser+ÖTRV bestätigt) + **3 Datenkorrekturen** (allgaeu Rad 84→92 km, ith-hennesee Rad 40→45 km, wachau Krone 2.200→3.129 hm) + **1 confirmed-Flip** (oetztaler → confirmed:false, offizielle Seite 503/kein offizielles 2027-Datum). Keine Absagen (ÖTRV 2027 ohne „ABGESAGT"), keine Removals.
- Build zuletzt grün: **1600 pages**, 0 errors; Sitemap **157 URLs** (nur indexierbar: 150 Fokus-Events + Startseite + 4 Landingpages + Formulare), past/noindex ausgeschlossen.
- Datenqualität: Tiefenfelder jetzt bei **18 Events** (17 Fokus + xterra). IRONMAN Frankfurt/Austria/Hamburg nur definitorischer Langdistanz-Split (ironman.com + r.jina.ai für Session 403-geblockt). Fees/Startzeiten/Limits vieler 2027-Events offiziell noch nicht publiziert → weggelassen statt geschätzt. Fokus-Tiefenfelder-Fortschritt: 17/150.

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
- **neu (10-21) — oetztaler-radmarathon-2027:** offizielle Seite dauerhaft HTTP 503 (blockt Datacenter-IPs), kein offizielles 2027-Datum verifizierbar; nur Reiseseite nennt „29.08.2027 unter Vorbehalt". → `confirmed:false` gesetzt (Schätzung Ende Aug bleibt, Beschreibung angepasst). Re-check sobald oetztaler-radmarathon.com erreichbar.
- ✅ **krk-granfondo (HR) aufgelöst (10-09):** nicht abgesagt — krkgranfondo.com nennt nächste Ausgabe Sa 17.04.2027, Punat, 82 km. `krk-granfondo-2027.json` angelegt (confirmed). 2026-Datei war past.
- ✅ **swedeman-xtri-are (SE) aufgelöst (10-09):** nicht abgesagt — offizielle Seite swextri.com (swedeman.se tot) zeigt nächste Ausgabe XTRI „JULY 10" (Sa → 2027). `swedeman-xtri-are-2027.json` angelegt (10.07.2027, confirmed). Konflikt 10.07 vs 03.07 damit gelöst.
- ✅ **Il Lombardia GF Dublette entfernt (10-09):** `granfondo-il-lombardia-2026.json` (135 km, veraltete Como-Strecke) gelöscht; `gran-fondo-il-lombardia-bergamo-2026.json` (110 km, Bergamo-Area, Valico di Valcava — bestätigt durch gfilombardia.it) behalten. **Offen:** GF Il Lombardia **2027-Datum** nicht verifizierbar (gfilombardia.it zeigt nur 2026) → BACKLOG.
- ℹ️ **in-velo-veritas-korneuburg-2027:** Location bereits korrekt auf Schloss Marchegg (Marchfeld) umgestellt; nur Slug-Stamm „korneuburg" kosmetisch stale. Keine Aktion nötig.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026 (radmarathon.at generisch); loser-bergzeitfahren-altaussee-2026 (salzkammergut-trophy.at).
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon.
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).
- **neu (10-09) — la-pyreneenne-bagneres-2027:** 2027 zieht von Bagnères-de-Bigorre nach Saint-Lary-Soulan um (Location bereits Saint-Lary); Slug-Stamm „bagneres" damit geografisch stale, bei 2028 ggf. umbenennen.

### BACKLOG (offene Aufgaben — Stand 10-21)
- **Neue AT-Kandidaten (ÖTRV-datiert, 10-21) — Organiser-Cross-Check offen:** Hubiman Kobenz (Steiermark, 18.07.2027, Tri, kein 2026-Sibling), Pöttschinger Aquathlon (28.08.2027, klein, niedrige Prio). xterra-austria-2027 bereits angelegt (organiser 20.–21.08. bestätigt).
- **Aggregator-only (hdsports, kein offizielles 2027-Datum, 10-21):** Sachsenringradrennen, Rhön 300 Schondra, Rennsteigride Schmiedefeld, HeideGravel Taura, Maintal Bike Marathon, Otzberger Bergzeitfahren, Lautertal-Bikemarathon, Alb Extrem, Pyramidenkogel Hero — re-check auf Veranstalterseite.
- **Fokus-Tiefenfelder weiter (133 offen):** restliche Fokus-Events mit distances[]/Startzeit/Gebühr offiziell anreichern; Prio = schwächste im Set (s. FOKUS).
- **IRONMAN 2027-Termine noch nicht veröffentlicht (10-11 via ironman.com JSON-LD geprüft — alle zeigen noch ihr 2026-startDate → re-check ab Nov 2026):** 70.3 Gdynia, Kraków, Poznań, Warsaw, Hradec Králové, Málaga, Poreč, Versailles, Costa Navarino, Cascais (70.3 + Full), 5150 Cervia. **Barcelona-Calella** bleibt confirmed:false (ironman.com zeigt noch 2026-10-04). **NEU 10-11 angelegt:** ironman-703-mamaia-constanta (26.09.2027, erstes IM Rumänien, Reg offen).
- **Challenge Herbst-Rennen 2027 (challengefamily.com-Kalender endet weiter 12.09.2027):** Peguera-Mallorca, Sanremo, Vieux-Boucau, Forte Village, Barcelona — Einzelseiten zeigen noch 2026-Daten. challenge-sandefjord bleibt confirmed:false (nicht im 2027-Kalender; eigene Seite nur 2026).
- **confirmed:false 2027 (34) — exaktes Datum nachtragen sobald offiziell:** 10-11 alle re-checked, keiner mit offiziellem Exakt-Datum. woerthersee-gravel-race hat jetzt offiziell „April 18, 2027 (subject to final confirmation)" → Datum 04-18 gesetzt, bleibt confirmed:false. Weiter nur provisorisch/Monat: aarau, arheilger-muehlchen, guenzburg-cross, king-of-the-lake, lipperlandtriathlon, stadttriathlon-forchheim, triathlon-basel, zytturm, marmotte-granfondo-alpes, 4× XTERRA (xterraplanet 2027 noch nicht publiziert), allgaeu-gravel-ride-isny, carinthia200-villach, dublin-city, letape-romania/slovenia, quebrantahuesos, rosenheimer-radmarathon, swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, triathlon-weiden, triatlon-kocevje, hansbergland, la-pyreneenne-bagneres, tour-of-pembrokeshire + neu 3rides-gran-fondo-weinstrasse, zugspitz-arena-gravel-triathlon. **ariegeoise-2027:** ariegeoise.com DNS weiter tot (10-11).
- **Rad AT/DE ohne offizielles 2027-Datum (10-11):** tour d'energie Göttingen (Ende Apr), brockenheroes, salt&lake-trail, velowino (Ort unklar), saarschleifen, nockbike, löwensteiner-berge, Rhön 300, Rennsteigride, Alb Extrem, Albstadt-Bike-Marathon, Hegau Gravel, Glemmride, OÖ Classics, Granitmarathon, Race Around Niederösterreich (nur 2peak-Guess), Pyramidenkogel Hero (Verdacht: evtl. Turmlauf, nicht Radrennen) — re-check Nov 2026–Feb 2027. **brezel-race NEU 10-11 angelegt** (19.09.2027, confirmed).
- **Rad EU ohne offizielles 2027-Datum:** TOUR Transalp (20.–26.06.2027 fix, Startort offen), Etape du Tour (Route erst nach TdF-Präsentation **22.10.2026** → danach re-check), Haute Route Alps (keine Termine), Il Lombardia GF (Gimondi, kein 2027-Datum), The River Gravel (Bouillon BE), Les 3 Ballons (Ronchamp, Vosges), Portes du Soleil Rad (Champéry CH, ~20.06.2027 unbestätigt), GFNY Europe (Villard-de-Lans ~Mai, Grand Ballon/Vaujany/Orcières/Uppsala kein Datum). **3rides-gran-fondo-weinstrasse NEU 10-11** (confirmed:false, 10.04.).
- **Tri AT/DE/EU ohne 2027-Datum:** DTU-Kalender zeigt 2027 nur bis ~20.06 (rolling) → Herbst-2027 nächsten Lauf re-scannen. Offen: Swim and Run TV1848 Coburg (06.03.2027 DTU, Aquathlon, keine Veranstalterseite/Distanzen), Wolfsburger Crossduathlon (07.03.2027 DTU vs 28.02 hdsports, keine offizielle Seite), Grafman MD (GB, ATW-Seite CAPTCHA), Setubal (PT)/Ayia Napa (CY)/Obernai (FR)/Roadford Lake (GB). **AT-Tri re-check (ÖTRV noch leer, Veranstalterseiten nur 2026):** challenge-st-poelten (zuerst!), xterra-austria, steiraman, jannersee, kraigerseetriathlon, suedkaerntner, schwarzataler, svsee-cross, poettschinger (Organisator-Rücktritt → Absage-Risiko), starlim-city-triathlon-wels. **NEU 10-11 angelegt:** keltenman, o-see-triathlon-uelzen, spreewald-duathlon-vetschau, vierlanden-triathlon-hamburg, infinitri-113-peniscola, zugspitz-arena-gravel-triathlon (false).
- **2027-Enrichment:** `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert (fast nie — in GPX/Bildern); **ALLE IRONMAN-imageUrls 403-hotlinkgeblockt** (34 richtige og:images gefunden, keine ladbar) → imageUrl bleibt bei IRONMAN offen. JS-SPA ohne og:image (dreilaendergiro, bodensee-radmarathon, neusiedlersee, wachau, allgaeu-gravel-ride, marcialonga, munich-triathlon, slovakman, ostseeman u.a.) → imageUrl offen.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge; Backwaterman SwimRun (eingestellt, s. BLACKLIST).

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-21 (2027-Liste bis 18.09. ohne „ABGESAGT"; neue Kandidaten Hubiman 18.07, XTERRA Austria 21.08 → angelegt, Pöttschinger Aquathlon 28.08) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-21 (2027 erste Kalenderseite; alle größeren DE-Tri schon im Repo, nur kleine Swim&Run/Duathlon offen — niedrige Prio) |
| ironman.com (via r.jina.ai-Reader, direkt 403) | 2026-10-21 (**beide 403 für Session geblockt**; Frankfurt/Austria/Hamburg-Tiefenfelder nicht verifizierbar → nur def. Langdistanz-Split) |
| challengefamily.com + Race-Sites | 2026-10-11 (diesen Lauf **nicht** re-gescannt — Fokus-Tiefenfeld-Lauf; nächster Lauf nachholen) |
| k226.com/events/events.aspx | 2026-10-11 (diesen Lauf **nicht** re-gescannt; nächster Lauf) |
| cycloworld.cc/de/kalender-de | 2026-10-21 (**in Wartung**: 302 → onderhoud.html, Kalender nicht verfügbar — nächster Lauf erneut) |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-21 (2027-Daten auto-gerollt/„not fixed" = nur Aggregator; BACKLOG-Liste DE erstellt) |
| UCI Gran Fondo World Series | 2026-10-21 (2027-Frühjahrsqualifier noch nicht offiziell benannt/datiert → re-check Frühjahr 2027) |
| GFNY / L'Étape-Serie / Classics (RCS, Marmotte, Haute Route) | 2026-10-11 (diesen Lauf **nicht** re-gescannt; nächster Lauf) |
| Offizielle Veranstalterseiten (Fokus-Tiefenfelder, 18 Events) | 2026-10-21 (distances/fees/startTime/Termin je offizieller Seite, Quelle+Zitat je Feld; ÖTZTALER 503) |
> Nicht erreichbar 10-21: oetztaler-radmarathon.com (503, auch r.jina.ai + curl), arlberg-giro.com (503, via Presse/Preise-Subpage bestätigt), cycloworld.cc (Wartung), ironman.com-Reader (403). Gebühren Mondsee/Wachau portal-gated (entry.racetime.pro).
> Hinweis: Dieser Lauf priorisierte die Fokus-Tiefenfelder (Hauptziel der Routine); challengefamily/k226/GFNY-Classics nächsten Lauf vollständig re-scannen.

---

## Session 2026-10-21 — 17 Fokus-Events mit Tiefenfeldern + 1 neue Ausgabe + 3 Korrekturen + 1 Confirm-Flip

Fokus-Lauf auf das neue Haupt-Ziel der Routine: die 150 indexierbaren Fokus-Seiten mit den Tiefenfeldern (`distances[]`, `entryFee`, `registrationDeadline`, `startTime`, `participantLimit`) füllen. Vorher hatte **kein einziges** Event Tiefenfelder (Felder erst seit 10-17 im Schema). 3 Research-Agents parallel gegen **offizielle** Seiten (Cancellation/Discovery-Scan; Rad-Tiefenfelder 10 Events; Tri-Tiefenfelder 8 Events); jede Zahl mit Quelle + Zitat, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert.

- **17 Fokus-Events vertieft** (Tiefenfelder nur offiziell belegt; Beschreibungen ≥120 Wörter):
  - **Rad (9):** arlberg-giro (1 Strecke 150/2500, Gebühr 88–110 €, ausgebucht), cyclassics-hamburg (Challenge 110/Experience 60), salzkammergut-trophy (7 Strecken A–G mit km+hm, Start 05:00, Gebühr 39–139 €), mondsee-5-seen (Tour A/B/C, Start 06:30), rad-marathon-tannheimer-tal (4 Strecken + hm), eschborn-frankfurt-jedermann (3 Strecken, Start 08:45, Festpreis 89/129 €), arber-radmarathon (7 Strecken Straße+Gravel, Start 06:00, Anmeldeschluss 21.07.2027), riderman-bad-duerrheim (3 Etappen), wachau-radmarathon (3 Strecken, Start 09:00).
  - **Tri (8):** challenge-roth (Langdistanz-Split), ironman-frankfurt/-austria/-hamburg (nur def. Split — ironman.com 403), world-triathlon-hamburg (Sprint + Kurzdistanz, Meldeschluss 01.09.2027), allgaeu-triathlon (3 Distanzen, Start 07:45, Gebühr ab 159/429 €), ith-hennesee-meschede (4 Distanzen, Start 10:45, Meldeschluss 16.06.2027), muenster-city (4 Distanzen inkl. Inklusion).
- **3 Datenkorrekturen** (offizielle Strecken-Daten vs. bisherige Beschreibung): allgaeu-triathlon Rad **84→92 km**, ith-hennesee Olympisch Rad **40→45 km**, wachau Krone Champions **2.200→3.129 hm** (+ distanceKm 200→202).
- **1 neue 2027-Ausgabe:** xterra-austria-2027 (Altaussee, Steiermark, 20.–21.08.2027, Cross-Triathlon; xterraplanet.com + ÖTRV bestätigt; Full 1,5/34/10 Start 10:00, Sprint 0,75/17/5 Start 13:00). Slug-Stamm = 2026-Sibling → „Weitere Ausgaben" greift. Nicht im Fokus-Set (sticky, kein freier Platz).
- **1 confirmed-Flip:** oetztaler-radmarathon-2027 → **confirmed:false** (offizielle Seite dauerhaft HTTP 503, kein offizielles 2027-Datum verifizierbar; nur Reiseseite „unter Vorbehalt"). Datum-Schätzung Ende Aug bleibt, Beschreibung angepasst.
- **Keine Absagen / keine Removals:** ÖTRV-2027-Kalender (bis 18.09.) ohne „ABGESAGT"; AT-Fokus-Tri als lebend bestätigt. Keine neuen BLACKLIST-Einträge.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1600 pages**, 0 errors. Sitemap **157 URLs**, `grep -c '/events/'` = **150** = Fokus-Zahl, past/noindex ausgeschlossen. `select-index-focus.mjs` ohne Flags: kept 150, added 0, dropped 0. **Keine Code-Änderung nötig.**
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-9f44s6` (Harness-Vorgabe). Die Routine nennt master; der Branch-Vorgabe wird gefolgt, Übernahme auf master wie bisher durch den User → erst dann Deployment.

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
