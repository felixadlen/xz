import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DUAcDxIa.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Cn9RnFk5.mjs');
const _page1 = () => import('./chunks/about_8gcQOvMh.mjs');
const _page2 = () => import('./chunks/integrity_DrCphlyD.mjs');
const _page3 = () => import('./chunks/robots_BRdLj3f0.mjs');
const _page4 = () => import('./chunks/services_DZRZa-pB.mjs');
const _page5 = () => import('./chunks/_slug__BLzeiQam.mjs');
const _page6 = () => import('./chunks/did-we-find-inspiration_BnTcW9ab.mjs');
const _page7 = () => import('./chunks/good-things-to-good-people_DeDEHiJr.mjs');
const _page8 = () => import('./chunks/introducing-xz-studios_xG3M-j-z.mjs');
const _page9 = () => import('./chunks/stories_D6GIiFwn.mjs');
const _page10 = () => import('./chunks/thankyou_DDdIiH-t.mjs');
const _page11 = () => import('./chunks/index_CyQ1LOqr.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/integrity.astro", _page2],
    ["src/pages/robots.txt.ts", _page3],
    ["src/pages/services.astro", _page4],
    ["src/pages/stories/category/[slug].astro", _page5],
    ["src/pages/stories/did-we-find-inspiration.md", _page6],
    ["src/pages/stories/good-things-to-good-people.md", _page7],
    ["src/pages/stories/introducing-xz-studios.md", _page8],
    ["src/pages/stories.astro", _page9],
    ["src/pages/thankyou.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d8c9876f-3c11-4d57-bbc9-1da54f8e6057"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
