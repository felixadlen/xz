/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "sv"],
  i18nextServer: {
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  },
};
