import IMask from 'imask';

export const maskFunction = () => {
  const inputs = document.querySelectorAll<HTMLInputElement>('input[type=tel]');
  inputs.forEach((input) => {
    IMask(input, {
      mask: '+{7} (000) 000-0000',
    });
  });
};
