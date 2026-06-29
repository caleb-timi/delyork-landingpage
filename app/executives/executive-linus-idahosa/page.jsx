import Link from 'next/link';

export default function Executivelinusidahosa() {
  return (
    <main>
      
    <section className="executive-profile-page">
      <a className="hero-link profile-back-link" href="/about">Back to about</a>
      <article className="executive-profile executive-profile-feature">
        <div className="executive-profile-image"><img src="/assets/images/profiles/linus-profile-desktop.png" alt="Linus Idahosa" /></div>
        <div className="executive-profile-copy">
          <span className="section-kicker">Founder and Executive Chairman</span>
          <h1>Linus Idahosa</h1>
          <p>Linus Idahosa is an internationally renowned businessman, social entrepreneur, and visionary thought leader. He founded the Del-York Group, spanning media, public relations, communications, technology, infrastructure, and development.</p>
          <p>He also founded Del-York Creative Academy, which has trained more than 3,000 students in the film and creative industries through scholarships and subsidized programs.</p>
          <p>His organizations have driven initiatives in media, entertainment, youth development, and global inclusiveness between the United States, China, and Africa. He is also co-chair of the Africa China Foundation for Social & Economic Development and Vice Chairman of the China Africa Business Council Nigeria.</p>
          <p>Under his leadership, Del-York Group has signed landmark partnerships toward the development of Kebulania Lagos Film City. He has received awards for youth development, media excellence, and nation building, and has been hosted by African presidents and world leaders including the Queen of England.</p>
        </div>
      </article>
      <div className="profile-related"><a href="/executives/executive-larisa-miller">Larisa B. Miller</a><a href="/executives/executive-ayiri-oladunmoye">Ayiri Oladunmoye</a><a href="/executives/executive-ikenna-oguike">Ikenna Oguike</a><a href="/executives/executive-frank-pastorino">Frank Pastorino</a><a href="/executives/executive-evans-emmanuel">Evans Emmanuel</a></div>
    </section>
  
    </main>
  );
}
