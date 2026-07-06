"use client";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Subsidiaries() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const subsidiaries = [
    {
      title: "Del-York Creative Academy",
      desc: "Premier incubator for cinematic excellence and digital media innovation, empowering storytellers with Hollywood-grade training and industry partnerships.",
      img: "/assets/images/dy-creative-academy-web.png",
      link: "/subsidiaries/creative-academy",
      label: "Creative"
    },
    {
      title: "LIFE Africa",
      desc: "Catalytic capital and impact intelligence for creative and vocational talent, helping trained people transition into income, enterprise, and verified outcomes.",
      img: "/assets/images/life-africa-program.png",
      link: "/subsidiaries/life-africa",
      label: "Impact"
    },
    {
      title: "Del-York Communications",
      desc: "A leading creative agency delivering PR, strategic communications, branding, marketing, digital solutions, and media production.",
      img: "/assets/images/dy-comms-alt.png",
      link: "/subsidiaries/communications",
      label: "Comms"
    },
    {
      title: "Del-York Technologies",
      desc: "Builds AI-driven platforms, enterprise software, smart ecosystems, immersive experiences, and digital solutions for industries and governments.",
      img: "/assets/images/dy-technologies-web.png",
      link: "/subsidiaries/technology",
      label: "Technology"
    },
    {
      title: "Re-Skill Africa",
      desc: "An industrial talent and enterprise development platform using Skildustry, Skill Passport, and real production environments to build Africa's workforce.",
      img: "/assets/images/reskill-africa-workforce.jpeg",
      link: "/subsidiaries/reskill-africa",
      label: "Skills"
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="premium-subsidiaries" id="subsidiaries">
      <div className="section-heading">
        <span className="section-kicker">The ecosystem</span>
        <h2>Our Subsidiaries</h2>
      </div>

      <div className="premium-carousel-wrapper">
        <div 
          className="premium-carousel-track" 
          ref={scrollRef}
          onScroll={checkScroll}
        >
          {subsidiaries.map((sub, idx) => (
            <Link href={sub.link} key={idx} className="premium-card">
              <div className="card-image-wrapper">
                <img src={sub.img} alt={sub.title} />
              </div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="premium-label" style={{ 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px', 
                  color: 'var(--accent-red)', 
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>{sub.label}</div>
                <h3>{sub.title}</h3>
                <p>{sub.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="carousel-nav">
          <button 
            className={`nav-btn prev ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scrollByAmount(-400)}
            disabled={!canScrollLeft}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button 
            className={`nav-btn next ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scrollByAmount(400)}
            disabled={!canScrollRight}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
