import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export default function Lifeafrica() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy"><span className="section-kicker">LIFE Africa</span><h1>Catalytic capital and impact intelligence for Africa's creative economy.</h1><p>LIFE Africa helps direct larger pools of institutional capital to proven vocational models, closing the gap between training and sustainable income, employment, and enterprise growth.</p><div className="subsidiary-actions"><Link href="/#subsidiaries" className="hero-link">Back to ecosystem</Link><a href="https://lifeafrica.org/" className="hero-link" target="_blank" rel="noopener">Visit LIFE Africa</a></div></div>
      <div className="subsidiary-visual" aria-label="LIFE Africa imagery"><div className="subsidiary-image-main"><img src="/assets/images/life-africa-program.png" alt="LIFE Africa vocational empowerment" /></div><div className="subsidiary-image-small"><img src="/assets/images/life-africa-web.jpg" alt="LIFE Africa impact model" /></div><div className="subsidiary-badge">Impact Capital</div></div>
    </section>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">What they do</span><h2>Move talent from trained to earning, skilled to bankable, and expert to enterprise.</h2></div><div className="detail-copy"><p>LIFE Africa works through connected instruments that pair catalytic completion capital with outcome verification, making African creative and vocational talent more investable at scale.</p><p>The platform focuses on transition support, market access, enterprise support, and trusted proof of which interventions convert training into income and long-term opportunity.</p></div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="right">
    <section className="subsidiary-section"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">Focus areas</span><h2>Capital, proof, and empowerment.</h2></div><div className="service-grid">
      <div className="service-card"><h3>Creative Opportunity Fund</h3><p>Catalytic completion capital that supports access, tools, bridge support, market linkage, and enterprise readiness.</p></div>
      <div className="service-card"><h3>Impact Nexus</h3><p>A vocational impact intelligence platform that verifies outcomes, screens interventions, and builds benchmark data.</p></div>
      <div className="service-card"><h3>Vocational Development</h3><p>Strategic vocational education and developmental programs designed to improve lives and communities across Africa.</p></div>
      <div className="service-card"><h3>Inclusive Welfare</h3><p>Support for marginalized groups, with emphasis on young orphans, widows, and persons with disabilities.</p></div>
    </div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><Link className="related-link" href="/subsidiaries/creative-academy">Creative Academy</Link><Link className="related-link" href="/subsidiaries/communications">Del-York Communications</Link><Link className="related-link" href="/subsidiaries/technology">Del-York Technologies</Link><Link className="related-link" href="/subsidiaries/reskill-africa">Re-Skill Africa</Link></div></div></section>
    </ScrollReveal>
  
    </main>
  );
}
