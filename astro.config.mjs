// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
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

// Last commit date per event slug, derived from git history in one pass. Used
// as sitemap <lastmod> so it only moves when an event actually changed —
// a build-time stamp on every URL is a signal Google learns to ignore.
// Requires full history in CI (actions/checkout fetch-depth: 0); falls back
// to "no lastmod" when git is unavailable or shallow.
function eventLastModMap() {
  const map = new Map();
  try {
    const out = execSync('git log --format=%cI --name-only -- src/content/events', {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
    let current = null;
    for (const raw of out.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;
      if (/^\d{4}-\d{2}-\d{2}T/.test(line)) {
        current = new Date(line);
        continue;
      }
      const m = line.match(/^src\/content\/events\/([^/]+)\.json$/);
      if (m && current && !map.has(m[1])) map.set(m[1], current); // log is newest-first
    }
  } catch {
    // git missing/shallow → leave map empty
  }
  return map;
}
const EVENT_LASTMOD = eventLastModMap();
const LATEST_EVENT_CHANGE = [...EVENT_LASTMOD.values()].sort((a, b) => b - a)[0];

export default defineConfig({
  site: 'https://events.endure-cycling.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    preact(),
    sitemap({
      filter: (page) => {
        const m = page.match(/\/events\/([^/]+)\/?$/);
        return !(m && PAST_EVENT_SLUGS.has(m[1]));
      },
      // @ts-expect-error changefreq string literals cause a union-type mismatch in @astrojs/sitemap typings
      serialize(item) {
        const url = item.url;
        const path = new URL(url).pathname;
        const eventMatch = path.match(/^\/events\/([^/]+)\/?$/);
        if (eventMatch) {
          const lastmod = EVENT_LASTMOD.get(eventMatch[1]);
          return { ...item, changefreq: 'monthly', priority: 0.7, ...(lastmod ? { lastmod: lastmod.toISOString() } : {}) };
        }
        const lastmod = LATEST_EVENT_CHANGE ? { lastmod: LATEST_EVENT_CHANGE.toISOString() } : {};
        if (path === '/') {
          return { ...item, changefreq: 'daily', priority: 0.9, ...lastmod };
        }
        return { ...item, changefreq: 'weekly', priority: 0.8, ...lastmod };
      },
    }),
  ],
  vite: {
    // @ts-expect-error tailwindcss Vite plugin types target a newer Vite than Astro's pinned version
    plugins: [tailwindcss()],
  },
});
