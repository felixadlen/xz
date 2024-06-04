import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, u as unescapeHTML } from '../astro_BD0Lb4GF.mjs';
import 'kleur/colors';
import { f as formatDate, d as $$Container, e as $$Page } from './_slug__BDqwev0z.mjs';
import 'clsx';
/* empty css                                            */

const $$Astro$2 = createAstro("https://xzstudios.se");
const $$RelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="post-preview__link fade-in"${addAttribute(post.url, "href")} data-astro-cid-dpgbfi7r> <article class="post-preview__article" data-astro-cid-dpgbfi7r> <div class="post-preview__image-container" data-astro-cid-dpgbfi7r> <picture data-astro-cid-dpgbfi7r> <source${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-dpgbfi7r> <img class="post-preview__img"${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".png"}`, "src")}${addAttribute(`Featured image for ${post.frontmatter.title}`, "alt")} data-astro-cid-dpgbfi7r> </picture> <h2 class="post-preview__title" data-astro-cid-dpgbfi7r>${post.frontmatter.title}</h2> <p class="post-preview__date" data-astro-cid-dpgbfi7r>${formatDate(post.frontmatter.publishedAt)}</p> </div> <div class="post-preview__text" data-astro-cid-dpgbfi7r> <p class="post-content__content" data-astro-cid-dpgbfi7r>${post.frontmatter.text}</p> </div> </article> </a> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RelatedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se");
const $$RelatedPostsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPostsList;
  const { posts, currentPostUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="more-stories-header" data-astro-cid-vekyrzi5>
More stories</h2> <ul class="related-posts-list" data-astro-cid-vekyrzi5> ${posts.filter((post) => post.url !== currentPostUrl).map((post) => renderTemplate`<li${addAttribute(post.url, "key")} data-astro-cid-vekyrzi5> ${renderComponent($$result, "RelatedPosts", $$RelatedPosts, { "post": post, "data-astro-cid-vekyrzi5": true })} </li>`)} </ul> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/components/RelatedPostsList.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se");
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
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/stories/did-we-find-inspiration.md": () => Promise.resolve().then(() => didWeFindInspiration),"../pages/stories/good-things-to-good-people.md": () => import('./good-things-to-good-people_DLEnyaaf.mjs'),"../pages/stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_dRovTeRv.mjs')}), () => "../pages/stories/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gvpn4u4b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/stories/" class="showAllPosts" data-astro-cid-gvpn4u4b>Show all stories</a> <div class="stories-post-header" data-astro-cid-gvpn4u4b> <h1 class="post-content__title" data-astro-cid-gvpn4u4b>${frontmatter.title}</h1> <h2 class="post-content__subtitle" data-astro-cid-gvpn4u4b>${frontmatter.subtitle}</h2> <p class="post-content__date" data-astro-cid-gvpn4u4b> <!-- <span style="color: #C83C4E; font-weight: 700;font-style: normal;text-transform: uppercase;">{frontmatter.chapter}&nbsp;</span>&nbsp; --> <time data-astro-cid-gvpn4u4b>${formatDate(frontmatter.publishedAt)}</time>&nbsp;in ${frontmatter.location} </p> </div> ${frontmatter.image && renderTemplate`<picture data-astro-cid-gvpn4u4b>  <source${addAttribute(`${frontmatter.image.includes(".") ? frontmatter.image : frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-gvpn4u4b>  <img width="100%" height="630" class="post-content__img" loading="eager"${addAttribute(`${frontmatter.image.includes(".") ? frontmatter.image : frontmatter.image + ".png"}`, "src")}${addAttribute(frontmatter.alt ? frontmatter.alt : "Post Image", "alt")} data-astro-cid-gvpn4u4b> </picture>`}${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gvpn4u4b": true }, { "default": ($$result3) => renderTemplate` <article class="post-content__article" data-astro-cid-gvpn4u4b> <div class="post-content__content flow fade-in" data-astro-cid-gvpn4u4b> ${renderSlot($$result3, $$slots["default"])} </div> </article> ` })} <div id="blog-BGbox" data-astro-cid-gvpn4u4b> <span style="font-weight: 600" ; data-astro-cid-gvpn4u4b>XZ STUDIOS</span> helps small businesses to make big impressions. We specialize in marketing, advertising and graphic design with focus on building brands. With our base in Malmö, we use the world as our inspiration to explore new ideas. Let’s turn thoughts into conversations – <strong class="btnOpenForm inline-contactForm" data-astro-cid-gvpn4u4b>we're just a message away!</strong></div> ${renderComponent($$result2, "RelatedPostsList", $$RelatedPostsList, { "posts": allPosts, "currentPostUrl": Astro2.props.url, "data-astro-cid-gvpn4u4b": true })} ` })} `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/layouts/Post.astro", void 0);

const html = "<p>Currently, we’re sitting at <a href=\"https://flockbali.com/\">Flock</a>, a café just around the corner from where we’re staying in Ubud. After our big launch three weeks ago, we’ve been in such awe of all the responses. We are totally beyond grateful for all the kind words, shares and engagement! Our journey has never been a straight line, going from point A to B, or X to Z. It’s rather been a continuous flow of different paths – learning, growing and trying new things each day. <strong>These challenges motivate us</strong>.</p>\n<p>In our previous story, we emphasized our own desire to work and live somewhere where we could become more inspired, more creative, and in the end, bring more value into our work. The first step to stop chasing inspiration, was to chase inspiration. Here are our key takeaways so far!</p>\n<h2 id=\"working-while-travelling-is-different\">Working while travelling is different.</h2>\n<p>To start off, we currently don’t have a dedicated office. This can be good, but also bad. One perk of having an office with a dedicated setup and regular 9-5 hours, working closely in a team, is that it creates a clearer distinction between work and personal life. However, it’s easy for office days to become repetitive patterns, which can sometimes be both non-motivating and uninspiring.</p>\n<p>For us, the mix of a dedicated office space, together with the flexibility of working in new surroundings when needed, might be the key. The important thing is to change the scenery, even if it’s means working from the bed, the office desk, or a café. Just have a ready-to-go setup, which we’ll talk about later on.</p>\n<div class=\"stories-quote\">\n<h3>We thought it would be nice to quit 9-5.<br>Instead we got to work 9-24..</h3>\n</div>\nAlso, since starting our own business, we haven't had any set working hours.\n<p>It probably sounds more luxurious than it is, since it most often results working until 4 am or not getting a single day off in many weeks. However, the big perk with having fluid working hours is that we can customize our days to what we need. Do we have a business meeting at 11 pm due to different time zones? Then we can go to the beach or explore the city during the day and start working in the afternoon.</p>\n<p>Finally, travelling and exploring new cities, various types of nature and different cultures is not something we otherwise do on a daily basis. Getting this many new inputs and experiences has really helped us develop, both in our business and personally.</p>\n<h2 style=\"margin-top: 2rem;\">The insights</h2>\n<p><span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Input equals output</strong></p>\n<p>It’s easy to think that inspiration is going to hit you when the time is right. However, inputs equals output. We find that embracing new experiences and perspectives, rather than continuing in our old patterns, puts us in scenarios where inspiration comes easier. If we see new things, out brain comes up with new things as well.</p>\n<p>While travelling, it’s been a luxury to constantly get more new inputs than usual. Nonetheless, it’s good to have a couple of go-to places you know you can head over to if you need more inputs, even from your bed. Some good digital places to hang out are Pinterest, for general inspirational ideas, or Behance if you, like us, need inspiration concerning visuals or branding.</p>\n<p><span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Do things you’ve never done before</strong></p>\n<p>We’re all guilty of repeating good old patterns. It can be a time saver and sometimes the best way to go. When it comes to inspiration however, it doesn’t spring from doing the same things. Our journey, from starting a company to leaving home for 8 months and visiting unfamiliar places, is about learning by doing. You don’t need to travel for this, but new paths do good.</p>\n<div style=\"display: flex;align-items: center;justify-content: center;gap: 1rem;\">\n<img src=\"/images/story2-grab.webp\" style=\"max-height: 380px;\" class=\"stories-rightimage\" alt=\"Laptop in lap in the taxi\">\n<img src=\"/images/story2-workplace.webp\" class=\"stories-rightimage\" alt=\"A funny workplace with two laptops on a ironing board\"></div>\n<p><span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Actualize the “bad” ideas. Remember when internet was just a passing fad?</strong></p>\n<p>Those very ideas that linger in our minds, scribbled on post-it notes, or even the ones our colleagues might chuckle at, could hold the seeds of something good. They deserve a chance to grow. The initial drafts might not be perfect, but experimenting with them brings us out of our hesitation and into a space of greater creativity, openness, and impact. Having too-high aspirations can block the creativity, and we know that by always chasing the ideal of coolness… Yet, if you never try and fail, it won’t be cool in the end.</p>\n<p><span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Break a leg or two</strong></p>\n<p>Ever wonder why some of your best ideas pop up while you’re in the shower? Sometimes, the key to unlocking more inspiration is simply by takinging a break.It’s not just a popular belief; even science backs up the idea that taking breaks boost our productivity and creativity. When we’re exposed to the same stimuli for extended periods, our brains start to tune out, leading to that familiar feeling of mental emptiness after focusing on a single task for too long. To summarize: t’s not you – it’s your brain.</p>\n<p>For us, our breaks is sometimes a walk to the grocery store to buy more Pepsi Max (Felix), listening to <a href=\"#spotify-playlist\">this Spotify playlist</a>, or playing Tetris on the phone (Inez). Even if you’re spending the whole day in an office, sometimes a simple walk to the coffee machine or disturbing a co-worker with small talk is enough to get you through the worst creative block.</p>\n<div class=\"stories-bg-plate\">\n<h2>Sum of the cardamom</h2>\n<p>You don’t need to travel to find inspiration. And what bursts <em>your</em> creativity, might be different for another. But some things we realized the past months to get more inspired, which we will bring back home, are:\n<br></p>\n<ul>\n<li>\n<p><span style=\"font-weight: 600;\">Change the environment</span></p>\n<p>Work from a new café, co-working space or just wherever. Change it.</p>\n</li>\n<li>\n<p><span style=\"font-weight: 600;\">Put your brain in stand-by mode</span></p>\n<p>Whether that means working out, taking a walk, grab a beer with a friend or playing Tetris on you Gameboy Color.</p>\n</li>\n<li>\n<p><span style=\"font-weight: 600;\">Do something intentionally as ugly or bad as possible</span></p>\n<p>Just to get rid of that paralyzed state of not knowing what to do at all.</p>\n</li>\n<li>\n<p><span style=\"font-weight: 600;\">Challenge yourself just like kids play “the floor is lava”</span></p>\n<p>By forcing yourself into new circumstances, you need to find new ways to pass the obstacles. What if you incorporate the same thinking in your work?</p>\n</li>\n</ul>\n<br>\nWe'd love to hear your thoughts or secret recipes to boost inspiration and creativity <br>– <a class=\"btnOpenForm\">send us a comment here if you want!</a>\n</div>\n<iframe id=\"spotify-playlist\" style=\"border-radius:12px;margin-top:3rem;\" src=\"https://open.spotify.com/embed/playlist/7BPuo7m9KYGlXxcot30Y0Z?utm_source=generator\" width=\"100%\" height=\"352\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n<h5 id=\"ps-just-some-nice-songs-thats-been-on-repeat-last-week-to-drain-the-singing-from-our-lovely-neighbor-the-rooster\">Ps. just some nice songs that’s been on repeat last week to drain the singing from our lovely neighbor, the rooster.</h5>\n<div class=\"hrSpace\">\n</div>\n<strong>Smile and be different.</strong>\n<h3 class=\"signature\">/xz studios</h3>\n<style>\n\n \n     .stories-rightimage {\n    width: 200px;\n    max-width: 100%;\n    margin: 0rem 1rem;\n    overflow-x: hidden;\n         filter: grayscale(100);\n         transition: 0.5s all ease;\n    }\n    .stories-rightimage:hover {\n        filter: grayscale(0);\n        transform: scale(1.01);\n    }\n    @media (min-width: 768px) {\n    .stories-rightimage {\n        flex: 0 0 40%;\n           }   \n     \n    }\n\n.stories-quote {\n    background-color: #DFDFDF;\n    border-radius: 10px;\n    padding: 3rem 4rem;\n    text-align: center;\n    color: #1c1e21;\n      margin-top: 4rem;\n    margin-bottom: 2rem;\n    position: relative;\n}\n.stories-quote h3 {\n    font-weight: 600;\n    /* font-style: italic; */\n    font-size: 2rem;\n}\n.stories-bg-plate {\n    background-color: #E2E2E2;\n    border-radius: 8px;\n    margin-top: 4rem;\n    margin-bottom: 2rem;\n    padding: 1.4rem;\n}\n\n.stories-bg-plate li {\nmargin-left: 30px;\n}\n@media (min-width: 768px)\n.stories-bg-plate {\n    margin-top: padding: 2rem;\n    }\n\n\n\n\n    .hrSpace {\n       padding: 1rem 0rem 2rem 0rem;\n    }\n.signature {\n    font-family: \"lindsey-signature\", sans-serif;\n    font-weight: 400;\n    font-size: 5rem;\n    margin-top: 0rem;\n}\n\n\n</style>";

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"Did we find inspiration?","subtitle":"Reflections from leaving safe spaces to try something new","image":"/images/story2-header.webp","publishedAt":"2024-03-22","category":"stories","location":"Ubud, Indonesia"};
				const file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/stories/did-we-find-inspiration.md";
				const url = "/stories/did-we-find-inspiration";
				function rawContent() {
					return "\nCurrently, we're sitting at [Flock](https://flockbali.com/), a café just around the corner from where we're staying in Ubud. After our big launch three weeks ago, we've been in such awe of all the responses. We are totally beyond grateful for all the kind words, shares and engagement! Our journey has never been a straight line, going from point A to B, or X to Z. It's rather been a continuous flow of different paths – learning, growing and trying new things each day. **These challenges motivate us**.\n\nIn our previous story, we emphasized our own desire to work and live somewhere where we could become more inspired, more creative, and in the end, bring more value into our work. The first step to stop chasing inspiration, was to chase inspiration. Here are our key takeaways so far!\n\n## Working while travelling is different.\n\nTo start off, we currently don't have a dedicated office. This can be good, but also bad. One perk of having an office with a dedicated setup and regular 9-5 hours, working closely in a team, is that it creates a clearer distinction between work and personal life. However, it's easy for office days to become repetitive patterns, which can sometimes be both non-motivating and uninspiring.\n\nFor us, the mix of a dedicated office space, together with the flexibility of working in new surroundings when needed, might be the key. The important thing is to change the scenery, even if it's means working from the bed, the office desk, or a café. Just have a ready-to-go setup, which we'll talk about later on.\n\n<div class=\"stories-quote\">\n<h3>We thought it would be nice to quit 9-5.<br>Instead we got to work 9-24..</h3>\n</div>\nAlso, since starting our own business, we haven't had any set working hours.\n\nIt probably sounds more luxurious than it is, since it most often results working until 4 am or not getting a single day off in many weeks. However, the big perk with having fluid working hours is that we can customize our days to what we need. Do we have a business meeting at 11 pm due to different time zones? Then we can go to the beach or explore the city during the day and start working in the afternoon.\n\nFinally, travelling and exploring new cities, various types of nature and different cultures is not something we otherwise do on a daily basis. Getting this many new inputs and experiences has really helped us develop, both in our business and personally.\n\n<h2 style=\"margin-top: 2rem;\">The insights</h2>\n\n<span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Input equals output</strong>\n\nIt's easy to think that inspiration is going to hit you when the time is right. However, inputs equals output. We find that embracing new experiences and perspectives, rather than continuing in our old patterns, puts us in scenarios where inspiration comes easier. If we see new things, out brain comes up with new things as well.\n\nWhile travelling, it's been a luxury to constantly get more new inputs than usual. Nonetheless, it's good to have a couple of go-to places you know you can head over to if you need more inputs, even from your bed. Some good digital places to hang out are Pinterest, for general inspirational ideas, or Behance if you, like us, need inspiration concerning visuals or branding.\n\n<span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Do things you've never done before</strong>\n\nWe're all guilty of repeating good old patterns. It can be a time saver and sometimes the best way to go. When it comes to inspiration however, it doesn't spring from doing the same things. Our journey, from starting a company to leaving home for 8 months and visiting unfamiliar places, is about learning by doing. You don’t need to travel for this, but new paths do good.\n\n<div style=\"display: flex;align-items: center;justify-content: center;gap: 1rem;\">\n<img src=\"/images/story2-grab.webp\" style=\"max-height: 380px;\" class=\"stories-rightimage\" alt=\"Laptop in lap in the taxi\">\n<img src=\"/images/story2-workplace.webp\" class=\"stories-rightimage\" alt=\"A funny workplace with two laptops on a ironing board\"></div>\n\n<span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Actualize the \"bad\" ideas. Remember when internet was just a passing fad?</strong>\n\nThose very ideas that linger in our minds, scribbled on post-it notes, or even the ones our colleagues might chuckle at, could hold the seeds of something good. They deserve a chance to grow. The initial drafts might not be perfect, but experimenting with them brings us out of our hesitation and into a space of greater creativity, openness, and impact. Having too-high aspirations can block the creativity, and we know that by always chasing the ideal of coolness... Yet, if you never try and fail, it won't be cool in the end.\n\n<span style=\"color: #c83c4e\">►</span> <strong style=\"font-style: italic\">Break a leg or two</strong>\n\nEver wonder why some of your best ideas pop up while you're in the shower? Sometimes, the key to unlocking more inspiration is simply by takinging a break.It's not just a popular belief; even science backs up the idea that taking breaks boost our productivity and creativity. When we're exposed to the same stimuli for extended periods, our brains start to tune out, leading to that familiar feeling of mental emptiness after focusing on a single task for too long. To summarize: t's not you – it's your brain.\n\nFor us, our breaks is sometimes a walk to the grocery store to buy more Pepsi Max (Felix), listening to [this Spotify playlist](#spotify-playlist), or playing Tetris on the phone (Inez). Even if you're spending the whole day in an office, sometimes a simple walk to the coffee machine or disturbing a co-worker with small talk is enough to get you through the worst creative block.\n\n<div class=\"stories-bg-plate\">\n<h2>Sum of the cardamom</h2>\n\nYou don't need to travel to find inspiration. And what bursts _your_ creativity, might be different for another. But some things we realized the past months to get more inspired, which we will bring back home, are:\n<br>\n\n- <span style=\"font-weight: 600;\">Change the environment</span>\n\n  Work from a new café, co-working space or just wherever. Change it.\n\n- <span style=\"font-weight: 600;\">Put your brain in stand-by mode</span>\n\n  Whether that means working out, taking a walk, grab a beer with a friend or playing Tetris on you Gameboy Color.\n\n- <span style=\"font-weight: 600;\">Do something intentionally as ugly or bad as possible</span>\n\n  Just to get rid of that paralyzed state of not knowing what to do at all.\n\n- <span style=\"font-weight: 600;\">Challenge yourself just like kids play \"the floor is lava\"</span>\n\n  By forcing yourself into new circumstances, you need to find new ways to pass the obstacles. What if you incorporate the same thinking in your work?\n\n<br>\nWe'd love to hear your thoughts or secret recipes to boost inspiration and creativity <br>– <a class=\"btnOpenForm\">send us a comment here if you want!</a>\n\n</div>\n\n<iframe id=\"spotify-playlist\" style=\"border-radius:12px;margin-top:3rem;\" src=\"https://open.spotify.com/embed/playlist/7BPuo7m9KYGlXxcot30Y0Z?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n\n##### Ps. just some nice songs that's been on repeat last week to drain the singing from our lovely neighbor, the rooster.\n\n<div class=\"hrSpace\">\n</div>\n<strong>Smile and be different.</strong>\n\n<h3 class=\"signature\">/xz studios</h2>\n\n<style>\n\n \n     .stories-rightimage {\n    width: 200px;\n    max-width: 100%;\n    margin: 0rem 1rem;\n    overflow-x: hidden;\n         filter: grayscale(100);\n         transition: 0.5s all ease;\n    }\n    .stories-rightimage:hover {\n        filter: grayscale(0);\n        transform: scale(1.01);\n    }\n    @media (min-width: 768px) {\n    .stories-rightimage {\n        flex: 0 0 40%;\n           }   \n     \n    }\n\n.stories-quote {\n    background-color: #DFDFDF;\n    border-radius: 10px;\n    padding: 3rem 4rem;\n    text-align: center;\n    color: #1c1e21;\n      margin-top: 4rem;\n    margin-bottom: 2rem;\n    position: relative;\n}\n.stories-quote h3 {\n    font-weight: 600;\n    /* font-style: italic; */\n    font-size: 2rem;\n}\n.stories-bg-plate {\n    background-color: #E2E2E2;\n    border-radius: 8px;\n    margin-top: 4rem;\n    margin-bottom: 2rem;\n    padding: 1.4rem;\n}\n\n.stories-bg-plate li {\nmargin-left: 30px;\n}\n@media (min-width: 768px)\n.stories-bg-plate {\n    margin-top: padding: 2rem;\n    }\n\n\n\n\n    .hrSpace {\n       padding: 1rem 0rem 2rem 0rem;\n    }\n.signature {\n    font-family: \"lindsey-signature\", sans-serif;\n    font-weight: 400;\n    font-size: 5rem;\n    margin-top: 0rem;\n}\n\n\n</style>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"working-while-travelling-is-different","text":"Working while travelling is different."},{"depth":5,"slug":"ps-just-some-nice-songs-thats-been-on-repeat-last-week-to-drain-the-singing-from-our-lovely-neighbor-the-rooster","text":"Ps. just some nice songs that’s been on repeat last week to drain the singing from our lovely neighbor, the rooster."}];
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

const didWeFindInspiration = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { $$Post as $, didWeFindInspiration as d };
