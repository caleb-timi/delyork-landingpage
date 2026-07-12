import Link from 'next/link';
import Image from 'next/image';
import Subsidiaries from '../components/Subsidiaries';
import GroupOverview from '../components/GroupOverview';
import StatTile from '../components/StatTile';

export default function Home() {
  return (
    <main>
    <section className="hero" id="hero">
      {/* Base Video Layer */}
      <video 
        src="/assets/images/glow.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-bg-image"
      />
      
      <div className="hero-gradient-overlay" aria-hidden="true"></div>
      
      <div className="hero-signal-field" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span>Del-York Group</span>
            <span>Lagos built. Globally connected.</span>
          </p>
          <h1 className="hero-brand">Del-York Group</h1>
          <p className="hero-intro">Building the enterprises that move Africa forward — through creative education, communications, technology, and impact ventures.</p>
          <div className="hero-actions">
            <a href="#subsidiaries" className="cta-button hero-primary-button">
              <span>Explore Del-York</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/about" className="hero-outline-button">Who We Are</a>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="hero-bottom-fade" aria-hidden="true"></div>
    </section>

    <StatTile />

    <GroupOverview />

    <Subsidiaries />
  </main>
  );
}
