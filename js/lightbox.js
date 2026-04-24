const Lightbox = (() => {
  function init() {
    const lightbox = document.getElementById('lightbox');
    const img = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function open(src, alt) {
      img.src = src;
      img.alt = alt;
      lightbox.classList.add('active');
    }

    function close() {
      lightbox.classList.remove('active');
    }

    document.querySelectorAll('.gallery-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        open(link.getAttribute('href'), link.querySelector('img').alt);
      });
    });

    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  return { init };
})();
