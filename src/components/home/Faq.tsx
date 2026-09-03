"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    id: "01",
    question: "WHAT SERVICES DO YOU OFFER?",
    answer:
      "We do minimal only when needed, but always aim for impact when required. Craft digital experiences that are intuitive, fast, and unforgettable — built to convert and impress. Only purpose-driven design.",
  },
  {
    id: "02",
    question: "HOW DO I KNOW WHICH PLAN IS RIGHT FOR ME?",
    answer:
      "We work closely with you during discovery to analyze your goals, audience, and scope, recommending the ideal tailored plan for maximum ROI.",
  },
  {
    id: "03",
    question: "HOW SOON CAN I EXPECT RESULTS?",
    answer:
      "Timeline varies based on project scale, but typically initial concepts are ready within 1-2 weeks, with full launch delivered in 3-5 weeks.",
  },
  {
    id: "04",
    question: "DO YOU OFFER CUSTOM PACKAGES?",
    answer:
      "Yes! Every brand is unique, so we offer completely flexible custom packages aligned with your specific business goals and scope.",
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="relative z-20 w-full bg-[#FAF1DF]">
      {/* Section Container matching site global design token */}
      <div className="section-container">
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-[24px]">
          {/* Left Column: Section Header & FAQ Accordion List */}
          <div className="flex-1 flex flex-col justify-between gap-8 sm:gap-10">
            {/* Header Block matching other section headers */}
            <div className="w-full flex flex-col items-start gap-3">
              <h6 className="heading-06 text-[#161616] tracking-wider uppercase font-medium">
                FAQ
              </h6>
              <h2 className="font-heading text-5xl sm:text-7xl lg:text-[84px] text-[#161616] uppercase leading-[0.95] tracking-[-0.02em]">
                EVERYTHING YOU <br />
                NEED TO KNOW
              </h2>
            </div>

            {/* Accordion List (12px gap between cards) */}
            <div className="w-full flex flex-col gap-[12px]">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-[16px] p-6 sm:p-7 transition-all duration-300 shadow-none border border-transparent hover:border-black/5"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-xl sm:text-2xl lg:text-[26px] text-[#111111] uppercase leading-tight tracking-[-0.01em]">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#111111]/30 flex items-center justify-center shrink-0 transition-transform duration-300">
                        {isOpen ? (
                          <svg
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1H13"
                              stroke="#111111"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1V13M1 7H13"
                              stroke="#111111"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Expandable Answer Paragraph */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Impact Model Portrait Image (Fixed 648px width, dynamic self-stretching height) */}
          <div className="w-full lg:w-[648px] shrink-0 h-[480px] sm:h-[550px] lg:h-auto self-stretch rounded-[28px] sm:rounded-[36px] overflow-hidden relative transition-all duration-300">
            <Image
              src="/jay-soundo-Taur4hEcs28-unsplash 1.png"
              alt="FAQ Model Portrait"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 648px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
