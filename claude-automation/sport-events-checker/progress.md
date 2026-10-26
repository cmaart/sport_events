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
- Stand 10-26 (nach Konsolidierung der Läufe 10-17 bis 10-25): **43/150 Fokus-Events haben `distances[]`**.
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
- Letzter Lauf: 2026-10-25 — **Fokus-Enrichment im Zentrum: 16/150 Fokus-Events mit Tiefenfeldern** (distances/entryFee/registrationDeadline/startTime/participantLimit + Beschreibung ≥120 W, alles offiziell verifiziert). **15 neue 2027-Ausgaben** (10 Roll-forward: schwarzataler-triathlon, jannersee-triathlon, xterra-austria, ferlach-aquathlon, aquathlon-fuerstenfeld, poettschinger-aquathlon, crossduathlon-steyrling, stadttriathlon-knittelfeld, challenge-peguera-mallorca, challenge-vieux-boucau; 5 neu AT: ober-grafendorfer-triathlon, hubiman, tri-x-aquathlon-kufstein, luschnouar-ironmaennli, europe-triathlon-championships-kitzbuehel). **2 Aggregatorbilder entfernt** (paradiestriathlon + woerthsee kavval). Keine Removals/Absagen, keine neuen BLACKLIST-Einträge (Cancellation-Scan ÖTRV/DTU/Challenge/IRONMAN ohne „ABGESAGT").
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
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge
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
- ⚠️ **neu (10-23) — challenge-sandefjord-2027 (NO, confirmed:false):** challengefamily.com-Seite liefert 404 (nicht im 2027-Kalender); challenge-sandefjord.com nur 2026 + „TBA". **Entfernen + BLACKLIST**, wenn weiterhin keine offizielle 2027-Ankündigung.
- **neu (10-09) — la-pyreneenne-bagneres-2027:** 2027 zieht von Bagnères-de-Bigorre nach Saint-Lary-Soulan um (Location bereits Saint-Lary); Slug-Stamm „bagneres" damit geografisch stale, bei 2028 ggf. umbenennen.

### BACKLOG (offene Aufgaben — Stand 10-25)
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
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-25 (2027-Liste durchgegangen, keine „ABGESAGT"; 8 Roll-forwards + 5 neu AT angelegt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-25 (2027 geprüft; mussbach als Lücke erkannt — offizielle Seite fehlt, BACKLOG) |
| ironman.com | 2026-10-25 (WebFetch 403; 70.3-Euro-Rennen weiter ohne offiz. 2027-Datum → BACKLOG; alcudia-mallorca Tiefenfelder Site-down) |
| challengefamily.com/races + Race-Sites | 2026-10-25 (peguera-mallorca + vieux-boucau 2027-Daten offiziell → angelegt; Forte Village/Barcelona/Sanremo/Sandefjord noch kein 2027) |
| k226.com/events/events.aspx | 2026-10-25 (Discovery; keine neuen confirmten Kandidaten) |
| cycloworld.cc/de/kalender-de | 2026-10-25 (Discovery; Bestand bereits vollständig, 2027-Daten auto-gerollt=spekulativ) |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-25 (2027 „nicht fixiert"/auto-gerollt; nur Col d'Allrath offen, marginal, nicht angelegt) |
| UCI Gran Fondo World Series | 2026-10-25 (2027-Qualifier-Liste; DE/CZ/HR/CY bereits vorhanden, nichts Neues) |
| GFNY / L'Étape-Serie / Classics (RCS, Marmotte, Haute Route) | 2026-10-25 (Etape du Tour 2027 jetzt 11.07. offiziell — Ort offen, BACKLOG; sonst keine neuen Termine) |
| Fokus-Veranstalterseiten (Tiefenfeld-Enrichment 16 Events) | 2026-10-25 (offizielle Distances/Fee/Deadline/StartTime/Limit; alle imageUrls per curl 200 geprüft) |
> Nicht erreichbar/geblockt 10-25: ironman.com (403 WebFetch + Hotlink), grenzerfahrung.vcc-pirk.de (503), harz-radmarathon.de (WordPress PHP-500), parndorfer-speedworld-duathlon (keine offizielle Seite auffindbar).

---

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

## Session 2026-10-25 — Fokus-Tiefenfelder (16/150) + 15 neue 2027-Ausgaben

Voll-Lauf mit Schwerpunkt auf dem **Fokus-Set-Enrichment** (Primärziel der Routine seit 10-17). 7 Research-Agents parallel gegen **offizielle** Veranstalter-/Verbandsseiten (4× Fokus-Tiefenfelder, 2× Discovery/Absage-Scan Tri+Rad, 1× Verifikation neuer AT-Events); Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert; alle neuen/geänderten imageUrls per curl auf HTTP 200 geprüft.

- **16 Fokus-Events erstmals mit Tiefenfeldern** (`distances[]`, `entryFee`, `registrationDeadline`, `startTime`, `participantLimit` — nur offiziell belegt) + Beschreibungen auf ≥120 Wörter erweitert: ith-hennesee-triathlon-meschede, koberbachtal-triathlon-werdau, muenster-city-triathlon, scharmuetzelsee-triathlon-bad-saarow, waltriathlon-brunsbuettel, paradiestriathlon-jena (Kategorie korrigiert OD→Sprint), woerthsee-triathlon, wuerzburg-triathlon, kallmuenzer-triathlon, mainfrankentriathlon-kitzingen, woerthersee-gravel-race, bike-the-lies, ruegen-rund-tour, altmuehltal-radmarathon-beilngries, grosse-weserrunde-rinteln (volle Streckentabelle 6 Distanzen) + jura-radmarathon (participantLimit). `entryFee` nur wo 2027-spezifisch/aktuell übernommen; Vorjahres-Preise bewusst weggelassen.
- **2 Aggregatorbilder entfernt** (paradiestriathlon-jena + woerthsee-triathlon kavval; kein offizielles Hero gefunden). **2 offizielle Bilder ergänzt** (ruegen-rund-tour, waltriathlon).
- **15 neue 2027-Ausgaben** (Beschreibung 4–8 Sätze, deutsch, faktenreich; Datum offiziell = ÖTRV/DTU/Challenge-Kalender bzw. Veranstalterseite):
  - **10 Roll-forward (2026→2027):** schwarzataler-triathlon (17.05.), jannersee-triathlon (07.08.), xterra-austria (21.08.), ferlach-aquathlon (10.07.), aquathlon-fuerstenfeld (04.07.), poettschinger-aquathlon (28.08.), crossduathlon-steyrling (05.06.), stadttriathlon-knittelfeld (01.05.), challenge-peguera-mallorca (16.10.), challenge-vieux-boucau (02.–03.10.).
  - **5 neu AT:** ober-grafendorfer-triathlon (08.05., 2026 wegen Bauarbeiten abgesagt, 2027 Comeback), hubiman (18.07., Supersprint-Comeback Murtal), tri-x-aquathlon-kufstein (01.05.), luschnouar-ironmaennli (05.06., Lustenau), europe-triathlon-championships-kitzbuehel (11.–13.06., EM Elite/Para/AK).
- **Nicht angelegt (BACKLOG):** mussbach-triathlon (2026 nur Aggregator-Quelle → offizielle Seite suchen), parndorfer-speedworld-duathlon (keine offizielle Seite), etape-du-tour-2027 (11.07. offiziell, aber Host-Stadt erst nach TdF-Präsentation).
- **Keine Removals/Absagen**, keine neuen BLACKLIST-Einträge: Cancellation-Scan (ÖTRV/DTU/Challenge/IRONMAN) ohne „ABGESAGT"; IRONMAN-70.3-Euro-Rennen + einige Challenge-Herbstrennen weiter ohne offizielles 2027-Datum (WATCH, BACKLOG).
- **3 Fokus-Events nicht anreicherbar (Site-down):** ironman-703-alcudia-mallorca (ironman.com 403), pirker-grenzerfahrung (503), harzer-radmarathon (PHP-500) → Re-check nächster Lauf.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1614 pages**, 0 errors. Sitemap **157 URLs** (150 Fokus-Events + 4 Landing + Start/Formulare); neue Nicht-Fokus-Events korrekt noindex und nicht in der Sitemap; Fokus-Set unverändert 150 (sticky, kept 150). Keine Code-Änderung nötig.
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-9ik7rz` (Harness-Vorgabe; Deployment triggert erst beim Übernehmen auf master).

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
