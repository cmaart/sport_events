# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-27)
- Events gesamt: **1138** | upcoming (>= heute): **477** | past (noindex): **661**
- Letzter Lauf: Enrichment + Verifikation (2026-07-27) — 26 Bestandsevents veredelt/korrigiert, 1 unverifizierbares entfernt, 0 Neuanlagen
- Build zuletzt grün: 1188 pages, 0 errors; Sitemap 528 URLs (nur indexierbar, keine past-URLs)
- Datenqualität: fehlende elevationGainM (upcoming cycling) 54→50; dünne Beschreibungen 119→99 (−20)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, kein Zukunftswert
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
- Granfondo Tavira (PT) — offizielle Domain clubebiketeamtavira.com löst nicht auf (DNS-Fehler); nur Aggregatoren führen „27.09.2026". 2026-07-27 entfernt. Nicht wieder anlegen bis funktionierende offizielle Seite eine Ausgabe ankündigt.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — alle diesen Lauf angefassten Events wurden gegen offizielle Quellen bestätigt.

### BACKLOG (offene Aufgaben aus letztem Lauf)
- **AT-Bergrennen Namens-/Klassifikation prüfen:** Offizielle Serie (alpenteamcup.at) nennt `wobachbergrennen-2026` neuerdings „Wobachrennen" und `kirchenbergrennen-hainfeld-2026` „Landsthalsprint" (Offroad-/MTB-Hillclimb, kein Straßenrennen). km/Hm dieser Events + `althofner-radrennen-2026` (Datum 16. vs 23.08. ambivalent; laut Agent Einzelzeitfahren, nicht Rundstreckenrennen) + `sommerholz-bergsprint-2026` stammen nur von radmarathon.at — gegen offizielle Ausschreibungs-PDFs verifizieren, bevor Felder/Name/Kategorie geändert werden. Diesen Lauf bewusst unangetastet gelassen (aggregator-only).
- **IRONMAN 70.3 Duisburg:** tri-mag berichtete Venue-Verlegung „weg von der Regattastrecke"; Schwimm-/Radort + Zieleinlauf (Rathaus vs. Schauinsland-Reisen-Arena) vor nächster Enrichment-Runde offiziell gegenprüfen.
- **Elevation offiziell nicht publiziert (nicht schätzen, Feld bewusst leer):** adac-cycling-tour-heilbronn, niederrhein-gravel-kalkar, greifenstein-bike-marathon, ourem-fatima-granfondo, wendland-chrono, velofondo-lausitzring, zadar-granfondo, la-purito-andorra (nur Tourismus-Hm), granfondo-alberto-contador (nur Presse-Hm). Ein großer Teil der verbleibenden 50 „missing elevation" sind flache Nordic-/Gravel-/ZF-Events ohne offizielle Hm — nicht als Lücke behandeln.
- **k226-Batch 3 (Discovery):** k226-EU-Kalender erneut auf neu erschienene Events checken (Balkan/Skandinavien-Tris, Lost Sheep, Balatonman-Fűzfő, OlympusMan-Xtreme-Sibling).
- **Enrichment-Backlog (upcoming):** noch ~99 dünne Beschreibungen; weiterhin kleine AT/DE-Triathlons und Radmarathons mit dünnem Content priorisieren.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-07 |
| triathlondeutschland.de/termine (Tri DE) | 2026-07-07 |
| triathlon-austria.at/de/service-termine (Tri AT) | 2026-07-07 |
| ironman.com Kalender (europaweit) | 2026-07-27 (Zell am See / Duisburg verifiziert, ironman.com blockt WebFetch → via Partner/Tourismus) |
| challenge-family.com Kalender | 2026-07-14 |
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 (Batch 2 abgearbeitet) |
> Hinweis: 2026-07-27 war ein Enrichment-/Verifikationslauf — die Discovery-Kalender (cycloworld, triathlondeutschland, triathlon-austria) wurden NICHT neu durchgecrawlt; stattdessen ~42 offizielle Veranstalterseiten direkt geprüft. Nächster Lauf: älteste Discovery-Quellen (07-07) re-checken.

---

## Quellen-Durchgang: 2026-07-27 (Enrichment- & Verifikations-Wartungslauf)

Fokus streng auf Qualität/Tiefe + Datenkorrektheit, **keine Neuanlagen** (Anti-Flut). 7 Research-Agents haben ~42 künftige Events gegen offizielle Veranstalter-/Verbandsseiten verifiziert; alle Fakten aus offiziellen Quellen, keine prommer.net, Aggregatoren nur zur Discovery.

- **26 Bestandsevents veredelt/korrigiert** (Beschreibung 4–8 Sätze, faktenreich; Struktur-/Datenfehler behoben):
  - **Triathlon (18):** `sika-triathlon-kornwestheim` (Fehler behoben: Schwimmen im Alfred-Kercher-**Hallenbad**, nicht „See"), `eberbacher-triathlon` (Neckar, ausverkauft, Limit 250+25), `albtal-triathlon-ettlingen` (Buchtzigsee, Limit 350, neue Staffelwertungen), `alzenauer-triathlon` (**Fehler:** See heißt **Meerhofsee**, nicht „Kahl-See"), `risstal-triathlon-laupheim` (**Fehler:** „Olympische Distanz" entfernt = nur Sprint; distanceKm 51→26; websiteUrl von DTU-Aggregator auf risstaltriathlon.de), `schwarzachtal-triathlon-ertingen` (distanceKm 25→36, 3×10-km-Rad, Helmpflicht), `wanderup-triathlon` (websiteUrl generisch→triathlon-wanderup.de, Triple Events, Badesee Norderfeld), `ratekau-triathlon` (**Datum-Fehler:** 02.08.→**12.07.2026** offiziell → damit korrekt Past/noindex; imageUrl war Bild des Laufevents „Rund um Ratekau" → offizielles Offendorf-Bild; identisch mit Offendorf-Triathlon, PALM Sports), `kanal-triathlon-rendsburg` (Kanal-Schwimmen, Breiholz, Kopfsteinpflaster-Passage), `fehmarn-triathlon` (Burgtiefe/Südstrand, Ostsee-Dreieckskurs, offizielles Bild), `hachede-triathlon-geesthacht` (Menzer-Werft-Platz, 4 Formate, PALM Sports), `otterndorf-triathlon` (websiteUrl→otterndorf-triathlon.de; **Fehler:** Schwimmen im **See Achtern Diek**, nicht „Meerwasserfreibad"), `cottbuser-triathlon` (Format ist **Supersprint** 0,4/10,2/2,5, jugenddominiert), `bad-sobernheimer-triathlon` (Volksdistanz 0,3/20/5; unbelegtes „Schwimmen in der Nahe" entfernt), `seenland-triathlon-steinberg` (Supersprint + Sprint, Limit 450), `willicher-triathlon` (Willich-333-Distanz; unbelegtes „Nierskanal"-Schwimmen entfernt, Schwimmen im Freizeitbad De Bütt), `licher-triathlon` (**Fehler:** ist **Cross-Triathlon**, Schwimmen im **Waldschwimmbad** statt „Leunebach-Stausee"; Kategorien + distanceKm 25→55 korrigiert), `apolda-triathlon` (websiteUrl→ac-apolda.de, 50-m-Becken, Hans-Geupel-Stadion).
  - **Cycling (8):** `riderman-bad-duerrheim` (offizielle Etappen-Zahlen: distanceKm 180→224, elevationGainM 3200→2985, 3 Etappen ZF 16,1/226 + 112,9/1520 + 95/1239, 26. Auflage), `kitzbueheler-radmarathon` (6. Auflage, ausgebucht), `colnago-gf-luberon` (+elevationGainM 2500 offiziell), `zeitfahr-cup-seibersdorf-22` (+elevationGainM 64, Kurs Seibersdorf–Reisenberg–Hof a. d. Leitha), `montafon-m3-mtb-marathon` (+elevationGainM 2500 offiziell M³), `la-purito-andorra` (**Datenfehler:** veraltete Distanzen 115/80/30 → offizielle 2026er **116/75/26 km**, Ziel Encamp, 6 Pässe), `granfondo-alberto-contador` (Coll de Rates/Vall d'Ebo, Limit 4.000, entschärfte Streckenführung 2026), `ironman-70-3-zell-am-see` (Filzensattel 1.280 m, Global Athletes' Choice Award 2025 Platz 1 „Overall Satisfaction" + „Best Bike").
- **1 Event entfernt:** `granfondo-tavira-2026` — offizielle Domain (clubebiketeamtavira.com) löst nicht auf (DNS), nur Aggregatoren führen ein 2026-Datum. Nicht verifizierbar → gelöscht + BLACKLIST + CLAUDE.md „Known Cancelled".
- **Bewusst NICHT angefasst:** AT-Bergrennen (althofner/wobach/sommerholz/kirchenberg) — vollständige Daten vorhanden, Namens-/Klassifikations-Nuancen aber nur aggregator-belegt → BACKLOG statt unverifizierte Änderung. Bereits in Vorläufen veredelte EU-Fondos (alpes-dazur, king-of-the-lake, vienna, colnago-Text, niederrhein-gravel, greifenstein, ourem, wendland, velofondo, adac-heilbronn, zadar) durch Agents bestätigt — keine Änderung nötig.
- **SEO / Sitemap:** `astro build` grün, 1188 pages, 0 errors. Sitemap 528 URLs (nur indexierbar). noindex-Feature (past → `noindex, follow` + Sitemap-Ausschluss) und JSON-LD (`SportsEvent`, `BreadcrumbList`) intakt — keine Code-Änderung nötig. ratekau + tavira korrekt aus der Sitemap gefallen.

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

## Quellen-Durchgang: 2026-07-09 (k226.com – Batch 1, EU-Scope)
- **Scope auf Userwunsch erweitert:** nicht mehr nur DE/AT + Ironman/Challenge, sondern europaweite Tris aus k226 (weiterhin kein USA/Japan/Australien).
- Lückenanalyse: ~23 fehlende EU-Tris offiziell verifiziert (4 Research-Agents). **+15 diesen Lauf angelegt** (Anti-Flut-Grenze eingehalten), 8 verifizierte im BACKLOG als „Batch 2".
- **Neu (15):** bayman-mont-saint-michel, natureman-var, vercorsman-saint-nazaire-en-royans (FR); ican-gandia, half-madrid (ES); estrela-xtreme-manteigas (PT); vitruvian-rutland, sandman-newborough, odyssey-st-neots, cotswold-classic (GB); gelreman-arnhem (NL); eaglexman-gran-sasso, aronamen-arona (IT); axtri-aurland (NO); olympos-x (GR).
- Alle Daten gegen offizielle Veranstalter-/FFTRI-Seiten verifiziert; elevationGainM nur wo offiziell belegt; keine imageUrls (keine tauglichen Hero-Bilder gefunden).
- Nicht bestätigt/übersprungen: Lost Sheep (IE), Balatonman Kenese (HU).
- Build grün: 1182 pages, 0 errors.

---

> Ältere Sessions (k226-Batch 07-09, Session 29 und davor) ausgelagert nach `progress-archive.md`.
