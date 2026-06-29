import Link from 'next/link';

export default function Global() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy">
        <span className="section-kicker">Del-York Global</span>
        <h1>Unlocking global business opportunities across Africa.</h1>
        <p>Del-York Global is a consulting and market-entry partner for organizations expanding internationally, with a focus on entering, operating, and growing in African markets.</p>
        <div className="subsidiary-actions"><a href="/#subsidiaries" className="hero-link">Back to ecosystem</a></div>
      </div>
      <div className="subsidiary-visual" aria-label="Del-York Global imagery">
        <div className="subsidiary-image-main"><img src="/assets/images/dy-global-official.png" alt="Del-York Global visual" /></div>
        <div className="subsidiary-image-small"><img src="/assets/images/dy-global-web.png" alt="Del-York Global brand image" /></div>
        <div className="subsidiary-badge">Market Entry</div>
      </div>
    </section>
    <section className="subsidiary-section alt">
      <div className="detail-grid">
        <div className="detail-heading"><span className="section-kicker">What they do</span><h2>Strategy for businesses entering dynamic markets.</h2></div>
        <div className="detail-copy"><p>Headquartered in the United States with branches in Rwanda, Zambia, and Nigeria, Del-York Global supports clients with research, expansion planning, operating guidance, and growth strategy.</p><p>The company helps organizations understand market realities, reduce risk, and build stronger routes into Africa's business landscape.</p></div>
      </div>
    </section>
    <section className="subsidiary-section">
      <div className="detail-grid">
        <div className="detail-heading"><span className="section-kicker">Services</span><h2>From insight to establishment.</h2></div>
        <div className="service-grid">
          <div className="service-card"><h3>Market Research</h3><p>Analysis that supports sharper strategic decisions.</p></div>
          <div className="service-card"><h3>Market Expansion</h3><p>Custom strategies for entering and scaling across Africa.</p></div>
          <div className="service-card"><h3>Concierge Services</h3><p>Support from market entry planning through establishment.</p></div>
          <div className="service-card"><h3>Risk Management</h3><p>Approaches that help clients mitigate risk and strengthen resilience.</p></div>
          <div className="service-card"><h3>Business Model Transformation</h3><p>Innovation for sustainability and competitiveness.</p></div>
          <div className="service-card"><h3>Growth Strategies</h3><p>Plans for increasing market share and profitability.</p></div>
        </div>
      </div>
    </section>
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><a className="related-link" href="/subsidiaries/creative-academy">Creative Academy</a><a className="related-link" href="/archive/industries">Del-York Industries</a><a className="related-link" href="/subsidiaries/technology">Technologies</a><a className="related-link" href="/archive/development-company">Development Company</a><a className="related-link" href="/subsidiaries/communications">Communications</a></div></div></section>
  
    </main>
  );
}
