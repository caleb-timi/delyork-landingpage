import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export default function Reskillafrica() {
  return (
    <main>
      
    <section className="subsidiary-hero">
      <div className="subsidiary-copy"><span className="section-kicker">Re-Skill Africa</span><h1>Building the workforce that will build the continent.</h1><p>Re-Skill Africa is an industrial talent and enterprise development system built around AI-powered learning, real production environments, the Skildustry Model, and a blockchain-verified Skill Passport.</p><div className="subsidiary-actions"><Link href="/#subsidiaries" className="hero-link">Back to ecosystem</Link><a href="https://www.reskillafrica.org/" className="hero-link" target="_blank" rel="noopener">Visit Re-Skill Africa</a></div></div>
      <div className="subsidiary-visual" aria-label="Re-Skill Africa imagery"><div className="subsidiary-image-main"><img src="/assets/images/reskill-africa-workforce.jpeg" alt="Re-Skill Africa workforce development" /></div><div className="subsidiary-image-small"><img src="/assets/images/reskill-africa-skildustry.jpeg" alt="Re-Skill Africa Skildustry model" /></div><div className="subsidiary-badge">Skildustry</div></div>
    </section>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">What they do</span><h2>Where training meets production.</h2></div><div className="detail-copy"><p>Re-Skill Africa embeds learning directly into industrial production, helping participants learn by doing, produce while learning, and graduate with verified work experience.</p><p>The platform is designed to identify execution-ready talent, evaluate people through real-world challenges, and connect high-performing participants to employment, supplier opportunities, and venture development.</p></div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="right">
    <section className="subsidiary-section"><div className="detail-grid"><div className="detail-heading"><span className="section-kicker">Focus areas</span><h2>Workforce systems for the 21st-century economy.</h2></div><div className="service-grid">
      <div className="service-card"><h3>Skildustry Model</h3><p>Training embedded into real production environments so learners create value from day one.</p></div>
      <div className="service-card"><h3>Skill Passport</h3><p>A blockchain-verified record of mastered competencies, work experience, and professional growth.</p></div>
      <div className="service-card"><h3>Innovation Tournament</h3><p>A national and continental platform for talent discovery, evaluation, and industrial deployment.</p></div>
      <div className="service-card"><h3>Training Tracks</h3><p>Programs across digital skills, renewable energy, agriculture, construction, entrepreneurship, and other high-demand sectors.</p></div>
    </div></div></section>
    </ScrollReveal>
    <ScrollReveal direction="left">
    <section className="subsidiary-section alt"><div className="related-subsidiaries"><span className="section-kicker">Explore more</span><div className="related-grid"><Link className="related-link" href="/subsidiaries/creative-academy">Creative Academy</Link><Link className="related-link" href="/subsidiaries/life-africa">LIFE Africa</Link><Link className="related-link" href="/subsidiaries/communications">Del-York Communications</Link><Link className="related-link" href="/subsidiaries/technology">Del-York Technologies</Link></div></div></section>
    </ScrollReveal>
  
    </main>
  );
}
