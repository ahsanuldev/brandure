import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0d0e10] text-white">
      {/* Background Image */}
      <div className="absolute w-full h-full z-0 bg-red-500">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="h-full  w-full object-cover object-top "
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Top Container: Header + Subheading Content */}
      <div className="relative z-10 w-full flex flex-col">
        <Header />
        
        {/* Middle Subheading Content positioned with balanced spacing below Header */}
        <div className="section-container flex flex-col items-start pt-10 md:pt-16 pb-6">
          <div className="max-w-[423px] flex flex-col items-start gap-6">
            <h6 className="heading-06 text-white leading-[1.3] tracking-[-0.01em]">
              WE CRAFT IMPACTFUL DESIGNS FOR BRANDS THAT REFUSE TO BLEND IN A CROWDED MARKET WITH BOLD CREATIVITY.
            </h6>

            <Button variant="light">Start a project</Button>
          </div>
        </div>
      </div>

      {/* Bottom Container: Giant Title & Footer Metadata */}
      <div className="relative z-10 section-container w-full flex flex-col gap-4 pb-8">
        {/* Giant Hero Title */}
        <h1 className="w-full text-white font-heading font-normal uppercase leading-none tracking-[-0.03em] text-[13vw] xl:text-[180px]">
          BRANDURE STUDIO
        </h1>

        {/* Bottom Footer Row */}
        <div className="w-full flex items-center justify-between paragraph-large">
          <span>© 2026 Luxfolio. All Rights Reserved.</span>
          <span>(Scroll down)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
