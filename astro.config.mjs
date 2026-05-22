// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.events.endure-cycling.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    preact(),
    sitemap({
      lastmod: new Date(),
      // @ts-expect-error changefreq string literals cause a union-type mismatch in @astrojs/sitemap typings
      serialize(item) {
        const url = item.url;
        if (url.endsWith('/') || url === 'https://www.events.endure-cycling.com') {
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
