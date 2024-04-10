import iconsSvg from "./icons.js";

// Element selection from the DOM.
const MENU_OPEN_ICONS = document.getElementsByClassName('menu-icon-open');
const MENU_CLOSE_ICONS = document.getElementsByClassName('menu-icon-close');
const DARK_MODE_ICONS = document.getElementsByClassName('dark-mode-icon');
const LIGHT_MODE_ICONS = document.getElementsByClassName('light-mode-icons');


function assignIcons(icons, svg) {
    const iconsElements = icons;
    for (let i = 0; i < icons.length; i+=1) {
        iconsElements[i].innerHTML = svg;
    }
}

assignIcons(MENU_OPEN_ICONS, iconsSvg.menuOpen);
assignIcons(MENU_CLOSE_ICONS, iconsSvg.menuClose);
assignIcons(DARK_MODE_ICONS, iconsSvg.darkMode);
assignIcons(LIGHT_MODE_ICONS, iconsSvg.lightMode);


