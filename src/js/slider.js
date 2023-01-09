export const mainSlider = new Swiper('.slider', {
  slidesPerView: 4,
  spaceBetween: 14,
  watchOverflow: true,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 2,
    }
  }
})