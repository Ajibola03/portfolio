import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.url() });

/**
 * Client identity. While `public` is false, only `descriptor` may be rendered.
 * Always render through `displayClient()` in src/lib/client.ts.
 */
const client = z.object({
  public: z.boolean().default(false),
  descriptor: z.string(),
  name: z.string(),
  url: z.url().optional(),
  liveLinks: z.array(link).default([]),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** Short title used on cards and in breadcrumbs. */
        shortTitle: z.string(),
        description: z.string().min(140).max(160),
        summary: z.string(),
        /**
         * featured: long ViewEngine case study with its own page.
         * supporting: small ViewEngine card, no page.
         * earlier: pre-ViewEngine work. Gets a page only when `kind` is "case".
         */
        era: z.enum(['featured', 'supporting', 'earlier']),
        kind: z.enum(['case', 'card', 'oneliner']).default('case'),
        order: z.number().default(100),
        role: z.string().optional(),
        employer: z.string().optional(),
        platform: z.string().optional(),
        timeline: z.string().optional(),
        year: z.number().optional(),
        stack: z.array(z.string()).default([]),
        /** Large "pull-quote" result line. Use TODO(metric) until a number exists. */
        resultHeadline: z.string().optional(),
        client: client.optional(),
        /** Product name for earlier work (not a ViewEngine client, always public). */
        product: z.string().optional(),
        productUrl: z.url().optional(),
        /** Set to false when the product no longer responds. */
        live: z.boolean().default(true),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
        related: z.array(z.string()).default([]),
      })
      .refine((d) => !d.cover || d.coverAlt, { message: 'coverAlt is required when cover is set' })
      .refine((d) => d.era === 'earlier' || d.client, { message: 'ViewEngine work needs a client object' }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(140).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { work, writing };
