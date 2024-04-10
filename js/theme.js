// import
import iconsSvg from './icons.js';

// Element selection from the DOM.
const THEME_ELEMENT = document.getElementById('theme-btn');
const BODY_ELEMENT = document.body;

let theme;

// Toggle the 'dark-mode' class in the body element
const toggleThemeClass = () => {
  BODY_ELEMENT.classList.toggle('dark-mode');
};

// change the theme Icon
const toggleThemeIcon = () => {
  theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    THEME_ELEMENT.innerHTML = iconsSvg.darkMode;
  } else {
    THEME_ELEMENT.innerHTML = iconsSvg.lightMode;
  }
};

// Save the current theme in the local storage
const saveThemeToLocalStorage = () => {
  const checkClass = BODY_ELEMENT.classList.contains('dark-mode');
  if (checkClass) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
};

// Set the previously sected theme when the page opens
theme = localStorage.getItem('theme');
if (theme === 'dark') {
  toggleThemeClass();
  THEME_ELEMENT.innerHTML = iconsSvg.lightMode;
}


const toggleTheme = () => {
  toggleThemeClass();
  toggleThemeIcon();
  saveThemeToLocalStorage();
};

export { THEME_ELEMENT, toggleTheme };
