import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      
    <div className="contact-bg-glow"></div>
    <section className="contact-hero">
      <div className="hero-content">
        <h1>Connect With Us</h1>
        <p>Whether you're looking to partner, innovate, or simply learn more about our impact across Africa, our global
          team is ready to connect.</p>
      </div>
    </section>

    <section className="contact-container">
      <div className="contact-grid">
        <div className="contact-info-panel">
          <div className="info-group">
            <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg> Our Offices</h3>
            <div className="office">
              <h4>Lagos, Nigeria</h4>
              <p>3, Sapara Williams, Victoria Island,<br />Lagos, Nigeria</p>
            </div>
            <div className="office">
              <h4>Pasadena, California</h4>
              <p>117 East Colorado Blvd., Suite 600,<br />Pasadena, California, USA</p>
            </div>
          </div>

          <div className="info-group">
            <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                </path>
              </svg> Direct Contact</h3>
            <div className="contact-detail">
              <span className="label">Email:</span>
              <a href="mailto:info@delyorkgroup.com" className="hover-link">info@delyorkgroup.com</a>
            </div>
            <div className="contact-detail">
              <span className="label">Phone:</span>
              <div className="phone-numbers">
                <a href="tel:+2349047721762" className="hover-link">+234 904 772 1762</a>
                <a href="tel:+2349041953242" className="hover-link">+234 904 195 3242</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper glassmorphism">
          <h2>Send us a Message</h2>
          <form className="premium-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="name" name="name" required placeholder=" " autoComplete="name" />
                <label htmlFor="name">Your Full Name</label>
                <div className="input-line"></div>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder=" " autoComplete="email" />
                <label htmlFor="email">Email Address</label>
                <div className="input-line"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" required placeholder=" " autoComplete="off" />
              <label htmlFor="subject">Subject</label>
              <div className="input-line"></div>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
              <label htmlFor="message">How can we help you?</label>
              <div className="input-line"></div>
            </div>
            <button type="submit" className="cta-button primary-btn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  
    </main>
  );
}
