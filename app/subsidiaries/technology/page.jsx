import Link from 'next/link';
import ScrollReveal from '../../../components/ScrollReveal';

export default function Technology() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy"><span className="section-kicker">Del-York Technologies</span><h1>Shaping the future with disruptive technology.</h1><p>Del-York Technologies builds AI-driven platforms, enterprise software, smart ecosystems, immersive experiences, and digital solutions for industries and governments.</p><div className="subsidiary-actions"><Link href="/#subsidiaries" className="hero-link">Back to ecosystem</Link></div></div>
      <div className="subsidiary-visual" aria-label="Del-York Technologies imagery"><div className="subsidiary-image-main"><img src="/assets/images/dy-technology-official.png" alt="Del-York Technologies visual" /></div><div className="subsidiary-image-small"><img src="/assets/images/dy-technologies-web.png" alt="Technology brand visual" /></div><div className="subsidiary-badge">Digital Frontier</div></div>
    </section>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">What they do</span><h2>Technology that modernizes systems and decisions.</h2></div><div className="detail-copy"><p>The company works across digital transformation, AI, software development, connectivity, immersive technology, and continuous innovation.</p><p>Its role inside the Del-York ecosystem is to turn ambitious ideas into practical platforms and technology-led operating systems.</p></div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="right">
    <section className="subsidiary-section"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">Services</span><h2>Tools for a hyper-connected world.</h2></div><div className="service-grid">
      <div className="service-card"><h3>AI Solutions</h3><p>Automation and intelligence for stronger decision-making.</p></div>
      <div className="service-card"><h3>Technology Development</h3><p>Custom software, mobile apps, and digital platforms.</p></div>
      <div className="service-card"><h3>Technology Consulting</h3><p>Guidance for integration, transformation, and modernization.</p></div>
      <div className="service-card"><h3>VR and AR</h3><p>Immersive experiences for education, enterprise, and industry.</p></div>
      <div className="service-card"><h3>Connectivity</h3><p>IoT-enabled systems for operational efficiency.</p></div>
      <div className="service-card"><h3>Continuous Innovation</h3><p>Adoption of emerging tools that keep organizations ahead.</p></div>
    </div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><Link className="related-link" href="/subsidiaries/creative-academy">Creative Academy</Link><Link className="related-link" href="/subsidiaries/life-africa">LIFE Africa</Link><Link className="related-link" href="/subsidiaries/communications">Del-York Communications</Link><Link className="related-link" href="/subsidiaries/reskill-africa">Re-Skill Africa</Link></div></div></section>
    </ScrollReveal>
  
    </main>
  );
}
