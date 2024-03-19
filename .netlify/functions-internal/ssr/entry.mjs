import { renderers } from './renderers.mjs';
import { manifest } from './manifest_5LNmZOpy.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_syTB-Hvk.mjs');
const _page1 = () => import('./chunks/index_7OuO_ToC.mjs');
const _page2 = () => import('./chunks/about_52VvdAPs.mjs');
const _page3 = () => import('./chunks/integrity_1hBQcjrF.mjs');
const _page4 = () => import('./chunks/services_DnGlyYfS.mjs');
const _page5 = () => import('./chunks/_slug__tyJwHDrT.mjs');
const _page6 = () => import('./chunks/stories_WsLWxwWs.mjs');
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
    "middlewareSecret": "88a007cb-b699-4b1c-833a-181f8cc6b0bd"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
