import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent, f as renderSlot, u as unescapeHTML } from '../astro_vTHV1pJ8.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { f as formatDate, $ as $$Container, a as $$Page } from './_slug__cUqK6mSR.mjs';
/* empty css                                           */

const $$Astro$2 = createAstro("https://xzstudios.se/stories");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="post-preview__link fade-in"${addAttribute(post.url, "href")} data-astro-cid-dpgbfi7r> <article class="post-preview__article" data-astro-cid-dpgbfi7r> <div class="post-preview__image-container" data-astro-cid-dpgbfi7r> <picture data-astro-cid-dpgbfi7r> <source${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-dpgbfi7r> <img class="post-preview__img"${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".png"}`, "src")}${addAttribute(`Featured image for ${post.frontmatter.title}`, "alt")} data-astro-cid-dpgbfi7r> </picture> <h2 class="post-preview__title" data-astro-cid-dpgbfi7r>${post.frontmatter.title}</h2> <p class="post-preview__date" data-astro-cid-dpgbfi7r>${formatDate(post.frontmatter.publishedAt)}</p> </div> <div class="post-preview__text" data-astro-cid-dpgbfi7r> <p class="post-content__content" data-astro-cid-dpgbfi7r>${post.frontmatter.text}</p> </div> </article> </a> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RelatedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se/stories");
const $$RelatedPostsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPostsList;
  const { posts, currentPostUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="related-posts-list" data-astro-cid-vekyrzi5> ${posts.filter((post) => post.url !== currentPostUrl).map((post) => renderTemplate`<li${addAttribute(post.url, "key")} data-astro-cid-vekyrzi5> ${renderComponent($$result, "RelatedPosts", $$RelatedPosts, { "post": post, "data-astro-cid-vekyrzi5": true })} </li>`)} </ul> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RelatedPostsList.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se/stories");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { frontmatter } = Astro2.props;
  const seo = {
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    description: frontmatter.description,
    image: frontmatter.image
  };
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/stories/introducing-xz-studios.md": () => Promise.resolve().then(() => introducingXzStudios)}), () => "../pages/stories/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gvpn4u4b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/stories/" class="showAllPosts" data-astro-cid-gvpn4u4b>Show all stories</a> <div class="stories-post-header" data-astro-cid-gvpn4u4b> <h1 class="post-content__title" data-astro-cid-gvpn4u4b>${frontmatter.title}</h1> <h2 class="post-content__subtitle" data-astro-cid-gvpn4u4b>${frontmatter.subtitle}</h2> <p class="post-content__date" data-astro-cid-gvpn4u4b> <!-- <span style="color: #C83C4E; font-weight: 700;font-style: normal;text-transform: uppercase;">{frontmatter.chapter}&nbsp;</span>&nbsp; --> <time data-astro-cid-gvpn4u4b>${formatDate(frontmatter.publishedAt)}</time>&nbsp;in ${frontmatter.location} </p> </div> ${frontmatter.image && renderTemplate`<picture data-astro-cid-gvpn4u4b>  <source${addAttribute(`${frontmatter.image.includes(".") ? frontmatter.image : frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-gvpn4u4b>  <img width="100%" height="630" class="post-content__img" loading="eager"${addAttribute(`${frontmatter.image.includes(".") ? frontmatter.image : frontmatter.image + ".png"}`, "src")}${addAttribute(frontmatter.alt ? frontmatter.alt : "Post Image", "alt")} data-astro-cid-gvpn4u4b> </picture>`}${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gvpn4u4b": true }, { "default": ($$result3) => renderTemplate` <article class="post-content__article" data-astro-cid-gvpn4u4b> <div class="post-content__top fade-in" data-astro-cid-gvpn4u4b> <!-- AKTIVERA NEDAN DEL OM VI VILL ANVÄNDA POST-TAGGAR FRAMÖVER --> <!-- {
          frontmatter.category && (
            <p class="post-content__category">
              <a href={\`/blog/category/\${slugify(frontmatter.category)}\`}>
                {frontmatter.category}
              </a>
            </p>
          )
        } --> <!-- <h4 class="post-content__chapter">{frontmatter.chapter}</h4> --> </div> <div class="post-content__content flow fade-in" data-astro-cid-gvpn4u4b> ${renderSlot($$result3, $$slots["default"])} </div> </article> ` })} <div id="blog-BGbox" data-astro-cid-gvpn4u4b> <span style="font-weight: 600" ; data-astro-cid-gvpn4u4b>XZ STUDIOS</span> helps small businesses to make big impressions. We specialize in marketing, advertising and graphic design with focus on building brands. With our base in Malmö, we use the world as our inspiration to explore new ideas. Let’s turn thoughts into conversations – <strong class="btnOpenForm inline-contactForm" data-astro-cid-gvpn4u4b>we're just a message away!</strong></div> ${renderComponent($$result2, "RelatedPostsList", $$RelatedPostsList, { "posts": allPosts, "currentPostUrl": Astro2.props.url, "data-astro-cid-gvpn4u4b": true })} ` })} `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/layouts/Post.astro", void 0);

const html = "<h2 id=\"creativity-through-curiosity\">Creativity through curiosity</h2>\n<p>What happens to creativity if we don’t need to chase inspiration? But rather, let inspiration seek us. From that curiosity the idea of XZ was born. We both had great jobs within marketing. Still something was missing and we knew we had to find it.</p>\n<p><strong>Jump to September 12, 2023</strong> and we are on a plane to Albania – the first stop to make XZ studios possible.</p>\n<!-- ![image](/images/DSCF9276-3.png) -->\n<h2 id=\"we-are-going-to-fail-thats-a-promise\">We are going to fail. That’s a promise.</h2>\n<p>Today, we are happy and proud to announce <span style=\"font-weight: 600;\">XZ STUDIOS</span> as a brand new marketing and exploration studio with its base in Malmö. We are going to help smaller businesses, start-ups and scale-ups to make big impressions through strategic branding, marketing and graphic design.</p>\n<p>The heartbeat of XZ lies in embracing the unknown. We will never be afraid of trying something new and different. That means lessons and hard work are to come – both from successes and failures - and we need these experiences if we truly want to make impact. <span style=\"font-weight: 600;\">The things we learn from our own projects, we will use to help others.</span></p>\n<p>To make this possible, we combine our own experiences and enthusiasm of exploring; Felix Adlén, with his knowledge in concept development, marketing psychology and front-end design, and Inez Nyberg with her background in graphic design and as an in-house marketing manager.</p>\n<script src=\"https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs\" type=\"module\"></script>\n<p><dotlottie-player src=\"https://lottie.host/a6b56d3d-38d7-494f-ac62-212ecae105ca/ttW2qtMmUq.json\" background=\"transparent\" class=\"lottie-story1\" speed=\"1\" direction=\"1\" playmode=\"normal\" loop autoplay style=\"margin-bottom: -2rem;\"></dotlottie-player></p>\n<h2 style=\"margin-top: 2rem;\">Experiences creates stories</h2>\nWe are currently in Canggu, Indonesia. Nice with sun and fried rice indeed, but that's not the only reason why we're here. For 8 months, we are dedicating our lives to exploring and gather new knowledge about marketing trends around the world, which we will adapt into the work we do. Every new lesson is a part of a new story.\n<p>This is the first of many stories, and we’ll use this space to post our marketing insights, random reflections and learnings once in a while. Ambitiously speaking – perhaps once per week! If you’re interested in bringing more marketing value to your business, consider following our cool Instagram or subscribe to our updates that might interest you. We don’t like spam either, so let’s keep it professional.</p>\n<p>Last, but not least; we might already have begun a few projects. Both some of our own and some for people we work with, and can’t wait to let you know more soon.</p>\n<p>P.S. Didn’t your aunt say something about her company needing some help to reach out to more customers?</p>\n<div class=\"hrSpace\">\n</div>\n<strong>Smile and be different.</strong>\n<h3 class=\"signature\">/xz studios</h3>\n<!-- \n<div id=\"blog-BGbox\">\n<span style=\"font-weight: 600\";>XZ STUDIOS</span> helps small businesses to make big impressions. We specialize in marketing, advertising and graphic design with focus on building brands. With our base in Malmö, we use the world as our inspiration to explore new ideas. </div> -->\n<!-- <div class=\"klaviyo-form-XuZYJB\"></div>\n<script async type=\"text/javascript\" src=\"https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Y6DGXR\"></script> -->\n<style>\n\n    .lottie-story1 {\n \n        padding: 0rem;\n        margin: 4rem 0rem;\n      width: 100%;\n      height: 100%;\n    }\n@media (min-width: 768px) {\n    .lottie-story1 {\n        padding: 1rem;\n               padding: 6rem;\n               margin: 0rem;\n    }\n}\n\n    .hrSpace {\n       padding: 1rem 0rem 4rem 0rem;\n    }\n.signature {\n    font-family: \"lindsey-signature\", sans-serif;\n    font-weight: 400;\n    font-size: 5rem;\n    margin-top: 1rem;\n}\n\n\n</style>";

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"Introducing XZ STUDIOS","subtitle":"A new marketing duo from Malmö that embraces the unknown","image":"/images/storyone-3.jpg","publishedAt":"2024-02-29","category":"stories","location":"Canggu, Indonesia"};
				const file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories/introducing-xz-studios.md";
				const url = "/stories/introducing-xz-studios";
				function rawContent() {
					return "\n## Creativity through curiosity\n\nWhat happens to creativity if we don't need to chase inspiration? But rather, let inspiration seek us. From that curiosity the idea of XZ was born. We both had great jobs within marketing. Still something was missing and we knew we had to find it.\n\n**Jump to September 12, 2023** and we are on a plane to Albania – the first stop to make XZ studios possible.\n\n<!-- ![image](/images/DSCF9276-3.png) -->\n\n## We are going to fail. That's a promise.\n\nToday, we are happy and proud to announce <span style=\"font-weight: 600;\">XZ STUDIOS</span> as a brand new marketing and exploration studio with its base in Malmö. We are going to help smaller businesses, start-ups and scale-ups to make big impressions through strategic branding, marketing and graphic design.\n\nThe heartbeat of XZ lies in embracing the unknown. We will never be afraid of trying something new and different. That means lessons and hard work are to come – both from successes and failures - and we need these experiences if we truly want to make impact. <span style=\"font-weight: 600;\">The things we learn from our own projects, we will use to help others.</span>\n\nTo make this possible, we combine our own experiences and enthusiasm of exploring; Felix Adlén, with his knowledge in concept development, marketing psychology and front-end design, and Inez Nyberg with her background in graphic design and as an in-house marketing manager.\n\n<script src=\"https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs\" type=\"module\"></script>\n\n<dotlottie-player src=\"https://lottie.host/a6b56d3d-38d7-494f-ac62-212ecae105ca/ttW2qtMmUq.json\" background=\"transparent\" class=\"lottie-story1\" speed=\"1\" direction=\"1\" playMode=\"normal\" loop autoplay style=\"margin-bottom: -2rem;\"></dotlottie-player>\n\n<h2 style=\"margin-top: 2rem;\">Experiences creates stories</h2>\nWe are currently in Canggu, Indonesia. Nice with sun and fried rice indeed, but that's not the only reason why we're here. For 8 months, we are dedicating our lives to exploring and gather new knowledge about marketing trends around the world, which we will adapt into the work we do. Every new lesson is a part of a new story.\n\nThis is the first of many stories, and we'll use this space to post our marketing insights, random reflections and learnings once in a while. Ambitiously speaking – perhaps once per week! If you're interested in bringing more marketing value to your business, consider following our cool Instagram or subscribe to our updates that might interest you. We don't like spam either, so let's keep it professional.\n\nLast, but not least; we might already have begun a few projects. Both some of our own and some for people we work with, and can't wait to let you know more soon.\n\nP.S. Didn't your aunt say something about her company needing some help to reach out to more customers?\n\n<div class=\"hrSpace\">\n</div>\n<strong>Smile and be different.</strong>\n\n<h3 class=\"signature\">/xz studios</h2>\n<!-- \n<div id=\"blog-BGbox\">\n<span style=\"font-weight: 600\";>XZ STUDIOS</span> helps small businesses to make big impressions. We specialize in marketing, advertising and graphic design with focus on building brands. With our base in Malmö, we use the world as our inspiration to explore new ideas. </div> -->\n\n<!-- <div class=\"klaviyo-form-XuZYJB\"></div>\n<script async type=\"text/javascript\" src=\"https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Y6DGXR\"></script> -->\n\n<style>\n\n    .lottie-story1 {\n \n        padding: 0rem;\n        margin: 4rem 0rem;\n      width: 100%;\n      height: 100%;\n    }\n@media (min-width: 768px) {\n    .lottie-story1 {\n        padding: 1rem;\n               padding: 6rem;\n               margin: 0rem;\n    }\n}\n\n    .hrSpace {\n       padding: 1rem 0rem 4rem 0rem;\n    }\n.signature {\n    font-family: \"lindsey-signature\", sans-serif;\n    font-weight: 400;\n    font-size: 5rem;\n    margin-top: 1rem;\n}\n\n\n</style>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"creativity-through-curiosity","text":"Creativity through curiosity"},{"depth":2,"slug":"we-are-going-to-fail-thats-a-promise","text":"We are going to fail. That’s a promise."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const introducingXzStudios = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
