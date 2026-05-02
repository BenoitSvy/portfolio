const Nav = (() => {
  function init() {
    const targets = document.querySelectorAll('section[id], #demo');
    const links = document.querySelectorAll('.nav-links a');
    const intersecting = new Set();

    const homeLink = document.querySelector('.nav-links a[href="#home"]');
    if (homeLink) homeLink.classList.add('active');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) intersecting.add(entry.target);
        else intersecting.delete(entry.target);
      });

      const ordered = Array.from(targets).filter(t => intersecting.has(t));
      const active = ordered[ordered.length - 1];
      if (!active) return;

      links.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${active.id}"]`);
      if (link) link.classList.add('active');
    }, { threshold: 0.4 });

    targets.forEach(t => observer.observe(t));
  }

  return { init };
})();
