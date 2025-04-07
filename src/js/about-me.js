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
import 'swiper/swiper-bundle.css';
