// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    // Close menu on non-dropdown link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // Don't close if clicking a dropdown toggle
        if (link.parentElement.classList.contains('nav-dropdown') ||
            link.parentElement.classList.contains('nav-dropdown-sub')) {
          if (window.innerWidth <= 768) {
            var parent = link.parentElement;
            // Toggle dropdown open/close on mobile
            if (parent.classList.contains('nav-dropdown') || parent.classList.contains('nav-dropdown-sub')) {
              // Only prevent default if it's the parent toggle, not a real link
              var menu = parent.querySelector('.nav-dropdown-menu, .nav-dropdown-submenu');
              if (menu && link === parent.querySelector(':scope > a')) {
                e.preventDefault();
                parent.classList.toggle('open');
                return;
              }
            }
          }
        }
        nav.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Hero Slideshow
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  if (slides.length > 1) {
    let currentSlide = 0;
    const slideCount = slides.length;
    const intervalMs = 5000;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      indicators[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      indicators[currentSlide].classList.add('active');
    }

    let autoplay = setInterval(() => {
      goToSlide((currentSlide + 1) % slideCount);
    }, intervalMs);

    indicators.forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(autoplay);
        goToSlide(parseInt(btn.dataset.slide));
        autoplay = setInterval(() => {
          goToSlide((currentSlide + 1) % slideCount);
        }, intervalMs);
      });
    });
  }

  // Simple form handling
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your inquiry. We will get back to you shortly.');
      form.reset();
    });
  }
});
