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
- Stand 10-26 (nach Konsolidierung der Läufe 10-17 bis 10-25): **65/150 Fokus-Events haben `distances[]`** (Stand 10-29).
  Schwächste im Set (zuerst vertiefen, laut `select-index-focus.mjs`): race-across-the-alps-2027,
  black-forest-ultra-gravel-2027, in-velo-veritas-korneuburg-2027, albtal-triathlon-ettlingen-2027,
  heinerman-triathlon-darmstadt-2027, rosa200-faak-am-see-2027, swimrun-rheinsberg-2027,
  allgaeu-gravel-ride-isny-2027, world-games-mountainbiking-saalbach-2027, ironman-703-alcudia-mallorca-2027.
  **Noch offen (Site-down 10-25, Re-check nächster Lauf):** ironman-703-alcudia-mallorca (ironman.com 403),
  pirker-grenzerfahrung (grenzerfahrung.vcc-pirk.de 503), harzer-radmarathon (harz-radmarathon.de PHP-500).

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **418 Events** (Stand 10-26; confirmed 389, confirmed:false 29). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, die ab Herbst/Winter 2026 gestaffelt erscheinen), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Kategorie-Enums (WICHTIG beim Neuanlegen — Werte aus `src/lib/types.ts`)
- **Cycling:** Kriterium, Gran Fondo, Radmarathon, RTF, Gravel, Rundstreckenrennen, Etappenrennen, Berg, Zeitfahren. (KEIN „MTB"/„Bikepacking"/„Jedermann" — MTB-Marathons → Radmarathon; XC-Rundkurs → Rundstreckenrennen; Jedermann-Rennen → Gran Fondo; Bikepacking/Ultra → RTF.)
- **Triathlon:** Sprintdistanz, Olympische Distanz, Mitteldistanz, T100, Langdistanz, Cross-Triathlon, Aquathlon, Duathlon. (KEIN „Sprint"/„Olympisch"/„Swimrun" — Swimrun → Aquathlon; XTRI/Ultra → Langdistanz.)

### Kennzahlen (Stand: 2026-10-26, nach Konsolidierung)
- Events gesamt: **1544** | Saison 2026: 1126 | Saison 2027: **418** (confirmed 389 | confirmed:false 29)
- Letzter Lauf: 2026-10-29 (s. Lauf-Summary: 11 Fokus vertieft, Build 1621 Seiten, 2027-Bestand 420); davor 2026-10-27; davor 2026-10-25 — **Fokus-Enrichment im Zentrum: 16/150 Fokus-Events mit Tiefenfeldern** (distances/entryFee/registrationDeadline/startTime/participantLimit + Beschreibung ≥120 W, alles offiziell verifiziert). **15 neue 2027-Ausgaben** (10 Roll-forward: schwarzataler-triathlon, jannersee-triathlon, xterra-austria, ferlach-aquathlon, aquathlon-fuerstenfeld, poettschinger-aquathlon, crossduathlon-steyrling, stadttriathlon-knittelfeld, challenge-peguera-mallorca, challenge-vieux-boucau; 5 neu AT: ober-grafendorfer-triathlon, hubiman, tri-x-aquathlon-kufstein, luschnouar-ironmaennli, europe-triathlon-championships-kitzbuehel). **2 Aggregatorbilder entfernt** (paradiestriathlon + woerthsee kavval). Keine Removals/Absagen, keine neuen BLACKLIST-Einträge (Cancellation-Scan ÖTRV/DTU/Challenge/IRONMAN ohne „ABGESAGT").
- Build zuletzt grün: **1614 pages**, 0 errors; Sitemap **157 URLs** (150 Fokus-Events + 4 Landing + Start/Formulare), past/noindex ausgeschlossen, neue Nicht-Fokus-Events korrekt noindex.
- Datenqualität: Fokus-Tiefenfelder sind der Hebel (16/150 erledigt). 3 Fokus-Events diesen Lauf nicht anreicherbar (Site-down: ironman-703-alcudia, pirker-grenzerfahrung, harzer-radmarathon → Re-check). missing elevationGainM/imageUrl bei vielen 2027 weiter offen (offiziell nicht publiziert bzw. IRONMAN 403-Hotlink).

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
- Challenge Sandefjord (NO) — keine offizielle 2027-Ankündigung; 2027-Datei am 10-27 entfernt
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge, Steiraman Styrian X-treme Triathlon (steiraman.at: 2027 abgesagt, 2028 erhofft)
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **krk-granfondo (HR) aufgelöst (10-09):** nicht abgesagt — krkgranfondo.com nennt nächste Ausgabe Sa 17.04.2027, Punat, 82 km. `krk-granfondo-2027.json` angelegt (confirmed). 2026-Datei war past.
- ✅ **swedeman-xtri-are (SE) aufgelöst (10-09):** nicht abgesagt — offizielle Seite swextri.com (swedeman.se tot) zeigt nächste Ausgabe XTRI „JULY 10" (Sa → 2027). `swedeman-xtri-are-2027.json` angelegt (10.07.2027, confirmed). Konflikt 10.07 vs 03.07 damit gelöst.
- ✅ **Il Lombardia GF Dublette entfernt (10-09):** `granfondo-il-lombardia-2026.json` (135 km, veraltete Como-Strecke) gelöscht; `gran-fondo-il-lombardia-bergamo-2026.json` (110 km, Bergamo-Area, Valico di Valcava — bestätigt durch gfilombardia.it) behalten. **Offen:** GF Il Lombardia **2027-Datum** nicht verifizierbar (gfilombardia.it zeigt nur 2026) → BACKLOG.
- ℹ️ **in-velo-veritas-korneuburg-2027:** Location bereits korrekt auf Schloss Marchegg (Marchfeld) umgestellt; nur Slug-Stamm „korneuburg" kosmetisch stale. Keine Aktion nötig.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026 (radmarathon.at generisch); loser-bergzeitfahren-altaussee-2026 (salzkammergut-trophy.at).
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon.
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).
- **neu (10-19) — poettschinger-triathlon:** 2027 NICHT im ÖTRV-Kalender; langjähriger Organisator nach der 35. Ausgabe 2026 zurückgetreten, kein Nachfolger/2027-Termin (meinbezirk.at). **Kein Triathlon-2027 anlegen**, bis offizielle Fortführung. Der Aquathlon läuft weiter (`poettschinger-aquathlon-2027`). Bei bestätigter Triathlon-Absage → BLACKLIST.
- **neu (10-19) — IRONMAN-2027-Termine nur Aggregator-Konsens:** `ironman-frankfurt-2027` (27.06.) und `ironman-austria-kaernten-2027` (13.06.) stehen auf confirmed:true ohne offizielle ironman.com-Bestätigung (Seite war geblockt). Bei Erreichbarkeit gegenprüfen, ggf. confirmed:false.
- **neu (10-21) — oetztaler-radmarathon-2027:** offizielle Seite HTTP 503 (blockt Datacenter-IPs), kein offizielles 2027-Datum verifizierbar → `confirmed:false` (29.08. als Schätzung). Re-check sobald oetztaler-radmarathon.com erreichbar.
- ✅ **challenge-sandefjord-2027 entfernt (10-27)** → BLACKLIST.
- **neu (10-09) — la-pyreneenne-bagneres-2027:** 2027 zieht von Bagnères-de-Bigorre nach Saint-Lary-Soulan um (Location bereits Saint-Lary); Slug-Stamm „bagneres" damit geografisch stale, bei 2028 ggf. umbenennen.

### BACKLOG (offene Aufgaben — Stand 10-25)
- **NEU 10-29:** ÖTRV-2027 ohne Datei: Stadttriathlon Amstetten (20.06.), Triathlon Langau (19.06.), Parndorfer Speedworld Supersprint Duathlon (10.05.), Swim Run Maria Enzersdorf (14.03.) → Organiser-Seite prüfen, `-2027` anlegen. DTU-2027 ohne Datei: Kaiserstuhl Cross-Duathlon, Hannover Wasserstadt, Waiblinger, Mühlacker, Eurawasser Trinale, Fürstenwalder Cross-Duathlon (17.04.), Vorpommern Duathlon (02.05.) u.a. (Namensabgleich nötig). challenge-barcelona-2027 (nur „Oktober 2027", confirmed:false) anlegen. ironman-703-st-poelten-2027: ÖTRV zeigt keinen Eintrag, kein offizieller Beleg → gegenprüfen, ggf. confirmed:false. IRONMAN 70.3 Vilamoura unverifiziert. Offen: 3rides-weinstrasse, shades-of-speed (Streckenwerte uneinheitlich), styroica registrationDeadline (Seite nennt 03.09.2026, wohl Tippfehler), erzgebirgstour/heilbronn/viking/kitzbuehel/ostseeman ohne 2027-Details.
- **NEU 10-27:** mussbach-triathlon angelegt (06.06.2027, tv-mussbach.de). Etape du Tour 2027: 11.07., Reg 02.11.2026, Route 22.10. enthüllt (Cluses–Les Saisies laut Medien, offizielle Parcours-Seite nicht lesbar) → anlegen sobald offiziell lesbar (Cluses 46.06/6.58, Gran Fondo). challenge-st-poelten: ÖTRV führt nun IRONMAN 70.3 St. Pölten (Wechsel prüfen). kraigerseetriathlon 2027 ohne Datum; starlim-city-triathlon-wels Domain geblockt; svsee-cross offen. Challenge-Seiten zeigen 2027-Banner → Challenge-Re-check lohnt. Prüfpunkte: bonn-triathlon Distanzen (Startseite 4,2/65/15 passt nicht zu OD/Sprint); dolomitenradrundfahrt „seit 1950“ vs. 1951; pirker-grenzerfahrung region „Sachsen“ wohl falsch + Seite 503; wendelsteinrundfahrt Seite/Bild 403; harzer-radmarathon Datum 25./26.06.2027 uneinheitlich.
- **NEU 10-25 offen:** **mussbach-triathlon-neustadt-weinstrasse-2027** NICHT angelegt — 2026-Datei nur Aggregator-Quelle (triafreunde websiteUrl + kavval-Bild), erst offizielle Veranstalterseite suchen (DTU nennt 06.06.2027). **parndorfer-speedworld-supersprint-duathlon** (ÖTRV 10.05.2027, Burgenland) — keine offizielle Veranstalterseite auffindbar, nur Aggregatoren → anlegen sobald Organiser-Seite gefunden. **etape-du-tour-2027** (letapedutourdefrance.com: 35. Ausgabe **11.07.2027** offiziell, Reg 02.11.2026) — Ort/Route erst nach TdF-2027-Präsentation; lat/lng fehlen → anlegen sobald Host-Stadt bekannt.
- **IRONMAN 2027-Termine noch nicht veröffentlicht (10-11 via ironman.com JSON-LD geprüft — alle zeigen noch ihr 2026-startDate → re-check ab Nov 2026):** 70.3 Gdynia, Kraków, Poznań, Warsaw, Hradec Králové, Poreč, Versailles, Costa Navarino, 5150 Cervia. ✅ 10-23 angelegt: 70.3 Málaga (31.10.2027), 70.3 Cascais + IRONMAN Cascais (23.10.2027). **Neuer Kandidat:** IRONMAN 70.3 Vilamoura-Algarve 03.04.2027 (nur Presse, endurance.biz) → offiziell verifizieren, dann anlegen. **Barcelona-Calella** bleibt confirmed:false (ironman.com zeigt noch 2026-10-04). **NEU 10-11 angelegt:** ironman-703-mamaia-constanta (26.09.2027, erstes IM Rumänien, Reg offen).
- **Challenge Herbst-Rennen 2027:** ✅ **10-25 angelegt** challenge-peguera-mallorca-2027 (16.10.) + challenge-vieux-boucau-2027 (02.–03.10.) — challengefamily.com/races nennt offizielle 2027-Daten. **Weiter offen (nur 2026 auf races-Seite, kein 2027):** Forte Village, Barcelona, Sanremo, Sandefjord → re-check.
- **confirmed:false 2027 (34) — exaktes Datum nachtragen sobald offiziell:** 10-11 alle re-checked, keiner mit offiziellem Exakt-Datum. woerthersee-gravel-race hat jetzt offiziell „April 18, 2027 (subject to final confirmation)" → Datum 04-18 gesetzt, bleibt confirmed:false. Weiter nur provisorisch/Monat: aarau, arheilger-muehlchen, guenzburg-cross, king-of-the-lake, lipperlandtriathlon, stadttriathlon-forchheim, triathlon-basel, zytturm, marmotte-granfondo-alpes, 4× XTERRA (xterraplanet 2027 noch nicht publiziert), allgaeu-gravel-ride-isny, carinthia200-villach, dublin-city, letape-romania/slovenia, quebrantahuesos, rosenheimer-radmarathon, swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, triathlon-weiden, triatlon-kocevje, hansbergland, la-pyreneenne-bagneres, tour-of-pembrokeshire + neu 3rides-gran-fondo-weinstrasse, zugspitz-arena-gravel-triathlon. **ariegeoise-2027:** ariegeoise.com DNS weiter tot (10-11).
- **Rad AT/DE ohne offizielles 2027-Datum (10-11):** tour d'energie Göttingen (Ende Apr), brockenheroes, salt&lake-trail, velowino (Ort unklar), saarschleifen, nockbike, löwensteiner-berge, Rhön 300, Rennsteigride, Alb Extrem, Albstadt-Bike-Marathon, Hegau Gravel, Glemmride, OÖ Classics, Granitmarathon, Race Around Niederösterreich (nur 2peak-Guess), Pyramidenkogel Hero (Verdacht: evtl. Turmlauf, nicht Radrennen) — re-check Nov 2026–Feb 2027. **brezel-race NEU 10-11 angelegt** (19.09.2027, confirmed).
- **Rad EU ohne offizielles 2027-Datum:** TOUR Transalp (20.–26.06.2027 fix, Startort offen), Etape du Tour (**11.07.2027 jetzt offiziell**, aber Host-Stadt/Route erst nach TdF-2027-Präsentation → anlegen sobald Ort bekannt, s. „NEU 10-25 offen"), Haute Route Alps (keine Termine), Il Lombardia GF (Gimondi, kein 2027-Datum), The River Gravel (Bouillon BE), Les 3 Ballons (Ronchamp, Vosges), Portes du Soleil Rad (Champéry CH, ~20.06.2027 unbestätigt), GFNY Europe (Villard-de-Lans ~Mai, Grand Ballon/Vaujany/Orcières/Uppsala kein Datum). **3rides-gran-fondo-weinstrasse NEU 10-11** (confirmed:false, 10.04.).
- **Tri AT/DE/EU ohne 2027-Datum:** DTU-Kalender zeigt 2027 nur bis ~20.06 (rolling) → Herbst-2027 nächsten Lauf re-scannen. Offen: Swim and Run TV1848 Coburg (06.03.2027 DTU, Aquathlon, keine Veranstalterseite/Distanzen), Wolfsburger Crossduathlon (07.03.2027 DTU vs 28.02 hdsports, keine offizielle Seite), Grafman MD (GB, ATW-Seite CAPTCHA), Setubal (PT)/Ayia Napa (CY)/Obernai (FR)/Roadford Lake (GB). **AT-Tri re-check:** ✅ **10-25 via ÖTRV-2027 angelegt:** xterra-austria, jannersee-triathlon, schwarzataler-triathlon, poettschinger-aquathlon, ferlach-aquathlon, aquathlon-fuerstenfeld, crossduathlon-steyrling, stadttriathlon-knittelfeld + 5 neu (ober-grafendorfer-triathlon, hubiman, tri-x-aquathlon-kufstein, luschnouar-ironmaennli, europe-triathlon-championships-kitzbuehel). **Weiter offen (ÖTRV noch ohne 2027 / nur 2026):** challenge-st-poelten (zuerst!), steiraman, kraigerseetriathlon, suedkaerntner, svsee-cross, starlim-city-triathlon-wels. **NEU 10-11 angelegt:** keltenman, o-see-triathlon-uelzen, spreewald-duathlon-vetschau, vierlanden-triathlon-hamburg, infinitri-113-peniscola, zugspitz-arena-gravel-triathlon (false).
- **2027-Enrichment:** `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert (fast nie — in GPX/Bildern); **ALLE IRONMAN-imageUrls 403-hotlinkgeblockt** (34 richtige og:images gefunden, keine ladbar) → imageUrl bleibt bei IRONMAN offen. JS-SPA ohne og:image (dreilaendergiro, bodensee-radmarathon, neusiedlersee, wachau, allgaeu-gravel-ride, marcialonga, munich-triathlon, slovakman, ostseeman u.a.) → imageUrl offen.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge; Backwaterman SwimRun (eingestellt, s. BLACKLIST).

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-29 (4 Seiten, keine ABGESAGT) / 10-25 (2027-Liste durchgegangen, keine „ABGESAGT"; 8 Roll-forwards + 5 neu AT angelegt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-29 (ab 30.10.2026, keine Absagen) / 10-25 (2027 geprüft; mussbach als Lücke erkannt — offizielle Seite fehlt, BACKLOG) |
| ironman.com | 2026-10-29 (weiter 403) / 10-27 (geblockt, erneut 403; Stand 10-25: 70.3-Euro-Rennen weiter ohne offiz. 2027-Datum → BACKLOG; alcudia-mallorca Tiefenfelder Site-down) |
| challengefamily.com/races + Race-Sites | 2026-10-29 (Forte Village 24.10.2027 offiziell, Barcelona nur Okt, Sanremo/St. Pölten kein 2027) / 10-25 (peguera-mallorca + vieux-boucau 2027-Daten offiziell → angelegt; Forte Village/Barcelona/Sanremo/Sandefjord noch kein 2027) |
| k226.com/events/events.aspx | 2026-10-25 (Discovery; keine neuen confirmten Kandidaten) |
| cycloworld.cc/de/kalender-de | 2026-10-25 (Discovery; Bestand bereits vollständig, 2027-Daten auto-gerollt=spekulativ) |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-25 (2027 „nicht fixiert"/auto-gerollt; nur Col d'Allrath offen, marginal, nicht angelegt) |
| UCI Gran Fondo World Series | 2026-10-25 (2027-Qualifier-Liste; DE/CZ/HR/CY bereits vorhanden, nichts Neues) |
| GFNY / L'Étape-Serie / Classics (RCS, Marmotte, Haute Route) | 2026-10-25 (Etape du Tour 2027 jetzt 11.07. offiziell — Ort offen, BACKLOG; sonst keine neuen Termine) |
| Fokus-Veranstalterseiten (Tiefenfeld-Enrichment 16 Events) | 2026-10-25 (offizielle Distances/Fee/Deadline/StartTime/Limit; alle imageUrls per curl 200 geprüft) |
> Nicht erreichbar/geblockt 10-25: ironman.com (403 WebFetch + Hotlink), grenzerfahrung.vcc-pirk.de (503), harz-radmarathon.de (WordPress PHP-500), parndorfer-speedworld-duathlon (keine offizielle Seite auffindbar).

---

## Lauf 2026-10-29 — 11 Fokus-Events vertieft, Ötztaler bestätigt, Étape du Tour 2027 + Forte Village 2027 neu

4 Enrichment-Agents (24→24 Events angefragt, 11 geändert) + 1 Scan-Agent. Neue distances[]: podersdorf, austria-extreme, frankfurt-city (+entryFee), belchen3 (+Fee/startTime), indeland, seestadt, dirndltal-race (+Fee/Deadline), styroica (+Fee/startTime), triathlon-bregenz, brombachsee, audi-triathlon-ingolstadt (voll), grand-escape, race-across-austria-east-west, vienna-triathlon, race-around-austria (voll). Korrekturen: vulkanland (B66-Radstrecke entfällt, Anmeldung ab ~01.12.2026, distanceKm entfernt), styroica (120 km statt 200), brombachsee (Hm entfernt), audi (86 km Rad), dirndltal (Adventure 100 km). Unverändert (Seite ohne 2027-Daten): brezel-race, 3rides-weinstrasse, erzgebirgstour, heilbronn, viking, kitzbuehel, ostseeman, shades-of-speed. Neu: etape-du-tour-2027 (11.07., Cluses–Les Saisies, 154 km/4850 Hm, Reg 02.11.2026), challenge-forte-village-sardinia-2027 (24.10.2027). Flip: oetztaler-radmarathon-2027 confirmed (soelden.com 29.08.2027). challenge-turku-2027 auf confirmed:false (Challenge: TBC). Keine Absagen (ÖTRV/DTU/Challenge ohne ABGESAGT). Build grün, 1621 Seiten.

## Lauf 2026-10-27 — 10 Fokus-Events vertieft, mussbach neu, sandefjord entfernt

4 Enrichment-Agents (offizielle Seiten) + 1 Discovery/Absage-Scan. Vertieft: rosa200-faak-am-see, swimrun-rheinsberg, world-games-mountainbiking-saalbach, harzer-radmarathon (11 Touren, 303 km Hm 3000→2400 laut Ausschreibung), albtal-triathlon (distances, Aggregatorbild entfernt), vintage-tour-donau, glocknerkoenig, kaernten-radmarathon, neuseenman-ferropolis (404-Bild entfernt), bonn-triathlon. Nicht anreicherbar (Seite down/403/nur 2026-Stand/keine belegbaren Felder): ironman-703-alcudia, pirker-grenzerfahrung, wendelsteinrundfahrt, allgaeu-gravel-ride, race-across-the-alps, black-forest-ultra-gravel, in-velo-veritas, heinerman, walchsee, kalkar, myeifelride, silbersee, dolomitenradrundfahrt. Neu: mussbach-triathlon-neustadt-weinstrasse-2027. Entfernt: challenge-sandefjord-2027 (BLACKLIST). Steiraman 2027 pausiert (BLACKLIST). ÖTRV ohne „ABGESAGT“; ironman.com weiter geblockt. Build grün (1619 Seiten), Fokus-Set unverändert 150, 50/150 mit distances. Ziel von 15 vertieften Fokus-Events verfehlt (10), weil viele Veranstalterseiten für 2027 noch nichts publizieren.

## Nachtrag 2026-10-26 — Konsolidierung der Routine-Läufe 10-17 bis 10-25 auf master

Die Cloud-Routine durfte nicht auf master pushen und hat fünf Läufe auf eigene Branches gelegt
(`claude/intelligent-clarke-{x2bque,0pfoed,9f44s6,4mc4gr,9ik7rz}`). Jeder Lauf startete vom selben
master und bearbeitete viele Fokus-Events doppelt. Konsolidiert per Datei (neuester Lauf gewinnt),
dann feldweise: Felder, die nur ein älterer Lauf geändert oder ergänzt hatte, wurden übernommen
(u. a. oetztaler distances/startTime/limit, pirker Hm 3150, scharmuetzelsee Deadline, Beschreibungen
challenge-roth/cyclassics/salzkammergut/mogan). Dublette `skinfit-luschnouar-ironmaennli-2027` in
`luschnouar-ironmaennli-2027` (Stamm der 2026-Datei) zusammengeführt. Aggregatorbilder (kavval) blieben
entfernt. `index-focus.json` neu erzeugt. Session-Details der Läufe 10-17, 10-19, 10-21 und 10-23 stehen
in den Commit-Messages der genannten Branches. **Ab jetzt:** jeder Lauf öffnet einen PR, der nach grünem
Build automatisch gemergt wird (`.github/workflows/auto-merge-routine.yml`).

> Ältere Session-Summaries (2026-10-03 und früher) in `progress-archive.md`.
