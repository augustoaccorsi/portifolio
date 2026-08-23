import { GraduationCap, Award, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import educationData from "@/data/education.json";
import achievementsData from "@/data/achievements.json";
import type { Education, Achievement } from "@/types";

const school: Education[] = educationData.education;
const achievements: Achievement[] = achievementsData;

export default function EducationSection() {
  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <ScrollAnimation>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-[var(--accent)]" size={28} />
              Education
            </h2>
          </ScrollAnimation>
          <div className="space-y-6">
            {school.map((edu) => (
              <ScrollAnimation key={edu.institution}>
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
                  <h3 className="font-semibold mb-1">{edu.institution}</h3>
                  <p className="text-[var(--accent)] text-sm font-medium mb-1">
                    {edu.degree} · {edu.field}
                  </p>
                  {edu.focus && (
                    <p className="text-[var(--muted)] text-xs mb-1">
                      Focus: {edu.focus}
                    </p>
                  )}
                  <p className="text-[var(--muted)] text-xs">
                    {edu.start_date} — {edu.end_date} · {edu.location}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <ScrollAnimation>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-[var(--accent)]" size={28} />
              Achievements
            </h2>
          </ScrollAnimation>
          <div className="space-y-6">
            {achievements.map((ach) => (
              <ScrollAnimation key={ach.name}>
                <a
                  href={ach.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {ach.name}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="text-[var(--muted)] shrink-0 mt-0.5 group-hover:text-[var(--accent)] transition-colors"
                    />
                  </div>
                  <p className="text-[var(--accent)] text-xs font-medium mb-1">
                    {ach.periodic}
                  </p>
                  <p className="text-[var(--muted)] text-xs">
                    {ach.autor} · {ach.year}
                  </p>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
