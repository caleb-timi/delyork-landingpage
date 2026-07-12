import Link from 'next/link';
import ScrollReveal from '../../../components/ScrollReveal';

export default function Executivefrankpastorino() {
  return (
    <main>
      
    <section className="executive-profile-page">
      <a className="hero-link profile-back-link" href="/about">Back to about</a>
    <ScrollReveal direction="left">
      <article className="executive-profile executive-profile-feature">
        <div className="executive-profile-image"><img src="/assets/images/profiles/frank-profile-desktop.png" alt="Frank Pastorino" /></div>
        <div className="executive-profile-copy">
          <span className="section-kicker">Managing Director, Del-York Industries</span>
          <h1>Frank Pastorino</h1>
          <p>Frank Pastorino has more than 25 years of experience in entrepreneurial activity and new venture creation, with a focus on developing economies.</p>
          <p>His official profile describes him as a hands-on project developer who has spent more than 10 years living on-site in the Philippines and Armenia, working on extractive-industry projects including mining.</p>
          <p>At Del-York Industries, his leadership supports the Group's industrial innovation, infrastructure development, sector investment, and sustainable growth agenda.</p>
        </div>
      </article>
    </ScrollReveal>
    <ScrollReveal direction="right">
      <div className="profile-related"><a href="/executives/executive-linus-idahosa">Linus Idahosa</a><a href="/executives/executive-larisa-miller">Larisa B. Miller</a><a href="/executives/executive-ayiri-oladunmoye">Ayiri Oladunmoye</a><a href="/executives/executive-ikenna-oguike">Ikenna Oguike</a><a href="/executives/executive-evans-emmanuel">Evans Emmanuel</a></div>
    </ScrollReveal>
    </section>
  
    </main>
  );
}
