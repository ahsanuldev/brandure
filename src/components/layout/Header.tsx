import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Pricing", href: "#pricing" },
];

export const Header: React.FC = () => {
  return (
    <header className="w-full z-50 py-6 px-6 md:px-[60px] max-w-[1440px] mx-auto flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="text-white text-2xl md:text-3xl font-heading tracking-[-0.03em] uppercase">
        Brandure STUDIO
      </Link>

      {/* Right Navigation & CTA Button */}
      <div className="flex items-center gap-3">
        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = link.name === "About";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`h-[44px] px-5 rounded-full flex items-center justify-center text-[15px] font-sans font-medium transition-all duration-300 select-none ${
                  isActive
                    ? "bg-primary text-white hover:opacity-90"
                    : "bg-[#282C35] text-white hover:bg-[#353A45]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Start a project CTA Button */}
        <Button variant="light" size="sm">
          Start a project
        </Button>
      </div>
    </header>
  );
};

export default Header;
