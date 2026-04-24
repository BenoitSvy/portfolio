(function () {
  if (history.scrollRestoration) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  Nav.init();
  Reveal.init();
  Lightbox.init();
})();
