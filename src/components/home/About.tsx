import React from "react";
import Button from "@/components/ui/button";

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#FF5A36] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">
        {/* Left Column: Section Tag */}
        <div className="w-full lg:w-[25%] shrink-0">
          <h4 className="heading-04 text-[#161616]">
            ABOUT US
          </h4>
        </div>

        {/* Right Column: Main Headline, Stat Cards & CTA */}
        <div className="w-full lg:w-[75%] flex flex-col items-start">
          {/* Main Headline */}
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-[84px] text-white uppercase leading-[1.05] tracking-[-0.02em] max-w-[850px]">
            LUXFOLIO STUDIO CRAFTS BOLD DIGITAL EXPERIENCES
          </h2>

          {/* 3 Stat Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-2 lg:gap-3 w-full mt-10 md:mt-14 items-stretch">
            {/* Card 1: 300K USERS (Beige) - 325px width */}
            <div className="w-full sm:w-[365px] shrink-0 bg-[#FAF1DF] rounded-2xl p-5 lg:p-6 flex flex-col justify-between h-[172px]">
              <div className="flex items-baseline gap-1 font-heading text-[#161616]">
                <span className="text-4xl lg:text-[46px] leading-none">300K</span>
                <span className="text-sm lg:text-base uppercase tracking-wider font-heading">USERS</span>
              </div>
              <p className="paragraph-medium text-[#161616]/85">
                Luxfolio continues attracting a growing user base across global creative brands.
              </p>
            </div>

            {/* Card 2: 94 % (Dark) */}
            <div className="w-full sm:w-[215px] lg:flex-1 max-w-[240px] shrink-0 bg-[#161616] rounded-2xl p-5 lg:p-6 flex flex-col justify-between h-[172px]">
              <div className="flex items-baseline gap-1 font-heading text-white">
                <span className="text-4xl lg:text-[46px] leading-none">94</span>
                <span className="text-sm lg:text-base font-heading">%</span>
              </div>
              <p className="text-xs lg:text-[13px] leading-relaxed text-white/80 font-sans">
                Clients report higher satisfaction and retention
              </p>
            </div>

            {/* Card 3: 22 K (White) */}
            <div className="w-full sm:w-[215px] lg:flex-1 max-w-[240px] shrink-0 bg-white rounded-2xl p-5 lg:p-6 flex flex-col justify-between h-[172px]">
              <div className="flex items-baseline gap-1 font-heading text-[#161616]">
                <span className="text-4xl lg:text-[46px] leading-none">22</span>
                <span className="text-sm lg:text-base font-heading">K</span>
              </div>
              <p className="text-xs lg:text-[13px] leading-relaxed text-[#161616]/85 font-sans">
                Projects delivered with consistent quality
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-10">
            <Button variant="light" size="sm">
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
