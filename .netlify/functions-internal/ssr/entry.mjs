import { renderers } from './renderers.mjs';
import { manifest } from './manifest_gGm5wyTL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CUw6VFPe.mjs');
const _page1 = () => import('./chunks/about_BRhOKbas.mjs');
const _page2 = () => import('./chunks/integrity_DyGIYQ6t.mjs');
const _page3 = () => import('./chunks/robots_BRdLj3f0.mjs');
const _page4 = () => import('./chunks/services_f-H0zIq9.mjs');
const _page5 = () => import('./chunks/_slug__EQEU1Nbr.mjs');
const _page6 = () => import('./chunks/did-we-find-inspiration_laD5Sf4b.mjs');
const _page7 = () => import('./chunks/good-things-to-good-people_BTIhycNA.mjs');
const _page8 = () => import('./chunks/introducing-xz-studios_D1DrA-Ct.mjs');
const _page9 = () => import('./chunks/stories_CvxZPUlU.mjs');
const _page10 = () => import('./chunks/thankyou_CJUfwB0i.mjs');
const _page11 = () => import('./chunks/index_ebkyj-xn.mjs');
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
    "middlewareSecret": "aba570a7-8f00-49ce-a427-15467e06d052"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
