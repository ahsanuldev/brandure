"use client";

import React from "react";
import Image from "next/image";

const projectsCards = [
  {
    id: "01",
    title: "VISUAL STORYTELLING",
    description:
      "Through creative visuals and design, we turn ideas into compelling stories that connect with audiences.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "02",
    title: "DIGITAL ECOSYSTEMS",
    description:
      "Architecting scalable design systems and high-performance digital experiences that elevate modern brands.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "03",
    title: "BRAND IDENTITY",
    description:
      "Crafting distinct visual identities and motion languages that leave an unmistakable lasting signature.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2000&q=90",
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-20 w-full bg-[#FAF1DF] pb-32 md:pb-48 cursor-default"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] w-full">
        {/* Simple Sticky Stacking Cards Container - 20px gap between cards */}
        <div className="relative flex flex-col gap-[20px] w-full max-w-[1320px] mx-auto">
          {projectsCards.map((project, index) => (
            <div
              key={project.id}
              style={{
                zIndex: index + 10,
                top: "60px",
              }}
              className="project-banner-card sticky relative w-full aspect-[19/12] rounded-xl sm:rounded-2xl overflow-hidden bg-black/20 group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id === "01"}
                sizes="(max-width: 1400px) 100vw, 1320px"
                className="object-cover object-center"
              />

              {/* Clean Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Centered Content Box - Text Zooms In on Hover (Starts zoomed out at scale-85) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 text-center gap-3 sm:gap-4 z-10 opacity-0 scale-85 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                <h3 className="heading-02 text-white uppercase max-w-3xl leading-[0.95] drop-shadow-md">
                  {project.title}
                </h3>
                <p className="paragraph-large text-white/85 max-w-xl font-normal leading-relaxed drop-shadow-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
