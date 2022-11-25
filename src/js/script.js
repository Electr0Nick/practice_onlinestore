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


// открытие каталог бара
const сatalogButton = document.getElementById('ctlg-btn');
const catalogBody = document.getElementById('ctlg-body');
const addActiveForCtlg = () => {
  activeClass(catalogBody);
}
сatalogButton.addEventListener('click', addActiveForCtlg);


// открытие подменю каталог бара
const tempItem = document.getElementById('temp-item');
const tempList = document.getElementById('temp-list');
const addActiveForTemp = () => {
  activeClass(tempList);
  activeClass(tempItem);
}
tempItem.addEventListener('click', addActiveForTemp);


// бургер меню
const menuButton = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');
const addActiveForNav = () => {
  activeClass(menuNav);
  activeClass(menuButton);
}
menuButton.addEventListener('click', addActiveForNav);