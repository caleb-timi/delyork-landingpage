'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatTile.module.css';

function AnimatedStat({ value, suffix, label, delay }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      // Start counting slightly after the slide-in begins
      const timeout = setTimeout(() => {
        const duration = 2000;
        const startTime = performance.now();

        const animateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // easeOutExpo easing function for a premium slowdown effect
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          setCount(Math.floor(easeOut * value));

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animateCount);
      }, delay + 250); 

      return () => clearTimeout(timeout);
    }
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={statRef} 
      className={`${styles.statItem} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className={styles.statNumber}>
        {count}{suffix}
      </h3>
      <p className={styles.statLabel}>{label}</p>
      <div className={styles.statDivider}></div>
    </div>
  );
}

export default function StatTile() {
  const stats = [
    { value: 20, suffix: '+', label: 'YEARS OF IMPACT' },
    { value: 5, suffix: '+', label: 'COUNTRIES' },
    { value: 5, suffix: '', label: 'CORE SUBSIDIARIES' },
    { value: 500, suffix: '+', label: 'GLOBAL TALENT' },
  ];

  return (
    <section className={styles.statTile}>
      <div className={styles.statContainer}>
        {stats.map((stat, index) => (
          <AnimatedStat 
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
}
