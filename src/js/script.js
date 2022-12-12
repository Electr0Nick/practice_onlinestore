"use strict"

// для сборки GULP: ------------------------------------- --------------------------------------
import isWebp from './modules/can-browser-support-webp.js';
isWebp();
// для динамического адаптива ------------------------------------- ----------------------------
import { useDynamicAdapt } from './modules/dynamic-adapt.js'
useDynamicAdapt();
// слайдеры ------------------------------------- ----------------------------
import { topSwiper } from './swiper_settings.js'
topSwiper();

// присвоение/изъятие у элемента класса .active ------------------------------------- ----------------------------
const activeClass = (el) => {
  el.classList.toggle('active');
}


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
const arrCatalogBarLinks = document.querySelectorAll('.ctlg-body__link');
const catalogBarLinkStyles = getComputedStyle(arrCatalogBarLinks[0]);
const openCatalogBarBodyHeight = arrCatalogBarLinks.length * parseInt(catalogBarLinkStyles.height);
const addActiveForCtlg = () => {
    activeClass(catalogBody);
    activeClass(сatalogButton);
    if (catalogBody.classList.contains('active')) {
      catalogBody.style.height = `${openCatalogBarBodyHeight}px`;
    } else {
      catalogBody.style.height = `0px`;
    }
  }
сatalogButton.addEventListener('click', addActiveForCtlg);


// плавное открытие правой панели каталог-бара ------------------------------------- ------------------------
const arrCatalogBarMenuItems = document.querySelectorAll('.ctlg-body__menu');
for (let i = 0; i < arrCatalogBarMenuItems.length; i++) {
  const menuItem = arrCatalogBarMenuItems[i];
  const itemPanel = menuItem.querySelector('.ctlg-panel');
  menuItem.addEventListener('mouseenter', function(){
    itemPanel.classList.add('active');
  });
  menuItem.addEventListener('mouseleave', function(){
    itemPanel.classList.remove('active');
  });
}


// плавное открытие списка категорий поиска ------------------------------------- --------------------------------------- --
const searchOptions = document.getElementById('srch-options');
const searchArrows = document.getElementById('srch-arrows');
const searchList = document.getElementById('srch-list');
const addActiveForSearchList = () => {
  activeClass(searchList);
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