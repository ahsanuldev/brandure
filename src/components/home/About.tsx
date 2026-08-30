"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.children;

      gsap.fromTo(
        cards,
        {
          x: -15,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: aboutRef }
  );

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative z-20 w-full bg-primary py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">
        {/* Left Column: Section Tag */}
        <div className="w-full lg:w-[25%] shrink-0">
          <h4 className="heading-04 text-[#161616]">ABOUT US</h4>
        </div>

        {/* Right Column: Main Headline, Stat Cards & CTA */}
        <div className="w-full lg:w-[75%] flex flex-col items-start">
          {/* Main Headline */}
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-[84px] text-white uppercase leading-[1.05] tracking-[-0.02em] max-w-[850px]">
            BRANDURE STUDIO CRAFTS BOLD DIGITAL EXPERIENCES
          </h2>

          {/* 3 Stat Cards with Stagger Slide-In from Left */}
          <div
            ref={cardsRef}
            className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-2 lg:gap-3 w-full mt-10 md:mt-14 items-stretch overflow-hidden py-1"
          >
            {/* Card 1: 300K USERS (Beige) */}
            <div className="w-full sm:w-[365px] shrink-0 bg-[#FAF1DF] rounded-2xl p-5 lg:p-6 flex flex-col justify-between h-[172px]">
              <div className="flex items-end gap-1.5 font-heading text-[#161616]">
                <span className="text-4xl lg:text-[46px] leading-none">300K</span>
                <span className="text-lg lg:text-[22px] uppercase tracking-wider font-heading leading-none translate-y-1">
                  USERS
                </span>
              </div>
              <p className="paragraph-medium text-[#161616]/85">
                Brandure continues attracting a growing user base across global creative brands.
              </p>
            </div>

            {/* Card 2: 94 % (Dark) */}
            <div className="w-full sm:w-[215px] lg:flex-1 max-w-[240px] shrink-0 bg-[#161616] rounded-2xl p-5 lg:p-6 flex flex-col justify-between h-[172px]">
              <div className="flex items-end gap-1.5 font-heading text-white">
                <span className="text-4xl lg:text-[46px] leading-none">94</span>
                <span className="text-lg lg:text-[22px] font-heading leading-none translate-y-1">
                  %
                </span>
              </div>
              <p className="paragraph-medium text-white/85">
                Clients report higher satisfaction and retention
              </p>
            </div>

            {/* Card 3: 22 K (White) */}
            <div className="w-full sm:w-[215px] lg:flex-1 max-w-[240px] shrink-0 bg-white rounded-2xl p-5 lg:p-6 flex flex-col justify-between h-[172px]">
              <div className="flex items-end gap-1.5 font-heading text-[#161616]">
                <span className="text-4xl lg:text-[46px] leading-none">22</span>
                <span className="text-lg lg:text-[22px] font-heading leading-none translate-y-1">
                  K
                </span>
              </div>
              <p className="paragraph-medium text-[#161616]/85">
                Projects delivered with consistent quality
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-10">
            <Button variant="light">Start a project</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
