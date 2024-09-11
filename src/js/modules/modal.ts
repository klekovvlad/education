export const modalFunctions = () => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    const closeIcon = document.createElement('button');
    closeIcon.className = 'modal-close modal-close-icon';
    closeIcon.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.querySelector('.modal-body')?.append(closeIcon);

    modal.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.target as HTMLDivElement;
      if (target === modal || target.classList.contains('modal-close')) {
        modal.classList.remove('open');
      }
    });
  });
};
