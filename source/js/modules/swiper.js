import Swiper from 'swiper/bundle';
import '../../sass/vendor/swiper.css';

const swiper = new Swiper('.juri__swiper', {
  direction: 'horizontal',
  loop: true,
  slideClass: 'juri__item',
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
