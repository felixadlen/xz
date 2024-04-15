import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_MM15vAtA.mjs';
import 'kleur/colors';
import 'cssesc';
import { changeLanguage } from 'i18next';
import { c as $$Container, e as $$BlogPostsList, d as $$Page } from './_slug__d7stwgzo.mjs';
/* empty css                            */

const $$Astro = createAstro("https://xzstudios.se");
const $$Stories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stories;
  changeLanguage("en");
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./stories/did-we-find-inspiration.md": () => import('./did-we-find-inspiration_7Cvon4Yw.mjs').then(n => n.d),"./stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_YOJ56RIL.mjs')}), () => "./stories/*.{md,mdx}")).sort((a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf());
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

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories.astro";
const $$url = "/stories";

export { $$Stories as default, $$file as file, $$url as url };
