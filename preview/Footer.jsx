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
