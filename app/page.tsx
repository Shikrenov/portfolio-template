import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ServicesListing from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <ServicesListing />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
