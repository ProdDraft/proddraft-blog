# ProdDraft Blog

The blog behind [proddraft.com](https://proddraft.com) — deep technical writing on AI, new tech, and cutting-edge research. No listicles. No hype. Just substance.

Built with [Astro](https://astro.build).

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deployment

Push to `main` and Cloudflare Pages auto-deploys. Build command: `npm run build`. Output directory: `dist`.

## Content

Blog posts live in `src/content/blog/` as markdown files. Drafts have `draft: true` in frontmatter and won't appear on the live site.

## Structure

```
src/
├── content/blog/     # Markdown posts
├── layouts/          # Base + BlogPost layouts
├── pages/            # Routes (index, blog, products, about, subscribe)
├── components/       # Reusable Astro components
├── styles/           # Global CSS
└── lib/              # Utilities
```
