"use client";

const STEPS = [
  {
    n: "01",
    title: "Connect",
    body:
      "Drop in a database, warehouse, queue, or API. Neuraxis profiles the schema, infers types, and stitches relationships in seconds.",
  },
  {
    n: "02",
    title: "Compose",
    body:
      "Author transformations as Python, SQL, or visual DAGs — version-controlled, branched, and replayable to any point in time.",
  },
  {
    n: "03",
    title: "Automate",
    body:
      "Adaptive AI routes each record through the right model, transform, and policy. Cost ceilings and guardrails are enforced inline.",
  },
  {
    n: "04",
    title: "Activate",
    body:
      "Push curated, governed data to your CRM, warehouse, ML stack, or downstream services — at event-time, exactly-once.",
  },
];

export default function Workflow() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-20"
      aria-label="How it works"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-sm font-body text-white/80 mb-6">
              // How it works
            </div>
            <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
              From raw signal
              <br />
              to live decision.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-body font-light text-white/80">
            Four stages, fully observable. Each step is auditable, replayable,
            and exposes typed APIs you can ship against from day one.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="liquid-glass rounded-2xl p-6 flex flex-col min-h-[260px] relative"
            >
              {/* Connecting tick line — purely decorative */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-9 right-[-22px] w-[18px] h-px bg-white/15"
                />
              )}
              <div className="flex items-center justify-between">
                <span className="font-heading italic text-white/40 text-4xl tracking-[-1px]">
                  {s.n}
                </span>
                <span className="liquid-glass w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 bg-white rounded-full" />
                </span>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl tracking-[-1px] leading-none">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-body font-light text-white/80 leading-snug">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
