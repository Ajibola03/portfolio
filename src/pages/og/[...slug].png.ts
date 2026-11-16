import type { APIRoute } from 'astro';
import { renderOg, type OgInput } from '../../lib/og';
import { getPosts, getWork, hasPage } from '../../lib/content';
import { displayClient, capitalize } from '../../lib/client';
import { SITE } from '../../lib/site';

export async function getStaticPaths() {
  const { all } = await getWork();
  const posts = await getPosts();

  const pages: { slug: string; og: OgInput }[] = [
    { slug: 'index', og: { kicker: SITE.jobTitle, title: SITE.name, subtitle: 'Programmatic SEO pipelines, technical SEO, and AI workflows for teams.' } },
    { slug: 'work', og: { kicker: 'Work', title: 'Case studies and earlier work', subtitle: 'SEO and AI systems at ViewEngine, plus six years of SaaS.' } },
    { slug: 'about', og: { kicker: 'About', title: 'I build the systems behind pages that rank.' } },
    { slug: 'contact', og: { kicker: 'Contact', title: "Let's talk.", subtitle: SITE.email } },
    { slug: 'writing', og: { kicker: 'Writing', title: 'Notes on programmatic SEO and AI workflows' } },
    ...all.filter(hasPage).map((w) => {
      // Client identity only ever comes from displayClient(), so private names never reach the image.
      const client = displayClient(w);
      const kicker = w.data.era === 'earlier' ? `Earlier work · ${w.data.employer}` : `Case study · ${client ? capitalize(client.label) : 'ViewEngine'}`;
      return { slug: `work/${w.id}`, og: { kicker, title: w.data.title, subtitle: w.data.resultHeadline } };
    }),
    ...posts.map((p) => ({ slug: `writing/${p.id}`, og: { kicker: 'Writing', title: p.data.title } })),
  ];

  return pages.map(({ slug, og }) => ({ params: { slug }, props: { ...og } }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as OgInput);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
