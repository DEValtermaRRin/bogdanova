/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import Swiper from 'swiper';
import { mainSlider } from './slider.js';
import { video } from './video.js';
import { pagination } from './pagination.js';

const documentURL = document.URL.split('/');
const fileName = documentURL[documentURL.length - 1] || 'index.html';

const readSlider = new Swiper('.to-read-slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',

    // --- Буллеты --- //
    type: 'bullets',
    clickable: true,
  },
  slidesPerView: 1,
  watchOverflow: true,
  loopedSlides: 0,

});

switch (fileName) {
  case 'index.html':
    mainSlider;
    readSlider;
    video;
    break;
  case 'my-works.html':
    pagination();
    break;
}
