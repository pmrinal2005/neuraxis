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
