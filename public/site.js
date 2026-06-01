const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (hasFinePointer) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    const blobs = document.querySelector('.bg-blobs');
    if (blobs) blobs.style.transform = `translate(${x}px, ${y}px)`;

    if (cursor && follower) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      }, 50);
    }
  });

  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
