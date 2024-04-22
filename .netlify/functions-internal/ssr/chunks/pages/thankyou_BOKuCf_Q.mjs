import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, h as renderHead } from '../astro_9VRvWq-d.mjs';
import 'kleur/colors';
import { $ as $$ContactForm } from './_slug__Izley0FA.mjs';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xzstudios.se");
const $$Thankyou = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thankyou;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-zgdhwzdv> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>XZ</title><meta name="title" content="THANK YOU"><meta name="robots" content="noindex, nofollow"><link rel="stylesheet" href="/main.css"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><link rel="stylesheet" href="//use.fontawesome.com/releases/v6.5.0/css/all.css"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script><script type="text/javascript">\n      // Clarity\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "jovcl27t8k");\n    <\/script>', `</head> <body data-astro-cid-zgdhwzdv> <section class="vh-90-thankyou" data-astro-cid-zgdhwzdv> <div id="thanks-container" data-astro-cid-zgdhwzdv> <img src="/img/thankyou-img/thankyou-embrace.png" id="embraceThanks" alt="red text that says embrace the unknown" data-astro-cid-zgdhwzdv> <div id="form-name" data-astro-cid-zgdhwzdv> <form id="name-form" onsubmit="displayWelcome(); return false;" action="https://api.web3forms.com/submit" method="POST" data-astro-cid-zgdhwzdv> <input type="hidden" name="access_key" value="4b11ec5a-de92-40f5-8959-d81dcb232e08" data-astro-cid-zgdhwzdv> <input type="hidden" name="subject" value="Submission from ThankYou-page" data-astro-cid-zgdhwzdv> <input type="text" name="name" id="name-input" placeholder="Enter your first name" data-astro-cid-zgdhwzdv> <button type="submit" class="btn-closed" disabled data-astro-cid-zgdhwzdv>Just do it</button> </form> </div> </div> <div id="welcome-container" data-astro-cid-zgdhwzdv> <div data-astro-cid-zgdhwzdv> <h1 id="welcome-message" data-astro-cid-zgdhwzdv></h1> </div> <div id="thankyouContainer" data-astro-cid-zgdhwzdv> <p style="max-width: 950px;font-size: 1.5rem;" data-astro-cid-zgdhwzdv>A few weeks ago we went live with XZ. And you <span class="name-placeholder" data-astro-cid-zgdhwzdv></span>, made difference that day.
<button style="margin: 2rem auto 0rem auto;display: block;cursor: pointer;" data-astro-cid-zgdhwzdv><a href="#thankyouSectionTwo" class="btn-red" style="cursor: pointer;" data-astro-cid-zgdhwzdv>What difference?</a></button> </p> </div> </div> </section> <script>
      function displayWelcome() {
        window.scrollTo(0, 0); 
        document.body.style.overflow = 'hidden';
        var name = document.getElementById("name-input").value;
        var formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        var welcomeMessage = "Hello " + formattedName;
        document.getElementById("welcome-message").textContent = welcomeMessage;
    
        updateNameInElements(name);
    
        var form = document.getElementById("form-name");
        form.classList.add("hidden");
        let embraceTextThanks = document.getElementById('embraceThanks');
        embraceTextThanks.classList.add('hidden');
    
        setTimeout(function() {
          var introThanks = document.querySelector('.vh-90-thankyou')
          introThanks.style.height = '100vh';
          form.style.display = 'none';
          embraceTextThanks.style.display = 'none';
          var welcomeContainer = document.getElementById("welcome-container");
        var welcomeMessage = document.getElementById("welcome-message");
        var thankyou = document.getElementById("thankyouContainer");

        welcomeContainer.style.display = 'flex'; // Make sure the container is displayed
        welcomeContainer.style.opacity = 1;
        welcomeMessage.style.display = 'block'; // Change this as needed for your layout
        welcomeMessage.style.opacity = 1; // Make the message fully visible

        thankyou.style.display = 'flex';
        thankyou.style.opacity = 0;
        thankyou.style.transition = "opacity 0.5s ease-in-out 1s";

          setTimeout(function() {
            welcomeContainer.style.marginTop = '-150px'; // Margin change for welcome container
            thankyou.style.opacity = 1;
          }, 0);
        }, 400);
        setTimeout(function() {
            var thankyouTwo = document.getElementById("thankyouSectionTwo");
            thankyouTwo.style.display = 'flex';
            var thankyouThree = document.getElementById("thankyouSectionThree");
            thankyouThree.style.display = 'flex';
            var thankyouEnding = document.getElementById("thankyou-end-strip");
            thankyouEnding.style.display = 'flex';
            // Unlock scroll here
            document.body.style.overflow = '';
          }, 1800);
      }
    
      document.getElementById("name-input").addEventListener("input", function() {
        const nameInput = this;
        const submitButton = document.querySelector("button[type='submit']");
    
        if (nameInput.value.length >= 3) {
          submitButton.classList.remove("btn-closed");
          submitButton.classList.add("btn-red");
          submitButton.disabled = false;
        } else {
          submitButton.classList.remove("btn-red");
          submitButton.classList.add("btn-closed");
          submitButton.disabled = true;
        }
      });
    
      document.getElementById('name-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.web3forms.com/submit', true);
        xhr.setRequestHeader('Accept', 'application/json');
    
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
              displayWelcome();
            } else {
              console.error('Form submission failed: ', xhr.statusText);
            }
          }
        };
    
        xhr.send(formData);
      });
    
      function updateNameInElements(name) {
        var elementsToUpdate = document.querySelectorAll(".name-placeholder");
        elementsToUpdate.forEach(function(element) {
          element.textContent = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        });
      }
    <\/script> <section id="thankyouSectionTwo" class="dark-bg" style="display: none;" data-astro-cid-zgdhwzdv> <div class="thankyou-container" data-astro-cid-zgdhwzdv> <h2 class="white" data-astro-cid-zgdhwzdv>You cared and shared</h2> <h3 class="white-color" data-astro-cid-zgdhwzdv>Your altruistic attitude in supporting us resulted in a new customer for us that day.
    Sometimes the small actions, become the big actions. And that is why we want to say thank you. Thank you <span class="name-placeholder" data-astro-cid-zgdhwzdv></span>!</h3> </div> <span class="white-color thankyou-special" data-astro-cid-zgdhwzdv>The XZ-smileys are just a small symbol of our appreciation, and a reminder that good things happen to good people. You are good. Put the stickers on something fun. </span> </section> <section id="thankyouSectionThree" style="display: none;" data-astro-cid-zgdhwzdv> <div class="thankyou-images" data-astro-cid-zgdhwzdv> <img src="img/thankyou-img/smiley-beer.jpg" alt="" class="dansk-beer" data-astro-cid-zgdhwzdv> <img src="img/thankyou-img/smiley-cat.jpg" alt="" data-astro-cid-zgdhwzdv> <img src="img/thankyou-img/smiley-couple.jpg" alt="" data-astro-cid-zgdhwzdv> <img src="img/thankyou-img/smiley-turning.jpg" alt="" class="turning-torso" data-astro-cid-zgdhwzdv> </div> </section> <section id="thankyou-end-strip" data-astro-cid-zgdhwzdv> <img src="/img/xz-logo-white.svg" alt="" style="max-width: 50px;" data-astro-cid-zgdhwzdv> </section>  `, ' <script src="/script.js"><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-zgdhwzdv": true }));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/thankyou.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/thankyou.astro";
const $$url = "/thankyou";

export { $$Thankyou as default, $$file as file, $$url as url };
