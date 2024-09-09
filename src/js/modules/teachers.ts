import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const teachersFunctions = () => {
  const slider = document.querySelector<HTMLDivElement>('.teachers-slider');
  if (slider) {
    const updateTransform = (swiper: Swiper) => {
      const centerIndex = Math.round(swiper.slides.length / 2);

      if (swiper.activeIndex < centerIndex) {
        swiper.wrapperEl.classList.add('left');
        swiper.wrapperEl.classList.remove('right');
      } else if (swiper.activeIndex > centerIndex) {
        swiper.wrapperEl.classList.add('right');
        swiper.wrapperEl.classList.remove('left');
      } else {
        swiper.wrapperEl.classList.remove('right');
        swiper.wrapperEl.classList.remove('left');
      }
    };

    new Swiper(slider, {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
      slideActiveClass: 'active',
      slideToClickedSlide: true,
      modules: [Navigation],
      navigation: {
        prevEl: '.button-slider-prev',
        nextEl: '.button-slider-next',
      },
      on: {
        slideChange: updateTransform,
        init: (swiper) => {
          updateTransform(swiper);
          const index = Math.round(swiper.slides.length / 2);
          swiper.slideTo(index, 0);
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 8,
        },
      },
    });
  }
};
