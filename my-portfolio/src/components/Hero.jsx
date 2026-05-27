import { useState, useEffect, useRef } from "react";
import CONFIG from "../config";
import HlsVideo from "./HlsVideo";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const wordRef = useRef(null);

  // Cycle roles
  useEffect(() => {
    const iv = setInterval(
      () => setRoleIdx((i) => (i + 1) % CONFIG.roles.length),
      2000
    );
    return () => clearInterval(iv);
  }, []);

  // Re-trigger role word animation
  useEffect(() => {
    if (wordRef.current) {
      wordRef.current.style.animation = "none";
      void wordRef.current.offsetWidth;
      wordRef.current.style.animation = "roleFadeIn .4s ease";
    }
  }, [roleIdx]);

  const scrollToWork = () =>
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      {/* Background video */}
      <div className="hero-vid">
        <HlsVideo id="hero-video" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-fade" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">PORTFOLIO '26</p>
        <h1 className="hero-name">{CONFIG.name}</h1>
        <p className="hero-role">
          A{" "}
          <span className="role-word" ref={wordRef}>
            {CONFIG.roles[roleIdx]}
          </span>{" "}
          working {CONFIG.location.toLowerCase()}.
        </p>
        <p className="hero-bio">{CONFIG.bio}</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={scrollToWork}>
            See Works
          </button>
          <button
            className="btn-outline"
            onClick={() => (window.location = `mailto:${CONFIG.email}`)}
          >
            Reach out ↗
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-ind">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
