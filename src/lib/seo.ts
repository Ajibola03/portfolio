import { SITE, absoluteUrl } from './site';

export interface SeoProps {
  /** Page title without the site suffix. Omit on the home page. */
  title?: string;
  description: string;
  /** Path of the page, e.g. "/work/foo". Defaults to the current URL. */
  path?: string;
  /** Path of the OG image, e.g. "/og/work/foo.png". */
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  publishedTime?: Date;
}

export function fullTitle(title?: string): string {
  return title ? `${title} | ${SITE.name}` : SITE.homeTitle;
}

/** Maps a page path to its generated OG image path. */
export function ogPathFor(path: string): string {
  const clean = path.replace(/^\/|\/$/g, '');
  return `/og/${clean || 'index'}.png`;
}

export const personRef = { '@id': `${SITE.url}/#person` };

export function personSchema(imageUrl?: string) {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.name,
    alternateName: SITE.shortName,
    jobTitle: SITE.jobTitle,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    ...(imageUrl ? { image: imageUrl } : {}),
    worksFor: { '@type': 'Organization', name: SITE.employer.name, url: SITE.employer.url },
    address: { '@type': 'PostalAddress', addressCountry: 'NG' },
    sameAs: [SITE.links.linkedin, SITE.links.github, SITE.links.x],
    knowsAbout: [...SITE.knowsAbout],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'en',
    publisher: personRef,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
