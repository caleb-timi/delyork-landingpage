import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export default function About() {
  return (
    <main>
      
    <section className="about-page-hero">
      <div className="about-page-copy">
        <span className="section-kicker">About Del-York Group</span>
        <h1>Global talent, African vision.</h1>
        <p>We are a global community of internationally renowned talent, united in our passion for a prosperous and
          limitless Africa.</p>
      </div>
      <div className="about-page-visual" aria-label="Del-York Group official about imagery">
        <img src="/assets/images/about-hero.png" alt="Del-York Group team and production visual" />
      </div>
    </section>

    <ScrollReveal direction="left">
    <section className="about-story-section">
      <div className="detail-grid">
        <div className="detail-heading">
          <span className="section-kicker">Our story</span>
          <h2>Our playground is Africa, but our influence is global.</h2>
        </div>
        <div className="detail-copy">
          <p>From cultivating creativity to developing resources, Del-York Group transforms raw potential, human
            capital, infrastructure, and ideas into refined products ready for the world.</p>
          <p>The Group is a dynamic conglomerate of diverse companies preparing talents and resources for the future of
            industry and public-private partnerships in Africa.</p>
          <p>Del-York acts as a bridge between global business and Africa, helping foster resilient growth and a
            stronger, more interconnected future.</p>
        </div>
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal direction="right">
    <section className="about-pillars-section">
      <div className="about-pillars-grid">
        <article className="about-pillar">
          <span>01</span>
          <h2>Vision</h2>
          <p>By 2050, Africa will become the world's largest economic powerhouse. Del-York is dedicated to unlocking the
            continent's full potential and positioning Africa as a leading engine of global development.</p>
        </article>
        <article className="about-pillar">
          <span>02</span>
          <h2>Mission</h2>
          <p>To pave the way for Africa's unparalleled rise on the world stage.</p>
        </article>
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal direction="left">
    <section className="about-leadership-section">
      <div className="section-heading">
        <span className="section-kicker">Executive team</span>
        <h1>Diverse and experienced professionals</h1>
        <p>Leadership across strategy, operations, industries, management, and global partnerships.</p>
      </div>
      <div className="leadership-grid">
        <Link className="leader-card" href="/executives/executive-linus-idahosa">
          <img src="/assets/images/linus-idahosa.png" alt="Linus Idahosa" />
          <div>
            <h3>Linus Idahosa</h3>
            <p>President & Founder</p><span className="profile-link">View profile</span>
          </div>
        </Link>
        <Link className="leader-card" href="/executives/executive-larisa-miller">
          <img src="/assets/images/larisa-miller.png" alt="Larisa B. Miller" />
          <div>
            <h3>Larisa B. Miller</h3>
            <p>Senior Vice-President</p><span className="profile-link">View profile</span>
          </div>
        </Link>
        <Link className="leader-card" href="/executives/executive-ayiri-oladunmoye">
          <img src="/assets/images/ayiri-oladunmoye.png" alt="Ayiri Oladunmoye" />
          <div>
            <h3>Ayiri Oladunmoye</h3>
            <p>Management and Corporate Services</p><span className="profile-link">View profile</span>
          </div>
        </Link>
        <Link className="leader-card" href="/executives/executive-ikenna-oguike">
          <img src="/assets/images/ikenna-oguike.png" alt="Ikenna Oguike" />
          <div>
            <h3>Ikenna Oguike</h3>
            <p>Chief Operations Officer</p><span className="profile-link">View profile</span>
          </div>
        </Link>
        <Link className="leader-card" href="/executives/executive-frank-pastorino">
          <img src="/assets/images/frank-pastorino.png" alt="Frank Pastorino" />
          <div>
            <h3>Frank Pastorino</h3>
            <p>Managing Director, Del-York Industries</p><span className="profile-link">View profile</span>
          </div>
        </Link>
        <Link className="leader-card" href="/executives/executive-evans-emmanuel">
          <img src="/assets/images/evans-emmanuel.png" alt="Evans Emmanuel" />
          <div>
            <h3>Evans Emmanuel</h3>
            <p>Head, LIFE Africa</p><span className="profile-link">View profile</span>
          </div>
        </Link>
      </div>
    </section>
    </ScrollReveal>
  
    </main>
  );
}
