"use strict"

// для сборки GULP:
import isWebp from './modules/is_webp_for_css.js';
isWebp();

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

// перенос корзины
const basket = document.getElementById('basket');
const phonesBlock = document.getElementById('phones-block');
// phonesBlock.append(basket);
