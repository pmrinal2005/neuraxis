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
