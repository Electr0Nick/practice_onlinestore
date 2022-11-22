"use strict"

import isWebp from './modules/is_webp_for_css.js';
isWebp();

const menuButton = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');

const addActiveClass = () => {
  menuNav.classList.toggle('active');
  console.log('сработал');
}

menuButton.addEventListener('click', addActiveClass);