const BODY = document.querySelector('.grid-body');
const HAMBURGER = document.querySelector('.navbar-toggler');
const ICON = document.querySelector('.navbar-toggler-icon');
const TRIANGLE = document.querySelector('.arrow-left');
const MENU = document.querySelector('.navbar-nav');
let screenReaderText = document.querySelector('.navbar-toggler .screen-reader-text');

function showMenu() {
  MENU.classList.toggle('show');
  TRIANGLE.classList.toggle('show');
  HAMBURGER.getAttribute('aria-expanded') == 'false' ? HAMBURGER.setAttribute('aria-expanded', true) : HAMBURGER.setAttribute('aria-expanded', false);
  screenReaderText.innerHTML == 'Reveal menu' ? screenReaderText.innerHTML = 'Hide menu' : screenReaderText.innerHTML = 'Reveal menu';

}

function hideMenu() {
      MENU.classList.remove('show');
      TRIANGLE.classList.remove('show');
}

// Hide nav menu when touch or click happens elsewhere:
function clickTarget(e) {
    if (!MENU.contains(e.target) && e.target !== ICON && e.target !== TRIANGLE) {
      hideMenu();
  }
}

// Listen for hamburger icon clicks
HAMBURGER.addEventListener('click', showMenu, false);

// Listen for clicks anywhere on screen:
BODY.addEventListener('click', function(e) { clickTarget(e); }, true);