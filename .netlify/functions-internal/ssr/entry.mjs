import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D76OkFD8.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_5kyC1bS3.mjs');
const _page1 = () => import('./chunks/index_7EhEx27G.mjs');
const _page2 = () => import('./chunks/about_SvY3S9Ck.mjs');
const _page3 = () => import('./chunks/integrity_A5tHHmlm.mjs');
const _page4 = () => import('./chunks/services_LhyAwfN8.mjs');
const _page5 = () => import('./chunks/_slug__cDSbqWi1.mjs');
const _page6 = () => import('./chunks/stories_wtSS3tnH.mjs');
const _page7 = () => import('./chunks/introducing-xz-studios_VFka59jM.mjs');
const _page8 = () => import('./chunks/index_GbDkX1c3.mjs');
const _page9 = () => import('./chunks/thankyou_tU6ogyTN.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/integrity.astro", _page3],
    ["src/pages/services.astro", _page4],
    ["src/pages/stories/category/[slug].astro", _page5],
    ["src/pages/stories.astro", _page6],
    ["src/pages/stories/introducing-xz-studios.md", _page7],
    ["src/pages/sv/index.astro", _page8],
    ["src/pages/thankyou.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9684ae3d-32e8-4b13-bc06-105ecccd848b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
