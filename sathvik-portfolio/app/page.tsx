import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Github from "@/components/sections/Github";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

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