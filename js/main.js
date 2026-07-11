/**
 * RC Motogarage — Concept 3: Precision Garage
 * Main JavaScript
 */

(function() {
  'use strict';

  // ==========================================================================
  // Navigation — Hide on Scroll Down / Show on Scroll Up
  // ==========================================================================
  const nav = document.getElementById('mainNav');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }
    } else {
      nav.classList.remove('nav--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('nav__menu--open');
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================================
  // Hero Carousel
  // ==========================================================================
  const heroTrack = document.getElementById('heroTrack');
  const heroPrev = document.getElementById('heroPrev');
  const heroNext = document.getElementById('heroNext');

  if (heroTrack) {
    const slides = heroTrack.querySelectorAll('.hero-carousel__slide');
    let currentSlide = 0;
    let autoPlayTimer = null;
    const slideCount = slides.length;
    const AUTO_PLAY_DELAY = 6000; // 6 seconds per slide

    function goToSlide(index) {
      // Handle wrap-around
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;

      // Update slides
      slides.forEach((slide, i) => {
        slide.classList.remove('hero-carousel__slide--active', 'hero-carousel__slide--prev');
        if (i === index) {
          slide.classList.add('hero-carousel__slide--active');
        } else if (i === (index - 1 + slideCount) % slideCount) {
          slide.classList.add('hero-carousel__slide--prev');
        }
      });

      currentSlide = index;
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_DELAY);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    // Event listeners
    if (heroNext) {
      heroNext.addEventListener('click', () => {
        nextSlide();
        startAutoPlay(); // Reset timer on manual navigation
      });
    }

    if (heroPrev) {
      heroPrev.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
      });
    }


    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
      heroCarousel.addEventListener('mouseenter', stopAutoPlay);
      heroCarousel.addEventListener('mouseleave', startAutoPlay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        startAutoPlay();
      }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    heroTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    heroTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      startAutoPlay();
    }, { passive: true });

    // Initialize
    goToSlide(0);
    startAutoPlay();
  }

  // ==========================================================================
  // Product Filtering (Homepage & Shop Page)
  // ==========================================================================
  const filterButtons = document.querySelectorAll('.products__filter-btn');
  const productsGrid = document.getElementById('productsGrid');

  // Sample product data - replace with real data source
  const products = [
    {
      id: 'arai-rx7v',
      category: 'helmets',
      name: 'Arai RX-7V EVO RC Edition',
      price: 'IDR 18,500,000',
      image: 'assets/images/featured-helmet.jpg',
      specs: ['PB-SNC2 Carbon', '1,350g', 'SNI / ECE 22.06'],
      badge: 'Limited Edition'
    },
    {
      id: 'alpinestars-gp-pro',
      category: 'suits',
      name: 'Alpinestars GP Pro V2',
      price: 'IDR 28,500,000',
      image: 'assets/images/featured-jacket.jpg',
      specs: ['1.3mm Kangaroo Leather', 'GP-R Sliders', 'Nucleon Flex Pro'],
      badge: null
    },
    {
      id: 'dainese-carbon-d1',
      category: 'gloves',
      name: 'Dainese Carbon D1 Long',
      price: 'IDR 4,200,000',
      image: 'assets/images/featured-gloves.jpg',
      specs: ['Goat Leather', 'Carbon Knuckles', 'DCP Wrist System'],
      badge: null
    },
    {
      id: 'sidi-vertigo',
      category: 'boots',
      name: 'Sidi Vertigo 2',
      price: 'IDR 9,800,000',
      image: 'assets/images/featured-gloves.jpg',
      specs: ['Microfiber', 'Replaceable Sliders', 'Tecno-3 Closure'],
      badge: null
    },
    {
      id: 'forcefield-limb',
      category: 'armor',
      name: 'Forcefield Pro L2K Back',
      price: 'IDR 2,800,000',
      image: 'assets/images/featured-gloves.jpg',
      specs: ['Level 2 Certified', 'RPT Inserts', 'Ergonomic Fit'],
      badge: null
    },
    {
      id: 'shark-spartan',
      category: 'helmets',
      name: 'Shark Spartan GT Pro',
      price: 'IDR 6,800,000',
      image: 'assets/images/featured-helmet.jpg',
      specs: ['Carbon Fiber', '1,450g', 'ECE 22.06'],
      badge: null
    },
    {
      id: 'dainese-avro',
      category: 'jackets',
      name: 'Dainese Avro D2 Jacket',
      price: 'IDR 7,500,000',
      image: 'assets/images/featured-jacket.jpg',
      specs: ['D-Synth 350', 'Pro-Armor L2', 'Ventilation System'],
      badge: null
    },
    {
      id: 'held-steve',
      category: 'gloves',
      name: 'Held Steve 2 Gloves',
      price: 'IDR 2,200,000',
      image: 'assets/images/featured-gloves.jpg',
      specs: ['Goat Leather', 'Kangaroo Palm', 'KP Level 1'],
      badge: null
    },
    {
      id: 'forcefield-chest',
      category: 'armor',
      name: 'Forcefield Pro Chest',
      price: 'IDR 1,800,000',
      image: 'assets/images/featured-gloves.jpg',
      specs: ['Level 2 Certified', 'RPT Inserts', 'Adjustable Fit'],
      badge: null
    },
    {
      id: 'alaris-multitool',
      category: 'accessories',
      name: 'Alaris Multitool Pro',
      price: 'IDR 850,000',
      image: 'assets/images/featured-gloves.jpg',
      specs: ['Titanium Coated', '12 Functions', 'Lifetime Warranty'],
      badge: null
    }
  ];

  function getCurrentFilter() {
    // Check URL hash for filter
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('filter-')) {
      return hash.replace('filter-', '');
    }
    return 'all';
  }

  function setFilterHash(filter) {
    if (filter === 'all') {
      history.replaceState(null, '', window.location.pathname);
    } else {
      history.replaceState(null, '', `${window.location.pathname}#filter-${filter}`);
    }
  }

  function renderProducts(filter = 'all') {
    if (!productsGrid) return;

    const filtered = filter === 'all'
      ? products
      : products.filter(p => p.category === filter);

    productsGrid.innerHTML = filtered.map(product => `
      <article class="card" role="listitem" data-category="${product.category}">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="card__image"
          loading="lazy"
        >
      </article>
    `).join('');
  }

  // Initialize products
  renderProducts(getCurrentFilter());

  // Filter button handlers
  function setActiveFilter(filter) {
    filterButtons.forEach(b => {
      b.classList.remove('products__filter-btn--active');
      b.setAttribute('aria-pressed', 'false');
      if (b.dataset.filter === filter) {
        b.classList.add('products__filter-btn--active');
        b.setAttribute('aria-pressed', 'true');
      }
    });
    // Also update footer links if on shop page
    document.querySelectorAll('.footer__link[data-filter]').forEach(link => {
      if (link.dataset.filter === filter) {
        link.classList.add('footer__link--active');
      } else {
        link.classList.remove('footer__link--active');
      }
    });
  }

  setActiveFilter(getCurrentFilter());

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      setActiveFilter(filter);
      setFilterHash(filter);
      renderProducts(filter);
    });
  });

  // Footer filter links
  document.querySelectorAll('.footer__link[data-filter]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const filter = this.dataset.filter;
      setActiveFilter(filter);
      setFilterHash(filter);
      renderProducts(filter);
      // Scroll to products grid
      const grid = document.getElementById('productsGrid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Handle hash change
  window.addEventListener('hashchange', function() {
    const filter = getCurrentFilter();
    setActiveFilter(filter);
    renderProducts(filter);
  });

  // ==========================================================================
  // Newsletter Form (Basic)
  // ==========================================================================
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      // In production, send to your email service
      console.log('Newsletter signup:', email);
      alert('Thanks for subscribing! (Demo only)');
      this.reset();
    });
  }

  // ==========================================================================
  // Smooth Anchor Scrolling Enhancement
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // Intersection Observer for Scroll Animations (Subtle)
  // ==========================================================================
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card, .featured__main, .featured__secondary .card, .about__feature, .hero__spec-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 400ms ease, transform 400ms ease';
      observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
      .is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }

  // ==========================================================================
  // Keyboard Navigation for Mobile Menu
  // ==========================================================================
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu?.classList.contains('nav__menu--open')) {
      navMenu.classList.remove('nav__menu--open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.focus();
    }
  });

})();