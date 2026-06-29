import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/#hero" className="footer-logo">
            <img src="/assets/images/cropped-Del-York_logo-white-text.png" alt="Del-York Group" />
          </Link>
          <p>Building creative, technological, and industrial ventures for Africa's next leap.</p>
        </div>
        <nav className="footer-menu" aria-label="Footer navigation">
          <div className="footer-column">
            <h2>Company</h2>
            <Link href="/#hero">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h2>Subsidiaries</h2>
            <Link href="/subsidiaries/creative-academy">Creative Academy</Link>
            <Link href="/subsidiaries/life-africa">LIFE Africa</Link>
            <Link href="/subsidiaries/communications">Communications</Link>
            <Link href="/subsidiaries/technology">Technologies</Link>
            <Link href="/subsidiaries/reskill-africa">Re-Skill Africa</Link>
          </div>
          <div className="footer-column">
            <h2>Connect</h2>
            <a href="mailto:info@delyorkgroup.com">info@delyorkgroup.com</a>
            <a href="tel:+2349047721762">+234 904 772 1762</a>
            <Link href="/contact">Lagos | Pasadena</Link>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Del-York Group. All rights reserved.</p>
        <Link href="/contact">Start a conversation</Link>
      </div>
    </footer>
  );
}
