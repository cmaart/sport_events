import MiniSearch from 'minisearch';
import type { EventData } from './filters';

export function buildIndex(events: EventData[]): MiniSearch<EventData> {
  const ms = new MiniSearch<EventData>({
    idField: 'slug',
    fields: ['name', 'description', 'locationName', 'region', 'categoriesText'],
    storeFields: ['slug'],
    searchOptions: {
      boost: { name: 3, locationName: 2 },
      prefix: true,
      fuzzy: 0.2,
      combineWith: 'AND',
    },
    extractField: (doc, field) => {
      switch (field) {
        case 'locationName':
          return doc.location.name;
        case 'region':
          return doc.location.region ?? '';
        case 'categoriesText':
          return doc.categories.join(' ');
        default:
          // @ts-expect-error dynamic
          return doc[field];
      }
    },
  });
  ms.addAll(events);
  return ms;
}

export function searchMatches(index: MiniSearch<EventData>, query: string): Set<string> {
  if (!query.trim()) return new Set();
  return new Set(index.search(query).map((r) => r.id as string));
}
