"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const marqueePhrases = [
  "LET'S COLLABORATE",
  "DESIGN WITH PURPOSE",
  "BRAND DESIGN",
  "WEB EXPERIENCES",
  "VISUAL STORYTELLING",
];

const MarqueeTrack: React.FC = () => (
  <div className="flex items-center gap-2 shrink-0 pr-2">
    {[...Array(3)].map((_, groupIdx) => (
      <React.Fragment key={groupIdx}>
        {marqueePhrases.map((phrase, idx) => (
          <div
            key={`${groupIdx}-${idx}`}
            className="flex items-center gap-2 font-heading text-[28px] sm:text-[36px] text-white/50 uppercase leading-none tracking-[-0.02em] whitespace-nowrap"
          >
            <span>{phrase}</span>
            <span className="font-heading text-3xl sm:text-4xl leading-none text-white/40 select-none">
              ✦
            </span>
          </div>
        ))}
      </React.Fragment>
    ))}
  </div>
);

export const Cta: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Smooth, 100% seamless infinite GSAP marquee loop
  useGSAP(
    () => {
      if (!tickerRef.current) return;

      const tickerContent = tickerRef.current.querySelector(".marquee-content");
      if (!tickerContent) return;

      const anim = gsap.fromTo(
        tickerContent,
        { xPercent: 0 },
        {
          xPercent: -50,
          repeat: -1,
          duration: 55,
          ease: "none",
          force3D: true,
        }
      );

      // Prevent jerk/jump when switching browser tabs by pausing when hidden and resuming when visible
      const handleVisibilityChange = () => {
        if (document.hidden) {
          anim.pause();
        } else {
          anim.resume();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-20 w-full min-h-[819px] h-[819px] bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Dark Ambient Background Glow Image - Width matching section-container (1440px max-w) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-0 overflow-hidden h-full">
        <div className="relative w-full px-6 h-[1000px] translate-y-24 sm:translate-y-72">
          <Image
            src="/CTA-bg.png"
            alt="CTA Background"
            fill
            className="object-contain object-bottom opacity-85 blur-[8px]"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center">
        {/* Section Header matching site typography */}
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-6 sm:mb-8 px-6">
          <h6 className="heading-06 text-white tracking-wider uppercase font-medium">
            CONTACT US
          </h6>
          <h2 className="font-heading text-5xl sm:text-7xl lg:text-[84px] text-white uppercase leading-[0.95] tracking-[-0.02em]">
            LET&apos;S CREATE <br />
            TOGETHER
          </h2>
        </div>

        {/* Center Block: Image Card & Marquee Ticker centered right through its middle */}
        <div className="relative w-full flex items-center justify-center mt-2 sm:mt-4">
          {/* Ticker Marquee Layer - Positioned exactly at vertical dead-center of image */}
          <div
            ref={tickerRef}
            className="absolute top-1/2 -translate-y-1/2 inset-x-0 z-10 overflow-hidden pointer-events-none select-none"
          >
            <div className="marquee-content flex w-max items-center">
              <MarqueeTrack />
              <MarqueeTrack />
            </div>
          </div>

          {/* Center Model Image Card */}
          <div className="relative z-20 w-[1000px] mx-auto h-[240px] sm:h-[320px] md:h-[380px] bg-transparent">
            <Image
              src="/CTA-img2.png"
              alt="Let's Create Together Model"
              fill
              className="object-contain w-full"
              priority
            />
          </div>

          {/* Start a project CTA Button overlapping bottom of card */}
          <div className="absolute -bottom-6 sm:-bottom-7 z-30 inset-x-0 flex justify-center">
            <Button variant="light">Start a project</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

