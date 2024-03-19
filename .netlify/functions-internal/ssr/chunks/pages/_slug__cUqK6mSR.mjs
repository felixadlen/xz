import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderSlot, g as renderHead, h as renderComponent, u as unescapeHTML, F as Fragment } from '../astro_vTHV1pJ8.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                                           */
import { stripHeadings, stripHeadingsCode } from '@igor.dvlpr/strip-headings';
import { stripHtmlCode } from '@igor.dvlpr/strip-html';
import { stripHeadings as stripHeadings$1, stripHeadingsCode as stripHeadingsCode$1 } from '@igor.dvlpr/strip-html-headings';
/* empty css                            */
/* empty css                           */

const settings = {
  site: "https://xzstudios.se/stories",
  name: "XZ STUDIOS",
  title: "STORIES",
  description: "Site description",
  showLittleSticksPlug: false
};

const $$Astro$b = createAstro("https://xzstudios.se/stories");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const title = Astro2.props.title || settings.title;
  const description = Astro2.props.description || settings.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "./social.png", Astro2.site);
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><!-- Favicon --><link rel="icon" type="image/svg" href="/favicon.svg"><!-- Primary Meta Tags --><title>${title || settings.title}</title><meta name="title"${addAttribute(title || settings.title, "content")}><meta name="description"${addAttribute(description || settings.description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- settingsmap --><link rel="sitemap" href="/sitemap.xml"><!-- RSS --><link rel="alternate" type="application/rss+xml"${addAttribute(`${settings.name} Blog`, "title")}${addAttribute(`${settings.url}/feed/blog.xml`, "href")}><!-- Canonical --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style" onload="this.onload=null;this.rel='stylesheet'">${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css"></noscript><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" type="text/css"></noscript><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css">`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/BaseHead.astro", void 0);

const $$Astro$a = createAstro("https://xzstudios.se/stories");
const $$CreateCopyCodeButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CreateCopyCodeButtons;
  return renderTemplate``;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/CodeButtons/CreateCopyCodeButtons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$9 = createAstro("https://xzstudios.se/stories");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<!-- This is a simple script to check if there is a theme value in local storage. That way the theme stays with you between pages --><script>\n	const doc = document.firstElementChild;\n	const localStorageTheme = localStorage.getItem('theme');\n	if (localStorageTheme !== null) {\n		doc.setAttribute('color-scheme', localStorageTheme);\n	}\n<\/script>"])));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/ThemeToggleButton/ThemeProvider.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro("https://xzstudios.se/stories");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Base;
  const { seo } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head>', "", "<!-- This is and experimental global fade in animation that is being worked on, enable at your own risk of some jank --><!-- <FadeIn/> -->", '<script type="text/javascript">\n        // Clarity\n        (function (c, l, a, r, i, t, y) {\n          c[a] =\n            c[a] ||\n            function () {\n              (c[a].q = c[a].q || []).push(arguments);\n            };\n          t = l.createElement(r);\n          t.async = 1;\n          t.src = "https://www.clarity.ms/tag/" + i;\n          y = l.getElementsByTagName(r)[0];\n          y.parentNode.insertBefore(t, y);\n        })(window, document, "clarity", "script", "jovcl27t8k");\n      <\/script><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script>', "</head> <body> ", ' <main class="flow"> ', " </main> ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { ...seo }), renderComponent($$result, "ThemeProvider", $$ThemeProvider, {}), renderComponent($$result, "CreateCopyCodeButtons", $$CreateCopyCodeButtons, {}), renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/layouts/Base.astro", void 0);

const $$Astro$7 = createAstro("https://xzstudios.se/stories");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<link rel="stylesheet" href="/sass/components/menu.css">${maybeRenderHead()}<div id="master-menu"></div>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://xzstudios.se/stories");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="/sass/components/contact-form.css"><link rel="stylesheet" href="/sass/components/footer.css">', '<div id="master-footer"></div> <div id="openContactForm" class="hidden"></div> <script src="/script.js"><\/script>'])), maybeRenderHead());
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro("https://xzstudios.se/stories");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Page;
  const { seo } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/layouts/Page.astro", void 0);

const $$Astro$4 = createAstro("https://xzstudios.se/stories");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-d6puh33w> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Container.astro", void 0);

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function generateCategoryData(categories) {
  let categoryData = [];
  categories.forEach((category) => {
    categoryData.push({
      name: category,
      slug: `${slugify(category)}`,
    });
  });
  return categoryData;
}

const $$Astro$3 = createAstro("https://xzstudios.se/stories");
var PropHeadings = /* @__PURE__ */ ((PropHeadings2) => {
  PropHeadings2[PropHeadings2["Intact"] = 0] = "Intact";
  PropHeadings2[PropHeadings2["TextOnly"] = 1] = "TextOnly";
  PropHeadings2[PropHeadings2["None"] = 2] = "None";
  return PropHeadings2;
})(PropHeadings || {});
var PropRenderer = /* @__PURE__ */ ((PropRenderer2) => {
  PropRenderer2[PropRenderer2["Text"] = 0] = "Text";
  PropRenderer2[PropRenderer2["Html"] = 1] = "Html";
  PropRenderer2[PropRenderer2["Hybrid"] = 2] = "Hybrid";
  return PropRenderer2;
})(PropRenderer || {});
const $$PostExcerpt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostExcerpt;
  function isPriorV2(post2) {
    return typeof post2["compiledContent"] === "function" && typeof post2["rawContent"] === "function";
  }
  function isV2(post2) {
    return typeof post2["body"] === "string";
  }
  const symbolEllipsis = "\u2026";
  const punctuationSymbols = [".", ",", "?", "!", ";", symbolEllipsis];
  let {
    post,
    words = 40,
    maxLength = 0,
    addEllipsis = true,
    smartEllipsis = true,
    ellipsis = symbolEllipsis,
    headings = 0 /* Intact */,
    renderer = 0 /* Text */
  } = Astro2.props;
  let postExcerpt = "";
  if (!post || !isPriorV2(post) && !isV2(post)) {
    throw new TypeError("The required prop post is not valid, aborting now.");
  }
  if (typeof words !== "number" || words < 0) {
    words = 40;
    console.warn("The optional prop words is not valid, defaulting to 40.");
  }
  if (typeof maxLength !== "number" || maxLength < 0) {
    maxLength = 0;
    console.warn("The optional prop maxLength is not valid, defaulting to 0.");
  }
  if (typeof addEllipsis !== "boolean") {
    addEllipsis = true;
    console.warn("The optional prop addEllipsis is not valid, defaulting to true.");
  }
  if (typeof smartEllipsis !== "boolean") {
    smartEllipsis = true;
    console.warn("The optional prop smartEllipsis is not valid, defaulting to true.");
  }
  if (typeof ellipsis !== "string" || ellipsis.length < 1) {
    ellipsis = symbolEllipsis;
    console.warn('The optional prop ellipsis is not valid, defaulting to "\u2026".');
  }
  if (typeof headings !== "number" || !PropHeadings[headings]) {
    headings = 0 /* Intact */;
    console.warn('The optional prop headings is not valid, defaulting to "PropHeadings.Intact".');
  }
  if (typeof renderer !== "number" || !PropRenderer[renderer]) {
    renderer = 0 /* Text */;
    console.warn('The optional prop renderer is not valid, defaulting to "PropRenderer.Text".');
  }
  if (isV2(post)) {
    postExcerpt = post["body"];
  } else if (isPriorV2(post)) {
    post = post;
    if (renderer === 0 /* Text */) {
      postExcerpt = post.rawContent();
    } else {
      postExcerpt = post.compiledContent();
    }
  }
  if (isPriorV2(post)) {
    if (renderer === 0 /* Text */) {
      if (headings === 2 /* None */) {
        postExcerpt = stripHeadings(postExcerpt);
      } else if (headings === 1 /* TextOnly */) {
        postExcerpt = stripHeadingsCode(postExcerpt);
      }
    } else {
      if (headings === 2 /* None */) {
        postExcerpt = stripHeadings$1(postExcerpt);
      } else if (headings === 1 /* TextOnly */) {
        postExcerpt = stripHeadingsCode$1(postExcerpt);
      }
    }
    if (renderer === 2 /* Hybrid */) {
      postExcerpt = stripHtmlCode(postExcerpt);
    }
  } else {
    if (headings === 2 /* None */) {
      postExcerpt = stripHeadings(postExcerpt);
    } else if (headings === 1 /* TextOnly */) {
      postExcerpt = stripHeadingsCode(postExcerpt);
    }
  }
  postExcerpt = postExcerpt.trim();
  if (words > 0) {
    postExcerpt = postExcerpt.split(" ").slice(0, words).join(" ");
  }
  if (maxLength > 0) {
    postExcerpt = postExcerpt.substring(0, maxLength);
  }
  if (addEllipsis) {
    const postLength = postExcerpt.length;
    if (postLength > 0) {
      if (smartEllipsis) {
        const lastChar = postExcerpt.at(-1);
        if (lastChar && !punctuationSymbols.includes(lastChar)) {
          postExcerpt += ellipsis;
        }
      } else {
        postExcerpt += ellipsis;
      }
    }
  }
  return renderTemplate`${(renderer === 1 /* Html */ || renderer === 2 /* Hybrid */) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(postExcerpt)}` })}`}${renderer === 0 /* Text */ && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${postExcerpt}` })}`}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/node_modules/@igor.dvlpr/astro-post-excerpt/PostExcerpt.astro", void 0);

const $$Astro$2 = createAstro("https://xzstudios.se/stories");
const $$BlogPostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="post-preview__link fade-in"${addAttribute(post.url, "href")} data-astro-cid-mocbi3ka> <article class="post-preview__article" data-astro-cid-mocbi3ka> <!-- Hopefully we'll be able to use Astro's image integration for this soon --> <picture data-astro-cid-mocbi3ka>  <source${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-mocbi3ka>  <img class="post-preview__img"${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".png"}`, "src")}${addAttribute(`Featured image for ${post.frontmatter.title}`, "alt")} data-astro-cid-mocbi3ka> </picture> <div class="post-preview__text" data-astro-cid-mocbi3ka> <!-- {post.frontmatter?.category && <p class="post-preview__category">{post.frontmatter.category}</p>} --> <h2 style="padding:0;color: #1c1e21;" data-astro-cid-mocbi3ka>${post.frontmatter.title}</h2> <p class="post-excerpt" data-astro-cid-mocbi3ka> <!-- <PostExcerpt post={post} words={20} addEllipsis={false} /> --> ${renderComponent($$result, "PostExcerpt", $$PostExcerpt, { "post": post, "words": 30, "addEllipsis": true, "headings": PropHeadings.None, "renderer": PropRenderer.Text, "data-astro-cid-mocbi3ka": true })} </p> <p class="post-preview__date" data-astro-cid-mocbi3ka>${formatDate(post.frontmatter.publishedAt)}</p> <p class="post-content__content" data-astro-cid-mocbi3ka>${post.frontmatter.text}</p> </div> </article> </a> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/BlogPostPreview.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se/stories");
const $$BlogPostsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostsList;
  const { posts } = Astro2.props;
  const initialPostCount = 3;
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-2zbl4ika> ${posts.map((post, index) => renderTemplate`<li${addAttribute(post.url, "key")}${addAttribute(`post ${index >= initialPostCount ? "hidden" : ""}`, "class")} data-astro-cid-2zbl4ika> ${renderComponent($$result, "BlogPostPreview", $$BlogPostPreview, { "post": post, "data-astro-cid-2zbl4ika": true })} </li>`)} </ul> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/BlogPostsList.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se/stories");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../introducing-xz-studios.md": () => import('./introducing-xz-studios_Wo5Wwlcu.mjs')}), () => "../*.{mdx,md}");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  const allCategoriesUnique = /* @__PURE__ */ new Set();
  sortedPosts.forEach((post) => {
    if (post.frontmatter.category) {
      allCategoriesUnique.add(post.frontmatter.category);
    }
  });
  const allCategoriesData = generateCategoryData(allCategoriesUnique);
  return allCategoriesData.map((category) => {
    const posts = sortedPosts.filter((post) => post.frontmatter.category.includes(category.name));
    return {
      params: { slug: category.slug },
      props: {
        category: category.name,
        posts
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { category, posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-eiurjby3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-eiurjby3": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="home-hero-text__container" data-astro-cid-eiurjby3> <h1 data-astro-cid-eiurjby3>${category} Posts</h1> </div> ${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": posts, "data-astro-cid-eiurjby3": true })} ` })} ` })} `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories/category/[slug].astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories/category/[slug].astro";
const $$url = "/stories/category/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, _slug_ as _, $$Page as a, $$BlogPostsList as b, formatDate as f };
