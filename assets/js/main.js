(function () {
  var header = document.querySelector('[data-header]');
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');

  // Header turns solid once the page scrolls past the top of the hero
  function updateHeader() {
    header.classList.toggle('is-solid', window.scrollY > 40);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Mobile menu
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    header.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) {
      setMenu(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
    if (mq.matches) setMenu(false);
  });

  // Fade sections in as they enter the viewport
  var revealed = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealed.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  revealed.forEach(function (el) { observer.observe(el); });
})();
