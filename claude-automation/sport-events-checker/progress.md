# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-29)
- Events gesamt: **1138** | upcoming (>= heute): **475** | past (noindex): **663**
- Letzter Lauf: Enrichment + Verifikation (2026-07-29) — 27 Bestandsevents veredelt/korrigiert, 0 Neuanlagen (Anti-Flut), 1 Datumsfehler korrigiert (Vogtland → past)
- Build zuletzt grün: 1188 pages, 0 errors; Sitemap 526 URLs (nur indexierbar, keine past-URLs)
- Datenqualität: dünne Beschreibungen 335→309 (−26); missing distanceKm 46→43 (−3); missing elevationGainM (upcoming cycling) 50→51 (2 unbelegte entfernt, verifizierte ergänzt)

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
- **AT-Bergrennen (ERLEDIGT 2026-07-29):** althofen = flaches Einzelzeitfahren (Kat. Rundstreckenrennen→Zeitfahren, „23." statt „22."), Datum 16.08 bestätigt; wobachbergrennen → offizieller Name **„Wobachrennen"** + websiteUrl alpenteamcup.at/wobach/; kirchenbergrennen → offizieller Name **„Landsthalsprint"**, Offroad/MTB-Bergsprint (nur MTB-/E-Bike-Klassen, keine Rennrad-Klasse) + websiteUrl alpenteamcup.at/landsthalsprint/; sommerholz voll bestätigt (distanceKm 3,43). **Offen:** Schema hat keine MTB-Kategorie — Landsthalsprint provisorisch als „Berg"; km/Hm von Wobach + Landsthal weiterhin nur aggregator-belegt (unverändert gelassen, nicht offiziell).
- **IRONMAN 70.3 Duisburg (ERLEDIGT):** Venue-Verlegung „weg von der Regattastrecke" bestätigt (tri-mag) — Bestand bereits korrekt (Schwimmen Innenhafen, Ziel Burgplatz/Rathaus). Kein Handlungsbedarf. (ironman.com blockt Fetch → Datum via Aggregator konsistent, nicht direkt reverifiziert.)
- **laacher-see-mtb-marathon:** offizielle Seite (laachersee-mtb-marathon.de) 503/429 bot-blocked → Distanzen/Hm nicht offiziell verifizierbar; Bestand (80 km/1300 Hm) diesen Lauf ungeprüft belassen. Nächster Lauf erneut versuchen; ggf. Organiser-Facebook (~30-km-Runde 1–3×, 5. Auflage) heranziehen.
- **sks-sauerland-marathon:** 2026 offiziell MTB-Marathon (Ultra 105/2740, Marathon 73/1890, Wilzenberg 41/1040) — Kategorie steht noch auf „Gravel" (nur die 73-km-Strecke ist Gravel); ggf. auf „Radmarathon" ändern.
- **Elevation offiziell nicht publiziert (nicht schätzen):** frankfurt-city (500), city-bremen (100), datagroup-nuernberg (300) — Stadt-Tris, flach; Bestandswerte unbelegt, aber plausibel belassen. Ratekau-Muster: bei nächster Runde entscheiden ob entfernen.
- **Discovery-Kandidaten 2026-07-29 (offiziell verifizieren, DANN erst anlegen — Anti-Flut):** SURM – Schwarzwald Ultra Radmarathon (Alpirsbach, 20.09), Salt&Lake Trail (Salzburg, Gravel/Bikepacking, 26.09), Südkärntner Triathlon (St. Kanzian/Klopeinersee, 12.09), RügenChallenge (Sellin, 11.10). **Prüfen:** podersdorf-triathlon-2026 vs. „39. Austria Triathlon" (05.–06.09, Lang-/Olympisch) — identisch oder separat? Übrige Discovery-Treffer (Münsterland Giro, VulkanBike, Schwarzwald Bike Marathon, Brezel Race, GFNY Bremen, Alb Gold, Ötztaler, Kitzbüheler, King of the Lake, Pannonia, Vienna, Fehmarn, Alzenauer, Seenland, Sindelfinger, Köln, Weinstadt, Powerman Würselen, Zwickau, Zell am See, Mondsee, XTERRA Austria, Bad Radkersburg u.a.) bereits im Bestand.
- **Enrichment-Backlog (upcoming):** noch ~309 dünne Beschreibungen; September-Events (viele in Discovery gesichtet) priorisieren.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| challenge-family.com Kalender | 2026-07-14 |
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 |
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-29 (403 für Fetch-Tool → via Browser-UA gecrawlt; Sept+ bevorzugt) |
| triathlondeutschland.de / dtu-kalender.de | 2026-07-29 (Sept+ Seiten gelesen; Event-URLs in Listenansicht nicht exponiert) |
| triathlon-austria.at/de/service-termine | 2026-07-29 (Default-Ansicht endet Ende Sept; „ABGESAGT"-Einträge gefiltert) |
| ironman.com Kalender (europaweit) | 2026-07-29 (Duisburg via tri-mag; ironman.com blockt Fetch) |

---

## Quellen-Durchgang: 2026-07-29 (Enrichment- & Verifikations-Wartungslauf)

Fokus streng auf Qualität/Tiefe + Datenkorrektheit, **0 Neuanlagen** (Anti-Flut: mit ~335 dünnen Beschreibungen und 46/50 fehlenden Struktur-Feldern im Bestand ausschließlich veredelt). Discovery-Kalender (cycloworld, triathlondeutschland, triathlon-austria) erstmals seit 07-07 re-gecrawlt (nur für BACKLOG, keine Anlage). 6 Research-Agents, alle Fakten aus offiziellen Veranstalter-/Verbands-/Serienquellen bzw. offiziellen Ausschreibungs-PDFs; Aggregatoren nur Discovery, kein prommer.net.

- **27 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Datenfehler behoben):
  - **Triathlon (18):** `mainfrankentriathlon-kitzingen`, `ravensburger-triathlon` (**Fehler:** 2026 nur Sprint, keine Olympische Distanz → Kategorie reduziert, distanceKm 51→30, unbelegte elevation 400 entfernt), `brawo-triathlon-salzgitter`, `frankfurt-city-triathlon` (distanceKm 103→102, ausgebucht), `kamener-sparkassentriathlon` (**Fehler:** Schwimmen im **Freibad Kamen**, nicht „Kuhsee"; Veranstalter **TV Germania 1876 Kaiserau**, nicht „ASC Kamen"), `nagler-see-triathlon-nagel` (**tote websiteUrl** → runningconcepts.de; 2. Ausgabe; distanceKm 26 ergänzt), `sassenberger-triathlon` (ausgebucht), `scharmuetzelsee-triathlon-bad-saarow` (**Geo-Fehler:** liegt im Seenland Oder-Spree, nicht „Spreewald"/„Märkische Schweiz"), `oettinger-triathlon` (38. Ausgabe, Freibad, Limit 250), `bergsee-triathlon-schleusingen` (37. Auflage, wegen Talsperren-Bau von Sept auf Aug vorverlegt), `moersbach-man` (**Fehler:** reine Sprintdistanz, keine Olympic; Schwimmen im **Freibad Dickendorf**, nicht „Wiesensee"; **tote websiteUrl** → sg-moersbach.de; distanceKm 26), `nordseeman-wilhelmshaven` (19. Ausgabe, Para-DM, ausgebucht), `stadtwerke-borken-triathlon` (**Fehler:** Schwimmen im **Pröbstingsee**, nicht „Kulsumer See"; distanceKm 52→51), `city-triathlon-bremen` (Europahafen-Details), `datagroup-triathlon-nuernberg` (**websiteUrl** finishers.com-Aggregator → nuernberg-triathlon.de; Wöhrder See; ausverkauft), `kraichgau-summertime-triathlon` (Sieben-Erlen-See; distanceKm 51→52; unbelegter Veranstalter „TGS Neuthard" entfernt), `rheiner-channel-triathlon` (25. Auflage), `o-see-challenge-zittau` (26. Auflage, 13. DM Crosstriathlon; **elevationGainM 1049 offiziell ergänzt**), `poehler-triathlon` (ausgebucht; unbelegte Limits entfernt).
  - **Cycling (9):** `vogtland-radmarathon` (**Datumsfehler:** offiziell/BDR **26.07.2026** statt 02.08 → jetzt korrekt Past/noindex; websiteUrl cycloworld-Aggregator → vrt-plauen.de; 27. Auflage; +RTF, Breitensport ohne Wertung), `schwarzwald-super-radmarathon` (**Distanzfehler:** offiziell **255 km/6500 Hm** Gold statt 160/4000; 11. Auflage; keine Zeitnahme → +RTF), `velorace-dresden` (**Streckenfehler:** 4 Distanzen 17/34/51/102 statt 103/62/42/21; distanceKm 103→102; unbelegte elevation 600 entfernt — flacher Stadtkurs, offiziell kein GPX), `sks-sauerland-marathon` (**veraltete Daten:** offiziell **105 km/2740 Hm** statt 117/3863; websiteUrl → radsport-grafschaft.de), `althofner-radrennen` (**Fehler:** Einzelzeitfahren, Kat. Rundstreckenrennen→Zeitfahren; „23." statt „22."), `wobachbergrennen`/`sommerholz-bergsprint`/`kirchenbergrennen-hainfeld` (siehe unten).
  - **AT-Bergrennen-Backlog aufgelöst:** `wobachbergrennen` → Name „Wobachrennen" + offizielle Serien-URL; `kirchenbergrennen-hainfeld` → Name „Landsthalsprint", als Offroad/MTB-Bergsprint korrekt beschrieben + offizielle URL; `sommerholz-bergsprint` offiziell bestätigt (distanceKm 3→3,43); `althofner-radrennen` s.o.
- **0 entfernt / 0 neu.** Duisburg-Venue-Verlegung bestätigt, Bestand bereits korrekt. laacher-see-mtb: offizielle Seite bot-blocked → unverändert (BACKLOG).
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 526 URLs (nur indexierbar); noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss, date-driven) und JSON-LD (`SportsEvent`, `BreadcrumbList`) intakt — keine Code-Änderung nötig. Vogtland korrekt aus der Sitemap gefallen.

---

## Quellen-Durchgang: 2026-07-27 (Enrichment- & Verifikations-Wartungslauf)

Fokus streng auf Qualität/Tiefe + Datenkorrektheit, **keine Neuanlagen** (Anti-Flut). 7 Research-Agents haben ~42 künftige Events gegen offizielle Veranstalter-/Verbandsseiten verifiziert; alle Fakten aus offiziellen Quellen, keine prommer.net, Aggregatoren nur zur Discovery.

- **26 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Struktur-/Datenfehler behoben):
  - **Triathlon (18):** `sika-triathlon-kornwestheim` (Fehler behoben: Schwimmen im Alfred-Kercher-**Hallenbad**, nicht „See"), `eberbacher-triathlon` (Neckar, ausverkauft, Limit 250+25), `albtal-triathlon-ettlingen` (Buchtzigsee, Limit 350, neue Staffelwertungen), `alzenauer-triathlon` (**Fehler:** See heißt **Meerhofsee**, nicht „Kahl-See"), `risstal-triathlon-laupheim` (**Fehler:** „Olympische Distanz" entfernt = nur Sprint; distanceKm 51→26; websiteUrl von DTU-Aggregator auf risstaltriathlon.de), `schwarzachtal-triathlon-ertingen` (distanceKm 25→36, 3×10-km-Rad, Helmpflicht), `wanderup-triathlon` (websiteUrl generisch→triathlon-wanderup.de, Triple Events, Badesee Norderfeld), `ratekau-triathlon` (**Datum-Fehler:** 02.08.→**12.07.2026** offiziell → damit korrekt Past/noindex; imageUrl war Bild des Laufevents „Rund um Ratekau" → offizielles Offendorf-Bild; identisch mit Offendorf-Triathlon, PALM Sports), `kanal-triathlon-rendsburg` (Kanal-Schwimmen, Breiholz, Kopfsteinpflaster-Passage), `fehmarn-triathlon` (Burgtiefe/Südstrand, Ostsee-Dreieckskurs, offizielles Bild), `hachede-triathlon-geesthacht` (Menzer-Werft-Platz, 4 Formate, PALM Sports), `otterndorf-triathlon` (websiteUrl→otterndorf-triathlon.de; **Fehler:** Schwimmen im **See Achtern Diek**, nicht „Meerwasserfreibad"), `cottbuser-triathlon` (Format ist **Supersprint** 0,4/10,2/2,5, jugenddominiert), `bad-sobernheimer-triathlon` (Volksdistanz 0,3/20/5; unbelegtes „Schwimmen in der Nahe" entfernt), `seenland-triathlon-steinberg` (Supersprint + Sprint, Limit 450), `willicher-triathlon` (Willich-333-Distanz; unbelegtes „Nierskanal"-Schwimmen entfernt, Schwimmen im Freizeitbad De Bütt), `licher-triathlon` (**Fehler:** ist **Cross-Triathlon**, Schwimmen im **Waldschwimmbad** statt „Leunebach-Stausee"; Kategorien + distanceKm 25→55 korrigiert), `apolda-triathlon` (websiteUrl→ac-apolda.de, 50-m-Becken, Hans-Geupel-Stadion).
  - **Cycling (8):** `riderman-bad-duerrheim` (offizielle Etappen-Zahlen: distanceKm 180→224, elevationGainM 3200→2985, 3 Etappen ZF 16,1/226 + 112,9/1520 + 95/1239, 26. Auflage), `kitzbueheler-radmarathon` (6. Auflage, ausgebucht), `colnago-gf-luberon` (+elevationGainM 2500 offiziell), `zeitfahr-cup-seibersdorf-22` (+elevationGainM 64, Kurs Seibersdorf–Reisenberg–Hof a. d. Leitha), `montafon-m3-mtb-marathon` (+elevationGainM 2500 offiziell M³), `la-purito-andorra` (**Datenfehler:** veraltete Distanzen 115/80/30 → offizielle 2026er **116/75/26 km**, Ziel Encamp, 6 Pässe), `granfondo-alberto-contador` (Coll de Rates/Vall d'Ebo, Limit 4.000, entschärfte Streckenführung 2026), `ironman-70-3-zell-am-see` (Filzensattel 1.280 m, Global Athletes' Choice Award 2025 Platz 1 „Overall Satisfaction" + „Best Bike").
- **1 Event entfernt:** `granfondo-tavira-2026` — offizielle Domain (clubebiketeamtavira.com) löst nicht auf (DNS), nur Aggregatoren führen ein 2026-Datum. Nicht verifizierbar → gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 528 URLs (nur indexierbar). noindex-Feature und JSON-LD intakt — keine Code-Änderung. ratekau + tavira korrekt aus der Sitemap gefallen.

---

## Quellen-Durchgang: 2026-07-14 (k226-Batch 2 + Enrichment-Wartungslauf)

- **Phantom-Verdachtsfälle Étape Caledonia + Mallorca 312:** Beide gegen offizielle Quellen und Ergebnislisten geprüft — 2026-Editionen fanden regulär statt (10.05. bzw. 25.04.), die Websites bewerben lediglich schon 2027. Kein Handlungsbedarf; ZU-PRÜFEN-Liste geleert.
- **k226-Batch 2 (offiziell gegengeprüft):** +7 Tris angelegt, 1 verworfen.
  - Verworfen: **triathlon-lac-du-bouchet-2026** (bereits am 11.–12.07.2026 stattgefunden, kein Zukunftswert).
  - Neu (7): `triathlon-saint-cirq-lapopie-2026` (FR, Langdistanz, 26.09., 226/2000), `openlakes-atlantique-royan-2026` (FR, Mitteldistanz, 05.09., 93 km statt 90), `100x100half-el-vendrell-2026` (ES, Mitteldistanz, 20.09., 80/648), `100x100half-platja-daro-2026` (ES, Mitteldistanz, 04.10., 86/1160 — Pre-Note-Distanzen und -Höhenmeter waren falsch), `spirit-of-78-porto-2026` (PT, **Langdistanz** 4,2/180/42 — nicht Mitteldistanz wie im Pre-Note!), `ocean-lava-montenegro-kotor-2026` (ME, Mitteldistanz, 11.10.), `olympusman-paphos-2026` (CY, Langdistanz, 07.11., Standard-Format 1,9/84/21 + 2940 Hm — Xtreme-Sibling separat notierbar).
  - **Neues Land:** `CY` (Zypern) zu `COUNTRIES` in `src/lib/types.ts` ergänzt inkl. Label + Flagge.
- **Enrichment (20 künftige Events):** Fokus Kernfakten (distanceKm/elevationGainM) und faktenreiche Beschreibungen aus offiziellen Quellen.
  - **Cycling (12):** `costa-del-sol-gran-fondo` (Distanz 126→130, +3300 Hm, Peñas-Blancas-Schluss); `diekirch-valkenswaard` (Distanz 255→250, +2700 Hm, 46. Auflage); `gfny-uppsala` (+495 Hm, Ulva Kvarn + Gamla Uppsala); `granfondo-pag` (+1210 Hm, Novalja-Start, Route); `gravel-festival-bern` (+940 Hm, erstmals SM 2026); `gravel-to-hell-barsbuettel` (Distanz 79→74, exakter Start); `hansens-cykelloeb` (10. Auflage + Rahmen); `holsteiner-wellenritt` (Distanz 220→204, alle 4 Distanzen 56/88/130/204); `cycling-paradise-sylt` (4. Auflage, 3 Distanzen, Historie); `adac-cycling-tour-heilbronn` (Santini-Trikot + DT-Ziel); `adelsberger-bike-marathon` (Zeisigwald + Bergwertung neu); `brabants-mooiste-oisterwijk` (Boellekes + Rahmen).
  - **Triathlon (8):** `brombachsee-triathlon-pleinfeld` (Höhenmeter 800→1125 korrigiert, 3-Runden-Rad, ausverkauft); `castle-race-hever` (Hever Castle Lake + River Eden, alle Distanzen inkl. Junior); `challenge-forte-village-sardinia` (+1075 Hm, geschlossener Radkurs Route); `challenge-peguera-mallorca` (+1000 Hm, 2×45 km, Rahmenprogramm 2026); `challenge-vieux-boucau` (+57 Hm — sehr flach!, Rennwochenende Sa/So); `desafio-castilla-leon` (8. Auflage, Canal de Castilla + FETRI + Limit 350); `desafio-donana` (**Location Sanlúcar → Matalascañas** verlegt, Datum 17.10.→04.10., 1,9/75/20); `europe-triathlon-multisport-banyoles` (kompletter Zeitplan 8 Titel, 1992er Olympia-Venue).
- **SEO / Sitemap:** `astro build` 1189 pages, 0 errors, 65 s. Sitemap 603 URLs (nur indexierbare, keine past-Events); noindex-Feature aus Session 27 stabil (586 vergangene Events aus Sitemap gefiltert und rendern `noindex, follow`).
- **Datenqualität-Delta:** Missing elevationGainM (upcoming cycling) 65→~58 (–7); thin descriptions 172→~152 (–20); Missing imageUrl unverändert.

---

> Ältere Sessions (k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
