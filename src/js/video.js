export const video = document.querySelector('iframe');
if (video) {
  document
    .querySelector('.video-wrapper__btn')
    .addEventListener('click', (e) => {
      e.preventDefault();
      video.style.zIndex = 2;
      video.src += 'autoplay=1';
    });
}
