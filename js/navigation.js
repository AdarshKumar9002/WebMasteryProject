// import
import iconsSvg from './icons.js';

// Element selection from the DOM.
const MENU_ELEMENT = document.getElementById('menu-btn');
const NAV_ELEMENT = document.querySelector('nav');

// change the attributes value
const toggleAttributes = (visibility) => {
  const isNavVisible = visibility;
  if (isNavVisible === 'false') {
    // Set the value of 'data-visible' to true in nav element
    NAV_ELEMENT.setAttribute('data-visible', 'true');

    // Set the value of 'aria-expanded' to true in nav element
    MENU_ELEMENT.setAttribute('aria-expanded', 'true');
  } else {
    // Set the value of 'data-visible' to false in nav element
    NAV_ELEMENT.setAttribute('data-visible', 'false');

    // Set the value of 'aria-expanded' to false in nav element
    MENU_ELEMENT.setAttribute('aria-expanded', 'false');
  }
};

// Add/Remove class from nav
const toggleClass = (visibility) => {
  const isNavVisible = visibility;

  if (isNavVisible === 'false') {
    // Add the 'nav-visible' class from nav menu
    NAV_ELEMENT.classList.add('nav-visible');
  } else {
    // remove the 'nav-visible' class from nav menu
    NAV_ELEMENT.classList.remove('nav-visible');
  }
};

// Change Menu Icon
const toggleIcon = (visibility) => {
  const isNavVisible = visibility;

  if (isNavVisible === 'false') {
    // Replace the Menu HTML inside the menu button with menuClose
    MENU_ELEMENT.innerHTML = iconsSvg.menuClose;
  } else {
    // Replace the Menu HTML inside the menu button with menuOpen
    MENU_ELEMENT.innerHTML = iconsSvg.menuOpen;
  }
};

const toggleNavigation = () => {
  // Get the value of data-visible attribue from nav and store it
  const visibility = NAV_ELEMENT.getAttribute('data-visible');

  toggleAttributes(visibility);
  toggleClass(visibility);
  toggleIcon(visibility);
};

// export
export { MENU_ELEMENT, toggleNavigation };
