import { Download } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-5xl mx-auto px-8 pt-40 pb-20"
    >
      <ScrollAnimation>
        <div className="max-w-3xl">
          <p className="text-[var(--muted)] mb-3 text-sm font-medium tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Augusto Accorsi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--muted)]">
            Technical Lead &amp;{" "}
            <span className="text-[var(--accent)]">Senior Software Engineer</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mb-10 leading-relaxed max-w-2xl">
            Over 10 years building scalable, high-performance web applications
            at enterprise scale. Specializing in React, TypeScript, and SAPUI5
            at SAP Labs Latin America.
          </p>
          <a
            href="/resume.pdf"
            download="Jose_Augusto_Accorsi_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
}
