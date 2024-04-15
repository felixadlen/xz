import i18next, { t, changeLanguage } from 'i18next';
import * as url2 from 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot, f as renderComponent, u as unescapeHTML, F as Fragment, s as spreadAttributes, h as renderHead } from '../astro_MM15vAtA.mjs';
import 'kleur/colors';
import 'cssesc';
import 'clsx';
import { f as formatDate, $ as $$ContactForm, a as $$Footer, b as $$MenuNav } from './_slug__d7stwgzo.mjs';
/* empty css                          */
import module2 from 'module';
import path2 from 'path';
import localeEmoji from 'locale-emoji';
import ISO6991 from 'iso-639-1';

const $$Astro$5 = createAstro("https://xzstudios.se");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${Astro2.props.bgColor}`, "class")} id="intro-hero"> <div class="highlightTextContainer"> <svg viewBox="0 0 1350 600"> <text x="50%" y="80%" fill="transparent" text-anchor="middle">xz studios</text> </svg> <h2 class="intro-subheader desktop" style="margin-top: 0.1rem;"> ${renderSlot($$result, $$slots["subheader"], renderTemplate`${t("home.title")}`)} <!-- <p style="margin-top: 0.5rem;font-weight: 200;font-size: 1.1rem;">Marketing & branding <span style="color: #c83c4e">–</span> Est. 2023 Malmö</p> --> </h2> <h2 class="intro-subheader mobile"> ${renderSlot($$result, $$slots["subheaderMobile"])} </h2> </div> </section>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://xzstudios.se");
const $$RecentPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RecentPost;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/stories/did-we-find-inspiration.md": () => import('./did-we-find-inspiration_7Cvon4Yw.mjs').then(n => n.d),"../pages/stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_YOJ56RIL.mjs')}), () => "../pages/stories/*.md");
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt));
  const recentPost = sortedPosts.length > 0 ? sortedPosts[0] : null;
  const title = recentPost ? recentPost.frontmatter.title : "No recent posts";
  const imageUrl = recentPost ? recentPost.frontmatter.image : "";
  const publishedAt = recentPost ? recentPost.frontmatter.publishedAt : "";
  const formattedDate = publishedAt ? formatDate(publishedAt) : "N/A";
  return renderTemplate`${maybeRenderHead()}<div class="recentPostContainer" data-astro-cid-3eccxmr7> <article class="recent-post" data-astro-cid-3eccxmr7> <a${addAttribute(recentPost.url, "href")} class="recent-post-link" data-astro-cid-3eccxmr7> <div class="recent-post-image-container" data-astro-cid-3eccxmr7> <picture data-astro-cid-3eccxmr7> <source${addAttribute(`${imageUrl.includes(".") ? imageUrl : imageUrl + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-3eccxmr7> <img${addAttribute(`${imageUrl.includes(".") ? imageUrl : imageUrl + ".png"}`, "src")}${addAttribute(`Featured image for ${title}`, "alt")} data-astro-cid-3eccxmr7> </picture> <!-- Overlay Text --> <!-- <div class="overlay-text"> --> </div> <div class="text-container" data-astro-cid-3eccxmr7> <p class="post-preview__date" data-astro-cid-3eccxmr7>${formattedDate}</p> <h2 class="recent-preview__title" data-astro-cid-3eccxmr7>${title}</h2> <a class="preview-link-cta"${addAttribute(recentPost.url, "href")} data-astro-cid-3eccxmr7>Go to latest post</a> </div> <!-- </div> --> </a> </article> </div> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RecentPost.astro", void 0);

const interpolate = (i18nKey, referenceString, namespace = null) => {
  const localizedString = t(i18nKey, { ns: namespace });
  if (localizedString === i18nKey) {
    console.warn(`WARNING(astro-i18next): missing translation key ${i18nKey}.`);
    return referenceString;
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = referenceString.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return localizedString;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let interpolatedString = localizedString;
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    interpolatedString = interpolatedString.replaceAll(
      `<${index}>`,
      `<${referencedTag.name}${referencedTag.attributes}>`
    );
    interpolatedString = interpolatedString.replaceAll(
      `</${index}>`,
      `</${referencedTag.name}>`
    );
  }
  return interpolatedString;
};
const createReferenceStringFromHTML = (html) => {
  const allowedTags = ["strong", "br", "em", "i", "b"];
  let forbiddenStrings = [];
  if (i18next.options) {
    forbiddenStrings = [
      "keySeparator",
      "nsSeparator",
      "pluralSeparator",
      "contextSeparator"
    ].map((key) => {
      return {
        key,
        str: i18next.options[key]
      };
    }).filter(function(val) {
      return typeof val !== "undefined";
    });
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = html.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return html;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let sanitizedString = html.replace(/\s+/g, " ").trim();
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    if (allowedTags.includes(referencedTag.name) && referencedTag.attributes.trim().length === 0) {
      continue;
    }
    sanitizedString = sanitizedString.replaceAll(
      new RegExp(`<${referencedTag.name}[^>]*?\\s*\\/>`, "gi"),
      `<${index}/>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `<${referencedTag.name}${referencedTag.attributes}>`,
      `<${index}>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `</${referencedTag.name}>`,
      `</${index}>`
    );
  }
  for (let index = 0; index < forbiddenStrings.length; index++) {
    const { key, str } = forbiddenStrings[index];
    if (sanitizedString.includes(str)) {
      console.warn(
        `WARNING(astro-i18next): "${str}" was found in a <Trans> translation key, but it is also used as ${key}. Either explicitly set an i18nKey or change the value of ${key}.`
      );
    }
  }
  return sanitizedString;
};

const $$Astro$3 = createAstro("https://xzstudios.se");
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Trans;
  const { i18nKey, ns } = Astro2.props;
  const referenceString = await Astro2.slots.render("default");
  let key;
  if (typeof i18nKey === "string") {
    key = i18nKey;
  } else {
    key = createReferenceStringFromHTML(referenceString);
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(interpolate(key, referenceString, ns))}` })}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/node_modules/astro-i18next/src/components/Trans.astro", void 0);

module2.createRequire(import.meta.url);
const __filename = url2.fileURLToPath(import.meta.url);
path2.dirname(__filename);
var g = { config: { defaultLocale: "cimode", locales: [], namespaces: "translation", defaultNamespace: "translation", load: ["server"], routes: {}, flatRoutes: {}, showDefaultLocale: false, trailingSlash: "ignore", resourcesBasePath: "/locales" } };
var m = (e, r) => {
  if (e === "/")
    return e;
  switch (r) {
    case "always":
      return e.endsWith("/") ? e : e + "/";
    case "never":
      return e.replace(/\/$/, "");
    default:
      return e;
  }
}, P = (e = "/", r = null, n = "/") => {
  r || (r = i18next.language);
  let s = e.split("/").filter((f) => f !== ""), o = n.split("/").filter((f) => f !== "");
  JSON.stringify(s).startsWith(JSON.stringify(o).replace(/]+$/, "")) && s.splice(0, o.length), e = s.length === 0 ? "" : s.join("/"), n = o.length === 0 ? "/" : "/" + o.join("/") + "/";
  let { flatRoutes: t, showDefaultLocale: l, defaultLocale: i, locales: a, trailingSlash: c } = g.config;
  if (!a.includes(r))
    return console.warn(`WARNING(astro-i18next): "${r}" locale is not supported, add it to the locales in your astro config.`), m(`${n}${e}`, c);
  if (s.length === 0)
    return m(l ? `${n}${r}` : r === i ? n : `${n}${r}`, c);
  if (r === i) {
    let f = Object.keys(t).find((d) => t[d] === "/" + e);
    typeof f < "u" && (s = f.split("/").filter((d) => d !== ""));
  }
  for (let f of a)
    if (s[0] === f) {
      s.shift();
      break;
    }
  (l || r !== i) && (s = [r, ...s]);
  let u = n + s.join("/");
  return Object.prototype.hasOwnProperty.call(t, u.replace(/\/$/, "")) ? m(t[u.replace(/\/$/, "")], c) : m(u, c);
}, T = (e, r = null, n = "/") => {
  let [s, , o, ...t] = e.split("/");
  return s + "//" + o + P(t.join("/"), r, n);
};

const $$Astro$2 = createAstro("https://xzstudios.se");
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const supportedLanguages = i18next.languages;
  const currentLanguage = i18next.language;
  const { pathname } = Astro2.url;
  const { showFlag = false, languageMapping, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<select onchange="location = this.value;"${spreadAttributes(attributes)}> ${supportedLanguages.map((supportedLanguage) => {
    let value = P(pathname, supportedLanguage);
    const flag = showFlag ? localeEmoji(supportedLanguage) + " " : "";
    let nativeName = "";
    if (languageMapping && languageMapping.hasOwnProperty(supportedLanguage)) {
      nativeName = languageMapping[supportedLanguage];
    } else {
      nativeName = ISO6991.getNativeName(supportedLanguage);
    }
    const label = flag + nativeName;
    return renderTemplate`<option${addAttribute(value, "value")}${addAttribute(supportedLanguage === currentLanguage, "selected")}> ${label} </option>`;
  })} </select>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/node_modules/astro-i18next/src/components/LanguageSelector.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se");
const $$HeadHrefLangs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeadHrefLangs;
  const supportedLanguages = i18next.languages;
  const currentUrl = Astro2.url.href;
  return renderTemplate`${supportedLanguages.map((supportedLanguage) => renderTemplate`<link rel="alternate"${addAttribute(supportedLanguage, "hreflang")}${addAttribute(T(currentUrl, supportedLanguage), "href")}>`)}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/node_modules/astro-i18next/src/components/HeadHrefLangs.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xzstudios.se");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  changeLanguage("en");
  return renderTemplate(_a || (_a = __template(["<html", ' data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>XZ STUDIOS | Building brands & fans in Malm\xF6</title><meta name="title" content="XZ STUDIOS | Building brands & fans in Malm\xF6"><meta name="description" content="We help small businesses make big impressions. A Malm\xF6 based studio for building brands through strategy, marketing and design."><link rel="stylesheet" href="/main.css"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><link rel="stylesheet" href="//use.fontawesome.com/releases/v6.5.0/css/all.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="icon" type="image/x-icon" href="/img/favicon/favicon.ico"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script><script type="text/javascript">\n      // Clarity\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "jovcl27t8k");\n    <\/script>', "", '</head> <body data-astro-cid-j7pv25f6> <div class="notification-menu" data-astro-cid-j7pv25f6>1</div> ', " ", ' <section id="introduction" data-astro-cid-j7pv25f6> <div class="intro-container" data-astro-cid-j7pv25f6> <h2 class="embraceText" data-astro-cid-j7pv25f6>', `</h2> <p class="embrace-answer hidden" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>See what you did?</strong> Your curiosity led you to explore
          what lay behind that button. That very curiosity is the heartbeat of
          XZ. We thrive in embracing the unknown to create new marketing
          experiences.
</p> <p class="embrace-answer2 hidden" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Think about it:</strong> Google wasn't the first search
          engine. And Facebook was just another social platform. But they were
          both pushing past comfort zones and naysayers to shape something
          different. Remember, The Beatles were initially rejected by many
          record labels with critiques that they had no future in show business.
<br data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6> <br data-astro-cid-j7pv25f6>
Each story, a testament of persistence. We encourage that.</strong> </p> <button class="btn-outline-white hidden" id="tellMoreButton" data-astro-cid-j7pv25f6>
Tell me more
</button> <button class="btn-outline-white" id="embraceButton" data-astro-cid-j7pv25f6>Try this</button> </div> </section> <section id="introduction-about" data-astro-cid-j7pv25f6> <div class="textvideo-container" data-astro-cid-j7pv25f6> <div class="left-split-text" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>`, " </h2> <p data-astro-cid-j7pv25f6> ", ` </p> <a href="/about/" class="btn-red" data-astro-cid-j7pv25f6>We are XZ</a> </div> <div class="right-split-video" data-astro-cid-j7pv25f6> <video src="/video/xz-video2.mp4" width="100%" height="100%" loop autoplay muted playsinline data-astro-cid-j7pv25f6></video> </div> </div></section> <section class="services-spec" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>we do</h2> <div class="four-columns" data-astro-cid-j7pv25f6> <div class="column-item top-column" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Brand concepts</h3> <p data-astro-cid-j7pv25f6>
Well-grounded strategies, stunning visuals, and strong storytelling are essential for strong brands. Together, we will ensure that your brand resonates with both you and the audience. </p></div> <div class="column-item top-column" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Ads & Campaigns</h3> <p data-astro-cid-j7pv25f6>
To get more out of advertising, your campaigns need to have a clear goal. Whether it's gaining brand awareness or more leads, we support you with ideas, knowledge, and production.
</p> </div> <div class="column-item" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Strategic Marketing</h3> <p data-astro-cid-j7pv25f6>
What should you communicate, where, and how? By pinpointing beneficial actions we produce the right content and strategy for you \u2013 from social media, SEO, articles to custom websites. </p> </div> <div class="column-item" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Graphic Design</h3> <p data-astro-cid-j7pv25f6>
Design is more than just aesthetics \u2013 it's about communication. We care about things like pixels, fonts, and colors, designing everything from presentations and illustrations, to full websites.
</p> </div> </div> <div class="button-center" data-astro-cid-j7pv25f6> <a href="/services/" class="btn-red" data-astro-cid-j7pv25f6>Here we explain more</a> </div> </section> <section id="home-hero-two" data-astro-cid-j7pv25f6> <div id="tilt-card" data-astro-cid-j7pv25f6> <img src="/img/red-smiley-happy.svg" class="smile" alt="red happy smiley" data-astro-cid-j7pv25f6> </div> <div class="header-welike" data-astro-cid-j7pv25f6> <h2 id="h2SadSmiley" class="desktop" data-astro-cid-j7pv25f6>
We like to make good<br data-astro-cid-j7pv25f6>
things to good people.
</h2> <h2 id="h2SadSmileyMobile" class="mobile" data-astro-cid-j7pv25f6>
We like to make<br data-astro-cid-j7pv25f6> good
          things to good people.
</h2> <h2 id="h2Smiley" class="hidden desktop" data-astro-cid-j7pv25f6>
We like to make good<br data-astro-cid-j7pv25f6>
things to sad people too.
</h2> <h2 id="h2SmileyMobile" class="hidden mobile" data-astro-cid-j7pv25f6>
We like to make<br data-astro-cid-j7pv25f6>good
          things to sad people too.
</h2> </div> <div class="customers-container" data-astro-cid-j7pv25f6> <div class="customers-wrapper" data-astro-cid-j7pv25f6> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://www.eseco.se" target="_blank" data-astro-cid-j7pv25f6> <img src="/img/clients/partners_loggor_eseco_svart.webp" alt="logotype of Eseco" data-astro-cid-j7pv25f6> </a> </div> <div class="client-logo" data-astro-cid-j7pv25f6> <a href="https://adlen.nu" target="_blank" data-astro-cid-j7pv25f6> <img src="/img/clients/partners_loggor-10.webp" alt="logotype of G\xF6ran Adl\xE9n" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://ne.se" target="_blank" data-astro-cid-j7pv25f6> <img src="/img/clients/partners_loggor-07.webp" alt="Logotype of NE" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://equitours.se" target="_blank" data-astro-cid-j7pv25f6> <img src="/img/clients/partners_loggor-06.webp" alt="Logotype of Equi Tours" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://thelabrats.se" target="_blank" data-astro-cid-j7pv25f6> <img src="/img/clients/labrats_logo.webp" alt="Logotype of The Lab Rats" data-astro-cid-j7pv25f6></a> </div> </div> </div> </section> <section id="blog3-preview" data-astro-cid-j7pv25f6> <div class="blogcontainerThree" data-astro-cid-j7pv25f6> <div class="text-container" data-astro-cid-j7pv25f6> <h2 class="white" data-astro-cid-j7pv25f6>experiences<br data-astro-cid-j7pv25f6>creates stories</h2> <p class="white-color" data-astro-cid-j7pv25f6>Here are our marketing insights and
            random reflections you won't get anywhere else.
</p> <a class="btn-red" href="/stories/" data-astro-cid-j7pv25f6>Discover stories</a> </div> </div> `, ` </section> <section id="ending" data-astro-cid-j7pv25f6> <!-- <video src="video/compr-Flying_Over_White_Clouds_fhd - 02.mp4" loop autoplay muted></video> --> <div class="endnote" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>
If you've come all the way to the page bottom, we clearly have
            something in common.
</h3> <p data-astro-cid-j7pv25f6>
And that might be a good reason for us to get to know eachother.
<a class="btnOpenForm" data-astro-cid-j7pv25f6>Say hi</a> or if you want to follow our
            journey \u2013 subscribe to our updates. For each new subscriber we must
            celebrate with a beer.
</p> <div class="klaviyo-form-UuHhsQ desktop" data-astro-cid-j7pv25f6></div> <div class="klaviyo-form-Wbf2n2 mobile" data-astro-cid-j7pv25f6></div> </div> </section>  <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Y6DGXR"><\/script> `, " ", ' <script src="/script.js"><\/script> </body> </html>'])), addAttribute(i18next.language, "lang"), renderComponent($$result, "HeadHrefLangs", $$HeadHrefLangs, { "data-astro-cid-j7pv25f6": true }), renderHead(), renderComponent($$result, "MenuNav", $$MenuNav, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Hero", $$Hero, { "bgColor": "white-bg", "data-astro-cid-j7pv25f6": true }, { "subheader": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>We help small businesses make big impressions</span>`, "subheader2": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>Marketing</span>`, "subheaderMobile": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>We help small businesses <br data-astro-cid-j7pv25f6> make big jespersons</span>` }), t("home.embracetext"), t("home.about-xz-header"), t("home.about-xz-text"), renderComponent($$result, "RecentPost", $$RecentPost, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-j7pv25f6": true }));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/index.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
