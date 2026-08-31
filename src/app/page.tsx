import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-text-primary">
      <Hero />
      <About />
      <Services />
      <Works />
    </main>
  );
}
