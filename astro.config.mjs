// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { readdirSync, readFileSync } from 'node:fs';

// The writing index is noindexed while every post is a draft, so keep it out of the sitemap too.
const writingDir = new URL('./src/content/writing/', import.meta.url);
const hasPublishedPosts = readdirSync(writingDir)
  .filter((f) => /\.mdx?$/.test(f))
  .some((f) => !/^draft:\s*true\s*$/m.test(readFileSync(new URL(f, writingDir), 'utf8')));

const EXCLUDE = ['/404', '/contact/thanks', ...(hasPublishedPosts ? [] : ['/writing'])];

export default defineConfig({
  site: 'https://ajibola.dev',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !EXCLUDE.some((p) => new URL(page).pathname.replace(/\/$/, '') === p),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
