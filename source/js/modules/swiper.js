import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews__slider-wrapper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
});

const juriSwiper = new Swiper('.juri__slider-wrapper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    }
  },
});

reviewsSwiper.slideReset();
juriSwiper.slideReset();
