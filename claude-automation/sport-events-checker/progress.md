# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Saison-Modus (seit 2026-09-16)
- **Zielsaison für Neuanlagen: 2027.** UI-Default 2027 (Toggle im Filter, localStorage + `?saison=`).
- Pro Ausgabe eigene Datei (`<slug>-2027.json`); 2026-Dateien nie umdatieren. Details: `routine-prompt.md` → „Saisonen".
- 2027-Bestand: **29 Events** (Welle 1 + 2 + 3). Weiter Klassiker-2027-Ausgaben ergänzen (max. 15/Lauf),
  aber Enrichment-first beachten (noch 42 dünne upcoming/2027-Beschreibungen).

### Kennzahlen (Stand: 2026-09-19)
- Events gesamt: **1162** | Saison 2026: 1133 (upcoming ≥ heute **121** | past/noindex **1012**) | Saison 2027: **29** (28 confirmed, 1 confirmed:false = allgaeu-triathlon)
- Letzter Lauf: 2026-09-19 — **21 Events veredelt/korrigiert** (8 AT/DE-Bestand + 5 Granfondo-imageUrls 2027 + Almere-Elevation + Il-Lombardia-Korrektur + 6 Okt/Nov-2026), **3 neue 2027-Ausgaben** (Welle 3, ≤15-Limit), **2 Removals** (muerzer-oberland-duathlon abgesagt, il-lombardia-Dublette), **2 Datumskorrekturen** (letape-czech 04.→03.10., antalya 15.→08.11.)
- Build zuletzt grün: **1217 pages**, 0 errors; Sitemap **209 URLs**, alle 29 `-2027`-URLs, keine past/noindex-URLs, gelöschte Dublette raus
- Datenqualität (upcoming/2027, Stand 09-19): thin **42** (von 55); missing elevationGainM weiterhin hoch bei internationalen/flachen Events; missing imageUrl v.a. bei IRONMAN-2027 (ironman.com crawler-/referer-blockiert)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt. Nicht wieder anlegen bis funktionierende offizielle Seite eine Ausgabe ankündigt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen); cycloworld führt 02.08.2026 weiterhin spekulativ. Nicht anlegen.
- FNLD GRVL (Lahti, FI) — Veranstalter pausiert 2026 offiziell (fnldgrvl.com: „taking a hiatus in 2026"). Am 03.08. entfernt. Aggregatoren (Battistrada, Strambecco) führen 08.08.2026 spekulativ. Nicht anlegen bis offizielle Ankündigung einer neuen Ausgabe.
- Miriquidi Bike Challenge (Marienberg, Sachsen) — keine offiziell verifizierbare 2026-Ausgabe: miriquidi-mtb.de zeigt nur 2024-Inhalte, im offiziellen MTB-Sachsen-Cup-Kalender 2026 (10 Rennen) nicht mehr enthalten. Am 05.08. entfernt. Nicht anlegen bis miriquidi-mtb.de offiziell eine Ausgabe ankündigt.
- Kosiak Löwe (Feistritz im Rosental, Kärnten) — 2026 offiziell abgesagt; lcsuetschach.at meldet „AUS ORGANISATORISCHEN GRÜNDEN FINDET 2026 LEIDER KEIN KOSIAK LÖWE STATT!". Am 17.09.2026 entfernt. Nicht anlegen bis offizielle Ankündigung.
- **Mürzer Oberland (Naturpark) Duathlon (Neuberg an der Mürz, Steiermark)** — 2026 offiziell abgesagt (fun-sports.at: „können wir heuer leider keinen Duathlon durchführen", behördlicher Rechtsstreit BH Bruck/Mürzzuschlag; auch der Naturpark-Triathlon 2026 abgesagt). Bestätigt vom ÖTRV. Am 19.09.2026 entfernt. Aggregatoren führen 26.09.2026 weiter. Nicht anlegen bis fun-sports.at neue Ausgabe ankündigt.
- **Velothon Berlin (DE)** — existiert nicht mehr: umbenannt in „VeloCity Berlin" (SCC Events), offiziell 2025+2026 pausiert (velocity.berlin; tagesspiegel.de: „fällt für mindestens zwei Jahre aus"). Keine 2027-Bestätigung. Nicht anlegen bis velocity.berlin eine Neuauflage ankündigt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund). Vollständige Begründungen auch in CLAUDE.md „Known Cancelled".

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **2027-Seed, Welle 3 — TEILWEISE ERLEDIGT (2026-09-19):** ✅ dreilaendergiro-nauders (27.06.2027, confirmed), ✅ trumer-triathlon (16.–18.07.2027, confirmed), ✅ allgaeu-triathlon (confirmed:false, Save-the-date). **SKIPS:** IRONMAN 70.3 Kraichgau — ironman.com crawler-blockiert, kein offiziell verifizierbares 2027-Datum (Aggregatoren widersprüchlich 30.05./06.06.2027); re-check sobald ironman.com erreichbar oder offizieller Kanal Datum nennt. Sellaronda Bike Day — offizieller Kalender listet 2027 nur den Skimarathon, kein sauberes Bike-Day-Datum (nur Tourismus/Aggregatoren 05.06./11.09.2027); re-check sellarondabikeday.com. Velothon Berlin → BLACKLIST (pausiert).
- **Welle-3-Rest (noch nicht recherchiert):** IRONMAN 70.3 Duisburg/Zell am See/Jönköping, IRONMAN Nizza/Italy Emilia-Romagna, Challenge Walchsee/Kaiserwinkl/Heilbronn, Frankfurt City Triathlon, Mondsee 5-Seen, Kufsteinerland, Maratona-Umland-Granfondos.
- **OFFEN aus Welle 2:** `tour-transalp 20.–26.06.2027` — Datum bestätigt (event.delius-klasing.de, 750 km/17.000 Hm), aber Start-/Zielorte 2027 unveröffentlicht → nicht angelegt. Re-check, sobald Streckenverlauf 2027 publiziert.
- **2027 Save-the-date (nur mit `confirmed:false`):** king-of-the-lake „voraussichtlich 18.09.2027" (kotl.at) · etape-du-tour 2027 (kein Datum/Ort) · paris-roubaix-challenge 2027 (kein Datum).
- **2027 noch ohne Info (re-check Okt/Nov 2026):** ironman-barcelona-calella · marmotte-granfondo-alpes · neusiedlersee-radmarathon.
- **2027-Enrichment-Regel:** registrationUrl bei 2027-Ausgaben nachtragen, sobald Anmeldung öffnet (Ötztaler Jänner, Glocknerkönig Dez, Mallorca 06.10., Maratona Ende Sept, IRONMAN 70.3 St. Pölten 23.11.2026). imageUrl für IRONMAN-2027 bleibt Lücke (ironman.com referer-/crawler-blockiert) — nur ersetzen, wenn hotlinkbares offizielles Hero auftaucht.
- **Discovery-Kandidaten (offiziell verifizieren, DANN anlegen — Anti-Flut, weiterhin offen):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach), Salt&Lake Trail (Salzburg, Gravel), Südkärntner Triathlon (Klopeinersee), RügenChallenge (Sellin).
- **Elevation offiziell nicht publiziert (nicht schätzen, plausibel belassen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300), rad-am-salzburgring (25 km/100 Hm) — bei Gelegenheit offiziell nachverifizieren oder entfernen.
- **Enrichment-Backlog (upcoming/2027):** noch ~42 dünne Beschreibungen. Priorität: 2027-Ausgaben (Welle-3-Rest) + Okt/Nov-2026-Lücken mit längster Rest-Indexzeit; internationale Klein-Granfondos (100x100half, granfondo-serra-dossa, ourem-fatima, granfondo-portimao etc.) niedrigere AT/DE-Priorität.
- **Kraichgauman Crossduathlon = LETZTE Ausgabe 2026** (Gelände wird bebaut) → keine 2027-Folgeausgabe.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| ÖTRV/AT-Veranstalterseiten (kotl.at, ttci.at, mountainsport.at, dreilaendergiro.at, trumer-triathlon.at, fun-sports.at) | 2026-09-19 |
| DE-Veranstalterseiten (alb-gold.de, badwaldsee-radmarathon.de, brockenheroes.de, mrturner61.de, DTU-Kalender, muensterland-giro.de, 808project.de) | 2026-09-19 |
| EU-Granfondo-Veranstalter (novecolli.it, lastelviosantini.com, gfstradebianche.it, amstel.nl, arberradmarathon.de, gfilombardia.it, istria300.com, letapeczech.cz, granfondoalassio.it, cabreirasolutions.com) | 2026-09-19 |
| UCI Gran Fondo World Series (Alassio, Alentejo, Antalya, Il Lombardia) | 2026-09-19 |
| IRONMAN offizielle Kanäle (FB Austria/Spain/Sverige; ironman.com selbst crawler-blockiert) | 2026-09-19 |
| challenge-family.com (Almere 2027 Datum + Elevation) | 2026-09-19 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 |
| triathlondeutschland.de / dtu-kalender.de | 2026-09-19 (Grafschafter Crossduathlon via DTU-Kalender gegengeprüft) |
| triathlon-austria.at/de/service-termine | 2026-09-19 (Mürzer Duathlon-Absage bestätigt) |
> Hinweis: Am längsten offen sind die reinen Discovery-Aggregatoren **k226.com (07-14)** und **cycloworld.cc (07-29)** — nächster Lauf bevorzugt für 2027-Discovery re-checken (Jahresfilter 2027; nur Discovery, Fakten offiziell gegenprüfen; Anti-Flut). Für 2027 außerdem Welle-3-Rest (IRONMAN 70.3 Duisburg/Zell am See, Challenge Walchsee/Heilbronn, Frankfurt-City-Tri etc.).

---

## Session 2026-09-19 — Enrichment (21) + 2027-Welle-3 (3 neu) + 2 Removals

Ausgewogener Wartungslauf mit **Enrichment-first + kontrolliertem 2027-Wachstum** (Anti-Flut: nur 3 Neuanlagen, Limit 15 klar unterschritten). 5 Research-Agents haben parallel gegen **offizielle** Quellen recherchiert (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen/entfernt statt geraten).

- **21 Events veredelt/korrigiert:**
  - **AT 2026 (3):** king-of-the-lake (distanceKm 47→**47,2**, unbelegte 200 Hm **entfernt**, 16. Auflage/Warteliste), pyramidenkogelhero (7→**7,1** km, 400→**403** Hm, Veranstalter Mountain Sport Union), ikb-baggersee-aquathlon (Venue **Roßau** + Kinder-TriZug-Finale + registrationUrl).
  - **DE 2026 (5):** alb-gold-trophy (+reg, Untergrund-Split, 3Lions-Cup), bad-waldsee-radmarathon (**+RTF**-Kategorie da „Radtourenfahrt … ohne Ergebnisliste", +reg, Organisator D. Steinhauser), brockenheroes (+reg, Klassen/24-km-Variante), kaiserstuhl-duathlon (+reg racepedia), grafschafter-crossduathlon (**+distanceKm 16,8**, Organisator-Fix **TV Bölingen → TuS Ahrweiler 1898**, Nachwuchsklassen).
  - **2027-Granfondo-imageUrls (5):** granfondo-nove-colli, granfondo-stelvio-santini, granfondo-strade-bianche, amstel-gold-race-toerversie, arber-radmarathon (offizielle Hero-Bilder, Dimensionen geprüft; Amstel-Elevation korrekt weiter weggelassen).
  - **2027-Felder (1):** challenge-almere-amsterdam (**+elevationGainM 232**, offiziell challenge-family.com).
  - **Okt/Nov 2026 (6):** muensterland-giro-jedermann (100→**125** km, unbelegte 500 Hm **entfernt**, Start Borken/Ziel Münster, +reg), istria300 (unbelegte „6. Auflage/>1.500 TN" **entfernt**, Renndirektor Miholjević, +reg), letape-czech-flat (**Datum 04.→03.10.**, 111→**110** km, 270→**300** Hm, +reg), granfondo-alassio (**113→90,6** km, **+1.790 Hm**, Single-Course/HEUFORIA, +reg), alentejo-gravel (119→**120,6** km, 1.750→**1.912** Hm, +reg), nirvana-gran-fondo-antalya (**Datum 15.→08.11.**, unbelegte 98 km/517 Hm/imageUrl **entfernt** — tote Event-Seite; websiteUrl → UCI-Wettbewerbsseite).
- **Il-Lombardia-Dedup:** granfondo-il-lombardia-2026 (135 km/3.000, altes Como-Profil) **gelöscht**; gran-fondo-il-lombardia-bergamo-2026 behalten + korrigiert (110→**108** km, 2.000→**2.400** Hm, neuer Bergamo-Start/Ziel Città Alta, Boccola-Finale).
- **3 neue 2027-Ausgaben (Welle 3):** dreilaendergiro-nauders (27.06.2027, confirmed, Reschenpass AT/IT/CH), trumer-triathlon (16.–18.07.2027, confirmed, MD/OD/Sprint, Reg. offen), allgaeu-triathlon (confirmed:false Save-the-date, ältester Tri Deutschlands seit 1983, 808 project).
- **2 Removals:** muerzer-oberland-duathlon-2026 (offiziell abgesagt, ÖTRV) + il-lombardia-Dublette. Beide bzw. Muerzer + Velothon Berlin in CLAUDE.md „Known Cancelled" ergänzt.
- **SEO / Sitemap / noindex:** `npm run build` grün, **1217 pages**, 0 errors. Sitemap **209 URLs**, alle 29 `-2027`, keine past/noindex-URLs, gelöschte Dublette raus. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — keine Code-Änderung nötig.

---

## Session 2026-09-17 — 2027-Welle-2 (10 neu) + Enrichment (20) + 1 Removal

Ausgewogener Wartungslauf mit **Enrichment-first + kontrolliertem 2027-Wachstum** (Anti-Flut: 10 Neuanlagen, Limit 15 nicht ausgeschöpft). 4 Research-Agents haben parallel gegen **offizielle** Quellen recherchiert (Aggregatoren nur Discovery, kein prommer.net; unbelegte Felder weggelassen statt geraten).

- **10 neue 2027-Ausgaben** (alle confirmed:true, offiziell gegengeprüft):
  - **Triathlon (4):** ironman-kalmar (21.08., ausverkauft), ironman-vitoria-gasteiz (11.07., Reg. offen), challenge-almere-amsterdam (11.09., ältester LD-Triathlon Europas), ironman-703-st-poelten (23.05., Klassiker-Comeback, Reg. ab 23.11.2026).
  - **Cycling (6):** riderman-bad-duerrheim (03.–05.09., 224/2.985, imageUrl), arber-radmarathon (25.07., 250/3.750), granfondo-stelvio-santini (06.06., 130/4.270), granfondo-nove-colli (23.05., 200/3.814), granfondo-strade-bianche (07.03., 137,7/2.000, Gravel), amstel-gold-race-toerversie (17.04., RTF).
  - Offen: tour-transalp (Datum bestätigt, Orte 2027 unveröffentlicht → nicht angelegt).
- **20 Bestands-Events veredelt/korrigiert** (Okt/Nov 2026, längste Rest-Indexzeit): 10 Cycling + 10 Tri. Wesentliche Fixes: Distanz-/Höhenmeter-Korrekturen (prenzlauer 216→231/1500→1190, leuven 147→132/950→880, sanremo 113→103 + Rad 80, kaiserstuhl → 20 km single-course), 2 Umbenennungen (Flanders→Leuven Legacy Gravel, Kaiserstuhl→Cross-Duathlon), Label-Tausch güstrow, Hallenbad-Fix neustaedter, Websites/Reg-URLs nachgetragen, unbelegte Felder + Aggregator-Bilder entfernt.
- **1 Removal:** kosiak-loewe-2026 (offiziell abgesagt, LC Suetschach) → BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap / noindex:** `npm run build` grün, **1215 pages**, 0 errors. Sitemap enthält alle 26 `-2027`-URLs, keine past/noindex-URLs. Date-driven noindex + Sitemap-Ausschluss + JSON-LD intakt — keine Code-Änderung nötig.

---

## Session 2026-09-16 — Season-Umbau + 2027-Seed (Welle 1)

- **Infrastruktur (Commit 475309d):** Saison-Modell eingeführt — Event gehört zur Saison seines Startjahres, `SEASONS=[2026,2027]`, UI-Default 2027. Filter-Toggle mit Zählern, localStorage (`sport_events.season.v1`) + `?saison=`-Param (URL gewinnt). Landingpages `[year].astro` pro Sport × Land × Jahr; Header/Footer/Breadcrumbs jahresbewusst. Detailseite verlinkt Geschwister-Ausgaben („Weitere Ausgaben"). CLAUDE.md/README/routine-prompt um Saison-Regeln ergänzt (eine Datei pro Ausgabe, 2026 nie umdatieren).
- **2027-Seed (15 neu, Limit voll):** ironman-frankfurt (27.06., 25. Auflage, sold out), ironman-hamburg (06.06., 10. Auflage, sold out), ironman-austria-kaernten (13.06., sold out), ironman-switzerland-thun (04.07.), ironman-copenhagen (22.08., in 1 h ausverkauft), challenge-roth (04.07., Late Entry Draw bis 09.11.2026), oetztaler-radmarathon (29.08.), glocknerkoenig (06.06., 30. Ausgabe), dolomitenradrundfahrt (13.06., 39. Ausgabe), kitzbueheler-radmarathon (05.09.), cyclassics-hamburg (15.08.), eschborn-frankfurt-jedermann (01.05.), maratona-dles-dolomites (04.07., 40. Ausgabe), mallorca-312 (24.04.), race-around-austria (09.–15.08.). Alle Termine gegen offizielle Seiten/JSON-LD/offizielle FB-Kanäle verifiziert.
- **Abweichung von der Enrichment-first-Regel:** 0 Bestandsevents veredelt — bewusst, weil die UI ab sofort standardmäßig 2027 zeigt und die Saison sonst leer wäre.
- **Erkenntnisse:** Challenge St. Pölten wird 2027 zu IRONMAN 70.3 St. Pölten. ironman.com liefert 2027-Termine im JSON-LD (WebFetch); tour-transalp.de → event.delius-klasing.de, oetztaler-radmarathon.com → soelden.com (Redirects). amstelgoldrace.nl liefert HTTP 500, Inhalte auf amstel.nl.
- Build grün: 1203 pages, 0 errors.

---

> Ältere Session-Summaries (2026-08-19 und früher) in `progress-archive.md`.
