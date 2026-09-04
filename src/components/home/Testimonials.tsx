"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonialsData = [
  {
    id: "01",
    quote:
      '"They completely elevated our brand presence the new website feels modern and truly exceeded expectations!"',
    author: "Sarah Lim",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    variant: "white",
  },
  {
    id: "02",
    quote:
      '"The team delivered more than we expected the experience feels premium thoughtful and built for real impact!!"',
    author: "Michael Ander",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    variant: "orange",
  },
  {
    id: "03",
    quote:
      '"Working with luxfolio was smooth and professional the design quality and attention to detail truly stood out!"',
    author: "Emily Ross",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    variant: "orange",
  },
  {
    id: "04",
    quote:
      '"Lunexis understood our vision from day one the final result feels clean confident and perfectly executed!"',
    author: "James Carter",
    role: "Brand Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    variant: "white",
  },
];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      const mm = gsap.matchMedia();

      // Desktop animation: Pinned 2-phase zoom animation for screens >= 768px
      mm.add("(min-width: 768px)", () => {
        if (!containerRef.current || !textRef.current) return;
        const elementsToAnimate = containerRef.current.querySelectorAll(".testimonial-card");

        gsap.set(textRef.current, { scale: 0.35, opacity: 0 });
        if (elementsToAnimate.length > 0) {
          gsap.set(elementsToAnimate, { scale: 0.4, opacity: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // 1. Center Headline Zoom-In
        tl.to(
          textRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        );

        // 2. Testimonial Cards Scale-In
        if (elementsToAnimate.length > 0) {
          tl.to(
            elementsToAnimate,
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
            },
            0.32
          );
        }
      });

      // Mobile layout (< 768px): No GSAP pinning/zoom, normal static display
      mm.add("(max-width: 767px)", () => {
        if (textRef.current) gsap.set(textRef.current, { scale: 1, opacity: 1 });
        if (containerRef.current) {
          const elementsToAnimate = containerRef.current.querySelectorAll(".testimonial-card");
          if (elementsToAnimate.length > 0) gsap.set(elementsToAnimate, { scale: 1, opacity: 1 });
        }
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div className="relative w-full bg-[#FAF1DF] md:min-h-[180vh]">
      <section
        id="testimonials"
        ref={containerRef}
        className="relative z-20 w-full min-h-screen md:h-screen bg-[#FAF1DF] flex flex-col md:flex-row items-center justify-center overflow-visible md:overflow-hidden cursor-default px-6 py-16 md:py-0 md:px-[60px]"
      >
        {/* Centered Header Block */}
        <div
          ref={textRef}
          className="relative z-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 max-w-5xl pointer-events-auto md:pointer-events-none will-change-transform mb-12 md:mb-0 opacity-100 md:opacity-0"
        >
          <h6 className="heading-05 text-[#161616] uppercase font-medium">
            TESTIMONIAL
          </h6>
          <h2 className="font-heading text-4xl sm:text-7xl md:text-8xl lg:heading-01 text-[#161616] uppercase leading-[0.95] md:leading-[0.92] tracking-[-0.02em]">
            STORIES FROM OUR <br />
            HAPPY CLIENTS
          </h2>
        </div>

        {/* Testimonial Cards Layer (Mobile: Stacked Vertical Cards | Desktop: Rotated Corner Overlay) */}
        <div
          ref={cardsContainerRef}
          className="relative md:absolute md:inset-0 max-w-[1360px] mx-auto w-full px-0 sm:px-6 md:px-14 py-0 md:py-12 flex flex-col md:justify-between items-center md:items-stretch gap-6 md:gap-0 pointer-events-auto md:pointer-events-none z-20"
        >
          {/* Top Row (Desktop) / First 2 Cards (Mobile) */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-6 md:gap-0">
            {/* Card 01 (White) */}
            <div className="testimonial-card pointer-events-auto w-full max-w-md md:w-[365px] p-6 sm:p-7 rounded-[16px] bg-white text-[#111111] flex flex-col items-center text-center gap-4 rotate-0 md:-rotate-[14deg] translate-x-0 md:translate-x-24 translate-y-0 md:translate-y-6 will-change-transform opacity-100 md:opacity-0">
              <p className="font-heading! heading-06 normal-case!">
                {testimonialsData[0].quote}
              </p>
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={testimonialsData[0].image}
                    alt={testimonialsData[0].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#111111] font-normal">
                  {testimonialsData[0].author}, {testimonialsData[0].role}
                </span>
              </div>
            </div>

            {/* Card 02 (Orange) */}
            <div className="testimonial-card pointer-events-auto w-full max-w-md md:w-[365px] p-6 sm:p-7 rounded-[16px] bg-[#FF5528] text-[#111111] flex flex-col items-center text-center gap-4 rotate-0 md:rotate-[9deg] translate-x-0 md:-translate-x-32 translate-y-0 md:translate-y-14 will-change-transform opacity-100 md:opacity-0">
              <p className="font-heading! heading-06 normal-case!">
                {testimonialsData[1].quote}
              </p>
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={testimonialsData[1].image}
                    alt={testimonialsData[1].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#111111] font-normal">
                  {testimonialsData[1].author}, {testimonialsData[1].role}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row (Desktop) / Last 2 Cards (Mobile) */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6 md:gap-0">
            {/* Card 03 (Orange) */}
            <div className="testimonial-card pointer-events-auto w-full max-w-md md:w-[365px] p-6 sm:p-7 rounded-[16px] bg-[#FF5528] text-[#111111] flex flex-col items-center text-center gap-4 rotate-0 md:-rotate-[7deg] translate-x-0 md:translate-x-36 translate-y-0 md:-translate-y-14 will-change-transform opacity-100 md:opacity-0">
              <p className="font-heading! heading-06 normal-case!">
                {testimonialsData[2].quote}
              </p>
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={testimonialsData[2].image}
                    alt={testimonialsData[2].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#111111] font-normal">
                  {testimonialsData[2].author}, {testimonialsData[2].role}
                </span>
              </div>
            </div>

            {/* Card 04 (White) */}
            <div className="testimonial-card pointer-events-auto w-full max-w-md md:w-[365px] p-6 sm:p-7 rounded-[16px] bg-white text-[#111111] flex flex-col items-center text-center gap-4 rotate-0 md:rotate-[13deg] translate-x-0 md:-translate-x-18 translate-y-0 md:-translate-y-6 will-change-transform opacity-100 md:opacity-0">
              <p className="font-heading! heading-06 normal-case!">
                {testimonialsData[3].quote}
              </p>
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={testimonialsData[3].image}
                    alt={testimonialsData[3].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#111111] font-normal">
                  {testimonialsData[3].author}, {testimonialsData[3].role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
