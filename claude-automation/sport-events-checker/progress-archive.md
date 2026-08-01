# Sport Events Checker – Session Progress (Archiv)

> Ausgelagertes Langzeit-Archiv älterer Läufe (Session 25 und davor).
> Aktueller rollender Memory: `progress.md`.

---

## Quellen-Durchgang: 2026-07-14 (k226-Batch 2 + Enrichment-Wartungslauf)

- **Phantom-Verdachtsfälle Étape Caledonia + Mallorca 312:** Beide gegen offizielle Quellen und Ergebnislisten geprüft — 2026-Editionen fanden regulär statt (10.05. bzw. 25.04.), die Websites bewerben lediglich schon 2027. Kein Handlungsbedarf; ZU-PRÜFEN-Liste geleert.
- **k226-Batch 2 (offiziell gegengeprüft):** +7 Tris angelegt, 1 verworfen.
  - Verworfen: **triathlon-lac-du-bouchet-2026** (bereits am 11.–12.07.2026 stattgefunden, kein Zukunftswert).
  - Neu (7): `triathlon-saint-cirq-lapopie-2026` (FR, Langdistanz, 26.09., 226/2000), `openlakes-atlantique-royan-2026` (FR, Mitteldistanz, 05.09., 93 km statt 90), `100x100half-el-vendrell-2026` (ES, Mitteldistanz, 20.09., 80/648), `100x100half-platja-daro-2026` (ES, Mitteldistanz, 04.10., 86/1160 — Pre-Note-Distanzen und -Höhenmeter waren falsch), `spirit-of-78-porto-2026` (PT, **Langdistanz** 4,2/180/42 — nicht Mitteldistanz wie im Pre-Note!), `ocean-lava-montenegro-kotor-2026` (ME, Mitteldistanz, 11.10.), `olympusman-paphos-2026` (CY, Langdistanz, 07.11., Standard-Format 1,9/84/21 + 2940 Hm — Xtreme-Sibling separat notierbar).
  - **Neues Land:** `CY` (Zypern) zu `COUNTRIES` in `src/lib/types.ts` ergänzt inkl. Label + Flagge. (Nachtrag 2026-07-31: `COUNTRY_SLUGS` in `landing.ts` wurde damals vergessen → am 31.07. nachgezogen.)
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
- Große/bekannte Events faktenreich verdichtet und Fakten korrigiert (schwarzwald-bike-marathon-furtwangen, bootshaus-gravel-bonn, niederrhein-gravel-kalkar, rennsteigride-schmiedefeld, duensberg-bike-marathon, greifenstein-bike-marathon, sparkassen-heide-gravel [Koordinaten korrigiert], letape-slovakia, gfny-grand-ballon, ronde-picarde, teuto-muensterland-trophy, challenge-turku).
- Datums-/Namens-/URL-Korrekturen: helsinki-gran-fondo (Datum 29.→30.08.), gravel-grit-n-grind-halmstad (Datum→26.–27.09.), altwarmbuchener-triathlon-hannover (Rebranding „Hannover-Lahe Triathlon"), flatlands-spreewald (websiteUrl ergänzt).
- Detailergänzungen (nur Description): kosmopiloten-paarzeitfahren-baernkopf, altriman-les-angles, rennsteig-gravel-oberhof, colnago-gf-luberon.

## Datenqualität-Delta (Session 29): missing distanceKm 17→9, missing elevationGainM 75→69, thin descriptions 138→126, missing imageUrl 18 unverändert.

## SEO / Sitemap – Session 29: astro build grün 1164 pages; Sitemap 627 URLs; past-Events aus Sitemap ausgeschlossen + `noindex, follow`; JSON-LD intakt. Keine Neuanlagen.

---

## Session date: 2026-06-09 (Session 25)

## Current state (after Session 25):
- **Total events: 1038** (1031+7+1 new −1 duplicate = 1038)
- Build: 0 errors, 0 warnings
- Latest push: commit 83625a6 force-pushed to master ✓

## Changes made this session (Session 25):

### New events added (1):
- `nordschwarzwald-trophy-2026` — DE/BW, Radmarathon, Jul 31-Aug 2, Schömberg (confirmed 9th edition)

### imageUrls added (4):
- `albstadt-bike-marathon-2026` ← Jimdo CDN event photo
- `giro-stormarn-2026` ← Jimdo CDN event photo
- `trattberg-sprint-2026` ← official website upload
- `wendland-chrono-2026` ← official website

### Data fixes (1):
- `kaerntner-rad-bergkoenig-2026`: fixed wrong coordinates (46.8733,14.3383 → 46.718,14.483 for Kraig village)
- `kaerntner-radbergkoenig-kraig-2026`: DELETED (was duplicate of above, missing website+imageUrl)

### Events checked/not added (coverage verified):
- Granitbeisser MTB St. Georgen am Walde: official site shows emoji for 2024 issues, no 2026 confirmed → skip
- Rothaus-Hegau Bike Marathon Singen: official site not accessible, no date confirmed → skip
- Mitterberg-Race Michelhausen: official site returns 503 → skip
- Laacher See MTB Marathon: site was 503 → skip  
- IRONMAN 70.3 Staffordshire: ironman.com blocked, can't verify → skip for now
- Bosch eMTB-Schnitzeljagd: non-competitive fun ride → skip

### SEO check (verified):
- `robots.txt`: OK (pointing to `https://events.endure-cycling.com/sitemap-index.xml`)
- `[slug].astro`: JSON-LD SportsEvent + BreadcrumbList → comprehensive
- `index.astro`: JSON-LD with Organization + WebSite + ItemList → OK
- `BaseLayout.astro`: OG tags, Twitter card, canonical URL, robots meta → OK
- Sitemap: auto-generated by @astrojs/sitemap with correct priorities

### Database coverage summary:
- Total: 1038 events across 32 countries
- DE: 488, AT: 177, FR: 55, IT: 50, CH: 43, ES: 34, GB: 32 + more
- All events have `confirmed: true`
- Events without imageUrl remaining: ~26 events (mostly past or inaccessible)

### Events still without imageUrl (upcoming only):
- `pyramidenkogelhero-2026` (Oct 17) - mountainsport.at has no specific image
- `fuenf-seen-rundfahrt-diessen-2026` (Sep 13) - 403 on website
- `sudkarntner-triathlon-2026` (Sep 12) - 403 on website
- `albstadt-mtb-classic-2026` (Sep 25-27) - captcha protection
- `thueringer-gravel-night-2026` (Jul 4) - no website found

---

## Session date: 2026-06-08 (Session 22, continued in Session 23)

## Current state (after Session 23):
- **Total events: 1031** (1013 from Session 22 → +13 new − 1 duplicate removed + date fix = 1031)
- Build: 0 errors, 0 warnings
- Latest push: commit 2826ab1 to master

## Changes made this session (Session 23 continuation):

### Data fixes:
- `triatlon-murska-sobota-2026`: date corrected 2026-08-09 → 2026-06-21 (official TZS calendar; imageUrl path `/2026/06/` confirms June date; previous "correction" to Aug 9 in Session 19 was wrong)

### New events added (12 net, 13 created − 1 duplicate removed):
**Slovenian triathlon:**
- `triatlon-kocevje-2026` — SI, Sprintdistanz, Aug 22, Kočevje (Slovenian national championship, Kočevsko jezero)

**Austrian cycling — Thermenregion-Cup series (NÖ):**
- `thermenregion-cup-seibersdorf-2026` — AT/NÖ, Zeitfahren, Apr 24 (Round 1)
- `thermenregion-cup-pottendorf-2026` — AT/NÖ, Zeitfahren, May 8 (Round 2, Tattendorf)
- `thermenregion-cup-alland-2026` — AT/NÖ, Zeitfahren, May 22 (Round 3, Alland-Holzschlag)
- `thermenregion-cup-klausen-2026` — AT/NÖ, Zeitfahren, May 29 (Round 4, Klausen-Leopoldsdorf)
- `thermenregion-cup-grub-2026` — AT/NÖ, Zeitfahren, Jun 12 (Round 5 finale, Grub — UPCOMING)

**Austrian cycling — Weinviertler Radcup (NÖ):**
- `weinviertler-radcup-mistelbach-2026` — AT/NÖ, Zeitfahren, Apr 26, Mistelbach
- `weinviertler-bergzeitfahren-munichstal-2026` — AT/NÖ, Berg+Zeitfahren, May 9, Münichsthal (3.8 km/130 Hm)

**Austrian cycling — ZeitFahr-CUP 1600HM (OÖ):**
- `zeitfahr-cup-perg-2026` — AT/OÖ, Zeitfahren, May 1, Perg
- `bike-the-lies-2026` — AT/OÖ, Zeitfahren, May 17, Neukirchen bei Lambach (21.8 km on closed former railway, team TT also)

**Austrian cycling — national championships (NÖ):**
- `om-pzf-gross-enzersdorf-2026` — AT/NÖ, Zeitfahren, May 31, Groß Enzersdorf (Austrian pair+team TT championship)

**Austrian cycling — unique team TT (OÖ):**
- `mannschaftszeitfahren-grossalm-2026` — AT/OÖ, Zeitfahren, Aug 5, Stadl Paura→Großalm (4-person team TT, 37 km/500 Hm)

### Duplicate found and removed:
- `om-ezf-grosshartmannsdorf-2026` — duplicate of `alois-kainer-gedenkrennen-ezf-2026` (same race, better file already exists with imageUrl and May 31 date)

### Agent research results processed:
- **Slovenia/Croatia research** (agent `addcdb4730755cdb6`): DB already comprehensive; found Kočevje missing; confirmed Dachsteinblick already exists; confirmed Mörbischer TT already covered by neusiedlersee-radmarathon event; confirmed Thayarunde TT embedded in existing radmarathon event
- **Austrian Baranski Zeitfahrkalender** (agent `abed8101a7dacad15`): 18 events identified; Mörbischer already covered; Dachsteinblick already in DB; Thayarunde embedded; ÖM EZF (Großhartmannsdorf) already exists; Rad am Salzburgring skipped (only aggregator source); 12 new events added

### Sources confirmed complete (Session 23):
- Triatlon zveza Slovenije 2026 calendar: Slovenia comprehensive (Kočevje added)
- Croatian cycling + triathlon: all in DB (no new events found)
- Baranski Zeitfahrkalender 2026 (derbaranski.de/bikeboard.at): all AT TT events now in DB

---

## Current state (after Session 22):

## Changes made this session (Session 22):

### New events added (13):
- `aquathlon-fuerstenfeld-2026` — AT/Steiermark, Aquathlon, Jul 5 (ÖTRV confirmed)
- `albstadt-bike-marathon-2026` — DE/BW, Radmarathon, Jul 11 (30th UCI MTB, 2500 starters)
- `ebm-united-erzgebirgs-bike-marathon-2026` — DE/Sachsen, Radmarathon, Aug 1-2, Seiffen (34th, 1000+ starters)
- `eroica-germania-2026` — DE/Hessen, Gran Fondo, Aug 22, Eltville/Rheingau (vintage steel bikes)
- `kampenkoenig-2026` — DE/Bayern, Berg, Jul 16, Bernau am Chiemsee (~6 km/610 Hm hillclimb)
- `alb-gold-trophy-2026` — DE/BW, Radmarathon, Sep 26, Trochtelfingen (30th MTB marathon, 90/60/30 km)
- `lautertal-bikemarathon-2026` — DE/BW, Radmarathon, Oct 11, Spiegelberg (19th, 83/55/28 km MTB)
- `drei-talsperren-marathon-2026` — DE/Sachsen, Radmarathon, Sep 19, Eibenstock (31st, 97 km/1140 Hm)
- `wendelsteinrundfahrt-2026` — DE/Bayern, Radmarathon, Aug 22, Au/Bad Feilnbach (4 routes up to 205 km)
- `albstadt-mtb-classic-2026` — DE/BW, Rundstreckenrennen, Sep 25-27 (legendary Bullentäle XCO course)
- `styroica-2026` — AT/Steiermark, Gran Fondo, Sep 5, Fehring (vintage steel, 50-200 km)
- `ironbike-ischgl-2026` — AT/Tirol, Radmarathon, Aug 7-8 (31st, extreme MTB 82 km/3350 Hm)
- `mosttour-kuerrberg-2026` — AT/NÖ, Radmarathon+Zeitfahren, Jun 12-14, Kürnberg/St. Peter in der Au

### Duplicates removed (1):
- `kallmunzer-sparkassen-triathlon-2026` — duplicate of `kallmuenzer-triathlon-2026` (the latter is more complete)

### imageUrl additions (9):
- `eisenbahnerzeitfahren-weichstetten`: race TT photo (800×531, esv-linz.net)
- `riverthlon-waidhofen`: 2026 event graphic (1200×849)
- `runswimrepeat-oberursel`: gallery race photo (1800×1200)
- `slovakman-226-piestany`: course photo (1920×1280)
- `reither-kogel-trophy`: mountain scenery (1164×644)
- `elbspitze-dresden`: 2025 peloton race photo (1400×933)
- `zeitfahr-cup-seibersdorf-22`: TT race photo (1024×678)
- `zeitfahr-cup-seibersdorf-44`: same TT race photo (1024×678)
- `styroica-2026`: vintage cyclist on Styrian hills (professional photo)
- `ironbike-ischgl-2026`: 2026 key visual MTB hero image (515 KB)
- `eroica-germania-2026`: Rhine valley panorama with vintage cyclists (1920×1080)
- `alb-gold-trophy-2026`: MTB in terrain action shot
- `lautertal-bikemarathon-2026`: 2024 race photo (1024×683)
- `ebm-united-erzgebirgs-bike-marathon-2026`: race with smoke flare (2000×700 panoramic)
- `mosttour-kuerrberg-2026`: 2026 event graphic (1200×885)

### Data fixes:
- `kallmuenzer-triathlon-2026`: renamed to full "Sparkassen" title
- `fuenf-seen-rundfahrt-diessen-2026`: corrected websiteUrl (/team/ → root)

### CLAUDE.md updates:
- Added IRONMAN 70.3 Wiesbaden to cancelled list (discontinued since Sep 2016)
- Added IRONMAN Haugesund to cancelled list (70.3 → full since 2018, both formats now defunct)

### Confirmed still missing imageUrls (blocked/inaccessible):
la-purito-andorra (JS SPA), gravel-epic-switzerland (503), sugar-gravel-stuttgart (Jimdo blocked),
thueringer-gravel-night (Instagram only), sudkarntner-triathlon (403), bops-gravel-bad-salzdetfurth (logo only),
cross-triathlon-karlstadt (503), niedensteiner-volkstriathlon (JS lazy-load), giro-stormarn (Jimdo 403),
loewensteiner-berge-radmarathon (too small), backwaterman-ottenstein (Jimdo 403),
rodltal-bergkaiser (only flyer 600×400), wendland-chrono (no cycling image), albstadt-bike-marathon (Jimdo CDN blocked)

### Research findings:
- ÖTRV Austrian triathlon Jul-Oct 2026: all covered; no new events found
- German triathlon DTU Jul-Sep 2026: database fully covers all major events
- IRONMAN/Challenge Europe: database comprehensive; IRONMAN 70.3 Wiesbaden (dead domain) and Haugesund confirmed cancelled
- German cycling radmarathon.at: found 8 new events; EBM United and 4 major ones added
- Austrian cycling radmarathon.at (129 events): found Styroica, Mosttour, Ironbike Ischgl as missing

### Sources verified complete this session:
- ÖTRV Austrian triathlon calendar Jul-Oct 2026 ✓
- DTU German triathlon calendar Jul-Sep 2026 ✓  
- IRONMAN European calendar ✓ (comprehensive)
- Challenge Family European calendar ✓ (comprehensive)
- radmarathon.at German July-December ✓ (partially; ~40+ events verified in DB)
- radmarathon.at Austrian 2026 ✓ (129 events checked, most already in DB)

---

## Session date: 2026-06-08 (Session 21)

## Current state (after Session 21):
- **Total events: 990** (987 from Session 20 + 3 new events)
- Build: 1036+ pages, 0 errors
- Latest push: commit 9114839 to master

## Changes made this session (Session 21):

### New events added (3):
- `dirndltal-race-frankenfels-2026` — AT/NÖ, Gravel, Sep 12, Frankenfels (MTB/Gravel 20/40/73km)
- `backyard-gravel-camp-carinthia-2026` — AT/Kärnten, Gravel, Sep 18-20, Rosegg (camping gravel adventure 200-325km)
- `unterberg-duathlon-koessen-2026` — AT/Tirol, Duathlon, Jul 11, Kössen (mountain cross-duathlon 5.4km MTB + 3.4km run)

### Duplicates removed (1):
- `xterra-austria-bad-aussee-2026` (duplicate of `xterra-austria-2026`)

### imageUrl additions (9):
- `starlim-city-triathlon-festiwels-2026`: race winner at finish line (2048×1365)
- `tour-des-stations-verbier-2026`: solo climber in Alps (1500×1000 webp)
- `peaks-plains-magdeburg-2026`: Harz landscape hero (3840×2560)
- `gravel-festival-bern-2026`: gravel race in autumn forest (2560×1707)
- `aurora-gravel-rally-neuchatel-2026`: gallery race photo (2880×1920)
- `triathlon-niederbayern-2026`: event thumbnail (1200×630 webp)
- `hageland-classic-2026`: event banner (1500×844)
- `kraigerseetriathlon-launsdorf-2026`: upgraded to bike course action shot (2400×1505)
- `unterberg-duathlon-koessen-2026`: kaiserwinkl.com event photo

### imageUrl upgrades (1):
- `kraigerseetriathlon-launsdorf-2026`: replaced youth podium photo with bike course action shot (2400×1505)

### Data fixes:
- `reither-kogel-trophy-2026`: date corrected Jun 14 → Jun 15 (historical Sunday pattern; still `confirmed: false`)
- `xterra-austria-2026`: description updated to mention ÖM Crosstriathlon Championship 2026

### Events still without imageUrl (25 → now ~20 upcoming ones, all confirmed blocked):
Cross Triathlon Karlstadt (ECONNREFUSED), Sugar Gravel Stuttgart (ECONNREFUSED),
Möhnesee Triathlon (no suitable image), Fünf-Seen-Rundfahrt Dießen (ECONNREFUSED),
Löwensteiner Berge (ECONNREFUSED), Giro Stormarn (ECONNREFUSED),
Thüringer Gravel Night (ECONNREFUSED), Taunus-Vogelsberg (ECONNREFUSED),
BOPs Gravel Bad Salzdetfurth (not yet tried), Backwaterman Ottenstein (new),
Riverthlon Waidhofen (new), Dirndltal Race (new), Backyard Gravel Carinthia (new),
Slovakman (uncertain image from different event), Ukmergė Gran Fondo (not yet tried),
Elektrėnai Gran Fondo (not yet tried), Tri im Trog (ECONNREFUSED),
BM Cross Duathlon Deining (ECONNREFUSED), Niedensteiner Volkstriathlon (past, no image),
Reither Kogel (ECONNREFUSED), RunSwimRepeat Oberursel (branding backdrop only),
Gravel Primavera Borgå (past), Granfondo Amsterdam (DNS), Gravel Epic Switzerland (503)

### Research findings:
- Austrian/German cycling events Jul-Oct: all major events already in DB (Ötztaler, Kitzbühel Radmarathon, Wachau, Salzkammergut Trophy all confirmed)
- ÖTRV triathlon calendar Jul-Sep: complete coverage confirmed (all 26 AT events verified)
- Powerman Duathlon Series: additional past events found (Alsdorf Apr 12, Trier Mar 1, Halle Apr 25-26, Maissau Apr 25) — not added (past events)
- Cross-Duathlon Bad Aussee: actually = XTERRA Austria (Crosstriathlon at same venue); already in DB
- Banyoles Multisport Championships: Jul 11-19, covers Cross Duathlon Championship (Jul 16); already in DB

### Sources confirmed complete (Session 21):
- ÖTRV 2026 calendar Jul-Sep: verified complete
- German/Austrian cycling events Jul-Oct: verified comprehensive (all major events present)

---

## Session date: 2026-06-08 (Session 20)

## Changes made this session (Session 20):

### New events added (2):
- `backwaterman-ottenstein-2026` — AT/NÖ, Aquathlon (SwimRun), Jun 26-28, Ottensteiner Stausee (20. und letzte Auflage, My SwimRun World Championships)
- `riverthlon-waidhofen-2026` — AT/NÖ, Aquathlon (SwimRun), Aug 15, Waidhofen an der Ybbs (10. Jubiläum)

### Duplicates removed (5):
- `kraigersee-triathlon-2026` (kept `kraigerseetriathlon-launsdorf-2026` with better 2026 info)
- `starlim-city-triathlon-wels-2026` (kept `starlim-city-triathlon-festiwels-2026` with correct 3-day dates)
- `birkebeinerrittet-2026` (kept `birkebeinerrittet-lillehammer-2026`, more complete)
- `granfondo-il-lombardia-2026` (kept `gran-fondo-il-lombardia-bergamo-2026`, Felice Gimondi Memorial)
- `marmotte-granfondo-valais-2026` (kept `tour-des-stations-verbier-2026`, better description)

### imageUrl additions (1):
- `swimrun-rheinsberg-2026`: 1920×1080 race photo from swimrun-rheinsberg.de/fileadmin/

### Data fixes:
- `starlim-city-triathlon-festiwels-2026`: added distanceKm: 26, elevationGainM: 80 (merged from wels duplicate)
- `tour-des-stations-verbier-2026`: removed portrait imageUrl (768×960, ratio 0.80:1 — not suitable)
- `starlim-city-triathlon-festiwels-2026`: removed logo imageUrl (white PNG on transparent background)

### Events still without imageUrl (pending — all blocked or inaccessible):
bm-crossduathlon-deining, bops-gravel-bad-salzdetfurth, cross-triathlon-karlstadt,
elektrenu-gran-fondo, fuemmelsee-triathlon-wolfenbuettel, fuenf-seen-rundfahrt-diessen,
geiseltal-triathlon-rossbach, giro-stormarn, granfondo-amsterdam, gravel-primavera-borga,
hageland-classic, kraigerseetriathlon-launsdorf, la-purito-andorra, loewensteiner-berge,
moehnesee-triathlon, monaco-di-baviera-classic, niedensteiner-volkstriathlon, reither-kogel-trophy,
runswimrepeat-oberursel, sugar-gravel-stuttgart, taunus-vogelsberg-radmarathon,
thueringer-gravel-night, triathlon-niederbayern, ukmerge-gran-fondo, velowino-weinheim,
wedemark-spass-triathlon, backwaterman-ottenstein, riverthlon-waidhofen

### Research findings:
- DTU calendar pages 13-17: fully checked, comprehensive coverage confirmed (no new events)
- IRONMAN/Challenge/T100 European events: all confirmed in database (no new events)
- Austrian triathlon calendar (ÖTRV): 2 new AT SwimRun events found and added
- AQUADAYS Langenzersdorf: correctly skipped (Aug 2025 was final edition per official site)
- UCI Gran Fondo World Series: complete coverage confirmed

---

## Session date: 2026-06-07 (Session 19)

## Current state (after Session 19):
- **Total events: 982** (977 from previous sessions + 8 new - 3 duplicates = 982)
- Build: 1026 pages, 0 errors
- Latest push: commit 94c81dd to master

## Changes made this session (Session 19):

### New events added (8):
- `starlim-city-triathlon-festiwels-2026` — AT/OÖ, Oly+Sprint, Jun 26-28, Wels (Europe Triathlon Cup, committed from prior session)
- `bm-crossduathlon-deining-2026` — DE/Bayern, Cross Duathlon, Oct 3, Deining (DTU-confirmed BM)
- `monaco-di-baviera-classic-muenchen-2026` — DE/Bayern, Radmarathon, Jun 20-27, München (1537km ultra challenge)
- `fuemmelsee-triathlon-wolfenbuettel-2026` — DE/NI, Sprint, Jun 28, Wolfenbüttel (31st edition)
- `geiseltal-triathlon-rossbach-2026` — DE/ST, Oly+Sprint, Jun 28, Roßbach/Hasse (TC Merseburg)
- `kraigerseetriathlon-launsdorf-2026` — AT/Kärnten, Sprint, Aug 22, Kraigersee (10th edition)
- `runswimrepeat-oberursel-2026` — DE/HE, Aquathlon, Aug 30, Oberursel (alternating run-swim)
- `wedemark-spass-triathlon-2026` — DE/NI, Sprint, Jun 28, Wedemark-Mellendorf

### Duplicates removed (3):
- `moewathlon-morfelden-walldorf-2026` (kept `moewathlon-moerfelden-walldorf-2026`)
- `nordhauser-triathlon-2026` (kept `nordhaeuser-triathlon-2026`)
- `sohrenberg-triathlon-waiblingen-2026` (kept `neustaedter-soehrenberg-triathlon-2026`)

### Data fixes:
- `triatlon-murska-sobota-2026`: date corrected Jun 21 → Aug 9 (from official triatlonslovenije.si homepage)
- `fuenf-seen-rundfahrt-diessen-2026`: websiteUrl updated to official organizer site (ascyclingteam.com)

### imageUrl additions (2):
- `race-across-germany-aachen-goerlitz-2026`: official website hero image
- `triatlon-murska-sobota-2026`: 2026 event poster from triatlonslovenije.si

### Events still without imageUrl (25):
bm-crossduathlon-deining, bops-gravel-bad-salzdetfurth, cross-triathlon-karlstadt,
elektrenu-gran-fondo, fuemmelsee-triathlon-wolfenbuettel, fuenf-seen-rundfahrt-diessen,
geiseltal-triathlon-rossbach, giro-stormarn, granfondo-amsterdam, gravel-primavera-borga,
hageland-classic, kraigerseetriathlon-launsdorf, la-purito-andorra, loewensteiner-berge,
monaco-di-baviera-classic, niedensteiner-volkstriathlon, reither-kogel-trophy,
runswimrepeat-oberursel, sugar-gravel-stuttgart, taunus-vogelsberg-radmarathon,
thueringer-gravel-night, triathlon-niederbayern, ukmerge-gran-fondo, velowino-weinheim,
wedemark-spass-triathlon

### Research findings:
- DTU calendar pages 10-18: fully checked, comprehensive coverage confirmed
- Cycloworld.cc: Monaco di Baviera Classic found and added
- Radmarathon.at calendar: Bergzeitfahren Altmühltalcup (Jun 11, Walting DE) noted (no accessible website)
- Granfondo Guide: All known Austrian/German gran fondo events confirmed in DB
- Slovenian triathlon calendar: 4 additional events exist (Ljubljana Jun 7, Kočevje Aug 22, Jeklenih Aug 29, Vogrsko Sep 5) but dates uncertain; not added

---

## Session date: 2026-06-07 (Session 18 – partial/summary from prior context)

## Changes in Session 18 (recovered from context summary):

### New events added (7):
- `fichkona-radmarathon-2026` — DE/Sachsen, 601km ultra, Jun 13-15
- `fuga-300-heiligenblut-2026` — AT/Kärnten, 300km Großglockner→Grado, Jun 19
- `bops-gravel-bad-salzdetfurth-2026` — DE/NI, Gravel, Jun 22 (German Gravel League)
- `race-across-germany-aachen-goerlitz-2026` — DE/NRW, 800km ultra, Aug 27-30
- `oem-zeitfahren-weissenbach-2026` — AT/OÖ, Zeitfahren, Jun 27 (ÖM Zeitfahren)
- `reither-kogel-trophy-2026` — AT/Tirol, Zeitfahren, Jun 14 (unconfirmed date)
- `starlim-city-triathlon-festiwels-2026` — AT/OÖ, Jun 26-28, Wels (created, committed Session 19)

### imageUrl additions (Session 18 – 14 events):
city-tri-paderborn, granfondo-montefeltro-gubbio, plus 12 others (see prior session summary)

### Corrections:
- schleizer-dreieck-jedermann: date corrected to Jun 21, websiteUrl fixed

---

## Session date: 2026-06-07 (Session 17)

## Current state (after Session 17):
- **Total events: 966** (956 from previous + 10 new this session)
- Build: 1010 pages, 0 errors
- Latest push: commit 823ab44 to master

## Changes made this session (Session 17):

### Research summary:
- DTU calendar (all 18 pages): Comprehensive, only 1 new event found (Ketziner Fischerman)
- ÖTRV calendar: All 55 AT events confirmed already in DB
- European IRONMAN/Challenge/T100: All confirmed, no missing events
- New AT cycling events found: 3 (Grieskirchen 24h, NostalRad, Tour d'Alba)
- New DE cycling events found: 5 (RAD RACE ONE TWENTY, Rodenkirchen, Velowino, Cycling for Charity, Hochfranken Cycling)
- imageUrls found for 6 events (Tour de Balaton, 2x Scottish sportive, Hardman Killarney, Maratonul Vinului, Triatlon Koper)

### New events added (10):
- `ketziner-fischerman-triathlon-2026` — DE/BB, Sprint Triathlon, Jun 28, Ketzin/Havel (DTU-confirmed)
- `rad-race-one-twenty-sonthofen-2026` — DE/BY, Gran Fondo, Jun 14, Sonthofen (127km/2300hm, 3300 participants)
- `rodenkirchener-eifelmarathon-2026` — DE/NRW, Radmarathon, Jun 21, Köln-Rodenkirchen (54-202km)
- `velowino-weinheim-2026` — DE/BW, Gran Fondo, Jun 14, Weinheim (vintage/retro bikes, 42-126km)
- `cycling-for-charity-bensheim-2026` — DE/HE, Gran Fondo+Gravel, Jun 20, Bensheim (charity event)
- `hochfranken-cycling-hof-2026` — DE/BY, Gran Fondo+Gravel, Jul 19, Hof an der Saale
- `center-triathlon-neubrandenburg-2026` — DE/MV, Triathlon, Sep 13, Neubrandenburg (DTU-confirmed)
- `24h-radmarathon-grieskirchen-2026` — AT/OÖ, Radmarathon, Jul 11-12, Grieskirchen (24h/6h/3h format)
- `nostalrad-zell-am-see-2026` — AT/SBG, Gran Fondo, Jul 18, Zell am See (Nostalgie-Radrennen vintage bikes)
- `tour-dalba-schwarzach-2026` — AT/VBG, Gran Fondo, Jul 11, Schwarzach (vintage bikes pre-1990)

### imageUrl additions (6):
- `tour-de-balaton-siofok-2026`: cloudfront.net gallery image of cyclists along Balaton
- `bealach-na-ba-sportive-shieldaig-2026`: wixstatic.com 1420×640 Bealach na Ba road panorama
- `ba-sportive-kinlochewe-2026`: wixstatic.com 1420×751 Highland aerial photo
- `hardman-killarney-full-triathlon-2026`: hardman.ie panoramic swim start at Killarney Lakes
- `maratonul-vinului-urlati-2026`: maratonulvinului.ro MTB group in vineyards
- `triatlon-koper-2026`: triatlon-istra.com cyclists on Adriatic coast road
- `cycling-for-charity-bensheim-2026`: cycling-for-charity.de slider_2026.jpg

### Events still without imageUrl (31):
Permanently blocked or no accessible image: 24h-radmarathon-grieskirchen, ajka-triathlon,
berner-triathlon, bikeathon-tara-fagarasului, center-triathlon-neubrandenburg,
city-tri-paderborn, cross-triathlon-karlstadt, dublin-city-triathlon, elektrenu-gran-fondo,
fuenf-seen-rundfahrt-diessen, giro-stormarn, granfondo-amsterdam, gravel-primavera-borga,
hageland-classic, hochfranken-cycling-hof, ketziner-fischerman-triathlon, loewensteiner-berge,
marly-grav-race-valkenburg, niedensteiner-volkstriathlon, nostalrad-zell-am-see,
oettinger-triathlon, sugar-gravel-stuttgart, t100-triathlon-pamplona-spain,
taunus-vogelsberg-radmarathon, thueringer-gravel-night, triathlon-niederbayern,
triatlon-murska-sobota, ukmerge-gran-fondo, velowino-weinheim, wtcs-alghero

### Sources confirmed complete (Session 17):
- DTU Veranstaltungskalender: complete coverage, only Ketziner Fischerman missing
- ÖTRV Terminkalender: complete coverage (all 55 AT events in DB)
- European IRONMAN/70.3/5150: complete (all 17 full + 35+ 70.3 events confirmed)
- Challenge Family Europe: complete (16 events)
- T100 World Tour Europe: complete (Spain/Pamplona, French Riviera, London)
- XTERRA/XTRI Europe: complete (20 events)
- UCI Gran Fondo World Series: complete

---

## Session date: 2026-06-07 (Session 16, continued)

## Current state (after Session 16 continuation):
- **Total events: 933** (905 from previous + 28 new this continuation)
- Romania (RO) added as new country (was missing from types.ts)
- Build: 0 errors (validated via npm run check)
- Latest push: commit d8973cd to master

## Changes made this continuation:

### New country added:
- Romania (RO) — added to `src/lib/types.ts` (COUNTRIES + COUNTRY_LABELS) and `src/lib/landing.ts`

### New events added (this continuation):

**Romania (RO) — 4 events:**
- `letape-romania-bucharest-2026` — RO, Gran Fondo, Aug 30, Bukarest (85km, L'Étape by TdF)
- `transylvania-triathlon-festival-2026` — RO, Multi-Distanz, Jun 27-28, Sângeorgiu de Pădure (112km max)
- `maratonul-vinului-urlati-2026` — RO, Gran Fondo (MTB), Apr 25, Urlați/Prahova (50km)
- `bikeathon-tara-fagarasului-2026` — RO, Gran Fondo, Jun 6-7, Făgăraș (47km/1167Hm)

**Lithuania (LT) — 4 events:**
- `trakai-triathlon-2026` — LT, Oly+Sprint triathlon, Jun 28, Trakai (Burgensee)
- `ukmerge-gran-fondo-2026` — LT, Gran Fondo, May 10, Ukmergė (155km)
- `elektrenu-gran-fondo-2026` — LT, Gran Fondo, Sep 27, Elektrėnai (175km)
- `lietuvos-gravel-cempionatas-2026` — LT, Gravel, Jun 13, Pivašiūnai (140km Lithuanian Gravel Championship)

**Other new events from prior session work (carried over from Session 16 start):**
- `duathlon-brettmuehlenteich-zschorna-2026` — DE/Sachsen, Duathlon, Sep 4, Zschorna
- `cross-duathlon-wendelstein-2026` — DE/Bayern, Duathlon+Cross-Triathlon, Oct 10, Wendelstein
- `wtcs-alghero-2026` — IT, Olympische Distanz, May 30, Alghero/Sardinien
- `berner-triathlon-2026` — CH, Sprintdistanz, May 31, Münchenbuchsee
- `gran-fondo-il-lombardia-bergamo-2026` — IT, Gran Fondo, Oct 11, Bergamo (110km/2000Hm)
- `ba-sportive-kinlochewe-2026` — GB, Gran Fondo, Sep 5, Kinlochewe/Schottland (145km)
- `bealach-na-ba-sportive-shieldaig-2026` — GB, Gran Fondo, May 16, Shieldaig (70km)
- `hardman-waterville-half-triathlon-2026` — IE, Mitteldistanz, Jul 11, Waterville/Kerry (116km)
- `hardman-killarney-full-triathlon-2026` — IE, Langdistanz, Aug 29, Killarney/Kerry (226km)
- `dublin-city-triathlon-2026` — IE, Sprintdistanz, Aug 22, Phoenix Park Dublin (26km)
- `hageland-classic-2026` — BE, Gran Fondo, Apr 25, Tielt-Winge (185km)
- `triatlon-koper-2026` — SI, Olympische Distanz, May 30, Koper/Žusterna
- `triatlon-bled-2026` — SI, Olympische Distanz, Sep 26, Bled (Europe Triathlon Junior Cup)
- `triatlon-murska-sobota-2026` — SI, Sprintdistanz, Jun 21, Murska Sobota
- `tour-de-balaton-siofok-2026` — HU, Radmarathon, May 30, Siófok (206km)
- `extrememan-balatonszemes-2026` — HU, Mitteldistanz, May 31, Balatonszemes (112km)
- `ajka-triathlon-2026` — HU, Sprintdistanz, Jun 21, Ajka (Hungarian championship)
- `extrememan-nagyatad-2026` — HU, Langdistanz, Aug 9, Nagyatád (226km)
- `world-triathlon-cup-tiszaujvaros-2026` — HU, Olympische Distanz, Jun 27-28, Tiszaújváros

### Pending (agent running):
- 5 missing UCI Gravel World Series events: The Gralloch (GB), Flanders Legacy Gravel (BE), Monaco Gravel Race (MC), Marly Grav Race (NL), Alentejo Gravel (PT)

### Next steps:
- Process UCI Gravel World Series agent results when done
- Continue coverage expansion in underrepresented countries

---

## Session date: 2026-06-07 (Session 16, original start)

## Current state (after Session 16 original):
- **Total events: ~905** (889 + 16 new this session)
- Events with imageUrl: improved (10 new imageUrls added to existing events)
- Build: 0 errors (validated via npm run check)

## Changes made this session (Session 16):

### New events added (16):

**Triathlon (3):**
- `ironman-5150-erkner-2026` — DE/Brandenburg, Olympische Distanz, Sep 12, Erkner (ironman.com/im5150-erkner)
- `oettinger-triathlon-2026` — DE/Bayern, Sprintdistanz, Aug 2, Oettingen i. Bayern (triathlon-oettingen.de)
- `jag-de-wuidsau-burglengenfeld-2026` — DE/Bayern, Duathlon+Cross-Triathlon, Sep 26, Burglengenfeld (jagdewuidsau.de) — 2026 Bayerische Meisterschaft Cross-Duathlon
- `ironman-5150-cervia-2026` — IT, Olympische Distanz, Sep 20, Cervia (Adria)

**Cycling – Gravel (9):**
- `raca-gravel-ultra-350-2026` — AT/Tirol, Gravel, Aug 27, Gerlos→Feldkirch (350km/8800Hm)
- `rooted-secrets-magdeburg-2026` — DE/Sachsen-Anhalt, Gravel, Jul 30–Aug 4, Magdeburg (730km/11000Hm)
- `grand-escape-austria-innsbruck-2026` — AT/Tirol, Gravel, Sep 5, Innsbruck (500km/4500Hm)
- `lakes-n-knoedel-fuschl-2026` — AT/Salzburg, Gravel, Sep 7–13, Fuschl am See (725km/14000Hm)
- `shelter-attack-flensburg-2026` — DE/Schleswig-Holstein, Gravel, Sep 3–6, Flensburg (600km via Denmark)
- `bodensee-gravel-giro-horgenzell-2026` — DE/Baden-Württemberg, Gravel, Jul 11, Horgenzell (110km/1200Hm)
- `nuffna-horb-am-neckar-2026` — DE/Baden-Württemberg, Gravel, Sep 4–6, Horb am Neckar (500km/9000Hm)
- `gotland360-visby-2026` — SE, Gran Fondo, Sep 4–6, Visby/Gotland (360km multi-day)
- `trakoscan-granfondo-croatia-2026` — HR, Gran Fondo, Jun 20, Trakošćan (117km)
- `granfondo-pag-2026` — HR, Gran Fondo, Oct 10, Pag Island (107km)

**Cycling – Other (3):**
- `austrian-extreme-bike-race-2026` — AT/Steiermark, Radmarathon, Aug 16–30, Graz (2500km/52000Hm ultra)
- `transcontinental-race-no12-2026` — NO, Radmarathon, Jul 19–Aug 8, Trondheim→Kalamata (~4000km)

### imageUrl additions (10 existing events):
- `rheiner-channel-triathlon-2026`: hdsports.org photo
- `letape-slovakia-2026`: slovakia.letapeseries.com banner
- `grafschafter-crossduathlon-2026`: tus-ahrweiler-triathlon.de
- `gravel-n-groestl-walchsee-2026`: gravelngroestl.com Kaiserwinkl landscape
- `ruesselcross-duathlon-2026`: tg-tria-ruesselsheim.de header
- `kaiserstuhl-duathlon-2026`: mrturner61.de header
- `aarau-triathlon-2026`: staticflickr.com race photo
- `nordhauser-triathlon-2026`: triathlon-nordhausen.de header
- `morbacher-swim-run-2026`: blogger CDN photo
- `sonnewalder-schlosspark-gravel-2026`: timing.rsv-finsterwalde.de poster

### Challenge Family 2026 coverage verified:
All 16 Challenge Family European events confirmed in database (Roth, Walchsee, Lisbon, Barcelona, Paguera, Salou, Sète, Weymouth, Kraichgau, Majorca, Heilbronn, Cervia, Sandefjord, Forte Village, Samorin, Zell am See)

### Events investigated but NOT added:
- Büffel-Cross Triathlon Püttlingen — only children's event in 2026 (STU calendar)

### Next: 
- Process 7 missing German triathlon events from DTU (BerlinMan, Mörsbach, Neubrandenburg Center Triathlon, Duathlon Brettmühlenteich, Duathlon Wendelstein, BM Cross Duathlon Deining)

---

## Session date: 2026-06-06 (Session 15)

## Current state (after Session 15):
- **Total events: 889** (884 from previous + merged 3 feature-branch commits + 6 new this session)
- Events with imageUrl: **868** (~97.6%)
- Build: 0 errors

## Changes made this session (Session 15):

### Merged from feature branch claude/tender-carson-GsyxF:
- 11 new events + 1 duplicate removal (berlinman-triathlon) from Session 14

### New triathlon events added (4):
- `nordhauser-triathlon-2026` — DE/TH, Olympische+Sprint, Jun 20-21, Nordhausen
- `moewathlon-morfelden-walldorf-2026` — DE/HE, Sprint, Jul 12, Mörfelden-Walldorf (17. ksp MöWathlon)
- `rheiner-channel-triathlon-2026` — DE/NRW, Olympische+Sprint, Aug 9, Rheine (25. Jubiläum)
- `sohrenberg-triathlon-waiblingen-2026` — DE/BW, Sprint, Oct 3, Waiblingen (12. Neustädter Söhrenberg)

### New cycling events added (2):
- `gravendel-trail-seefeld-2026` — AT/Tirol, Gravel+Etappenrennen, Sep 18-20, Seefeld (170km/3790Hm)
- `gravel-n-groestl-walchsee-2026` — AT/Tirol, Gravel, Oct 8-11, Walchsee/Kaiserwinkl (540km/11000Hm)

### Events updated (3 improved):
- `koeln-triathlon-2026` — corrected name ("6. Köln Triathlon"), distanceKm (→112), description, websiteUrl
- `powerman-wuerselen-2026` — improved description (DM-Titel), websiteUrl zu mc-eschweiler.de
- `toelzer-triathlon-2026` — corrected coordinates (→Kirchsee), improved name, description

### imageUrl additions (10 events):
- `falling-leaves-lahti-2026`: squarespace-cdn.com race photo
- `gran-fondo-bratislava-2026`: granfondobratislava.sk banner
- `gravel-grit-n-grind-halmstad-2026`: gravelgritngrind.se header
- `hansens-cykelloeb-2026`: squarespace-cdn.com route image
- `vatternrundan-gravel-2026`: cdn.sanity.io 2048×1152
- `styrkeproven-trondheim-oslo-2026`: styrkeproven.no race photo
- `moewathlon-morfelden-walldorf-2026`: moewathlon.de logo
- `sohrenberg-triathlon-waiblingen-2026`: triathlon-neustadt.de slider
- `crossduathlon-huensborn-2026`: h2bw.de 2026 header
- `pfaffenwinkler-radrundfahrt-2026`: pfaffenwinkelradrundfahrt.de header

### Sources used:
- DTU Veranstaltungskalender pages 1-18 (all of 2026)
- ÖTRV Terminkalender 2026
- Challenge Family / UCI Gran Fondo World Series (both fully covered)
- Rumpelwege DACH Gravel Calendar 2026
- en.triatlonnoticias.com for IRONMAN full + 70.3 Europe verification

### Events still without imageUrl (21):
Permanently blocked: aarau-triathlon, city-tri-paderborn, cross-triathlon-karlstadt, fuenf-seen-rundfahrt-diessen, 
grafschafter-crossduathlon, gran-fondo-bratislava (added), granfondo-amsterdam (ECONNREFUSED), kaiserstuhl-duathlon, 
letape-slovakia (503), loewensteiner-berge-radmarathon, morbacher-swim-run, niedensteiner-volkstriathlon, 
nordhauser-triathlon (logo only), rheiner-channel-triathlon (not tried), ruesselcross-duathlon, 
sonnewalder-schlosspark-gravel (redirect), sugar-gravel-stuttgart, taunus-vogelsberg-radmarathon, 
thueringer-gravel-night, triathlon-niederbayern (403), vatternrundan-gravel (added)

---

## Session date: 2026-06-04 (Session 14)

## Current state (after Session 14):
- **Total events: 886** (877 from previous + 11 new this session)
- Build: 918 pages

## Changes made this session (Session 14):

### New triathlon events added (4):
- `guestrow-cross-duathlon-2026` — DE/MV, Duathlon+Cross-Triathlon, Oct 10, Mühl Rosin bei Güstrow
- `lorsbacher-cross-duathlon-2026` — DE/HE, Duathlon, Nov 21, Hofheim am Taunus-Lorsbach
- `kaiserstuhl-duathlon-2026` — DE/BW, Duathlon, Dec 13, Vogtsburg im Kaiserstuhl-Achkarren
- `ruesselcross-duathlon-2026` — DE/HE, Duathlon, Nov 14, Rüsselsheim
- `kraichgauman-crossduathlon-2026` — DE/BW, Duathlon+Cross-Triathlon, Oct 24, Östringen
- `esslinger-insel-swimrun-2026` — DE/BW, Aquathlon, Sep 12, Esslingen am Neckar
- `hoelle-von-q-triathlon-2026` — DE/ST, Mitteldistanz, Aug 30, Ditfurt/Quedlinburg (2km/83km/21.1km, 1600Hm)
- `goettinger-stadtwerke-volkstriathlon-2026` — DE/NI, Sprintdistanz, Aug 30, Göttingen

### New cycling events added (3 from DE/NO):
- `giro-stormarn-2026` — DE/SH, Radmarathon+Gran Fondo, Jun 14, Bad Oldesloe
- `styrkeproven-trondheim-oslo-2026` — NO, Gran Fondo+Radmarathon, Jun 20, Trondheim→Oslo, 540km

### New cycling events from European research (7):
- `falling-leaves-lahti-2026` — FI, Gravel+Gran Fondo, Sep 12-13, Lahti (UCI qualifier)
- `vatternrundan-gravel-2026` — SE, Gravel, Sep 12, Motala, 120km
- `gran-fondo-bratislava-2026` — SK, Gran Fondo, Aug 2, Bratislava
- `letape-slovakia-2026` — SK, Gran Fondo, Aug 23, Bratislava
- `gravel-grit-n-grind-halmstad-2026` — SE, Gravel, Aug 15-16, Halmstad (UCI qualifier)
- `hansens-cykelloeb-2026` — DK, Gravel, Aug 22, Jægerspris, 153km

### imageUrl additions:
- `gravel-to-hell-barsbuettel-2026`: FC St. Pauli Kaperfahrt race photo
- `herbsttriathlon-gimbsheim-2026`: jimcdn hero photo
- `guestrow-cross-duathlon-2026`: hdsports.org
- `lorsbacher-cross-duathlon-2026`: hdsports.org webp
- `kraichgauman-crossduathlon-2026`: kraichgauman.de
- `esslinger-insel-swimrun-2026`: Wixstatic CDN
- `hoelle-von-q-triathlon-2026`: hdsports.org
- `goettinger-stadtwerke-volkstriathlon-2026`: triathlon-goettingen.de

### Duplicates removed:
- `berlinman-triathlon-2026` (duplicate of berlin-wo-man-2026)

### Known cancelled/paused confirmed:
- Ost-Seen-Roller Radmarathon 2026 cancelled (announced Jun 2, 2026 on ostseenroller.de)

---

## Session date: 2026-06-04 (Session 12) – FINAL

## Current state (after Session 12):
- **Total events: 855** (858 from Session 11 - 7 duplicates + 4 new)
- Events with imageUrl: **842** (98.5%)
- Upcoming events without imageUrl: **10** (all blocked/no image available)
- Build: 890 pages (4 new event pages)

## Changes made this session (Session 12):

### Duplicates removed (7 events):
- `thayatal-triathlon-waidhofen-2026` (dup of waidhofner-thayatal-triathlon-2026)
- `arbo-radmarathon-bad-kleinkirchheim-2026` (dup of kaernten-radmarathon-2026)
- `halle-triathlon-2026` (dup of stadtwerke-halle-triathlon-2026)
- `3rides-gravel-winterberg-2026` (dup of 3rides-winterberg-2026)
- `berlinwoman-triathlon-2026` + `berlinman-triathlon-2026` (dups of berlin-wo-man-2026)
- `aquarius-woman-loehne-2026` (dup of aquariusman-loehne-2026)

### New events added (4):
- `sauwaldgiro-2026` — AT, Radmarathon, 105km/1600Hm, Aug 30, St. Roman/Schärding (sauwaldgiro.at)
- `welt-kult-tour-regensburg-2026` — DE, Radmarathon, 205km/2500Hm, Sep 13, Regensburg (biketeam-regensburg.de)
- `gainfeldclassic-bischofshofen-2026` — AT, Berg+Zeitfahren, 3.4km/281Hm, Aug 15, Bischofshofen (radmarathon.at)
- `poettschinger-aquathlon-2026` — AT, Aquathlon, Aug 29, Pöttsching/Burgenland (triathlon-poettsching.at)

### Date fixes (from ÖTRV official calendar):
- `triathlon-bregenz-2026`: start corrected to Jun 20 (was Jun 21), now Jun 20-21
- `swim-run-swim-laengsee-2026`: corrected to Aug 7 (was Aug 8)

### websiteUrl additions (12 events — all were missing):
Meller Volks-Triathlon, Reiling-Triathlon Harsewinkel, SCI Triathlon Schenefeld, VR Triathlon Lauingen,
Oste-Triathlon Bremervörde, StadtTriathlon Forchheim, Heinz Beierstorf Triathlon Stutensee,
Hückeswagener Triathlon, Rigolator Triathlon Riegel, Sparkassen Triathlon Tag Schopfheim,
Ratekau Triathlon (now linked to offendorf-triathlon.de), Petershagen Triathlon (tus-wasserstrasse.de)

### imageUrl additions (5 events):
- `raiffeisentriathlon-hamm-sieg-2026`: 1920×1080 from raiffeisentriathlon.de/fileadmin/
- `malteser-triathlon-heitersheim-2026`: 1920×1282 hero from maltesertriathlon.de
- `sauwaldgiro-2026`: race photo from sauwaldgiro.at
- `welt-kult-tour-regensburg-2026`: header banner from biketeam-regensburg.de
- `aquariusman-loehne-2026`: upgraded to Cloudinary imageUrl (from finishers.com)

### Data improvements:
- `kaernten-radmarathon-2026`: better location name + improved description (Strecke A/B)
- `petershagen-triathlon-2026`: added detailed description (40th edition, TuS Wasserstraße)

### Remaining events without imageUrl (upcoming):
Sites blocking crawlers or no image found: Super-Cross-Sprint Merzig, Niedensteiner Volkstriathlon,
Löwensteiner Bergen Radmarathon, Cross Triathlon Karlstadt, Sparkasse Passau Triathlon Niederbayern,
GainfeldClassic Bischofshofen, Hallig-Dreeathlon, Pöttschinger Aquathlon, Fünf-Seen-Rundfahrt Dießen,
Sugar Gravel Stuttgart

## Session date: 2026-06-02 (Session 9)

## Current state (after Session 9 – IN PROGRESS):
- **Total events: 836** (769 from Session 8 + 67 new this session)
- Events with imageUrl: **741** (88.5%)
- Build: ~870 pages

## Changes made this session (Session 9):

### New events added (67 total):
**German triathlon (13 new):**
- Batch 1 (9): emsland-meppen, gochnessTriathlon-goch, kallinchen-zossen, risstal-laupheim, schwarzachtal-ertingen, triathlon-hildesheim, velburger-kirchweihtriathlon, hofheimer-triathlon, tri-4-fun-minden
- Batch 2 (4): salzlandsparkassen-hecklingen, schlosstriathlon-kossenblatt, iron-power-bauer-wittstock, poehler-triathlon
- Batch 8 (10): rheinstetten, malteser-heitersheim, nagler-see-nagel, stadtwerke-borken, licher-triathlon, moersbach-man, altwarmbuchener-hannover, bornsdorf, edermuender, ilmenauer-teamtriathlon
- Batch 9 (3): vredener-sparkassen-triathlon, wuppertaler-sparkassen-crosstriathlon, stadttriathlon-knittelfeld (AT)

**Swiss triathlon (12 new):**
- spiezathlon, zytturm-triathlon-zug, xterra-switzerland-la-brevine, la-tour-geneve-triathlon, sempachersee-triathlon-nottwil, triathlon-nyon, taegi-tri-wettingen, uster-triathlon, triathlon-basel, triathlon-lausanne, triathlon-locarno-3locarno, triathlon-yverdon-les-bains

### imageUrl additions this session:
**Committed (4 events):**
- `guestrow-triathlon` → eurawasser-trinale-guestrow.jpg (finishers.com)
- `schwarzachtal-triathlon-ertingen` → squarespace photo
- `saerbecker-triathlon` → saerb image
- `risstal-triathlon-laupheim` → risstal image

**In commit 288b638 (5 Swiss + 1 XTERRA fix):**
- `zytturm-triathlon-zug` → facebook og:image
- `la-tour-geneve-triathlon` → 1920×1080 race photo
- `sempachersee-triathlon-nottwil` → sempacherseetri.ch photo
- `triathlon-locarno-3locarno` → squarespace CDN photo
- `triathlon-yverdon-les-bains` → triyverdon.ch hero
- XTERRA Switzerland websiteUrl fixed (domain hijacked)

**Just applied (3 events, pending commit):**
- `kindelsberg-triathlon-hilchenbach` → hdsports.org 2560×1152
- `stadtwerke-halle-triathlon` → hdsports.org 1201×800 webp
- `elm-lappwald-triathlon-helmstedt` → hdsports.org 1200×800

### Updates to existing events:
- 277 German events: bulk-added missing region fields (Python script)
- `guestrow-triathlon`: name → "EURAWASSER Trinale Güstrow", websiteUrl updated
- `paradiestriathlon-jena`: websiteUrl fixed to paradiestriathlon.de
- `xterra-switzerland`: websiteUrl fixed (domain hijacked → xterra-europe.com)
- Stadttriathlon Knittelfeld added (AT, Steiermark, May 1, Olympic)

### Events still without imageUrl (~95):
Mainly: small German triathlon clubs, cycling events with WAF protection, Swiss triathlon events (websites recently rebuilt or no og:image), certain AT events.

## Session date: 2026-05-31 (Session 8)

## Current state (after Session 8 – FINAL):
- **Total events: 769** (750 from Session 7 + 19 net new this session)
- Events with imageUrl: **693** (90.2%)
- Build: 803 pages

## Changes made this session (Session 8):

### imageUrl additions (5 new — committed in earlier batch):
- `triathlon-offenburg-2026` — wp-content banner (to2026-17052026.png)
- `vulkanlandaquathlon-riegersburg-2026` — Bannerbild2.jpg from vulkanlandtriathlon.at
- `schoenleiten-1000-aflenz-2026` — aflenz MTB summer image (rc-hochschwabaflenz.at)
- `wobachbergrennen-2026` — raceresult.com share image (1200×630)
- `tour-o-the-borders-2026` — Chris Hoy / Tour de 4 promotional image (wp-content)

### Skipped (no suitable image found):
Permanently blocked or no image available: 3-peaks-cyclocross, allgaeu-gravel-ride, bike-challenge-mittelholstein, bildchen-sprint, burning-roads, castellon-gravel-race, churfranken-triathlon (hensel-recycling.com returns 503), city-tri-paderborn (503), covestro-krefeld (svg placeholders), desafio-castilla-leon/donana (503), diaoulman (signed time-limited URL), eberbacher-triathlon, ebersteinburg-bergzeitfahren, eintracht-mainsprint, eschborn-frankfurt (ASO blocks), freyunger-dreilaender, fuenf-seen/genuss-gravel/harema/josef-oster/thueringen-erfahren (radsport-events.de 404s), goettinger-dreilaendermarathon, gran-fondo-greece-loutraki (404), granfondo-amsterdam (ECONNREFUSED), hagener-injoy (logo only), hahnenkamm-mtb (kitzbuehel.com no og:image), heidemarathon (radsportverband-niedersachsen 503), hochsauerlandklassiker (403), kinzigman (no image), la-magnifique (300x169 too small), loewensteiner-berge (no full URL), mussbach-triathlon (triafreunde aggregator), neckarsulmer-triathlon (logo only), niedensteiner (svg), nordschwarzwald-triathlon (403), oelder-triathlon (svg), paris-roubaix-challenge (ASO blocks), radmarathon-neu-anspach (403), radmarathon-rund-um-berlin (no og), rhoen300 (660px logo), ring-of-beara (empty), rudi-bike-race (alpenteamcup png logo), rund-um-den-harz (svg placeholders), rund-um-den-solling (only 2025 images), short-track-griesheim (svg), sommerholz-bergsprint (403), steiraman (403), sugar-gravel-stuttgart (403), svsee-cross-triathlon (no og), taunus-vogelsberg (ECONNREFUSED), triathlon-cap-dail (1536×1920 portrait), triathlon-brettmuehlenteich (403), triathlon-niederbayern (403), triathlon-weiden (no og), viernheimer-triathlon (503), vogtland-radmarathon (ECONNREFUSED)

### New events added (16 total this session):
**First commit (9 events — raiffeisen, xterra, gravel events, DE triathlon):**
- `raiffeisen-oberoesterreich-rundfahrt-2026` — AT, Etappenrennen, Jun 4-7
- `xterra-nouvelle-aquitaine-2026` — FR, Cross-Triathlon, Jun 13-14
- `gravel-of-marathon-greece-2026` — GR, Gravel UCI, Nov 15
- `gravel-weekend-tukums-2026` — LV, Gravel UCI, Aug 8
- `deutsche-radmeisterschaft-strassenrad-2026` — DE, Jun 26-28
- `oesterreichische-staatsmeisterschaften-rad-schwanenstadt-2026` — AT, Jun 28
- `nockbike-trophy-feld-am-see-2026` — AT, Gravel, Jun 6
- `elbe-triathlon-hamburg-2026` — DE, Olympische+Sprint, Hamburg-Allermöhe, Aug 30
- `muldental-triathlon-grimma-2026` + `trifun-pellworm-2026` + `wanderup-triathlon-2026` + `weserberglandtriathlon-hoexter-2026`

**Second commit (4 events — this run):**
- `aquariusman-loehne-2026` — DE, Olympische+Sprint, Löhne (NRW), Sep 6 (DTU confirmed)
- `bergwitz-triathlon-kemberg-2026` — DE, Olympische+Sprint, Kemberg (SA), Sep 5 (DTU confirmed)
- `aischgrund-triathlon-neustadt-aisch-2026` — DE, Sprintdistanz, Neustadt a.d. Aisch (BY), Aug 30 (DTU confirmed)
- `kamener-sparkassentriathlon-2026` — DE, Olympische+Sprint, Kamen (NRW), Aug 2 (kamen-triathlon.de confirmed)

**Third commit (3 events — continuation):**
- `world-triathlon-championship-finals-pontevedra-2026` — ES, Olympische+Sprint, Sep 23–27, Age Group WM inkl. Amateure
- `world-triathlon-championship-series-quiberon-2026` — FR, Olympische+Sprint, Jun 20–21, WTCS mit Age Group Rennen (XS/S/M Distanzen)
- `world-triathlon-championship-series-karlovy-vary-2026` — CZ, Olympische Distanz, Sep 13, WTCS mit Age Group Rennen

### Sources used for new events:
- DTU calendar (triathlondeutschland.de/termine/veranstaltungskalender) — pages 1-18
- ÖTRV calendar (triathlon-austria.at) — all AT events verified
- Official event websites for date/distance verification

### Remaining events without imageUrl (~53):
Mainly small club triathlons and cycling events with websites behind WAF/Cloudflare, returning 403/503/ECONNREFUSED, or with only low-quality/portrait images.

## Session date: 2026-05-30 (Session 7)

## Current state (after Session 7 – FINAL):
- **Total events: 750** (743 from Session 6 + 7 new)
- Events with imageUrl: **688** (91.7%)
- Build: ~780 pages

## Changes made this session (Session 7):

### New events added (7):
- `oelder-triathlon-2026` — DE, Sprintdistanz, Oelde (NRW), May 30
- `triathlon-brettmuehlenteich-grossenhain-2026` — DE, Sprintdistanz, Zschorna/Großenhain (Sachsen), May 30
- `hagener-injoy-triathlon-2026` — DE, Olympische Distanz + Sprint, Hagen (NRW), May 31
- `vulkanlandaquathlon-riegersburg-2026` — AT, Aquathlon, Riegersburg (Steiermark), Sep 6
- `gran-fondo-greece-loutraki-2026` — GR, Gran Fondo, Loutraki, Nov 1, 112km/889hm (UCI GFWS)

### imageUrl additions (this session — 108 new, 580→688):
**Batch 1 (previous session, 17 events):**
- niederrhein-triathlon-kalkar, petershagen-triathlon, zollernkoenig-tubingen, schauinslandkoenig-bergzeitfahren, la-fabio-casartelli, marmotte-granfondo-pyrenees, allgaeu-spaetzle-ultra-bad-waldsee, top-race-germany-bostalsee, granfondo-del-mugello, prinzen-rolle-radmarathon-polch, prenzlauer-huegelmarathon, panaromagravel-buehlertal, sika-triathlon-kornwestheim, sindelfingen-triathlon, halle-triathlon, talsperren-rundfahrt-gevelsberg, poggensee-triathlon-bad-oldesloe

**Batch 2 (this session, 5 events):**
- gfny-uppsala, rad-am-ring, ultra-rad-challenge-steiermark, vuelta-cicloturista-ibiza, lidl-deutschland-tour

### Remaining events without imageUrl (~43):
Permanently blocked: vogtland-radmarathon, tour-o-the-borders, desafio-donana, steiraman, nordschwarzwald-triathlon, eberbacher-triathlon, covestro-triathlon-krefeld, bildchen-sprint-siedlinghausen, sugar-gravel-stuttgart, goettinger-dreilaendermarathon, hahnenkamm-mtb (Tyrol.com proxy), rhoen-300 (3rd party), 3-peaks-cyclocross (media CDN), and ~30 small club events

## Session date: 2026-05-28 (Session 6)

## Current state (after Session 6 – FINAL):
- **Total events: 743** (739 from Session 5 + 4 new)
- Events with imageUrl: **580** (78%) — up from 352 (47%) in Session 5
- Build: ~775 pages

## Changes made this session (Session 6):

### New events added (4):
- `waidhofner-radmarathon-2026` — AT, Gran Fondo, Waidhofen/Ybbs (NÖ), May 31, 103km/1200hm (ASKÖ verified)
- `alois-kainer-gedenkrennen-ezf-2026` — AT, Zeitfahren, Großhartmannsdorf (Steiermark), May 31, 16.4km/247hm (radmarathon.at + radrennteam-graz.com verified)
- `schoenleiten-1000-aflenz-2026` — AT, Gravel+Berg, Aflenz (Steiermark), May 31, 10km/1000hm (rc-hochschwabaflenz.at verified)
- `race-across-austria-north-south-2026` — AT, Radmarathon+Etappenrennen, Linz (OÖ), Jun 16-20, 1000km/14000hm (raceacrossaustria.com verified)

### imageUrl additions — all batches (total: ~228 new imageUrls this session, 352→580):
- Early commits (3): ~49 events — AT/IT/NO/International cycling
- Batch D (19): German cycling (radmarathon.de events)
- Batch E (13): AT events + more DE cycling
- Batch F (32): European cycling (IT, FR, ES, BE, CH, GB, NO, SE, DK, etc.)
- Batch G (14): Remaining DE triathlons
- Batch H (26): Misc events across Europe (PL, EE, BE, ES, PT, DE, AT)
- Batch C (26): German triathlons (altmark, hannover, heideseetriathlon, seenland, etc.)
- Batch B (18): Challenge Family x3, T100 x3, XTERRA x4, Outlaw x3, others x5
- Batch I (5): More DE triathlons (bibermann, neroman, pfordterman, rigolator, stadttriathlon-forchheim)
- Batch J (3): DE/AT cycling (sks-sauerland, sparkassen-heide-gravel, rad-am-salzburgring)
- Batch K (2): International (la-cantabrona ES, race-across-austria-north-south)

### Known blocks / permanently unobtainable imageUrls:
- **6 IRONMAN events** (ironman-703-*): ironman.com returns 403 hostname_blocked for all requests
- **ASO events** (cyclassics-hamburg, eschborn-frankfurt-jedermann, paris-roubaix-challenge, lidl-deutschland-tour): img.aso.fr blocks hotlinking
- **~50 events** with sites behind WAF/SSL issues or returning 403/503/ECONNREFUSED
- **~30 events** with only logos, square images, or portrait images
- **~20 events** with JS-rendered lazy-loaded images only (no static URL in HTML)

### Remaining events without imageUrl (163):
Mainly: smaller German/Austrian triathlon clubs, many radsport-events.de events (their individual sub-pages return 404), events with CAPTCHA/Cloudflare protection, and events hosted on platforms that block server-side image fetching.

## Session date: 2026-05-27 (Session 5)

## Current state (after Session 5):
- **Total events: 739** (734 from Session 4 + 5 new)
- Events with imageUrl: **352** (up from ~260)
- Build: 772 pages — sitemap auto-generated

## Changes made this session (Session 5):

### New events added (5):
- `churchhillrace-doeben-2026` — DE, Berg+Zeitfahren, Döben (Sachsen), Jun 14 (confirmed)
- `wernigeroder-radsporttage-bergzeitfahren-2026` — DE, Berg+Zeitfahren, Wernigerode, Jun 19 (confirmed)
- `bergzeitfahren-schmelz-lollar-2026` — DE, Berg+Zeitfahren, Lollar (Hessen), Sep 5 (confirmed)
- `bildchen-sprint-siedlinghausen-2026` — DE, Berg+Zeitfahren, Siedlinghausen (NRW), Sep 12 (confirmed)
- `ebersteinburg-bergzeitfahren-2026` — DE, Berg+Zeitfahren, Ebersteinburg (BW), Sep 19 (confirmed)

### imageUrl additions (~93 events in two commits):
Commit 1 (11 events): pfaender-bergzeitfahren, aloha-tri-linz, aloha-tri-traun, xterra-austria, race-around-austria, gaisberg-vertical-salzburg, ikb-baggersee-aquathlon-innsbruck, alpenbrevet-andermatt, tour-transalp, granfondo-il-lombardia (updated), quebrantahuesos (updated to official site)

Commit 2 (31 events): DE triathlons (Kallmünzer, Heidbergsee/Sparkassen Braunschweig, EWR Lampertheim, Heinerman Darmstadt, Nordhorner, Hersbrucker Volkstriathlon, Berliner Volkstriathlon, LEXWARE Freiburg, GEALAN Hof, Düsseldorf Familientriathlon, Aluman Grevesmühlen, Schaalsee Zarrentin), DE cycling (Rosenheimer Radmarathon+Graveltour, Franken-Bike-Marathon, Schwalm-Tal, Tecklenburger Höhen, Mecklenburger Seen, Panoramatour Oberpfälzer Wald, Jura-Radmarathon, Harzer Radmarathon, Nibelungen Dirty, Gran Fondo Nordeifel, Marathon Ibbenbüren, Erztaler Tharandt, Giro Hattersheim), International (Sellaronda Bike Day, Embrunman, Wicklow 200, Kärnten Radmarathon)

### websiteUrl fixes:
- `jura-radmarathon-2026` websiteUrl: jura-radmarathon.de (expired/hijacked) → dreilaenderbike.de
- `wuerzburg-triathlon-2026` websiteUrl: finishers.com → wuerzburg-triathlon.de (official)

## Session date: 2026-05-25 (Session 4)

## Current state (after Session 4 – PARTIAL):
- **Total events: 711** (714 from Session 3 – 3 removed)
- Events with imageUrl: **~260** (up from 195)
- Removed: arbo-kaernten-radmarathon (dup), vienna-donauinsel-triathlon (dup), grazer-altstadtkriterium (cancelled), uci-granfondo-suisse (dup of the-majestics-villars)

## Changes made this session (Session 4):

### Removed events:
- `arbo-kaernten-radmarathon-2026` — duplicate of `kaernten-radmarathon-2026`
- `vienna-donauinsel-triathlon-2026` — duplicate of `vienna-triathlon-2026`
- `grazer-altstadtkriterium-2026` — last edition 2022, no 2026 announcement on official site
- `uci-granfondo-suisse-2026` — duplicate of `the-majestics-villars-2026` (ucigranfondosuisse.com redirects to themajestics.ch)

### New events added:
- `brockenheroes-bergzeitfahren-2026` — DE, Zeitfahren, Schierke, Sep 26 (confirmed official site)
- `dachsteinblick-bergzeitfahren-2026` — AT, Zeitfahren, Nußdorf am Attersee, Jul 24 (confirmed)
- `loser-bergzeitfahren-altaussee-2026` — AT, Zeitfahren, Altaussee, Sep 26 (date unconfirmed)
- `hegau-bodensee-panoramatour-2026` — DE, Radmarathon, Orsingen-Nenzingen, Jun 7 (confirmed)
- `giro-hattersheim-2026` — DE, Radmarathon, Hattersheim am Main, Jun 7 (confirmed)

### imageUrl additions (~70+ events):
- AT events: alpentour-trophy, mondsee-5-seen-radmarathon, kapfensteiner-radmarathon, thayarunde-radmarathon, thiersee-triathlon, zugspitz-arena-gravel-triathlon, aloha-tri-mondseeland, lidl-tour-of-austria, pannonia-gravel-moerbisch, triathlon-bregenz, in-velo-veritas-korneuburg
- DE triathlon: moret-triathlon-babenhausen (new), bochum, ratingen, knappenman, nordseeman, stadtparktriathlon-hamburg, fehmarn, erlanger, woerthsee, muenster-city, ostseeman-gluecksburg (all previously applied in earlier batch per previous session work)
- Challenge events: challenge-sanremo, challenge-vieux-boucau, challenge-gdansk, challenge-turku, challenge-the-championship-samorin
- International: triathlon-deauville, nordsjorittet-egersund, swissman-xtreme-triathlon, granfondo-gavia-mortirolo, marmotte-granfondo-alpes, altriman-les-angles, ariegeoise-cyclosportive, dolomites-bike-day-corvara, europe-triathlon-multisport-banyoles, gran-triatlon-madrid, gt3-lavaredo-gravel, la-pyreneenne-bagneres

### Duplicate detection notes:
- vienna-donauinsel-triathlon = vienna-triathlon (same date Sep 12-13, same location Donauinsel, same website vienna-triathlon.at)
- grazer-altstadtkriterium: official website still shows 2024 cancelled, last edition was 2022

## Session date: 2026-05-21 (Session 3)

## Current state (after this session – FINAL):
- **Total events: 710** (482 from Session 2 + ~228 net new + removals)
- Events with imageUrl: **195** (up from ~75)
- Build: 742 pages (710 events + country/sport filter pages + index) — sitemap auto-generated

## Changes made this session (Session 3):

### Removed events (cancelled):
- `ostseenroller-radmarathon-schwerin-2026` — 2026 edition cancelled due to insufficient registrations (confirmed on official site)

### New events added (~228 net new):
Major additions included:
- Comprehensive German triathlon events (DTU calendar, all federal states)
- Austrian triathlon events (ÖTRV calendar)
- European IRONMAN 70.3 series (all European editions)
- European IRONMAN full distance series
- Challenge Family European events
- European gran fondo/Radmarathon events (IT, FR, ES, GB, BE, CH, NO, SE, DK, etc.)
- German Radmarathon/Gran Fondo events (cycloworld.cc calendar)
- New specific events: ALBTraum Bikepacking, Rad-Marathon Neu-Anspach, Duisburg Steel Classic, Belchen³ trinational

### websiteUrl fixes:
- fichtelberg-radmarathon-chemnitz-2026 → https://fichtelberg-radmarathon.de/
- tour-de-mur-lungau-2026 → https://tour-de-mur.at/
- starlim-city-triathlon-wels-2026 → https://www.wels-triathlon.at/
- steeltownman-linz-2026 → https://steeltownman.com/
- westerwald-bike-challenge-2026 → https://rsc-buchholz.de/westerwald-bike-challenge

### imageUrl additions (55+ events):
Applied imageUrls to 55+ events this session including:
- Aug DE triathlon events (Frankfurt, Regensburg, Bad Saarow, Bremen, Nürnberg, Summertime, Kitzingen, Bad Arolsen, Ingolstadt, Ratscher)
- Sep-Oct cycling events (Münsterland Giro, Kufsteinerland, Bodensee, Ötztaler, King of the Lake)
- European IRONMAN events (Alghero, Bolton, Elsinore, Warsaw, Westfriesland, Jönköping, Sables, Swansea, Leipzig, Kraków, Poznań, Knokke, Weymouth, Tours, Vichy, Lanzarote, Kalmar, Tallinn, Wales, Copenhagen, Leeds, Vitoria, Cascais, Calella, Aix, Alcúdia, Nice, Poreč, Belgrade)
- Other European events (AlpsMan Annecy, Blenheim Palace, IRONMAN 70.3 Switzerland, L'Ardéchoise, Mont Ventoux, Tartu Rattaralli)
- AT/DE events: Pöttschinger, Schwarzwald Super, Velorace Dresden, Schleizer Dreieck, O-SEE Challenge Zittau, Bergkaiser Kematen, Swim Run Swim Längsee

## Coverage status:
- Ironman 70.3 Europe: comprehensive (40+ events)
- Ironman full distance Europe: comprehensive (15+ events)
- Challenge Family Europe: comprehensive (15+ events)
- T100 World Tour Europe: complete (Pamplona, London, French Riviera)
- XTERRA Europe: comprehensive (9 events)
- German triathlon: very comprehensive (100+ events)
- Austrian triathlon: very comprehensive (30+ events)
- German cycling: very comprehensive (150+ events)
- Austrian cycling: comprehensive (30+ events)
- European cycling (IT, FR, ES, BE, CH, GB, NO, etc.): good coverage

## Known Cancelled / Paused Events – Do Not Re-Add:
- **Leitha.Berg Radmarathon** (Purbach, AT) — 2025 cancelled, no 2026 edition
- **Ost-Seen-Roller Radmarathon** (Schwerin, DE) — 2026 cancelled (insufficient registrations), confirmed official site ostseenroller.de
- **Marmotte Granfondo Pyrénées** (Argelès-Gazost, FR) — 2026 cancelled per official site marmottegranfondopyrenees.com — REMOVED from DB in Session 10

## Session 10 summary (2026-06-03):
### New events added:
- Flare Bicycle Festival Heidelberg (13.06.2026, DE, cycling)
- ITH Hennesee Triathlon Meschede (27.06.2026, DE, triathlon)
- 3RIDES Gran Fondo Aachen (01.06.2026, DE, UCI World Series cycling)
- PUMA Herzoman Herzogenaurach (28.06.2026, DE, triathlon)
- Kulturstadttriathlon Weimar (28.06.2026, DE, triathlon)
- 9. Lauchringer Triathlon-Nacht (26.06.2026, DE, triathlon)
- Wanzleber Sparkassen Triathlon (05.07.2026, DE, triathlon)
- 9. Super-Cross-Sprint Triathlon Merzig (07.06.2026, DE, triathlon/cross)

### imageUrl additions (Session 10, ~15 events):
- mendener-cross-triathlon, rund-um-den-harz-greene, josef-oster-radmarathon-eifel, taegi-tri-wettingen,
  viernheimer-triathlon, ingelheimer-triathlon-der-kleine-karl, thueringen-erfahren-ultracycling,
  ring-of-beara-cycle, emsland-triathlon-meppen (+ websiteUrl fix), flare-bicycle-festival-heidelberg,
  ith-hennesee-triathlon-meschede

### Sources used this session:
- DTU Veranstaltungskalender (9 pages) — for German triathlon coverage
- UCI Gran Fondo World Series calendar — for cycling coverage
- GranFondoGuide, Sportive.com — for cycling image URLs
- Official event websites — primary source for verification

### DB totals after Session 10:
- Total events: 851 (after adds and removes)
- Events with imageUrl: 833 (97%)
- Upcoming events without imageUrl: 15 (all small local DE events with inaccessible websites)

### Events still missing imageUrl (upcoming):
Super-Cross-Sprint Merzig, Niedensteiner Volkstriathlon, Löwensteiner Bergen, Lauchringer Triathlon-Nacht,
Kulturstadttriathlon Weimar, Wanzleber Triathlon, Cross Triathlon Karlstadt, Raiffeisentriathlon Hamm,
Schlaubetal Triathlon Müllrose, 3RIDES Winterberg, Malteser Triathlon Heitersheim,
Triathlon Niederbayern, Desafío Castilla y León, Fünf-Seen-Rundfahrt Dießen, Sugar Gravel Stuttgart

## Source reliability reminder:
- DO NOT use prommer.net
- Trusted: official race sites, DTU, ÖTRV, BDR, UCI, ITU/World Triathlon, ironman.com, challenge-family.com, t100triathlon.com
- CycloWorld calendar (cycloworld.cc) used for cycling events as secondary source
- Triathlon Austria (triathlon-austria.at) used for Austrian triathlon events
- finishers.com / Cloudinary images: OK for imageUrl (1600×550px banner crops)
- endurance.biz: good source for official IRONMAN press photos

## Session date: 2026-06-03 (Session 11)

## Current state (after Session 11):
- **Total events: 858** (851 from Session 10 + 7 net new)
- Events with imageUrl: **844** (98.4%)
- Build: 893 pages

## Changes made this session (Session 11):

### Agent run (Session 11a):
- Added 5 new events: TenneT POWERTRIATHLON Trebgast, Wemdinger Waldsee Triathlon, TriaHatz Finsterwalde, 5. Waidhofner Thayatal-Triathlon, Hallig-Dreeathlon Langenhorn
- Added imageUrls for: 3RIDES Winterberg, Desafío Castilla y León, Kulturstadttriathlon Weimar, Lauchringer Triathlon-Nacht, Wanzleber Sparkassen Triathlon
- Fixed websiteUrls: Lauchringer (→ triathlon-lauchringen.de), Malteser Heitersheim (→ maltesertriathlon.de), Raiffeisentriathlon Hamm (→ raiffeisentriathlon.de/hamm/), Merzig (→ racepedia)

### Session 11 direct work:
- Added ARBÖ Kärnten Radmarathon Bad Kleinkirchheim (07.06.2026, AT, Kärnten, verified kaernten-radmarathon.at)
- Added Kriterium Grafenstein (04.06.2026, AT, Kärnten, verified meinbezirk.at + bikeboard.at)
- Added imageUrls: TriaHatz Finsterwalde (fotos.verwaltungsportal.de/events Banner.webp), TenneT POWERTRIATHLON Trebgast (finishers.com Cloudinary), Wemdinger Waldsee Triathlon (finishers.com Cloudinary), Schlaubetal Triathlon Müllrose (finishers.com Cloudinary)

### Events still without imageUrl (upcoming):
Super-Cross-Sprint Merzig, Niedensteiner Volkstriathlon, Löwensteiner Bergen, Cross Triathlon Karlstadt,
Raiffeisentriathlon Hamm (Sieg), Malteser Triathlon Heitersheim, Sparkasse Passau Triathlon Niederbayern,
Hallig-Dreeathlon Langenhorn, Fünf-Seen-Rundfahrt Dießen, Sugar Gravel Stuttgart,
plus 4 past events (Gran Fondo Amsterdam, Taunus-Vogelsberg, City Tri Paderborn, Waidhofner Thayatal)

### Research findings (Session 11):
- IRONMAN 70.3 European calendar: 21 events, all in DB
- Challenge Family European calendar: all in DB
- T100 2026: all European events in DB (Pamplona May 23, French Riviera Sep 19)
- XTERRA European calendar: all in DB
- UCI Gran Fondo World Series: all European events in DB
- DTU calendar (pages 1-17): 99% coverage, only very small local events missing
- ÖTRV calendar July-September: all in DB

## Known Cancelled / Paused Events – Do Not Re-Add:
- **Leitha.Berg Radmarathon** (Purbach, AT) — 2025 abgesagt, keine 2026-Ausgabe
- **Ost-Seen-Roller Radmarathon** (Schwerin, DE) — 2026 cancelled
- **Marmotte Granfondo Pyrénées** (Argelès-Gazost, FR) — 2026 cancelled
- **IRONMAN 70.3 Maastricht-Limburg** — 2026 cancelled
## Session date: 2026-07-02 (Session 28 – Enrichment-first Wartungslauf)

## Current state (after Session 28):
- **Total events: 1116** (1119 → −3 Duplikate = 1116)
- **Upcoming (>= 2026-07-02): 634 | Past (indexiert via noindex): 482**
- Build: 1164 pages, 0 errors, 0 warnings
- Sitemap: 682 URLs — vergangene Events korrekt ausgeschlossen (noindex-Feature aus Session 27 aktiv)
- Latest push: (this session) — push auf master triggert Deployment

## Kontext dieses Laufs
Fokus lag ausschließlich auf **Enrichment und Datenqualität**, keine Neuanlagen (Ziel: Google-Throttle-Aufhebung durch Qualität statt Menge, nicht neuerliches Fluten).

## Enrichment (23 künftige Events angereichert)

**Große/bekannte Events — Beschreibungen faktenreich verdichtet und Distanzen/Höhenmeter belegt oder korrigiert:**
- `challenge-roth-2026` — Beschreibung von 1 Satz auf 6+ Sätze verdichtet (Geschichte seit 1984, Volunteers 7500, Solarer Berg, Zieleinlauf, Slot-Rush)
- `wachau-radmarathon-2026` — Beschreibung von 133 Zeichen auf ~7 Sätze, Rassinger-Zitat "2000+ Teilnehmer", drei Distanzen (Light/Power/Krone Champions) belegt
- `salzkammergut-trophy-2026` — Distanz von falsch 209 km/9000 Hm auf **korrekt 201 km/7020 Hm** gefixt, 7 Strecken (22/37/55/57/75/119/201) belegt, seit 1998
- `sauerland-marathon-schmallenberg-2026` — Distanz 116→117 km, elevationGainM **3863 m ergänzt**, Ultra Rothaarsteig / Marathon / Wilzenberg-Klassiker / Studenten belegt, imageUrl ergänzt
- `black-forest-ultra-bike-marathon-kirchzarten-2026` — elevationGainM **4000 ergänzt**, Streckenbeschreibung um Schauinsland/Höhenzüge erweitert
- `flugfeld-giro-boeblingen-2026` — distanceKm **208 + elevationGainM 2590 ergänzt**, alle 6 Tour-Varianten (208/161/132/87/40/15 km) mit Hm belegt
- `montafon-m3-mtb-marathon-2026` — distanceKm **75 ergänzt**, 5 Streckenvarianten (M¹/M²/M³ + 2x E-MTB) belegt
- `rad-marathon-tannheimer-tal-2026` — Beschreibung verdichtet, alle 4 Distanzen (66/103/138/214) mit Hm belegt, Ausverkaufsstatus 2026

**Kleine/spezialisierte AT-Events — websiteUrl + distanceKm + elevationGainM + faktenreiche Beschreibung ergänzt (Research-Agent + eigene Recherche):**
- `mucki-bergrennen-lilienfeld-2026` — 10 km/930 m, alpenteamcup.at, Muckenkogel/Traisnerhütte, Mucki-Alpen-Team-Cup-Serie
- `landsthalsprint-hainfeld-2026` — 6 km/510 m, urchainfeld.sportunion.at, Kirchenberg/Wirtshaus Landsthal, Saisonfinale ATC
- `muehldorfer-almtrophy-2026` — 12 km/980 m, eisenwadl.com, 14. Ausgabe, Möllbrücke→Klinghütte, MTB/Gravel/E-Bike/Handbike, imageUrl
- `lhistorica-bad-wimsbach-2026` — lhistorica.at, drei Kategorien (Traditional/Vintage Tweed/Classic Racer), Moorlandschaft Neydharting
- `vintage-tour-donau-2026` — vintage-tour.at, 99 km/820 m, Start Weingut Lenz Moser Rohrendorf, imageUrl, Schloss Gobelsburg
- `kurt-honisch-gedenkrennen-2026` — 61 km/873 m, radclub-moedling.at, Wienerwald-Rundkurs Dornbach, 10:00 Uhr Start
- `oestm-gravel-pama-2026` — 132 km/1347 m, rc-awr.at, ÖSTM Gravel im Auftrag Cycling Austria, 3 Distanzen (132/88/44), imageUrl

**Sonstige DE Events — Beschreibungen erweitert / Fakten korrigiert:**
- `kanalfahrt-westerroenfeld-2026` — 6 Distanzen (Familie/43/79/129/160/207 km), Start OTSV Osterrönfeld 7:30 Uhr, Anmeldeschluss 2. Juli 23:59
- `aluman-triathlon-grevesmuehlen-2026` — Edition-Fix (14.→18.), distanceKm 28 ergänzt, exakte 500/21,5/6,5 km + Startgebühren + Ort
- `iok-triathlon-verl-2026` — 21. Ausgabe, Verler See (Vinkenbach-Areal), Beschreibung von 130 Zeichen auf 6 Sätze
- `sparkassen-triathlon-schopfheim-2026` — 15. Ausgabe (seit 2012), Kategorien detailliert, TSCH Langenau
- `gealan-triathlon-hof-2026` — 43. Ausgabe + 27. Stadtwerke Youth Triathlon parallel, Untreusee-Kulisse, Frühbucher-Deadline
- `karlsfelder-triathlon-2026` — Beschreibung von 205 Zeichen auf 7 Sätze, Dachauer Moos + Amper-Auwälder + Rundkurs am See
- `welzheimer-triathlon-2026` — 41. Ausgabe, Naturpark Schwäbisch-Fränkischer Wald, TSF Welzheim, 6 Sätze
- `tour-dalba-schwarzach-2026` — distanceKm **50 + elevationGainM 1000 ergänzt**, kleine (20/500)/große (50/1000) Route

## Duplikate entfernt (3)
- `muhldorfer-almtrophy-2026.json` — dublette von `muehldorfer-almtrophy-2026.json` (gleicher Termin 22.08., Kärnten)
- `horstel-triathlon-2026.json` — dublette von `riesenbecker-triathlon-2026.json` (43. Riesenbecker-Polyvlies-Triathlon am 30.08., Hörstel-Bevergern; besser gepflegte Version behalten)
- `sudkarntner-triathlon-2026.json` — dublette von `suedkaerntner-triathlon-2026.json` (8. Südkärntner Triathlon 12./13.09. am Klopeinersee; version mit distanceKm+elevationGainM behalten)

## Datenfixes (1)
- `altwarmbuchener-triathlon-hannover-2026.json` — `id` von `"altwarmbüchener-…"` (mit Umlaut) auf `"altwarmbuchener-…"` korrigiert, damit slug == filename == id.

## Verbleibende Enrichment-Backlog (Snapshot nach diesem Lauf)
- Missing image (upcoming): **20** (war 24) — meist Aggregator-blockierte Sites (Piratentriathlon Amberg keine offizielle Site auffindbar, Koog Kollektiv/Hugenotten kein DNS, Cross Triathlon Karlstadt 503, thueringer-gravel-night, flatlands-spreewald, miriquidi-mtb.de blockt WebFetch für Detail-Pages)
- Missing distanceKm (upcoming cycling): **77** (war 88)
- Missing elevationGainM (upcoming cycling): **318** (war 330)
- Thin descriptions (<200 Zeichen ODER <3 Sätze): **166** (war 184)
- **Backlog für Session 29:** Piratentriathlon Amberg offizielle Site aufspüren (bikeboard-Umleitung o.ä.), Koog Kollektiv Triathlon Risum-Lindholm (DTU-Detailseite tote Deep-Links), Cross Triathlon Karlstadt (503 wiederholt), miriquidi-mtb.de Detail-Pages (nur via Facebook-Feed erreichbar), Sauerland Rodeo Brilon (05.09.), Duensberg Bike Marathon (30.08.), flatlands-spreewald (Streckenlängen).

## SEO / Sitemap
- Build grün (1164 Seiten, 52s)
- Sitemap enthält 682 URLs (nur indexierbare Seiten, keine noindex/vergangenen Events)
- noindex-Feature aus Session 27 (commit e12215f) läuft stabil — 482 vergangene Events werden korrekt aus dem Sitemap ausgeschlossen und mit `noindex, follow` gerendert.

## Keine Neuanlagen
Bewusster Verzicht auf neue Events in diesem Lauf (Anti-Flut-Regel + noch hoher Bedarf an Enrichment bei Bestandsevents). Backlog neuer Kandidaten aus letzten Sessions bleibt in Aggregator-Quellen abrufbar; Priorität nächster Lauf bleibt Enrichment (>= 20 künftige Events veredeln, Titel/Beschreibungen inhaltlich verdichten).

---

## Session date: 2026-06-16 (Session 27)

## Current state (after Session 27):
- **Total events: 1120** (1093 → +27 new events = 1120)
- Build: 0 errors, 0 warnings (astro check)
- Latest push: commit 977154d to master ✓ (deployment triggered)

## Changes made this session (Session 27):

### imageUrls added to existing events (3):
- `zeitfahr-cup-perg-2026` ← official 2026 Perg race photo (zeitfahr-cup.at, 1024×683)
- `loewensteiner-berge-radmarathon-2026` ← group photo on road (rsv-heidelberg.de, 1024×768)
- `laacher-see-mtb-marathon-2026` ← YouTube race thumbnail (1280×720, verified 200 OK)

### New triathlon events (6, DTU/ÖTRV confirmed):
- `piratentriathlon-amberg-2026` — DE/Bayern, Olympische Distanz, Jul 11, Amberg
- `koog-kollektiv-2026` — DE/Schleswig-Holstein, Olympische Distanz, Jul 25, Risum-Lindholm
- `hugenotten-duathlon-2026` — DE/Hessen, Duathlon, Nov 1, Neu-Isenburg
- `crossduathlon-naturfreunde-klaus-2026` — AT/OÖ, Duathlon, Jun 20, Klaus an der Pyhrnbahn
- `gaishorner-bergduathlon-2026` — AT/Steiermark, Duathlon, Sep 5, Gaishorn am See
- `kosiak-loewe-2026` — AT/Kärnten, Duathlon, Oct 3, Feistritz im Rosental

### New cycling events AT (8, radmarathon.at/ÖRV calendar):
- `lochau-bergzeitfahren-2026` — AT/Vorarlberg, Berg+Zeitfahren, Jun 18, Lochau (6km/590Hm)
- `mucki-bergrennen-lilienfeld-2026` — AT/NÖ, Berg+Zeitfahren, Jul 18, Lilienfeld
- `muehldorfer-almtrophy-2026` — AT/Kärnten, Berg, Aug 22, Lurnfeld
- `landsthalsprint-hainfeld-2026` — AT/NÖ, Berg+Zeitfahren, Aug 22, Hainfeld
- `oestm-gravel-pama-2026` — AT/Burgenland, Gravel, Sep 12, Pama (Austrian Gravel Championship)
- `kurt-honisch-gedenkrennen-2026` — AT/NÖ, Gran Fondo, Sep 13, Dornbach/Wienerwald
- `lhistorica-bad-wimsbach-2026` — AT/OÖ, Gran Fondo, Aug 29, Bad Wimsbach-Neydharting (vintage bikes)
- `vintage-tour-donau-2026` — AT/NÖ, Gran Fondo, Aug 30, Rohrendorf/Krems (Donau, vintage bikes)

### New cycling events DE (13, cycloworld.cc/research confirmed):
- `saarlandschwein-radmarathon-2026` — DE/Saarland, Radmarathon, Jun 20, Überherrn (400km ultra)
- `gran-gravelfondo-ueberrherrn-2026` — DE/Saarland, Gran Fondo+Gravel, Jun 20, Überherrn (130km)
- `duesseldorf-300-2026` — DE/NRW, Radmarathon, Jun 19-20, Düsseldorf (300km overnight)
- `cycling-paradise-sylt-2026` — DE/Schleswig-Holstein, Gran Fondo, Aug 29, Wenningstedt-Braderup (100km)
- `bayrisch-lettn-2026` — DE/Bayern, Gravel, Jun 18, Nürnberg (387km/7360Hm bikepacking)
- `ultra-500-leipzig-2026` — DE/Sachsen, Gravel, Jun 20, Leipzig (500km/5000Hm bikepacking)
- `kanalfahrt-westerroenfeld-2026` — DE/Schleswig-Holstein, Radmarathon, Jul 5, Westerrönfeld (207km)
- `black-forest-ultra-bike-marathon-kirchzarten-2026` — DE/BW, Radmarathon, Jul 26, Kirchzarten (118km MTB)
- `sauerland-marathon-schmallenberg-2026` — DE/NRW, Radmarathon, Aug 15, Schmallenberg-Grafschaft (116km MTB)
- `miriquidi-bike-challenge-2026` — DE/Sachsen, Radmarathon, Aug 22, Marienberg/Erzgebirge (90km MTB)
- `duensberg-bike-marathon-2026` — DE/Hessen, Gravel+Radmarathon, Aug 30, Biebertal (85km)
- `flatlands-spreewald-2026` — DE/Brandenburg, Gravel, Jul 25, Schlepzig
- `cycling-paradise-sylt-2026` — DE/Schleswig-Holstein, Gran Fondo, Aug 29

### Already in DB (confirmed during check — no action needed):
- race-across-the-alps (525km ultra, exists with imageUrl)
- Alpentour Trophy Schladming, Fuga 300 Heiligenblut, Ironbike Ischgl, Montafon M3, Mostviertler Bike Marathon, Race Across Germany, Rodenkirchener Eifelmarathon, Schwalm-Tal Marathon, Schwarzwald Bike Marathon Furtwangen, VulkanBike Eifel, 3RIDES Winterberg, Black Forest Ultra Gravel, Saarschleifen Bike Mettlach, Bodensee Gravel Giro, Schwetzinger Höllgrund, EBM Erzgebirgs Bike Marathon, NordSchwarzwald Trophy, Lautertal Bikemarathon, Gravel Rallye Black Forest, Shades of Speed Bad Feilnbach, Dirndltal Race Frankenfels, World Games MTB Saalbach, Monaco di Baviera Classic München

### Coverage confirmed complete (Session 27):
- IRONMAN Full Distance Europe 2026: all 17 events in DB ✓
- IRONMAN 70.3 Europe 2026: all ~35 events in DB ✓
- Challenge Family Europe 2026: all 17 events in DB ✓
- T100 World Tour Europe 2026: all 3 events in DB ✓
- Austrian cycling (radmarathon.at): comprehensive, 8 new events added

### Cancelled/paused events confirmed (not added):
- Hexenturm-Radmarathon Idstein: date conflict between sources (cycloworld: Jun 28, research agent: Aug 16) — needs verification before adding

---
---
