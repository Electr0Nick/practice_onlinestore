"use strict"

// для сборки GULP: ------------------------------------- --------------------------------------
import isWebp from './modules/is_webp_for_css.js';
isWebp();
// для динамического адаптива ------------------------------------- ----------------------------
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt();


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


// плавное открытие каталог бара ------------------------------------- -------------------------
const catalogBar = document.getElementById('ctlg');
const catalogHead = document.getElementById('ctlg-head');
const catalogHeadStyles = getComputedStyle(catalogHead);
const сatalogButton = document.getElementById('ctlg-btn');
const catalogBody = document.getElementById('ctlg-body');
const arrCatalogBarLinks = document.querySelectorAll('.ctlg-body__link');
const catalogBarLinkStyles = getComputedStyle(arrCatalogBarLinks[0]);
const openCatalogBarHeight = parseInt(catalogHeadStyles.height) + arrCatalogBarLinks.length * parseInt(catalogBarLinkStyles.height);
const closeCatalogBarHeight = parseInt(catalogHeadStyles.height);
catalogBody.style.height = `${openCatalogBarHeight}px`;
const addActiveForCtlg = () => {
    activeClass(catalogBar);
    if (catalogBar.classList.contains('active')) {
      catalogBar.style.height = `${openCatalogBarHeight}px`;
    } else {
      catalogBar.style.height = `${closeCatalogBarHeight}px`;
    }
  }
сatalogButton.addEventListener('click', addActiveForCtlg);


// плавное открытие правой панели ------------------------------------- ------------------------
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