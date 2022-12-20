import Swiper from './modules/swiper-bundle.esm.browser.min.js';

// -----------------------------------------topslider-----------------------------------------
export function topSwiper() {

  const topSlider = new Swiper('.top-slider', {
    wrapperClass: 'top-slider__wrapper',
    slideClass: 'top-slider__slide',
    loop: true,
    speed: 1000,
    pagination: {
      el: `.top-slider__pagination`,
      type: `bullets`,
      bulletClass: 'top-slider__bullet',
      bulletActiveClass: 'top-slider__bullet_active',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })

  // установка фоновых изображений на буллеты
  const collectionImages = document.querySelectorAll('.top-slider__img');
  const arrImages = [];
  for (const i of collectionImages) {
    arrImages.push(i);
  };
  arrImages.shift();
  arrImages.pop();
  const arrBullets = document.querySelectorAll('.top-slider__bullet');
  for (let i = 0; i < arrImages.length; i++) {
    const imagePath = arrImages[i].getAttribute('src');
    arrBullets[i].style.backgroundImage = `url('${imagePath}')`;
  }

}

// -----------------------------------------popular slider-----------------------------------------
export function popSwiper() {

  const popSlider = new Swiper('.popular', {
    wrapperClass: 'popular__body',
    slideClass: 'popular__slide',
    speed: 1000,
    spaceBetween: 30,
    simulateTouch: false,
    navigation: {
      prevEl: `.popular__btn_prev`,
      nextEl: `.popular__btn_next`,
    },
    pagination: {
      el: `.popular__fraction`,
      type: `fraction`,
    },
  })

}