"use client";

import React, { useRef } from "react";
import Image from "next/image";
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
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "02",
    title: "BRAND IDENTITY",
    description:
      "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "03",
    title: "MOTION DIRECTION",
    description:
      "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "04",
    title: "FRAMER SITES",
    description:
      "Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
  },
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevIndexRef = useRef<number | null>(null);
  const isCursorVisibleRef = useRef<boolean>(false);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Scroll trigger reveal animation for service rows
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

      // GSAP quickTo setup for smooth 60fps cursor follower
      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          xPercent: -50,
          yPercent: -50,
          scale: 0,
          opacity: 0,
        });

        xTo.current = gsap.quickTo(cursorRef.current, "x", {
          duration: 0.25,
          ease: "power3.out",
        });
        yTo.current = gsap.quickTo(cursorRef.current, "y", {
          duration: 0.25,
          ease: "power3.out",
        });
      }

      // Initialize all image positions (scaled up & hidden)
      imageRefs.current.forEach((img) => {
        if (img) gsap.set(img, { scale: 1.18, opacity: 0 });
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (xTo.current && yTo.current) {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
    }
  };

  const handleMouseEnterRow = (newIndex: number) => {
    const prevIndex = prevIndexRef.current;

    // Reveal cursor container if hidden
    if (cursorRef.current && !isCursorVisibleRef.current) {
      isCursorVisibleRef.current = true;
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    }

    if (prevIndex === null) {
      // First hover: set target image
      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        if (i === newIndex) {
          gsap.set(img, { scale: 1, opacity: 1 });
        } else {
          gsap.set(img, { scale: 1.18, opacity: 0 });
        }
      });
    } else if (prevIndex !== newIndex) {
      const prevImg = imageRefs.current[prevIndex];
      const newImg = imageRefs.current[newIndex];

      if (prevImg) gsap.killTweensOf(prevImg);
      if (newImg) gsap.killTweensOf(newImg);

      // Previous image shrinks slightly and fades out
      if (prevImg) {
        gsap.to(prevImg, {
          scale: 0.92,
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        });
      }

      // New image zooms out into frame (1.18 -> 1.0) while fading in
      if (newImg) {
        gsap.fromTo(
          newImg,
          { scale: 1.18, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          }
        );
      }
    }

    prevIndexRef.current = newIndex;
  };

  const handleMouseLeaveList = () => {
    isCursorVisibleRef.current = false;
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          prevIndexRef.current = null;
        },
      });
    } else {
      prevIndexRef.current = null;
    }
  };

  return (
    <section
      id="services"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative z-20 w-full bg-[#FAF1DF] py-16 md:py-24 lg:py-32 border-t border-[#161616]/10 cursor-default"
    >
      {/* Floating Image Cursor Follower */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-[180px] sm:w-[200px] h-[240px] sm:h-[260px] rounded-xl overflow-hidden shadow-2xl bg-black hidden md:block"
        style={{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0)",
          willChange: "transform, opacity",
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {servicesData.map((service, index) => (
            <div
              key={service.number}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                opacity: 0,
                transform: "scale(1.18)",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

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
        <div
          onMouseLeave={handleMouseLeaveList}
          className="w-full md:w-[78%] lg:w-[85%] md:ml-auto flex flex-col border-b border-[#161616]/15"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.number}
              onMouseEnter={() => handleMouseEnterRow(index)}
              className="service-row border-t border-[#161616]/15 py-8 lg:py-10 flex flex-col md:flex-row items-start md:items-start justify-between gap-6 md:gap-8 group cursor-pointer"
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
