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


// плавное открытие каталог бара
const catalogBar = document.getElementById('ctlg');
const catalogHead = document.getElementById('ctlg-head');
const catalogPanel = document.getElementById('ctlg-panel');
const сatalogButton = document.getElementById('ctlg-btn');
const arrCatalogBarLinks = document.querySelectorAll('.ctlg-body__link');
const catalogHeadStyles = getComputedStyle(catalogHead);
const catalogBarLinkStyles = getComputedStyle(arrCatalogBarLinks[0]);
const catalogBarLinkHeight = catalogBarLinkStyles.height;
const openCatalogBarHeight = parseInt(catalogHeadStyles.height) + arrCatalogBarLinks.length * parseInt(catalogBarLinkHeight);
const closeCatalogBarHeight = parseInt(catalogHeadStyles.height);
catalogPanel.style.height = `${openCatalogBarHeight}px`;
const addActiveForCtlg = () => {
    activeClass(catalogBar);
    if (catalogBar.classList.contains('active')) {
      catalogBar.style.height = `${openCatalogBarHeight}px`;
    } else {
      catalogBar.style.height = `${closeCatalogBarHeight}px`;
    }
  }
сatalogButton.addEventListener('click', addActiveForCtlg);




// temp
// const tempBtn = document.getElementById('temp-btn');
// const addActivePanel = () => {
//   catalogPanel.classList.add('active');
// }
// const removeActivePanel = () => {
//   catalogPanel.classList.remove('active');
// }
// tempBtn.addEventListener('mouseover', addActivePanel);
// tempBtn.addEventListener('mouseout', removeActivePanel);