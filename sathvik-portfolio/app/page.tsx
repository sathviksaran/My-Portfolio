import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Github from "@/components/sections/github/GitHub";
import Certifications from "@/components/sections/certifications/Certifications";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Github />
      <Certifications />
      <Contact />
    </main>
  );
}