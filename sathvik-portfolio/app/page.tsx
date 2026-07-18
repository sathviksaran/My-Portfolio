import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Github from "@/components/sections/github";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Github />
        <Contact />
      </main>

    </>
  );
}