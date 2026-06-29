import Link from 'next/link';

export default function Industries() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy"><span className="section-kicker">Del-York Industries</span><h1>Sustainable growth in key industrial sectors.</h1><p>Del-York Industries focuses on industrial innovation for energy, construction, manufacturing, infrastructure, extractive sectors, agriculture, and healthcare.</p><div className="subsidiary-actions"><a href="/#subsidiaries" className="hero-link">Back to ecosystem</a></div></div>
      <div className="subsidiary-visual" aria-label="Del-York Industries imagery"><div className="subsidiary-image-main"><img src="/assets/images/dy-industries-official.png" alt="Del-York Industries visual" /></div><div className="subsidiary-image-small"><img src="/assets/images/dy-industries-web.png" alt="Industrial project visual" /></div><div className="subsidiary-badge">Industrial Scale</div></div>
    </section>
    <section className="subsidiary-section alt"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">What they do</span><h2>Precision, resilience, and sustainable value.</h2></div><div className="detail-copy"><p>The company provides industrial and infrastructure-focused solutions that help core sectors become more efficient, scalable, and resilient.</p><p>Its work connects strategic consulting, sector investment, sustainable project development, and operating models for long-term economic impact.</p></div></div></section>
    <section className="subsidiary-section"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">Services</span><h2>Core industrial priorities.</h2></div><div className="service-grid">
      <div className="service-card"><h3>Strategic Consulting</h3><p>Planning, efficiency, and market strategies for industrial growth.</p></div>
      <div className="service-card"><h3>Infrastructure Development</h3><p>Projects connected to ports, energy, education, and national capacity.</p></div>
      <div className="service-card"><h3>Sector Investments</h3><p>Investment focus across oil and gas, extractive industries, agriculture, and healthcare.</p></div>
      <div className="service-card"><h3>Growth Strategies</h3><p>Manufacturing and transportation optimization for African markets.</p></div>
      <div className="service-card"><h3>Sustainable Projects</h3><p>Energy and agricultural practices designed around sustainability.</p></div>
      <div className="service-card"><h3>Extractive Industries</h3><p>Responsible mining, stakeholder partnerships, and technology-backed development.</p></div>
    </div></div></section>
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><a className="related-link" href="/subsidiaries/creative-academy">Creative Academy</a><a className="related-link" href="/archive/global">Del-York Global</a><a className="related-link" href="/subsidiaries/technology">Technologies</a><a className="related-link" href="/archive/development-company">Development Company</a><a className="related-link" href="/subsidiaries/communications">Communications</a></div></div></section>
  
    </main>
  );
}
