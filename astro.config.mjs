import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://proddraft.com',
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  vite: {
    ssr: {
      noExternal: ['@astrojs/rss'],
    },
  },

  adapter: cloudflare()
});