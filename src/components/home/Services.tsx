"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    number: "01",
    title: "ART DIRECTION",
    description:
      "We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.",
  },
  {
    number: "02",
    title: "BRAND IDENTITY",
    description:
      "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.",
  },
  {
    number: "03",
    title: "MOTION DIRECTION",
    description:
      "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.",
  },
  {
    number: "04",
    title: "FRAMER SITES",
    description:
      "Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision.",
  },
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const rows = containerRef.current.querySelectorAll(".service-row");

      gsap.fromTo(
        rows,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative z-20 w-full bg-[#FAF1DF] py-16 md:py-24 lg:py-32 border-t border-[#161616]/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] flex flex-col gap-10 md:gap-14 items-start">
        {/* Top Section Header: Subtitle & Headline */}
        <div className="w-full flex flex-col items-start gap-3">
          <h6 className="heading-06 text-[#161616] tracking-wider uppercase font-medium">
            SERVICES
          </h6>
          <h2 className="font-heading text-5xl sm:text-7xl lg:text-[84px] text-[#161616] uppercase leading-[0.95] tracking-[-0.02em]">
            WHAT WE DO
          </h2>
        </div>

        {/* Services List Placed Below WHAT WE DO with Divider Lines Aligned */}
        <div className="w-full md:w-[78%] lg:w-[85%] md:ml-auto flex flex-col border-b border-[#161616]/15">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="service-row border-t border-[#161616]/15 py-8 lg:py-10 flex flex-col md:flex-row items-start md:items-start justify-between gap-6 md:gap-8"
            >
              {/* Left Number */}
              <span className="text-base lg:text-lg font-sans font-medium text-[#161616]/50 w-12 md:w-14 shrink-0 pt-0.5 md:pt-0">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#161616] uppercase leading-none flex-1">
                {service.title}
              </h3>

              {/* Right Description */}
              <p className="paragraph-large text-text-paragraph w-full md:w-[320px] lg:w-[380px] shrink-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
