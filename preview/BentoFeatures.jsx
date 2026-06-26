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
