# ajibola.dev

Portfolio and writing site for Ajibola Atoyebi. Astro (static), TypeScript, Tailwind v4, hosted on Netlify.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Type check, build to `dist/`, then run the client leak check |
| `npm run preview` | Serve the built site locally |
| `npm run check:leaks` | Run the leak check on an existing `dist/` |

## Where things live

- `src/lib/site.ts`: name, title, email, social links, GA ID. Change identity details here only.
- `src/lib/experience.ts`: the experience timeline and stack list.
- `src/content/work/`: case studies, client cards, and earlier work (frontmatter schema in `src/content.config.ts`).
  - `era: featured` + `kind: case`: ViewEngine case study with its own page.
  - `era: supporting` + `kind: card`: small ViewEngine card on `/work`.
  - `era: earlier`: older work. `kind: case` gets a page, `kind: oneliner` is a single line.
- `src/content/writing/`: posts. `draft: true` keeps a post out of the build, sitemap, and RSS. The Writing nav link and the home "Latest writing" section appear once one post is published.
- `src/pages/og/[...slug].png.ts`: OG images, generated at build time.
- `scripts/check-client-leaks.mjs`: fails the build if a private client name appears in `dist/`.

## Publishing a client name

Every ViewEngine entry has a `client` block. While `public: false`, only `descriptor` is shown, and the build fails if the name, domain, or any alias appears anywhere in `dist/`.

1. Get written approval from ViewEngine and the client.
2. In `src/content/work/<slug>.md` (or `.mdx`), set `client.public: true` and fill `liveLinks`.
   - The Sunfish name appears in two files (`programmatic-landing-pages.mdx` and `technical-seo-remediation.mdx`). Flip both, or the leak check will fail on the other.
3. Optionally add a logo to `src/assets/clients/<slug>.svg` (logo display is not built yet; add it to the case study header when the first logo arrives).
4. Run `npm run build`. The leak check confirms the remaining private names stay hidden. Commit and push.

All rendering of client identity goes through `displayClient()` in `src/lib/client.ts`. Never read `client.name` directly in a component.

## Writing a post

1. Add `src/content/writing/<slug>.md` with `title`, `description` (140 to 160 characters), `pubDate`, and optional `tags` and `related` (case study slugs).
2. Remove `draft: true` when it is ready.
3. Build. The post gets a page, an OG image, an RSS entry, and a sitemap entry.

## Contact form

Netlify Forms picks up the `contact` form in `/contact` at deploy time. Submissions show in the Netlify dashboard under Forms. Set an email notification there to forward them.
