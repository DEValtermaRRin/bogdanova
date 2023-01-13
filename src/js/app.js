// import Swiper from 'swiper';
import { mainSlider } from './slider.js';


// import 'swiper/scss';
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

})

const video =  document.querySelector('iframe')
document.querySelector('.video-wrapper__btn').addEventListener('click', (e) => {
  e.preventDefault()
  video.style.zIndex = 2
  video.src += 'autoplay=1'
})

mainSlider
readSlider
video


