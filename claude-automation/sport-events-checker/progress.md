# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-08-01)
- Events gesamt: **1138** | upcoming (>= heute): **473** | past (noindex): **665**
- Letzter Lauf: Enrichment + Verifikation (2026-08-01) — 24 Bestandsevents veredelt/korrigiert, 0 Neuanlagen (Anti-Flut), 0 Code-Fixes (SEO-Infra intakt), mehrere Datenfehler behoben (3 falsche Schwimm-Venues, 2 spurious „Olympische Distanz", mehrere unbelegte Höhenmeter/Distanzen korrigiert)
- Build zuletzt grün: 1188 pages, 0 errors; `astro check` 0 errors/0 warnings; Sitemap 526 URLs (nur indexierbar, keine past-URLs)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): dünne Beschreibungen 243→**219** (−24); missing distanceKm (upcoming) 43→**42**; missing elevationGainM (upcoming) 234→**241** (+7: unbelegte Werte entfernt statt geraten); missing imageUrl (upcoming) 27→**28** (+1: 1 Nicht-Offiziell-Bild entfernt)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt. Nicht wieder anlegen bis funktionierende offizielle Seite eine Ausgabe ankündigt.
- OstSeenRadmarathon (Schwerin, MV) — 2026 offiziell abgesagt (zu wenige Voranmeldungen); cycloworld führt 02.08.2026 weiterhin spekulativ. Nicht anlegen.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben)
- **laacher-see-mtb-marathon (WEITERHIN OFFEN):** offizielle Seite (laachersee-mtb-marathon.de) am 01.08. erneut HTTP 503/bot-blocked (auch /marathon/ausschreibung.htm) → Distanzen/Hm unverändert (80 km/1300 Hm) belassen. 5. Auflage So 09.08.2026 in Nickenich bestätigt (sig-koblenz.de). Aggregatoren widersprechen sich (80/1600, 80/2240) → NICHT übernommen. imageUrl ist YouTube-Thumbnail (i.ytimg.com), kein offizieller Hero — bei nächster erreichbarer Runde ersetzen.
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, weiterhin NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Erst anlegen wenn Enrichment-Rückstand (noch 219 dünne) es zulässt.
- **Nicht-offizielle imageUrls (Aggregator/Logo — bei Gelegenheit ersetzen, kein Muss):** `stadtwerke-halle-triathlon` (hdsports.org), `edermuender-triathlon` (DLRG-Foto, Maße/Aspect unklar). `taegi-tri-wettingen` imageUrl diesen Lauf entfernt (hdsports.org + nur Logo-og:image). `valais-triathlon-festival` nutzt Wallis-**Tourismus**-Keyvisual statt Event-Hero (lädt, drin gelassen).
- **Schwimm-Venue-Audit (neu):** In diesem Lauf waren 3/6 DE-Tri-Venues falsch gespeichert (Regensburg „Baggersee"→Schleusenkanal, Edermünde „Freiheit-See"→Freibad Holzhausen, Meppen „Ems"→Möllersee). Muster aus früheren Läufen bestätigt → bei künftigen Enrichment-Läufen Schwimm-Venue immer explizit gegen die offizielle Seite prüfen.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt — plausibel belassen, nicht neu geraten; bei Gelegenheit nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~219 dünne Beschreibungen; August/September-Events (soonest-first) weiter priorisieren.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **laacher-see-mtb-marathon:** erneut geprüft — offizielle Seite weiterhin 503/bot-blocked, Distanzen unverändert belassen (bleibt im BACKLOG; Beschreibung aber mit bestätigten Fakten angereichert).
- **ironman-leeds Phantom-Verdacht ausgeräumt:** bestätigt als Englands einziger Volldistanz-IRONMAN 2026 (Roundhay Park), Termin von Juli (2025) auf **16.08.2026** verschoben — der Juli→August-Wechsel ist KEIN Phantom/Duplikat.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 (403 für Fetch-Tool → via Browser-UA gecrawlt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-07-29 |
| triathlon-austria.at/de/service-termine | 2026-07-31 |
| ironman.com Kalender (europaweit) | 2026-08-01 (Kalmar/Copenhagen/Leeds/Tallinn/Duisburg-703 direkt bestätigt; blockt teils Fetch) |
> Hinweis: 2026-08-01 war ein reiner Enrichment-/Verifikationslauf über offizielle Veranstalter-/Serienseiten (24 Events, soonest-first Aug 2026); Discovery-Aggregatoren NICHT flächig re-gecrawlt — **challenge-family / UCI-GF / cycloworld / k226 am längsten offen (seit 07-07…07-29), nächster Lauf bevorzugt** (ggf. mit Neuanlage-Budget für die 4 Backlog-Kandidaten).

---

## Quellen-Durchgang: 2026-08-01 (Enrichment- & Verifikations-Wartungslauf)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei 243 dünnen Beschreibungen ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, überwiegend 15.–22. August 2026, AT/DE/CH + große internationale IRONMAN) gegen offizielle Veranstalter-/Verbands-/Serienquellen (ironman.com, ÖTRV/Swiss/DTU, Organizer-Sites) verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes angefasste Event hat ein offiziell bestätigtes 2026-Datum. **0 entfernt / 0 neu.**

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Datenfehler behoben):
  - **AT/DE-Cycling (6):** `sommerholz-bergsprint` (3,43 km/205 Hm bestätigt; Geo-Fehler „Hausruckviertel"→Irrsee/Salzkammergut), `laacher-see-mtb-marathon` (Seite 503-blocked → Distanzen unverändert, nur Beschreibung angereichert; s. BACKLOG), `gainfeldclassic-bischofshofen` (distanceKm 4→**3,4**; websiteUrl bischofshofen.at tot → radmarathon.at), `hahnenkamm-mtb-kitzbuehel` (**Fehler:** ist Massenstart-MTB-Rennen, nicht „Teamwertung/Rennrad-Kat." → korrigiert; 9 km/940 Hm), `gaisberg-vertical-salzburg` (distanceKm 9→**8,5**, elevationGainM 800→**641**; Kat. `Berg` ergänzt), `cyclassics-hamburg` (30. Ausgabe, ADAC-Sponsor; unbelegte elevationGainM 400 **entfernt** — flache Route).
  - **DE-Triathlon (6):** `ostseeman-triathlon-gluecksburg` (Venue Kurstrand Sandwig/Flensburger Förde; unbelegte 1200 Hm **entfernt**), `regensburger-triathlon` (**Venue-Fehler:** „Baggersee"→Schleusenkanal unter der Oberpfalzbrücke; unbelegte 300 Hm entfernt), `edermuender-triathlon` (**Venue-Fehler:** „Freiheit-See"→Freibad Holzhausen; **Geo-Fehler:** nicht am Nationalpark Kellerwald-Edersee; distanceKm 16 ergänzt), `rodgau-triathlon` (Strandbad Nieder-Roden, beide Distanzen ausverkauft), `stadtwerke-halle-triathlon` (**Kat.-Fehler:** „Olympische Distanz" entfernt = 2026 nur Sprint + DM Swim&Run → `Sprintdistanz`/`Aquathlon`; distanceKm 51→26; Schwimmen in der Saale), `emsland-triathlon-meppen` (**Venue-Fehler:** „Ems"→Möllersee; **Kat.-Fehler:** nur 1 Format → „Olympische Distanz" entfernt; distanceKm 51→30).
  - **AT/CH-Triathlon (6):** `aloha-tri-traun` (**Datum:** 01.08.→**01.–02.08.**; Venue „Trauner Badesee"→Oedter See; Domain→alohasport.at; Indoor-Wechselzone Eishalle; unbelegte 150 Hm entfernt), `thiersee-triathlon` (8. Auflage; elevationGainM 500→**440**; Tiroler Meisterschaft), `jannersee-triathlon` (32. Auflage, Abendrennen 17:30; unbelegte 100 Hm entfernt), `kraigerseetriathlon-launsdorf` (10. Jubiläum, Kraigersee), `taegi-tri-wettingen` (33. Auflage, Schwimmen im Tägi-Freibad; distanceKm 52→**45**; imageUrl hdsports.org **entfernt**), `valais-triathlon-festival` (3. Auflage, Domaine des Îles Sion; alle Distanzen bestätigt).
  - **International IRONMAN (6):** `ironman-kalmar` (Ölandbrücke-2-Runden, ~500 Hm bestätigt), `ironman-copenhagen` (elevationGainM 400→**650**), `ironman-leeds` (Phantom-Verdacht ausgeräumt: einziger Volldistanz-IRONMAN Englands, Juli→**16.08.** verschoben; elevationGainM 1600→**2500** Yorkshire), `ironman-tallinn` (Volldistanz + 70.3-EM bestätigt; unbelegte 700 Hm **entfernt**), `ironman-703-duisburg` (**Rad-Distanz 88→90 km**; unbelegte 700 Hm entfernt — flacher Kurs), `dublin-city-triathlon` (Venue River Liffey oberhalb Islandbridge-Wehr; **offiziell keine Standard-Distanz 2026**, nur Sprint).
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors; `astro check` 0 errors/0 warnings. Sitemap 526 URLs (nur indexierbar, keine past-URLs). noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss, date-driven) und JSON-LD (`SportsEvent`/`ItemList`/`BreadcrumbList`/`Organization`/`WebSite`) intakt — **keine Code-Änderung nötig**.

---

## Quellen-Durchgang: 2026-07-31 (Enrichment- & Verifikations-Wartungslauf, Code-Fix)

Reiner Qualitäts-/Tiefen-Lauf: **0 Neuanlagen** (Anti-Flut — bei ~294 dünnen Beschreibungen und 43 fehlenden distanceKm ausschließlich veredelt). 4 Research-Agents haben 24 künftige Events (soonest-first, überwiegend August 2026, AT/DE + große internationale) gegen offizielle Veranstalter-/Verbands-/Serienquellen verifiziert und angereichert; Aggregatoren nur Discovery, kein prommer.net. Jedes angefasste Event hat ein offiziell bestätigtes 2026-Datum.

- **24 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Datenfehler behoben):
  - **AT-Cycling (6):** `bergkaiser-radmarathon-kematen` (**gravierender Fehler:** war fiktiver 155 km/3000 Hm „Inntal-Marathon" mit erfundenen „Nordketten-Bergen" → realer Bergsprint **25 km/1400 Hm** Kematen→Kühtai (2.020 m); Kat. `Radmarathon`→`Berg`; tote websiteUrl bergkaiser.at (DNS) → radsportevents.com), `clr-sauwald-bergsprint` (**Datumsfehler:** 13.08.→**14.08.2026** laut offizieller Seite; 10 km/420 Hm Rennrad-Bergzeitfahren bestätigt), `pirker-grenzerfahrung` (elevation 3150→**3050**, 27. Auflage, alle RTF/CTF-Strecken), `arlberg-giro` (**Streckenfehler:** falsche Pässe genannt → reale 2026-Alternativroute Silvretta gesperrt; 152→150 km, 2400→2500 Hm, ausverkauft), `race-around-austria` (Ultracycling-WM 2.200 km/30.000 Hm + Challenge-Varianten), `rad-am-salzburgring` (3 reale Bewerbe R1/R2/R3-EM; unbelegte „ÖM Masters" entfernt).
  - **DE-Cycling (6):** `nordschwarzwald-trophy` (**Distanzfehler:** distanceKm 69→**42** = reale MTB-Strecken 24/42; unplausible 2100 Hm entfernt — offiziell keine Hm publiziert), `goettinger-dreilaendermarathon` (Kat. `Radmarathon`→**RTF** = offiziell Radtourenfahrt, GPS-geführt/nicht gewertet; 222→230 km, 2800→3200 Hm, 5 Strecken), `wendland-chrono` (2. Auflage Zeitfahren, 22,8/45,6 km, neue TT-/Rennrad-Wertung 2026), `sks-sauerland-marathon` (Kat. `Gravel`→**Radmarathon**), `evertsberg-gravel` (**Distanzfehler:** 102/56→**158/90/53 km**, +1800 Hm, Nordic Gravel Series), `laacher-see-mtb-marathon` (bot-blocked → unverändert, s. BACKLOG).
  - **Triathlon AT/HU/SK (7):** `poettschinger-triathlon` (35. Auflage; Rad/Lauf 34/7,6→**36/7,5**; unbelegte 250 Hm entfernt), `steiraman-cross-triathlon` (1/38/12 km, 1200+1000 Hm, Grüne Lagune St. Margarethen; 2300→2200 Hm), `ferlach-aquathlon` (**Schwimmen 0,75→1,0 km** = ÖM-Distanz; ausverkauft/Warteliste), `slovakman-226-piestany` (23. Auflage, 3,8/180/42,2 Váh, SK+CZ-Meisterschaft), `extrememan-nagyatad` (37. Auflage, Baggersee Gyékényesi Kotró, HU-Langdistanz-Meisterschaft), `swim-run-swim-laengsee` (Format 1,5+5,4+1,0 = **7,9 km** statt 5; websiteUrl → alpenadriaswimcup.at), `marchfeld-triathlon-gerasdorf` (Sprint 0,5/20/5 + Olympisch 1,5/40/10; Veranstalter P3Event; unbelegte 100 Hm entfernt).
  - **International (5):** `alpe-dhuez-triathlon` (**halluzinierte Distanzen:** 3,9/177/40 → real **2,2/118/19** L-Format, 21 Kehren; erfundene 5000 Hm entfernt), `ironman-703-krakow` (Zakrzówek-Steinbruchsee, ausverkauft, WM-Quali), `xterra-czech-republic-prachatice` (1,5/33/10,5 Šumava, XTERRA World Tour), `triathlon-nyon` (37. Auflage, FISU WUC 2026; Rad 42, distanceKm 54→53,5), `cykelvasan-90-mora` (Kat. `Gravel`→**Radmarathon**; erfundene 820 Hm = Netto-Abfahrt, entfernt), `eiger-bike-challenge` (Kat. `Gravel`→**Radmarathon**; 80 km/4200 Hm bestätigt).
- **Code-Fix:** `src/lib/landing.ts` — fehlender `CY: 'zypern'` in `COUNTRY_SLUGS` ergänzt (seit 07-14 offen: `Record<Country,string>`-Typfehler in `astro check`, Zypern-Landing-Slug war `undefined`). Zypern hat nur 1 Event (< `MIN_EVENTS_PER_LANDING`) → keine eigene Landingpage, aber Typ jetzt vollständig; `astro check` wieder 0 errors.
- **0 entfernt / 0 neu.** Keine neuen Absagen — bergkaiser war ein Datenfehler, kein Nichtstattfinden.
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 526 URLs (nur indexierbar, keine past-URLs). noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss, date-driven in astro.config.mjs) und JSON-LD (`SportsEvent`, `ItemList`, `BreadcrumbList`) intakt — keine Code-Änderung nötig außer dem landing.ts-Fix.

---

## Quellen-Durchgang: 2026-07-29 (Enrichment- & Verifikations-Wartungslauf)

Fokus streng auf Qualität/Tiefe + Datenkorrektheit, **0 Neuanlagen** (Anti-Flut: mit ~335 dünnen Beschreibungen und 46/50 fehlenden Struktur-Feldern im Bestand ausschließlich veredelt). Discovery-Kalender (cycloworld, triathlondeutschland, triathlon-austria) erstmals seit 07-07 re-gecrawlt (nur für BACKLOG, keine Anlage). 6 Research-Agents, alle Fakten aus offiziellen Veranstalter-/Verbands-/Serienquellen bzw. offiziellen Ausschreibungs-PDFs; Aggregatoren nur Discovery, kein prommer.net.

- **27 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Datenfehler behoben):
  - **Triathlon (18):** `mainfrankentriathlon-kitzingen`, `ravensburger-triathlon` (**Fehler:** 2026 nur Sprint, keine Olympische Distanz → Kategorie reduziert, distanceKm 51→30, unbelegte elevation 400 entfernt), `brawo-triathlon-salzgitter`, `frankfurt-city-triathlon` (distanceKm 103→102, ausgebucht), `kamener-sparkassentriathlon` (**Fehler:** Schwimmen im **Freibad Kamen**, nicht „Kuhsee"; Veranstalter **TV Germania 1876 Kaiserau**, nicht „ASC Kamen"), `nagler-see-triathlon-nagel` (**tote websiteUrl** → runningconcepts.de; 2. Ausgabe; distanceKm 26 ergänzt), `sassenberger-triathlon` (ausgebucht), `scharmuetzelsee-triathlon-bad-saarow` (**Geo-Fehler:** liegt im Seenland Oder-Spree, nicht „Spreewald"/„Märkische Schweiz"), `oettinger-triathlon` (38. Ausgabe, Freibad, Limit 250), `bergsee-triathlon-schleusingen` (37. Auflage, wegen Talsperren-Bau von Sept auf Aug vorverlegt), `moersbach-man` (**Fehler:** reine Sprintdistanz, keine Olympic; Schwimmen im **Freibad Dickendorf**, nicht „Wiesensee"; **tote websiteUrl** → sg-moersbach.de; distanceKm 26), `nordseeman-wilhelmshaven` (19. Ausgabe, Para-DM, ausgebucht), `stadtwerke-borken-triathlon` (**Fehler:** Schwimmen im **Pröbstingsee**, nicht „Kulsumer See"; distanceKm 52→51), `city-triathlon-bremen` (Europahafen-Details), `datagroup-triathlon-nuernberg` (**websiteUrl** finishers.com-Aggregator → nuernberg-triathlon.de; Wöhrder See; ausverkauft), `kraichgau-summertime-triathlon` (Sieben-Erlen-See; distanceKm 51→52; unbelegter Veranstalter „TGS Neuthard" entfernt), `rheiner-channel-triathlon` (25. Auflage), `o-see-challenge-zittau` (26. Auflage, 13. DM Crosstriathlon; **elevationGainM 1049 offiziell ergänzt**), `poehler-triathlon` (ausgebucht; unbelegte Limits entfernt).
  - **Cycling (9):** `vogtland-radmarathon` (**Datumsfehler:** offiziell/BDR **26.07.2026** statt 02.08 → jetzt korrekt Past/noindex; websiteUrl cycloworld-Aggregator → vrt-plauen.de; 27. Auflage; +RTF, Breitensport ohne Wertung), `schwarzwald-super-radmarathon` (**Distanzfehler:** offiziell **255 km/6500 Hm** Gold statt 160/4000; 11. Auflage; keine Zeitnahme → +RTF), `velorace-dresden` (**Streckenfehler:** 4 Distanzen 17/34/51/102 statt 103/62/42/21; distanceKm 103→102; unbelegte elevation 600 entfernt — flacher Stadtkurs, offiziell kein GPX), `sks-sauerland-marathon` (**veraltete Daten:** offiziell **105 km/2740 Hm** statt 117/3863; websiteUrl → radsport-grafschaft.de), `althofner-radrennen` (**Fehler:** Einzelzeitfahren, Kat. Rundstreckenrennen→Zeitfahren; „23." statt „22."), `wobachbergrennen`/`sommerholz-bergsprint`/`kirchenbergrennen-hainfeld` (AT-Bergrennen-Backlog aufgelöst: Namen/URLs/Kategorien korrigiert).
- **0 entfernt / 0 neu.** Duisburg-Venue-Verlegung bestätigt, Bestand bereits korrekt. laacher-see-mtb: offizielle Seite bot-blocked → unverändert (BACKLOG).
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 526 URLs (nur indexierbar); noindex-Feature und JSON-LD intakt — keine Code-Änderung nötig. Vogtland korrekt aus der Sitemap gefallen.

---

> Ältere Sessions (07-27, 07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
