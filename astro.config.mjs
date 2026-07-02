// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Slugs of past confirmed events. These pages emit robots noindex (see
// src/pages/events/[slug].astro), so they must also be excluded from the
// sitemap — listing a noindexed URL is a conflicting signal. Computed at
// build time by reading the event JSON directly (astro:content is not
// available in the config context).
function pastEventSlugs() {
  const dir = path.resolve('src/content/events');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const set = new Set();
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.json') || file.startsWith('_')) continue;
    try {
      const d = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      if (d?.dates?.confirmed !== true) continue;
      const end = new Date(d.dates.end ?? d.dates.start);
      if (end < today) set.add(file.replace(/\.json$/, ''));
    } catch {
      // Ignore unreadable/invalid files; build validation catches those.
    }
  }
  return set;
}
const PAST_EVENT_SLUGS = pastEventSlugs();

export default defineConfig({
  site: 'https://events.endure-cycling.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    preact(),
    sitemap({
      lastmod: new Date(),
      filter: (page) => {
        const m = page.match(/\/events\/([^/]+)\/?$/);
        return !(m && PAST_EVENT_SLUGS.has(m[1]));
      },
      // @ts-expect-error changefreq string literals cause a union-type mismatch in @astrojs/sitemap typings
      serialize(item) {
        const url = item.url;
        if (url.endsWith('/') || url === 'https://events.endure-cycling.com') {
          return { ...item, changefreq: 'daily', priority: 0.9 };
        }
        if (url.includes('/events/')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }
        return { ...item, changefreq: 'weekly', priority: 0.8 };
      },
    }),
  ],
  vite: {
    // @ts-expect-error tailwindcss Vite plugin types target a newer Vite than Astro's pinned version
    plugins: [tailwindcss()],
  },
});
