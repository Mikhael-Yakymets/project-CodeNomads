import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    watchOverflow: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      }
    },
  });

  loadReviews(swiper);
});

async function loadReviews(swiper) {
  try {
    const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
    const reviews = response.data; 

    const swiperWrapper = document.querySelector(".swiper-wrapper"); 

    const reviewsAdd = reviews
      .map(review => `
        <div class="swiper-slide">
            <img class="review-img" src="${review.avatar_url}" alt="${review.author}" />
            <p class="review-name">${review.author}</p>
            <p class="review-text">${review.review}</p>  
        </div>
      `)
      .join("");

    swiperWrapper.insertAdjacentHTML("beforeend", reviewsAdd);
   
  } catch (error) {
    console.log("Error loading reviews:", error);
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = '<div class="reviews-error">Failed to load reviews. Please try again later.</div>';
  }
}
