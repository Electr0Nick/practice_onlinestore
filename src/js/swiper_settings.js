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

  const popSlider = new Swiper('.popular-slider', {
    wrapperClass: 'popular-slider__body',
    slideClass: 'popular-slider__slide',
    speed: 1000,
    spaceBetween: 30,
    simulateTouch: false,
    navigation: {
      prevEl: `.popular-slider__btn_prev`,
      nextEl: `.popular-slider__btn_next`,
    },
    pagination: {
      el: `.popular-slider__fraction`,
      type: `fraction`,
    },
  })

}

// -----------------------------------------brands slider-----------------------------------------
export function brandsSwiper() {

  const brandsSlider = new Swiper('.brands-block__slider', {
    wrapperClass: 'brands-block__wrapper',
    slideClass: 'brands-block__slide',
    speed: 800,
    loop: true,
    navigation: {
      prevEl: `.brands-block__button_prev`,
      nextEl: `.brands-block__button_next`,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      680: {
          slidesPerView: 2,
      },
      880: {
          slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
    },
  },
  })

}