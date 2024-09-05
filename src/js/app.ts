import { mobileMenu } from './modules/menu.ts';
import { switchFunction } from './modules/switch.ts';

const app = () => {
  mobileMenu();
  switchFunction();
};

window.addEventListener('DOMContentLoaded', app);
