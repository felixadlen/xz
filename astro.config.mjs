import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap({
    filter: (page) =>
    page !== 'https://xzstudios.se/thankyou/' &&
    page !== 'https://xzstudios.se/secrets/' ,
  }), mdx()],
  vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt']
    }
  },
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["sv", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});