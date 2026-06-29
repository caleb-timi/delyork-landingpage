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
      link: "/html-pages/subsidiaries/creative-academy.html",
      label: "Creative"
    },
    {
      title: "LIFE Africa",
      desc: "Catalytic capital and impact intelligence for creative and vocational talent, helping trained people transition into income, enterprise, and verified outcomes.",
      img: "/assets/images/life-africa-program.png",
      link: "/html-pages/subsidiaries/life-africa.html",
      label: "Impact"
    },
    {
      title: "Del-York Communications",
      desc: "A leading creative agency delivering PR, strategic communications, branding, marketing, digital solutions, and media production.",
      img: "/assets/images/dy-comms-alt.png",
      link: "/html-pages/subsidiaries/communications.html",
      label: "Comms"
    },
    {
      title: "Del-York Technologies",
      desc: "Builds AI-driven platforms, enterprise software, smart ecosystems, immersive experiences, and digital solutions for industries and governments.",
      img: "/assets/images/dy-technologies-web.png",
      link: "/html-pages/subsidiaries/technology.html",
      label: "Technology"
    },
    {
      title: "Re-Skill Africa",
      desc: "An industrial talent and enterprise development platform using Skildustry, Skill Passport, and real production environments to build Africa's workforce.",
      img: "/assets/images/reskill-africa-workforce.jpeg",
      link: "/html-pages/subsidiaries/reskill-africa.html",
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
              <div className="premium-card-image">
                <img src={sub.img} alt={sub.title} />
              </div>
              <div className="premium-card-content">
                <div className="premium-label">{sub.label}</div>
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
