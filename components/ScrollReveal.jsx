'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, direction = 'left', className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after first reveal if we only want it to animate once
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal-wrapper scroll-reveal-${direction} ${isVisible ? 'scroll-reveal-active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
