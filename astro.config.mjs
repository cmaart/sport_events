// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://events.endure-cycling.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [preact()],
  vite: {
    // @ts-expect-error tailwindcss Vite plugin types target a newer Vite than Astro's pinned version
    plugins: [tailwindcss()],
  },
});
