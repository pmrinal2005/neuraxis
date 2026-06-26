"use client";

import FadingVideo from "./FadingVideo";
import {
  MaterialImageIcon,
  MaterialMovieIcon,
  MaterialLightbulbIcon,
} from "./icons";

const CAPS_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";

const CARDS = [
  {
    Icon: MaterialImageIcon,
    tags: ["Schema Drift", "Auto-Heal", "200+ Connectors", "Zero-Config"],
    title: "Adaptive Ingest",
    body:
      "Pipelines learn your sources and self-correct on schema drift — Postgres, Kafka, Snowflake, Stripe, anything you throw at them.",
  },
  {
    Icon: MaterialMovieIcon,
    tags: ["Parallel Compute", "Cost-Aware", "Event Replay", "Lineage"],
    title: "Stream Orchestration",
    body:
      "Run thousands of transforms in parallel with full lineage and replay. Backfills, branching, and audit trails come standard.",
  },
  {
    Icon: MaterialLightbulbIcon,
    tags: ["LLM Routing", "Prompt Cache", "Eval Suite", "Guardrails"],
    title: "Intelligent Routing",
    body:
      "Route every record to the right model, transform, or destination — with policy controls, cost ceilings, and live evaluation.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="features"
      className="relative min-h-screen w-full bg-black overflow-hidden"
      aria-label="Platform capabilities"
    >
      <FadingVideo
        src={CAPS_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6">
            // Capabilities
          </div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Automation
            <br />
            evolved
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {CARDS.map(({ Icon, tags, title, body }) => (
            <article
              key={title}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
            >
              {/* Top row: icon + tags */}
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom: title + body */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
