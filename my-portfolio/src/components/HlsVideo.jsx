import { useEffect, useRef } from "react";
import CONFIG from "../config";

export default function HlsVideo({ id, style }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let hls;

    const init = () => {
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls();
        hls.loadSource(CONFIG.hlsSrc);
        hls.attachMedia(el);
      } else if (el.canPlayType("application/vnd.apple.mpegurl")) {
        el.src = CONFIG.hlsSrc;
      }
    };

    // If hls.js not yet loaded, wait for it
    if (window.Hls) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.Hls) { clearInterval(interval); init(); }
      }, 100);
    }

    return () => hls && hls.destroy();
  }, []);

  return <video ref={ref} id={id} autoPlay muted loop playsInline style={style} />;
}
