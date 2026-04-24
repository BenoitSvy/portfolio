// Reset scroll position on every page load
if (history.scrollRestoration) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// Home active by default on load
const homeLink = document.querySelector('.nav-links a[href="#home"]');
if (homeLink) homeLink.classList.add('active');

// Reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-image');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = link.getAttribute('href');
    lightboxImg.alt = link.querySelector('img').alt;
    lightbox.classList.add('active');
  });
});

const closeLightbox = () => lightbox.classList.remove('active');

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
