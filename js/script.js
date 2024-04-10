// import
import './icons-toggle.js';

import{MENU_ELEMENT, toggleNavigation,} from './navigation.js';

import{THEME_ELEMENT, toggleTheme} from './theme.js';

// Element selection from the DOM.



// =============== Navigation ===============

MENU_ELEMENT.addEventListener('click', toggleNavigation);

// =============== Theme ===============

THEME_ELEMENT.addEventListener('click', toggleTheme);