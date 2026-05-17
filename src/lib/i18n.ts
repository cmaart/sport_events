import de from '../i18n/de.json';

type Dict = Record<string, string>;
const dict: Dict = de as Dict;

export function t(key: string, params?: Record<string, string | number>): string {
  let value = dict[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{${k}}`, String(v));
    }
  }
  return value;
}

export function formatDate(d: Date): string {
  const month = t(`month.${d.getMonth() + 1}`);
  return `${d.getDate()}. ${month} ${d.getFullYear()}`;
}

export function formatDateRange(start: Date, end?: Date): string {
  if (!end || start.toDateString() === end.toDateString()) {
    return formatDate(start);
  }
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();
  if (sameMonth) {
    const month = t(`month.${start.getMonth() + 1}`);
    return `${start.getDate()}.–${end.getDate()}. ${month} ${end.getFullYear()}`;
  }
  if (sameYear) {
    return `${start.getDate()}. ${t(`month.${start.getMonth() + 1}`)} – ${end.getDate()}. ${t(`month.${end.getMonth() + 1}`)} ${end.getFullYear()}`;
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function formatShortDate(d: Date): string {
  const month = t(`month.${d.getMonth() + 1}`).slice(0, 3);
  return `${d.getDate()}. ${month}`;
}
