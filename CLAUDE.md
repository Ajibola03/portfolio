# CLAUDE.md: ajibola.dev rebuild

You are rebuilding Ajibola Atoyebi's portfolio from scratch. The current site (Vite + React SPA, 2021-era dark design) is being replaced with an Astro static site in an editorial style, optimized for search. Read this whole file before writing code. Every decision below is already made; do not reopen them. If something is genuinely missing, ask Ajibola one question at a time.

---

## 1. Decisions (locked)

| Topic | Decision |
|---|---|
| Positioning | Full-stack engineer who builds AI and SEO growth systems |
| Headline title | AI Engineer (current title at ViewEngine) |
| Framework | Astro (static output), TypeScript, Tailwind v4. React only for an island if truly needed |
| Hosting | Netlify (keep) |
| Design | "Editorial engineer": light, serif headlines, generous whitespace, case studies read like short articles |
| SEO scope | Rank for his name, plus a Writing section for topic authority |
| Client names | ALL ViewEngine clients anonymous for now. Real names stored but hidden behind a `public` flag (see section 8) |
| Contact | `hello@ajibola.dev` shown, plus a Netlify Forms contact form |
| Old projects | Compact "Earlier work" archive: 3 short case studies, 5 one-liners |

---

## 2. Who Ajibola is (source of truth for copy)

- Name: Ajibola Atoyebi ("Aji"). Based in Nigeria, works remotely with US and Canadian teams.
- Current: **AI Engineer, ViewEngine** (contract, remote, Aug 2025 to present). ViewEngine is a New York based company.
- Short positioning line (draft, edit freely): "I build the systems that turn keyword and content data into pages that rank: programmatic SEO pipelines, technical SEO fixes, and AI workflows that let whole teams ship faster."

### Experience timeline (from LinkedIn, Nov 2026)

| Dates | Role | Company | Proof points to use |
|---|---|---|---|
| Aug 2025 to now | AI Engineer (contract) | ViewEngine | Programmatic SEO pipelines in Python pulling from CMS and search APIs; scripts for bulk fixes across hundreds of URLs; sitemap architecture, canonicalization, indexation, metadata; site builds on Webflow, WordPress, HubSpot; reusable page templates |
| Sep 2024 to Aug 2025 | Freelance Web Developer | Freelance | SaaS dashboard (React, Next.js, Tailwind) that cut client's manual reporting time 50%; payment and data API integrations |
| Oct 2023 to Sep 2024 | Frontend Web Developer (part-time) | Shugaland | SaaS features for 10K+ MAU; React + TypeScript components; API work that cut data load time 25%; Azure DevOps pipeline improvements, 20% faster releases |
| Nov 2022 to Oct 2023 | Contract Web Developer | Canadian tech firm (unnamed) | Legacy-to-modern rebuild with Vue.js, Node.js, PostgreSQL; Dockerized deploys cut server setup 60%; multi-tenant API layer, 3 enterprise customers onboarded in under 6 months |
| Sep 2021 to Sep 2022 | Full Stack Engineer | 10X Ventures | Next.js/Blitz.js, Node, PostgreSQL, Prisma; apps at 15K+ active users; APIs handling 50K+ secure transactions/month; Stripe subscriptions (+20% recurring revenue); query work cut API response time 35% |
| Sep 2019 to Sep 2022 | Software Developer (part-time) | AluSoft Technologies | Laravel, Node, Flutter, Firebase; mobile app with 2K+ downloads; Paystack integration cut manual billing 50% |

Use these numbers as written. Never invent metrics. Where a number is missing, leave `TODO(metric)` in the content file and list it in your final report.

### Links

- LinkedIn: https://www.linkedin.com/in/ajibola-atoyebi/
- GitHub: https://github.com/Ajibola03
- X: https://x.com/__jibs
- Resume: https://drive.google.com/file/d/1nK1PVQ29jDxizWrQKE9tCtsDuPip6Uer/view (keep for now; flag that it is likely outdated)
- Email: hello@ajibola.dev (do NOT publish the old Gmail anywhere)
- Photo: reuse `public/images/profile.png`, optimized through `astro:assets`

---

## 3. Information architecture

```
/                      Home
/work                  All work: ViewEngine case studies, then "Earlier work"
/work/[slug]           Case study page
/writing               Writing index
/writing/[slug]        Post
/about                 Longer bio, timeline, stack, photo
/contact               Form + email (also a contact block at the bottom of Home)
/404
/rss.xml, /sitemap-index.xml, /robots.txt
```

Home, in order:
1. Hero: name, "AI Engineer", positioning line, two CTAs (See the work / Get in touch).
2. Selected work: the 3 featured ViewEngine case studies as large editorial cards.
3. "What I do": three short columns (Programmatic SEO systems / Technical SEO / AI workflows for teams). Plain text, no icon soup.
4. Experience timeline (compact, from the table above).
5. Latest writing (hidden automatically while there are no published posts).
6. Earlier work strip (one line each, links to /work).
7. Contact block.

---

## 4. Content

All content lives in Astro content collections (`src/content/`), Markdown/MDX with frontmatter validated by Zod in `src/content.config.ts`. No HTML strings in JSON (the old `projects-data.json` used `dangerouslySetInnerHTML`; do not carry that pattern over).

### 4.1 ViewEngine case studies (featured, anonymous)

Write each as a short article: Problem, What I built, How it works (with one diagram or code excerpt where it helps), Result, Stack. 400 to 700 words. Facts below are confirmed; do not add claims beyond them. Leave `TODO(metric)` where a result number would go.

1. **`programmatic-landing-pages`: Shipping high-intent landing pages for a US fertility care provider**
   - Built bottom-of-funnel keyword landing pages (examples: IVF package deals, reciprocal IVF, IVF refund programs) as self-contained HTML, then imported them into the client's Webflow site.
   - Mapped incoming markup onto the site's existing classes; new sections use a `ve_` class prefix so nothing collides when pages move between the staging site and production.
   - Stack: Python, HTML/CSS, Webflow.
2. **`technical-seo-remediation`: Cleaning up indexation for the same provider**
   - Rebuilt the sitemap to canonical, indexable pages only: removed 19 URLs (redirects, non-canonicals, noindexed pages).
   - Set up a data-only Webflow CMS collection with template publishing turned off.
   - Next phase: descriptive alt text across 186 images, prioritizing content and clinic pages.
   - Stack: Webflow, Search Console, scripting.
   - Note: if cases 1 and 2 feel thin apart, merge them into one longer case study for one client. Your call; explain it in the report.
3. **`authority-statement-mapping-skill`: Turning an expert SEO task into a team-wide Claude skill**
   - Ajibola repeatedly mapped each client page to up to 3 "authority statements" (short-tail plus long-tail keyword pairs, with priority) from two spreadsheets.
   - Packaged it as a standardized Claude skill with an eval so non-technical teammates can run it: 1 to 3 statements per page, long-tail preferred first, match notes, and "Needs Review" flags as a fallback.
   - Used across several client sites (a student storage company, a behavioral health provider, a tutoring franchise).
   - Stack: Claude skills, prompt engineering, evals, spreadsheets.

### 4.2 ViewEngine supporting work (grid of small cards, anonymous)

One or two sentences each. Descriptors marked (confirm) need Ajibola to confirm before launch.

| Internal key | Public descriptor | Work |
|---|---|---|
| storage-scholars | Student storage and moving company | Footer "About" disclosure block driven by the company's positioning statement; blog post template redesign (Webflow) |
| hello-gravel | Outdoor/gravel products brand (confirm) | On-page SEO across guides: titles, meta, quick-answer headings, internal links to the buy page, redirects; wrote its positioning statement |
| tutor-doctor | International tutoring franchise | Footer "About" block from its positioning statement (WordPress) |
| arkview | Behavioral health treatment provider | Bulk updates across its blog posts (WordPress) |
| spark-membership | Membership management software company (confirm) | Reusable landing page template and corrections; blog posts |
| pure-genius | Protein snack brand (confirm) | Landing pages |
| chompshop | Online retailer (confirm) | Seasonal landing page (Black Friday kids toys) |
| viewengine | ViewEngine itself | Landing page series for ViewEngine's own site (this one CAN be named; it is his employer) |

### 4.3 Earlier work

Short case studies (200 to 350 words each, reuse existing screenshots in `public/images/projects/`):
- **FirstX** (10X Ventures): outreach SaaS on the Twitter API; queue-based background processing for performance.
- **SYBG** (10X Ventures): no-code product announcement SaaS; Stripe subscriptions.
- **ChurchPorch** (AluSoft): church management SaaS on Laravel/MySQL plus mobile app.

One-liners (name, year, one sentence, outbound link):
- ChangeLog (10X Ventures), EduPorch (AluSoft), Shugaland, Grantt Care Services, HatWizard.
- Bug in old data: HatWizard's `url` points to granttcare.com. Fix to https://hatwizard.com.
- Before launch, check every outbound project link returns 200. If a product is dead, keep the entry, drop the link, and add "(no longer live)".

### 4.4 Writing

- Set up the collection, index, post layout, RSS, and reading time.
- Create ONE draft post (`draft: true`, excluded from build, sitemap, and RSS) with an outline only: "How I build programmatic SEO landing pages with Python and Webflow". Do not write the full post; Ajibola writes it.
- Home "Latest writing" and the nav link render only when at least one non-draft post exists.

### 4.5 Copy rules

- Plain, direct, first person. Answer first, then proof.
- No em dashes. No "not X but Y" constructions. No filler openers ("Passionate about...", "In today's fast-paced..."). No triads for rhythm.
- Every claim backed by a specific: a number, a named technology, or a concrete deliverable.
- British/US spelling: US.

---

## 5. Design system: "Editorial engineer"

Use the `frontend-design` mindset: intentional, not templated. Reference feel: a well-set magazine feature, with small engineering details.

- **Palette** (CSS variables in `src/styles/global.css`):
  - `--paper: #FAF8F4` background, `--ink: #16140F` text, `--muted: #6B665C`, `--rule: #E4DFD5` hairlines
  - One accent: `--accent: #0F6B5C` (deep teal; a quiet nod to the old site's #61F8D5). Use for links, focus rings, and small markers only.
  - Contrast must pass WCAG AA everywhere.
- **Type** (self-host via `@fontsource-variable/*`, no Google Fonts request):
  - Display/headlines: Fraunces (variable, use optical size; moderate softness)
  - Body: Inter Tight or Source Sans 3 (pick one, justify in report)
  - Mono accents (stack labels, dates, metadata): JetBrains Mono
  - Fluid type scale with `clamp()`. Body 18 to 20px, line-height 1.6, measure 62 to 72ch.
- **Layout:** 12-column grid, wide margins, asymmetric hero (big serif name left, short positioning right or below). Hairline rules between sections. Case study pages use a single reading column with full-bleed images and pull-quote-sized result numbers.
- **Detail:** small mono "metadata rows" on case studies (Role / Stack / Timeline / Platform). Numbered section markers (01, 02, 03).
- **Motion:** minimal. A subtle fade/translate on scroll for section entries, disabled under `prefers-reduced-motion`. No scroll-jacking, no cursor effects.
- **Dark mode:** not in v1. Structure the CSS variables so it can be added later.
- **Images:** screenshots in a thin frame with soft shadow, shown at real aspect ratio. Lightbox not required; if added, make it a small vanilla/Astro component, not a React dependency.

---

## 6. SEO requirements (non-negotiable)

1. **robots.txt**: the current file has `Disallow:/*`, which blocks every crawler. Replace with:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://ajibola.dev/sitemap-index.xml
   ```
2. **Static HTML for every route.** Content must be in the HTML with JavaScript disabled.
3. **Per-page metadata** via one `<BaseHead>` component: unique `<title>` (pattern `Page | Ajibola Atoyebi`, home is `Ajibola Atoyebi | AI Engineer, Programmatic SEO`), meta description (140 to 160 chars), canonical URL, `og:*` and `twitter:*` tags, `lang="en"`.
4. **OG images**: generated per page at build time (Satori or `astro-og-canvas`), in the editorial style. 1200x630.
5. **Structured data (JSON-LD):**
   - Home: `Person` (name, jobTitle "AI Engineer", worksFor ViewEngine, url, image, sameAs [LinkedIn, GitHub, X], knowsAbout list) + `WebSite`.
   - About: `ProfilePage` with `mainEntity` Person.
   - Case studies: `CreativeWork` + `BreadcrumbList`.
   - Posts: `BlogPosting` + `BreadcrumbList`.
   - Validate output against schema.org; no errors.
6. **Sitemap** via `@astrojs/sitemap` (exclude drafts and 404). **RSS** via `@astrojs/rss`.
7. **Redirects** (301) in `netlify.toml`, replacing the SPA catch-all in `public/_redirects` (delete that file):
   - `/projects` → `/work`
   - `/projects/firstx`, `/projects/sybg`, `/projects/churchporch` → `/work/<same-slug>`
   - every other `/projects/*` → `/work#earlier-work`
8. **Performance budget:** Lighthouse 95+ on Performance, Accessibility, Best Practices, SEO for Home, a case study, and About (mobile). LCP < 2.0s, CLS < 0.05. Ship zero JS on pages that do not need it.
9. **Images:** `astro:assets`, AVIF/WebP, explicit width/height, descriptive alt text on every image, `loading="lazy"` below the fold, hero image eager with `fetchpriority="high"`.
10. **Analytics:** keep GA4 `G-MENZR8CRSZ`, loaded after interaction or idle (Partytown or a deferred loader) so it does not hurt LCP.
11. **Headings:** one `h1` per page, logical order. Internal links between related case studies and posts.

---

## 7. Contact

- Show `hello@ajibola.dev` as a `mailto:` link (Home contact block, /contact, footer).
- Netlify Forms on /contact: name, email, message; `data-netlify="true"`, honeypot field, static success page `/contact/thanks` (noindex). Works without JS.
- Ajibola must set up the mailbox or forwarding for hello@ajibola.dev to his Gmail. Add this to the launch checklist; do not attempt it.

---

## 8. Client name approval switch

Each ViewEngine content entry carries a `client` object in frontmatter:

```yaml
client:
  public: false                       # flip to true once ViewEngine approves
  descriptor: "a US fertility care provider"   # shown while public is false
  name: "Sunfish"                     # shown only when public is true
  url: "https://joinsunfish.com"      # shown only when public is true
  liveLinks:                          # pages Ajibola built; shown only when public is true
    - { label: "IVF Package Deals", url: "https://joinsunfish.com/ivf-package-deals" }
```

Rules:
- All rendering goes through one helper, `src/lib/client.ts` → `displayClient(entry)`, which returns the descriptor or the real name. No component reads `client.name` directly.
- When `public: false`, the real name, URL, live links, and logos must not appear anywhere in the built output: HTML, JSON-LD, OG images, alt text, sitemap, RSS, or JS bundles. Add a build check (`scripts/check-client-leaks.mjs`, run after `astro build`) that greps `dist/` for every non-public `client.name` and `client.url` domain and fails the build on a match.
- Real names and URLs for the frontmatter: Sunfish (joinsunfish.com), Storage Scholars (storagescholars.com), Hello Gravel (hellogravel.com), Tutor Doctor (tutordoctor.com), Arkview Behavioral Health (arkviewbh.com), Spark Membership (sparkmembership.com), Pure Genius Protein, Chompshop. Leave `liveLinks` empty except the three Sunfish pages above; Ajibola fills the rest.
- Add a "Publishing a client name" section to the README:
  1. Get written approval from ViewEngine/the client.
  2. In `src/content/work/<slug>.md`, set `client.public: true` and fill `liveLinks`.
  3. Optionally add a logo to `src/assets/clients/<slug>.svg`.
  4. `npm run build` (the leak check confirms the remaining private names stay hidden), commit, push.

---

## 9. Project structure

```
src/
  content.config.ts
  content/
    work/           # case studies (md/mdx), includes earlier work with `era: "earlier"`
    writing/        # posts
  components/       # BaseHead, Header, Footer, CaseCard, Timeline, MetaRow, ContactForm, JsonLd
  layouts/          # BaseLayout, CaseStudyLayout, PostLayout
  lib/              # client.ts, seo.ts, site.ts (single source for name, links, email)
  pages/            # index, about, contact, contact/thanks, work/index, work/[slug], writing/index, writing/[slug], rss.xml.ts, og/[...slug].png.ts, 404
  styles/global.css
  assets/           # images processed by astro:assets
public/
  favicon.svg, favicon.ico, robots.txt
netlify.toml
scripts/check-client-leaks.mjs
```

`netlify.toml`: build `npm run build`, publish `dist`, Node 20+, redirects from section 6, long-cache headers for `/_astro/*`, basic security headers (X-Content-Type-Options, Referrer-Policy, a CSP that still allows GA4 and Netlify Forms).

Remove: Vite/React SPA files, `react-router`, `yet-another-react-lightbox`, `Footer copy.tsx`, `projects-data.json` (after migrating), `vite.svg`, `react.svg`, unused images (`hero-bg.png`, `bullet.png`, `arrow_right_alt.png`, `logo-1.png`). Keep a credit line for the original designer only if Ajibola asks; the new design is not his.

---

## 10. Working method

1. Work on a branch `redesign-astro`. Do not touch `main` or deploy.
2. Phases, committing at the end of each:
   1. Scaffold Astro, Tailwind, fonts, `site.ts`, BaseLayout, BaseHead.
   2. Content collections + migrate all content (sections 2 and 4).
   3. Pages and components with the design system.
   4. SEO layer: JSON-LD, OG images, sitemap, RSS, robots, redirects.
   5. Contact form, analytics, `netlify.toml`, leak check.
   6. QA (section 11).
3. After phase 3, stop and show screenshots of Home, a case study, and About (desktop and mobile) before continuing.
4. Stay in scope. Note anything else as a suggestion in the report rather than building it.

---

## 11. Definition of done

- [ ] `npm run build` passes with zero warnings; leak check passes.
- [ ] Every route renders full content with JS disabled.
- [ ] Lighthouse mobile 95+ in all four categories on Home, one case study, About.
- [ ] JSON-LD validates with no errors on Home, About, a case study.
- [ ] `robots.txt` allows crawling; sitemap lists only public, non-draft pages.
- [ ] All old `/projects*` URLs 301 to the right new pages.
- [ ] No em dashes in rendered copy (`grep -r "—" dist/` returns nothing).
- [ ] Old Gmail address appears nowhere in `src/` or `dist/`.
- [ ] Every outbound link checked; dead products marked.
- [ ] Contact form submits in Netlify deploy preview.
- [ ] Final report lists: every `TODO(metric)`, every "(confirm)" descriptor, and Ajibola's launch tasks (mailbox for hello@ajibola.dev, resume update, Search Console sitemap submission, client approvals).
