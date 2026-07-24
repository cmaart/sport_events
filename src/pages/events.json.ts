import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import type { EventData } from '../lib/filters';

/**
 * Static JSON endpoint with the full event collection, consumed by the
 * EventsExplorer island via fetch. Keeping this out of the page HTML cuts
 * ~1.4 MB of serialized island props from the homepage — Googlebot gets a
 * lean, crawlable document while the browser lazily fetches the data it
 * needs for filtering, search, and the map.
 */
export const GET: APIRoute = async () => {
  const entries = await getCollection('events');
  const events: EventData[] = entries.map((entry) => ({
    slug: entry.id.replace(/\.json$/, ''),
    id: entry.data.id,
    name: entry.data.name,
    sport: entry.data.sport,
    categories: entry.data.categories,
    country: entry.data.country,
    dates: {
      start: entry.data.dates.start.toISOString(),
      end: entry.data.dates.end?.toISOString(),
      confirmed: entry.data.dates.confirmed,
    },
    location: entry.data.location,
    websiteUrl: entry.data.websiteUrl,
    registrationUrl: entry.data.registrationUrl,
    imageUrl: entry.data.imageUrl,
    description: entry.data.description,
    distanceKm: entry.data.distanceKm,
    elevationGainM: entry.data.elevationGainM,
  }));
  return new Response(JSON.stringify(events), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
