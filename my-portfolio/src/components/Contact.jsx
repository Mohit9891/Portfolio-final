import CONFIG from "../config";
import HlsVideo from "./HlsVideo";

const MARQUEE_ITEMS = Array(20).fill("BUILDING THE FUTURE • ");

export default function Contact() {
  return (
    <section className="contact-sec" id="contact">

      {/* Background video (flipped) */}
      <div className="contact-vid">
        <HlsVideo id="contact-video" />
      </div>
      <div className="contact-overlay" />

      <div className="contact-content">

        {/* Marquee */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((text, i) => (
              <span className="marquee-txt" key={i}>{text}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="contact-main">
          <p className="contact-tag">Let's build something</p>
          <h2 className="contact-head">{CONFIG.tagline}</h2>
          <a
            className="contact-email"
            href={`mailto:${CONFIG.email}`}
          >
            {CONFIG.email} ↗
          </a>
        </div>

        {/* Footer bar */}
        <div className="footer-bar">
          <div className="footer-socials">
            {Object.entries(CONFIG.socials).map(([name, url]) => (
              <a
                className="footer-social"
                href={url}
                target="_blank"
                rel="noreferrer"
                key={name}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="footer-avail">
            <div className="avail-dot" />
            Available for projects
          </div>
        </div>

      </div>
    </section>
  );
}
