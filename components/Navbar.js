"use client";

import { ArrowUpRight } from "./icons";

const NAV_LINKS = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="liquid-glass w-12 h-12 flex items-center justify-center">
          <span
            className="font-heading italic text-white text-2xl leading-none"
            style={{ marginTop: "-2px" }}
          >
            a
          </span>
        </div>

        {/* Center pill — desktop only */}
        <div className="hidden md:flex liquid-glass items-center px-1.5 py-1.5 gap-1">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
          >
            Claim a Spot
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Spacer to balance logo */}
        <div className="w-12 h-12" aria-hidden="true" />
      </div>
    </nav>
  );
}
