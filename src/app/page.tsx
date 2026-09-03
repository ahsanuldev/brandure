import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-text-primary">
      <Hero />
      <About />
      <Services />
      <Works />
      <Projects />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
}
