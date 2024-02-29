import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ueBNAfbs.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_syTB-Hvk.mjs');
const _page1 = () => import('./chunks/index_PAl7rP7I.mjs');
const _page2 = () => import('./chunks/about_kST-4mYW.mjs');
const _page3 = () => import('./chunks/integrity_1hBQcjrF.mjs');
const _page4 = () => import('./chunks/services_7IwAdXiu.mjs');
const _page5 = () => import('./chunks/_slug__tyJwHDrT.mjs');
const _page6 = () => import('./chunks/stories_9ORlyFoe.mjs');
const _page7 = () => import('./chunks/introducing-xz-studios_hmSUah8p.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/integrity.astro", _page3],
    ["src/pages/services.astro", _page4],
    ["src/pages/stories/category/[slug].astro", _page5],
    ["src/pages/stories.astro", _page6],
    ["src/pages/stories/introducing-xz-studios.md", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9a2ec0e1-784e-46e7-97e5-7ab7329a80e0"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
