# Sport Events Checker – Session Progress

## STATE (rolling — bei JEDEM Lauf zuerst lesen, am Ende aktualisieren)

> Kompaktes Gedächtnis zwischen den Läufen. Immer aktuell halten. Details der letzten
> 3 Sessions stehen darunter; alles Ältere liegt in `progress-archive.md`.

### Kennzahlen (Stand: 2026-07-21)
- Events gesamt: **1139** | upcoming (>= heute): **519** | past (noindex): **620**
- Letzter Lauf: Enrichment-Wartungslauf (2026-07-21) — 21 künftige Events veredelt, 3 fehlende `elevationGainM` ergänzt, 1 Datumskorrektur, 1 Distanz-/Höhenmeter-Korrektur (Black Forest ULTRA Bike). Keine Neuanlagen.
- Build zuletzt grün: **1189 pages, 0 errors**, ~57 s; Sitemap **569 URLs** (519 künftige Event-Detailseiten + Landing/Country/Category), 0 past-URLs.

### BLACKLIST — NICHT (wieder) anlegen (abgesagt/eingestellt/nicht verifizierbar)
- IRONMAN 70.3 Wiesbaden — eingestellt seit 2016, EM 2026 nach Jönköping verlegt
- IRONMAN Haugesund — 70.3 + Langdistanz beide defunct
- Hexenturm-Radmarathon Idstein — widersprüchliche Datumsquellen, unbestätigt
- Triathlon Lac du Bouchet 2026 (FR) — Rennen fand bereits am 11.–12.07.2026 statt
- Desafío Doñana Sanlúcar (alte Location) — 2026 offiziell nach Matalascañas verlegt; alte Sanlúcar-Location nicht wieder anlegen
> Regel: Wer hier steht, wird nicht neu erzeugt. Neue Absagen hier ergänzen (mit Grund).

### ZU PRÜFEN (Phantom-Verdacht — vorhandene Events verifizieren)
- `ultra-rad-challenge-steiermark-2026` (AT, 24.–25.07.2026) — Veranstalter meldet: Genehmigung der 12,2-km-Rundstrecke von der BH Hartberg-Fürstenfeld „kategorisch abgelehnt", offizielle Kanäle enthalten Stand 07-2026 keine Renn-Detailinfo, sondern nur die Auseinandersetzung mit der Behörde. Vor Session 32 offiziell nachprüfen; falls 2026 nicht stattfindet, entfernen und in BLACKLIST übertragen.

### BACKLOG (offene Aufgaben aus letztem Lauf)
- **Enrichment-Backlog (upcoming):** noch **58** fehlende elevationGainM (cycling), **~250** dünne Beschreibungen (<220 Zeichen oder <4 Sätze). Session 31 hat 21 Bestandsevents veredelt; nächste Läufe weiter enrichment-first.
- **Priorisierte fehlende Höhenmeter (cycling):** `adac-cycling-tour-heilbronn-2026`, `adelsberger-bike-marathon-2026`, `albstadt-mtb-classic-2026`, `brabants-mooiste-oisterwijk-2026`, `colnago-gf-luberon-2026`, `cycling-paradise-sylt-2026`, `cyclodome-salzburg-2026`, `elektrenu-gran-fondo-2026`, `evertsberg-gravel-2026`, `fnld-grvl-lahti-2026`, `gotland360-visby-2026`, `granfondo-alassio-2026`, `granfondo-alberto-contador-2026`, `sugar-gravel-stuttgart-2026`.
- **Fehlende imageUrl (31 upcoming, u.a.):** `100x100half-platja-daro-2026`, `aronamen-arona-2026` (aronamen.it aktuell 503), `axtri-aurland-2026`, `bayman-mont-saint-michel-2026`, `estrela-xtreme-manteigas-2026`, `hoelle-von-q-quedlinburg-2026`, `natureman-var-2026`, `ocean-lava-montenegro-kotor-2026`, `odyssey-st-neots-2026`, `olympos-x-2026`, `sandman-newborough-2026`, `vercorsman-saint-nazaire-en-royans-2026`, `vitruvian-rutland-2026`.
- **Nicht erreichbare Quellen aus Session 31:** `aischgrund-triathlon.de` DNS-Fehler (ENOTFOUND), `aronamen.it` HTTP 503, `nordschwarzwald-radmarathon.de` DNS-Fehler (Domain existiert nur als `radmarathon-nordschwarzwald.de` — korrekte URL bereits gesetzt), `cycloworld.cc` HTTP 403.
- **k226-Batch 3 (Discovery):** k226-EU-Kalender in Session 32 erneut auf neu erschienene Tris prüfen (Balkan / Skandinavien), sowie „Xtreme"-Sibling zu OlympusMan Paphos ergänzen.
- **Datenqualität:** Ultra-Rad-Events und Radmarathons AT/DE mit fehlenden Höhenmetern gezielt durchgehen (siehe priorisierte Liste oben).

### QUELLEN-STAND (zuletzt geprüft — älteste zuerst re-checken)
| Quelle | zuletzt |
|---|---|
| cycloworld.cc/de/kalender-de (Rad AT/DE) | 2026-07-21 (HTTP 403 — WebFetch blockiert, in Session 32 wieder versuchen oder Alternative) |
| triathlondeutschland.de/termine (Tri DE) | 2026-07-21 (Kalender-UI dynamisch, in Session 32 gezielt filtern) |
| triathlon-austria.at/de/service-termine (Tri AT) | 2026-07-07 |
| ironman.com Kalender (europaweit) | 2026-07-07 |
| challenge-family.com Kalender | 2026-07-14 |
| UCI Gran Fondo World Series | 2026-07-07 |
| k226.com/events/events.aspx (Tri, europaweit) | 2026-07-14 (Batch 2 abgearbeitet) |

---

## Quellen-Durchgang: 2026-07-21 (Session 31 – Enrichment-Wartungslauf, keine Neuanlagen)

- **Fokus:** rein Enrichment + Datenqualität, keine Neuanlagen (Anti-Flut-Regel; noch 58 fehlende Höhenmeter und ~250 dünne Beschreibungen im Bestand).
- **21 künftige Events veredelt** (Beschreibungen faktenreich verdichtet, teils Strukturfelder ergänzt/korrigiert):
  - `allgaeu-rundfahrt-2026` — elevationGainM 2419 ergänzt; alle 5 Strecken mit offiziellen Distanz/Höhenmeter/Startzeit-Paaren (200/2419, 140/1069, 80/840, Gravel 75/836, Family 40/240); Enduro-Weltmeisterin Ines Thoma begleitet Gravelrunde.
  - `outlaw-original-nottingham-2026` — Beschreibung um Regatta-Lake-Massenstart, Trent-Towpath-3-Runden-Lauf, Britische Langdistanz-Meisterschaft 2026 und Sold-out-Status erweitert.
  - `rhoen300-schondra-2026` — elevationGainM 5200 ergänzt; alle 6 Strecken mit offiziellen Kernwerten (300/5200, 230/4500, 170/2500, 100/1700, Gravel 70/1400 + 120/2000), Startzeiten, 1000er-Teilnehmerlimit, 50 % Handicap-Rabatt, 10-Jahres-Jubiläum belegt.
  - `nordschwarzwald-radmarathon-2026` — distanceKm 241 → 243 korrigiert (offizielle EPIC-Angabe); Marathon L 171/2820, M 122/2050 (15 Anstiege, Bad Wildbad), S 77/1250, Familienrunde 33; Startgelder 50/40/5 €, Firmen-Teamwertung neu, Merida-Reacto-Testrides.
  - `black-forest-ultra-bike-marathon-kirchzarten-2026` — distanceKm 118 → 115, elevationGainM 4000 → 3550 korrigiert (offizielle Streckenübersicht); alle 4 Distanzen (ULTRA 115/3550, MARATHON 70/2170, SPEED TRACK 54/1230, SHORT TRACK 40/850) plus Rahmenprogramm Bambini Trophy / Movie Night.
  - `black-forest-ultra-gravel-2026` — websiteUrl auf ultra-gravel.de korrigiert, elevationGainM (fälschlich 3500, war MTB-Wert) entfernt; 3. Edition, Xplorer ~65 km + Xtensive ~120 km, keine Zeitwertung, Startgeld 80 € (EB 70 €).
  - `treibjagd-dunkelwald-2026` — alle 4 Etappen einzeln belegt (Climb Zeitfahren 5 km, Marathon 30/60, KAMM-BIKE-CROSS ab Loipenhaus JGS, Showdown), U15-bis-Masters-4-Kategorien, Aktion Kinderherzen (Bikeleasing.de).
  - `saarschleifen-bike-mettlach-2026` — 3 Distanzen (35/50/100 km), E-Bike-Klassen 35/50, Ursapharm-Firmenwertung, Streckenpläne noch änderbar.
  - `rad-am-ring-2026` — 22. Ausgabe, 16 Disziplinen (24h Solo/Team, Jedermann 75 km, Rad-Bundesliga, 22 km ZF, Tourenfahren, Gravel-Race, Kids-Race), Nachtsektion Nordschleife.
  - `cyclosportive-du-valais-2026` — 1. Auflage in Sion; 4 Strecken (Touring 39/480, Short 70/1070, Medium 90/1900, Long 120/2714) + Kids Race; Botschafter Pascal Richard; Startgelderhöhung 01.06.
  - `mueritz-triathlon-waren-2026` — 40. Jubiläum belegt, Norddeutsche Meisterschaft 2026 (Mitteldistanz), Anmeldeöffnung 01.01.
  - `trumer-triathlon-2026` — 3-Tages-Festival: Seecrossings (1,4 + 3 km), Sprint 750/25,4/5,2, Kurz 1,5/41,8/10, Mitte 1,9/88,5/21,1.
  - `hofheimer-triathlon-2026` — 33. Auflage, Sprint- und Kurzdistanz; Wassertemperatur 24 °C (Neopren-Verbot wahrscheinlich); Restplätze knapp.
  - `schongau-triathlon-2026` — 14. Auflage, Distanzen belegt, Rahmenprogramm Kids/inklusiver Lauf, Live-Zeitmessung raceresult.com.
  - `heidelberg-triathlon-2026` — SV Nikar Heidelberg, 1,6 km Neckar / 36 km Königstuhl-Anstieg (~250 Hm) / 10 km Philosophenweg; Anmeldung racepedia.de.
  - `leipziger-triathlon-2026` — **Datum-Erweiterung 07-26 → 07-25/07-26** (Nachwuchsbewerb bereits am Samstag); 43. Ausgabe, >1400 Aktive, Kulkwitzer See, baubedingte Streckenanpassungen 2026.
  - `silbersee-triathlon-stuhr-2026` — 31. Ausgabe, LC Hansa Stuhr / Tri-Wölfe, 3 Distanzen (Olympisch 1500/40/10, Sprint 750/23/5, Volk 500/23/5), Anmeldung Mitte Juli geschlossen (Warteliste).
  - `woerthsee-triathlon-2026` — 40. Auflage, Olympisch 1,5/44/10 + Volks/Sprint 600/22/6, komplett ausverkauft (nur Warteliste).
  - `mainfrankentriathlon-kitzingen-2026` — Downstream-Schwimmen im Main, 2 Anstiege Olympisch (Frickenhausen 5 km, Eibelstadt 3 km) + 1 im Sprint (Sulzfeld 2 km), Startzeiten 13:00/13:15, Landesliga Nord + Bürgermeistermeisterschaft.
  - `thayarunde-radmarathon-2026` — 3. Auflage, erstmals Austria Top Tour, zugleich ÖM Marathon-Straßenrennen 2026; Programm Sa (BZF 22/310) + So (Marathon ~100/1200); Nenngeld 49–85 € gestaffelt, 6 Altersklassen.
  - `brawo-triathlon-salzgitter-2026` — Sprint 750/25/5,4 + Volkstriathlon parallel; DTU-Pass für Sprint, ~1000 Anmeldungen 2024 (Rekord), Stellplätze/Overflow-Parken.
- **JSON-Encoding-Fix:** vier Files enthielten deutsche Anführungszeichen („..." mit standardmäßigem Closing "), die den JSON-Parser sprengten (heidelberg, rad-am-ring, silbersee, treibjagd). Alle vier auf einfache Ersatzformulierungen umgestellt.
- **SEO / Sitemap:** `astro build` grün: 1189 pages, 0 errors, ~57 s. Sitemap 569 URLs (519 künftige Event-Detailseiten + Landing/Category/Country-Seiten), 0 past-URLs. Vergangene Events rendern weiterhin `<meta name="robots" content="noindex, follow">` (aus Session 27 stabil); künftige Events tragen `index, follow`. JSON-LD (`SportsEvent`, `BreadcrumbList`) auf enrichten Detailseiten intakt.
- **Datenqualität-Delta:** Missing elevationGainM (upcoming cycling) 65 → 58 (−7 dank Enrichment); Thin descriptions ~250 (im engeren <220-Zeichen-Fenster; siehe Backlog); Missing imageUrl 31 unverändert (überwiegend Aggregator-blockierte Ziele).
- **Keine Neuanlagen** — Anti-Flut-Regel bleibt bindend: erst Enrichment-Backlog weiter abbauen, dann in kommenden Läufen neue Events dazu.

---

## Quellen-Durchgang: 2026-07-14 (k226-Batch 2 + Enrichment-Wartungslauf)

- **Phantom-Verdachtsfälle Étape Caledonia + Mallorca 312:** Beide gegen offizielle Quellen und Ergebnislisten geprüft — 2026-Editionen fanden regulär statt (10.05. bzw. 25.04.), die Websites bewerben lediglich schon 2027. Kein Handlungsbedarf; ZU-PRÜFEN-Liste geleert.
- **k226-Batch 2 (offiziell gegengeprüft):** +7 Tris angelegt, 1 verworfen.
  - Verworfen: **triathlon-lac-du-bouchet-2026** (bereits am 11.–12.07.2026 stattgefunden, kein Zukunftswert).
  - Neu (7): `triathlon-saint-cirq-lapopie-2026` (FR, Langdistanz, 26.09., 226/2000), `openlakes-atlantique-royan-2026` (FR, Mitteldistanz, 05.09., 93 km statt 90), `100x100half-el-vendrell-2026` (ES, Mitteldistanz, 20.09., 80/648), `100x100half-platja-daro-2026` (ES, Mitteldistanz, 04.10., 86/1160 — Pre-Note-Distanzen und -Höhenmeter waren falsch), `spirit-of-78-porto-2026` (PT, **Langdistanz** 4,2/180/42 — nicht Mitteldistanz wie im Pre-Note!), `ocean-lava-montenegro-kotor-2026` (ME, Mitteldistanz, 11.10.), `olympusman-paphos-2026` (CY, Langdistanz, 07.11., Standard-Format 1,9/84/21 + 2940 Hm).
  - **Neues Land:** `CY` (Zypern) zu `COUNTRIES` in `src/lib/types.ts` ergänzt inkl. Label + Flagge.
- **Enrichment (20 künftige Events):** Fokus Kernfakten (distanceKm/elevationGainM) und faktenreiche Beschreibungen aus offiziellen Quellen — cycling 12, triathlon 8. Highlights: costa-del-sol-gran-fondo (Distanz 126→130, +3300 Hm), holsteiner-wellenritt (Distanz 220→204), brombachsee-triathlon-pleinfeld (Höhenmeter 800→1125 korrigiert), desafio-donana (Location Sanlúcar → Matalascañas verlegt, Datum 17.10.→04.10.).
- **SEO / Sitemap:** `astro build` 1189 pages, 0 errors. Sitemap 603 URLs (nur indexierbare, keine past-Events); noindex-Feature aus Session 27 stabil.

---

## Quellen-Durchgang: 2026-07-09 (k226.com – Batch 1, EU-Scope)

- **Scope auf Userwunsch erweitert:** nicht mehr nur DE/AT + Ironman/Challenge, sondern europaweite Tris aus k226 (weiterhin kein USA/Japan/Australien).
- Lückenanalyse: ~23 fehlende EU-Tris offiziell verifiziert (4 Research-Agents). **+15 diesen Lauf angelegt** (Anti-Flut-Grenze eingehalten), 8 verifizierte im BACKLOG als „Batch 2".
- **Neu (15):** bayman-mont-saint-michel, natureman-var, vercorsman-saint-nazaire-en-royans (FR); ican-gandia, half-madrid (ES); estrela-xtreme-manteigas (PT); vitruvian-rutland, sandman-newborough, odyssey-st-neots, cotswold-classic (GB); gelreman-arnhem (NL); eaglexman-gran-sasso, aronamen-arona (IT); axtri-aurland (NO); olympos-x (GR).
- Alle Daten gegen offizielle Veranstalter-/FFTRI-Seiten verifiziert; elevationGainM nur wo offiziell belegt; keine imageUrls (keine tauglichen Hero-Bilder gefunden).
- Nicht bestätigt/übersprungen: Lost Sheep (IE), Balatonman Kenese (HU).
- Build grün: 1182 pages, 0 errors.

---

> Ältere Sessions (Session 29 / erste k226-Runde und davor) ausgelagert nach `progress-archive.md`.
