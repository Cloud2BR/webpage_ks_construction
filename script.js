/* ─────────────────────────────────────────────
   KS CONSTRUCTION — script.js
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  // ── NAVBAR SCROLL ──────────────────────────────
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── HAMBURGER ──────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ── ACTIVE NAV LINK ON SCROLL ──────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  // ── COUNTER ANIMATION ─────────────────────────
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let countersStarted = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;

      const update = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      requestAnimationFrame(update);
    });
    countersStarted = true;
  };

  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !countersStarted) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(statsStrip);
  }

  // ── SCROLL REVEAL ─────────────────────────────
  const revealEls = document.querySelectorAll(
    '.service-card, .project-card, .testimonial-card, .stat, .about-content, .about-visual, .contact-info, .contact-form'
  );

  revealEls.forEach((el, i) => {
    el.setAttribute('data-aos', '');
    // Stagger cards in groups
    const parent = el.parentElement;
    const siblings = [...parent.children].filter(c => c === el || c.hasAttribute('data-aos'));
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${idx * 80}ms`;
  });

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  // ── TESTIMONIAL CAROUSEL ──────────────────────
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');

  if (track && prevBtn && nextBtn) {
    const cards = track.querySelectorAll('.testimonial-card');
    const total = cards.length;
    let page = 0;
    const perPage = () => window.innerWidth < 768 ? 1 : 2;

    const renderPage = () => {
      const pp = perPage();
      const maxPage = Math.max(0, total - pp);
      page = Math.min(page, maxPage);

      cards.forEach((card, i) => {
        card.style.display = (i >= page && i < page + pp) ? '' : 'none';
      });

      prevBtn.disabled = page === 0;
      nextBtn.disabled = page >= maxPage;
      prevBtn.style.opacity = prevBtn.disabled ? '0.35' : '1';
      nextBtn.style.opacity = nextBtn.disabled ? '0.35' : '1';
    };

    prevBtn.addEventListener('click', () => { page = Math.max(0, page - 1); renderPage(); });
    nextBtn.addEventListener('click', () => { page = Math.min(total - perPage(), page + 1); renderPage(); });

    window.addEventListener('resize', renderPage);
    renderPage();
  }

  // ── CONTACT FORM ──────────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      // Basic client-side validation
      const email = form.querySelector('#email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        showFieldError(email, 'Please enter a valid email address.');
        return;
      }

      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate async send (replace with real fetch to backend/formspree)
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#2a7a2a';
        form.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });

    // Clear errors on input
    form.querySelectorAll('input, textarea, select').forEach(el => {
      el.addEventListener('input', () => clearFieldError(el));
    });
  }

  function showFieldError(el, msg) {
    clearFieldError(el);
    el.style.borderColor = '#e05252';
    const err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'display:block;color:#e05252;font-size:0.78rem;margin-top:5px;';
    err.textContent = msg;
    el.parentElement.appendChild(err);
    el.focus();
  }

  function clearFieldError(el) {
    el.style.borderColor = '';
    const existing = el.parentElement.querySelector('.field-error');
    if (existing) existing.remove();
  }

  // ── SMOOTH SCROLL OFFSET (for fixed nav) ──────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
