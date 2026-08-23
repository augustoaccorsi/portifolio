"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { fetchRepos } from "@/lib/github";
import type { GitHubRepo } from "@/types";

const PAGE_SIZE = 9;

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRepos();
      setRepos(data);
    } catch {
      setError("Failed to fetch repositories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]"
    >
      <ScrollAnimation>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Projects</h2>
        <p className="text-[var(--muted)] mb-10">Things I&apos;ve built so far</p>
      </ScrollAnimation>

      {loading && (
        <p className="text-[var(--muted)] text-sm font-mono">
          // fetching repositories...
        </p>
      )}

      {error && !loading && (
        <div className="text-red-400 text-sm flex items-center gap-4">
          <span>{error}</span>
          <button
            onClick={load}
            className="underline hover:no-underline text-[var(--accent)]"
          >
            retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.slice(0, visible).map((repo) => (
              <ScrollAnimation key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:-translate-y-1 hover:border-[var(--accent)] transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-sm group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                    <FaGithub
                      size={16}
                      className="text-[var(--muted)] shrink-0 mt-0.5"
                    />
                  </div>
                  <p className="text-[var(--muted)] text-xs mb-4 line-clamp-3 leading-relaxed">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FaStar size={11} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch size={11} />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>

          {visible < repos.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
              >
                <ChevronDown size={16} />
                Show more ({repos.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
