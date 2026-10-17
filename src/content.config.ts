import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES, COUNTRIES, REGIONS, SPORTS } from './lib/types';

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/events' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    sport: z.enum(SPORTS),
    categories: z.array(z.enum(CATEGORIES)).min(1),
    country: z.enum(COUNTRIES),
    dates: z.object({
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      confirmed: z.boolean().default(true),
    }),
    location: z.object({
      name: z.string(),
      lat: z.number(),
      lng: z.number(),
      region: z.enum(REGIONS).optional(),
    }),
    websiteUrl: z.string().url().optional(),
    registrationUrl: z.string().url().optional(),
    imageUrl: z.string().url().optional(),
    description: z.string(),
    distanceKm: z.number().optional(),
    elevationGainM: z.number().int().optional(),
    // Depth fields (optional). They turn a stub into a page worth indexing:
    // per-course distances, fee, deadline, start time, field limit. Only fill
    // them from the official organiser site; leave out rather than guess.
    distances: z
      .array(
        z.object({
          name: z.string(),
          km: z.number(),
          elevationGainM: z.number().int().optional(),
          /** Triathlon split, e.g. "1,9 km / 90 km / 21,1 km". */
          split: z.string().optional(),
        }),
      )
      .optional(),
    /** Free text as the organiser states it, e.g. "ab 89 €", "45–65 €". */
    entryFee: z.string().optional(),
    registrationDeadline: z.coerce.date().optional(),
    /** "HH:MM" of the first start. */
    startTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
    participantLimit: z.number().int().positive().optional(),
  }),
});

export const collections = { events };
