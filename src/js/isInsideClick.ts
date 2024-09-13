export const isInsideClick = (e: MouseEvent, element?: HTMLElement | null) => {
  if (!element) return false;

  const { x: eventX, y: eventY } = e;
  const { x, y, height, width } = element.getBoundingClientRect();
  const listXEnd = x + width;
  const listYEnd = y + height;
  return eventX > x && eventX < listXEnd && eventY > y && eventY < listYEnd;
};
