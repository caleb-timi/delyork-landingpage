import Link from 'next/link';
import Image from 'next/image';
import Subsidiaries from '../components/Subsidiaries';

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
          <p className="hero-intro">Building the enterprises that move Africa forward through creative education, communications, technology, industrial skills, and impact ventures operating from Nigeria to the world.</p>
          <div className="hero-actions">
            <a href="#subsidiaries" className="cta-button hero-primary-button">Explore Del-York</a>
            <a href="/about" className="hero-outline-button">Who We Are</a>
          </div>
          <div className="hero-proof-row" aria-label="Del-York Group proof points">
            <article>
              <strong>5</strong>
              <span>Subsidiaries</span>
            </article>
            <article>
              <strong>Africa</strong>
              <span>Talent, industry, and culture</span>
            </article>
            <article>
              <strong>Lagos</strong>
              <span>Corporate base with global reach</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="group-overview" id="group-overview" aria-labelledby="group-overview-title">
      <div className="group-overview-inner">
        <div className="group-overview-copy">
          <h2 id="group-overview-title">An ecosystem for Africa's creative, technological, and industrial future.</h2>
        </div>
        <div className="group-overview-pillars" aria-label="Del-York Group pillars">
          <article>
            <h3>Create</h3>
            <p>Training, media, storytelling, communications, and cultural infrastructure built for global standards.</p>
          </article>
          <article>
            <h3>Build</h3>
            <p>Technology, enterprise systems, talent pipelines, and production capacity for modern industries.</p>
          </article>
          <article>
            <h3>Scale</h3>
            <p>Impact capital, partnerships, and platforms that move proven ideas into sustainable markets.</p>
          </article>
        </div>
      </div>
    </section>

    <Subsidiaries />
  </main>
  );
}
