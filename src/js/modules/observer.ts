export function createIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  const elements = document.querySelectorAll('.observe');

  elements.forEach((element) => {
    observer.observe(element);
  });
}
