# Sport Events Research Progress

## Session: 2026-05-17 (abgeschlossen)

### Sources Used
- triathlon-austria.at/de/service-termine (ÖTRV Kalender)
- hannes-hawaii-tours.de (AT Triathlon Kalender)
- running.life/triathlon-calendar/austria + /germany
- finishers.com (DE/AT events)
- triathlonszene.de
- dtu.de (Deutsche Triathlon Union) / triathlondeutschland.de
- radsport-events.de
- radmarathon.at
- battistrada.com
- cycloworld.cc
- triathlon.de
- 3rides.de (UCI Gran Fondo World Series)
- schlosstriathlon.de, spreewald-triathlon.de, werbellinseetriathlon.de
- bochum-triathlon.de, rosenstadt-triathlon.de
- powertriathlon.de, koberbachtal-triathlon.de, zwickau-triathlon.de
- allgaeu-radmarathon.de, myeifelride.de, sauerlandride.de
- artour-rtf.de, erzgebirgstour.de, saarschleifen.bike
- nordcup-radmarathon.de, altmuehltal-radmarathon.de
- ironman.com (europäischer Kalender)
- challenge-family.com (europäischer Kalender)
- granfondo-guide.com, granfondoguide.com
- cyclingclassics.eu, monument-sportives.com

### Abgeschlossene Erweiterungen (Session Mai 2026)

#### Länder-Erweiterung
- `src/lib/types.ts`: COUNTRIES von 2 auf 24 europäische Länder erweitert
- COUNTRY_LABELS für alle 24 Länder (AT, DE, CH, FR, IT, ES, PT, NL, BE, LU, GB, IE, DK, NO, SE, FI, CZ, SK, PL, HU, SI, HR, EE, BG)
- `src/i18n/de.json`: Texte auf europäischen Scope aktualisiert

#### Neue Events (ca. 82 neue JSON-Dateien)

**IRONMAN Langdistanz Europa:**
- ironman-vichy-2026 (FR)
- ironman-france-nice-2026 (FR)
- ironman-tours-loire-valley-2026 (FR)
- ironman-switzerland-thun-2026 (CH)
- ironman-italy-emilia-romagna-2026 (IT)
- ironman-lanzarote-2026 (ES)
- ironman-vitoria-gasteiz-2026 (ES)
- ironman-barcelona-calella-2026 (ES)
- ironman-portugal-cascais-2026 (PT)
- ironman-wales-2026 (GB)
- ironman-leeds-2026 (GB)
- ironman-copenhagen-2026 (DK)
- ironman-kalmar-2026 (SE)
- ironman-tallinn-2026 (EE)

**IRONMAN 70.3 Europa:**
- ironman-703-vichy-2026 (FR)
- ironman-703-les-sables-vendee-2026 (FR)
- ironman-703-aix-en-provence-2026 (FR)
- ironman-703-nice-2026 (FR)
- ironman-703-luxembourg-2026 (LU)
- ironman-703-switzerland-rapperswil-2026 (CH)
- ironman-703-italy-emilia-romagna-2026 (IT)
- ironman-703-venice-jesolo-2026 (IT)
- ironman-703-alcudia-mallorca-2026 (ES)
- ironman-703-malaga-2026 (ES)
- ironman-703-vitoria-gasteiz-2026 (ES)
- ironman-703-valencia-2026 (ES)
- ironman-703-cascais-2026 (PT)
- ironman-703-westfriesland-2026 (NL)
- ironman-703-knokke-heist-2026 (BE)
- ironman-703-bolton-2026 (GB)
- ironman-703-weymouth-2026 (GB)
- ironman-703-elsinore-2026 (DK)
- ironman-703-jonkoping-2026 (SE)
- ironman-703-tallinn-2026 (EE)
- ironman-703-gdynia-2026 (PL)
- ironman-703-poznan-2026 (PL)
- ironman-703-hradec-kralove-2026 (CZ)
- ironman-703-porec-2026 (HR)

**Challenge Family Europa:**
- challenge-the-championship-samorin-2026 (SK)
- challenge-salou-2026 (ES)
- challenge-peguera-mallorca-2026 (ES)
- challenge-mogan-gran-canaria-2026 (ES)
- challenge-barcelona-2026 (ES)
- challenge-sanremo-2026 (IT)
- challenge-cesenatico-2026 (IT)
- challenge-forte-village-sardinia-2026 (IT)
- challenge-almere-amsterdam-2026 (NL)
- challenge-gdansk-2026 (PL)
- challenge-sandefjord-2026 (NO)
- challenge-turku-2026 (FI)
- challenge-vieux-boucau-2026 (FR)

**Gran Fondo / Cycling Europa:**
- lbl-challenge-2026 (BE) - LBL Sportive
- amstel-gold-race-sportive-2026 (NL)
- we-ride-flanders-2026 (BE)
- ridelondon-essex-2026 (GB)
- dragon-ride-wales-2026 (GB)
- etape-caledonia-2026 (GB)
- etape-du-tour-2026 (FR)
- colnago-granfondo-mont-ventoux-2026 (FR)
- granfondo-bgy-bergamo-2026 (IT)
- granfondo-fausto-coppi-cuneo-2026 (IT)
- granfondo-il-lombardia-2026 (IT)
- granfondo-strade-bianche-2026 (IT)
- granfondo-stelvio-santini-2026 (IT)
- granfondo-gavia-mortirolo-2026 (IT)
- leroica-toscana-2026 (IT)
- maratona-dles-dolomites-2026 (IT)
- sportful-dolomiti-race-2026 (IT)
- marcialonga-cycling-craft-2026 (IT)
- maraton-franja-ljubljana-2026 (SI)
- uci-istria-granfondo-2026 (HR)
- mallorca-312-2026 (ES)
- quebrantahuesos-2026 (ES)
- uci-granfondo-la-nucia-2026 (ES)
- uci-granfondo-suisse-2026 (CH)
- tour-des-stations-verbier-2026 (CH)
- haute-route-alps-2026 (FR/IT/CH)
- marmotte-granfondo-alpes-2026 (FR)
- norseman-xtreme-triathlon-2026 (NO)
- sudety-tour-2026 (PL)
- tour-de-matra-2026 (HU)
- granfondo-bulgarie-velingrad-2026 (BG)

#### Fixes
- leithaberg-radmarathon-2026: confirmed: false → true
- velo-grand-prix-meiningen-2026: Datum korrigiert auf 2026-05-30
- fraenkische-schweiz-radmarathon-2026: Beschreibung aktualisiert (Event eingestellt ~2010)
- volkstriathlon-wolfsburg-2026: Beschreibung aktualisiert (Event pausiert)

### Finaler Build
- 395 Seiten generiert (394 Events + 1 Index)
- Build erfolgreich, keine Fehler

### SEO Status
- JSON-LD SportsEvent mit @id auf allen Event-Seiten ✅
- BreadcrumbList auf Event-Seiten ✅
- Organization+WebSite+ItemList JSON-LD auf Homepage ✅
- Sitemap: differenzierte Prioritäten (index 0.9/daily, events 0.7/monthly) ✅
- robots.txt → Sitemap ✅
- og:, twitter: Meta-Tags ✅

### Deployed
- Commit + Push auf master → GitHub Actions Deployment getriggert ✅
