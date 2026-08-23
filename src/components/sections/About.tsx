import ScrollAnimation from "@/components/ScrollAnimation";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]"
    >
      <ScrollAnimation>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            I&apos;m a Technical Lead and Senior Software Engineer with over 10
            years of experience designing and delivering scalable,
            high-performance web applications at enterprise scale, with a strong
            focus on front-end architecture, engineering leadership, and user
            experience.
          </p>
          <p>
            My expertise spans React, TypeScript, JavaScript, and SAPUI5. I
            specialize in building maintainable, accessible, and
            performance-driven applications that support complex business
            workflows, particularly within enterprise environments.
          </p>
          <p>
            Throughout my career, I&apos;ve led the development of applications
            used by thousands of users, improving performance, simplifying
            complex processes, and delivering solutions aligned with business
            goals. I work closely with product and design teams to translate
            complex requirements into clean, intuitive interfaces.
          </p>
          <p>
            I take strong ownership of what I build—from leading technical
            direction and architecture decisions to mentoring developers and
            final delivery. I drive engineering practices, code quality
            standards, and continuous improvement across the team.
          </p>
          <p>
            I&apos;ve also been incorporating AI into my workflow to enhance
            development efficiency—accelerating implementation, improving test
            coverage, and supporting better technical decisions.
          </p>
          <p className="text-[var(--foreground)] font-medium">
            Key skills: React, TypeScript, JavaScript (ES6+), SAPUI5, OData,
            UI5 Testing (OPA5, QUnit, Jest), GitHub Actions, Agile/Scrum.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
