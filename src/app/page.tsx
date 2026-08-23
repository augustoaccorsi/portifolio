import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WorkExperience from "@/components/sections/WorkExperience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <FloatingNavbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
