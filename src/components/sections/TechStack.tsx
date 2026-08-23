import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import techData from "@/data/techStack.json";
import type { TechItem } from "@/types";

const stack: TechItem[] = techData.tech_stack;

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]"
    >
      <ScrollAnimation>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Tech Stack</h2>
        <p className="text-[var(--muted)] mb-10">
          Technologies I&apos;ve been working with recently
        </p>
      </ScrollAnimation>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {stack.map((tech) => (
          <ScrollAnimation key={tech.name}>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors group">
              <div className="relative w-10 h-10">
                <Image
                  src={`/${tech.logo}`}
                  alt={tech.name}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-xs text-[var(--muted)] text-center leading-tight group-hover:text-[var(--foreground)] transition-colors">
                {tech.name}
              </span>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
