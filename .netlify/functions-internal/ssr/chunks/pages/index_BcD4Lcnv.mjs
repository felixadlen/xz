import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot, f as renderComponent, h as renderHead } from '../astro_BD0Lb4GF.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate, $ as $$ContactForm, a as $$ChatIcon, b as $$Footer, c as $$MenuNav } from './_slug__BDqwev0z.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://xzstudios.se");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${Astro2.props.bgColor}`, "class")} id="intro-hero"> <div class="highlightTextContainer"> <svg viewBox="0 0 1350 600"> <text x="50%" y="80%" fill="transparent" text-anchor="middle">xz studios</text> </svg> <h2 class="intro-subheader desktop" style="margin-top: 0.1rem;"> ${renderSlot($$result, $$slots["subheader"])} <p style="margin-top: 0.9rem;font-weight: 300;font-size: 1rem;">BUILDING BRANDS WITH LOVE</p> <!-- <p style="margin-top: 0.9rem;font-weight: 400;font-size: 0.9rem;">MARKETING AND BRANDING IN MALMÖ</p> --> </h2> <h2 class="intro-subheader mobile"> ${renderSlot($$result, $$slots["subheaderMobile"])} </h2> </div> </section>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se");
const $$RecentPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentPost;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/stories/did-we-find-inspiration.md": () => import('./did-we-find-inspiration_BP3d-cGz.mjs').then(n => n.d),"../pages/stories/good-things-to-good-people.md": () => import('./good-things-to-good-people_DLEnyaaf.mjs'),"../pages/stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_dRovTeRv.mjs')}), () => "../pages/stories/*.md");
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt));
  const recentPost = sortedPosts.length > 0 ? sortedPosts[0] : null;
  const title = recentPost ? recentPost.frontmatter.title : "No recent posts";
  const imageUrl = recentPost ? recentPost.frontmatter.image : "";
  const publishedAt = recentPost ? recentPost.frontmatter.publishedAt : "";
  const formattedDate = publishedAt ? formatDate(publishedAt) : "N/A";
  return renderTemplate`${maybeRenderHead()}<div class="recentPostContainer" data-astro-cid-3eccxmr7> <article class="recent-post" data-astro-cid-3eccxmr7> <a${addAttribute(recentPost.url, "href")} class="recent-post-link" data-astro-cid-3eccxmr7></a><div class="recent-post-image-container" data-astro-cid-3eccxmr7><a${addAttribute(recentPost.url, "href")} class="recent-post-link" data-astro-cid-3eccxmr7> <picture data-astro-cid-3eccxmr7> <source${addAttribute(`${imageUrl.includes(".") ? imageUrl : imageUrl + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-3eccxmr7> <img${addAttribute(`${imageUrl.includes(".") ? imageUrl : imageUrl + ".png"}`, "src")}${addAttribute(`Featured image for ${title}`, "alt")} data-astro-cid-3eccxmr7> </picture> <!-- Overlay Text --> </a><div class="overlay-text" data-astro-cid-3eccxmr7><a${addAttribute(recentPost.url, "href")} class="recent-post-link" data-astro-cid-3eccxmr7></a><div class="text-container" data-astro-cid-3eccxmr7><a${addAttribute(recentPost.url, "href")} class="recent-post-link" data-astro-cid-3eccxmr7> <h2 class="stories-special-header" data-astro-cid-3eccxmr7>experiences<br data-astro-cid-3eccxmr7>creates stories</h2> <p class="white-color stories-text desktop" style="font-weight: 500; max-width: 500px;" data-astro-cid-3eccxmr7>
Insights from embracing the unknown
</p> </a><a class="btn-red" href="/stories/" data-astro-cid-3eccxmr7>Discover Stories</a> </div> </div> <!-- Bottom Black Bar --> <a${addAttribute(recentPost.url, "href")} data-astro-cid-3eccxmr7> <div class="bottom-black-bar" data-astro-cid-3eccxmr7><span class="bottom-black-bar-text" data-astro-cid-3eccxmr7>${formattedDate}: ${title} <span class="red-new-story" style="font-weight: 700;color: #c83c4e;font-size: 0.7rem;margin-left: 1rem;white-space: nowrap;top: -2px;position:relative" data-astro-cid-3eccxmr7>NEW STORY</span></span> </div></a> </div> </article> </div> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RecentPost.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>XZ STUDIOS</title><meta name="title" content="XZ STUDIOS | Building brands & fans in Malm\xF6"><meta name="description" content="We help small businesses make big impressions. A Malm\xF6 based studio for building brands through strategy, marketing and design."><link rel="stylesheet" href="main.css"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><link rel="stylesheet" href="//use.fontawesome.com/releases/v6.5.0/css/all.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="icon" type="image/x-icon" href="/img/favicon/favicon.ico"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script><script type="text/javascript">\n      // Clarity\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "jovcl27t8k");\n    <\/script>', '</head> <body data-astro-cid-j7pv25f6> <div class="notification-menu" data-astro-cid-j7pv25f6>1</div> ', " ", ` <section id="introduction" data-astro-cid-j7pv25f6> <div class="intro-container" data-astro-cid-j7pv25f6> <h2 class="embraceText" data-astro-cid-j7pv25f6>hello</h2> <p class="embrace-answer hidden" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>See what you did?</strong> Your curiosity led you to explore
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
building brands and fans in malm\xF6</h2> <p data-astro-cid-j7pv25f6>
We help small businesses with marketing and branding to create something new and different. 
          With our base in Malm\xF6, we use the world as our inspiration to explore new ideas. Your brand should not just be seen, but remembered.
</p> <a href="/about/" class="btn-red" data-astro-cid-j7pv25f6>We are XZ</a> </div> <div class="right-split-video" data-astro-cid-j7pv25f6> <video src="video/xz-video2.mp4" width="100%" height="100%" loop autoplay muted playsinline data-astro-cid-j7pv25f6></video> </div> </div></section> <section class="services-spec" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>we do</h2> <div class="four-columns" data-astro-cid-j7pv25f6> <div class="column-item top-column" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Brand concepts</h3> <p data-astro-cid-j7pv25f6>
Well-grounded strategies, stunning visuals, and strong storytelling are essential for strong brands. Together, we will ensure that your brand resonates with both you and the audience.
</p> <div class="service-tags" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Brand Identity</span> <span data-astro-cid-j7pv25f6>Storytelling</span> <span data-astro-cid-j7pv25f6>Strategy</span> </div> </div> <div class="column-item top-column" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Ads & Campaigns</h3> <p data-astro-cid-j7pv25f6>
To get more out of advertising, your campaigns need to have a clear goal. Whether it's gaining brand awareness or more leads, we support you with ideas, knowledge, and production.
</p> <div class="service-tags" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Google Ads</span> <span data-astro-cid-j7pv25f6>Meta</span> <span data-astro-cid-j7pv25f6>Campaign Strategy</span> <span data-astro-cid-j7pv25f6>Content</span> </div> </div> <div class="column-item" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Strategic Marketing</h3> <p data-astro-cid-j7pv25f6>
What should you communicate, where, and how? By pinpointing beneficial actions we produce the right content and strategy for you \u2013 from social media, SEO, articles to custom websites. </p> <div class="service-tags" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Digital Marketing</span> <span data-astro-cid-j7pv25f6>Audience analysis</span> <span data-astro-cid-j7pv25f6>Copywriting</span> <span data-astro-cid-j7pv25f6>SEO</span> <span data-astro-cid-j7pv25f6>Websites</span> <span data-astro-cid-j7pv25f6>Social media</span> </div> </div> <div class="column-item" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Graphic Design</h3> <p data-astro-cid-j7pv25f6>
Design is more than just aesthetics \u2013 it's about communication. We care about things like pixels, fonts, and colors, designing everything from presentations and illustrations, to full websites.
</p> <div class="service-tags" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Visual Identity</span> <span data-astro-cid-j7pv25f6>UX/UI</span> <span data-astro-cid-j7pv25f6>Print</span> <span data-astro-cid-j7pv25f6>Ads</span> <span data-astro-cid-j7pv25f6>Illustrations</span> </div> </div> </div> <div class="button-center" data-astro-cid-j7pv25f6> <a href="/services/" class="btn-red" data-astro-cid-j7pv25f6>Here we explain more</a> </div> </section> <section id="home-hero-two" data-astro-cid-j7pv25f6> <div id="tilt-card" data-astro-cid-j7pv25f6> <img src="/img/red-smiley-happy.svg" class="smile" alt="red happy smiley" data-astro-cid-j7pv25f6> </div> <div class="header-welike" data-astro-cid-j7pv25f6> <h2 id="h2SadSmiley" class="desktop" data-astro-cid-j7pv25f6>
we like to make good<br data-astro-cid-j7pv25f6>
things to good people.
</h2> <h2 id="h2SadSmileyMobile" class="mobile" data-astro-cid-j7pv25f6>
we like to make<br data-astro-cid-j7pv25f6> good
          things to good people.
</h2> <h2 id="h2Smiley" class="hidden desktop" data-astro-cid-j7pv25f6>
we like to make good<br data-astro-cid-j7pv25f6>
things to sad people too.
</h2> <h2 id="h2SmileyMobile" class="hidden mobile" data-astro-cid-j7pv25f6>
we like to make<br data-astro-cid-j7pv25f6>good
          things to sad people too.
</h2> </div> <div class="customers-container" data-astro-cid-j7pv25f6> <div class="customers-wrapper" data-astro-cid-j7pv25f6> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://www.eseco.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor_eseco_svart.webp" alt="logotype of Eseco" data-astro-cid-j7pv25f6> </a> </div> <div class="client-logo" data-astro-cid-j7pv25f6> <a href="https://adlen.nu" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor-10.webp" alt="logotype of G\xF6ran Adl\xE9n" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://ne.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor-07.webp" alt="Logotype of NE" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://equitours.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/partners_loggor-06.webp" alt="Logotype of Equi Tours" data-astro-cid-j7pv25f6></a> </div> <div class="client-logo" data-astro-cid-j7pv25f6><a href="https://thelabrats.se" target="_blank" data-astro-cid-j7pv25f6> <img src="img/clients/labrats_logo.webp" alt="Logotype of The Lab Rats" data-astro-cid-j7pv25f6></a> </div> </div> </div> </section> <section id="blog3-preview" data-astro-cid-j7pv25f6> `, ` </section>  <section id="ending" data-astro-cid-j7pv25f6> <div class="endnote" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>
If you've come all the way to the page bottom, we clearly have
          something in common.
</h3> <p data-astro-cid-j7pv25f6>
And that might be a good reason for us to get to know eachother.<br data-astro-cid-j7pv25f6> <a class="btnOpenForm" data-astro-cid-j7pv25f6>Say hi</a> or if you want to follow our journey - check out our
<a href="/stories" data-astro-cid-j7pv25f6>stories</a>.
</p> <h3 class="signature" data-astro-cid-j7pv25f6>/xz studios</h3> </div> </section> <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Y6DGXR"><\/script> `, " ", " ", ' <script src="/script.js"><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "MenuNav", $$MenuNav, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Hero", $$Hero, { "bgColor": "white-bg", "data-astro-cid-j7pv25f6": true }, { "subheader": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>We help small businesses make big impressions</span>`, "subheader2": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>Marketing</span>`, "subheaderMobile": ($$result2) => renderTemplate`<span data-astro-cid-j7pv25f6>We help small businesses <br data-astro-cid-j7pv25f6> make big impressions</span>` }), renderComponent($$result, "RecentPost", $$RecentPost, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "ChatIcon", $$ChatIcon, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-j7pv25f6": true }));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/index.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
