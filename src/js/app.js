import Swiper from 'swiper';

new Swiper('.image-slider', {
  autoHeight: true,
  slidesPerView: 1,
  direction: 'horizontal',
});

[...document.querySelectorAll('.swiper-slide')].forEach(slider => slider.style.width="150px")


