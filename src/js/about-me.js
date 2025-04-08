/*Accordion*/

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('#accordion-about', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
  });
});

/*Swiper*/

document.addEventListener('DOMContentLoaded', () => {
  const mySkillSwiper = new Swiper('.my-skill-swiper', {
    modules: [Navigation, Keyboard],
    loop: true,
    speed: 800,
    simulateTouch: true,
    allowTouchMove: true,
    grabCursor: true,
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-skills-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      375: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 },
    },
  });
});

document
  .querySelector('.swiper-skills-button-next')
  .addEventListener('click', () => {
    document.querySelector('.swiper-skills-button-next').blur();
  });
