// import Swiper from 'swiper';

// import 'swiper/css';
new Swiper('.to-read-slider', {

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
  video.style.zIndex = 1
  video.src += 'autoplay=1'
})
