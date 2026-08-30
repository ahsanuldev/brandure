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
        LUNEXIS STUDIO
      </Link>

      {/* Right Navigation & CTA Button */}
      <div className="flex items-center gap-4">
        {/* Nav Links Capsule */}
        <nav className="flex items-center gap-1 bg-[#1a1b1e]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-sm font-sans font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Start a project CTA Button in Header */}
        <Button variant="light" size="sm">
          Start a project
        </Button>
      </div>
    </header>
  );
};

export default Header;
