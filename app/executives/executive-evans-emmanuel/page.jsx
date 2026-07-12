import Link from 'next/link';
import ScrollReveal from '../../../components/ScrollReveal';

export default function Executiveevansemmanuel() {
  return (
    <main>
      
    <section className="executive-profile-page">
      <a className="hero-link profile-back-link" href="/about">Back to about</a>
    <ScrollReveal direction="left">
      <article className="executive-profile executive-profile-feature">
        <div className="executive-profile-image"><img src="/assets/images/profiles/evans-profile-desktop.jpg" alt="Evans Emmanuel" /></div>
        <div className="executive-profile-copy">
          <span className="section-kicker">Head, LIFE Africa</span>
          <h1>Evans Emmanuel</h1>
          <p>Evans Emmanuel is a pan-African development strategist and ecosystem builder with more than a decade of experience designing and delivering scalable enterprise support systems, catalytic partnerships, and inclusive impact programs in Africa.</p>
          <p>As Head of the Foundation at LIFE Africa, the impact arm of Del-York Group, he leads an agenda to empower 1.8 million Africans by 2030 through future-of-work interventions, innovation-led programming, and market-access platforms.</p>
          <p>His expertise includes startup incubation, green and circular economy, inclusive healthcare, AI and digital innovation, SME growth, partnership mobilization, and ecosystem leadership.</p>
          <p>Before joining Del-York Group, Evans served as Enterprise Manager at the Enterprise Development Centre, Pan-Atlantic University. His consulting work spans operations, growth strategy, marketing, and business development.</p>
        </div>
      </article>
    </ScrollReveal>
    <ScrollReveal direction="right">
      <div className="profile-related"><a href="/executives/executive-linus-idahosa">Linus Idahosa</a><a href="/executives/executive-larisa-miller">Larisa B. Miller</a><a href="/executives/executive-ayiri-oladunmoye">Ayiri Oladunmoye</a><a href="/executives/executive-ikenna-oguike">Ikenna Oguike</a><a href="/executives/executive-frank-pastorino">Frank Pastorino</a></div>
    </ScrollReveal>
    </section>
  
    </main>
  );
}
