import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/content';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name}: Writing`,
    description: 'Notes on programmatic SEO, technical SEO, and AI workflows for teams.',
    site: context.site ?? SITE.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
