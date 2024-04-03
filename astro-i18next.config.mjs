import en from ‘./public/locales/en/translation.json’ assert { type: ‘json’ }
import sv from ‘./public/locales/sv/translation.json’ assert { type: ‘json’ }

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "sv"],
  i18nextServer: {
    resources: {
      en: {
      translation: {
      en
      }
      },
      sv: {
      translation: {
    sv
      }
      }
      }
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
   
    },
  },
};
