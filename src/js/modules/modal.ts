export const modalFunctions = () => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    const close = modal.querySelectorAll('.modal-close');
    const closeIcon = document.createElement('button');
    closeIcon.className = 'modal-close modal-close-icon';
    closeIcon.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.querySelector('.modal-body')?.append(closeIcon);

    modal.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
    close.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    });
  });
};
