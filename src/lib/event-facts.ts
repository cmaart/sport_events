// One quotable paragraph per event, generated from the data. Answer engines
// (Perplexity, ChatGPT search, Google AI Overviews) lift single sentences that
// state the fact plainly, so this lives directly under the H1 and carries the
// numbers a reader would ask for: date, place, courses, fee, deadline, limit.
//
// Style rules (same as landing-intro.ts): plain German, no dashes, no
// adjectives the data can't back, every number comes from the JSON. Omit a
// clause rather than guess. Browser-safe (no astro:content).
import { formatDate, formatDateRange, t } from './i18n';
import { COUNTRY_LABELS, isRtf, type Country, type Sport } from './types';

export interface FactsInput {
  name: string;
  sport: Sport;
  categories: readonly string[];
  country: Country;
  dates: { start: Date; end?: Date; confirmed: boolean };
  location: { name: string; region?: string };
  distanceKm?: number;
  elevationGainM?: number;
  distances?: { name: string; km: number; elevationGainM?: number; split?: string }[];
  entryFee?: string;
  registrationDeadline?: Date;
  startTime?: string;
  participantLimit?: number;
  websiteUrl?: string;
}

const num = (n: number): string => n.toLocaleString('de-DE');

/** "in Österreich", but "in der Schweiz", "in den Niederlanden". */
const COUNTRY_ARTICLE: Partial<Record<Country, string>> = { CH: 'der', TR: 'der', NL: 'den', SK: 'der' };
export const inCountry = (c: Country): string => {
  const art = COUNTRY_ARTICLE[c];
  const name = c === 'NL' ? 'Niederlanden' : COUNTRY_LABELS[c].name;
  return art ? `in ${art} ${name}` : `in ${name}`;
};

const kindLabel = (e: FactsInput): string => {
  if (e.sport === 'triathlon') {
    const c = e.categories[0];
    if (c === 'Duathlon' || c === 'Aquathlon') return c;
    if (c === 'Cross-Triathlon') return 'Cross-Triathlon';
    return 'Triathlon';
  }
  if (isRtf(e.categories)) return 'Radtourenfahrt';
  const c = e.categories[0];
  if (c === 'Zeitfahren') return 'Zeitfahren';
  if (c === 'Berg') return 'Bergrennen';
  if (c === 'Kriterium') return 'Kriterium';
  if (c === 'Gravel') return 'Gravel-Rennen';
  if (c === 'Etappenrennen') return 'Etappenrennen';
  if (c === 'Radmarathon') return 'Radmarathon';
  if (c === 'Gran Fondo') return 'Gran Fondo';
  return 'Radrennen';
};

/** Course list: "drei Strecken: 227 km mit 5.500 Höhenmetern, 120 km, 60 km". */
function coursesClause(e: FactsInput): string | undefined {
  if (e.distances && e.distances.length > 0) {
    const parts = e.distances.map((d) => {
      const base = d.split ? `${d.name} (${d.split})` : `${d.name} mit ${num(d.km)} km`;
      return d.elevationGainM ? `${base} und ${num(d.elevationGainM)} Höhenmetern` : base;
    });
    if (parts.length === 1) return `Die Strecke: ${parts[0]}.`;
    const count = ['zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht'][parts.length - 2] ?? String(parts.length);
    return `Es gibt ${count} Strecken: ${parts.slice(0, -1).join(', ')} und ${parts[parts.length - 1]}.`;
  }
  if (e.distanceKm && e.elevationGainM) return `Die Hauptstrecke misst ${num(e.distanceKm)} km mit ${num(e.elevationGainM)} Höhenmetern.`;
  if (e.distanceKm) return `Die Hauptstrecke misst ${num(e.distanceKm)} km.`;
  return undefined;
}

export interface Facts {
  /** The paragraph, 2 to 5 sentences. */
  text: string;
  /** Provenance line: "Stand 17. Oktober 2026, Quelle: oetztaler-radmarathon.com". */
  source: string;
}

export function buildEventFacts(e: FactsInput, lastModified: Date, year: number): Facts {
  const kind = kindLabel(e);
  const country = COUNTRY_LABELS[e.country].name;
  const place = e.location.region && e.location.region !== e.location.name
    ? `${e.location.name} (${e.location.region}, ${country})`
    : `${e.location.name} (${country})`;
  const sentences: string[] = [];

  if (e.dates.confirmed) {
    const when = formatDateRange(e.dates.start, e.dates.end);
    const multi = e.dates.end && e.dates.end.getTime() !== e.dates.start.getTime();
    sentences.push(`${e.name} ist ein ${kind} in ${place} und findet ${multi ? 'vom' : 'am'} ${when} statt.`);
  } else {
    sentences.push(`${e.name} ist ein ${kind} in ${place}. Der Termin ${year} ist noch nicht offiziell bestätigt.`);
  }

  const courses = coursesClause(e);
  if (courses) sentences.push(courses);

  const reg: string[] = [];
  if (e.entryFee) {
    const fee = e.entryFee.trim();
    reg.push(/^ab\s/i.test(fee) ? `Das Startgeld beginnt bei ${fee.replace(/^ab\s+/i, '')}` : `Das Startgeld beträgt ${fee}`);
  }
  if (e.registrationDeadline) reg.push(`${reg.length ? 'Anmeldeschluss ist' : 'Anmeldeschluss ist'} der ${formatDate(e.registrationDeadline)}`);
  if (e.participantLimit) reg.push(`das Teilnehmerfeld ist auf ${num(e.participantLimit)} Startplätze begrenzt`);
  if (reg.length) {
    const s = reg.join(', ');
    sentences.push(s.charAt(0).toUpperCase() + s.slice(1) + '.');
  }
  if (e.startTime && e.dates.confirmed) sentences.push(`Der erste Start ist um ${e.startTime} Uhr.`);

  const host = e.websiteUrl
    ? (() => {
        try {
          return new URL(e.websiteUrl!).hostname.replace(/^www\./, '');
        } catch {
          return undefined;
        }
      })()
    : undefined;
  const source = host
    ? t('event.facts.source', { date: formatDate(lastModified), host })
    : t('event.facts.sourceNoHost', { date: formatDate(lastModified) });

  return { text: sentences.join(' '), source };
}
