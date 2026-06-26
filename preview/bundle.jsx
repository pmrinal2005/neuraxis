
/* ===== icons.jsx ===== */
/* Icons — preview port of components/icons.js */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function ArrowUpRight({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
function Play({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}
function ClockIcon({ className = "h-7 w-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function GlobeIcon({ className = "h-7 w-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
function MaterialImageIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
    </svg>
  );
}
function MaterialMovieIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
    </svg>
  );
}
function MaterialLightbulbIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
    </svg>
  );
}
function PipelineIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <rect x="2" y="9" width="6" height="6" rx="1.5" />
      <rect x="16" y="9" width="6" height="6" rx="1.5" />
      <path d="M8 12h3" />
      <path d="M13 12h3" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  );
}
function ShieldIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function SparkIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M19 14l.7 1.6L21 17l-1.3.4L19 19l-.7-1.6L17 17l1.3-.4L19 14z" />
    </svg>
  );
}
function GearIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}
function GraphIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <path d="M3 20h18" />
      <path d="M5 17V11" />
      <path d="M10 17V7" />
      <path d="M15 17v-5" />
      <path d="M20 17V4" />
    </svg>
  );
}
function ConnectIcon({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 6h6a4 4 0 0 1 4 4v0" />
      <path d="M7 18h6a4 4 0 0 0 4-4v0" />
    </svg>
  );
}
function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <path d="M5 12l4 4L19 7" />
    </svg>
  );
}
function ChevronDownIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

Object.assign(window, {
  ArrowUpRight, Play, ClockIcon, GlobeIcon,
  MaterialImageIcon, MaterialMovieIcon, MaterialLightbulbIcon,
  PipelineIcon, ShieldIcon, SparkIcon, GearIcon, GraphIcon, ConnectIcon,
  CheckIcon, ChevronDownIcon,
});


/* ===== FadingVideo.jsx ===== */
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


/* ===== BlurText.jsx ===== */
const { useEffect: useEffectBT, useRef: useRefBT, useState: useStateBT } = React;

function BlurText({ text, className = "", delayPerWordMs = 100, as: Tag = "p" }) {
  const ref = useRefBT(null);
  const [visible, setVisible] = useStateBT(false);

  useEffectBT(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.1) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { threshold: [0, 0.1, 0.5, 1] });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const words = String(text).split(" ");
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className={`blur-word${visible ? " in-view" : ""}`}
          style={{ animationDelay: `${(i * delayPerWordMs) / 1000}s` }}
        >
          {w}
        </span>
      ))}
    </Tag>
  );
}
window.BlurText = BlurText;


/* ===== Navbar.jsx ===== */
function Navbar() {
  const NAV_LINKS = [
    { label: "Platform", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Workflow", href: "#workflow" },
    { label: "Docs", href: "#faq" },
  ];
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16" aria-label="Primary">
      <div className="flex items-center justify-between">
        <a href="#" className="liquid-glass w-12 h-12 flex items-center justify-center" aria-label="Neuraxis home">
          <span className="font-heading italic text-white text-2xl leading-none" style={{ marginTop: "-2px" }}>n</span>
        </a>
        <div className="hidden md:flex liquid-glass items-center px-1.5 py-1.5 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white">{label}</a>
          ))}
          <a href="#pricing" className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">
            Request Access
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="w-12 h-12" aria-hidden="true" />
      </div>
    </nav>
  );
}
window.Navbar = Navbar;


/* ===== Hero.jsx ===== */
const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";
const PARTNERS = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

function Hero() {
  return (
    <section id="platform" className="relative w-full h-screen min-h-[760px] bg-black overflow-hidden" aria-label="Hero">
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-24 px-4">
          <div className="anim-blur-up liquid-glass rounded-full inline-flex items-center pl-1 pr-3 py-1 gap-2" style={{ animationDelay: "0.4s" }}>
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">v3.0</span>
            <span className="text-sm text-white/90 font-body">Adaptive AI Pipelines — Now Generally Available</span>
          </div>
          <div className="mt-6">
            <BlurText
              text="Automate Every Decision Your Data Demands"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-3xl tracking-[-4px]"
            />
          </div>
          <p className="anim-blur-up mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight" style={{ animationDelay: "0.8s" }}>
            Neuraxis is the AI-driven data automation platform that ingests, transforms, and routes enterprise data through self-tuning pipelines — engineered for governance, observability, and scale.
          </p>
          <div className="anim-blur-up flex items-center gap-6 mt-6" style={{ animationDelay: "1.1s" }}>
            <a href="#pricing" className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2">
              Start Free Trial
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 text-sm font-medium text-white">
              Watch Platform Tour
              <Play className="h-4 w-4" />
            </a>
          </div>
          <div className="anim-blur-up flex items-stretch gap-4 mt-8" style={{ animationDelay: "1.3s" }}>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <ClockIcon className="h-7 w-7 text-white" />
              <div className="mt-4 text-4xl font-heading italic text-white tracking-[-1px] leading-none">94 ms</div>
              <div className="text-xs text-white font-body font-light mt-2">Median Pipeline Latency</div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <GlobeIcon className="h-7 w-7 text-white" />
              <div className="mt-4 text-4xl font-heading italic text-white tracking-[-1px] leading-none">2.8B+</div>
              <div className="text-xs text-white font-body font-light mt-2">Events Orchestrated Daily</div>
            </div>
          </div>
        </div>
        <div className="anim-blur-up flex flex-col items-center gap-4 pb-8 px-4" style={{ animationDelay: "1.4s" }}>
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">Trusted by data teams at category-defining companies</div>
          <div className="flex items-center justify-center flex-wrap gap-12 md:gap-16">
            {PARTNERS.map((name) => (
              <span key={name} className="text-2xl md:text-3xl font-heading italic text-white tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;


/* ===== Capabilities.jsx ===== */
const CAPS_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";

const CAPS_CARDS = [
  { Icon: MaterialImageIcon, tags: ["Schema Drift", "Auto-Heal", "200+ Connectors", "Zero-Config"], title: "Adaptive Ingest",
    body: "Pipelines learn your sources and self-correct on schema drift — Postgres, Kafka, Snowflake, Stripe, anything you throw at them." },
  { Icon: MaterialMovieIcon, tags: ["Parallel Compute", "Cost-Aware", "Event Replay", "Lineage"], title: "Stream Orchestration",
    body: "Run thousands of transforms in parallel with full lineage and replay. Backfills, branching, and audit trails come standard." },
  { Icon: MaterialLightbulbIcon, tags: ["LLM Routing", "Prompt Cache", "Eval Suite", "Guardrails"], title: "Intelligent Routing",
    body: "Route every record to the right model, transform, or destination — with policy controls, cost ceilings, and live evaluation." },
];

function Capabilities() {
  return (
    <section id="features" className="relative min-h-screen w-full bg-black overflow-hidden" aria-label="Platform capabilities">
      <FadingVideo src={CAPS_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6">// Capabilities</div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Automation<br />evolved
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {CAPS_CARDS.map(({ Icon, tags, title, body }) => (
            <article key={title} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {tags.map((t) => (
                    <span key={t} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">{title}</h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Capabilities = Capabilities;


/* ===== BentoFeatures.jsx ===== */
const { useEffect: useEffectBF, useRef: useRefBF, useState: useStateBF } = React;

const BENTO_NODES = [
  { id:"ingest", Icon:PipelineIcon, title:"Adaptive ingest", headline:"Every source. Auto-typed.",
    body:"Detect schema drift, normalise types, and reconcile late-arriving events without writing a single config file.", gridArea:"ingest", metric:"200+ sources" },
  { id:"orchestrate", Icon:GearIcon, title:"Pipeline orchestration", headline:"Branch, fan-out, replay.",
    body:"Visual DAGs with deterministic replay and time-travel debugging on every node — fix the past without rebuilding the future.", gridArea:"orch", metric:"Replay any window" },
  { id:"intel", Icon:SparkIcon, title:"Adaptive intelligence", headline:"Models that route themselves.",
    body:"Live evaluation picks the right model, prompt, and provider per record — cost ceilings and guardrails enforced inline.", gridArea:"intel", metric:"12+ providers" },
  { id:"govern", Icon:ShieldIcon, title:"Governance & lineage", headline:"Every byte, accountable.",
    body:"Full column-level lineage, PII tagging, and policy controls — auditable from raw ingest to downstream consumer.", gridArea:"gov", metric:"SOC 2 · ISO 27001" },
  { id:"observe", Icon:GraphIcon, title:"Observability", headline:"See data as it moves.",
    body:"Throughput, freshness, and anomaly signals on every pipeline edge — anomalies open auto-tickets with full context.", gridArea:"obs", metric:"p99 < 120 ms" },
  { id:"connect", Icon:ConnectIcon, title:"Reverse-ETL & dispatch", headline:"Activate any system.",
    body:"Push curated data back to your CRM, warehouse, ad platforms, or custom webhooks — at event-time, transactionally.", gridArea:"act", metric:"Exactly-once" },
];

const BENTO_TEMPLATE = `
  "ingest ingest orch"
  "ingest ingest intel"
  "gov obs obs"
  "act obs obs"
`;
const MOBILE_BREAKPOINT = 768;

function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useStateBF(0);
  const [, setIsMobile] = useStateBF(false);

  useEffectBF(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    update();
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  const handleActivate = (i) => setActiveIndex(i);

  return (
    <section id="workflow" className="relative w-full bg-black overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-20" aria-label="Platform Pillars">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="text-sm font-body text-white/80 mb-6">// Platform Pillars</div>
          <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
            One platform.<br />Six load-bearing pillars.
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base font-body font-light text-white/80">
            A modern bento on the desktop, a touch-tuned accordion on mobile — same data, same active context, zero external libraries.
          </p>
        </div>

        {/* Desktop bento */}
        <div className="hidden md:grid mt-14 gap-5"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "repeat(4, minmax(140px, auto))",
            gridTemplateAreas: BENTO_TEMPLATE,
          }} role="list">
          {BENTO_NODES.map((n, i) => {
            const isActive = activeIndex === i;
            return (
              <article key={n.id} role="listitem" data-active={isActive}
                onMouseEnter={() => handleActivate(i)} onFocus={() => handleActivate(i)} tabIndex={0}
                className="bento-card liquid-glass rounded-[1.5rem] p-6 flex flex-col cursor-pointer outline-none"
                style={{ gridArea: n.gridArea }} aria-label={`${n.title} — ${n.headline}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center">
                    <n.Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="liquid-glass rounded-full px-2.5 py-1 text-[10px] font-body text-white/85">{n.metric}</span>
                </div>
                <div className="flex-1" />
                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-[0.18em] font-body text-white/55">{n.title}</div>
                  <h3 className="mt-2 font-heading italic text-white text-2xl md:text-3xl tracking-[-1px] leading-tight">{n.headline}</h3>
                  <p className="mt-3 text-sm font-body font-light text-white/85 leading-snug max-w-[36ch]">{n.body}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden mt-12 flex flex-col gap-3" role="list">
          {BENTO_NODES.map((n, i) => {
            const isOpen = activeIndex === i;
            return (
              <article key={n.id} role="listitem" className="liquid-glass rounded-2xl overflow-hidden">
                <button type="button" aria-expanded={isOpen} aria-controls={`bento-panel-${n.id}`}
                  onClick={() => handleActivate(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 p-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="liquid-glass w-10 h-10 rounded-[0.75rem] flex items-center justify-center">
                      <n.Icon className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.18em] font-body text-white/55">{n.title}</span>
                      <span className="block font-heading italic text-white text-xl tracking-[-0.5px] leading-tight">{n.headline}</span>
                    </span>
                  </div>
                  <ChevronDownIcon className="accordion-chev h-4 w-4 text-white/80" data-open={isOpen} />
                </button>
                <div id={`bento-panel-${n.id}`} className="accordion-panel px-5" data-open={isOpen} aria-hidden={!isOpen}>
                  <p className="text-sm font-body font-light text-white/85 leading-snug">{n.body}</p>
                  <span className="mt-3 inline-block liquid-glass rounded-full px-2.5 py-1 text-[10px] font-body text-white/85">{n.metric}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.BentoFeatures = BentoFeatures;


/* ===== Workflow.jsx ===== */
const WF_STEPS = [
  { n:"01", title:"Connect", body:"Drop in a database, warehouse, queue, or API. Neuraxis profiles the schema, infers types, and stitches relationships in seconds." },
  { n:"02", title:"Compose", body:"Author transformations as Python, SQL, or visual DAGs — version-controlled, branched, and replayable to any point in time." },
  { n:"03", title:"Automate", body:"Adaptive AI routes each record through the right model, transform, and policy. Cost ceilings and guardrails are enforced inline." },
  { n:"04", title:"Activate", body:"Push curated, governed data to your CRM, warehouse, ML stack, or downstream services — at event-time, exactly-once." },
];

function Workflow() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-20" aria-label="How it works">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-sm font-body text-white/80 mb-6">// How it works</div>
            <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
              From raw signal<br />to live decision.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-body font-light text-white/80">
            Four stages, fully observable. Each step is auditable, replayable, and exposes typed APIs you can ship against from day one.
          </p>
        </div>
        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WF_STEPS.map((s, i) => (
            <li key={s.n} className="liquid-glass rounded-2xl p-6 flex flex-col min-h-[260px] relative">
              {i < WF_STEPS.length - 1 && (
                <span aria-hidden="true" className="hidden lg:block absolute top-9 right-[-22px] w-[18px] h-px bg-white/15" />
              )}
              <div className="flex items-center justify-between">
                <span className="font-heading italic text-white/40 text-4xl tracking-[-1px]">{s.n}</span>
                <span className="liquid-glass w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 bg-white rounded-full" />
                </span>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl tracking-[-1px] leading-none">{s.title}</h3>
                <p className="mt-3 text-sm font-body font-light text-white/80 leading-snug">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Workflow = Workflow;


/* ===== PricingMatrix.jsx ===== */
const { useEffect: useEffectPM, useRef: useRefPM, useState: useStatePM } = React;

const PRICING_MATRIX = {
  tiers: [
    { id:"starter", name:"Starter", tagline:"For solo builders piping their first datasets.",
      baseMonthly:29, featured:false, ctaLabel:"Begin Free Trial",
      features:["Up to 5 active pipelines","10M events / month","30+ source connectors","Community support","7-day event replay"] },
    { id:"scale", name:"Scale", tagline:"For teams orchestrating production data at velocity.",
      baseMonthly:119, featured:true, ctaLabel:"Launch Scale",
      features:["Unlimited pipelines","250M events / month","200+ connectors + custom SDK","Priority engineering support","30-day lineage & replay","SOC 2 + role-based access"] },
    { id:"enterprise", name:"Enterprise", tagline:"For regulated orgs with sovereign data residency.",
      baseMonthly:349, featured:false, ctaLabel:"Contact Sales",
      features:["Dedicated compute clusters","Unlimited event throughput","Private networking & VPC peering","24/7 named-engineer support","365-day audit retention","Custom guardrails & DPA"] },
  ],
  currencies: {
    USD: { symbol:"$", tariff:1.0, locale:"en-US", code:"USD" },
    INR: { symbol:"₹", tariff:83.0, locale:"en-IN", code:"INR" },
    EUR: { symbol:"€", tariff:0.92, locale:"de-DE", code:"EUR" },
  },
  cycles: { monthly:{ months:1, discount:0 }, annual:{ months:12, discount:0.2 } },
};

function computePrice(tierId, currencyKey, cycleKey) {
  const tier = PRICING_MATRIX.tiers.find((t) => t.id === tierId);
  const c = PRICING_MATRIX.currencies[currencyKey];
  const cyc = PRICING_MATRIX.cycles[cycleKey];
  if (!tier || !c || !cyc) return { displayValue:"—", suffix:"" };
  const total = tier.baseMonthly * c.tariff * cyc.months * (1 - cyc.discount);
  const perMonth = total / cyc.months;
  const formatted = new Intl.NumberFormat(c.locale, { maximumFractionDigits:0 }).format(perMonth);
  return { displayValue:`${c.symbol} ${formatted}`, suffix: cycleKey==="annual" ? "/mo billed yearly" : "/mo" };
}

function PricingMatrix() {
  const [cycle, setCycle] = useStatePM("monthly");
  const [currency, setCurrency] = useStatePM("USD");
  const cellsRef = useRefPM({});

  useEffectPM(() => {
    const cells = cellsRef.current;
    PRICING_MATRIX.tiers.forEach((tier) => {
      const slot = cells[tier.id];
      if (!slot) return;
      const { displayValue, suffix } = computePrice(tier.id, currency, cycle);
      if (slot.value) slot.value.textContent = displayValue;
      if (slot.suffix) slot.suffix.textContent = suffix;
      if (slot.annualTotal) {
        const c = PRICING_MATRIX.currencies[currency];
        const totalAnnual = tier.baseMonthly * c.tariff * PRICING_MATRIX.cycles.annual.months * (1 - PRICING_MATRIX.cycles.annual.discount);
        const monthlyAnnualised = tier.baseMonthly * c.tariff * 12;
        const savings = Math.round(monthlyAnnualised - totalAnnual);
        const formatted = new Intl.NumberFormat(c.locale, { maximumFractionDigits:0 }).format(savings);
        slot.annualTotal.textContent = cycle==="annual" ? `Save ${c.symbol} ${formatted} / year` : "";
      }
    });
  }, [cycle, currency]);

  const registerCell = (tierId, key) => (el) => {
    if (!cellsRef.current[tierId]) cellsRef.current[tierId] = {};
    cellsRef.current[tierId][key] = el;
  };

  return (
    <section id="pricing" className="relative w-full bg-black overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-20" aria-label="Pricing">
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none"
        style={{ background:"radial-gradient(60% 50% at 50% 0%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)" }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="text-sm font-body text-white/80 mb-6">// Pricing</div>
          <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
            Priced for every<br />scale of automation
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base font-body font-light text-white/80">
            Transparent tiers. Swap currency and billing cycle without a single page re-render — values recompute from a live multi-dimensional matrix.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="liquid-glass bill-track" role="tablist" aria-label="Billing cycle">
            <span className="bill-thumb" data-cycle={cycle} aria-hidden="true" />
            <button type="button" role="tab" aria-selected={cycle==="monthly"} data-active={cycle==="monthly"}
              className="bill-btn" onClick={() => setCycle("monthly")}>Monthly</button>
            <button type="button" role="tab" aria-selected={cycle==="annual"} data-active={cycle==="annual"}
              className="bill-btn" onClick={() => setCycle("annual")}>Annual <span className="opacity-70">· save 20%</span></button>
          </div>
          <label className="liquid-glass rounded-full inline-flex items-center gap-2 px-4 py-2 cursor-pointer">
            <span className="text-xs font-body text-white/70">Currency</span>
            <div className="relative inline-flex items-center">
              <select aria-label="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)}
                className="currency-select text-sm font-body text-white">
                {Object.entries(PRICING_MATRIX.currencies).map(([k, v]) => (
                  <option key={k} value={k}>{v.symbol} {k}</option>
                ))}
              </select>
              <ChevronDownIcon className="h-3.5 w-3.5 text-white/70 pointer-events-none -ml-4" />
            </div>
          </label>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRICING_MATRIX.tiers.map((tier) => {
            const initial = computePrice(tier.id, currency, cycle);
            const c0 = PRICING_MATRIX.currencies[currency];
            const initialSavings = Math.round(tier.baseMonthly * c0.tariff * 12 * PRICING_MATRIX.cycles.annual.discount);
            const initialSavingsLabel = cycle==="annual"
              ? `Save ${c0.symbol} ${new Intl.NumberFormat(c0.locale,{maximumFractionDigits:0}).format(initialSavings)} / year`
              : "";
            return (
              <article key={tier.id} data-featured={tier.featured}
                className="tier-card liquid-glass rounded-[1.5rem] p-7 flex flex-col">
                <header className="flex items-center justify-between">
                  <h3 className="font-heading italic text-white text-3xl tracking-[-1px] leading-none">{tier.name}</h3>
                  {tier.featured && (
                    <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-body text-white">Most chosen</span>
                  )}
                </header>
                <p className="mt-3 text-sm font-body font-light text-white/75 leading-snug">{tier.tagline}</p>

                <div className="mt-7 flex items-baseline gap-2">
                  <span ref={registerCell(tier.id, "value")}
                    className="font-heading italic text-white text-5xl tracking-[-1px] leading-none"
                    data-price-cell={`${tier.id}-value`}>{initial.displayValue}</span>
                  <span ref={registerCell(tier.id, "suffix")}
                    className="text-xs font-body text-white/70"
                    data-price-cell={`${tier.id}-suffix`}>{initial.suffix}</span>
                </div>

                <div ref={registerCell(tier.id, "annualTotal")}
                  className="mt-2 text-xs font-body text-white/60 min-h-[1rem]"
                  data-price-cell={`${tier.id}-savings`}>{initialSavingsLabel}</div>

                <ul className="mt-7 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-body text-white/85">
                      <span className="liquid-glass flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white" />
                      </span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${
                  tier.featured ? "bg-white text-black" : "liquid-glass-strong text-white"
                }`}>
                  {tier.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs font-body text-white/55">
          Prices shown per month, in your selected currency. Annual plans billed upfront with a 20% discount. Regional tariffs computed from the live configuration matrix — no hard-coded prices in the UI.
        </p>
      </div>
    </section>
  );
}
window.PricingMatrix = PricingMatrix;


/* ===== Testimonials.jsx ===== */
const TM_QUOTES = [
  { quote:"Neuraxis cut our data integration backlog from a quarter to a sprint. The lineage view alone paid for the platform.", name:"Priya Raman", role:"Head of Data, Vela Robotics" },
  { quote:"We replaced six brittle ETL services with one self-healing pipeline graph. Replay-anywhere is the killer feature.", name:"Marcus Hale", role:"Staff Engineer, Apex Health" },
  { quote:"Adaptive routing dropped our model spend 38% in a month without any team retraining costs.", name:"Sora Tanaka", role:"AI Platform Lead, Orbit" },
  { quote:"The governance controls let us ship to regulated customers in days, not quarters. Audit-ready by default.", name:"Elena Petrova", role:"VP Engineering, Zeno Banking" },
  { quote:"Neuraxis is the first platform where our analysts and ML team meet in the same DAG. Friction gone.", name:"Daniel Okafor", role:"Chief Data Officer, Aeon" },
];

function Testimonials() {
  const track = [...TM_QUOTES, ...TM_QUOTES];
  return (
    <section className="relative w-full bg-black overflow-hidden py-24 md:py-28" aria-label="What teams are saying">
      <div className="px-6 md:px-16 lg:px-20 max-w-6xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="text-sm font-body text-white/80 mb-6">// Customers</div>
          <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
            Trusted by teams<br />shipping in production.
          </h2>
        </div>
      </div>
      <div className="marquee-mask mt-14 overflow-hidden">
        <div className="marquee-track gap-5 px-5">
          {track.map((q, i) => (
            <figure key={`${q.name}-${i}`} className="liquid-glass rounded-2xl p-6 w-[340px] md:w-[380px] flex-shrink-0 flex flex-col">
              <blockquote className="font-heading italic text-white text-xl md:text-2xl leading-snug tracking-[-0.5px]">“{q.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center font-heading italic text-white text-base">{q.name[0]}</span>
                <span className="flex flex-col">
                  <span className="text-sm font-body text-white">{q.name}</span>
                  <span className="text-xs font-body font-light text-white/65">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;


/* ===== FAQ.jsx ===== */
const FAQ_ITEMS = [
  { q:"How fast can I get my first pipeline live?", a:"Most teams ship their first production pipeline within an hour. Connect a source, pick a destination, and Neuraxis profiles your schema and proposes the transform automatically." },
  { q:"What does “adaptive routing” actually mean?", a:"Neuraxis evaluates per-record signals — payload, cost ceiling, downstream SLA — and dynamically routes each event to the right model, transform, or destination. You set the policy; the platform picks the path." },
  { q:"Do you support self-hosted or VPC deployments?", a:"Yes. Scale plans run on managed multi-tenant infra. Enterprise plans support private VPC peering, BYO compute, and air-gapped sovereign clusters." },
  { q:"How does pricing scale with usage?", a:"Tiers are flat per month with event allowances. Overage is metered transparently per million events. The annual cycle applies a 20% discount, computed live from a multi-dimensional pricing matrix — never hardcoded." },
  { q:"Is my data isolated and auditable?", a:"All pipelines emit column-level lineage and full event-time audit logs. Customer data is encrypted in transit and at rest, with SOC 2 Type II and ISO 27001 certifications." },
  { q:"Can I bring my own models or providers?", a:"Yes. Neuraxis ships with 12+ first-party model providers plus a custom-provider SDK. You can route to OpenAI, Anthropic, an internal vLLM cluster, or all three in the same DAG." },
];

function FAQ() {
  return (
    <section id="faq" className="relative w-full bg-black overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-20" aria-label="Frequently asked questions">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="text-sm font-body text-white/80 mb-6">// Frequently asked</div>
          <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
            Answers, before<br />you ask them.
          </h2>
        </div>
        <div className="mt-14 flex flex-col gap-3">
          {FAQ_ITEMS.map((it, i) => (
            <details key={i} className="faq-item liquid-glass rounded-2xl px-6 py-5">
              <summary className="flex items-center justify-between gap-6">
                <span className="font-heading italic text-white text-2xl md:text-3xl tracking-[-1px] leading-tight">{it.q}</span>
                <span className="faq-chev liquid-glass w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center">
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </span>
              </summary>
              <p className="mt-4 text-sm md:text-base font-body font-light text-white/85 leading-relaxed max-w-[60ch]">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;


/* ===== Footer.jsx ===== */
const FT_COLS = [
  { title:"Platform", links:["Connectors","Orchestration","Adaptive AI","Governance","Observability"] },
  { title:"Resources", links:["Documentation","Changelog","Engineering Blog","Security","Status"] },
  { title:"Company", links:["About","Careers","Customers","Press Kit","Contact"] },
];

function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden pt-20 pb-10 px-6 md:px-16 lg:px-20" aria-label="Footer">
      <div className="max-w-6xl mx-auto">
        <div className="liquid-glass rounded-[1.75rem] p-8 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="font-heading italic text-white text-4xl md:text-6xl tracking-[-2px] leading-[0.95] max-w-xl">
              Ship the next decade<br />of data automation.
            </h3>
            <p className="mt-4 max-w-md text-sm md:text-base font-body font-light text-white/80">
              Spin up a sandbox in 60 seconds. No credit card, no quota negotiation — just your data and a working pipeline.
            </p>
          </div>
          <a href="#pricing" className="bg-white text-black rounded-full inline-flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap self-start">
            Start Free Trial
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="liquid-glass w-12 h-12 flex items-center justify-center">
              <span className="font-heading italic text-white text-2xl leading-none" style={{ marginTop: "-2px" }}>n</span>
            </div>
            <p className="mt-5 text-sm font-body font-light text-white/70 max-w-[24ch] leading-snug">
              Neuraxis — AI-driven data automation for teams who refuse to babysit pipelines.
            </p>
          </div>
          {FT_COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-[0.18em] font-body text-white/55">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm font-body text-white/85 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-divider flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="text-xs font-body text-white/55">© {new Date().getFullYear()} Neuraxis Systems, Inc. All rights reserved.</span>
          <div className="flex items-center gap-5 text-xs font-body text-white/55">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;


/* ===== app.jsx ===== */
function App() {
  return (
    <main className="bg-black">
      <Hero />
      <Capabilities />
      <BentoFeatures />
      <Workflow />
      <PricingMatrix />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

