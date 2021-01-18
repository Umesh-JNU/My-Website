const textArray = ['a coder', 'a web developer', 'softwere developer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan = document.querySelector('.typed-text');
const typingCursorSpan = document.querySelector('.typing-cursor');

function autoType() {
  let word = textArray[textArrayIndex];
  if (charIndex < word.length) {
    if (!typingCursorSpan.classList.contains('unblink')) {
      typingCursorSpan.classList.add('unblink');
    }
    typedTextSpan.innerHTML += word.charAt(charIndex);
    charIndex++;
    setTimeout(autoType, typingDelay);
  }
  else {
    typingCursorSpan.classList.remove('unblink');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!typingCursorSpan.classList.contains('unblink')) {
      typingCursorSpan.classList.add('unblink');
    }
    typedTextSpan.innerHTML = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    typingCursorSpan.classList.remove('unblink');
    textArrayIndex++;
    if (textArrayIndex == textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(autoType, typingDelay + 1000);
  }
}
window.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) {
    setTimeout(autoType, newTextDelay + 250);
  }
})