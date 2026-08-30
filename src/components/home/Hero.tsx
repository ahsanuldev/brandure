"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current || !contentRef.current) return;

      // Hero content parallax: scrolls upward slower than standard scroll
      gsap.to(contentRef.current, {
        yPercent: 70,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fixed background image subtle parallax zoom/scale
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-[#0d0e10] text-white z-0"
    >
      {/* Fixed Hero Background Image */}
      <div
        ref={bgRef}
        className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="h-full w-full object-cover object-top"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Normal Scroll Header */}
      <div className="relative z-20 w-full">
        <Header />
      </div>

      {/* Hero Contents Container with GSAP Parallax */}
      <div
        ref={contentRef}
        className="relative z-10 w-full flex-1 flex flex-col justify-between"
      >
        {/* Middle Subheading Content */}
        <div className="section-container flex flex-col items-start pt-4 md:pt-8 pb-6">
          <div className="max-w-[423px] flex flex-col items-start gap-6">
            <h6 className="heading-06 text-white leading-[1.3] tracking-[-0.01em]">
              WE CRAFT IMPACTFUL DESIGNS FOR BRANDS THAT REFUSE TO BLEND IN A CROWDED MARKET WITH BOLD CREATIVITY.
            </h6>

            <Button variant="light">Start a project</Button>
          </div>
        </div>

        {/* Bottom Container: Giant Title & Footer Metadata */}
        <div className="section-container w-full flex flex-col gap-4 pb-8">
          {/* Giant Hero Title */}
          <h1 className="w-full text-white font-heading font-normal uppercase leading-none tracking-[-0.03em] text-[13vw] xl:text-[180px]">
            BRANDURE STUDIO
          </h1>

          {/* Bottom Footer Row */}
          <div className="w-full flex items-center justify-between paragraph-large">
            <span>© 2026 Brandure. All Rights Reserved.</span>
            <span>(Scroll down)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

