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

const stageSelector = [
  '.hero',
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

const subsidiaryGallery = document.querySelector('.subsidiary-scroll-gallery');
const subsidiarySlides = subsidiaryGallery
  ? Array.from(subsidiaryGallery.querySelectorAll('.subsidiary-scroll-panel'))
  : [];

if (subsidiaryGallery && subsidiarySlides.length) {
  subsidiaryGallery.style.setProperty('--slide-count', subsidiarySlides.length);
  subsidiarySlides.forEach((slide, index) => {
    slide.classList.add('subsidiary-reveal');
    slide.style.setProperty('--slide-index', index);
  });

  let galleryTicking = false;
  let galleryProgress = 0;
  const subsidiaryStage = subsidiaryGallery.querySelector('.subsidiary-slide-stage');

  const getStageTopOffset = () => {
    const top = subsidiaryStage ? parseFloat(window.getComputedStyle(subsidiaryStage).top) : 0;
    return Number.isFinite(top) ? top : 0;
  };

  const getGalleryMetrics = () => {
    const topOffset = getStageTopOffset();
    const galleryTop = window.scrollY + subsidiaryGallery.getBoundingClientRect().top;
    const stageHeight = subsidiaryStage?.offsetHeight || 0;
    const scrollStart = galleryTop - topOffset;
    const scrollEnd = galleryTop + subsidiaryGallery.offsetHeight - topOffset - stageHeight;
    const scrollRange = Math.max(1, scrollEnd - scrollStart);

    return { scrollStart, scrollRange };
  };

  const updateSubsidiarySlideshow = () => {
    const { scrollStart, scrollRange } = getGalleryMetrics();
    const rawProgress = (window.scrollY - scrollStart) / scrollRange;
    galleryProgress = Math.min(1, Math.max(0, rawProgress));

    const rawIndex = galleryProgress * (subsidiarySlides.length - 1);
    const activeIndex = Math.min(subsidiarySlides.length - 1, Math.max(0, Math.round(rawIndex)));

    subsidiarySlides.forEach((slide, index) => {
      const slideY = index === 0
        ? 0
        : Math.min(100, Math.max(0, (index - rawIndex) * 100));
      const visibility = 1 - Math.min(1, slideY / 100);
      const imageScale = prefersReducedMotion ? 1 : 1.035 + visibility * 0.018;
      const copyShift = prefersReducedMotion ? 0 : (1 - visibility) * 28;

      slide.classList.toggle('is-active', index === activeIndex);
      slide.classList.toggle('is-visible', index === 0 || slideY < 99.5);
      slide.style.setProperty('--slide-y', `${slideY.toFixed(2)}%`);
      slide.style.setProperty('--image-scale', imageScale.toFixed(3));
      slide.style.setProperty('--copy-y', `${copyShift.toFixed(1)}px`);
      slide.style.zIndex = String(10 + index);
    });

    subsidiaryGallery.style.setProperty('--active-slide', activeIndex + 1);
    galleryTicking = false;
  };

  const requestGalleryUpdate = () => {
    if (!galleryTicking) {
      window.requestAnimationFrame(updateSubsidiarySlideshow);
      galleryTicking = true;
    }
  };

  document.documentElement.classList.remove('subsidiary-scroll-locked', 'subsidiary-scroll-handoff');
  updateSubsidiarySlideshow();
  window.addEventListener('scroll', requestGalleryUpdate, { passive: true });
  window.addEventListener('resize', requestGalleryUpdate, { passive: true });
}
