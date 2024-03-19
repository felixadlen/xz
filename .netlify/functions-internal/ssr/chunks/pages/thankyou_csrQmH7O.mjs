import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, h as renderHead } from '../astro_MM15vAtA.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { $ as $$ContactForm } from './_slug__1TBfXjIV.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xzstudios.se/stories");
const $$Thankyou = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thankyou;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>XZ</title><meta name="title" content="WE ARE XZ | Our marketing approach"><meta name="description" content="A marketing studio from Malm\xF6, driven by new experiences and to do something different. This is our story."><meta name="robots" content="noindex, nofollow"><link rel="stylesheet" href="/main.css"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css"><link rel="stylesheet" href="//use.fontawesome.com/releases/v6.5.0/css/all.css"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SM8RYLZY5G"><\/script><script type="text/javascript">\n      // Clarity\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "jovcl27t8k");\n    <\/script>', `</head> <body> <section class="vh-90-thankyou"> <div id="thanks-container"> <img src="img/thankyou-embrace.svg" alt="" style="max-width: 500px;max-height: 200px;margin-bottom: -60px;"> <div id="form-name"> <form id="name-form" onsubmit="displayWelcome(); return false;" action="https://api.web3forms.com/submit" method="POST"> <input type="hidden" name="access_key" value="4b11ec5a-de92-40f5-8959-d81dcb232e08"> <input type="hidden" name="subject" value="Submission from ThankYou-page"> <input type="text" name="name" id="name-input" placeholder="Enter your name"> <button type="submit" class="btn-closed" disabled>Just do it</button> </form> </div> </div> <h1 id="welcome-message"> <!-- Welcome message will be set here --> </h1> <div id="thankyouContainer"> <p style="max-width: 800px;font-size: 1.5rem;">Do you know what you are? A legend! A curious one.
<br> A few weeks ago, we went live with XZ. And you,
</p> </div> </section> <script>
function displayWelcome() {
  var name = document.getElementById("name-input").value;
  var welcomeMessage = "Hello " + name;
  document.getElementById("welcome-message").textContent = welcomeMessage;

  var form = document.getElementById("form-name");
  form.classList.add("hidden");

  setTimeout(function() {
    form.style.display = 'none';
    var welcome = document.getElementById("welcome-message");
    welcome.style.display = 'flex';
    setTimeout(function() {
      welcome.style.opacity = 1;
      setTimeout(function() {
        welcome.style.marginTop = '-250px'; // Margin change
        setTimeout(function() {
          var thankyou = document.getElementById("thankyouContainer");
          thankyou.style.display = 'flex'; // Or 'flex' if it suits your layout
          thankyou.style.opacity = 1;
        }, 1800);
        setTimeout(function() {
          var thankyouTwo = document.getElementById("thankyouSectionTwo");
          thankyouTwo.style.display = 'flex';
        }, 1800); // Adjust this delay as needed
      }, 1000); // Delay for 1 second for margin change
    }, 100); 
  }, 400); 
}

document.getElementById("name-input").addEventListener("input", function() {
  const nameInput = this;
  const submitButton = document.querySelector("button[type='submit']");

  if (nameInput.value.length >= 3) {
    submitButton.classList.remove("btn-closed");
    submitButton.classList.add("btn-red");
    submitButton.disabled = false; // Enable the button
  } else {
    submitButton.classList.remove("btn-red");
    submitButton.classList.add("btn-closed");
    submitButton.disabled = true; // Keep the button disabled
  }
});

document.getElementById('name-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var formData = new FormData(this); // Get form data

  // AJAX request to Web3Forms
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.web3forms.com/submit', true);
  xhr.setRequestHeader('Accept', 'application/json'); // Set appropriate header for Web3Forms

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        displayWelcome(); // Call your custom function after successful submission
      } else {
        // Handle errors here
        console.error('Form submission failed: ', xhr.statusText);
      }
    }
  };

  xhr.send(formData); // Send the form data
});

    <\/script> <section id="thankyouSectionTwo" class="dark-bg vh-90" style="display: none;">asdasd</section> `, ' <script src="/script.js"><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "ContactForm", $$ContactForm, {}));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/thankyou.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/src/pages/thankyou.astro";
const $$url = "/thankyou";

export { $$Thankyou as default, $$file as file, $$url as url };
