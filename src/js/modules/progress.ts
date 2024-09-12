import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const progress = document.querySelector<HTMLDivElement>('#progress');
const progressControlsWrapper = progress?.querySelector('.progress-controls');
const progressControls = progress?.querySelectorAll<HTMLDivElement>('.progress-controls-item');
const progressWrapper = progress?.querySelector<HTMLDivElement>('.progress-items');

export const progressFunctions = () => {
  if (!progressWrapper || !progressControls) {
    return;
  }

  let isMobile = false;

  if (window.innerWidth < 767) {
    isMobile = true;
  }

  window.addEventListener('resize', () => {
    isMobile = window.innerWidth < 767;
  });

  const updateActiveClass = (inx: number) => {
    progressControls.forEach((control, i) => {
      if (i === inx) {
        control.classList.add('active');
      } else {
        control.classList.remove('active');
      }
    });

    if (isMobile) {
      const target = progressControls[inx];
      if (target) {
        const { width } = target.getBoundingClientRect();
        progressControlsWrapper?.scrollTo({
          top: 0,
          left: width * inx,
          behavior: 'smooth',
        });
      }
    }
  };

  const intervalInit = (inx?: number) => {
    let index = inx ?? 0;

    return setInterval(() => {
      index++;
      if (index === progressControls.length) {
        index = 0;
      }

      slider.slideTo(index, 2000);
      updateActiveClass(index);
    }, 5000);
  };

  let interval = intervalInit();

  const updateInterval = (inx: number) => {
    updateActiveClass(inx);
    clearInterval(interval);
    interval = intervalInit(inx);
  };

  const slider = new Swiper(progressWrapper, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 2000,
    modules: [Navigation],
    navigation: {
      prevEl: '.button-slider-prev',
      nextEl: '.button-slider-next',
    },
    on: {
      init() {
        updateInterval(0);
      },
      slideChange(swiper) {
        updateInterval(swiper.activeIndex);
      },
    },
  });

  progressControls.forEach((control, index) => {
    control.addEventListener('click', () => {
      slider.slideTo(index, 2000);
      updateInterval(index);
    });
  });
};
