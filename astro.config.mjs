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

// Index focus set (see scripts/select-index-focus.mjs): only these event pages
// are indexable, and a landing page is indexable only when it holds at least
// MIN_FOCUS_PER_LANDING of them. Mirrors src/lib/focus.ts for the sitemap.
const FOCUS = JSON.parse(fs.readFileSync(path.resolve('src/data/index-focus.json'), 'utf8'));
const FOCUS_SLUGS = new Set(FOCUS.slugs);
const MIN_FOCUS_PER_LANDING = 3;
/** @type {Record<string, string>} */
const SPORT_SLUGS = { cycling: 'radrennen', triathlon: 'triathlon' };
function landingFocusCounts() {
  const dir = path.resolve('src/content/events');
  /** @type {Record<string, string>} */
  const countrySlugs = JSON.parse(fs.readFileSync(path.resolve('src/data/country-slugs.json'), 'utf8'));
  const counts = new Map();
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.json') || file.startsWith('_')) continue;
    const slug = file.replace(/\.json$/, '');
    if (!FOCUS_SLUGS.has(slug)) continue;
    try {
      const d = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      const year = new Date(d.dates.start).getFullYear();
      const key = `/${SPORT_SLUGS[d.sport]}/${countrySlugs[d.country]}/${year}/`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    } catch {
      // invalid files fail the build elsewhere
    }
  }
  return counts;
}
const LANDING_FOCUS = landingFocusCounts();

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
// The detail page prints "Stand <Datum>" per event. Persist the map so the
// page can read it at build time without running git once per page.
fs.mkdirSync(path.resolve('.astro'), { recursive: true });
fs.writeFileSync(
  path.resolve('.astro/event-lastmod.json'),
  JSON.stringify(Object.fromEntries([...EVENT_LASTMOD].map(([k, v]) => [k, v.toISOString().slice(0, 10)]))),
);
const LATEST_EVENT_CHANGE = [...EVENT_LASTMOD.values()].sort((a, b) => b - a)[0];

export default defineConfig({
  site: 'https://events.endure-cycling.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // ~16 KiB of CSS per page; inlining removes two render-blocking requests
    // (Lighthouse: ~0.5 s on mobile) at the cost of no cross-page CSS caching.
    inlineStylesheets: 'always',
  },
  integrations: [
    preact(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const m = pathname.match(/^\/events\/([^/]+)\/?$/);
        if (m) return FOCUS_SLUGS.has(m[1]) && !PAST_EVENT_SLUGS.has(m[1]);
        const l = pathname.match(/^\/(radrennen|triathlon)\/[^/]+\/\d{4}\/$/);
        if (l) return (LANDING_FOCUS.get(pathname) ?? 0) >= MIN_FOCUS_PER_LANDING;
        // Submit form + thank-you page are noindex (thin utility pages).
        if (/^\/event-vor(ge)?schlagen\/$/.test(pathname)) return false;
        return true;
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
