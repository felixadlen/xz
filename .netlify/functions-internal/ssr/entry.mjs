import { renderers } from './renderers.mjs';
import { manifest } from './manifest_k3XsjJN-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_LlhmPo8r.mjs');
const _page1 = () => import('./chunks/index_XjAph1Pd.mjs');
const _page2 = () => import('./chunks/about_wOrsZYre.mjs');
const _page3 = () => import('./chunks/integrity_vAW-9x_A.mjs');
const _page4 = () => import('./chunks/robots_BG8AUOhK.mjs');
const _page5 = () => import('./chunks/services_giO7d31a.mjs');
const _page6 = () => import('./chunks/_slug__FhHFDcaE.mjs');
const _page7 = () => import('./chunks/stories_VvYE5wCy.mjs');
const _page8 = () => import('./chunks/did-we-find-inspiration_ETxVfPr4.mjs');
const _page9 = () => import('./chunks/introducing-xz-studios_wibGTVFY.mjs');
const _page10 = () => import('./chunks/thankyou__LqDBmiP.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/integrity.astro", _page3],
    ["src/pages/robots.txt.ts", _page4],
    ["src/pages/services.astro", _page5],
    ["src/pages/stories/category/[slug].astro", _page6],
    ["src/pages/stories.astro", _page7],
    ["src/pages/stories/did-we-find-inspiration.md", _page8],
    ["src/pages/stories/introducing-xz-studios.md", _page9],
    ["src/pages/thankyou.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4939c28a-5936-4476-b1cb-e0c6ec814c78"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
