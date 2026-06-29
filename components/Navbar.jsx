"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fades out completely after scrolling 300px down
  const fadeThreshold = 300;
  const opacity = Math.max(0, 1 - scrollY / fadeThreshold);
  // Slide up slightly as it fades (moves up by half its height)
  const translateY = Math.min(50, (scrollY / fadeThreshold) * 50);

  return (
    <header style={{
      opacity: opacity,
      transform: `translateX(-50%) translateY(-${translateY}%)`,
      pointerEvents: opacity < 0.1 ? 'none' : 'auto',
      transition: 'none' // Important: disable CSS transitions so it instantly tracks scroll movement
    }}>
      <div className="logo">
        <Link href="/#hero">
          <img src="/assets/images/cropped-Del-York_logo-white-text.png" alt="Company Logo" />
        </Link>
      </div>
      <nav className="main-nav" id="primary-navigation">
        <ul>
          <li>
            <Link href="/#hero" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
