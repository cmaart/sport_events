# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-31)
- Events gesamt: **1138** | upcoming (>= heute): **474** | past (noindex): **664**
- Letzter Lauf: Enrichment + Verifikation (2026-07-31) — 24 Bestandsevents veredelt/korrigiert, 0 Neuanlagen (Anti-Flut), 1 Code-Fix (fehlender CY-Landing-Slug), mehrere Datenfehler behoben (u.a. 1 komplett halluziniertes Event korrigiert)
- Build zuletzt grün: 1188 pages, 0 errors; `astro check` 0 errors/0 warnings; Sitemap 526 URLs (nur indexierbar, keine past-URLs)
- Datenqualität (Heuristik <4 Sätze / <40 Wörter): dünne Beschreibungen 294→**271** (−23); missing distanceKm (upcoming) **43** (unverändert); missing elevationGainM (upcoming) 231→**235** (+4: unbelegte Werte entfernt statt geraten); missing imageUrl (upcoming) **27**

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
- **laacher-see-mtb-marathon (WEITERHIN OFFEN):** offizielle Seite (laachersee-mtb-marathon.de) am 31.07. erneut 503/bot-blocked → Distanzen/Hm unverändert (80 km/1300 Hm) belassen. Registrierung runtix.com + Co-Veranstalter sig-koblenz.de bestätigen aber 5. Auflage So 09.08.2026 in Nickenich (Datum stimmt). Aggregatoren nennen eine ~80-km-Runde mit ~1600 Hm (widerspricht gespeicherten 1300) → beim nächsten Lauf gegen offizielle Seite prüfen, wenn erreichbar.
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut, diesen Lauf NICHT bearbeitet):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). Alle vier noch nicht angelegt — nächster Lauf mit Neuanlage-Budget priorisieren, sofern Enrichment-Rückstand (271 dünne) es zulässt.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **rad-am-salzburgring:** distanceKm 25 / elevationGainM 100 offiziell NICHT belegt (Seite nennt keine Streckenlänge/Runden) — plausibel belassen, nicht neu geraten; bei Gelegenheit offiziell nachverifizieren.
- **Enrichment-Backlog (upcoming):** noch ~271 dünne Beschreibungen; August/September-Events (soonest-first) weiter priorisieren.

### ERLEDIGT diesen Lauf (aus früherem BACKLOG)
- **sks-sauerland-marathon:** Kategorie `Gravel` → `Radmarathon` (offiziell MTB-Marathon; nur die 73-km-Strecke ist Gravel). Distanzen 105/2740 bestätigt.
- **podersdorf-triathlon vs. „39. Austria Triathlon":** identisch — Bestand bereits korrekt als „Austria Triathlon Podersdorf", 39. Auflage, 04.–06.09.2026. Kein separates Event nötig.
- **AT-Bergrennen-Reste:** bergkaiser-radmarathon-kematen war komplett falsch beschrieben (fiktiver 155 km/3000 Hm Inntal-Marathon) → korrigiert auf realen Bergsprint **25 km/1400 Hm** nach Kühtai, Kat. `Radmarathon`→`Berg`, tote websiteUrl bergkaiser.at (DNS) → radsportevents.com.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| UCI Gran Fondo World Series | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 (403 für Fetch-Tool → via Browser-UA gecrawlt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-07-29 |
| triathlon-austria.at/de/service-termine | 2026-07-31 (Ferlach/Poettsching/Steiraman/Längsee event-DB direkt gegengeprüft) |
| ironman.com Kalender (europaweit) | 2026-07-31 (Krakow direkt bestätigt; ironman.com blockt teils Fetch) |
> Hinweis: 2026-07-31 war ein reiner Enrichment-/Verifikationslauf über offizielle Veranstalterseiten (~24 Events); die Discovery-Aggregatoren wurden NICHT flächig re-gecrawlt — challenge-family / UCI-GF / k226 am längsten offen, nächster Lauf bevorzugt.

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

## Quellen-Durchgang: 2026-07-27 (Enrichment- & Verifikations-Wartungslauf)

Fokus streng auf Qualität/Tiefe + Datenkorrektheit, **keine Neuanlagen** (Anti-Flut). 7 Research-Agents haben ~42 künftige Events gegen offizielle Veranstalter-/Verbandsseiten verifiziert; alle Fakten aus offiziellen Quellen, keine prommer.net, Aggregatoren nur zur Discovery.

- **26 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Struktur-/Datenfehler behoben):
  - **Triathlon (18):** `sika-triathlon-kornwestheim` (Fehler behoben: Schwimmen im Alfred-Kercher-**Hallenbad**, nicht „See"), `eberbacher-triathlon` (Neckar, ausverkauft, Limit 250+25), `albtal-triathlon-ettlingen` (Buchtzigsee, Limit 350, neue Staffelwertungen), `alzenauer-triathlon` (**Fehler:** See heißt **Meerhofsee**, nicht „Kahl-See"), `risstal-triathlon-laupheim` (**Fehler:** „Olympische Distanz" entfernt = nur Sprint; distanceKm 51→26; websiteUrl von DTU-Aggregator auf risstaltriathlon.de), `schwarzachtal-triathlon-ertingen` (distanceKm 25→36, 3×10-km-Rad, Helmpflicht), `wanderup-triathlon` (websiteUrl generisch→triathlon-wanderup.de, Triple Events, Badesee Norderfeld), `ratekau-triathlon` (**Datum-Fehler:** 02.08.→**12.07.2026** offiziell → damit korrekt Past/noindex; imageUrl war Bild des Laufevents „Rund um Ratekau" → offizielles Offendorf-Bild; identisch mit Offendorf-Triathlon, PALM Sports), `kanal-triathlon-rendsburg` (Kanal-Schwimmen, Breiholz, Kopfsteinpflaster-Passage), `fehmarn-triathlon` (Burgtiefe/Südstrand, Ostsee-Dreieckskurs, offizielles Bild), `hachede-triathlon-geesthacht` (Menzer-Werft-Platz, 4 Formate, PALM Sports), `otterndorf-triathlon` (websiteUrl→otterndorf-triathlon.de; **Fehler:** Schwimmen im **See Achtern Diek**, nicht „Meerwasserfreibad"), `cottbuser-triathlon` (Format ist **Supersprint** 0,4/10,2/2,5, jugenddominiert), `bad-sobernheimer-triathlon` (Volksdistanz 0,3/20/5; unbelegtes „Schwimmen in der Nahe" entfernt), `seenland-triathlon-steinberg` (Supersprint + Sprint, Limit 450), `willicher-triathlon` (Willich-333-Distanz; unbelegtes „Nierskanal"-Schwimmen entfernt, Schwimmen im Freizeitbad De Bütt), `licher-triathlon` (**Fehler:** ist **Cross-Triathlon**, Schwimmen im **Waldschwimmbad** statt „Leunebach-Stausee"; Kategorien + distanceKm 25→55 korrigiert), `apolda-triathlon` (websiteUrl→ac-apolda.de, 50-m-Becken, Hans-Geupel-Stadion).
  - **Cycling (8):** `riderman-bad-duerrheim` (offizielle Etappen-Zahlen: distanceKm 180→224, elevationGainM 3200→2985, 3 Etappen, 26. Auflage), `kitzbueheler-radmarathon` (6. Auflage, ausgebucht), `colnago-gf-luberon` (+elevationGainM 2500 offiziell), `zeitfahr-cup-seibersdorf-22` (+elevationGainM 64), `montafon-m3-mtb-marathon` (+elevationGainM 2500 offiziell M³), `la-purito-andorra` (**Datenfehler:** veraltete Distanzen 115/80/30 → offizielle 2026er **116/75/26 km**, Ziel Encamp), `granfondo-alberto-contador` (Coll de Rates/Vall d'Ebo, Limit 4.000), `ironman-70-3-zell-am-see` (Filzensattel 1.280 m, Global Athletes' Choice Award 2025).
- **1 Event entfernt:** `granfondo-tavira-2026` — offizielle Domain (clubebiketeamtavira.com) löst nicht auf (DNS), nur Aggregatoren führen ein 2026-Datum. Nicht verifizierbar → gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 528 URLs (nur indexierbar). noindex-Feature und JSON-LD intakt — keine Code-Änderung. ratekau + tavira korrekt aus der Sitemap gefallen.

---

> Ältere Sessions (07-14, k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
