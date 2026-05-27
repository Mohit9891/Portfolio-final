import { useState, useEffect, useRef } from "react";

const LOADER_WORDS = ["Design", "Create", "Inspire"];

export default function Loader({ onComplete }) {
  const [count, setCount]     = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [out, setOut]         = useState(false);
  const wordRef               = useRef(null);

  // Counter animation
  useEffect(() => {
    const start = Date.now();
    const dur   = 2700;
    let raf;
    const tick = () => {
      const elapsed = Date.now() - start;
      const c = Math.min(100, Math.floor((elapsed / dur) * 100));
      setCount(c);
      if (c < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setOut(true);
          setTimeout(onComplete, 500);
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  // Cycling words
  useEffect(() => {
    const iv = setInterval(() => setWordIdx(i => (i + 1) % LOADER_WORDS.length), 900);
    return () => clearInterval(iv);
  }, []);

  // Re-trigger word animation
  useEffect(() => {
    if (wordRef.current) {
      wordRef.current.style.animation = "none";
      void wordRef.current.offsetWidth;
      wordRef.current.style.animation = "wordIn .4s ease";
    }
  }, [wordIdx]);

  return (
    <div className={`loader${out ? " out" : ""}`}>
      <div className="loader-top">Portfolio</div>
      <div className="loader-center">
        <span className="loader-word" ref={wordRef}>
          {LOADER_WORDS[wordIdx]}
        </span>
      </div>
      <div className="loader-bottom">
        <div className="loader-counter">{String(count).padStart(3, "0")}</div>
        <div className="loader-bar">
          <div className="loader-fill" style={{ width: `${count}%` }} />
        </div>
      </div>
    </div>
  );
}
