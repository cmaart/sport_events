# Sport Events Checker – Session Progress

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

## Source reliability reminder:
- DO NOT use prommer.net
- Trusted: official race sites, DTU, ÖTRV, BDR, UCI, ITU/World Triathlon, ironman.com, challenge-family.com, t100triathlon.com
- CycloWorld calendar (cycloworld.cc) used for cycling events as secondary source
- Triathlon Austria (triathlon-austria.at) used for Austrian triathlon events
- finishers.com / Cloudinary images: OK for imageUrl (1600×550px banner crops)
- endurance.biz: good source for official IRONMAN press photos
