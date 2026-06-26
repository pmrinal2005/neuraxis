"use client";

import { ChevronDownIcon } from "./icons";

const ITEMS = [
  {
    q: "How fast can I get my first pipeline live?",
    a: "Most teams ship their first production pipeline within an hour. Connect a source, pick a destination, and Neuraxis profiles your schema and proposes the transform automatically.",
  },
  {
    q: "What does “adaptive routing” actually mean?",
    a: "Neuraxis evaluates per-record signals — payload, cost ceiling, downstream SLA — and dynamically routes each event to the right model, transform, or destination. You set the policy; the platform picks the path.",
  },
  {
    q: "Do you support self-hosted or VPC deployments?",
    a: "Yes. Scale plans run on managed multi-tenant infra. Enterprise plans support private VPC peering, BYO compute, and air-gapped sovereign clusters.",
  },
  {
    q: "How does pricing scale with usage?",
    a: "Tiers are flat per month with event allowances. Overage is metered transparently per million events. The annual cycle applies a 20% discount, computed live from a multi-dimensional pricing matrix — never hardcoded.",
  },
  {
    q: "Is my data isolated and auditable?",
    a: "All pipelines emit column-level lineage and full event-time audit logs. Customer data is encrypted in transit and at rest, with SOC 2 Type II and ISO 27001 certifications.",
  },
  {
    q: "Can I bring my own models or providers?",
    a: "Yes. Neuraxis ships with 12+ first-party model providers plus a custom-provider SDK. You can route to OpenAI, Anthropic, an internal vLLM cluster, or all three in the same DAG.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative w-full bg-black overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-20"
      aria-label="Frequently asked questions"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="text-sm font-body text-white/80 mb-6">
            // Frequently asked
          </div>
          <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] max-w-3xl">
            Answers, before
            <br />
            you ask them.
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-3">
          {ITEMS.map((it, i) => (
            <details
              key={i}
              className="faq-item liquid-glass rounded-2xl px-6 py-5"
            >
              <summary className="flex items-center justify-between gap-6">
                <span className="font-heading italic text-white text-2xl md:text-3xl tracking-[-1px] leading-tight">
                  {it.q}
                </span>
                <span className="faq-chev liquid-glass w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center">
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </span>
              </summary>
              <p className="mt-4 text-sm md:text-base font-body font-light text-white/85 leading-relaxed max-w-[60ch]">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
