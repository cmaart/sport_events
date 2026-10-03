import type { Sport } from './types';
import { isRtf } from './types';
import { t } from './i18n';

/**
 * Longer, fact-derived body copy for the sport × country landing pages and the
 * per-country blurbs on the homepage. Everything is computed from the matched
 * events (dates, regions, distances, categories, confirmation state), so each
 * page gets its own text and the copy stays correct as events change.
 *
 * Style rules for the sentence templates: plain German, mixed sentence length,
 * no dashes, no marketing adjectives, no forced lists of three. Numbers come
 * straight from the data. Sentences that would be empty or misleading for a
 * given data set are left out rather than padded.
 */

export interface GuideEvent {
  name: string;
  categories: string[];
  dates: { start: string; end?: string; confirmed: boolean };
  location: { region?: string | null; name: string };
  distanceKm?: number | null;
  elevationGainM?: number | null;
  registrationUrl?: string;
}

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface LandingGuide {
  sections: GuideSection[];
  faq: GuideFaq[];
}

const noun = (sport: Sport, n: number) =>
  sport === 'cycling' ? (n === 1 ? 'Radrennen' : 'Radrennen') : n === 1 ? 'Triathlon' : 'Triathlons';

function joinDe(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' und ' + items[items.length - 1];
}

function distinct<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()}. ${t(`month.${d.getMonth() + 1}`)} ${d.getFullYear()}`;
}

function monthName(iso: string): string {
  return t(`month.${new Date(iso).getMonth() + 1}`);
}

function median(nums: number[]): number {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
}

function countBy<T>(arr: T[], key: (x: T) => string | null | undefined): [string, number][] {
  const m = new Map<string, number>();
  for (const x of arr) {
    const k = key(x);
    if (!k) continue;
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
}

function termine(n: number): string {
  return n === 1 ? 'ein Termin' : `${n} Termine`;
}
function terminen(n: number): string {
  return n === 1 ? 'einem Termin' : `${n} Terminen`;
}
function num(n: number): string {
  return n.toLocaleString('de-DE');
}

// ---------------------------------------------------------------------------

function seasonSection(sport: Sport, countryName: string, sorted: GuideEvent[], year: number): GuideSection | null {
  if (sorted.length < 3) return null;
  const confirmed = sorted.filter((e) => e.dates.confirmed);
  const base = confirmed.length >= 3 ? confirmed : sorted;
  const first = base[0];
  const last = base[base.length - 1];
  const p: string[] = [];

  const sameMonth = monthName(first.dates.start) === monthName(last.dates.start);
  if (sameMonth) {
    p.push(
      `Alle ${termine(sorted.length)} liegen im ${monthName(first.dates.start)} ${year}. Den Anfang macht ${first.name} in ${first.location.name} am ${fmtDate(first.dates.start)}, den Schluss ${last.name} am ${fmtDate(last.dates.start)}.`,
    );
  } else {
    p.push(
      `Die Saison in ${countryName} beginnt am ${fmtDate(first.dates.start)} mit ${first.name} in ${first.location.name}. Das letzte Rennen im Kalender ist ${last.name} am ${fmtDate(last.dates.start)}.`,
    );
  }

  const byMonth = countBy(sorted, (e) => monthName(e.dates.start));
  if (byMonth.length >= 3) {
    const [m1, n1] = byMonth[0];
    const [m2, n2] = byMonth[1];
    const quiet = byMonth[byMonth.length - 1];
    p.push(
      n1 === n2
        ? `Am vollsten ist der Kalender im ${m1} und im ${m2} mit je ${terminen(n1)}. Im ${quiet[0]} ${quiet[1] === 1 ? 'steht nur ein einziger Termin' : `sind es nur ${quiet[1]}`}.`
        : `Am vollsten ist der Kalender im ${m1} mit ${terminen(n1)}, danach kommt der ${m2} mit ${n2}. Im ${quiet[0]} ${quiet[1] === 1 ? 'steht nur ein einziger Termin' : `sind es nur ${quiet[1]}`}.`,
    );
  }

  const weekend = sorted.filter((e) => {
    const d = new Date(e.dates.start).getDay();
    return d === 0 || d === 6;
  }).length;
  if (sorted.length >= 5 && weekend < sorted.length) {
    p.push(
      sorted.length - weekend === 1
        ? `${weekend} der ${sorted.length} Veranstaltungen starten an einem Samstag oder Sonntag, eine liegt unter der Woche.`
        : `${weekend} der ${sorted.length} Veranstaltungen starten an einem Samstag oder Sonntag. Die übrigen ${sorted.length - weekend} liegen unter der Woche.`,
    );
  } else if (sorted.length >= 5) {
    p.push(`Alle ${sorted.length} Veranstaltungen starten am Wochenende.`);
  }

  return { id: 'saison', heading: `Saisonverlauf ${year}`, paragraphs: p };
}

function placesSection(sport: Sport, countryName: string, sorted: GuideEvent[]): GuideSection | null {
  const withRegion = sorted.filter((e) => e.location.region);
  const p: string[] = [];
  const heading = sport === 'cycling' ? 'Wo gefahren wird' : 'Wo gestartet wird';

  if (withRegion.length >= Math.max(3, sorted.length * 0.5)) {
    const byRegion = countBy(sorted, (e) => e.location.region ?? null);
    const example = (region: string) => sorted.find((e) => e.location.region === region)?.name ?? '';
    const [r1, n1] = byRegion[0];
    const rest = byRegion.slice(1, 3);
    if (byRegion.length === 1) {
      p.push(`Alle Termine liegen in ${r1}, zum Beispiel ${example(r1)}.`);
    } else {
      const tied = byRegion.filter(([, n]) => n === n1).map(([r]) => r);
      const after = byRegion.filter(([, n]) => n < n1).slice(0, 2);
      let lead =
        tied.length > 1
          ? `${joinDe(tied)} haben je ${termine(n1)}, zum Beispiel ${example(tied[0])} und ${example(tied[1])}.`
          : `Die meisten Termine hat ${r1} mit ${n1}, darunter ${example(r1)}.`;
      if (after.length === 2) {
        lead += ` In ${after[0][0]} sind es ${after[0][1]} (${example(after[0][0])}), in ${after[1][0]} ${after[1][1]}.`;
      } else if (after.length === 1) {
        lead += ` In ${after[0][0]} sind es ${after[0][1]}, etwa ${example(after[0][0])}.`;
      }
      p.push(lead);
      void rest;
      const covered = byRegion.length;
      const single = byRegion.filter(([, n]) => n === 1).length;
      if (covered > 3) {
        p.push(
          `Insgesamt sind ${covered} Regionen vertreten.` +
            (single > 0 ? ` In ${single === 1 ? 'einer' : single} davon gibt es nur einen einzigen Termin.` : ''),
        );
      }
    }
    const noRegion = sorted.length - withRegion.length;
    if (noRegion > 0) {
      p.push(`Bei ${noRegion === 1 ? 'einem Termin' : `${noRegion} Terminen`} fehlt die Regionszuordnung, der Startort steht trotzdem auf der Eventseite.`);
    }
  } else {
    const cities = countBy(sorted, (e) => e.location.name);
    const multi = cities.filter(([, n]) => n > 1);
    const names = distinct(sorted.map((e) => e.location.name));
    if (multi.length > 0) {
      p.push(
        `Mehrfach vertreten ${multi.length === 1 ? 'ist' : 'sind'} ${joinDe(multi.slice(0, 3).map(([c, n]) => `${c} (${n})`))}. Weitere Startorte sind ${joinDe(names.filter((c) => !multi.some(([m]) => m === c)).slice(0, 5))}.`,
      );
    } else {
      p.push(`Jeder Termin hat seinen eigenen Startort. Dabei sind ${joinDe(names.slice(0, 6))}${names.length > 6 ? ` und ${names.length - 6} weitere Orte` : ''}.`);
    }
  }

  if (p.length === 0) return null;
  return { id: 'orte', heading, paragraphs: p };
}

function distanceSection(sport: Sport, sorted: GuideEvent[]): GuideSection | null {
  const p: string[] = [];
  if (sport === 'cycling') {
    const withDist = sorted.filter((e) => typeof e.distanceKm === 'number' && e.distanceKm! > 0);
    if (withDist.length >= 3) {
      const dists = withDist.map((e) => e.distanceKm as number);
      const short = withDist.filter((e) => e.distanceKm! < 80).length;
      const mid = withDist.filter((e) => e.distanceKm! >= 80 && e.distanceKm! <= 150).length;
      const long = withDist.filter((e) => e.distanceKm! > 150).length;
      const longest = withDist.reduce((a, b) => (a.distanceKm! >= b.distanceKm! ? a : b));
      const med = median(dists);
      p.push(
        `Bei ${withDist.length} Rennen ist die Hauptdistanz bekannt. ${short} davon bleiben unter 80 Kilometern, ${mid} liegen zwischen 80 und 150, ${long} gehen darüber hinaus. Die Hälfte der Rennen ist kürzer als ${Math.round(med)} Kilometer.`,
      );
      if (longest.distanceKm! > med * 1.5) {
        p.push(`Die längste Strecke hat ${longest.name} mit ${longest.distanceKm} Kilometern.`);
      }
    }
    const withElev = sorted.filter((e) => typeof e.elevationGainM === 'number' && e.elevationGainM! > 0);
    if (withElev.length >= 3) {
      const top = [...withElev].sort((a, b) => b.elevationGainM! - a.elevationGainM!).slice(0, 2);
      const flat = withElev.filter((e) => e.elevationGainM! < 500).length;
      p.push(
        `Die meisten Höhenmeter verlangt ${top[0].name} mit ${num(top[0].elevationGainM!)} Metern` +
          (top[1] ? `, danach folgt ${top[1].name} mit ${num(top[1].elevationGainM!)}.` : '.') +
          (flat > 0 ? ` ${flat === 1 ? 'Ein Rennen bleibt' : `${flat} Rennen bleiben`} unter 500 Höhenmetern.` : ''),
      );
    }
    const rtf = sorted.filter((e) => isRtf(e.categories)).length;
    const gravel = sorted.filter((e) => e.categories.includes('Gravel')).length;
    const stage = sorted.filter((e) => e.categories.includes('Etappenrennen')).length;
    const notes: string[] = [];
    if (rtf > 0) notes.push(`${rtf === 1 ? 'Eine Veranstaltung ist eine Radtourenfahrt' : `${rtf} Veranstaltungen sind Radtourenfahrten`} ohne Zeitnahme und Wertung`);
    if (gravel > 0) notes.push(`${gravel === 1 ? 'ein Termin führt' : `${gravel} Termine führen`} über Schotter`);
    if (stage > 0) notes.push(`${stage === 1 ? 'ein Rennen geht' : `${stage} Rennen gehen`} über mehrere Etappen`);
    if (notes.length > 0) p.push(notes.join(', ') + '.');
  } else {
    const cat = (c: string) => sorted.filter((e) => e.categories.includes(c));
    const sprint = cat('Sprintdistanz').length;
    const olympic = cat('Olympische Distanz').length;
    const middle = cat('Mitteldistanz');
    const long = cat('Langdistanz');
    const parts: string[] = [];
    if (sprint > 0) parts.push(`${sprint} mit Sprintdistanz`);
    if (olympic > 0) parts.push(`${olympic} über die Olympische Distanz`);
    if (middle.length > 0) parts.push(`${middle.length} auf der Mitteldistanz`);
    if (long.length > 0) parts.push(`${long.length} auf der Langdistanz`);
    if (parts.length > 0) p.push(`Von den ${sorted.length} Triathlons gibt es ${joinDe(parts)}. Viele Veranstalter bieten mehrere Strecken am selben Tag an, deshalb ergibt die Summe mehr als die Zahl der Termine.`);
    if (long.length > 0) {
      p.push(`Langdistanz heißt 3,8 Kilometer Schwimmen, 180 Kilometer Rad und ein Marathon. Im Kalender ${long.length === 1 ? 'steht dafür' : 'stehen dafür'} ${joinDe(long.slice(0, 3).map((e) => e.name))}.`);
    } else if (middle.length > 0) {
      p.push(`Eine Langdistanz gibt es in dieser Saison nicht. Die längste Strecke ist die Mitteldistanz, zum Beispiel bei ${joinDe(middle.slice(0, 2).map((e) => e.name))}.`);
    }
    const du = cat('Duathlon').length;
    const cross = cat('Cross-Triathlon').length;
    const aqua = cat('Aquathlon').length;
    const extra: string[] = [];
    if (du > 0) extra.push(`${du === 1 ? 'ein Duathlon' : `${du} Duathlons`} ohne Schwimmen`);
    if (cross > 0) extra.push(`${cross === 1 ? 'ein Cross-Triathlon' : `${cross} Cross-Triathlons`} mit Mountainbike und Trail`);
    if (aqua > 0) extra.push(`${aqua === 1 ? 'ein Aquathlon' : `${aqua} Aquathlons`}`);
    if (extra.length > 0) p.push(`Dazu ${extra.length === 1 && extra[0].startsWith('ein ') ? 'kommt' : 'kommen'} ${joinDe(extra)}.`);
  }
  if (p.length === 0) return null;
  return { id: 'distanzen', heading: sport === 'cycling' ? 'Distanzen und Höhenmeter' : 'Distanzen', paragraphs: p };
}

function registrationSection(sport: Sport, sorted: GuideEvent[], year: number): GuideSection {
  const confirmed = sorted.filter((e) => e.dates.confirmed).length;
  const open = sorted.length - confirmed;
  const withReg = sorted.filter((e) => e.registrationUrl).length;
  const p: string[] = [];
  if (open === 0) {
    p.push(`Alle ${sorted.length} Termine sind vom Veranstalter bestätigt.`);
  } else {
    p.push(
      `${confirmed} der ${sorted.length} Termine sind vom Veranstalter bestätigt. Bei ${open === 1 ? 'einem Event' : `${open} Events`} steht das Datum für ${year} noch aus. Diese führen wir mit dem Wochenende der letzten Ausgabe und kennzeichnen sie als "Datum noch offen", bis der Veranstalter den Termin veröffentlicht.`,
    );
  }
  if (withReg > 0) {
    p.push(
      `Für ${withReg === sorted.length ? 'jedes Event' : `${withReg} Events`} ist die Anmeldeseite direkt verlinkt. Die Anmeldung läuft immer beim Veranstalter, nicht hier. Startgeld, Limits und Nachmeldefristen stehen dort.`,
    );
  }
  p.push(
    `Die Daten stammen von den Veranstalterseiten und den Verbandskalendern. Wir prüfen sie wöchentlich und entfernen Events, die abgesagt wurden. Fehlt ein ${sport === 'cycling' ? 'Rennen' : 'Triathlon'}, kannst du es über das Formular vorschlagen.`,
  );
  return { id: 'anmeldung', heading: 'Anmeldung und Datenstand', paragraphs: p };
}

function buildFaq(sport: Sport, countryName: string, sorted: GuideEvent[], year: number): GuideFaq[] {
  const faq: GuideFaq[] = [];
  const n = noun(sport, sorted.length);
  const confirmed = sorted.filter((e) => e.dates.confirmed);
  const base = confirmed.length >= 2 ? confirmed : sorted;
  const first = base[0];
  const last = base[base.length - 1];

  faq.push({
    question: `Wann beginnt die ${sport === 'cycling' ? 'Radrennsaison' : 'Triathlonsaison'} ${year} in ${countryName}?`,
    answer: `Der erste Termin ist ${first.name} am ${fmtDate(first.dates.start)} in ${first.location.name}. Die Saison läuft bis ${fmtDate(last.dates.start)} (${last.name}).`,
  });

  faq.push({
    question: `Wie viele ${n} gibt es ${year} in ${countryName}?`,
    answer: `Im Kalender stehen ${sorted.length} ${n} für die Saison ${year}, davon ${confirmed.length} mit bestätigtem Datum. Die Liste wird wöchentlich ergänzt, sobald Veranstalter neue Termine veröffentlichen.`,
  });

  if (sport === 'cycling') {
    const withDist = sorted.filter((e) => typeof e.distanceKm === 'number' && e.distanceKm! > 0);
    if (withDist.length >= 3) {
      const longest = withDist.reduce((a, b) => (a.distanceKm! >= b.distanceKm! ? a : b));
      faq.push({
        question: `Welches ist das längste Radrennen in ${countryName} ${year}?`,
        answer: `${longest.name} in ${longest.location.name} mit ${longest.distanceKm} Kilometern am ${fmtDate(longest.dates.start)}.${longest.elevationGainM ? ` Dabei sind ${num(longest.elevationGainM)} Höhenmeter zu fahren.` : ''}`,
      });
    }
    const rtf = sorted.filter((e) => isRtf(e.categories));
    if (rtf.length > 0) {
      faq.push({
        question: `Gibt es auch Radtouren ohne Zeitnahme?`,
        answer: `Ja, ${rtf.length === 1 ? 'eine Veranstaltung ist' : `${rtf.length} Veranstaltungen sind`} als Radtourenfahrt ohne Wertung angelegt, zum Beispiel ${joinDe(rtf.slice(0, 2).map((e) => e.name))}. Sie sind im Kalender mit "Radtourenfahrt" statt "Radrennen" gekennzeichnet.`,
      });
    }
  } else {
    const long = sorted.filter((e) => e.categories.includes('Langdistanz'));
    const middle = sorted.filter((e) => e.categories.includes('Mitteldistanz'));
    faq.push({
      question: `Gibt es ${year} eine Langdistanz in ${countryName}?`,
      answer:
        long.length > 0
          ? `Ja. ${joinDe(long.slice(0, 3).map((e) => `${e.name} am ${fmtDate(e.dates.start)}`))}.`
          : middle.length > 0
            ? `Nein, in dieser Saison nicht. Die längste Strecke ist die Mitteldistanz, etwa bei ${joinDe(middle.slice(0, 2).map((e) => e.name))}.`
            : `Nein. Die Termine in ${countryName} gehen bis zur Olympischen Distanz.`,
    });
  }

  faq.push({
    question: `Wo melde ich mich an?`,
    answer: `Direkt beim Veranstalter. Jede Eventseite hier verlinkt auf dessen Anmeldung. ENDURE Events nimmt keine Anmeldungen entgegen und verlangt keine Gebühren.`,
  });

  return faq;
}

export function buildLandingGuide(sport: Sport, countryName: string, events: GuideEvent[], year: number): LandingGuide {
  const sorted = [...events].sort((a, b) => +new Date(a.dates.start) - +new Date(b.dates.start));
  if (sorted.length === 0) return { sections: [], faq: [] };
  const sections = [
    seasonSection(sport, countryName, sorted, year),
    placesSection(sport, countryName, sorted),
    distanceSection(sport, sorted),
    registrationSection(sport, sorted, year),
  ].filter((s): s is GuideSection => !!s);
  return { sections, faq: buildFaq(sport, countryName, sorted, year) };
}

/**
 * Two or three sentences per sport × country for the homepage overview.
 * Used next to the link to the respective landing page.
 */
export function buildCountryBlurb(sport: Sport, countryName: string, events: GuideEvent[], year: number): string {
  const sorted = [...events].sort((a, b) => +new Date(a.dates.start) - +new Date(b.dates.start));
  if (sorted.length === 0) return '';
  const n = noun(sport, sorted.length);
  const first = monthName(sorted[0].dates.start);
  const last = monthName(sorted[sorted.length - 1].dates.start);
  const span = first === last ? `im ${first}` : `von ${first} bis ${last}`;
  const examples = distinct(sorted.map((e) => e.name)).filter((_, i, arr) => arr.length <= 2 || i === 0 || i === Math.floor(arr.length / 2) || i === arr.length - 1).slice(0, 3);
  const regions = distinct(sorted.map((e) => e.location.region).filter((r): r is string => !!r));
  const where = regions.length >= 2 ? ` in ${regions.length} Regionen` : '';
  return `${sorted.length} ${n} ${span} ${year}${where}. Darunter ${joinDe(examples)}.`;
}
