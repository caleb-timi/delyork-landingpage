import Link from 'next/link';
import ScrollReveal from '../../../components/ScrollReveal';

export default function Developmentcompany() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy"><span className="section-kicker">Del-York Development Company</span><h1>Innovative development initiatives for culture, sports, and infrastructure.</h1><p>Del-York Development Company leads major infrastructure projects that connect entertainment, sports, hospitality, and economic development in Nigeria.</p><div className="subsidiary-actions"><a href="/#subsidiaries" className="hero-link">Back to ecosystem</a></div></div>
      <div className="subsidiary-visual" aria-label="Del-York Development Company imagery"><div className="subsidiary-image-main"><img src="/assets/images/Kebulania.png" alt="Kebulania Lagos Film City" /></div><div className="subsidiary-image-small"><img src="/assets/images/arena-042.png" alt="042 Arena and Entertainment Park" /></div><div className="subsidiary-badge">Infrastructure</div></div>
    </section>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">What they do</span><h2>Building destination-scale platforms for growth.</h2></div><div className="detail-copy"><p>The company oversees infrastructure development projects designed to bridge important sectors and create new cultural and economic capacity.</p><p>Its work includes Kebulania Lagos Film City in Epe and the 042 Arena and Entertainment Park in Enugu.</p></div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="right">
    <section className="subsidiary-section"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">Key projects</span><h2>Entertainment infrastructure with national ambition.</h2></div><div className="service-grid">
      <div className="service-card"><h3>Kebulania Lagos Film City</h3><p>A major film-city project designed for production, post-production, visual effects, support services, and talent discovery.</p></div>
      <div className="service-card"><h3>042 Arena</h3><p>An Enugu-based sports and entertainment development combining athletic facilities, cultural spaces, event areas, and training infrastructure.</p></div>
      <div className="service-card"><h3>Creative Economy</h3><p>Facilities that strengthen Nigeria's position in global film, entertainment, and sports industries.</p></div>
      <div className="service-card"><h3>Economic Growth</h3><p>Destination projects designed to spur innovation, investment, tourism, and local opportunity.</p></div>
    </div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><a className="related-link" href="/subsidiaries/creative-academy">Creative Academy</a><a className="related-link" href="/archive/global">Global</a><a className="related-link" href="/archive/industries">Industries</a><a className="related-link" href="/subsidiaries/technology">Technologies</a><a className="related-link" href="/subsidiaries/communications">Communications</a></div></div></section>
    </ScrollReveal>
  
    </main>
  );
}
