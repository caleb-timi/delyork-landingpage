import Link from 'next/link';

export default function Creativeacademy() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy">
        <span className="section-kicker">Del-York Creative Academy</span>
        <h1>Pioneering creative education in Nigeria and across Africa.</h1>
        <p>Del-York Creative Academy develops Africa's next generation of creative professionals through cinematic training, digital media education, production skills, and industry-facing programs built for global careers.</p>
        <div className="subsidiary-actions">
          <a href="/#subsidiaries" className="hero-link">Back to ecosystem</a>
          <a href="https://delyorkcreative.academy/" className="hero-link" target="_blank" rel="noopener">Visit Creative Academy</a>
        </div>
      </div>
      <div className="subsidiary-visual" aria-label="Del-York Creative Academy imagery">
        <div className="subsidiary-image-main"><img src="/assets/images/dca-building-web.png" alt="Del-York Creative Academy building" /></div>
        <div className="subsidiary-image-small"><img src="/assets/images/dca-training-session-web.png" alt="Creative academy training session" /></div>
        <div className="subsidiary-badge">Creative Education</div>
      </div>
    </section>

    <section className="subsidiary-section alt">
      <div className="detail-grid">
        <div className="detail-heading">
          <span className="section-kicker">What they do</span>
          <h2>Training talent for a technology-led creative economy.</h2>
        </div>
        <div className="detail-copy">
          <p>DCA focuses on practical creative training across film, animation, post-production, scriptwriting, cinematography, visual effects, music production, costume design, graphic design, and digital media.</p>
          <p>The academy also emphasizes the business side of creativity, helping students turn technical skills into sustainable careers and entrepreneurial ventures.</p>
        </div>
      </div>
    </section>

    <section className="subsidiary-section creative-video-section">
      <div className="video-showcase-heading">
        <span className="section-kicker">Watch the story</span>
        <h2>Inside the academy and the YAPPI movement.</h2>
        <p>Two official films from the Del-York Creative Academy ecosystem, presented together as a closer look at creative training, animation, post-production, and youth opportunity.</p>
      </div>
      <div className="video-showcase-grid">
        <article className="feature-video-card video-card-large">
          <div className="video-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/Wlj9msWBUKk" title="Del-York Creative Academy video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video-card-copy">
            <span>DCA Film</span>
            <h3>Del-York Creative Academy</h3>
            <p>A closer view of the academy's mission to prepare creative professionals for film, media, animation, and digital production careers.</p>
          </div>
        </article>
        <article className="feature-video-card video-card-accent">
          <div className="video-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/rH2zH1qt-8o" title="YAPPI video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video-card-copy">
            <span>YAPPI</span>
            <h3>Youth in Animation and Post-Production</h3>
            <p>The YAPPI initiative highlights animation and post-production as a path to skills, work opportunities, and economic empowerment for young Nigerians.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="subsidiary-section">
      <div className="detail-grid">
        <div className="detail-heading">
          <span className="section-kicker">Focus areas</span>
          <h2>Programs and initiatives.</h2>
        </div>
        <div className="service-grid">
          <div className="service-card"><h3>Film Production</h3><p>Hands-on training for cinematic storytelling, production workflows, and professional set practice.</p></div>
          <div className="service-card"><h3>Animation and Post</h3><p>Skills for 3D animation, editing, visual effects, and post-production careers.</p></div>
          <div className="service-card"><h3>Digital Media</h3><p>Creative technology training for modern media, content creation, and digital expression.</p></div>
          <div className="service-card"><h3>YAPPI</h3><p>A youth-focused animation and post-production initiative created with a strong emphasis on opportunity and inclusion.</p></div>
        </div>
      </div>
    </section>

    <section className="subsidiary-section alt">
      <div className="related-subsidiaries">
        <span className="section-kicker">Explore more</span>
        <div className="related-grid">
          <a className="related-link" href="/subsidiaries/life-africa">LIFE Africa</a>
          <a className="related-link" href="/subsidiaries/communications">Del-York Communications</a>
          <a className="related-link" href="/subsidiaries/technology">Del-York Technologies</a>
          <a className="related-link" href="/subsidiaries/reskill-africa">Re-Skill Africa</a>
        </div>
      </div>
    </section>
  
    </main>
  );
}
