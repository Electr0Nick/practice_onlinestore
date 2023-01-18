"use strict";

// для сборки GULP: ------------------------------------- --------------------------------------
import isWebp from './modules/can-browser-support-webp.js';
isWebp();
// для динамического адаптива ------------------------------------- ----------------------------
import { useDynamicAdapt } from './modules/dynamic-adapt.js';
useDynamicAdapt();
// слайдеры ------------------------------------- ----------------------------
import { topSwiper, popSwiper, brandsSwiper } from './swiper-settings.js';
topSwiper();
popSwiper();
brandsSwiper();


// присвоение/изъятие у элемента класса .active ------------------------------------- ----------------------------
const activeClass = (el) => el.classList.toggle('active');


// бургер меню ------------------------------------- --------------------------------------- --
const menuButton = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');
const addActiveForNav = () => {
  activeClass(menuNav);
  activeClass(menuButton);
}
menuButton.addEventListener('click', addActiveForNav);


// плавное открытие каталог-бара ------------------------------------- -------------------------
const сatalogButton = document.getElementById('ctlg-btn');
const catalogBody = document.getElementById('ctlg-body');
const arrCatalogMenuItems = document.querySelectorAll('.ctlg-body__menu');
const addActiveForCtlg = () => {
  activeClass(catalogBody);
  activeClass(сatalogButton);
  if (!catalogBody.classList.contains('active')){
    for (let i = 0; i < arrCatalogMenuItems.length; i++) {
      const menuItem = arrCatalogMenuItems[i];
      const itemLink = menuItem.querySelector('.ctlg-body__link_menu');
      const itemPanel = menuItem.querySelector('.ctlg-panel');
      itemLink.classList.remove('active');
      itemPanel.classList.remove('active');
    }
  }
}
сatalogButton.addEventListener('click', addActiveForCtlg);


// плавное открытие панели каталог-бара ------------------------------------- ------------------------
for (let i = 0; i < arrCatalogMenuItems.length; i++) {
  const menuItem = arrCatalogMenuItems[i];
  const itemLink = menuItem.querySelector('.ctlg-body__link_menu');
  const itemPanel = menuItem.querySelector('.ctlg-panel');
  if (document.documentElement.clientWidth > 992) {
    menuItem.addEventListener('mouseenter', () => itemPanel.classList.add('active'));
    menuItem.addEventListener('mouseleave', () => itemPanel.classList.remove('active'));
  } else {
    menuItem.addEventListener('click', function(event){
      event.preventDefault();
      activeClass(itemPanel);
      activeClass(itemLink);
    });
  }
}


// плавное открытие панели поиска ------------------------------------- --------------------------------------- --
const searchOptions = document.getElementById('srch-options');
const searchArrows = document.getElementById('srch-arrows');
const searchPanel = document.getElementById('srch-panel');
const addActiveForSearchList = () => {
  activeClass(searchPanel);
  activeClass(searchArrows);
}
searchOptions.addEventListener('click', addActiveForSearchList);


// изменение текста в элементе srch-categories в зависимости от кол-ва выбранных категорий------------------------------------- --------------------------------------- --
const searchCategories = document.getElementById('srch-categories');
const arrSearchCheckboxes = document.querySelectorAll('.search-block__checkbox');
const addAmountOfCategories = () => {
  let categoryCounterYes = 0;
  let categoryCounterNo = arrSearchCheckboxes.length;
  for (let i = 0; i < arrSearchCheckboxes.length; i++) {
    if (arrSearchCheckboxes[i].checked) {
      categoryCounterYes++;
      categoryCounterNo--;
    }
  }
  if (categoryCounterYes) {
    if (categoryCounterNo) {
      searchCategories.innerHTML = `Категорий: ${categoryCounterYes}`;
      searchCategories.style.color = '#f68038';
    } else {
      searchCategories.innerHTML = `Везде`;
      searchCategories.style.color = '#999999';
    }
  } else {
    searchCategories.innerHTML = `Везде`;
    searchCategories.style.color = '#999999';
  }
}
for (let i = 0; i < arrSearchCheckboxes.length; i++) {
  const checkbox = arrSearchCheckboxes[i];
  checkbox.addEventListener('click', addAmountOfCategories)
}