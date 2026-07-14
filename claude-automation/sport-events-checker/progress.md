# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-14)
- Events gesamt: **1139** | upcoming (>= heute): **553** | past (noindex): **586**
- Letzter Lauf: k226-Batch 2 + Enrichment (2026-07-14) — +7 europäische Tris, 20 Bestandsevents veredelt
- Build zuletzt grün: 1189 pages, 0 errors; Sitemap 603 URLs (nur indexierbar, keine past-URLs)

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
- **Enrichment-Backlog (upcoming):** noch 65 fehlende elevationGainM (cycling), 172 dünne Beschreibungen. Prioritäten: adac-cycling-tour-heilbronn (elevation n.v.), gotland360-visby (elevation n.v.), granfondo-alassio (Website "work in progress"; noch mal re-checken vor 2026-09-27), granfondo-alberto-contador (elevation n.v.), granfondo-tavira (Hosting suspendiert), fuenf-seen-rundfahrt-diessen (403), miriquidi-bike-challenge, exmoor-beast-sportive, ironman-703-luxembourg (ironman.com blockiert WebFetch).
- **k226-Batch 3 (Discovery):** nächster Lauf k226-EU-Kalender erneut auf neu erschienene Events checken, ggf. weitere Balkan- und Skandinavien-Tris (Lost Sheep, Balatonman-Fűzfő verifizieren) und "Xtreme"-Sibling zu OlympusMan aufnehmen.
- **Datenqualität:** rennrad-Ultra-Events und Radmarathons AT/DE mit fehlenden Höhenmetern gezielt durchgehen.

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-07 |
| triathlondeutschland.de/termine (Tri DE) | 2026-07-07 |
| triathlon-austria.at/de/service-termine (Tri AT) | 2026-07-07 |
| ironman.com Kalender (europaweit) | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 (Peguera/Vieux-Boucau/Forte Village verifiziert) |
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 (Batch 2 abgearbeitet) |

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

## Quellen-Durchgang: 2026-07-09 (k226.com)
- **k226.com** vollständig durchgegangen (globaler Tri-Aggregator); Scope-Filter DE/AT + Ironman/Challenge Europa angewandt.
- Fast alle in-scope-Events bereits im Bestand (Ostseeman, KnappenMan, Allgäu-Immenstadt, Köln, Trumer, Podersdorf, Südkärntner, Uster, Extrememan Nagyátád, alle Ironman/Challenge Europa).
- **+1 neu:** `hoelle-von-q-quedlinburg-2026` (DE, Mitteldistanz, 30.08., Quedlinburg/Harz) — offiziell über hoelle-von-q.de verifiziert (10. Auflage, 2,0/83/21,1 km, 1600 Hm, Ziel Rathaus).
- Datum-Abgleich bestehender DE/AT-Events gegen k226: nur 1–2-Tage-Abweichungen nach Muster „Wochenendstart (DB) vs. Haupttag (k226)" → keine Änderung.
- Build grün: 1165 pages, 0 errors.

---

## Session date: 2026-07-07 (Session 29 – Enrichment-first Wartungslauf)

## Current state (after Session 29):
- **Total events: 1116** (unverändert; keine Neuanlagen, keine Löschungen)
- **Upcoming (>= 2026-07-07): 579 | Past (indexiert via noindex): 537**
- Build: 1164 pages, 0 errors, 0 warnings, ~72 s
- Sitemap: 627 URLs (579 künftige Event-Detailseiten + Landing/Country/Category-Seiten), keine vergangenen Events (noindex-Filter aus Session 27 aktiv)
- Latest push: (this session) — push auf master triggert Deployment

## Kontext dieses Laufs
Fokus wieder ausschließlich auf **Enrichment und Datenqualität**, keine Neuanlagen — Anti-Flut-Regel gilt. Ziel: künftige Event-Detailseiten so faktenreich machen, dass Google sie indexiert (statt "Gecrawlt/Gefunden – nicht indexiert").

## Enrichment (20 künftige Events angereichert)

**Große/bekannte Events — Beschreibungen faktenreich verdichtet und/oder Fakten korrigiert:**
- `schwarzwald-bike-marathon-furtwangen-2026` — distanceKm 94 + elevationGainM 1900 ergänzt; 28. Ausgabe, 6 Strecken (Rothaus 94/1900, Ketterer 59/1000, Scherzinger Gravel 56/880, Singer 46/700, Magna E-Cup 46/700, Jugend 46) belegt, Spendenanteil Katharinenhöhe.
- `bootshaus-gravel-bonn-2026` — distanceKm 100 ergänzt; 5. Edition, alle Strecken (100/60/Family 28/24/300), Ultra 400 km/6500 Hm am Vortag, Start Bootshaus OWV Oberkassel.
- `niederrhein-gravel-kalkar-2026` — distanceKm 110 ergänzt; 2. Edition, drei Distanzen 110/160/300 km mit Gravel-Anteil, Landhaus Beckmann als Start-Ziel.
- `rennsteigride-schmiedefeld-2026` — distanceKm 100 + elevationGainM 2666 ergänzt; 10. Auflage, 6 Strecken (Supermarathon 100/2666, Marathon 67/1820, Halbmarathon 36/950, E-Bike, BasicRIDE, JuniorRIDE) je einzeln recherchiert.
- `duensberg-bike-marathon-2026` — distanceKm auf 124 korrigiert + elevationGainM 2610 ergänzt; 20. Auflage, alle 5 Streckenvarianten (30/560, 41/870, 57/1030, 82/1749, 124/2610) belegt, Deutsche Meisterschaft.
- `greifenstein-bike-marathon-2026` — distanceKm 69 ergänzt; 24-jährige Historie, 23-km-Rundkurs 1-2-3 Runden, MTB Sachsen Cup.
- `sparkassen-heide-gravel-2026` — **Koordinaten korrigiert** (irrtümliches Taura b. Chemnitz → richtiges Taura in Belgern-Schildau/Dahlener Heide, 51.454°/13.101°); distanceKm 100 + elevationGainM 900 ergänzt; alle 3 Distanzen 30/300, 60/600, 100/900 belegt, DGM-Kurs 2025.
- `letape-slovakia-2026` — distanceKm 112 + elevationGainM 1700 ergänzt; 6. Edition, THE RACE 112/1700, THE RIDE 60/900, Family Ride, Kids Race, Botschafter Velits-Brüder.
- `gfny-grand-ballon-2026` — distanceKm auf 138 korrigiert (offizielle Angabe 2026); Beschreibung um Vogesen-Klassiker (Wasserbourg 21 %, Petit Ballon, Viel Armand), FFC Gold Label und Post-Race-Feier erweitert.
- `ronde-picarde-2026` — distanceKm auf 158 + elevationGainM 1450 korrigiert; alle 5 Strecken (Sat Gravel 78/700, Sun Touring 38/284, Kurz 85/880, Mitte 117/1000, Lang 158/1450), Trikot-Regel, Preissteigerung 19.07.
- `teuto-muensterland-trophy-2026` — distanceKm auf 239 korrigiert; Marathon 239 + Halbmarathon 142 (ab Ibbenbüren) bzw. 149 (ab Warendorf), Startgebühren 30/15 €, Anmeldeschluss 29.07. 18:00 Uhr.
- `challenge-turku-2026` — **Datum-Erweiterung** (07-26 → 07-25/07-26, weil Junior/Sprint-Rennen bereits am Vortag stattfinden); alle Junior-, Youth- und Elite-Kategorien mit Distanzen belegt, Qualifier für The Championship, Suomen Triathlonliitto sanktioniert.

**Datums-/Namens-/URL-Korrekturen (kritische Datenfehler behoben):**
- `helsinki-gran-fondo-2026` — **Datum korrigiert** 2026-08-29 (Sa) → 2026-08-30 (So); offizielle Angabe "Sunday, 30 August 2026" mit Startgebühren 85–125 € und Start/Ziel am Helsinki Velodrome.
- `gravel-grit-n-grind-halmstad-2026` — **Datum verschoben** wegen Genehmigungsproblemen: 15–16.08. → **26–27.09.2026** (offizielle Ankündigung). UCI Gravel World Series (Sa) + NGS-Wertung + EM-Qualifikation Lahti 2027 (So).
- `altwarmbuchener-triathlon-hannover-2026` — **Rebranding erkannt und dokumentiert**: Event heißt jetzt "Hannover-Lahe Triathlon" (Redirect von alter Domain); websiteUrl auf hannover-lahe-triathlon.de aktualisiert; Description erklärt den früheren Namen zur Suchbarkeit.
- `flatlands-spreewald-2026` — **websiteUrl ergänzt** (gravelmania.cc/events/flatlands-spreewald, vom Veranstalter Gravelmania); distanceKm 150, "Adventure Ride kein Rennen", 100/150 km Distanzen, BBQ im STORK CLUB.

**Detailergänzungen (nur Description, keine strukturellen Felder verfügbar):**
- `kosmopiloten-paarzeitfahren-baernkopf-2026` — Route Bärnkopf→Zwettl bestätigt, negative Höhendifferenz, 25+ Jahre Historie, 2026 erstmals ZF-CUP Speed-Finale.
- `altriman-les-angles-2026` — 18. Auflage, 4 Distanzen (XXL/Half/Olympic/Sprint), Selbstverständnis "Auseinandersetzung mit sich selbst".
- `rennsteig-gravel-oberhof-2026` — 3-Klassen-System PRO/AGEGROUP/OPEN mit Zeitzielen (~4h/3h/2h), Zeitnahme via zpn-timing.de.
- `colnago-gf-luberon-2026` — 3 Distanzen (155/101/65), Ventoux Events + Pays d'Apt Luberon Tourisme als Partner.

## Datenqualität-Delta (vor → nach Session 29)
- Missing distanceKm (upcoming cycling): **17 → 9** (−8)
- Missing elevationGainM (upcoming cycling): **75 → 69** (−6)
- Thin descriptions (<200 Zeichen oder <3 Sätze): **138 → 126** (−12)
- Missing imageUrl (upcoming): 18 unverändert (überwiegend Aggregator-blockierte oder tote Domains)

## Nicht erreichbare/verifizierbare Quellen dieser Session (Backlog für Session 30)
- `piratentriathlon-amberg-2026` — piratentriathlon.de HTTP 530 (Cloudflare-Fehler)
- `cross-triathlon-karlstadt-2026` — HTTP 503, erneut
- `sauerland-rodeo-brilon-2026` — natureholix.de/sauerland-rodeo/ 404, Hauptseite hat kein Detail-Content
- `miriquidi-bike-challenge-2026` — Detail-Subpages blockieren WebFetch
- `hugenotten-duathlon-2026` — hugenotten-duathlon.de + tv-neu-isenburg.de DNS-Fehler (ENOTFOUND)
- `fuenf-seen-rundfahrt-diessen-2026` — ascyclingteam.com HTTP 403
- `granfondo-tavira-2026` — Hosting-Konto suspendiert (clubebiketeamtavira.com)
- `exmoor-beast-sportive-2026` — sportivaevents.co.uk leer/blockiert für WebFetch
- `flatlands-spreewald-2026` (Höhenmeter) — offiziell nicht veröffentlicht, "Spreewald ist flach" bewusst nicht geschätzt
- `bike-maraton-jelenia-gora-2026` — Veranstalter arbeitet noch an Content ("pracujemy nad treścią")
- `ironman-703-luxembourg-2026` — ironman.com blockiert für WebFetch

## SEO / Sitemap – Session 29 verifiziert
- `astro build` grün: 1164 pages, 0 errors, 0 warnings
- Sitemap enthält 627 URLs (579 künftige Event-Detailseiten + Landing/Category-Seiten)
- Vergangene Events korrekt aus Sitemap ausgeschlossen (0 Past-URLs) und rendern `<meta name="robots" content="noindex, follow">` (aus Session 27 stabil)
- JSON-LD (`SportsEvent`, `BreadcrumbList`) und OG/Twitter-Meta unverändert intakt

## Keine Neuanlagen
Erneut bewusster Verzicht auf neue Events. Anti-Flut-Regel + noch reichlich Bestandsevents mit Enrichment-Bedarf (126 dünne Beschreibungen, 69 fehlende Höhenmeter). Nächste Runde: gezielt an obige Backlog-Quellen (falls wieder erreichbar) und weitere kleine AT/DE-Events mit fehlenden Höhenmetern.

---

> Ältere Sessions (28 und davor) ausgelagert nach `progress-archive.md`.
