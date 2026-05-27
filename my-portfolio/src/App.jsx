import { useState, useEffect } from "react";
import "./styles/index.css";

import Loader   from "./components/Loader";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Works    from "./components/Works";
import Journal  from "./components/Journal";
import Stats    from "./components/Stats";
import Contact  from "./components/Contact";

export default function App() {
  const [loading,   setLoading]   = useState(true);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  // Load hls.js from CDN once
  useEffect(() => {
    if (!window.Hls) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js";
      document.head.appendChild(script);
    }
  }, []);

  // Scroll listener for navbar shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal — re-run after loader disappears
  useEffect(() => {
    if (loading) return;
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "-60px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar
            scrolled={scrolled}
            active={activeNav}
            setActive={setActiveNav}
          />
          <Hero />
          <Works />
          <Journal />
          <Stats />
          <Contact />
        </>
      )}
    </>
  );
}
