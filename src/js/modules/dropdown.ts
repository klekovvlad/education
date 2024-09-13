import { isInsideClick } from '../isInsideClick.ts';

const dropdown = document.querySelectorAll('.dropdown');

const initDropdown = () => {
  if (dropdown.length) {
    dropdown.forEach(function (dropdownItem) {
      const button = dropdownItem.querySelector<HTMLButtonElement>('.dropdown-button');
      const list = dropdownItem.querySelector<HTMLElement>('.dropdown-list');
      const listWrapper = list?.querySelector<HTMLElement>('.dropdown-list-wrapper');

      if (!list || !button) return;

      if (dropdownItem.classList.contains('select')) {
        selectInit(list, button);
      }

      const windowListener = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInside = isInsideClick(e, list);
        const closingClick =
          !isInside ||
          (dropdownItem.classList.contains('select') && target.parentElement === listWrapper);

        if (dropdownItem.classList.contains('dropdown-open') && closingClick && target !== button) {
          dropdownItem.classList.remove('dropdown-open');
          if (!dropdownItem.classList.contains('dropdown-right')) {
            list.style.left = '0px';
          }
          document.querySelector('body')?.removeEventListener('click', windowListener);
        }
      };

      button.addEventListener('click', (e) => {
        e.preventDefault();
        const { x, width } = list.getBoundingClientRect();
        const listXEnd = x + width;

        dropdownItem.classList.toggle('dropdown-open');
        if (
          listXEnd > window.innerWidth - 20 &&
          !dropdownItem.classList.contains('dropdown-right')
        ) {
          const diff = window.innerWidth - 20 - listXEnd;
          list.style.left = `${diff}px`;
        }

        document.querySelector('body')?.addEventListener('click', windowListener);
      });
    });
  }
};

const selectInit = (list: HTMLElement, button: HTMLElement) => {
  const listItems = [...list.children[0].children];

  listItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const value = item.textContent?.toString() || '';

      switch (button.tagName) {
        case 'INPUT': {
          (button as HTMLInputElement).value = value;
          break;
        }
        default: {
          button.textContent = value;
          break;
        }
      }

      listItems.forEach((el, i) => {
        if (i !== index) {
          el.classList.remove('active');
        } else {
          el.classList.add('active');
        }
      });
    });
  });
};

export const dropdownFunctions = () => {
  initDropdown();
};
