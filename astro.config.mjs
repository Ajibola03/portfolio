// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const EXCLUDE = ['/404', '/contact/thanks'];

export default defineConfig({
  site: 'https://ajibola.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !EXCLUDE.some((p) => new URL(page).pathname.replace(/\/$/, '') === p),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
