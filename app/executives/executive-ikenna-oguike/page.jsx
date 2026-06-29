import Link from 'next/link';

export default function Executiveikennaoguike() {
  return (
    <main>
      
    <section className="executive-profile-page">
      <a className="hero-link profile-back-link" href="/about">Back to about</a>
      <article className="executive-profile executive-profile-feature">
        <div className="executive-profile-image"><img src="/assets/images/profiles/ikenna-profile-desktop.png" alt="Ikenna Oguike" /></div>
        <div className="executive-profile-copy">
          <span className="section-kicker">Chief Operations Officer</span>
          <h1>Ikenna Oguike</h1>
          <p>Ikenna is a seasoned entrepreneur with more than 20 years of experience in strategy, business development, consulting, and project finance.</p>
          <p>He has strong experience in West African energy markets and has worked with major global energy supply companies including Glencore, Vitol, Trafigura, and Total.</p>
          <p>He has led project finance transactions including the acquisition of a 12,000-hectare oil palm estate and the takeover of a petroleum products refinery in Gabon. He has also been involved in the privatization of power plants in Nigeria and founded companies including Drake Alliance Projects Ltd.</p>
          <p>Ikenna led the acquisition of Afam Power Plant Plc and Afam Three Fast Power through the Unicorn Power Generation consortium, and mentors Nigerian start-ups through his accelerator program.</p>
        </div>
      </article>
      <div className="profile-related"><a href="/executives/executive-linus-idahosa">Linus Idahosa</a><a href="/executives/executive-larisa-miller">Larisa B. Miller</a><a href="/executives/executive-ayiri-oladunmoye">Ayiri Oladunmoye</a><a href="/executives/executive-frank-pastorino">Frank Pastorino</a><a href="/executives/executive-evans-emmanuel">Evans Emmanuel</a></div>
    </section>
  
    </main>
  );
}
