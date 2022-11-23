"use strict"

// для сборки GULP:
import isWebp from './modules/is_webp_for_css.js';
isWebp();
// для динамического адаптива
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt();

const activeClass = (el) => {
  el.classList.toggle('active');
}

// бургер меню
const menuButton = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');
const addActiveForNav = () => {
  activeClass(menuNav);
  activeClass(menuButton);
}
menuButton.addEventListener('click', addActiveForNav);