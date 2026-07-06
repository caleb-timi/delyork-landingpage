import Link from 'next/link';

export default function Communications() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy"><span className="section-kicker">Del-York Communications</span><h1>Innovative solutions in PR, branding, and storytelling.</h1><p>Del-York Communications is a creative agency focused on public relations, strategic communications, content creation, digital solutions, branding, marketing, and media production.</p><div className="subsidiary-actions"><Link href="/#subsidiaries" className="hero-link">Back to ecosystem</Link><a href="https://delyorkcommunications.com/" className="hero-link" target="_blank" rel="noopener">Visit Communications</a></div></div>
      <div className="subsidiary-visual" aria-label="Del-York Communications imagery"><div className="subsidiary-image-main"><img src="/assets/images/dy-communications-official.png" alt="Del-York Communications visual" /></div><div className="subsidiary-image-small"><img src="/assets/images/dy-comms-alt.png" alt="Communications brand visual" /></div><div className="subsidiary-badge">Brand Voice</div></div>
    </section>
    <section className="subsidiary-section alt"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">What they do</span><h2>Campaigns that connect global insight with local expertise.</h2></div><div className="detail-copy"><p>The agency develops strategies and campaigns that help organizations communicate clearly, build identity, reach audiences, and respond to complex public moments.</p><p>Its work blends PR, branding, marketing, digital channels, and production into integrated communication systems.</p></div></div></section>
    <section className="subsidiary-section"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">Services</span><h2>From reputation to production.</h2></div><div className="service-grid">
      <div className="service-card"><h3>Public Relations</h3><p>Brand storytelling, media relations, crisis management, and event promotion.</p></div>
      <div className="service-card"><h3>Branding</h3><p>Identity creation, market research, visual design, and brand storytelling.</p></div>
      <div className="service-card"><h3>Strategic Communications</h3><p>Messaging, stakeholder engagement, and communication strategy.</p></div>
      <div className="service-card"><h3>Marketing</h3><p>Campaigns, product launches, market analysis, and email marketing.</p></div>
      <div className="service-card"><h3>Digital Solutions</h3><p>Web development, social media marketing, SEO, advertising, and video marketing.</p></div>
      <div className="service-card"><h3>Media Group</h3><p>Film production, video content, multimedia storytelling, and full-service production support.</p></div>
    </div></div></section>
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><Link className="related-link" href="/subsidiaries/creative-academy">Creative Academy</Link><Link className="related-link" href="/subsidiaries/life-africa">LIFE Africa</Link><Link className="related-link" href="/subsidiaries/technology">Del-York Technologies</Link><Link className="related-link" href="/subsidiaries/reskill-africa">Re-Skill Africa</Link></div></div></section>
  
    </main>
  );
}
