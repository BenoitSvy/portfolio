const Lightbox = (() => {
  function init() {
    const lightbox = document.getElementById('lightbox');
    const img = lightbox.querySelector('.lightbox-image');
    const iframe = lightbox.querySelector('.lightbox-video iframe');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function openImage(src, alt) {
      img.src = src;
      img.alt = alt;
      lightbox.classList.remove('video-mode');
      lightbox.classList.add('active');
    }

    function openVideo(videoId) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      lightbox.classList.add('video-mode', 'active');
    }

    function close() {
      lightbox.classList.remove('active');
      iframe.src = '';
    }

    document.querySelectorAll('.gallery-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        openImage(link.getAttribute('href'), link.querySelector('img').alt);
      });
    });

    document.querySelectorAll('.video-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        openVideo(link.dataset.videoId);
      });
    });

    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  return { init };
})();
