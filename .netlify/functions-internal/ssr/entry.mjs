import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8zofu5Ze.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_LlhmPo8r.mjs');
const _page1 = () => import('./chunks/index_kFbWB02x.mjs');
const _page2 = () => import('./chunks/about_jfe1L3_T.mjs');
const _page3 = () => import('./chunks/integrity_XXee43qN.mjs');
const _page4 = () => import('./chunks/robots_BG8AUOhK.mjs');
const _page5 = () => import('./chunks/services_LW_QenKp.mjs');
const _page6 = () => import('./chunks/_slug__qvtN2TiP.mjs');
const _page7 = () => import('./chunks/stories_qgYVSe-x.mjs');
const _page8 = () => import('./chunks/did-we-find-inspiration_DKGD7Ckj.mjs');
const _page9 = () => import('./chunks/introducing-xz-studios_xVXaGEr_.mjs');
const _page10 = () => import('./chunks/index_g5UZExwL.mjs');
const _page11 = () => import('./chunks/about_CSEIcIyK.mjs');
const _page12 = () => import('./chunks/integrity_-VRTeo2v.mjs');
const _page13 = () => import('./chunks/services_g5VpJb_l.mjs');
const _page14 = () => import('./chunks/_slug__Gq37_chK.mjs');
const _page15 = () => import('./chunks/stories_L5ujSJZW.mjs');
const _page16 = () => import('./chunks/thankyou_NfydPYb3.mjs');
const _page17 = () => import('./chunks/thankyou_8jUtj6pB.mjs');
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
    ["src/pages/sv/index.astro", _page10],
    ["src/pages/sv/about.astro", _page11],
    ["src/pages/sv/integrity.astro", _page12],
    ["src/pages/sv/services.astro", _page13],
    ["src/pages/sv/stories/category/[slug].astro", _page14],
    ["src/pages/sv/stories.astro", _page15],
    ["src/pages/sv/thankyou.astro", _page16],
    ["src/pages/thankyou.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e9f93b71-be65-4774-a3ca-0a53dea5e07c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
