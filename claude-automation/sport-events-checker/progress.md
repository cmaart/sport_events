# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **375 Events** (Stand 10-07; confirmed 344, confirmed:false 31). **Timing-Hinweis:** Anfang Oktober veröffentlichen die meisten AT/DE-Amateurveranstalter + IRONMAN/Challenge ihre 2027-Termine noch NICHT (erst Herbst/Winter 2026). Darum dieser Lauf wenige Neuanlagen, viel Enrichment. Nächste Läufe (Nov 2026–Feb 2027): BACKLOG-re-checks, confirmed:false → exaktes Datum, fehlende Felder nachziehen.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) für das 100er-Format (2/80/18 = 100 km, Challenge Family + PTO). `distanceKm: 100`; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`.

### WATCH — PTO/Challenge-Family-Rebrand ab Saison 2027 (NEU 10-07)
- Juli 2026 hat PTO die Mehrheit an Challenge Family übernommen und startet ab Saison 2027 die **„Triathlon World Tour"**. Laut triathlete.com werden **Mitteldistanz-Challenge-Rennen 2027 als „T100 Challenger"-Events umbenannt** (lokale Veranstalter bleiben); Challenge Family behält nur Volldistanz (Flaggschiff DATEV Challenge Roth). Offizielle 2027-Challenger-Kalender noch nicht publiziert. **Folge:** Für Challenge-Herbstrennen (Peguera, Sanremo, Vieux-Boucau, Forte Village, Barcelona) KEINE 2027-Dateien anlegen, bis der Triathlon-World-Tour-/Challenger-Kalender steht. Betrifft auch bestehende 2027-Challenge-Repo-Events (Cesenatico, Gdansk, Salou, Mogán, Sandefjord, Turku, Almere, Samorin) → bei nächster Prüfung Namen/Status gegen neuen Kalender abgleichen.

### Kennzahlen (Stand: 2026-10-07)
- Events gesamt: **1500** | Saison 2026: 1125 (upcoming ≥ heute **46** | past/noindex **1079**) | Saison 2027: **375** (confirmed 344 | confirmed:false 31)
- Letzter Lauf: 2026-10-07 — **3 neue 2027-Ausgaben** (tour-transalp/MYTRANSALP, ultra-triathlon-bad-radkersburg AT, neustaedter-triathlon-donau DE), **3 confirmed:false→true** (ardechoise 08.→09.06., paris-roubaix-challenge, berliner-volkstriathlon 27.06.), **~20 Bestands-Events veredelt** (8 dünne Beschreibungen neu, 8 distanceKm + 2 elevationGainM ergänzt, Feld-/Datumskorrekturen), **3 Dubletten entfernt**, **2 Datumsfehler** (swedeman 04.→10.07., antalya 15.→06.–08.11.).
- Build zuletzt grün: **1572 pages**, 0 errors; Sitemap **493 URLs** (nur indexierbar), alle 3 neuen `-2027` enthalten.
- Datenqualität (upcoming, Stand 10-07): thin **0**; missing distanceKm **7** (alle offiziell nicht publiziert/Rundkurs); missing elevationGainM **207**; missing imageUrl **161**. Viele fehlende Elevation-Werte sind offiziell nicht publiziert → nicht schätzen.

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
- Mürzer Oberland Naturpark Duathlon (Steiermark) — 26.09.2026 offiziell abgesagt (Achtung: Mürzer Oberland Naturpark*triathlon* ist ein anderes Event, hdsports 26.06.2027 „nicht fixiert" — nicht im Repo, keine Aktion)
- IRONMAN 70.3 Knokke-Heist (BE) — „Discontinued", ab 2027 Volldistanz IRONMAN Belgium Knokke-Heist (eigene Datei)
- Granfondo Pag Okt-2026 — Phantom (7. Ausgabe erst 15.05.2027). 2027-Datei korrekt.
- Bergzeitfahren Schmelz Lollar 2026 + Rodltal-Bergkaiser 2026 — offiziell abgesagt
- Granfondo Bratislava (SK) — „V roku 2026 si dávame pauzu"
- RideLondon 100 (GB), Velothon Wales (GB), IRONMAN 70.3 Edinburgh (GB), Challenge Lisboa (PT), Styrkeprøven Trondheim-Oslo (NO) — eingestellt/abgesagt
- Velothon Berlin — defunct (→ VeloCity, letzte ~2022)
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund). Diesen Lauf (10-07): keine neuen Absagen gefunden.

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **3 Dubletten entfernt (10-07):** goettingen-triathlon-2026 (= goettinger-stadtwerke-volkstriathlon-2026, Aggregator-URL entfernt), kirchenbergrennen-hainfeld-2026 (= landsthalsprint-hainfeld-2026, Slug falsch benannt), starlim-city-triathlon-festiwels-2026 (= starlim-city-triathlon-wels-2026). Je die schlechtere Kopie entfernt; kein 2027-Sibling betroffen.
- ✅ **swedeman-xtri-are-2026 (SE):** Datum 04.→**10.07.2026** korrigiert (offiziell swextri.com „JULY 10 - XTRI"). Event jetzt past; keine 2027-Ausgabe angekündigt → nicht anlegen.
- ✅ **krk-granfondo (HR):** Seite wieder erreichbar; Headline „KRK GRANFONDO CROATIA 2027" (82 km, Start/Ziel Falkensteiner Hotel Park Punat) signalisiert Fortführung, aber **noch kein Tag/Monat** → 2027-Datei noch NICHT anlegen, re-check sobald Datum steht.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026 (radmarathon.at generisch); loser-bergzeitfahren-altaussee-2026 (salzkammergut-trophy.at).
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon.
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).

### BACKLOG (offene Aufgaben — Stand 10-07)
- **IRONMAN 2027 noch „TBD"/zeigt Okt-2026 (Datum ab Herbst/Winter re-check via ironman.com):** 70.3 Gdynia, Krakau, Posen, Warschau, Hradec Králové, Málaga, Poreč (Lizenz „2025–2027" bestätigt, Datum offen), Costa Navarino, Cascais (70.3 + Full), Barcelona-Calella (2026er lief bereits 04.10., noch kein 2027), 5150 Cervia. Slug-Stämme + geschätzte 2027-Termine siehe Agent-Report; r.jina.ai + WebFetch waren diesen Lauf beide 403 → via WebSearch/Organiser-Sites prüfen.
- **Challenge Herbst-Rennen 2027 → WATCH-Block beachten (Rebrand!):** Peguera-Mallorca, Sanremo, Vieux-Boucau, Forte Village, Barcelona — erst anlegen, wenn Triathlon-World-Tour-/T100-Challenger-Kalender 2027 publiziert ist.
- **EU-Rad confirmed:false (Datum nachtragen sobald offiziell):** ariegeoise (Site DNS-Fehler), quebrantahuesos (Site nur 2026), marmotte-granfondo-alpes (Site 503; Tourismus-Seiten „27.06.2027 tbc"), letape-slovenia (Teaser „2027", kein Datum), letape-romania (Vorregistrierung 2027 offen, kein Datum). Außerdem neu/nicht im Repo: L'Étape du Tour 2027 (nach TdF-Präsentation ~22.10.2026), Il Lombardia Gimondi Granfondo (nur 2026), Cyclosportive Portes du Soleil (nur Aggregator-2027), La Pyrénéenne (nur Aggregator).
- **Rad AT/DE ohne 2027-Datum (Veranstalter nur 2026/503, re-check Dez–Jan):** tour-de-kärnten (Ossiach, dormant), nockbike/kaernten-radmarathon, sauerlandride, löwensteiner-berge, brockenheroes, velowino, salt&lake-trail, saarschleifen, lidl-deutschland-tour. **Neu entdeckt (nur Aggregator-Prognose, nicht anlegen):** Rhön 300 Schondra, Rennsteigride, Wachauer Radtage, Maintal Bike Marathon, Everesting Austria Dobratsch, Gravel Peaks Saalfelden, Nockstein Trophy, Adelsberger Bike Marathon Chemnitz, Rund um die Kö Düsseldorf.
- **Tri AT/DE ohne 2027-Datum (hdsports „fixiert" unzuverlässig, Organiser nur 2026, re-check Nov–Jan):** Keltenman Mitterkirchen (keltenman.at 403 → manuell), Triathlon Langau, Jannersee Lauterach, Unterberg Duathlon Kössen; ÖTRV-Kandidaten südkaerntner, amstetten, backwaterman, jannersee, wolfgangsee-strobl, xterra-austria; DTU-Kandidaten datagroup-nürnberg, herzoman, müritz, taunusstein. Spreewald-Duathlon + weitere niedrige Prio.
- **confirmed:false 2027 (31) — exaktes Datum nachtragen sobald offiziell.**
- **2027-Enrichment:** `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM/distanceKm nur wo offiziell publiziert (erzgebirgstour, gravelei, haute-route-alps, in-velo-veritas, nostalrad, vulkanlandaquathlon, berliner-volkstriathlon haben KEINE offiziell publizierte Distanz → nicht schätzen).
- **Keine 2027-Ausgabe:** kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; 2027) | 2026-10-07 (wenige 2027-Einträge, keine „ABGESAGT"; +ultra-triathlon-bad-radkersburg) |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-07 (Volllist gelesen; +neustaedter-triathlon-donau via 2027-Genehmigung) |
| ironman.com (r.jina.ai + direkt beide 403 diesen Lauf) | 2026-10-07 (kein offizielles 2027-Datum für Backlog-Herbstrennen; via WebSearch/Organiser geprüft) |
| challengefamily.com + Race-Sites | 2026-10-07 (nur 2026; PTO-Rebrand ab 2027 → WATCH) |
| k226.com/events/events.aspx | 2026-10-07 (Discovery; nichts Neues über Verbandskalender hinaus) |
| cycloworld.cc/de/kalender-de | 2026-10-07 (voll gelesen; nur Prognose-2027) |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-07 (Rad S.1–3, Tri S.1–4; „fixiert"-Flag unzuverlässig) |
| UCI Gran Fondo World Series 2027 | 2026-10-07 (Kalender listet nur 2026-Qualifier; bekannte 2027 bereits im Repo) |
| L'Étape / GFNY / granfondopag / marmotte u. a. | 2026-10-07 (mytransalp 2027 bestätigt; ardechoise + paris-roubaix 2027 bestätigt) |
| Veranstalterseiten (2027-/Absage-Scan, Enrichment-Fakten) | 2026-10-07 |
> Nicht erreichbar 10-07: ironman.com + r.jina.ai (403), keltenman.at (403/WAF), marmottegranfondoseries.com (503), ariegeoise.com (DNS), diverse AT/DE-Organiser (nur 2026).

---

## Session 2026-10-07 — 3 neue 2027-Ausgaben + ~20 Enrichment + 3 Dedup + Datums-/Feldfixes

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation), 5 Research-Agents parallel gegen **offizielle** Quellen (ÖTRV/DTU Tri AT/DE; ironman.com/challenge-family Mittel-/Langdistanz EU; cycloworld/hdsports Rad AT/DE; UCI GFWS/L'Étape/GFNY Rad EU; Enrichment/Verifikation). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert.

- **Timing-Befund:** Anfang Oktober sind für 2027 kaum offizielle Termine publiziert (Veranstalter rollen sie ab Herbst/Winter 2026 aus). Agents fanden daher nur wenige verifizierbare Neuanlagen — korrekt kein Raten. Schwerpunkt dieses Laufs: Enrichment + Datenfixes.
- **3 neue 2027-Dateien** (offiziell verifiziert, Beschreibung 5–8 Sätze):
  - **tour-transalp-2027** (Name „MYTRANSALP", Rebrand der TOUR Transalp durch Yunique; 20.–26.06.2027, mytransalp.com; Slug-Stamm bewusst beibehalten für „Weitere Ausgaben"-Verlinkung zu tour-transalp-2026; Ziel Riva del Garda, Startorte erst Dezember → country IT als einziger fixer Anker).
  - **ultra-triathlon-bad-radkersburg-2027** (AT, Steiermark; 02.–06.09.2027, Anmeldung offen; Single/Double/Triple Ultra + Aquabike).
  - **neustaedter-triathlon-donau-2027** (DE, Bayern; 20.06.2027, 5. Auflage, DTU-Genehmigung 2027; Sprintdistanz).
- **3 confirmed:false→true** (offizielles Datum jetzt publiziert): ardechoise-2027 (Start 08.→**09.06.**, offiziell „9 au 12 juin"), paris-roubaix-challenge-2027 (10.04.2027, A.S.O.), berliner-volkstriathlon-2027 (27.06.2027, berlin-timing.de).
- **~20 Bestands-Events veredelt/korrigiert:**
  - **8 dünne Beschreibungen neu geschrieben** (upcoming 2026, jetzt alle ≥4 Sätze): alentejo-gravel-ourique, gran-fondo-greece-loutraki, granfondo-il-lombardia, granfondo-montefeltro-gubbio, greek-hero-xtri-corfu, ironman-703-versailles, nirvana-gran-fondo-antalya, uci-granfondo-la-nucia.
  - **8× distanceKm ergänzt** (2027): gfny-lourdes-tourmalet (107 +2800 Hm), gfny-nyborg (139,3 +919 Hm), havelberg-triathlon (55,4), reiling-triathlon-harsewinkel (25,5), stadttriathlon-erding (50,9), stadttriathlon-forchheim (23,5), 24h-radmarathon-grieskirchen (21,5 Rundkurs), ardechoise (160).
  - **Feld-/Datumskorrekturen:** granfondo-il-lombardia (135→**108** km / 3000→**2400** Hm, neue Bergamo-Strecke statt alter Como-Route), nirvana-gran-fondo-antalya (Datum 15.→**06.–08.11.**, 98→**105** km, veraltete Elevation entfernt), alentejo-gravel-ourique (119→120,6 / 1750→1912), greek-hero-xtri (230→219,9 / 5600→3900), ironman-703-versailles (unbelegte Elevation 800 entfernt).
- **3 Dubletten entfernt** (siehe ZU PRÜFEN) + **2 Datumsfehler** (swedeman 04.→10.07., antalya) korrigiert.
- **Keine neuen Absagen/BLACKLIST-Einträge.** Neuer WATCH-Punkt: PTO-Übernahme Challenge Family → Triathlon World Tour / T100 Challenger ab 2027 (siehe STATE).
- **SEO / Sitemap / noindex:** `npm run build` grün, **1572 pages**, 0 errors. Sitemap **493 URLs** (nur indexierbar), alle 3 neuen `-2027` enthalten, entfernte Dubletten raus. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + Sitemap-Ausschluss intakt — keine Code-Änderung nötig.
- **Branch-Hinweis:** committet/gepusht auf zugewiesenen Arbeits-Branch `claude/intelligent-clarke-t9wlsq` (Harness-Vorgabe), nicht direkt auf `master`. Für Deployment muss der Branch nach `master` gemerged werden.

---

## Session 2026-10-03 — 25 neue 2027-Ausgaben + Enrichment + Dedup/Datenfixes

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 4 Research-Agents parallel gegen **offizielle** Quellen (ÖTRV/DTU/k226 Tri, ironman.com via r.jina.ai + challenge-family, cycloworld/hdsports Rad AT/DE, UCI GFWS/GFNY/L'Étape Rad EU); Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) validiert.

- **25 neue 2027-Dateien** (Slug-Stamm = 2026-Sibling wo vorhanden, Beschreibung je 5–9 Sätze, neu geschrieben):
  - **Tri AT (6, ÖTRV):** aloha-tri-linz (03.07.), aloha-tri-traun (31.07.), aloha-tri-mondseeland (05.09.), braunauer-sprinttriathlon (23.05.), thiersee-triathlon (15.08.), vulkanlandaquathlon-riegersburg (29.08.).
  - **Tri/IRONMAN (2):** ironman-703-belgrade (12.09., 2. Ausgabe), ironman-5150-kraichgau (23.05., Olympisch).
  - **Rad AT/DE (4):** muensterland-giro (03.10.), race-across-austria-east-west (24.–28.08.), grand-escape-innsbruck (04.09., RTF-Bikepacking), gravelei-suedsteiermark (confirmed:false) + 3 weitere confirmed:false (carinthia200-villach, rosenheimer-radmarathon RTF, allgaeu-gravel-ride-isny).
  - **Rad EU (13):** confirmed: granfondo-riccione (21.03.), istria-granfondo (03.04.), gfny-nyborg (08.08.), uci-granfondo-cyprus (26.–28.03.); confirmed:false: letape-slovenia, letape-romania, ardechoise, quebrantahuesos, ariegeoise, marmotte-granfondo-alpes.
- **~9 Bestands-Events veredelt/korrigiert:** 6 dünne IRONMAN-2026-Beschreibungen (cascais, portugal-cascais, malaga +Elevation 250, costa-navarino, porec, barcelona-calella); bodensee-radmarathon-2027 (+Elevation 2376), granfondo-serra-da-estrela-2027 (+distanceKm 132), krakonosov-trutnov-2027 (+Elevation 2613).
- **Datenfixes:** 2 Dubletten entfernt (marmotte-granfondo-valais-2026, dolomitenradrundfahrt-lienz-2026); 3× Gran Fondo→RTF; 2 Aggregatorbilder entfernt; **IRONMAN 70.3 Versailles 2026 Datum 12.07.→11.10.** korrigiert.
- **Keine Removals wegen Absage** und **keine neuen BLACKLIST-Einträge** diesen Lauf.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1572 pages**, 0 errors. Sitemap 509 URLs. Keine Code-Änderung nötig.

---

## Session 2026-09-24 — Großwelle 2027: 306 neu (erster Lauf ohne Mengen-Limit) + ~35 Enrichment + 5 Removals

Erster Lauf nach Aufhebung des 15er-Limits (User-Wunsch) und mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel (ÖTRV, DTU+k226, IRONMAN/Challenge, cycloworld AT/DE, Rad EU/UCI, Enrichment), alle Termine gegen offizielle Veranstalter-/Serienseiten; Aggregatoren nur Discovery.

- **306 neue 2027-Dateien** (282 confirmed, 24 confirmed:false; fast alle als Folgeausgabe mit gleichem Slug-Stamm, Beschreibung neu geschrieben mit 2027-Datum/Auflage/Neuerungen; alte 2026-registrationUrls bewusst entfernt; nicht verifizierbare Bilder entfernt):
  - Triathlon AT 20 (ÖTRV) · Triathlon DE/EU 134 (DTU/k226, inkl. neu Munich Triathlon + ChtriMan Gravelines) · IRONMAN/Challenge 29 · Rad AT/DE 76 (cycloworld, inkl. SURM) · Rad EU 47 (UCI/Classics/L'Étape/GFNY/Sella Ronda).
  - Neue Stämme: ironman-les-sables-dolonne (70.3→Volldistanz), ironman-knokke-heist (erste belgische Volldistanz), ironman-5150-erkner.
- **Korrekturen Bestand:** ironman-703-duisburg-2027 (15.08.→**29.08.**), erkner-2027 confirmed, challenge-sandefjord (Rad 85 km), mogán (1.462 Hm), diverse elevation; desafio-donana-2026 **04.→17.10.**, vuelta-ibiza distanceKm 300→164, cyclotour-du-leman Gran Fondo→RTF, istria300 302 km/5.300 Hm, uec-varese 2.120 Hm, letape-czech-flat 04.→03.10.; + ~20 weitere Beschreibungs-/Bild-/URL-Fixes.
- **5 Removals:** muerzer-oberland-duathlon-2026 (ÖTRV „ABGESAGT"), granfondo-pag-2026 (Phantom), bergzeitfahren-schmelz-lollar-2026 + rodltal-bergkaiser-2026 (abgesagt) → BLACKLIST + CLAUDE.md. IRONMAN 70.3 Knokke-Heist „Discontinued" + 2027-Pausen dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1547 pages**, 0 errors. Sitemap 508 URLs, 21 Jahres-Landingpages 2027; noindex stichprobenartig geprüft.

---

> Ältere Session-Summaries (2026-09-23 und früher) in `progress-archive.md`.
