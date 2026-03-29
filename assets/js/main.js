/* ===== RF1 Consig - Main JavaScript ===== */

// ===== Navbar scroll behavior =====
(function () {
  const wrapper = document.getElementById('navbar-wrapper');
  const navBg   = document.getElementById('navbar-bg');
  const infoBar = document.getElementById('info-bar');
  const logo    = document.getElementById('navbar-logo');
  const toggle  = document.getElementById('mobile-toggle');
  const hasHero = wrapper && wrapper.dataset.hasHero === 'true';

  function onScroll() {
    const scrolled = !hasHero || window.scrollY > 60;

    if (scrolled) {
      navBg.classList.add('scrolled');
      infoBar.style.maxHeight = '0';
      infoBar.style.opacity   = '0';
      logo.style.height       = '40px';
      logo.classList.remove('brightness-0', 'invert');
      toggle.style.color      = '#1e293b';
    } else {
      navBg.classList.remove('scrolled');
      infoBar.style.maxHeight = '48px';
      infoBar.style.opacity   = '1';
      logo.style.height       = '48px';
      logo.classList.add('brightness-0', 'invert');
      toggle.style.color      = '#fff';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


// ===== Smooth scroll to section =====
function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}


// ===== Mobile menu =====
let mobileMenuOpen = false;

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const menu     = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (mobileMenuOpen) {
    menu.classList.remove('hidden');
    menu.classList.add('visible');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  mobileMenuOpen = false;
  const menu      = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  menu.classList.add('hidden');
  menu.classList.remove('visible');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
}


// ===== Hero rotating words =====
(function () {
  const words   = ['Soluções Tecnológicas', 'Gestão Inteligente', 'Inovação Contínua'];
  const el      = document.getElementById('rotating-words');
  let   index   = 0;

  if (!el) return;

  function update() {
    el.style.animation = 'none';
    el.textContent     = words[index];
    // Re-trigger animation
    void el.offsetWidth;
    el.style.animation = '';
    el.classList.remove('rotating-word');
    void el.offsetWidth;
    el.classList.add('rotating-word');
    index = (index + 1) % words.length;
  }

  update();
  setInterval(update, 3000);
})();


// ===== Features show more / show less =====
function toggleFeatures() {
  const hidden     = document.querySelectorAll('.feature-hidden');
  const btnText    = document.getElementById('features-toggle-text');
  const chevDown   = document.getElementById('features-chevron-down');
  const chevUp     = document.getElementById('features-chevron-up');
  const isExpanded = chevUp && !chevUp.classList.contains('hidden');

  if (isExpanded) {
    // Collapse
    document.querySelectorAll('.feature-card').forEach((el, i) => {
      if (i >= 8) el.style.display = 'none';
    });
    btnText.textContent = 'Ver Todas as Funcionalidades';
    chevDown.classList.remove('hidden');
    chevUp.classList.add('hidden');
  } else {
    // Expand
    document.querySelectorAll('.feature-card').forEach(el => {
      el.style.display = '';
    });
    btnText.textContent = 'Ver Menos';
    chevDown.classList.add('hidden');
    chevUp.classList.remove('hidden');
  }
}


// ===== Initialize AOS =====
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once:     true,
      duration: 600,
      offset:   80,
    });
  }
});
