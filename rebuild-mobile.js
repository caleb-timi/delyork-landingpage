const fs = require('fs');

let css = fs.readFileSync('public/style.css', 'utf8');

// Find where I started adding mobile overrides
const marker = '/* ==========================================================================\n   AGGRESSIVE GLOBAL MOBILE OVERRIDES';
let idx = css.indexOf('/* ==========================================================================\r\n   AGGRESSIVE GLOBAL MOBILE OVERRIDES');
if (idx === -1) idx = css.indexOf(marker);

if (idx !== -1) {
  css = css.slice(0, idx); // Trim off everything from there down
} else {
  console.log("WARNING: Could not find marker!");
}

const appendCSS = `
/* ==========================================================================
   AGGRESSIVE GLOBAL MOBILE OVERRIDES
   ========================================================================== */
html, body {
  overflow-x: hidden !important;
  max-width: 100vw !important;
  width: 100% !important;
}

* {
  box-sizing: border-box !important;
}

img, svg, video, iframe {
  max-width: 100% !important;
}

@media (max-width: 768px) {
  /* Enforce container constraints and side padding for a seamless feel */
  main, section, .hero, .contact-hero, .contact-container, .group-overview, .site-footer, .about-page-hero, .subsidiary-hero, .executive-profile-page {
    width: 100% !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }

  /* Clear the navbar universally on the first section of every page */
  main > section:first-of-type, .hero, .about-page-hero, .contact-hero, .subsidiary-hero, .executive-profile-page {
    padding-top: 14rem !important; /* Extra space for wrapped navbar */
  }

  /* Typography safe-limits */
  h1, h2, h3, h4, h5, h6 {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    hyphens: auto !important;
  }

  p {
    font-size: 1rem !important;
    line-height: 1.5 !important;
  }
  
  .hero-intro {
    font-size: 1rem !important;
  }

  /* General Grid to Stack */
  .contact-grid, .about-grid, .pillars-grid, .leadership-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
  }

  /* Ensure Navbar doesn't burst */
  body > header, .home-page-body header {
    width: 90% !important;
    max-width: 400px !important;
    margin: 1rem auto !important;
    left: 5% !important;
    right: 5% !important;
    transform: none !important;
  }
  
  /* Buttons should wrap nicely */
  .main-nav {
    flex-wrap: wrap !important;
  }
}
`;

fs.writeFileSync('public/style.css', css.trim() + '\n' + appendCSS);
console.log('Mobile CSS rebuilt globally successfully.');
