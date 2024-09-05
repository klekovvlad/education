import { TAGS } from '../constants.ts';

export const mobileMenu = () => {
  const menu = document.querySelector<HTMLDivElement>('.header-menu');
  const button = document.querySelector<HTMLButtonElement>('.header-menu-button');

  if (menu && button) {
    const toggleOpen = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.classList.toggle('open');

      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        TAGS.HTML?.classList.remove('hidden');
      } else {
        menu.classList.add('open');
        TAGS.HTML?.classList.add('hidden');
      }
    };

    button.addEventListener('click', toggleOpen);

    const links = menu.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', toggleOpen);
    });
  }
};
