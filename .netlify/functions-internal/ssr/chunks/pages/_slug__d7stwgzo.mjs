import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead, u as unescapeHTML, F as Fragment } from '../astro_MM15vAtA.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { changeLanguage } from 'i18next';
/* empty css                                            */
import { stripHeadings, stripHeadingsCode } from '@igor.dvlpr/strip-headings';
import { stripHtmlCode } from '@igor.dvlpr/strip-html';
import { stripHeadings as stripHeadings$1, stripHeadingsCode as stripHeadingsCode$1 } from '@igor.dvlpr/strip-html-headings';
/* empty css                            */
/* empty css                           */

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$b = createAstro("https://xzstudios.se");
const $$MenuNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuNav;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<link rel="stylesheet" href="/sass/components/menu.css">', '<div class="menu-box-overlay"></div> <header> <div class="small-logo"> <a href="/"> <img src="/img/xz-logo-white.svg" width="45px" height="auto" alt=""> </a> </div> </header> <nav id="menu-nav"> <a href="#menu" id="menu-icon"> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> </a> </nav> <div id="menu-box" class="menu-box"> <ul class="menu-ul"> <li class="menu-object"><a href="../">home</a></li> <li class="menu-object"><a href="../about">we are xz</a></li> <li class="menu-object"> <a href="../services">what we do</a> </li> <li class="menu-object"> <a href="../stories">our stories <span class="new-post">NEW</span></a> </li> </ul> <div class="contact-logo-container"> <a class="btn-outline-white btnOpenForm" style="margin-top: 10rem;">Contact us</a> </div> <div class="social-logo-mobilemenu desktop"> <a href="https://www.linkedin.com/company/xz-studios" target="_blank"> <svg fill="#f3f4edc0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 512 512" xml:space="preserve" stroke="#f3f4edc0" stroke-width="0.00512" style="margin-top: -4px;"><g id="SVGRepo_bgCarrier" stroke-#ffffffidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#f3f4edc0" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path class="linkedin" style="display: inline; fill-rule: evenodd; clip-rule: evenodd;" d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path> </g> </g></svg></a> <a href="https://www.instagram.com/xzstudios.se" target="_blank"> <svg fill="#f3f4edc0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 50 50"> <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path> </svg> </a> </div> </div> <script src="/js/menu-script.js"><\/script>'])), maybeRenderHead());
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/MenuNav.astro", void 0);

const $$Astro$a = createAstro("https://xzstudios.se");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<link rel="stylesheet" href="/sass/components/footer.css">${maybeRenderHead()}<div id="footer-container"> <div class="footer-left"> <img src="../img/xz-logo-white.svg" alt=""> </div> <div class="footer-middle"><a class="btnOpenForm footer-button">say hello</a> <a href="mailto:hey@xzstudios.se?subject=HEY XZ! 👋">hey@xzstudios.se</a> </div> <div class="footer-right"> <a href="https://www.linkedin.com/company/xz-studios" target="_blank"> <svg fill="#f3f4edc0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 512 512" xml:space="preserve" stroke="#f3f4edc0" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-#ffffffidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#f3f4edc0" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path class="linkedin" style="display: inline; fill-rule: evenodd; clip-rule: evenodd;" d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path> </g> </g></svg></a> <a href="https://www.instagram.com/xzstudios.se" target="_blank"> <svg fill="#f3f4edc0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 50 50"> <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path> </svg> </a> </div> </div> <div id="footer-strip"> <div> <a href="/integrity/">Cookies & integrity</a> </div> <div><span>XZ STUDIOS AB &nbsp;© 2024&nbsp;|&nbsp; S:t Knuts Torg 6, 211 57 Malmö &nbsp;|&nbsp; Org.nr: 559445-1394</span></div> </div>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Footer.astro", void 0);

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

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro("https://xzstudios.se");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<link rel="stylesheet" href="/sass/components/contact-form.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="stylesheet" href="/sass/abstracts/buttons.css">', '<div id="contactForm" class="form-popup-bg hidden"> <div class="form-container"> <button class="btnCloseForm close-button"><span class="material-symbols-rounded">\nclose\n</span></button> <h3>Contact us</h3> <p>Maybe our friendship started with just a "hello".</p> <form method="POST" id="form"> <input type="hidden" name="access_key" value="6fd91bf0-12eb-49fc-9d5b-d6fd3ab684b5"> <input type="hidden" name="subject" value="New message from ContactForm"> <input type="checkbox" name="botcheck" id="" style="display: none;"> <div class="form-group"> <input type="text" name="name" required class="form-control" placeholder="Your name"> </div> <div class="form-group"> <input type="email" name="email" required class="form-control" placeholder="e.g. john@doe.se"> </div> <div class="form-group"> <textarea name="message" required class="form-control" placeholder="Your message or rhyme" style="padding-top: 2%;height: 200px;"></textarea> </div> <!-- <div class="h-captcha" data-captcha="true"></div> --> <button id="sendNowBtn" type="submit" class="btn-outline-black">Send now</button> <div class="load"> <div class="progress"></div> <div class="progress"></div> <div class="progress"></div> </div> <div id="result"></div> </form> <p id="thankYouMessage" class="hidden"></p> </div> <script src="/js/contact-form.js"><\/script></div>'])), maybeRenderHead());
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/ContactForm.astro", void 0);

const settings = {
  site: "https://xzstudios.se",
  name: "XZ STUDIOS",
  title: "STORIES",
  description: "Site description"
};

const $$Astro$8 = createAstro("https://xzstudios.se");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const title = Astro2.props.title || settings.title;
  const description = Astro2.props.description || settings.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "./social.png", Astro2.site);
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><!-- Favicon --><link rel="icon" type="image/svg" href="/favicon.svg"><!-- Primary Meta Tags --><title>${title || settings.title}</title><meta name="title"${addAttribute(title || settings.title, "content")}><meta name="description"${addAttribute(description || settings.description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- settingsmap --><link rel="sitemap" href="/sitemap.xml"><!-- RSS --><link rel="alternate" type="application/rss+xml"${addAttribute(`${settings.name} Blog`, "title")}${addAttribute(`${settings.url}/feed/blog.xml`, "href")}><!-- Canonical --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style" onload="this.onload=null;this.rel='stylesheet'">${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css"></noscript><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" type="text/css"></noscript><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css">`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/BaseHead.astro", void 0);

const $$Astro$7 = createAstro("https://xzstudios.se");
const $$CreateCopyCodeButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CreateCopyCodeButtons;
  return renderTemplate``;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/CodeButtons/CreateCopyCodeButtons.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://xzstudios.se");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Base;
  const { seo } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '<!-- <link rel="stylesheet" href="/sass/abstracts/buttons.css"> --><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"><script type="text/javascript">\n        // Clarity\n        (function (c, l, a, r, i, t, y) {\n          c[a] =\n            c[a] ||\n            function () {\n              (c[a].q = c[a].q || []).push(arguments);\n            };\n          t = l.createElement(r);\n          t.async = 1;\n          t.src = "https://www.clarity.ms/tag/" + i;\n          y = l.getElementsByTagName(r)[0];\n          y.parentNode.insertBefore(t, y);\n        })(window, document, "clarity", "script", "jovcl27t8k");\n      <\/script><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script>', "</head> <body> ", ' <main class="flow"> ', " </main> ", " ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { ...seo }), renderComponent($$result, "CreateCopyCodeButtons", $$CreateCopyCodeButtons, {}), renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderComponent($$result, "ContactForm", $$ContactForm, {}));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/layouts/Base.astro", void 0);

const $$Astro$5 = createAstro("https://xzstudios.se");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Page;
  const { seo } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "MenuNav", $$MenuNav, { "slot": "header" })}` })}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/layouts/Page.astro", void 0);

const $$Astro$4 = createAstro("https://xzstudios.se");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-d6puh33w> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Container.astro", void 0);

const $$Astro$3 = createAstro("https://xzstudios.se");
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

const $$Astro$2 = createAstro("https://xzstudios.se");
const $$BlogPostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="post-preview__link fade-in"${addAttribute(post.url, "href")} data-astro-cid-mocbi3ka> <article class="post-preview__article" data-astro-cid-mocbi3ka> <!-- Hopefully we'll be able to use Astro's image integration for this soon --> <picture data-astro-cid-mocbi3ka>  <source${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-mocbi3ka>  <img class="post-preview__img"${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".png"}`, "src")}${addAttribute(`Featured image for ${post.frontmatter.title}`, "alt")} data-astro-cid-mocbi3ka> </picture> <div class="post-preview__text" data-astro-cid-mocbi3ka> <!-- {post.frontmatter?.category && <p class="post-preview__category">{post.frontmatter.category}</p>} --> <h2 style="padding:0;color: #1c1e21;" data-astro-cid-mocbi3ka>${post.frontmatter.title}</h2> <p class="post-excerpt" data-astro-cid-mocbi3ka> <!-- <PostExcerpt post={post} words={20} addEllipsis={false} /> --> ${renderComponent($$result, "PostExcerpt", $$PostExcerpt, { "post": post, "words": 30, "addEllipsis": true, "headings": PropHeadings.None, "renderer": PropRenderer.Hybrid, "data-astro-cid-mocbi3ka": true })} </p> <p class="post-preview__date" data-astro-cid-mocbi3ka>${formatDate(post.frontmatter.publishedAt)}</p> <p class="post-content__content" data-astro-cid-mocbi3ka>${post.frontmatter.text}</p> </div> </article> </a> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/BlogPostPreview.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se");
const $$BlogPostsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostsList;
  const { posts } = Astro2.props;
  const initialPostCount = 3;
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-2zbl4ika> ${posts.map((post, index) => renderTemplate`<li${addAttribute(post.url, "key")}${addAttribute(`post ${index >= initialPostCount ? "hidden" : ""}`, "class")} data-astro-cid-2zbl4ika> ${renderComponent($$result, "BlogPostPreview", $$BlogPostPreview, { "post": post, "data-astro-cid-2zbl4ika": true })} </li>`)} </ul> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/BlogPostsList.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../did-we-find-inspiration.md": () => import('./did-we-find-inspiration_7Cvon4Yw.mjs').then(n => n.d),"../introducing-xz-studios.md": () => import('./introducing-xz-studios_YOJ56RIL.mjs')}), () => "../*.{mdx,md}");
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
  changeLanguage("en");
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

export { $$ContactForm as $, _slug_ as _, $$Footer as a, $$MenuNav as b, $$Container as c, $$Page as d, $$BlogPostsList as e, formatDate as f };
