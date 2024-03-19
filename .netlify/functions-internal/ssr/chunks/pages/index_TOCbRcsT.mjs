import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot, f as renderComponent, h as renderHead } from '../astro_MM15vAtA.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { f as formatDate, $ as $$ContactForm, a as $$Footer, b as $$MenuNav } from './_slug__1TBfXjIV.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$3 = createAstro("https://xzstudios.se/stories");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${Astro2.props.bgColor}`, "class")} id="intro-hero"> <div class="highlightTextContainer"> <svg viewBox="0 0 1350 600"> <text x="50%" y="80%" fill="transparent" text-anchor="middle">xz studios</text> </svg> <h2 class="intro-subheader desktop" style="margin-top: 0.1rem;"> ${renderSlot($$result, $$slots["subheader"])} <!-- <p style="margin-top: 0.5rem;font-weight: 200;font-size: 1.1rem;">Marketing & branding <span style="color: #c83c4e">–</span> Est. 2023 Malmö</p> --> </h2> <h2 class="intro-subheader mobile"> ${renderSlot($$result, $$slots["subheaderMobile"])} </h2> </div> </section>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://xzstudios.se/stories");
const $$RecentPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RecentPost;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_Qf7BrC2i.mjs')}), () => "../pages/stories/*.md");
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt));
  const recentPost = sortedPosts.length > 0 ? sortedPosts[0] : null;
  const title = recentPost ? recentPost.frontmatter.title : "No recent posts";
  const imageUrl = recentPost ? recentPost.frontmatter.image : "";
  const publishedAt = recentPost ? recentPost.frontmatter.publishedAt : "";
  const formattedDate = publishedAt ? formatDate(publishedAt) : "N/A";
  return renderTemplate`${maybeRenderHead()}<div class="recentPostContainer" data-astro-cid-3eccxmr7> <article class="recent-post" data-astro-cid-3eccxmr7> <a${addAttribute(recentPost.url, "href")} class="recent-post-link" data-astro-cid-3eccxmr7> <div class="recent-post-image-container" data-astro-cid-3eccxmr7> <picture data-astro-cid-3eccxmr7> <source${addAttribute(`${imageUrl.includes(".") ? imageUrl : imageUrl + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-3eccxmr7> <img${addAttribute(`${imageUrl.includes(".") ? imageUrl : imageUrl + ".png"}`, "src")}${addAttribute(`Featured image for ${title}`, "alt")} data-astro-cid-3eccxmr7> </picture> <!-- Overlay Text --> <!-- <div class="overlay-text"> --> </div> <div class="text-container" data-astro-cid-3eccxmr7> <p class="post-preview__date" data-astro-cid-3eccxmr7>${formattedDate}</p> <h2 class="recent-preview__title" data-astro-cid-3eccxmr7>${title}</h2> <a class="preview-link-cta"${addAttribute(recentPost.url, "href")} data-astro-cid-3eccxmr7>Go to latest post</a> </div> <!-- </div> --> </a> </article> </div> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RecentPost.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://xzstudios.se/stories");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>XZ STUDIOS</title><meta name="title" content="XZ STUDIOS | Marketing & branding studio"><meta name="description" content="We help small businesses make big impressions. A Malm\xF6 based studio for building brands through strategy, marketing and design."><link rel="stylesheet" href="main.css"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><link rel="stylesheet" href="//use.fontawesome.com/releases/v6.5.0/css/all.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="icon" type="image/x-icon" href="/img/favicon/favicon.ico"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script><script type="text/javascript">\n      // Clarity\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "jovcl27t8k");\n    <\/script>', '</head> <body data-astro-cid-j7pv25f6> <div class="notification-menu" data-astro-cid-j7pv25f6>1</div> ', " ", ` <section id="introduction" data-astro-cid-j7pv25f6> <div class="intro-container" data-astro-cid-j7pv25f6> <h2 class="embraceText" data-astro-cid-j7pv25f6>hello</h2> <p class="embrace-answer hidden" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>See what you did?</strong> Your curiosity led you to explore
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
</button> <button class="btn-outline-white" id="embraceButton" data-astro-cid-j7pv25f6>Try this</button> </div> </section> <section id="introduction-about" data-astro-cid-j7pv25f6> <div class="textvideo-container" data-astro-cid-j7pv25f6> <div class="left-split-text" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>
a malm\xF6 studio building brands </h2> <p data-astro-cid-j7pv25f6>
We help small businesses with marketing and branding to create something new and different. 
          With our base in Malm\xF6, we use the world as our inspiration to explore new ideas. Your brand should not just be seen, but remembered.
</p> <a href="/about/" class="btn-red" data-astro-cid-j7pv25f6>We are XZ</a> </div> <div class="right-split-video" data-astro-cid-j7pv25f6> <video src="video/xz-video2.mp4" width="100%" height="100%" loop autoplay muted playsinline data-astro-cid-j7pv25f6></video> </div> </div> </section> <section class="services-spec" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>we do</h2> <div class="four-columns" data-astro-cid-j7pv25f6> <div class="column-item top-column" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Brand concepts</h3> <p data-astro-cid-j7pv25f6>
Well-grounded strategies, stunning visuals, and strong storytelling are essential for strong brands. Together, we will ensure that your brand resonates with both you and the audience. </p></div> <div class="column-item top-column" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Ads & Campaigns</h3> <p data-astro-cid-j7pv25f6>
To get more out of advertising, your campaigns need to have a clear goal. Whether it's gaining brand awareness or more leads, we support you with ideas, knowledge, and production.
</p> </div> <div class="column-item" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Strategic Marketing</h3> <p data-astro-cid-j7pv25f6>
What should you communicate, where, and how? By pinpointing beneficial actions we produce the right content and strategy for you \u2013 from social media, SEO, articles to custom websites. </p> </div> <div class="column-item" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Graphic Design</h3> <p data-astro-cid-j7pv25f6>
Design is more than just aesthetics \u2013 it's about communication. We care about things like pixels, fonts, and colors, designing everything from presentations and illustrations, to full websites.
</p> </div> </div> <div class="button-center" data-astro-cid-j7pv25f6> <a href="/services/" class="btn-red" data-astro-cid-j7pv25f6>Here we explain more</a> </div> </section> <section id="home-hero-two" data-astro-cid-j7pv25f6> <div id="tilt-card" data-astro-cid-j7pv25f6> <img src="/img/red-smiley-happy.svg" class="smile" alt="" data-astro-cid-j7pv25f6> </div> <div class="header-welike" data-astro-cid-j7pv25f6> <h2 id="h2SadSmiley" class="desktop" data-astro-cid-j7pv25f6>
We like to make good<br data-astro-cid-j7pv25f6>
things to good people.
</h2> <h2 id="h2SadSmileyMobile" class="mobile" data-astro-cid-j7pv25f6>
We like to make<br data-astro-cid-j7pv25f6> good
          things to good people.
</h2> <h2 id="h2Smiley" class="hidden" data-astro-cid-j7pv25f6>
We like to make good<br data-astro-cid-j7pv25f6>
things to sad people too.
</h2> </div> <div class="customers-container" data-astro-cid-j7pv25f6> <div class="customers-wrapper" data-astro-cid-j7pv25f6> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://www.eseco.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor_eseco_svart.png" alt="" data-astro-cid-j7pv25f6> </a> </div> <div class="client-logo" data-astro-cid-j7pv25f6> <a href="https://adlen.nu" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor-10.png" alt="" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://ne.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor-07.png" alt="" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://equitours.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor-06.png" alt="" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://thelabrats.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/labrats_logo.png" alt="" data-astro-cid-j7pv25f6></a> </div> </div> </div> </section> <section id="blog3-preview" data-astro-cid-j7pv25f6> <div class="blogcontainerThree" data-astro-cid-j7pv25f6> <div class="text-container" data-astro-cid-j7pv25f6> <h2 class="white" data-astro-cid-j7pv25f6>experiences<br data-astro-cid-j7pv25f6>creates stories</h2> <p class="white-color" data-astro-cid-j7pv25f6>Here are our marketing insights and
            random reflections you won't get anywhere else.
</p> <a class="btn-red" href="/stories/" data-astro-cid-j7pv25f6>Discover stories</a> </div> </div> `, ` </section> <section id="ending" data-astro-cid-j7pv25f6> <!-- <video src="video/compr-Flying_Over_White_Clouds_fhd - 02.mp4" loop autoplay muted></video> --> <div class="endnote" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>
If you've come all the way to the page bottom, we clearly have
            something in common.
</h3> <p data-astro-cid-j7pv25f6>
And that might be a good reason for us to get to know eachother.
<a class="btnOpenForm" data-astro-cid-j7pv25f6>Say hi</a> or if you want to follow our
            journey \u2013 subscribe to our updates. For each new subscriber we must
            celebrate with a beer.
</p> <div class="klaviyo-form-UuHhsQ desktop" data-astro-cid-j7pv25f6></div> <div class="klaviyo-form-Wbf2n2 mobile" data-astro-cid-j7pv25f6></div> </div> </section>  <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Y6DGXR"><\/script> `, " ", ' <script src="/script.js"><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "MenuNav", $$MenuNav, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Hero", $$Hero, { "bgColor": "white-bg", "data-astro-cid-j7pv25f6": true }, { "subheader": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>We help small businesses make big impressions</span>`, "subheader2": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>Marketing</span>`, "subheaderMobile": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>We help small businesses <br data-astro-cid-j7pv25f6> make big impressions</span>` }), renderComponent($$result, "RecentPost", $$RecentPost, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-j7pv25f6": true }));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/index.astro", void 0);

const $$file$1 = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xzstudios.se/stories");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-hmvnqgfe> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>XZ STUDIOS</title><link rel="stylesheet" href="main.css"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"><link rel="stylesheet" href="//use.fontawesome.com/releases/v6.5.0/css/all.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="icon" type="image/x-icon" href="/img/favicon/favicon.ico"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script><script type="text/javascript">\n      // Clarity\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "jovcl27t8k");\n    <\/script>', '</head> <body data-astro-cid-hmvnqgfe> <div class="notification-menu" data-astro-cid-hmvnqgfe>1</div> <!-- MENYN H\xC4MTAS VIA JS --> <div id="master-menu" data-astro-cid-hmvnqgfe></div> ', ` <section id="introduction" data-astro-cid-hmvnqgfe> <div class="intro-container" data-astro-cid-hmvnqgfe> <h2 class="embraceText" data-astro-cid-hmvnqgfe>svenska</h2> <p class="embrace-answer hidden" data-astro-cid-hmvnqgfe> <strong data-astro-cid-hmvnqgfe>See what you did?</strong> Your curiosity led you to explore
          what lay behind that button. That very curiosity is the heartbeat of
          XZ. We thrive in embracing the unknown to create new marketing
          experiences.
</p> <p class="embrace-answer2 hidden" data-astro-cid-hmvnqgfe> <strong data-astro-cid-hmvnqgfe>Think about it:</strong> Google wasn't the first search
          engine. And Facebook was just another social platform. But they were
          both pushing past comfort zones and naysayers to shape something
          different. Remember, The Beatles were initially rejected by many
          record labels with critiques that they had no future in show business.
<br data-astro-cid-hmvnqgfe><strong data-astro-cid-hmvnqgfe> <br data-astro-cid-hmvnqgfe>
Each story, a testament of persistence. We encourage that.</strong> </p> <button class="btn-outline-white hidden" id="tellMoreButton" data-astro-cid-hmvnqgfe>
Tell me more
</button> <button class="btn-outline-white" id="embraceButton" data-astro-cid-hmvnqgfe>Try this</button> </div> </section> <section id="introduction-about" data-astro-cid-hmvnqgfe> <div class="textvideo-container" data-astro-cid-hmvnqgfe> <div class="left-split-text" data-astro-cid-hmvnqgfe> <h2 data-astro-cid-hmvnqgfe>
a malm\xF6 studio for building brands </h2> <p data-astro-cid-hmvnqgfe>
We help small businesses with marketing and branding to create something new and different. 
          With our base in Malm\xF6, we use the world as our inspiration to explore new ideas. Your brand should not just be seen, but remembered.
</p> <a href="/about/" class="btn-red" data-astro-cid-hmvnqgfe>We are XZ</a> </div> <div class="right-split-video" data-astro-cid-hmvnqgfe> <video src="video/xz-video2.mp4" width="100%" height="100%" loop autoplay muted playsinline data-astro-cid-hmvnqgfe></video> </div> </div> </section> <section class="services-spec" data-astro-cid-hmvnqgfe> <h2 class="testh2" data-astro-cid-hmvnqgfe>we do</h2> <!-- <p class="white">
        solo business owner who needs some action on your social media, or a
        startup who needs some good looking landing pages for your first
        campaign?
      </p> --> <div class="four-columns" data-astro-cid-hmvnqgfe> <div class="column-item top-column" data-astro-cid-hmvnqgfe> <h3 data-astro-cid-hmvnqgfe>Brand concepts</h3> <p data-astro-cid-hmvnqgfe>
Well-grounded strategies, stunning visuals, and strong storytelling are essential for strong brands. Together, we will ensure that your brand resonates with both you and the audience. </p></div> <div class="column-item top-column" data-astro-cid-hmvnqgfe> <h3 data-astro-cid-hmvnqgfe>Ads & Campaigns</h3> <p data-astro-cid-hmvnqgfe>
To get more out of advertising, your campaigns need to have a clear goal. Whether it's gaining brand awareness or more leads, we support you with ideas, knowledge, and production.
</p> </div> <div class="column-item" data-astro-cid-hmvnqgfe> <h3 data-astro-cid-hmvnqgfe>Strategic Marketing</h3> <p data-astro-cid-hmvnqgfe>
What should you communicate, where, and how? By pinpointing beneficial actions we produce the right content and strategy for you \u2013 from social media, SEO, articles to custom websites. </p> </div> <div class="column-item" data-astro-cid-hmvnqgfe> <h3 data-astro-cid-hmvnqgfe>Graphic Design</h3> <p data-astro-cid-hmvnqgfe>
Design is more than just aesthetics \u2013 it's about communication. We care about things like pixels, fonts, and colors, designing everything from presentations and illustrations, to full websites.
</p> </div> </div> <div class="button-center" data-astro-cid-hmvnqgfe> <a href="/services/" class="btn-outline-red" data-astro-cid-hmvnqgfe>Here we explain more</a> </div> </section> <section id="home-hero-two" data-astro-cid-hmvnqgfe> <div id="tilt-card" data-astro-cid-hmvnqgfe> <span class="smile" data-astro-cid-hmvnqgfe>:)</span> </div> <div class="header-welike" data-astro-cid-hmvnqgfe> <h2 id="h2SadSmiley" data-astro-cid-hmvnqgfe>
We like to make good<br data-astro-cid-hmvnqgfe>
things to good people.
</h2> <h2 id="h2Smiley" class="hidden" data-astro-cid-hmvnqgfe>
We like to make good<br data-astro-cid-hmvnqgfe>
things to sad people too.
</h2> </div> <div class="testar-container" data-astro-cid-hmvnqgfe> <div class="client-container" data-astro-cid-hmvnqgfe> <div class="client-logo" data-astro-cid-hmvnqgfe> <img src="img/clients/partners_loggor_eseco_svart.png" alt="" data-astro-cid-hmvnqgfe> </div> <div class="client-logo" data-astro-cid-hmvnqgfe> <img src="img/clients/partners_loggor-10.png" alt="" data-astro-cid-hmvnqgfe> </div> <div class="client-logo" data-astro-cid-hmvnqgfe> <img src="img/clients/partners_loggor-07.png" alt="" data-astro-cid-hmvnqgfe> </div> <div class="client-logo" data-astro-cid-hmvnqgfe> <img src="img/clients/partners_loggor-06.png" alt="" data-astro-cid-hmvnqgfe> </div> <div class="client-logo" data-astro-cid-hmvnqgfe> <img src="img/clients/labrats_logo.png" alt="" data-astro-cid-hmvnqgfe> </div> </div> </div> </section> <section id="blog3-preview" style="overflow: hidden" data-astro-cid-hmvnqgfe> <div class="blogcontainerThree" data-astro-cid-hmvnqgfe> <div class="text-container" data-astro-cid-hmvnqgfe> <h2 class="white" data-astro-cid-hmvnqgfe>our stories</h2> <h4 data-astro-cid-hmvnqgfe>
Experiences creates stories. Here we share marketing insights and
            random reflections you won't get anywhere else
</h4> <a class="btn-red" href="/stories/" data-astro-cid-hmvnqgfe>Read latest post</a> </div> </div> </section> <!-- 
<section id="blog-preview">

  <h2 class="white">read our book</h2>
<div class="blogpreview-container">

  <div class="blogpreview-text">
    <h4>RECENT POST</h4>
    <h3 class="white">Det var en kv\xE4ll i juni, <br>d\xE5 n\xE4r solen sken som mest</h3>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia dolore, tempore corrupti quasi culpa autem id sequi amet hic explicabo vero odio enim unde voluptatem non reprehenderit quia asperiores.

    <button class="btn-outline-red">kom och l\xE4s</button>
  </div>

  <div class="blogpreview-image">

    <div class="blogpreview-overlay">       --> <!-- <button class="btn-outline-white">Go to article</button> --> <!-- </div>
  <img src="stories/public/images/ales-nesetril-Im7lZjxeLhg-unsplash.png" alt="">

</div>
  </div>
</div>

</section> --> <!-- instagram modul     <figure data-behold-id="gCORfjAodBbOP4YM43DH"></figure>
<script src="https://w.behold.so/widget.js" type="module"><\/script>

 --> <section id="ending" data-astro-cid-hmvnqgfe> <!-- <video src="video/compr-Flying_Over_White_Clouds_fhd - 02.mp4" loop autoplay muted></video> --> <!-- <div data-aos="fade-up"> --> <div class="endnote" data-astro-cid-hmvnqgfe> <h3 data-astro-cid-hmvnqgfe>
If you've come all the way to the page bottom, we clearly have
            something in common.
</h3> <p data-astro-cid-hmvnqgfe>
And that might be a good reason for us to get to know eachother.
<a class="btnOpenForm" data-astro-cid-hmvnqgfe>Say hi</a> or if you want to follow our
            journey \u2013 subscribe to our updates. For each new subscriber we must
            celebrate with a beer.
</p> <div class="klaviyo-form-UuHhsQ desktop" data-astro-cid-hmvnqgfe></div> <div class="klaviyo-form-Wbf2n2 mobile" data-astro-cid-hmvnqgfe></div> </div> <!-- </div> --> </section> <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Y6DGXR"><\/script> <!-- FETCH FOOTER--> <footer id="master-footer" data-astro-cid-hmvnqgfe></footer>  <!-- FETCH CONTACT-POPUP !--> <div id="openContactForm" class="hidden" data-astro-cid-hmvnqgfe></div> <script src="/script.js"><\/script>  <!-- <script>
      AOS.init();
    <\/script> --> </body></html>`])), renderHead(), renderComponent($$result, "Hero", $$Hero, { "bgColor": "white-bg", "data-astro-cid-hmvnqgfe": true }, { "subheader": ($$result2) => renderTemplate`<span data-astro-cid-hmvnqgfe>We help small businesses to make big impressions</span>`, "subheaderMobile": ($$result2) => renderTemplate`<span data-astro-cid-hmvnqgfe>We help small businesses <br data-astro-cid-hmvnqgfe> to make big impressions</span>` }));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/sv/index.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/sv/index.astro";
const $$url = "/sv";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
