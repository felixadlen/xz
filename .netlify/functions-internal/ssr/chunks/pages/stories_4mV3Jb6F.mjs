import { c as $$Container, e as $$BlogPostsList, d as $$Page } from './_slug__jt9cBTPv.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_MM15vAtA.mjs';
import 'kleur/colors';
import 'cssesc';
import { changeLanguage } from 'i18next';
/* empty css                            */
/* empty css                            */

const $$Astro$1 = createAstro("https://xzstudios.se");
const $$Stories$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Stories$1;
  changeLanguage("en");
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./stories/did-we-find-inspiration.md": () => import('./did-we-find-inspiration_3F9Y2Wt_.mjs').then(n => n.d),"./stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_eVL-zZKb.mjs')}), () => "./stories/*.{md,mdx}")).sort((a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf());
  let initialPostCount = 3;
  let displayedPosts = allPosts.slice(0, initialPostCount);
  function loadMorePosts() {
    const nextPosts = allPosts.slice(displayedPosts.length, displayedPosts.length + initialPostCount);
    displayedPosts = [...displayedPosts, ...nextPosts];
    console.log("du klickade");
  }
  return renderTemplate`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><meta name="title" content="Stories | Marketing insights by XZ"><meta name="description" content="Here are our insights and reflections from exploring new marketing ideas around the world. Read more.">${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-na7xuwe2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-na7xuwe2": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section id="stories-header" data-astro-cid-na7xuwe2><div class="highlightTextContainer" data-astro-cid-na7xuwe2><h1 class="fade-highlight stories-exception-heading" data-astro-cid-na7xuwe2>our stories</h1><p class="subheader-stories-index" data-astro-cid-na7xuwe2>
When you explore, you create stories.
          Here are our insights and random reflections from exploring new marketing ideas around the world.</p></div></section>${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": allPosts, "data-astro-cid-na7xuwe2": true })}<div class="pagination-link" data-astro-cid-na7xuwe2><button id="see-more-btn"${addAttribute(loadMorePosts, "on:click")} data-astro-cid-na7xuwe2>Funnier posts below &nbsp;<span class="material-symbols-outlined" style="position: relative;bottom: -7px;" data-astro-cid-na7xuwe2>
expand_more
</span></button></div>` })}` })}<!-- Nedan skript är för att ladda ytterligare inlägg nedåt. Får funka tillsvidare, tills en ordentlig pagination är på plats.  -->`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories.astro", void 0);

const $$file$1 = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories.astro";
const $$url$1 = "/stories";

const stories$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Stories$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://xzstudios.se");
const $$Stories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stories;
  changeLanguage("sv");
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../stories/did-we-find-inspiration.md": () => import('./did-we-find-inspiration_3F9Y2Wt_.mjs').then(n => n.d),"../stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_eVL-zZKb.mjs')}), () => "../stories/*.{md,mdx}")).sort((a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf());
  let initialPostCount = 3;
  let displayedPosts = allPosts.slice(0, initialPostCount);
  function loadMorePosts() {
    const nextPosts = allPosts.slice(displayedPosts.length, displayedPosts.length + initialPostCount);
    displayedPosts = [...displayedPosts, ...nextPosts];
    console.log("du klickade");
  }
  return renderTemplate`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><meta name="title" content="Stories | Marketing insights by XZ"><meta name="description" content="Here are our insights and reflections from exploring new marketing ideas around the world. Read more.">${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-6s26g7r6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-6s26g7r6": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section id="stories-header" data-astro-cid-6s26g7r6><div class="highlightTextContainer" data-astro-cid-6s26g7r6><h1 class="fade-highlight stories-exception-heading" data-astro-cid-6s26g7r6>our stories</h1><p class="subheader-stories-index" data-astro-cid-6s26g7r6>
When you explore, you create stories.
          Here are our insights and random reflections from exploring new marketing ideas around the world.</p></div></section>${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": allPosts, "data-astro-cid-6s26g7r6": true })}<div class="pagination-link" data-astro-cid-6s26g7r6><button id="see-more-btn"${addAttribute(loadMorePosts, "on:click")} data-astro-cid-6s26g7r6>Funnier posts below &nbsp;<span class="material-symbols-outlined" style="position: relative;bottom: -7px;" data-astro-cid-6s26g7r6>
expand_more
</span></button></div>` })}` })}<!-- Nedan skript är för att ladda ytterligare inlägg nedåt. Får funka tillsvidare, tills en ordentlig pagination är på plats.  -->`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/sv/stories.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/sv/stories.astro";
const $$url = "/sv/stories";

const stories = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Stories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { stories as a, stories$1 as s };
