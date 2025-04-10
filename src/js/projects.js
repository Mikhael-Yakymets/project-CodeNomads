import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';


const swiperPrj = new Swiper('.swiper-projects', {
  direction: 'horizontal',
  loop: false,
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 30,
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.next-button-js-prj',
    prevEl: '.prev-button-js-prj',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  grabCursor: true,
  simulateTouch: true,
  allowTouchMove: true,
  // on: {
  //   init(swiperPrj) {
  //     updateNavigationButtons(swiperPrj, prevBtn, nextBtn);
  //   },
  //   slideChange(swiperPrj) {
  //     updateNavigationButtons(swiperPrj, prevBtn, nextBtn);
  //   },
  // },
});

