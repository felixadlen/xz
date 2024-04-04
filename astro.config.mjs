import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
<<<<<<< HEAD
  integrations: [sitemap(), mdx(),astroI18next()],
=======
  integrations: [sitemap({
    filter: (page) =>
    page !== 'https://xzstudios.se/thankyou/' &&
    page !== 'https://xzstudios.se/secrets/' ,
  }), mdx()],
>>>>>>> 7a3f3f6 (added sitemap filter to noindex two pages)
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