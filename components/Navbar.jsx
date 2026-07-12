"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navInner}>
        {/* Logo — Left */}
        <Link href="/#hero" className={styles.logoLink} onClick={closeMobileMenu}>
          <img
            src="/assets/images/cropped-Del-York_logo-white-text.png"
            alt="Del-York Group"
            className={styles.logoImage}
          />
        </Link>

        {/* Center Nav Links */}
        <div className={styles.centerLinks}>
          <Link href="/#hero" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/#subsidiaries" className={styles.navLink}>Subsidiaries</Link>
        </div>

        {/* Right CTA */}
        <div className={styles.rightActions}>
          <Link href="/contact" className={styles.contactBtn}>
            <span>Contact Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerIcon}></span>
        </button>
      </div>

      {/* Mobile Full Screen Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <Link href="/#hero" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</Link>
          <Link href="/#subsidiaries" className={styles.mobileNavLink} onClick={closeMobileMenu}>Subsidiaries</Link>
          <Link href="/contact" className={`${styles.contactBtn} ${styles.mobileContactBtn}`} onClick={closeMobileMenu}>
            <span>Contact Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </nav>
      </div>
    </nav>
  );
}
