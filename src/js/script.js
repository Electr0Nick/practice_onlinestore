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


// открытие каталог бара
const catalogBar = document.getElementById('ctlg');
const catalogHead = document.getElementById('ctlg-head');
const сatalogButton = document.getElementById('ctlg-btn');
const arrCatalogBarItems = document.querySelectorAll('.catalogbar__list_main > .catalogbar__item');
const catalogHeadStyles = getComputedStyle(catalogHead);
const catalogBarItemStyles = getComputedStyle(arrCatalogBarItems[0]);
const catalogBarItemHeight = catalogBarItemStyles.height;
const openCatalogBarHeight = parseInt(catalogHeadStyles.height) + arrCatalogBarItems.length * parseInt(catalogBarItemHeight);
const closeCatalogBarHeight = parseInt(catalogHeadStyles.height);

const arrCatalogBarLinksMenu = document.querySelectorAll('.catalogbar__link_menu');

const addActiveForCtlgLinks = (event) => {
  for (let i = 0; i < arrCatalogBarLinksMenu.length; i++) {
    arrCatalogBarLinksMenu[i].nextElementSibling.classList.remove('active');
  }
  const eventLink = event.target;
  const hideList = eventLink.nextElementSibling;
  const hideListElements = eventLink.nextElementSibling.children;
  const hideListHeight = hideListElements.length * parseInt(catalogBarItemHeight);
  activeClass(eventLink);
  activeClass(hideList);
  if (hideList.classList.contains('active')) {
    catalogBar.style.height = `${openCatalogBarHeight + hideListHeight}px`;
  } else {
    catalogBar.style.height = `${openCatalogBarHeight}px`;
  }
}
for (let i = 0; i < arrCatalogBarLinksMenu.length; i++) {
  arrCatalogBarLinksMenu[i].addEventListener('click', addActiveForCtlgLinks);
}

const addActiveForCtlg = () => {
    activeClass(catalogBar);
    if (catalogBar.classList.contains('active')) {
      catalogBar.style.height = `${openCatalogBarHeight}px`;
    } else {
      catalogBar.style.height = `${closeCatalogBarHeight}px`;
    }
  }
сatalogButton.addEventListener('click', addActiveForCtlg);