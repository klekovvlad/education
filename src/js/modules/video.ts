export const videoFunction = () => {
  const videos = document.querySelectorAll<HTMLDivElement>('.feedback-video');
  videos.forEach((wrapper) => {
    const video = wrapper.querySelector('video');
    const button = wrapper.querySelector('.button-video');
    if (video && button) {
      button.addEventListener('click', () => {
        video.controls = true;
        video.play();
        button.classList.add('hide');
        wrapper.classList.add('playing');
      });

      video.addEventListener('pause', () => {
        video.controls = false;
        button.classList.remove('hide');
        wrapper.classList.remove('playing');
      });
    }
  });
};
