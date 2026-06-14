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

  let slideTicking = false;
  let galleryProgress = 0;
  let galleryLocked = false;
  let galleryHandoff = false;
  let galleryHandoffFrame = 0;
  let galleryPinY = 0;
  let galleryReleaseUntil = 0;
  let lastPageScrollY = window.scrollY;
  let touchStartY = null;

  const subsidiaryStage = subsidiaryGallery.querySelector('.subsidiary-slide-stage');

  const getStageTopOffset = () => {
    const top = subsidiaryStage ? parseFloat(window.getComputedStyle(subsidiaryStage).top) : 0;
    return Number.isFinite(top) ? top : 0;
  };

  const getGalleryLockY = () => {
    const topOffset = getStageTopOffset();
    return Math.max(0, window.scrollY + subsidiaryGallery.getBoundingClientRect().top - topOffset);
  };

  const getGalleryExitY = () => {
    const topOffset = getStageTopOffset();
    const galleryRect = subsidiaryGallery.getBoundingClientRect();
    const stageHeight = subsidiaryStage?.offsetHeight || 0;
    return Math.max(0, window.scrollY + galleryRect.bottom - topOffset - stageHeight + 2);
  };

  const isGalleryInReleaseCooldown = () => performance.now() < galleryReleaseUntil;

  const clampScrollY = (value) => {
    const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    return Math.min(maxScrollY, Math.max(0, value));
  };

  const setImmediateScrollY = (value) => {
    const nextY = clampScrollY(value);
    window.scrollTo(0, nextY);
    return nextY;
  };

  const pinGallery = () => {
    setImmediateScrollY(galleryPinY || getGalleryLockY());
  };

  const animateWindowScroll = (targetY, duration = 460) => {
    const startY = window.scrollY;
    const endY = clampScrollY(targetY);
    const distance = endY - startY;
    const handoffFrame = galleryHandoffFrame + 1;
    galleryHandoffFrame = handoffFrame;

    const finishGalleryHandoff = () => {
      galleryHandoff = false;
      document.documentElement.classList.remove('subsidiary-scroll-handoff');
      lastPageScrollY = window.scrollY;
    };

    if (prefersReducedMotion || duration <= 0 || Math.abs(distance) < 2) {
      setImmediateScrollY(endY);
      finishGalleryHandoff();
      return;
    }

    const startTime = performance.now();
    galleryHandoff = true;
    document.documentElement.classList.add('subsidiary-scroll-handoff');

    const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

    const step = (time) => {
      if (handoffFrame !== galleryHandoffFrame) return;

      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      setImmediateScrollY(startY + distance * easeOutCubic(progress));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        finishGalleryHandoff();
      }
    };

    window.requestAnimationFrame(step);
  };

  const cancelGalleryHandoff = () => {
    if (!galleryHandoff) return;
    galleryHandoffFrame += 1;
    galleryHandoff = false;
    galleryReleaseUntil = performance.now() + 120;
    document.documentElement.classList.remove('subsidiary-scroll-handoff');
    lastPageScrollY = window.scrollY;
  };

  const updateSubsidiarySlideshow = () => {
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
    slideTicking = false;
  };

  const requestSlideUpdate = () => {
    if (!slideTicking) {
      window.requestAnimationFrame(updateSubsidiarySlideshow);
      slideTicking = true;
    }
  };

  const setGalleryProgress = (value) => {
    galleryProgress = Math.min(1, Math.max(0, value));
    requestSlideUpdate();
  };

  const lockGallery = (progress, pinY = getGalleryLockY()) => {
    galleryLocked = true;
    galleryPinY = pinY;
    document.documentElement.classList.add('subsidiary-scroll-locked');
    setGalleryProgress(progress);
    pinGallery();
  };

  const releaseGallery = (direction, carryPixels = 0) => {
    galleryLocked = false;
    galleryPinY = 0;
    document.documentElement.classList.remove('subsidiary-scroll-locked');

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const carry = Math.min(Math.abs(carryPixels) * 0.5, viewportHeight * 0.62);
    const forwardHandoff = Math.max(120, viewportHeight * 0.22);
    const backwardHandoff = Math.max(36, viewportHeight * 0.06);
    const targetY = direction > 0
      ? getGalleryExitY() + forwardHandoff + carry
      : Math.max(0, getGalleryLockY() - backwardHandoff - carry);
    const distance = Math.abs(targetY - window.scrollY);
    const baseDuration = direction > 0 ? 340 : 520;
    const duration = prefersReducedMotion
      ? 0
      : Math.min(direction > 0 ? 760 : 940, Math.max(baseDuration, distance * 0.2));

    galleryReleaseUntil = performance.now() + duration + 90;

    if (direction > 0) {
      setGalleryProgress(1);
      animateWindowScroll(targetY, duration);
    } else {
      setGalleryProgress(0);
      animateWindowScroll(targetY, duration);
    }
  };

  const consumeGalleryDelta = (deltaY, event) => {
    if (!deltaY) return false;
    if (galleryHandoff) {
      cancelGalleryHandoff();
      return false;
    }
    if (isGalleryInReleaseCooldown()) return false;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const lockY = getGalleryLockY();
    const exitY = getGalleryExitY();
    const currentY = window.scrollY;
    const projectedY = currentY + deltaY;
    const direction = deltaY > 0 ? 1 : -1;
    let effectiveDeltaY = deltaY;

    if (!galleryLocked) {
      const enteringFromAbove = direction > 0
        && currentY < exitY - 6
        && (currentY >= lockY - 6 || projectedY >= lockY);
      const enteringFromBelow = direction < 0
        && currentY > lockY + 6
        && (currentY <= exitY + 6 || projectedY <= exitY);

      if (!enteringFromAbove && !enteringFromBelow) return false;

      lockGallery(enteringFromAbove ? 0 : 1, enteringFromAbove ? lockY : exitY);

      if (enteringFromAbove && currentY < lockY) {
        effectiveDeltaY = Math.max(0, projectedY - lockY);
      } else if (enteringFromBelow && currentY > exitY) {
        effectiveDeltaY = Math.min(0, projectedY - exitY);
      }
    }

    if (event?.cancelable) event.preventDefault();
    pinGallery();

    const progressDenominator = Math.max(520, viewportHeight * 1.02) * Math.max(1, subsidiarySlides.length - 1);
    const progressDelta = effectiveDeltaY / progressDenominator;
    const nextProgress = galleryProgress + progressDelta;

    if (direction > 0 && nextProgress >= 1) {
      setGalleryProgress(1);
      releaseGallery(1, (nextProgress - 1) * progressDenominator);
      return true;
    }

    if (direction < 0 && nextProgress <= 0) {
      setGalleryProgress(0);
      releaseGallery(-1, nextProgress * progressDenominator);
      return true;
    }

    setGalleryProgress(nextProgress);
    return true;
  };

  const handleGalleryPageScroll = () => {
    const currentY = window.scrollY;

    if (galleryHandoff || isGalleryInReleaseCooldown()) {
      lastPageScrollY = currentY;
      return;
    }

    if (galleryLocked) {
      pinGallery();
      lastPageScrollY = window.scrollY;
      return;
    }

    const lockY = getGalleryLockY();
    const exitY = getGalleryExitY();
    const movingDown = currentY >= lastPageScrollY;

    if (currentY > lockY + 2 && currentY < exitY - 2) {
      lockGallery(movingDown ? 0 : 1, movingDown ? lockY : exitY);
    }

    lastPageScrollY = window.scrollY;
  };

  updateSubsidiarySlideshow();
  window.addEventListener('wheel', (event) => consumeGalleryDelta(event.deltaY, event), { passive: false });
  window.addEventListener('scroll', handleGalleryPageScroll, { passive: true });
  window.addEventListener('touchstart', (event) => {
    touchStartY = event.touches?.[0]?.clientY ?? null;
  }, { passive: true });
  window.addEventListener('touchmove', (event) => {
    if (touchStartY === null) return;
    const currentTouchY = event.touches?.[0]?.clientY ?? touchStartY;
    const deltaY = touchStartY - currentTouchY;
    touchStartY = currentTouchY;
    consumeGalleryDelta(deltaY, event);
  }, { passive: false });
  window.addEventListener('touchend', () => {
    touchStartY = null;
  }, { passive: true });
  window.addEventListener('keydown', (event) => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const keyDeltas = {
      ArrowDown: 120,
      PageDown: viewportHeight * 0.86,
      ' ': viewportHeight * 0.86,
      ArrowUp: -120,
      PageUp: viewportHeight * -0.86
    };

    if (Object.prototype.hasOwnProperty.call(keyDeltas, event.key)) {
      consumeGalleryDelta(keyDeltas[event.key], event);
    }
  });
  window.addEventListener('resize', () => {
    if (galleryLocked) pinGallery();
    updateSubsidiarySlideshow();
  });
}
