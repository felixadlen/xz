document.addEventListener('DOMContentLoaded', (event) => {
  const h2Element = document.querySelector('.fade-highlight');
  if (h2Element) {
    h2Element.classList.add('visible');
    animateWords(h2Element);
  }
});

function animateWords(element) {
  let words = element.textContent.split(' ');
  element.innerHTML = '';
  words.forEach((word, index) => {
    let wordSpan = document.createElement('span');
    wordSpan.textContent = word + ' ';
    wordSpan.classList.add('word-highlight');
    wordSpan.style.animationDelay = `${0.5 + index * 0.5}s`;
    element.appendChild(wordSpan);
  });
}

// ----


// TEST TILTCARD I HERO
let constrain = 20; // You can adjust this for more/less sensitivity
let mouseOverContainer = document.getElementById("home-hero-two");
let tiltCard = document.getElementById("tilt-card");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;

  return "perspective(100px) " 
    + "rotateX(" + calcX + "deg) "
    + "rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([tiltCard]);

  window.requestAnimationFrame(function() {
    transformElement(tiltCard, position);
  });
};


let smileText = document.querySelector(".smile");

smileText.addEventListener('click', function() {
  let headerSmiley = document.getElementById('h2SadSmiley')
  let headerSadSmiley = document.getElementById('h2Smiley')
    if (smileText.textContent === ':)') {
        smileText.textContent = ':(';
        headerSadSmiley.classList.remove('hidden');
        headerSmiley.classList.add('hidden');
      
    } else {
        smileText.textContent = ':)';
       headerSadSmiley.classList.add('hidden');
       headerSmiley.classList.remove('hidden');
    }
    console.log('You clicked');
});



// Test embrace-knapp

const embraceButton = document.querySelector('#embraceButton');
const embraceText = document.querySelector('.embraceText');
const embraceAnswer = document.querySelector('.embrace-answer');
const embraceAnswerTwo = document.querySelector('.embrace-answer2');

const words = ['you', 'are', 'curious'];
let currentWordIndex = 0;

const tellMoreButton = document.querySelector('#tellMoreButton');

embraceButton.addEventListener('click', () => {
    embraceText.textContent += ' ' + words[currentWordIndex];

    embraceButton.textContent = 'Try again';
    currentWordIndex++;
    if (currentWordIndex === 2) {
      embraceButton.textContent = 'One last time';

    } 
 

    if (currentWordIndex >= words.length) {
        embraceButton.classList.add('hidden')
        embraceAnswer.classList.remove('hidden');
        tellMoreButton.classList.remove('hidden');
    }

    tellMoreButton.addEventListener('click', () => {
      embraceAnswerTwo.classList.remove('hidden');
      tellMoreButton.classList.add('hidden');
    
    })
});


// 
document.querySelector('.bird').addEventListener('click', function() {
  this.classList.toggle('clicked');
  console.log('du klicka');
});


// NEDAN ÄR "Felix and Inez" transforms to XZ på about-us-sidan

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const spans = document.querySelectorAll('#text span');
    let xSpan, zSpan;

    spans.forEach(el => {
      const letter = el.textContent.toUpperCase();
      if (letter === 'X') xSpan = el;
      if (letter === 'Z') zSpan = el;
      if (!['X', 'Z'].includes(letter)) {
        el.classList.add('hide');
      }
    });

    setTimeout(() => {
      const xRect = xSpan.getBoundingClientRect();
      const zRect = zSpan.getBoundingClientRect();

      const distanceToMove = (zRect.left - xRect.right) / 2 - 1; 

      xSpan.style.transform = `translateX(${distanceToMove}px)`;
      zSpan.style.transform = `translateX(${-distanceToMove}px)`;
    }, 4000); 
  }, 2000);
});

// 