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

const subheadingText =
  "WE CRAFT IMPACTFUL DESIGNS FOR BRANDS THAT REFUSE TO BLEND IN A CROWDED MARKET WITH BOLD CREATIVITY.";
const heroTitle = "BRANDURE STUDIO";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current || !contentRef.current) return;

      // Header slide down from top on page load
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.05,
        });
      }

      // Letter-by-letter blur reveal for subheading
      const subheadingLetters =
        heroRef.current.querySelectorAll(".subheading-letter");
      if (subheadingLetters.length > 0) {
        gsap.to(subheadingLetters, {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.6,
          stagger: 0.012,
          ease: "power2.out",
          delay: 0.1,
        });
      }

      // CTA button slide in from bottom on page load
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.35,
        });
      }

      // Letter-by-letter blur reveal for hero giant title
      const letters = heroRef.current.querySelectorAll(".hero-letter");
      if (letters.length > 0) {
        gsap.to(letters, {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.8,
          stagger: 0.035,
          ease: "power3.out",
          delay: 0.2,
        });
      }

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
          src="/parvezz.jpeg"
          alt="Hero background"
          fill
          priority
          className="h-full w-full object-cover object-top"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Header with Initial Slide Down Animation */}
      <div
        ref={headerRef}
        className="relative z-20 w-full"
        style={{
          opacity: 0,
          transform: "translateY(-60px)",
          willChange: "transform, opacity",
        }}
      >
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
              {subheadingText.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap mr-[0.25em]"
                >
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="subheading-letter inline-block"
                      style={{
                        opacity: 0,
                        filter: "blur(12px)",
                        transform: "translateY(16px)",
                        willChange: "transform, filter, opacity",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h6>

            {/* Start a project CTA Button with Initial Slide-In Animation */}
            <div
              ref={ctaRef}
              style={{
                opacity: 0,
                transform: "translateY(35px)",
                willChange: "transform, opacity",
              }}
            >
              <Button variant="light">Start a project</Button>
            </div>
          </div>
        </div>

        {/* Bottom Container: Giant Title & Footer Metadata */}
        <div className="section-container w-full flex flex-col gap-4 pb-8">
          {/* Giant Hero Title with Letter-by-Letter Blur Reveal */}
          <h1 className="w-full text-white font-heading font-normal uppercase leading-none tracking-[-0.03em] text-[13vw] xl:text-[180px] flex flex-wrap">
            {heroTitle.split("").map((char, index) => (
              <span
                key={index}
                className="hero-letter inline-block"
                style={{
                  opacity: 0,
                  filter: "blur(16px)",
                  transform: "translateY(24px)",
                  willChange: "transform, filter, opacity",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
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
