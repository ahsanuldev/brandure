"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Works: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const woRef = useRef<HTMLSpanElement>(null);
  const rkRef = useRef<HTMLSpanElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !trackRef.current ||
        !woRef.current ||
        !rkRef.current ||
        !centerImageRef.current
      )
        return;

      // Initial state: Set exact screen dead-center alignment (50% left, 50% top)
      gsap.set(centerImageRef.current, {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 0.2,
        opacity: 0,
        transformOrigin: "center center",
      });

      // GSAP ScrollTrigger timeline scrubbed through the 250vh track
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // 1. WO moves left past section boundary (-65vw) starting at position 0
      tl.to(
        woRef.current,
        {
          x: "-65vw",
          ease: "none",
        },
        0
      )
      // 2. RK moves right past section boundary (+65vw) starting at position 0
      .to(
        rkRef.current,
        {
          x: "65vw",
          ease: "none",
        },
        0
      )
      // 3. Center image expands smoothly to scale 1.0 (dead-centered horizontally & vertically)
      .to(
        centerImageRef.current,
        {
          scale: 1,
          opacity: 1,
          ease: "power1.out",
        },
        0.08
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative z-20 w-full bg-[#FAF1DF] pt-16 md:pt-24 cursor-default"
    >
      {/* 1. Section Header: Subtitle & Headline - Standard layout, ZERO pin effect, scrolls UP normally */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] w-full">
        <div className="w-full flex flex-col items-start gap-3">
          <h6 className="heading-06 text-[#161616] tracking-wider uppercase font-medium">
            SELECTED PROJECTS
          </h6>
          <h2 className="font-heading text-5xl sm:text-7xl lg:text-[84px] text-[#161616] uppercase leading-[0.95] tracking-[-0.02em]">
            OUR SIGNATURE
          </h2>
        </div>
      </div>

      {/* 2. Full Viewport Pinned Track Container (120vh tall track for snappy scroll animation completion) */}
      <div ref={trackRef} className="relative w-full h-[180vh]">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Inner wrapper full width with zero padding for exact 100vw screen centering */}
          <div className="w-full flex items-center justify-center">
            {/* Layered container holding Center Image behind and WO + RK on top */}
            <div className="relative w-full flex items-center justify-center min-h-[450px] lg:min-h-[560px]">
              {/* Center Showcase Project Image Card (Z-0) - 100% Dead Centered Vertically & Horizontally (opacity: 0 default to prevent refresh FOUC) */}
              <div
                ref={centerImageRef}
                style={{ opacity: 0 }}
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-48px)] md:w-[calc(100vw-120px)] max-w-[1320px] aspect-[19/12] rounded-xl sm:rounded-2xl overflow-hidden bg-black/10 border border-black/10 will-change-transform cursor-pointer opacity-0"
              >
                <Image
                  src="/parvezz.jpeg"
                  alt="Signature project showcase"
                  fill
                  priority
                  sizes="(max-width: 1400px) 100vw, 1320px"
                  className="object-cover object-center"
                />
              </div>

              {/* WO & RK Text Container strictly bounded to 90% screen width (w-[90vw]) with overflow-hidden for text cutoff */}
              <div className="relative z-10 w-[90vw] max-w-[1240px] overflow-hidden flex items-center justify-center pointer-events-none py-4">
                <div className="flex items-center justify-center w-full">
                  {/* WO Container - Right aligned so 'O' is at the exact center line */}
                  <div className="w-1/2 flex justify-end">
                    <span
                      ref={woRef}
                      className="font-heading text-[24vw] xl:text-[320px] text-[#161616] uppercase leading-none tracking-[-0.03em] select-none will-change-transform inline-block"
                    >
                      WO
                    </span>
                  </div>
                  {/* RK Container - Left aligned so 'R' is at the exact center line */}
                  <div className="w-1/2 flex justify-start">
                    <span
                      ref={rkRef}
                      className="font-heading text-[24vw] xl:text-[320px] text-[#161616] uppercase leading-none tracking-[-0.03em] select-none will-change-transform inline-block"
                    >
                      RK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
