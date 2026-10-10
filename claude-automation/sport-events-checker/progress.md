# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **390 Events** (Stand 10-10; confirmed 358, confirmed:false 32). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, die ab Herbst/Winter 2026 gestaffelt erscheinen), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Kategorie-Enums (WICHTIG beim Neuanlegen — Werte aus `src/lib/types.ts`)
- **Cycling:** Kriterium, Gran Fondo, Radmarathon, RTF, Gravel, Rundstreckenrennen, Etappenrennen, Berg, Zeitfahren. (KEIN „MTB"/„Bikepacking"/„Jedermann" — MTB-Marathons → Radmarathon; XC-Rundkurs → Rundstreckenrennen; Jedermann-Rennen → Gran Fondo; Bikepacking/Ultra → RTF.)
- **Triathlon:** Sprintdistanz, Olympische Distanz, Mitteldistanz, T100, Langdistanz, Cross-Triathlon, Aquathlon, Duathlon. (KEIN „Sprint"/„Olympisch"/„Swimrun" — Swimrun → Aquathlon; XTRI/Ultra → Langdistanz.)

### Kennzahlen (Stand: 2026-10-10)
- Events gesamt: **1516** | Saison 2026: 1126 (upcoming ≥ heute **44** | past/noindex **1082**) | Saison 2027: **390** (confirmed 358 | confirmed:false 32)
- **Konsolidierung 10-10:** 9 verifizierte Events aus nicht gemergten Branches (10-01/10-05/10-07) auf master gerettet (Dubletten verworfen), 1 abgesagtes Event entfernt (ladies-tri-breitenbrunn). Build 1590 pages, Sitemap 509 URLs. Details im 10-10-Eintrag unten.
- Letzter Lauf: 2026-10-09 — **9 neue 2027-Ausgaben** (Tri 4: ironman-barcelona-calella confirmed:false, ultra-triathlon-bad-radkersburg, neustaedter-triathlon-donau, swedeman-xtri-are; Rad 5: velofondo-9h11-leipzig, sudety-tour, la-pyreneenne-bagneres confirmed:false, tour-of-pembrokeshire confirmed:false, krk-granfondo), **5 confirmed:false→confirmed** (ardechoise, berliner-volkstriathlon, gravelei-suedsteiermark, paris-roubaix-challenge, styroica), **25 Enrichment-Felder** (18 imageUrl, 3 distanceKm, 4 elevationGainM) + ardechoise dates korrigiert (08.→**09.06.**), **1 Dublette entfernt** (granfondo-il-lombardia-2026 = gran-fondo-il-lombardia-bergamo-2026).
- Build zuletzt grün: **1582 pages**, 0 errors; Sitemap **500 URLs** (nur indexierbar), alle 9 neuen `-2027` enthalten, entfernte Dublette raus, past/noindex ausgeschlossen.
- Datenqualität (upcoming, Stand 10-09): thin **7** (alle Rest-2026, Okt/Nov, bald past — niedrige Prio); missing distanceKm **17**; missing elevationGainM **208**; missing imageUrl **146**. Hinweis: viele fehlende Elevation-Werte sind offiziell nicht publiziert (Agents verifiziert) → nicht schätzen.

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
- **neu (10-09) — la-pyreneenne-bagneres-2027:** 2027 zieht von Bagnères-de-Bigorre nach Saint-Lary-Soulan um (Location bereits Saint-Lary); Slug-Stamm „bagneres" damit geografisch stale, bei 2028 ggf. umbenennen.

### BACKLOG (offene Aufgaben — Stand 10-09)
- **IRONMAN 2027-Termine noch nicht veröffentlicht (ihre 2026-Ausgaben finden erst Okt 2026 statt → re-check ab Nov 2026 via ironman.com/r.jina.ai):** 70.3 Gdynia, Kraków, Poznań, Warsaw, Hradec Králové, Málaga, Poreč, Versailles, Costa Navarino, Cascais (70.3 + Full), 5150 Cervia. **Barcelona-Calella** als confirmed:false (2027-10-03) neu angelegt — exaktes Datum nachtragen sobald ironman.com es nennt.
- **Challenge Herbst-Rennen 2027 (challengefamily.com-Kalender endet aktuell 12.09.2027):** Peguera-Mallorca, Sanremo (gar nicht gelistet), Vieux-Boucau, Forte Village, Barcelona. challenge-sandefjord bleibt confirmed:false (kein offizielles 2027-Datum; challengefamily.com/races/challenge-sandefjord 404, aber eigene Seite live → Flag für nächstes Quartal).
- **confirmed:false 2027 (32) — exaktes Datum nachtragen sobald offiziell:** viele nennen offiziell nur „voraussichtlich/provisorisch" (aarau, arheilger-muehlchen, guenzburg-cross, king-of-the-lake, lipperlandtriathlon, stadttriathlon-forchheim, triathlon-basel, woerthersee-gravel-race, zytturm, marmotte-granfondo-alpes, die 4 XTERRA xterraplanet) oder nur Monat/Fortführung (allgaeu-gravel-ride-isny, carinthia200-villach, dublin-city, letape-romania/slovenia, quebrantahuesos, rosenheimer-radmarathon, swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, triathlon-weiden, triatlon-kocevje, hansbergland). **ariegeoise-2027:** ariegeoise.com DNS nicht aufgelöst (10-09) → Domain nächsten Lauf erneut prüfen.
- **Rad AT/DE ohne offizielles 2027-Datum (10-09 geprüft, alle noch nicht fixiert):** tour d'energie Göttingen (503), brezel-race (503), brockenheroes, salt&lake-trail, velowino (sucht 2027-Ort), lidl-deutschland-tour (Sponsor bis 2028), saarschleifen (Anmelde-Menü 2027 = Fortführung, kein Datum), nockbike (503), löwensteiner-berge. Plus ~50 hdsports-Discovery-Namen mit nur „nicht fixiert"-Datum (Rhön 300, Rennsteigride, Alb Extrem, Albstadt-Bike-Marathon, Hegau Gravel, Glemmride, Pyramidenkogel Hero, OÖ Classics, Granitmarathon, Race Around Niederösterreich, diverse ZF-CUP-EZF …) — re-check Nov 2026–Feb 2027.
- **Rad EU ohne offizielles 2027-Datum:** TOUR Transalp/MYTRANSALP (Datum offiziell **20.–26.06.2027** bestätigt, aber Startort unveröffentlicht/mytransalp.com 503 → nur Startort fehlt zum Anlegen), Etape du Tour (Route erst nach TdF-Präsentation **22.10.2026** → danach re-check), Haute Route Alps (2027 Megève–Chambéry, keine Termine), Il Lombardia GF (Gimondi), Portes du Soleil (Rad-Seite 403; Pass'Portes MTB/Gravel offiziell 25.–27.06.2027 = RTF, separates Event), The River Gravel (Bouillon, BE; Gravel Earth Series 2027, kein Datum), Les 3 Ballons (Ronchamp, Vosges), Tour of Pembrokeshire als confirmed:false (22.05.) angelegt.
- **Tri AT/DE/EU ohne 2027-Datum:** DTU-Kalender Seite 2+ (Jul–Dez 2027) nicht per Fetch ladbar (JS-Pagination) → alternative Query nächsten Lauf. Spreewald-Duathlon 2027 (01.05., Brandenburg, DTU-bestätigt, keine Veranstalterseite/Distanzen), Swim and Run TV1848 Coburg (06.03.2027, DTU), neustaedter-triathlon-donau websiteUrl-Follow-up (Clubseite zeigt noch 2026).
- **2027-Enrichment:** `registrationUrl` nachtragen, sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert; istria-granfondo-2027 auf 112 km/1745 Hm abgeglichen (offizielle UCI-Strecke). JS-SPA-Seiten ohne og:image (marmotte, marcialonga, woerthersee-gravel, ostalb-giro, granfondo-del-mugello, dreilaendergiro, neusiedlersee, kaernten-radmarathon, quebrantahuesos, wachau) → imageUrl bleibt offen.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-09 (2027 ~11 Events; keine „ABGESAGT"; 1 neu: ultra-triathlon-bad-radkersburg) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-09 (2027 bis ~20.06 sichtbar; 1 neu: neustaedter-triathlon-donau; Seite 2+ JS-gesperrt) |
| ironman.com (via r.jina.ai-Reader, direkt 403) | 2026-10-09 (2027-Termine noch TBD; Barcelona-Calella Reg offen → confirmed:false angelegt; 18 BACKLOG) |
| challengefamily.com + Race-Sites | 2026-10-09 (2027-Kalender bis 12.09.; Herbstrennen noch ohne 2027-Datum) |
| k226.com/events/events.aspx | 2026-10-09 (Discovery) |
| cycloworld.cc/de/kalender-de | 2026-10-09 (Discovery) |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert, alle 9 Seiten) | 2026-10-09 (meist „nicht fixiert" 2027) |
| UCI Gran Fondo World Series | 2026-10-09 (Sudety Tour CZ 2027 bestätigt + angelegt) |
| GFNY / L'Étape-Serie / Classics (RCS, Marmotte, Haute Route) | 2026-10-09 |
| Veranstalterseiten aller confirmed:false 2027 + 2026-Events (2027-/Absage-Scan) | 2026-10-09 (5 confirmed; krk/swedeman-2027 angelegt) |
> Nicht erreichbar 10-09: mytransalp.com (503), tour-d-energie.de (503), brezel-race.de (503), nockbike (503), ironmanczech.com (503), ariegeoise.com (DNS), lapyreneennecyclo/Portes-du-Soleil-Rad (403).

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
- **SEO / Sitemap / noindex:** `npm run build` grün, **1572 pages**, 0 errors. Sitemap 509 URLs (nur indexierbar), alle 25 neuen `-2027` enthalten, entfernte Dubletten raus, Versailles wieder enthalten. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.

---

## Session 2026-09-24 — Großwelle 2027: 306 neu (erster Lauf ohne Mengen-Limit) + ~35 Enrichment + 5 Removals

Erster Lauf nach Aufhebung des 15er-Limits (User-Wunsch) und mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel (ÖTRV, DTU+k226, IRONMAN/Challenge, cycloworld AT/DE, Rad EU/UCI, Enrichment), alle Termine gegen offizielle Veranstalter-/Serienseiten; Aggregatoren nur Discovery.

- **306 neue 2027-Dateien** (282 confirmed, 24 confirmed:false; fast alle als Folgeausgabe mit gleichem Slug-Stamm, Beschreibung neu geschrieben mit 2027-Datum/Auflage/Neuerungen; alte 2026-registrationUrls bewusst entfernt; nicht verifizierbare Bilder entfernt):
  - Triathlon AT 20 (ÖTRV) · Triathlon DE/EU 134 (DTU/k226, inkl. neu Munich Triathlon + ChtriMan Gravelines) · IRONMAN/Challenge 29 · Rad AT/DE 76 (cycloworld, inkl. SURM) · Rad EU 47 (UCI/Classics/L'Étape/GFNY/Sella Ronda).
  - Neue Stämme: ironman-les-sables-dolonne (70.3→Volldistanz), ironman-knokke-heist (erste belgische Volldistanz), ironman-5150-erkner.
- **Korrekturen Bestand:** ironman-703-duisburg-2027 (15.08.→**29.08.**, confirmed, Strecke Regattabahn), erkner-2027 confirmed (unbelegte Hm + falsche WM-Quali raus), challenge-sandefjord (Rad 85 km), mogán (1.462 Hm statt Lauf-Hm), cesenatico/salou/samorín/almere/turku elevation; desafio-donana-2026 **04.→17.10.** (FETRI, XVI. Ausgabe), vuelta-ibiza distanceKm 300→164, cyclotour-du-leman Gran Fondo→RTF, istria300 302 km/5.300 Hm, uec-varese 2.120 Hm, letape-czech-flat 04.→03.10.; + ~20 weitere Beschreibungs-/Bild-/URL-Fixes (Enrichment-Agent 25 Dateien).
- **5 Removals:** muerzer-oberland-duathlon-2026 (ÖTRV „ABGESAGT"), granfondo-pag-2026 (Phantom, 7. Ausgabe erst 15.05.2027), bergzeitfahren-schmelz-lollar-2026 + rodltal-bergkaiser-2026 (abgesagt) → BLACKLIST + CLAUDE.md. IRONMAN 70.3 Knokke-Heist „Discontinued" + 2027-Pausen (Fichkona, Montafon M3, Bayrisch Lettn, RügenChallenge) dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1547 pages**, 0 errors. Sitemap 508 URLs (nur indexierbar), 21 Jahres-Landingpages 2027; entfernte + past URLs nicht enthalten; noindex stichprobenartig geprüft. Keine Code-Änderung.

---

> Ältere Session-Summaries (2026-09-23 und früher) in `progress-archive.md`.
