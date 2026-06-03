# Sport Events Checker – Session Progress

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
