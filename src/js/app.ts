import { mobileMenu } from './modules/menu.ts';
import { switchFunction } from './modules/switch.ts';
import { createIntersectionObserver } from './modules/observer.ts';
import { teachersFunctions } from './modules/teachers.ts';
import { modalFunctions } from './modules/modal.ts';
import { maskFunction } from './modules/mask.ts';

const app = () => {
  mobileMenu();
  switchFunction();
  teachersFunctions();
  createIntersectionObserver();
  modalFunctions();
  maskFunction();
};

window.addEventListener('DOMContentLoaded', app);
