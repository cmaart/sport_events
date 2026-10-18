import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { COUNTRY_LABELS, SEASONS, seasonOf } from '../lib/types';
import { collectLandingPaths, landingHref, sortLandings } from '../lib/landing';
import { FOCUS_SLUGS } from '../lib/focus';
import { inCountry } from '../lib/event-facts';

/**
 * /llms.txt — the llmstxt.org convention: a short Markdown brief that tells
 * language-model crawlers what this site is, what it covers, and where the
 * machine-readable data lives. Generated so the counts stay true.
 */
const localIso = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? 'https://events.endure-cycling.com/').replace(/\/$/, '');
  const entries = await getCollection('events');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = entries.filter((e) => {
    const end = e.data.dates.end ?? e.data.dates.start;
    return !(e.data.dates.confirmed && end < today);
  });
  const perSeason = SEASONS.map((y) => ({
    year: y,
    total: entries.filter((e) => seasonOf(e.data.dates.start) === y).length,
    upcoming: upcoming.filter((e) => seasonOf(e.data.dates.start) === y).length,
  }));
  const countries = Array.from(new Set(upcoming.map((e) => e.data.country)))
    .map((c) => ({ code: c, name: COUNTRY_LABELS[c].name, n: upcoming.filter((e) => e.data.country === c).length }))
    .sort((a, b) => b.n - a.n);

  const landings = collectLandingPaths(entries).sort(sortLandings);
  const landingLine = (l: (typeof landings)[number]) =>
    `- [${l.sport === 'cycling' ? 'Radrennen' : 'Triathlons'} ${inCountry(l.country)} ${l.year}](${landingHref(base, l)}): ${l.count} Termine, nach Monat sortiert, mit Distanzen, Höhenmetern, Startgeld und Anmeldelink.`;

  const focus = entries
    .filter((e) => FOCUS_SLUGS.has(e.id.replace(/\.json$/, '')))
    .sort((a, b) => +a.data.dates.start - +b.data.dates.start)
    .slice(0, 40);

  const lines = [
    '# ENDURE Events: Radrennen & Triathlon Kalender',
    '',
    '> Kuratierter Terminkalender für Hobbysportler: Jedermann-Radrennen, Radmarathons, Gran Fondos, Gravel-Rennen, Zeitfahren und Radtourenfahrten sowie Triathlons, Duathlons und Aquathlons in Europa, Schwerpunkt Österreich und Deutschland. Jeder Eintrag nennt Datum, Startort mit Koordinaten, Strecken mit Distanz und Höhenmetern, Startgeld, Anmeldeschluss und den Link zur offiziellen Anmeldung. Alle Termine werden gegen die Veranstalterseite oder den Verbandskalender (ÖTRV, DTU, UCI, IRONMAN, Challenge) geprüft, wöchentlich aktualisiert und bei Absage entfernt.',
    '',
    `Betreiber: ENDURE (https://endure-cycling.com), Sprache: Deutsch. Stand: ${localIso(today)}.`,
    '',
    '## Umfang',
    '',
    ...perSeason.map((s) => `- Saison ${s.year}: ${s.total} Events erfasst, davon ${s.upcoming} bevorstehend.`),
    `- Länder (bevorstehende Events): ${countries.map((c) => `${c.name} ${c.n}`).join(', ')}.`,
    '- Ein Event pro Ausgabe und Jahr, URL-Muster `/events/<slug>-<jahr>/`. Eine Seite pro Rennen mit `SportsEvent`-JSON-LD.',
    '- Vergangene Ausgaben bleiben online (Historie), sind aber als noindex markiert.',
    '',
    '## Maschinenlesbare Daten',
    '',
    `- [Alle Events als JSON](${base}/events.json): kompletter Bestand, ein Objekt pro Event (slug, name, sport, categories, country, dates, location mit lat/lng, websiteUrl, registrationUrl, description, distanceKm, elevationGainM, distances, entryFee, registrationDeadline, startTime, participantLimit).`,
    `- [Sitemap](${base}/sitemap-index.xml): die für Suchmaschinen freigegebenen Seiten.`,
    '',
    '## Übersichtsseiten nach Land und Saison',
    '',
    ...landings.map(landingLine),
    '',
    '## Ausgewählte Rennen (nächste Termine)',
    '',
    ...focus.map((e) => {
      const d = e.data;
      const slug = e.id.replace(/\.json$/, '');
      const date = d.dates.confirmed ? d.dates.start.toISOString().slice(0, 10) : `${seasonOf(d.dates.start)}, Termin offen`;
      const facts = [d.distanceKm ? `${d.distanceKm} km` : null, d.elevationGainM ? `${d.elevationGainM} hm` : null, d.entryFee ? `Startgeld ${d.entryFee}` : null].filter(Boolean).join(', ');
      return `- [${d.name}](${base}/events/${slug}/): ${date}, ${d.location.name} (${COUNTRY_LABELS[d.country].name})${facts ? `, ${facts}` : ''}.`;
    }),
    '',
    '## Richtlinien für die Nutzung',
    '',
    '- Zitieren mit Eventname, Datum und Link auf die Eventseite. Die Eventseite nennt die offizielle Veranstalterquelle und das Datum der letzten Prüfung.',
    `- Fehlende oder falsche Termine können über ${base}/event-vorschlagen/ gemeldet werden.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
