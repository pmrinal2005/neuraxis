"use client";

import { useEffect, useRef } from "react";

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55; // seconds before end to begin fading out

/**
 * FadingVideo
 * - Custom rAF crossfade (no CSS transitions, no <video loop>).
 * - On loadeddata: fade in.
 * - During playback: when (duration - currentTime) <= FADE_OUT_LEAD, fade out.
 * - On ended: reset to 0, wait 100ms, restart from 0, fade in again — manual loop.
 *
 * Forwarding-friendly: pass className/style for sizing/positioning.
 */
export default function FadingVideo({
  src,
  className = "",
  style,
  ...rest
}) {
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // helper: rAF-driven opacity fade, picks up from current opacity
    const fadeTo = (target, duration = FADE_MS) => {
      cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "0") || 0;
      const delta = target - from;

      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const v = from + delta * t;
        video.style.opacity = String(v);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const handleLoadedData = () => {
      video.style.opacity = "0";
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (fadingOutRef.current) return;
      const remaining = video.duration - video.currentTime;
      if (
        Number.isFinite(remaining) &&
        remaining > 0 &&
        remaining <= FADE_OUT_LEAD
      ) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        try {
          video.currentTime = 0;
        } catch (e) {
          /* some browsers throw on currentTime set pre-seekable */
        }
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // If browser already had it cached and skipped loadeddata
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
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
