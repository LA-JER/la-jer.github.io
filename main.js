// Smooth-scroll is handled via CSS (scroll-behavior). This file is a hook
// for future interactivity — e.g. project filtering, lightboxes, etc.

document.addEventListener('DOMContentLoaded', () => {
  // Highlight the current nav link based on which section is in view.
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="index.html#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `index.html#${id}`
            ? 'var(--color-accent)'
            : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach((section) => observer.observe(section));
});
