'use client';

import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Create',
    description: 'Training, media, storytelling, communications, and cultural infrastructure built for global standards.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Technology, enterprise systems, talent pipelines, and production capacity for modern industries.',
  },
  {
    number: '03',
    title: 'Scale',
    description: 'Impact capital, partnerships, and platforms that move proven ideas into sustainable markets.',
  },
];

export default function GroupOverview() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });
    
    // Calculate tilt (max 3 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 3;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const headline = "An ecosystem for Africa's creative, technological, and industrial future.";
  const headlineWords = headline.split(' ');

  return (
    <section
      ref={sectionRef}
      className={`group-overview ${isVisible ? 'go-visible' : ''}`}
      id="group-overview"
      aria-labelledby="group-overview-title"
    >
      <div className="go-entrance">
        <div 
          className="group-overview-inner"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            '--mouse-x': `${mousePos.x}px`,
            '--mouse-y': `${mousePos.y}px`,
          }}
        >
          {/* Spotlight Glow */}
          <div className={`go-spotlight ${isHovered ? 'active' : ''}`} />

          <div 
            className="group-overview-tilt"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
          >
            <div className={`group-overview-copy go-animate-item ${isVisible ? 'go-in' : ''}`}>
              <span className="go-kicker">Our Approach</span>
              <h2 id="group-overview-title" className="headline-reveal">
                {headlineWords.map((word, i) => (
                  <span className="word-wrapper" key={i}>
                    <span 
                      className={`word ${isVisible ? 'revealed' : ''}`}
                      style={{ transitionDelay: isVisible ? `${300 + i * 40}ms` : '0ms' }}
                    >
                      {word}&nbsp;
                    </span>
                  </span>
                ))}
              </h2>
            </div>
            <div className="group-overview-pillars" aria-label="Del-York Group pillars">
              {pillars.map((pillar, idx) => (
                <article
                  key={pillar.number}
                  className={`go-animate-item ${isVisible ? 'go-in' : ''}`}
                  style={{ transitionDelay: isVisible ? `${300 + idx * 150}ms` : '0ms' }}
                >
                  <span className="go-pillar-number">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
