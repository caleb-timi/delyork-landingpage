"use client";
import Link from 'next/link';
import Image from 'next/image';
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
    handleScroll(); // set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
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
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navInner}>
        {/* Left Side Links */}
        <div className={styles.leftLinks}>
          <Link href="/#hero" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </div>

        {/* Center Logo */}
        <div className={styles.logoContainer}>
          <Link href="/#hero" onClick={closeMobileMenu}>
            <img 
              src="/assets/images/cropped-Del-York_logo-white-text.png" 
              alt="Del-York Group Logo" 
              className={styles.logoImage} 
            />
          </Link>
        </div>

        {/* Right Side CTA */}
        <div className={styles.rightLinks}>
          <Link href="/contact" className={styles.contactBtn}>
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
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
          <Link href="/#hero" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/contact" className={`${styles.contactBtn} ${styles.mobileContactBtn}`} onClick={closeMobileMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
