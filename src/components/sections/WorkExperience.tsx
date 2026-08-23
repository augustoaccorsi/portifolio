"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import workData from "@/data/workExperience.json";
import type { WorkExperience } from "@/types";

const jobs: WorkExperience[] = workData.experience;

// Group by company, preserving insertion order
const companies = jobs.reduce<Record<string, WorkExperience[]>>((acc, job) => {
  if (!acc[job.company]) acc[job.company] = [];
  acc[job.company].push(job);
  return acc;
}, {});

const companyNames = Object.keys(companies);

export default function WorkExperienceSection() {
  const [active, setActive] = useState(companyNames[0]);
  const [activeRole, setActiveRole] = useState(0);

  const roles = companies[active];
  const selected = roles[activeRole] ?? roles[0];

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]"
    >
      <ScrollAnimation>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Work Experience</h2>
        <p className="text-[var(--muted)] mb-10">
          Companies I&apos;ve worked at throughout my career
        </p>
      </ScrollAnimation>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Company tabs */}
        <ScrollAnimation className="md:w-48 shrink-0">
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {companyNames.map((name) => (
              <button
                key={name}
                onClick={() => {
                  setActive(name);
                  setActiveRole(0);
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  active === name
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Role details */}
        <ScrollAnimation className="flex-1 min-w-0">
          {/* Role selector when company has multiple roles */}
          {roles.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {roles.map((r, i) => (
                <button
                  key={r.title}
                  onClick={() => setActiveRole(i)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeRole === i
                      ? "bg-[var(--card)] text-[var(--foreground)] border border-[var(--accent)]"
                      : "text-[var(--muted)] border border-[var(--border)] hover:border-[var(--accent)]"
                  }`}
                >
                  {r.title}
                </button>
              ))}
            </div>
          )}

          <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
            <h3 className="text-lg font-semibold mb-1">{selected.title}</h3>
            <p className="text-[var(--accent)] text-sm font-medium mb-1">
              {selected.company}
            </p>
            <p className="text-[var(--muted)] text-xs mb-5">
              {selected.start_date} — {selected.end_date} · {selected.duration} ·{" "}
              {selected.location}
            </p>
            <ul className="space-y-3">
              {selected.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--muted)]">
                  <CheckCircle
                    size={16}
                    className="text-[var(--accent)] mt-0.5 shrink-0"
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
