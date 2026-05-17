import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES, REGIONS, SPORTS } from './lib/types';

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/events' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    sport: z.enum(SPORTS),
    categories: z.array(z.enum(CATEGORIES)).min(1),
    dates: z.object({
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      confirmed: z.boolean().default(true),
    }),
    location: z.object({
      name: z.string(),
      lat: z.number(),
      lng: z.number(),
      region: z.enum(REGIONS),
    }),
    websiteUrl: z.string().url().optional(),
    registrationUrl: z.string().url().optional(),
    description: z.string(),
    distanceKm: z.number().optional(),
    elevationGainM: z.number().int().optional(),
  }),
});

export const collections = { events };
