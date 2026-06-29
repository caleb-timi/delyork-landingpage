const fs = require('fs');

let css = fs.readFileSync('public/style.css', 'utf8');

const marker = '/* ==========================================================================\r\n   PREMIUM SUBSIDIARIES CAROUSEL (React Component)';
let idx = css.indexOf('/* ==========================================================================\n   PREMIUM SUBSIDIARIES CAROUSEL (React Component)');
if (idx === -1) {
  idx = css.indexOf(marker);
}

if (idx !== -1) {
  css = css.slice(0, idx);
} else {
  console.log("WARNING: Could not find marker! Truncating might fail.");
}

const appendCSS = `
/* ==========================================================================
   PREMIUM SUBSIDIARIES CAROUSEL (React Component)
   ========================================================================== */
.premium-subsidiaries {
  padding: 8rem 0;
  background-color: #000;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.premium-header {
  text-align: center;
  margin-bottom: 4rem;
}

.premium-header h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 1rem;
}

.premium-header p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
}

/* Scroll-Snap Carousel */
.premium-carousel-wrapper {
  position: relative;
  width: 100%;
  padding-left: max(4rem, calc((100vw - 1280px) / 2));
}

.premium-carousel-track {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 3rem; /* room for shadow */
  padding-right: max(4rem, calc((100vw - 1280px) / 2));
  
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.premium-carousel-track::-webkit-scrollbar {
  display: none;
}

/* Glassmorphic Cards */
.premium-card {
  flex: 0 0 400px;
  height: 550px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.premium-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, rgba(164, 0, 0, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.premium-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(164, 0, 0, 0.2);
}

.premium-card:hover::before {
  opacity: 1;
}

.card-image-wrapper {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
}

.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
}

.premium-card:hover .card-image-wrapper img {
  transform: scale(1.08);
}

/* Dark Gradient Overlay for Text Readability */
.card-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
  z-index: 1;
}

.card-content {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 2.5rem 2rem;
  z-index: 2;
  transform: translateY(10px);
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.premium-card:hover .card-content {
  transform: translateY(0);
}

.card-content h3 {
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;
}

.premium-card:hover h3 {
  color: var(--accent-red);
}

.premium-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* Navigation Controls */
.carousel-nav {
  position: absolute;
  bottom: 0;
  left: max(4rem, calc((100vw - 1280px) / 2));
  display: flex;
  gap: 1rem;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(.disabled) {
  background: var(--accent-red);
  border-color: var(--accent-red);
  transform: scale(1.1);
}

.nav-btn.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

@media(max-width: 768px) {
  .premium-carousel-wrapper {
    padding-left: 2rem;
  }
  .premium-carousel-track {
    padding-right: 2rem;
  }
  .premium-card {
    flex: 0 0 300px;
    height: 480px;
  }
  .carousel-nav {
    left: 2rem;
  }
}

/* ==========================================================================
   GLOBAL RESPONSIVENESS OVERRIDES
   ========================================================================== */

/* Fluid Typography */
.hero-brand {
  font-size: clamp(2.5rem, 8vw, 5.5rem) !important;
  line-height: 1.1 !important;
}

#group-overview-title {
  font-size: clamp(1.8rem, 5vw, 3rem) !important;
  line-height: 1.2 !important;
}

/* Tablet & Mobile (Max 1024px) */
@media (max-width: 1024px) {
  .hero-container {
    padding: 0 2rem !important;
  }
}

/* Mobile (Max 768px) */
@media (max-width: 768px) {
  
  /* Navbar */
  body > header, .home-page-body header {
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    padding: 1rem !important;
    width: max-content !important;
    max-width: calc(100% - 2rem) !important;
    height: auto !important;
    min-height: 0 !important;
    border-radius: 24px !important;
  }

  body > header .main-nav, .home-page-body header .main-nav {
    display: flex !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 0.5rem !important;
    padding: 0 !important;
  }

  body > header .logo, .home-page-body header .logo {
    padding-right: 0 !important;
    margin-bottom: 0.25rem !important;
  }

  /* Shrink Navbar Buttons on small screens */
  body > header .main-nav a,
  .home-page-body header .main-nav a,
  body > header .main-nav a.nav-contact,
  .home-page-body header .main-nav a.nav-contact {
    width: auto !important;
    padding: 0.4rem 0.8rem !important;
    font-size: 0.75rem !important;
    min-height: 36px !important;
  }

  /* Hero */
  .hero-proof-row {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
    align-items: flex-start !important;
  }
  
  .hero-actions {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
  }
  
  .hero-actions a {
    width: 100% !important;
    text-align: center !important;
    justify-content: center !important;
  }

  /* Ecosystem Overview */
  .group-overview-inner {
    padding: 4rem 1.5rem !important;
  }

  .group-overview-pillars {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
  }

  .group-overview-pillars article {
    width: 100% !important;
  }

  /* Footer */
  .site-footer {
    padding: 4rem 1.5rem 2rem !important;
  }

  .footer-inner {
    display: flex !important;
    flex-direction: column !important;
    gap: 3rem !important;
    align-items: center !important;
    text-align: center !important;
  }

  .footer-brand {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .footer-menu {
    display: flex !important;
    flex-direction: column !important;
    gap: 2.5rem !important;
    width: 100% !important;
  }

  .footer-column {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
}

/* ==========================================================================
   CONTACT PAGE SPACING FIX
   ========================================================================== */
.contact-page-body .contact-hero {
  padding-top: 10rem !important;
  padding-bottom: 3rem !important;
  min-height: 0 !important;
}

.contact-hero {
  padding-top: 10rem !important;
  padding-bottom: 3rem !important;
  min-height: 0 !important;
}

.contact-container {
  padding-top: 2rem !important;
  margin-top: 0 !important;
}
`;

fs.writeFileSync('public/style.css', css.trim() + '\n' + appendCSS);
console.log('CSS perfectly rebuilt');
