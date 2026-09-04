"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "WORKS", href: "#works" },
  { name: "PRICING", href: "#pricing" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary pt-16 sm:pt-20 md:pt-28 pb-[14px] overflow-hidden text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] flex flex-col justify-between">
        {/* Top Block: Intro & Email + Dark Get Started Card */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* Left Column: Headline & Giant Underlined Email */}
          <div className="flex flex-col items-start max-w-[820px]">
            <p className="font-sans text-base sm:text-lg md:text-[20px] text-white/90 font-medium tracking-[-0.01em]">
              Uncover the creative potential of Brandure at
            </p>
            <a
              href="mailto:INFO@BRANDURE.COM"
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[82px] text-white tracking-[-0.02em] leading-none uppercase underline underline-offset-[10px] sm:underline-offset-[20px] decoration-2 sm:decoration-[4px] decoration-white hover:decoration-text-primary transition-colors block mt-4 sm:mt-6 duration-300"
            >
              INFO@BRANDURE.COM
            </a>
          </div>

          {/* Right Column: Dark Get Started Card with Button */}
          <div className="bg-text-primary rounded-[24px] p-5 sm:p-6 flex flex-col items-start justify-between gap-8 sm:gap-14 w-full sm:w-auto shrink-0">
            <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase leading-none tracking-tight">
              GET STARTED
            </h3>
            <Button variant="light">Start a project</Button>
          </div>
        </div>

        {/* Middle Block: Navigation Links & Office Location */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-12 mt-16 sm:mt-20 md:mt-24">
          {/* Left Column: Vertical Nav Links */}
          <nav className="flex flex-col items-start gap-3 sm:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-heading text-xl sm:text-2xl text-white uppercase tracking-tight hover:opacity-80 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Column: Office Location */}
          <div className="flex flex-col items-start sm:items-end text-left sm:text-right gap-2 sm:gap-3">
            <h4 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight">
              OFFICE
            </h4>
            <p className="font-sans text-white/90 text-sm sm:text-base md:text-lg leading-snug font-normal">
              Los Angeles, California
              <br />
              United States
            </p>
          </div>
        </div>

        {/* Bottom Block: Giant Brand Name Title (Edge-to-Edge aligned with taller text height) */}
        <div className="w-full mt-12 sm:mt-16 md:mt-20 select-none pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1000 170"
            className="w-full h-auto text-bg fill-current block"
            preserveAspectRatio="none"
          >
            {/* Left Word: BRANDURE */}
            <text
              x="0"
              y="165"
              textLength="570"
              lengthAdjust="spacingAndGlyphs"
              className="font-heading font-normal uppercase"
              fontSize="165"
              fill="currentColor"
            >
              BRANDURE
            </text>

            {/* Right Word: STUDIO */}
            <text
              x="1000"
              y="165"
              textAnchor="end"
              textLength="405"
              lengthAdjust="spacingAndGlyphs"
              className="font-heading font-normal uppercase"
              fontSize="165"
              fill="currentColor"
            >
              STUDIO
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
