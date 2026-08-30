import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Brandure - Portfolio & Agency",
  description: "Defined by visual rules for product, branding, and web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${interTight.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] antialiased font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}



