# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **384 Events** (Stand 10-05; confirmed 347, confirmed:false 37). Nächste Läufe: BACKLOG-re-checks (IRONMAN/Challenge-2027-Termine erscheinen gestaffelt ab Spät-Herbst/Winter 2026), `confirmed:false` → exaktes Datum nachtragen sobald offiziell, fehlende `imageUrl`/`elevationGainM` nachziehen wo offiziell belegbar.

### Kein Mengen-Limit mehr (seit 2026-09-24)
- Das 15-Events-pro-Lauf-Limit ist auf User-Wunsch aufgehoben. Qualitäts-Gate bleibt: jede neue Seite voll ausgearbeitet + offiziell verifiziert.

### Neue Kategorie (seit 2026-09-23)
- **`T100`** in `TRIATHLON_CATEGORIES` (`src/lib/types.ts`) für das 100er-Format (2/80/18 = 100 km, Challenge Family + PTO). `distanceKm: 100`; klassische 1,9/90/21,1-Rennen bleiben `Mitteldistanz`.

### Kennzahlen (Stand: 2026-10-05)
- Events gesamt: **1511** | Saison 2026: 1127 (upcoming ≥ heute **45** | past/noindex **1082**) | Saison 2027: **384** (confirmed 347 | confirmed:false 37)
- Letzter Lauf: 2026-10-05 — **12 neue 2027-Ausgaben** (Tri AT 1, Tri DE 3, Rad AT/DE 5, Rad EU 2, Rad HR 1), **3× confirmed:false→true** (paris-roubaix-challenge, gravelei-suedsteiermark, styroica), **21 Bestands-Events veredelt** (8 dünne Beschreibungen, 13 imageUrl/Felder inkl. istria-granfondo +elev/dist), **1 Datumsfehler** (swedeman-xtri-are-2026 04.07→10.07), **1 Dublette entfernt** (granfondo-il-lombardia-2026 — stale Como-Daten; gran-fondo-il-lombardia-bergamo-2026 offiziell verifiziert behalten), **1 neuer BLACKLIST-Eintrag** (Backwaterman SwimRun).
- Build zuletzt grün: **1584 pages**, 0 errors (`npm run check` 0 errors); Sitemap **502 URLs** (nur indexierbar), alle 12 neuen `-2027` enthalten, entfernte Dublette raus, past=noindex verifiziert.
- Datenqualität (upcoming, Stand 10-05): thin **0** (alle acht vom Vorlauf behobenen aufgearbeitet); missing distanceKm **16**; missing elevationGainM **210**; missing imageUrl **150**. Hinweis: viele fehlende Elevation-Werte sind offiziell nicht publiziert (Agents verifiziert) → nicht schätzen.

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
- Backwaterman SwimRun Ottenstein (NÖ) — 2026 „The Last Dance" (nach 20 Jahren eingestellt), keine 2027-Ausgabe
- IRONMAN 70.3 Knokke-Heist (BE) — „Discontinued“, ab 2027 Volldistanz IRONMAN Belgium Knokke-Heist (eigene Datei)
- IRONMAN 70.3 Dún Laoghaire (IE) — discontinued (nicht im Repo; Notiz zur Sicherheit)
- Granfondo Pag Okt-2026 — Phantom (7. Ausgabe erst 15.05.2027). 2027-Datei korrekt.
- Bergzeitfahren Schmelz Lollar 2026 + Rodltal-Bergkaiser 2026 — offiziell abgesagt
- Granfondo Bratislava (SK) — „V roku 2026 si dávame pauzu"
- RideLondon 100 (GB), Velothon Wales (GB), IRONMAN 70.3 Edinburgh (GB), Challenge Lisboa (PT), Styrkeprøven Trondheim-Oslo (NO) — eingestellt/abgesagt
- Velothon Berlin — defunct (→ VeloCity, letzte ~2022)
- 2027-Pausen (keine 2027-Datei): Fichkona (wieder 2028), Montafon M3, Bayrisch Lettn, RügenChallenge
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht / Datenfehler — vorhandene Events verifizieren)
- ✅ **krk-granfondo (HR) gelöst (10-05):** krkgranfondo.com wieder erreichbar, kündigt „Saturday, April 24, 2027" (82 km) an → `krk-granfondo-2027.json` angelegt (confirmed).
- ✅ **swedeman-xtri-are (SE) gelöst (10-05):** offizielle swextri.com — Xtri (Langdistanz) am 10.07.2026; Datei 04.07→10.07 korrigiert. 2027-Datum offiziell noch nicht publiziert → kein 2027-File.
- ✅ **Lombardia-Dublette gelöst (10-05):** granfondo-il-lombardia-2026 (stale Como-Route 135/3000, widersprüchliche Beschreibung) entfernt; gran-fondo-il-lombardia-bergamo-2026 behalten (gfilombardia.it bestätigt Bergamo/Sedrina/Gimondi, Climbs Valcava+Selvino).
- **offen — IRONMAN 70.3 Tours 2027:** Repo 06.06.2027 (So) vs endurance.biz „June 7" (Mo, unplausibel). Repo-Sonntag belassen; bei nächster Primärquelle prüfen.
- **offen — granfondo-rosa-oosterbeek (NL):** granfondorosa.nl leitet per 301 auf nltourrides.nl um (möglicher Rebrand) → websiteUrl nächsten Lauf prüfen.
- **offen — Falsche websiteUrl (2026, past, niedrige Prio):** gaisberg-vertical-salzburg-2026 (radmarathon.at generisch); loser-bergzeitfahren-altaussee-2026 (salzkammergut-trophy.at).
- **offen — Kaputte imageUrl 2026-Dateien (past, niedrige Prio):** top-race-germany-bostalsee, kulturstadttriathlon-weimar, ostseeman-gluecksburg, slovakman-226-piestany, kitzbuehel-triathlon (2026).
- **offen — 2026-Distanzfehler (past, niedrige Prio):** hansbergland-cross-triathlon (30→18,25), thermentriathlon-fuerstenfeld, triathlon-kirchbichl, neufeld (Sprint Sa statt Fr).

### BACKLOG (offene Aufgaben — Stand 10-05)
- **IRONMAN 2027 noch „TBD"/zeigt nur Okt-2026 (ab Spät-Herbst/Winter re-check via ironman.com; 10-05 geprüft, noch nicht publiziert):** 70.3 Gdynia, Kraków, Poznań, Warszawa (alle 4 PL-Rennen über Lizenz Sport Evolution, Kalender typ. spät im Herbst), Hradec Králové, Málaga, Poreč, Versailles, Costa Navarino, Cascais (70.3 + Full), **Barcelona-Calella** (Reg. ~08.10.2026 → nach 08.10. re-check), 5150 Cervia. Tipp: `curl https://r.jina.ai/https://www.ironman.com/<slug>` (WebFetch 403; r.jina.ai teils 403/422).
- **Challenge Herbst-Rennen 2027 (challengefamily.com zeigt nur Okt-2026, da 2026-Ausgaben noch nicht gelaufen):** Peguera-Mallorca, Sanremo, Vieux-Boucau, Forte Village, Barcelona. challenge-sandefjord-2027 bleibt confirmed:false („June 2027", offiziell noch TBA).
- **confirmed:false 2027 (37) — exaktes Datum nachtragen sobald offiziell:** u. a. die neuen (herzoman-herzogenaurach, mueritz-triathlon-waren, nockbike-trophy-feld-am-see, saarschleifen-bike-mettlach, loewensteiner-berge-radmarathon, the-river-gravel-bouillon) + Bestand (carinthia200-villach „Sei beim Start 2027", rosenheimer-radmarathon „Reg. ab 20.01", allgaeu-gravel-ride-isny, woerthersee-gravel-race „18.04.2027 vorläufig", king-of-the-lake „voraussichtlich 18.09.2027", quebrantahuesos, marmotte-granfondo-alpes, ardechoise, ariegeoise, letape-slovenia, letape-romania u. v. m.).
- **Rad AT/DE ohne 2027-Datum (Veranstalterseite nur 2026 / kein Termin):** tour d'energie Göttingen, brockenheroes, salt&lake-trail, velowino (Stadt-Verhandlung läuft), 3rides-gran-fondo-weinstrasse, Alb Extrem, Rennsteigride (MTB), Prenzlauer Hügelmarathon, Sachsenring-Radrennen, Maintal Bike Marathon (MTB). **Dormant/defunct:** tour-de-kärnten (Ossiach ~2023), velothon-berlin, sauerlandride.
- **Rad EU ohne offizielles 2027-Datum:** quebrantahuesos (nur 2026), marmotte-granfondo-alpes (Seite 503), ardechoise/ariegeoise (ariegeoise.com DNS tot), letape-slovenia/-romania (Vorreg. offen, kein Tag), Portes du Soleil (Cloudflare-Block), La Pyrénéenne (zieht 2027 nach Saint-Lary → Slug-Stamm würde falsch), Tour of Pembrokeshire, Il Lombardia Gimondi (Profi 2027 noch nicht terminiert), Etape du Tour (nach TdF-Routenpräsentation 22.10.), Sudety Tour (GFWS, nur 2026 offiziell), Liège-Bastogne-Liège Challenge (nur 2026), Granfondo Campagnolo Roma.
- **Tri AT/DE/EU ohne 2027-Datum:** amstetten, jannersee, wolfgangsee-strobl, datagroup-nürnberg, XTERRA Austria (xterraplanet „not yet confirmed"); DTU-2027-gelistet aber (noch) nicht im Repo: Neustädter Triathlon (20.06.2027, Bayern), Spreewald-Duathlon Briesensee (01.05.2027, Brandenburg) — nächste Runde mit Streckendetails.
- **2027-Enrichment:** `registrationUrl` nachtragen sobald Anmeldung öffnet; elevationGainM nur wo offiziell publiziert (viele Stadt-Tris/IRONMAN-Kurse + flache Rad-Events publizieren keine Höhenmeter → nicht schätzen).
- **Keine 2027-Ausgabe:** Backwaterman (eingestellt), kraichgauman-crossduathlon (letzte 2026), fichkona (2028), montafon-m3, bayrisch-lettn, rügenchallenge.

### QUELLEN-STAND (zuletzt geprüft — ALLE Quellen jeden Lauf durchsuchen)
| Quelle | zuletzt |
|---|---|
| triathlon-austria.at/de/service-termine (ÖTRV; `?year=2027`) | 2026-10-05 (2027 noch dünn ~10 Events; südkärntner neu, Backwaterman „Last Dance", keine „ABGESAGT") |
| triathlondeutschland.de / dtu-kalender.de | 2026-10-05 (taunusstein neu; Neustadt/Spreewald-Duathlon in BACKLOG) |
| ironman.com (via r.jina.ai/WebSearch, direkt 403) | 2026-10-05 (2027 Pro-Series-Kalender gegen Bestand gegengeprüft: alle Daten korrekt; 70.3-Herbstrennen noch TBD) |
| challengefamily.com + Race-Sites | 2026-10-05 (Herbstrennen zeigen nur 2026; sandefjord TBA) |
| k226.com/events/events.aspx | 2026-10-05 (Discovery) |
| cycloworld.cc/de/kalender-de | 2026-10-05 |
| hdsports.at/rad + hdsports.at/triathlonkalender (paginiert) | 2026-10-05 (viele „2027"-Daten sind Projektionen, nicht org-bestätigt) |
| UCI Gran Fondo World Series | 2026-10-05 (istria/cyprus/millars 2027 bestätigt = Repo korrekt; Sudety nur 2026) |
| GFNY / L'Étape-Serie / MYTRANSALP / parisroubaixchallenge | 2026-10-05 (tour-transalp 20.–26.06.2027 + paris-roubaix 10.04.2027 bestätigt) |
| Veranstalterseiten aller 2026-Events (2027-/Absage-Scan) | 2026-10-05 |
> Nicht erreichbar 10-05: marmottegranfondoseries.com (503/422), ariegeoise.com (DNS NXDOMAIN), ironmangdynia.pl + ironmanczech.com (503), cyclosportive-portesdusoleil (Cloudflare), r.jina.ai (teils 422), diverse Elementor-Seiten (nur Logos statt Hero).

---

## Session 2026-10-05 — 12 neue 2027-Ausgaben + 21 Enrichment + 3 confirmed-Upgrades + Dedup/Datenfix

Voll-Lauf mit Pflicht-Durchsuchung **aller** Quellen (keine Rotation). 5 Research-/Enrichment-Agents parallel gegen **offizielle** Quellen (ÖTRV/DTU Tri; ironman.com via r.jina.ai/WebSearch + challenge-family; cycloworld/hdsports Rad AT/DE; UCI GFWS/GFNY/L'Étape/MYTRANSALP Rad EU; Phantom+Enrichment). Aggregatoren nur Discovery, kein prommer.net, unbelegte Felder weggelassen statt geraten. Alle Änderungen per `npm run build` (Zod) + `npm run check` validiert.

- **12 neue 2027-Dateien** (Slug-Stamm = 2026-Sibling wo vorhanden, Beschreibung je 4–8 Sätze neu):
  - **Tri AT (1, ÖTRV):** suedkaerntner-triathlon (18.–19.09., 9. Ausgabe, Klopeiner See; confirmed).
  - **Tri DE (3, DTU + Veranstalter):** erich-fill-triathlon-taunusstein (16.05., confirmed), herzoman-herzogenaurach (confirmed:false 27.06., 40. Jubiläum), mueritz-triathlon-waren (confirmed:false 24.07., Anmeldung ab 01.01.2027).
  - **Rad AT/DE (5):** lidl-deutschland-tour (18.–22.08., UCI ProSeries, confirmed), brezel-race-region-stuttgart (19.09., confirmed, 110/60/Ride), nockbike-trophy-feld-am-see (confirmed:false 06.06., ARBÖ-Kärnten-Radmarathon-Begleitrennen), saarschleifen-bike-mettlach (confirmed:false 25.07.), loewensteiner-berge-radmarathon (confirmed:false 20.06.).
  - **Rad EU (2):** tour-transalp (20.–26.06., Rebranding „MYTRANSALP", Ziel Riva del Garda; confirmed), the-river-gravel-bouillon (confirmed:false 05.09., BE).
  - **Rad HR (1, Phantom gelöst):** krk-granfondo (24.04., 82 km; confirmed).
- **3 confirmed:false→true** (offizielles Datum jetzt publiziert): paris-roubaix-challenge-2027 (10.04.2027), gravelei-suedsteiermark-2027 (21.–23.05.), styroica-2027 (18.09., Fehring, +Strecken 58/117/200).
- **21 Bestands-Events veredelt:** 8 dünne Beschreibungen zu 4–8 Sätzen ausgebaut (il-lombardia-bergamo via Dedup, montefeltro-gubbio, la-nucia, greece-loutraki, versailles-2026, greek-hero-xtri-corfu, alentejo-gravel-ourique, nirvana-antalya); istria-granfondo-2027 (+elevation 1745, distanceKm 105→112, +Bild); 13 offizielle Hero-Bilder nachgezogen (fausto-coppi, apfelland, trumer, altmuehltal, muensterland-giro, rad-am-ring, ronde-van-noord-holland, bergkaiser-kematen, letape-slovenia, thiersee, kitzbuehel-2027, fuerstenfeld u. a.).
- **Datenfixes:** swedeman-xtri-are-2026 Datum 04.07→**10.07** (swextri.com, Langdistanz); **1 Dublette entfernt** (granfondo-il-lombardia-2026, stale Como-Daten — gfilombardia.it bestätigt die Bergamo/Gimondi-Datei als korrekte Ausgabe).
- **1 Removal/BLACKLIST:** Backwaterman SwimRun Ottenstein (ÖTRV „The Last Dance", eingestellt) → BLACKLIST + CLAUDE.md. Kein `-2027`-File angelegt.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1584 pages**, 0 errors; `npm run check` 0 errors. Sitemap **502 URLs** (nur indexierbar), alle 12 neuen `-2027` enthalten, entfernte Dublette raus; stichprobenartig verifiziert: past-Event emittiert `robots noindex, follow` + fehlt in Sitemap, neues 2027 emittiert `index, follow`. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + JSON-LD intakt — **keine Code-Änderung nötig**.
- **Branch-Hinweis:** Lauf auf dem zugewiesenen Arbeits-Branch `claude/intelligent-clarke-um4xsx` committet/gepusht (Harness-Vorgabe), nicht direkt auf `master`. Branch startete deckungsgleich mit `master` (Vorlauf gemergt). Für Deployment Branch nach `master` mergen.

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
- **SEO / Sitemap / noindex:** `npm run build` grün, **1572 pages**, 0 errors. Sitemap 509 URLs (nur indexierbar), alle 25 neuen `-2027` enthalten, entfernte Dubletten raus, Versailles wieder enthalten. Date-driven noindex (`astro.config.mjs` + `[slug].astro`) + Sitemap-Ausschluss + JSON-LD intakt — **keine Code-Änderung nötig**.

---

## Session 2026-09-24 — Großwelle 2027: 306 neu (erster Lauf ohne Mengen-Limit) + ~35 Enrichment + 5 Removals

Erster Lauf nach Aufhebung des 15er-Limits (User-Wunsch) und mit Pflicht-Durchsuchung **aller** Quellen. 6 Research-Agents parallel (ÖTRV, DTU+k226, IRONMAN/Challenge, cycloworld AT/DE, Rad EU/UCI, Enrichment), alle Termine gegen offizielle Veranstalter-/Serienseiten; Aggregatoren nur Discovery.

- **306 neue 2027-Dateien** (282 confirmed, 24 confirmed:false; fast alle als Folgeausgabe mit gleichem Slug-Stamm, Beschreibung neu geschrieben mit 2027-Datum/Auflage/Neuerungen; alte 2026-registrationUrls bewusst entfernt; nicht verifizierbare Bilder entfernt):
  - Triathlon AT 20 (ÖTRV) · Triathlon DE/EU 134 (DTU/k226, inkl. neu Munich Triathlon + ChtriMan Gravelines) · IRONMAN/Challenge 29 · Rad AT/DE 76 (cycloworld, inkl. SURM) · Rad EU 47 (UCI/Classics/L'Étape/GFNY/Sella Ronda).
  - Neue Stämme: ironman-les-sables-dolonne (70.3→Volldistanz), ironman-knokke-heist (erste belgische Volldistanz), ironman-5150-erkner.
- **Korrekturen Bestand:** ironman-703-duisburg-2027 (15.08.→**29.08.**, confirmed, Strecke Regattabahn), erkner-2027 confirmed (unbelegte Hm + falsche WM-Quali raus), challenge-sandefjord (Rad 85 km), mogán (1.462 Hm statt Lauf-Hm), cesenatico/salou/samorín/almere/turku elevation; desafio-donana-2026 **04.→17.10.** (FETRI, XVI. Ausgabe), vuelta-ibiza distanceKm 300→164, cyclotour-du-leman Gran Fondo→RTF, istria300 302 km/5.300 Hm, uec-varese 2.120 Hm, letape-czech-flat 04.→03.10.; + ~20 weitere Beschreibungs-/Bild-/URL-Fixes (Enrichment-Agent 25 Dateien).
- **5 Removals:** muerzer-oberland-duathlon-2026 (ÖTRV „ABGESAGT"), granfondo-pag-2026 (Phantom, 7. Ausgabe erst 15.05.2027), bergzeitfahren-schmelz-lollar-2026 + rodltal-bergkaiser-2026 (abgesagt) → BLACKLIST + CLAUDE.md. IRONMAN 70.3 Knokke-Heist „Discontinued" + 2027-Pausen (Fichkona, Montafon M3, Bayrisch Lettn, RügenChallenge) dokumentiert.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1547 pages**, 0 errors. Sitemap 508 URLs (nur indexierbar), 21 Jahres-Landingpages 2027; entfernte + past URLs nicht enthalten; noindex stichprobenartig geprüft. Keine Code-Änderung.
- **Risiko-Hinweis:** +306 Seiten auf einen Schlag bei laufendem Scaled-Content-Throttle. Qualitäts-Gate per Skript geprüft (≥4 Sätze, ≥350 Zeichen, Ähnlichkeit zu 2026 ≤0,75). Search-Console-Indexierung beobachten.

---

> Ältere Session-Summaries (2026-09-23 und früher) in `progress-archive.md`.
