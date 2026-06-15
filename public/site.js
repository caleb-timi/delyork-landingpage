const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (hasFinePointer) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    const blobs = document.querySelector('.bg-blobs');
    if (blobs) blobs.style.transform = `translate(${x}px, ${y}px)`;
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const header = document.querySelector('body > header');

if (header) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  const revealThreshold = 18;
  const topThreshold = 24;
  const scrolledThreshold = 80;

  const updateHeaderState = () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;
    const atTop = currentScrollY <= topThreshold;
    const isScrolled = currentScrollY > scrolledThreshold;

    header.classList.toggle('nav-at-top', atTop);
    header.classList.toggle('nav-scrolled', isScrolled);

    if (atTop || delta < -revealThreshold) {
      header.classList.remove('nav-hidden');
      header.classList.add('nav-visible');
      lastScrollY = currentScrollY;
    } else if (delta > revealThreshold && currentScrollY > header.offsetHeight + topThreshold) {
      header.classList.add('nav-hidden');
      header.classList.remove('nav-visible');
      lastScrollY = currentScrollY;
    }

    ticking = false;
  };

  header.classList.add('nav-visible');
  if (window.scrollY <= topThreshold) header.classList.add('nav-at-top');
  if (window.scrollY > scrolledThreshold) header.classList.add('nav-scrolled');

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderState);
      ticking = true;
    }
  }, { passive: true });
}

const homePage = document.body.classList.contains('home-page-body');

if (homePage) {
  const progressBar = document.querySelector('.homepage-scroll-progress span');
  const scrollDots = Array.from(document.querySelectorAll('.homepage-scroll-dots a'));
  const dynamicSections = scrollDots
    .map((dot) => document.querySelector(dot.getAttribute('href')))
    .filter(Boolean);
  const heroBackdrop = document.querySelector('.home-page-body .hero-backdrop');
  const overviewInner = document.querySelector('.group-overview-inner');
  let scrollTicking = false;

  const updateDynamicScroll = () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    if (progressBar) {
      progressBar.style.setProperty('--scroll-progress', progress.toFixed(4));
    }

    if (!prefersReducedMotion) {
      const heroShift = Math.min(80, window.scrollY * 0.08);
      const overviewRect = overviewInner?.getBoundingClientRect();
      const overviewShift = overviewRect
        ? Math.max(-28, Math.min(28, (overviewRect.top - window.innerHeight * 0.48) * -0.035))
        : 0;

      heroBackdrop?.style.setProperty('--hero-scroll-shift', `${heroShift.toFixed(1)}px`);
      overviewInner?.style.setProperty('--overview-scroll-shift', `${overviewShift.toFixed(1)}px`);
    }

    if (dynamicSections.length && scrollDots.length) {
      const activeIndex = dynamicSections.reduce((closestIndex, section, index) => {
        const distance = Math.abs(section.getBoundingClientRect().top - window.innerHeight * 0.28);
        const closestSection = dynamicSections[closestIndex];
        const closestDistance = Math.abs(closestSection.getBoundingClientRect().top - window.innerHeight * 0.28);
        return distance < closestDistance ? index : closestIndex;
      }, 0);

      scrollDots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === activeIndex);
      });
    }

    scrollTicking = false;
  };

  const requestDynamicScrollUpdate = () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateDynamicScroll);
      scrollTicking = true;
    }
  };

  updateDynamicScroll();
  window.addEventListener('scroll', requestDynamicScrollUpdate, { passive: true });
  window.addEventListener('resize', requestDynamicScrollUpdate);
}

const stageSelector = [
  '.hero',
  '.group-overview',
  '.about-section',
  '.subsidiaries',
  '.subsidiary-hero',
  '.subsidiary-section',
  '.creative-video-section',
  '.about-page-hero',
  '.about-story-section',
  '.about-pillars-section',
  '.about-leadership-section',
  '.executive-profile-page',
  '.contact-hero',
  '.contact-container'
].join(',');

const scrollStages = Array.from(document.querySelectorAll(stageSelector));

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  scrollStages.forEach((stage) => stage.classList.add('scroll-stage'));

  const stageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isPast = entry.boundingClientRect.top < 0 && !entry.isIntersecting;

      entry.target.classList.toggle('is-visible', entry.isIntersecting);
      entry.target.classList.toggle('is-past', isPast);
    });
  }, {
    threshold: 0.18,
    rootMargin: '-12% 0px -16% 0px'
  });

  scrollStages.forEach((stage) => stageObserver.observe(stage));
} else {
  scrollStages.forEach((stage) => stage.classList.add('is-visible'));
}

const carouselContainer = document.getElementById('carouselContainer');
const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPagination = document.getElementById('carouselPagination');

if (carouselContainer && carouselTrack && carouselItems.length) {
  let isAutoPlaying = true;
  let autoPlayInterval;

  const getScrollAmount = () => {
    const firstItem = document.querySelector('.carousel-item-link');
    if (!firstItem) return carouselContainer.clientWidth;

    const trackStyles = window.getComputedStyle(carouselTrack);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    return firstItem.getBoundingClientRect().width + gap;
  };

  const updateDots = (activeIndex) => {
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  };

  if (carouselPagination) {
    carouselItems.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        carouselContainer.scrollTo({ left: index * getScrollAmount(), behavior: 'smooth' });
        updateDots(index);
        isAutoPlaying = false;
        setTimeout(() => isAutoPlaying = true, 5000);
      });
      carouselPagination.appendChild(dot);
    });
  }

  carouselContainer.addEventListener('scroll', () => {
    const activeIndex = Math.round(carouselContainer.scrollLeft / getScrollAmount());
    updateDots(activeIndex);
  });

  const startAutoPlay = () => {
    if (prefersReducedMotion) return;
    autoPlayInterval = setInterval(() => {
      if (isAutoPlaying) {
        if (carouselContainer.scrollLeft + carouselContainer.offsetWidth >= carouselContainer.scrollWidth - 10) {
          carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        }
      }
    }, 3000);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };

  prevBtn?.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    isAutoPlaying = false;
    setTimeout(() => isAutoPlaying = true, 5000);
  });

  nextBtn?.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    isAutoPlaying = false;
    setTimeout(() => isAutoPlaying = true, 5000);
  });

  carouselContainer.addEventListener('mouseenter', () => isAutoPlaying = false);
  carouselContainer.addEventListener('mouseleave', () => isAutoPlaying = true);
  carouselContainer.addEventListener('focusin', () => isAutoPlaying = false);
  carouselContainer.addEventListener('focusout', () => isAutoPlaying = true);

  window.addEventListener('pagehide', () => {
    stopAutoPlay();
  });

  startAutoPlay();
}
