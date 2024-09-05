import { TAGS } from '../constants.ts';

export const switchFunction = () => {
  const switcher = document.querySelector<HTMLDivElement>('.switch');
  const buttons = switcher?.querySelectorAll<HTMLButtonElement>('.button');
  if (buttons && switcher) {
    const switchView = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      const viewValue = target.dataset.view;
      switcher.dataset.view = viewValue;
      TAGS.HTML!.dataset.view = viewValue;
    };

    buttons.forEach((button) => {
      button.addEventListener('click', switchView);
    });
  }
};
