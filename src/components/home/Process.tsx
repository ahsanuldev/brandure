"use client";

import React from "react";

const processSteps = [
  {
    number: "01",
    title: "STRATEGY FIRST",
    description:
      "We align on goals, audience, and creative direction before anything goes live.",
  },
  {
    number: "02",
    title: "CREATIVE EXECUTION",
    description:
      "Translating strategic insights into bold, high-impact design and interactive prototypes.",
  },
  {
    number: "03",
    title: "SYSTEM & BUILD",
    description:
      "Architecting scalable design systems and pixel-perfect production code with speed.",
  },
  {
    number: "04",
    title: "LAUNCH & SCALE",
    description:
      "Deploying refined digital experiences that capture attention and elevate your brand.",
  },
];

export const Process: React.FC = () => {
  // Radius R = 192, strokeWidth = 16 (Maximized to touch 535x535 bounding box edges)
  const R = 192;
  const C = 2 * Math.PI * R;

  return (
    <section
      id="process"
      className="relative z-20 w-full bg-[#111111] py-16 sm:py-24 md:py-32 text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] w-full flex flex-col gap-14 sm:gap-20 items-start">
        {/* Top Section Header: Subtitle & Headline */}
        <div className="w-full flex flex-col items-start gap-3">
          <h6 className="heading-06 text-white tracking-wider uppercase font-medium">
            HOW WE WORK
          </h6>
          <h2 className="font-heading text-5xl sm:text-7xl lg:text-[84px] text-white uppercase leading-[0.95] tracking-[-0.02em]">
            WE LIKE TO KEEP THINGS <br className="hidden sm:block" />
            NICE AND SIMPLE
          </h2>
        </div>

        {/* Sticky Stacking Circles Container (01, 02, 03, 04) - Stacks One on Top of Another */}
        <div className="relative w-full flex flex-col items-center md:items-end justify-center gap-16 sm:gap-24 pt-4 pb-20 md:pb-32">
          {processSteps.map((step, idx) => {
            // Arc stroke calculation for each step ring
            const strokeDashoffset = C - (C / processSteps.length) * (idx + 1);

            return (
              <div
                key={step.number}
                style={{
                  zIndex: idx + 10,
                  top: "140px",
                }}
                className="sticky w-[340px] sm:w-[460px] lg:w-[535px] h-[340px] sm:h-[460px] lg:h-[535px] aspect-square flex items-center justify-center select-none bg-[#111111] rounded-full"
              >
                {/* SVG Ring Graphic */}
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 400 400"
                >
                  {/* Background Full Track Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r={R}
                    fill="none"
                    stroke="#2c2c2c"
                    strokeWidth="16"
                  />

                  {/* Active Segment Arc Stroke in Vivid Orange */}
                  <circle
                    cx="200"
                    cy="200"
                    r={R}
                    fill="none"
                    stroke="#FF5528"
                    strokeWidth="16"
                    strokeDasharray={C}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Centered Step Info Inside the SVG Circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-0 text-center z-10">
                  {/* Step Number */}
                  <span className="heading-02 text-white/40 tracking-tight mb-5 sm:mb-6">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="heading-02 text-white uppercase tracking-tight leading-[0.98] max-w-[320px] sm:max-w-[380px] mb-3 sm:mb-4">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="paragraph-large text-white/70 max-w-[280px] sm:max-w-[340px] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
