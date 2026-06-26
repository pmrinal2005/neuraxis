"use client";

import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";
import Navbar from "./Navbar";
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from "./icons";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

const PARTNERS = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

export default function Hero() {
  return (
    <section
      id="platform"
      className="relative w-full h-screen min-h-[760px] bg-black overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video — 120% scale, top-aligned */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* z-10 content layer */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />

        {/* Hero content — centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-24 px-4">
          {/* Badge */}
          <div
            className="anim-blur-up liquid-glass rounded-full inline-flex items-center pl-1 pr-3 py-1 gap-2"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
              v3.0
            </span>
            <span className="text-sm text-white/90 font-body">
              Adaptive AI Pipelines — Now Generally Available
            </span>
          </div>

          {/* Headline (BlurText word-by-word) */}
          <div className="mt-6">
            <BlurText
              text="Automate Every Decision Your Data Demands"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-3xl tracking-[-4px]"
            />
          </div>

          {/* Subheading */}
          <p
            className="anim-blur-up mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            style={{ animationDelay: "0.8s" }}
          >
            Neuraxis is the AI-driven data automation platform that ingests,
            transforms, and routes enterprise data through self-tuning pipelines —
            engineered for governance, observability, and scale.
          </p>

          {/* CTAs */}
          <div
            className="anim-blur-up flex items-center gap-6 mt-6"
            style={{ animationDelay: "1.1s" }}
          >
            <a
              href="#pricing"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
            >
              Start Free Trial
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Watch Platform Tour
              <Play className="h-4 w-4" />
            </a>
          </div>

          {/* Stats row */}
          <div
            className="anim-blur-up flex items-stretch gap-4 mt-8"
            style={{ animationDelay: "1.3s" }}
          >
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <ClockIcon className="h-7 w-7 text-white" />
              <div className="mt-4 text-4xl font-heading italic text-white tracking-[-1px] leading-none">
                94 ms
              </div>
              <div className="text-xs text-white font-body font-light mt-2">
                Median Pipeline Latency
              </div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <GlobeIcon className="h-7 w-7 text-white" />
              <div className="mt-4 text-4xl font-heading italic text-white tracking-[-1px] leading-none">
                2.8B+
              </div>
              <div className="text-xs text-white font-body font-light mt-2">
                Events Orchestrated Daily
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div
          className="anim-blur-up flex flex-col items-center gap-4 pb-8 px-4"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Trusted by data teams at category-defining companies
          </div>
          <div className="flex items-center justify-center flex-wrap gap-12 md:gap-16">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-2xl md:text-3xl font-heading italic text-white tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
