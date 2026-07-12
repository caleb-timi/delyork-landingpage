import Link from 'next/link';
import ScrollReveal from '../../../components/ScrollReveal';

export default function Executivelarisamiller() {
  return (
    <main>
      
    <section className="executive-profile-page">
      <a className="hero-link profile-back-link" href="/about">Back to about</a>
    <ScrollReveal direction="left">
      <article className="executive-profile executive-profile-feature">
        <div className="executive-profile-image"><img src="/assets/images/profiles/larisa-profile-desktop.png" alt="Larisa B. Miller" /></div>
        <div className="executive-profile-copy">
          <span className="section-kicker">Senior Vice President</span>
          <h1>Larisa B. Miller</h1>
          <p>Larisa is a seasoned business executive with a diversified background across industries. She is also CEO of Phoenix Global LLC, a boutique consulting firm specializing in international municipal and governmental consulting, sustainability, and innovation strategies.</p>
          <p>She has held key roles in the Commonwealth of Pennsylvania, including Secretary and Deputy Secretary of Agriculture, and later served as Personal Advisor and Head of Business Development for a member of the Royal Family in Abu Dhabi.</p>
          <p>Her work has focused on sustainable development, energy, agriculture, women, youth, literacy, and education. She has received numerous awards, including recognition among the Top 100 People in Finance, 100 Global Women of Excellence, and Top 10 Most Influential Friends to Africa.</p>
        </div>
      </article>
    </ScrollReveal>
    <ScrollReveal direction="right">
      <div className="profile-related"><a href="/executives/executive-linus-idahosa">Linus Idahosa</a><a href="/executives/executive-ayiri-oladunmoye">Ayiri Oladunmoye</a><a href="/executives/executive-ikenna-oguike">Ikenna Oguike</a><a href="/executives/executive-frank-pastorino">Frank Pastorino</a><a href="/executives/executive-evans-emmanuel">Evans Emmanuel</a></div>
    </ScrollReveal>
    </section>
  
    </main>
  );
}
