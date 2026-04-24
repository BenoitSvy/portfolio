const Nav = (() => {
  function init() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');

    const homeLink = document.querySelector('.nav-links a[href="#home"]');
    if (homeLink) homeLink.classList.add('active');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
  }

  return { init };
})();
