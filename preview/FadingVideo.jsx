const { useEffect, useRef } = React;
const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

function FadingVideo({ src, className = "", style, ...rest }) {
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const fadeTo = (target, duration = FADE_MS) => {
      cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "0") || 0;
      const delta = target - from;
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        video.style.opacity = String(from + delta * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };
    const onLoaded = () => {
      video.style.opacity = "0";
      const p = video.play(); if (p && p.catch) p.catch(()=>{});
      fadeTo(1);
    };
    const onTime = () => {
      if (fadingOutRef.current) return;
      const remaining = video.duration - video.currentTime;
      if (Number.isFinite(remaining) && remaining > 0 && remaining <= FADE_OUT_LEAD) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };
    const onEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        try { video.currentTime = 0; } catch(e) {}
        const p = video.play(); if (p && p.catch) p.catch(()=>{});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    if (video.readyState >= 2) onLoaded();
    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={`fading-video ${className}`}
      style={{ opacity: 0, ...style }}
      {...rest}
    />
  );
}

window.FadingVideo = FadingVideo;
