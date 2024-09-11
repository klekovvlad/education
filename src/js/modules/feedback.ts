export const feedbackFunction = () => {
  const items = document.querySelectorAll<HTMLDivElement>('.feedback-item');
  const modal = document.querySelector('.modal-feedback');
  const body = modal?.querySelector<HTMLDivElement>('.modal-body');

  if (body) {
    items.forEach((item) => {
      const button = item.querySelector<HTMLButtonElement>('.button-link');
      button?.addEventListener('click', () => {
        modal?.classList.add('open');
        body.innerHTML = item.innerHTML + `<button class="modal-close modal-close-icon"></button>`;

        const content = body.querySelector<HTMLDivElement>('.feedback-content');

        if (content) {
          const { scrollHeight, clientHeight } = content;

          const contentScroll = (e: Event) => {
            const target = e.target as HTMLDivElement;
            const scrollDiff = scrollHeight - target.scrollTop - clientHeight;

            if (target.scrollTop > 5) {
              body.classList.add('scrolled-top');
            } else {
              body.classList.remove('scrolled-top');
            }

            if (scrollDiff < 5) {
              body.classList.remove('scrolled-bottom');
            } else {
              body.classList.add('scrolled-bottom');
            }
          };

          body.classList.remove('scrolled-top');
          if (scrollHeight > clientHeight) {
            body.classList.add('scrolled-bottom');
            content.addEventListener('scroll', contentScroll);
          } else {
            body.classList.remove('scrolled-bottom');
            content.removeEventListener('scroll', contentScroll);
          }
        }
      });
    });
  }
};
