const fs = require('fs');

const appendCSS = `
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

fs.appendFileSync('public/style.css', '\n' + appendCSS);
console.log('CSS appended successfully');
