// 2026 Portfolio Logic
document.addEventListener('DOMContentLoaded', () => {
  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.setProperty('--cursor-x', e.clientX + 'px');
      cursor.style.setProperty('--cursor-y', e.clientY + 'px');
    });
  }

  // Reveal on scroll
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  // Navbar scroll
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (nav) {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  });

  // Active nav link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current) && current !== '') {
        link.classList.add('active');
      }
    });
  });
});
