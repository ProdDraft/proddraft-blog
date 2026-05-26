import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'ProdDraft Blog',
    description: 'AI, new tech, cutting-edge research — no listicles, no hype.',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
    })),
  });
}
