import { mobileMenu } from './modules/menu.ts';
import { switchFunction } from './modules/switch.ts';
import { createIntersectionObserver } from './modules/observer.ts';

const app = () => {
  mobileMenu();
  switchFunction();
  createIntersectionObserver();
};

window.addEventListener('DOMContentLoaded', app);
