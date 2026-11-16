// Single source of truth for identity, links and contact details.
export const SITE = {
  url: 'https://ajibola.dev',
  name: 'Ajibola Atoyebi',
  shortName: 'Aji',
  jobTitle: 'AI Engineer',
  employer: { name: 'ViewEngine', url: 'https://viewengine.ai' },
  location: 'Nigeria',
  email: 'hello@ajibola.dev',
  homeTitle: 'Ajibola Atoyebi | AI Engineer, Programmatic SEO',
  positioning:
    'I build the systems that turn keyword and content data into pages that rank: programmatic SEO pipelines, technical SEO fixes, and AI workflows that let whole teams ship faster.',
  description:
    'Ajibola Atoyebi is an AI Engineer at ViewEngine who builds programmatic SEO pipelines, technical SEO fixes, and AI workflows for US and Canadian teams.',
  gaId: 'G-MENZR8CRSZ',
  links: {
    linkedin: 'https://www.linkedin.com/in/ajibola-atoyebi/',
    github: 'https://github.com/Ajibola03',
    x: 'https://x.com/__jibs',
    // TODO: likely outdated, replace once the resume is updated.
    resume: 'https://drive.google.com/file/d/1nK1PVQ29jDxizWrQKE9tCtsDuPip6Uer/view',
  },
  knowsAbout: [
    'Programmatic SEO',
    'Technical SEO',
    'Python',
    'Webflow',
    'WordPress',
    'HubSpot',
    'Claude skills',
    'Prompt engineering',
    'LLM evals',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
  ],
} as const;

export const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/writing', label: 'Writing', requiresPosts: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString().replace(/\/$/, '') || SITE.url;
}
