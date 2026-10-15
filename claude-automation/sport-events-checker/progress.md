# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **408 Events** (Stand 10-15; confirmed 377, confirmed:false 31). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine, die ab Herbst/Winter 2026 gestaffelt erscheinen — alle 10-15 noch 2026-startDate), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Kategorie-Enums (WICHTIG beim Neuanlegen — Werte aus `src/lib/types.ts`)
- **Cycling:** Kriterium, Gran Fondo, Radmarathon, RTF, Gravel, Rundstreckenrennen, Etappenrennen, Berg, Zeitfahren. (KEIN „MTB"/„Bikepacking"/„Jedermann" — MTB-Marathons → Radmarathon; XC-Rundkurs → Rundstreckenrennen; Jedermann-Rennen → Gran Fondo; Bikepacking/Ultra → RTF.)
- **Triathlon:** Sprintdistanz, Olympische Distanz, Mitteldistanz, T100, Langdistanz, Cross-Triathlon, Aquathlon, Duathlon. (KEIN „Sprint"/„Olympisch"/„Swimrun" — Swimrun → Aquathlon; XTRI/Ultra → Langdistanz.)

### Kennzahlen (Stand: 2026-10-15)
- Events gesamt: **1534** | Saison 2026: 1126 (upcoming ≥ heute **30** | past/noindex **1096**) | Saison 2027: **408** (confirmed 377 | confirmed:false 31)
- Letzter Lauf: 2026-10-15 — **9 neue 2027-Ausgaben** (alle confirmed:true; Tri 8: jannersee-triathlon, xterra-austria, suedkaerntner-triathlon, stadttriathlon-knittelfeld, aquathlon-fuerstenfeld, luschnouar-ironmaennli [alle AT/ÖTRV-Kalender-bestätigt], setubal-triathlon [PT], ayia-napa-triathlon [CY]; Rad 1: race-around-niederoesterreich [AT, war BACKLOG-Guess → ran-bike.at nennt jetzt offiziell 28.–29.05.2027]) + **3 Date-Flips confirmed:false→true** (carinthia200-villach 09-19→**23.05.2027** + distanceKm 200→197, letape-slovenia 05.09., quebrantahuesos 19.06. — alle offiziell gegengeprüft) + **7 neue imageUrl** (race-across-germany, rund-um-koeln, schwarzwald-ultra-radmarathon, slateman, apfelland, kulturstadttriathlon-weimar, ronde-van-noord-holland — alle per curl 200/≥1200px). **Keine Absagen/BLACKLIST-Neuzugänge** (ÖTRV ohne „ABGESAGT"); IRONMAN/Challenge alle noch BACKLOG (2027-Termine noch nicht veröffentlicht). challenge-st-poelten aufgelöst (läuft 2027 als ironman-703-st-poelten, bereits im Repo).
- Build zuletzt grün: **1608 pages**, 0 errors; Sitemap **512 URLs** (nur indexierbar), alle 9 neuen `-2027` enthalten, past/noindex ausgeschlossen.
- Datenqualität (upcoming, Stand 10-15): thin **0**; missing distanceKm **17**; missing elevationGainM ~**217** (meist offiziell nicht publiziert — Agents verifiziert, nicht schätzen); missing imageUrl ~**122** 2027 (viele JS-SPA ohne og:image + alle IRONMAN-Bilder 403-hotlinkgeblockt).

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
- **neu (10-09) — la-pyreneenne-bagneres-2027:** 2027 zieht von Bagnères-de-Bigorre nach Saint-Lary-Soulan um (Location bereits Saint-Lary); Slug-Stamm „bagneres" damit geografisch stale, bei 2028 ggf. umbenennen.

### BACKLOG (offene Aufgaben — Stand 10-11)
- **IRONMAN 2027-Termine noch nicht veröffentlicht (10-11 via ironman.com JSON-LD geprüft — alle zeigen noch ihr 2026-startDate → re-check ab Nov 2026):** 70.3 Gdynia, Kraków, Poznań, Warsaw, Hradec Králové, Málaga, Poreč, Versailles, Costa Navarino, Cascais (70.3 + Full), 5150 Cervia. **Barcelona-Calella** bleibt confirmed:false (ironman.com zeigt noch 2026-10-04). **NEU 10-11 angelegt:** ironman-703-mamaia-constanta (26.09.2027, erstes IM Rumänien, Reg offen).
- **Challenge Herbst-Rennen 2027 (challengefamily.com-Kalender endet weiter 12.09.2027):** Peguera-Mallorca, Sanremo, Vieux-Boucau, Forte Village, Barcelona — Einzelseiten zeigen noch 2026-Daten. challenge-sandefjord bleibt confirmed:false (nicht im 2027-Kalender; eigene Seite nur 2026).
- **confirmed:false 2027 (31) — exaktes Datum nachtragen sobald offiziell:** 10-15 alle re-checked. **3 geflippt** (carinthia200-villach→23.05., letape-slovenia→05.09., quebrantahuesos→19.06.). Weiter nur provisorisch/Monat/„soll"/„vorläufig": aarau, arheilger-muehlchen, guenzburg-cross, king-of-the-lake, lipperlandtriathlon, stadttriathlon-forchheim, triathlon-basel („soll" 28./29.08.), zytturm, marmotte-granfondo-alpes („to be confirmed" 27.06.), 4× XTERRA (xterraplanet 2027 „not yet confirmed"), allgaeu-gravel-ride-isny, dublin-city („back in 2027", kein Tag), letape-romania (nur „pre-înscriere", kein Tag), rosenheimer-radmarathon (Details bis Ende Dez), swim-run-swim-laengsee, thermentriathlon-fuerstenfeld, triathlon-kirchbichl, triathlon-weiden (nur „Mai 2027"), triatlon-kocevje (nur „avgust 2027"), hansbergland (nur Festival-Fenster), la-pyreneenne-bagneres, tour-of-pembrokeshire, 3rides-gran-fondo-weinstrasse, zugspitz-arena-gravel-triathlon, woerthersee-gravel-race (04-18 „vorläufig"). **ariegeoise-2027:** ariegeoise.com DNS weiter tot (10-15).
- **Rad AT/DE ohne offizielles 2027-Datum (10-11):** tour d'energie Göttingen (Ende Apr), brockenheroes, salt&lake-trail, velowino (Ort unklar), saarschleifen, nockbike, löwensteiner-berge, Rhön 300, Rennsteigride, Alb Extrem, Albstadt-Bike-Marathon, Hegau Gravel, Glemmride, OÖ Classics, Granitmarathon, Pyramidenkogel Hero (10-15 bestätigt: IST ein Rad-Bergzeitfahren „Berg", kein Turmlauf; mountainsport.at noch ohne 2027) — re-check Nov 2026–Feb 2027. **race-around-niederoesterreich NEU 10-15 angelegt** (ran-bike.at nennt offiziell 28.–29.05.2027, confirmed; war 2peak-Guess). **brezel-race NEU 10-11** (19.09.2027, confirmed).
- **Rad EU ohne offizielles 2027-Datum:** TOUR Transalp (20.–26.06.2027 fix, Startort offen), Etape du Tour (Route erst nach TdF-Präsentation **22.10.2026** → danach re-check), Haute Route Alps (keine Termine), Il Lombardia GF (Gimondi, kein 2027-Datum), The River Gravel (Bouillon BE), Les 3 Ballons (Ronchamp, Vosges), Portes du Soleil Rad (Champéry CH, ~20.06.2027 unbestätigt), GFNY Europe (Villard-de-Lans ~Mai, Grand Ballon/Vaujany/Orcières/Uppsala kein Datum). **3rides-gran-fondo-weinstrasse NEU 10-11** (confirmed:false, 10.04.).
- **Tri AT/DE/EU ohne 2027-Datum:** DTU-Kalender zeigt 2027 nur bis ~20.06 (rolling) → Herbst-2027 nächsten Lauf re-scannen. Offen: Swim and Run TV1848 Coburg (06.03.2027 DTU, Aquathlon, keine Veranstalterseite/Distanzen), Wolfsburger Crossduathlon (07.03.2027 DTU vs 28.02 hdsports, keine offizielle Seite), Grafman MD (GB, Grafham Water England — NICHT Irland; ATW-Seite JS/CAPTCHA, Aggregatoren 06.06.2027), Obernai (FR)/Roadford Lake (GB), FR-Ikonen Embrunman (15.08.-Tradition, nur 2026 online), Alpe d'Huez Triathlon, Gérardmer — alle noch kein offizielles 2027-Datum. **Setubal (PT) + Ayia Napa (CY) 10-15 angelegt** (offizielle Seiten nennen 02.05. bzw. 21.03.2027). **AT-Tri re-check (10-15, ÖTRV-2027-Kalender jetzt teilbefüllt):** NEU 10-15 angelegt (ÖTRV-bestätigt): jannersee, xterra-austria, suedkaerntner, stadttriathlon-knittelfeld, aquathlon-fuerstenfeld, luschnouar-ironmaennli. Offen (noch kein 2027-Datum): steiraman, kraigerseetriathlon (ausverkauft 2026, „see you next year"), schwarzataler, svsee-cross, poettschinger (Organisator-Abschied nach 35. Ausgabe → Absage-Risiko, gezielt Nachfolge prüfen), starlim-city-triathlon-wels, tri-x-aquathlon (ÖTRV 01.05.2027, aber keine Veranstalterdetails → thin-Risiko, erst mit Quelle anlegen). **challenge-st-poelten aufgelöst:** 2027 als IRONMAN 70.3 St. Pölten (bereits `ironman-703-st-poelten-2027`), Challenge-Marke 2027 nicht fortgeführt. **NEU 10-15 (international):** setubal-triathlon (PT, 02.05.), ayia-napa-triathlon (CY, 21.03.).
- **2027-Enrichment:** `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert (fast nie — in GPX/Bildern); **ALLE IRONMAN-imageUrls 403-hotlinkgeblockt** (34 richtige og:images gefunden, keine ladbar) → imageUrl bleibt bei IRONMAN offen. JS-SPA ohne og:image (dreilaendergiro, bodensee-radmarathon, neusiedlersee, wachau, allgaeu-gravel-ride, marcialonga, munich-triathlon, slovakman, ostseeman u.a.) → imageUrl offen.
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge; Backwaterman SwimRun (eingestellt, s. BLACKLIST).

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-15 (2027 teilbefüllt ~30 Einträge, keine „ABGESAGT"; URL-Slugs tragen Exakt-Datum → 6 neu: jannersee/xterra-austria/suedkaerntner/knittelfeld/aquathlon-fuerstenfeld/luschnouar; tri-x-aquathlon offen) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-15 (JS-gerendert, nur Aggregator-Gegenprüfung; 2027 nur bis ~20.06 rolling; keine neuen bestätigten DE-Tri) |
| ironman.com (via r.jina.ai-Reader, direkt 403) | 2026-10-15 (hero-startDate aller re-checks noch 2026; barcelona-calella + sandefjord bleiben confirmed:false; Vilamoura/St-Pölten bereits im Repo; 12+ BACKLOG) |
| challengefamily.com + Race-Sites | 2026-10-15 (2027-Kalender bis 12.09.; Herbstrennen noch 2026-Daten; keine Flips) |
| k226.com/events/events.aspx | 2026-10-15 (Discovery; setubal PT + ayia-napa CY gegen offizielle Seiten bestätigt) |
| cycloworld.cc/de/kalender-de | 2026-10-15 (Discovery; 2027-Daten auto-gerollt=spekulativ; AT/DE-Rad nur RAN mit offiziellem 2027) |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-15 (Discovery; 2027 „nicht fixiert/Prognose"; keine neuen bestätigten) |
| UCI Gran Fondo World Series + GFNY | 2026-10-15 (2027-EU-Runden GFNY nur Lourdes/Nyborg = bereits im Repo; GFWS noch keine 2027-Termine) |
| L'Étape-Serie / Classics (RCS, Marmotte, Haute Route, Transalp) | 2026-10-15 (Étape wartet TdF-2027-Route 22.10.2026; Marmotte 27.06. „to be confirmed" → bleibt false; Transalp-Startorte Dez; keine Flips) |
| Veranstalterseiten confirmed:false 2027 + 2026-Events (Flip/Absage/imageUrl-Scan) | 2026-10-15 (3 Flips carinthia200/letape-slovenia/quebrantahuesos; 7 imageUrl enriched; keine Absagen) |
> Nicht erreichbar/geblockt 10-15: setubal share-fb.png (Download 000), trinews xterra-Bild (404 → xterra-2027 ohne imageUrl), ariegeoise.com (DNS, Vorlauf), alle ironman.com-Bildhosts (403 Hotlink), ATW/Grafman (JS/CAPTCHA).

---

## Session 2026-10-15 — 9 neue 2027-Ausgaben (alle confirmed), keine Absagen

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 6 Agents parallel gegen **offizielle** Quellen (ÖTRV AT-Tri; DTU/k226 DE/EU-Tri; IRONMAN/Challenge via r.jina.ai; cycloworld/hdsports Rad AT/DE; UCI GFWS/GFNY/L'Étape/Classics Rad EU; Enrichment/Date-Flip). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle 9 Neuanlagen per `npm run build` (Zod) validiert; alle 3 confirmed:true-Termine zusätzlich selbst per curl gegen die offizielle Seite gegengeprüft (RAN „28.-29. Mai 2027", Setúbal „2 de maio de 2027", Ayia Napa „21 MARCH 2027"); alle wiederverwendeten imageUrls per curl auf HTTP 200 geprüft.

- **9 neue 2027-Dateien** (Beschreibungen 5–7 Sätze, deutsch, faktenreich; Slug-Stamm = 2026-Sibling wo vorhanden → „Weitere Ausgaben" greift):
  - **Tri AT (6, ÖTRV-Kalender-bestätigt — URL-Slugs tragen das Exakt-Datum):** jannersee-triathlon (33. Aufl., Lauterach, 07.08., Sprint), xterra-austria (Altaussee, 21.08., Cross-Tri, ohne imageUrl da trinews-Bild 404), suedkaerntner-triathlon (9. Aufl., St. Kanzian/Klopeiner See, 18.09., Mittel/OD/Sprint), stadttriathlon-knittelfeld (01.05., OD+Volkstri), aquathlon-fuerstenfeld (04.07., Aquathlon), luschnouar-ironmaennli (Lustenau, 05.06., Sprint).
  - **Tri international (2):** setubal-triathlon (PT, 11. Aufl., 02.05., Mitteldistanz, Einzel ausverkauft/Staffel offen), ayia-napa-triathlon (CY, 21.03., Sprint/OD/Mittel, Saisonauftakt).
  - **Rad AT (1):** race-around-niederoesterreich (Weitra/Waldviertel, 28.–29.05., Etappenrennen/Ultracycling 600 km; war BACKLOG-2peak-Guess → ran-bike.at nennt jetzt offiziell den Termin, Anmeldung „in Kürze").
- **3 confirmed:false→confirmed-Flips** (offizielles Exakt-Datum verifiziert, selbst per curl gegengeprüft): **carinthia200-villach** (09-19→**23.05.2027**, carinthia200.com „23. Mai 2027" + „Anmeldung 2027 geöffnet"; distanceKm 200→**197**, Beschreibung auf Mai-Termin + Carinthia200/105 aktualisiert), **letape-slovenia** (05.09.2027, slovenia.letapeseries.com), **quebrantahuesos** (19.06.2027, „19 JUNIO 2027"). Hedging-Sätze in den Beschreibungen entfernt. 28 weitere confirmed:false bleiben (offiziell nur „voraussichtlich/soll/geplant/vorläufig" oder nur Monat — Agent korrekt konservativ, u.a. triathlon-basel „soll", king-of-the-lake/aarau/forchheim „voraussichtlich", woerthersee „vorläufig", 4× XTERRA „not yet confirmed", marmotte „to be confirmed").
- **7 neue imageUrl** bei Bestands-2027 (offizielle Hero/og:images, per curl HTTP 200 + ≥1200px gegengeprüft): race-across-germany-aachen-goerlitz, rund-um-koeln-jedermann (Full-Size statt 1024er-Resize), schwarzwald-ultra-radmarathon, slateman-triathlon, apfelland-triathlon (Sanity-CDN), kulturstadttriathlon-weimar, ronde-van-noord-holland-alkmaar. **Verworfen:** 2 „weak" (salzburger-firmen-triathlon Banner mit Text-Overlay, velofondo-9h11 HEAD-404-CDN-Quirk) und 2 nicht-ladbar/instabil (portocolom signierte Ablauf-URL, ostseeman Motiv unklar); Rest der ~120 offenen 2027-imageUrls sind kleine Club-/JS-Seiten mit nur Logo/Platzhalter/<1200px, alle IRONMAN 403.
- **Keine Absagen/BLACKLIST-Neuzugänge:** ÖTRV-2027-Kalender ohne „ABGESAGT"; IRONMAN/Challenge alle re-checks noch mit 2026-hero-startDate (BACKLOG, Flip nach den Herbst-2026-Rennen); Rad EU/AT/DE fast alles noch ohne offizielles 2027-Datum (BACKLOG). **challenge-st-poelten aufgelöst** (2027 als IRONMAN 70.3 St. Pölten, bereits im Repo). **poettschinger** mit Absage-Risiko markiert (Organisator-Abschied), noch nicht blacklisten.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1608 pages**, 0 errors. Sitemap **512 URLs** (nur indexierbar), alle 9 neuen `-2027` enthalten, past/noindex ausgeschlossen. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.
- **Branch-Hinweis:** committet/gepusht auf den zugewiesenen Arbeits-Branch `claude/intelligent-clarke-9jjx1t` (Harness-Vorgabe; master == Branch beim Lauf-Start, Deployment triggert beim Übernehmen auf master).

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
