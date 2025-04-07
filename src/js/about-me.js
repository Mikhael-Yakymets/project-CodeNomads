/*Accordion*/

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('#accordion-about', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
  });
});

/*Swiper*/

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const mySkillSwiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  slidesPerView: 2,
  speed: 800,
  navigation: {
    nextEl: '.swiper-skills-button-next',
  },
  breakpoints: {
    375: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// Improvements for button focus when pressed
document
  .querySelector('.swiper-skills-button-next')
  .addEventListener('click', () => {
    document.querySelector('.swiper-skills-button-next').blur();
  });
