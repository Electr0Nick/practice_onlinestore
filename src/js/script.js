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
const addActiveForCtlg = () => {
  activeClass(catalogBody);
  activeClass(сatalogButton);

  // if (catalogBody.classList.contains('active')) {
  //     catalogBody.style.maxHeight = `${catalogBody.scrollHeight}px`;
  //   } else {
  //     catalogBody.style.maxHeight = '0';
  //   }

  // if (!catalogBody.classList.contains('active')) {
  //   const arrPanels = document.querySelectorAll('.ctlg-panel');
  //   for (let i = 0; i < arrPanels.length; i++) {
  //     arrPanels[i].classList.remove('active');
  //     arrPanels[i].style.maxHeight = '0';
  //   }
  // }

}
сatalogButton.addEventListener('click', addActiveForCtlg);
  
  
// плавное открытие панели каталог-бара ------------------------------------- ------------------------
const arrCatalogBarMenuItems = document.querySelectorAll('.ctlg-body__menu');
for (let i = 0; i < arrCatalogBarMenuItems.length; i++) {
  const menuItem = arrCatalogBarMenuItems[i];
  const itemLink = menuItem.querySelector('.ctlg-body__link_menu');
  const itemPanel = menuItem.querySelector('.ctlg-panel');
  if (document.documentElement.clientWidth > 992) {
    itemLink.addEventListener('mouseenter', () => itemPanel.classList.add('active'));
    itemLink.addEventListener('mouseleave', () => itemPanel.classList.remove('active'));
  } else {
    itemLink.addEventListener('click', function(event){
      event.preventDefault();
      activeClass(itemPanel);
      if (itemPanel.classList.contains('active')) {
        itemPanel.style.maxHeight = `${itemPanel.scrollHeight}px`;
      } else {
        itemPanel.style.maxHeight = '0';
      }
    });
    itemPanel.addEventListener('transitionend', () => catalogBody.style.maxHeight = `${catalogBody.scrollHeight}px`)
  }
}


// плавное открытие списка категорий поиска ------------------------------------- --------------------------------------- --
const searchOptions = document.getElementById('srch-options');
const searchArrows = document.getElementById('srch-arrows');
const searchList = document.getElementById('srch-list');
const addActiveForSearchList = () => {
  activeClass(searchList);
  activeClass(searchArrows);
  if (searchList.classList.contains('active')) {
    searchList.style.maxHeight = `${searchList.scrollHeight}px`;
  } else {
    searchList.style.maxHeight = '0';
  }
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