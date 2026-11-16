import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;
export type Post = CollectionEntry<'writing'>;

const byOrder = (a: Work, b: Work) => a.data.order - b.data.order;

export async function getWork() {
  const all = (await getCollection('work')).sort(byOrder);
  return {
    all,
    featured: all.filter((w) => w.data.era === 'featured'),
    supporting: all.filter((w) => w.data.era === 'supporting'),
    earlierCases: all.filter((w) => w.data.era === 'earlier' && w.data.kind === 'case'),
    earlierOneliners: all.filter((w) => w.data.era === 'earlier' && w.data.kind === 'oneliner'),
  };
}

/** Entries that get their own /work/[slug] page. */
export function hasPage(w: Work): boolean {
  return w.data.kind === 'case';
}

/** Published posts only. Drafts never leave the build. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(body: string | undefined): string {
  const words = (body ?? '').replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
