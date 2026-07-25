# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-25)
- Events gesamt: **1139** | upcoming (>= heute): **510** | past (noindex): **629**
- Letzter Lauf: Enrichment-Wartungslauf (2026-07-25) — 0 Neuanlagen, **26 Bestandsevents veredelt** (Anti-Flut-Regel: viele dünne Bestandsseiten → nur veredeln)
- Build zuletzt grün: **1189 pages, 0 errors**; Sitemap **567 URLs** (nur indexierbar, keine past-URLs)

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt, nicht mehr in Zukunft; nicht anlegen (nur als past-Event denkbar, kein SEO-Wert)
- Desafío Doñana Sanlúcar (alte Location) — 2025-Austragung 18 Tage vor Start wegen fehlender Genehmigung abgesagt; 2026 offiziell nach Matalascañas (Almonte, Huelva) verlegt. Alte Sanlúcar-Location nicht wieder anlegen.
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- (leer) — Étape Caledonia und Mallorca 312 waren False-Alarm: beide 2026-Editionen offiziell durchgeführt (10.05. bzw. 25.04.), Homepages werben bereits für 2027. Keine offenen Phantoms.

### BACKLOG (offene Aufgaben aus letztem Lauf)
- **Enrichment-Backlog (upcoming):** noch **56 fehlende elevationGainM (cycling)**, **~223 dünne Beschreibungen**. Nächste Prioritäten (dünnste, meist kleine DE-Tris): ratekau-triathlon, kanal-triathlon-rendsburg, rochlitzer-bergtriathlon, stadtparktriathlon-hamburg, seenland-triathlon-steinberg, hachede-triathlon-geesthacht, tri-4-fun-minden, f60-triathlon-lichterfeld, moersbach-man, vredener-sparkassen-triathlon, apolda-triathlon (d=25), licher-triathlon (d=25). Große: granfondo-alassio (Website "work in progress"; re-check vor 2026-09-27), granfondo-tavira (Hosting zuletzt suspendiert), ironman-703-luxembourg (ironman.com blockiert WebFetch), fuenf-seen-rundfahrt-diessen (403).
- **imageUrl-Hygiene:** einige DE-Tris tragen Aggregator-Bilder (Kavval/Cloudinary/hdsports) statt offizieller Heros (u. a. sika-triathlon-kornwestheim, bad-sobernheimer, eberbacher, albtal-triathlon-ettlingen) — bei nächstem offiziellem Hero-Fund ersetzen. Kein Referer-Block bekannt, aber niedrige Priorität.
- **k226-Batch 3 (Discovery):** k226-EU-Kalender erneut auf neu erschienene Events checken (zuletzt 2026-07-14), ggf. weitere Balkan-/Skandinavien-Tris (Lost Sheep IE, Balatonman-Fűzfő verifizieren) und "Xtreme"-Sibling zu OlympusMan aufnehmen.
- **Discovery überfällig:** cycloworld / triathlondeutschland / triathlon-austria / ironman.com / UCI GFWS zuletzt 2026-07-07 geprüft — beim nächsten Lauf re-checken (älteste Quellen zuerst).
- **Datenqualität:** rennrad-Ultra-Events und Radmarathons AT/DE mit fehlenden Höhenmetern gezielt durchgehen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-07 |
| triathlondeutschland.de/termine (Tri DE) | 2026-07-25 (Einzel-Event-Verifikation Cottbus/Kornwestheim etc.) |
| triathlon-austria.at/de/service-termine (Tri AT) | 2026-07-07 |
| ironman.com Kalender (europaweit) | 2026-07-25 (Zell am See + Duisburg Datum via off. Kanäle bestätigt; WebFetch blockt weiterhin) |
| challenge-family.com Kalender | 2026-07-14 (Peguera/Vieux-Boucau/Forte Village verifiziert) |
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 (Batch 2 abgearbeitet) |
| Direkte offizielle Veranstalterseiten (Enrichment-Verifikation) | 2026-07-25 (26 Events gegen offizielle Quellen geprüft) |

---

## Quellen-Durchgang: 2026-07-25 (Enrichment-only Wartungslauf)

- **Fokus: reines Enrichment, 0 Neuanlagen.** Anti-Flut-Regel angewandt — mit ~223 dünnen Beschreibungen und 56 fehlenden Höhenmetern im Bestand keine neuen Events, nur Veredelung.
- **26 künftige Events angereichert** (Beschreibung 4–8 Sätze, faktenreich; Strukturfelder wo offiziell belegt), alle gegen **offizielle Veranstalter-/Verbandsseiten** verifiziert (5 parallele Recherche-Agents):
  - **AT (5):** kitzbueheler-radmarathon (Kurz-Variante-Höhenmeter 3.400→3.800 korrigiert), king-of-the-lake (16. Aufl., Losverfahren-Fenster), vienna-triathlon (10. Aufl., Bewerbsdetails), aloha-tri-mondseeland (distanceKm 110→111), steiraman-cross-triathlon (Streckendetails; unbelegte „175 Startplätze" aus Beschreibung entfernt).
  - **DE-Tri (10):** ironman-70-3-zell-am-see, ironman-703-duisburg, albtal-triathlon-ettlingen (+distanceKm 51, +elevation 750), willicher-triathlon, fehmarn-triathlon (+distanceKm 55), cottbuser-triathlon (+distanceKm 13; Supersprint statt Sprint präzisiert), sika-triathlon-kornwestheim (+distanceKm 26; **Faktenfehler korrigiert:** Schwimmen im Hallenbad, nicht „Kornwestheimer See"), bad-sobernheimer-triathlon (+distanceKm 25), alzenauer-triathlon (+distanceKm 27; **Faktenfehler korrigiert:** Meerhofsee statt „Kahl-See"), eberbacher-triathlon (+distanceKm 29, +elevation 310).
  - **GB/FR/IT-Tri (5):** outlaw-original-nottingham, vitruvian-rutland, odyssey-st-neots, triathlon-gerardmer-xl (+elevation 1890), aronamen-arona.
  - **Cycling/Tri EU (6):** granfondo-alpes-dazur, riderman-bad-duerrheim (**Fakten korrigiert:** distanceKm 180→224 = Etappensumme, elevation 3200→2985), ourem-fatima-granfondo, evertsberg-gravel, emede-triatlon-valladolid (+elevation 300), triatlon-ciudad-santander.
- **Datumsverifikation:** alle 26 Events tragen bereits das offiziell bestätigte 2026-Datum (keine Datumskorrektur nötig). Keine Absagen entdeckt → BLACKLIST unverändert.
- **imageUrl:** 2 fehlende offizielle Heros ergänzt (granfondo-alpes-dazur, triatlon-ciudad-santander). Für mehrere DE-Tris kein taugliches offizielles Hero ≥1200px gefunden → bestehende (teils Aggregator-)Bilder belassen, im BACKLOG vermerkt.
- **SEO / Sitemap:** `astro build` grün, **1189 pages, 0 errors**, 63 s. Sitemap **567 URLs** (nur indexierbar, 0 Past-URLs). Verifiziert: past-Event rendert `noindex, follow` + fehlt in Sitemap; upcoming-Event indexierbar + in Sitemap; JSON-LD `SportsEvent` + `BreadcrumbList` intakt.
- **Datenqualität-Delta:** thin descriptions **249→223** (−26); missing elevationGainM (cycling upcoming) 56 (unverändert — Höhenmeter-Ergänzungen betrafen Triathlons). Gesamtzahlen unverändert (1139 Events; upcoming 510 / past 629, Verschiebung durch Zeitablauf).

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
- **Datenqualität-Delta:** Missing elevationGainM (upcoming cycling) 65→~58 (–7); thin descriptions 172→~152 (–20); Missing imageUrl unverändert (Reihe an Zielen ohne taugliche Hero-Bilder).

---

## Quellen-Durchgang: 2026-07-09 (k226.com – Batch 1, EU-Scope)
- **Scope auf Userwunsch erweitert:** nicht mehr nur DE/AT + Ironman/Challenge, sondern europaweite Tris aus k226 (weiterhin kein USA/Japan/Australien).
- Lückenanalyse: ~23 fehlende EU-Tris offiziell verifiziert (4 Research-Agents). **+15 diesen Lauf angelegt** (Anti-Flut-Grenze eingehalten), 8 verifizierte im BACKLOG als „Batch 2".
- **Neu (15):** bayman-mont-saint-michel, natureman-var, vercorsman-saint-nazaire-en-royans (FR); ican-gandia, half-madrid (ES); estrela-xtreme-manteigas (PT); vitruvian-rutland, sandman-newborough, odyssey-st-neots, cotswold-classic (GB); gelreman-arnhem (NL); eaglexman-gran-sasso, aronamen-arona (IT); axtri-aurland (NO); olympos-x (GR).
- Alle Daten gegen offizielle Veranstalter-/FFTRI-Seiten verifiziert; elevationGainM nur wo offiziell belegt; keine imageUrls (keine tauglichen Hero-Bilder gefunden).
- Nicht bestätigt/übersprungen: Lost Sheep (IE), Balatonman Kenese (HU).
- Build grün: 1182 pages, 0 errors.

---

> Ältere Sessions (29 und davor) ausgelagert nach `progress-archive.md`.
