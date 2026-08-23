import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ScrollAnimation from "@/components/ScrollAnimation";

const cards = [
  {
    icon: FaEnvelope,
    title: "Email",
    text: "augusto.acorsi@gmail.com",
    label: "Send Email",
    href: "mailto:augusto.acorsi@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    text: "Connect with me professionally",
    label: "Connect",
    href: "https://www.linkedin.com/in/augusto-accorsi/",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    text: "Check out my projects and code",
    label: "View Profile",
    href: "https://github.com/augustoaccorsi",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    text: "Rio Grande do Sul, Brazil",
    label: "Available for Remote Work",
    href: "mailto:augusto.acorsi@gmail.com?subject=Remote Work",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]"
    >
      <ScrollAnimation>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-[var(--muted)] mb-10">
          Let&apos;s work together and create something amazing!
        </p>
      </ScrollAnimation>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <ScrollAnimation key={card.title}>
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 flex gap-4 hover:border-[var(--accent)] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[var(--accent)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{card.title}</h3>
                  <p className="text-[var(--muted)] text-xs mb-3 leading-relaxed">
                    {card.text}
                  </p>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-xs font-medium text-[var(--accent)] hover:underline"
                  >
                    {card.label} →
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
}
