import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { UtensilsCrossed, Building2, House } from "lucide-react";

const projects = [
  {
    icon: (
      <UtensilsCrossed size={48} strokeWidth={1.5} className="text-ink-3" />
    ),
    tag: "Restaurant",
    title: "Restaurant IT Overhaul",
    desc: "Full network and POS infrastructure for a busy Montreal restaurant.",
    bullets: [
      "Designed reliable WiFi for staff & guests",
      "Connected POS terminals to secure LAN",
      "Configured receipt printers & KDS",
    ],
    bg: "from-accent-soft to-blue-100",
    accent: "text-accent bg-accent-soft",
  },
  {
    icon: <Building2 size={48} strokeWidth={1.5} className="text-ink-3" />,
    tag: "Office",
    title: "Email Platform Migration",
    desc: "Migrated a 12-person office from Google Workspace to Microsoft 365 with zero downtime.",
    bullets: [
      "Full mailbox migration & data integrity",
      "Teams & OneDrive configuration",
      "Multi-factor authentication rollout",
    ],
    bg: "from-accent-soft to-blue-100",
    accent: "text-accent bg-accent-soft",
  },
  {
    icon: <House size={48} strokeWidth={1.5} className="text-ink-3" />,
    tag: "Remote Work",
    title: "Remote Worker VPN Setup",
    desc: "Enabled secure remote access to office systems for a distributed team.",
    bullets: [
      "VPN server configuration & deployment",
      "Firewall rules & split tunneling",
      "Staff onboarding & documentation",
    ],
    bg: "from-accent-soft to-blue-100",
    accent: "text-accent bg-accent-soft",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 px-8 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Recent Work</SectionLabel>
          <h2
            className="font-display font-extrabold text-ink leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Projects that made
            <br />a difference.
          </h2>
          <p className="text-ink-3 text-base mt-3 max-w-md font-light leading-relaxed">
            Real IT challenges solved for local businesses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="group bg-card border border-border rounded-xl2 overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-card-lg transition-all duration-300 h-full flex flex-col">
                {/* Card header */}
                <div
                  className={`h-36 flex items-center justify-center text-6xl bg-gradient-to-br ${p.bg}`}
                >
                  {p.icon}
                </div>
                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className={`inline-block text-xs font-bold tracking-wide px-2.5 py-1 rounded-full mb-3 ${p.accent}`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="font-display font-bold text-ink text-base mb-2">
                    {p.title}
                  </h3>
                  <p className="text-ink-3 text-sm mb-4 leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs text-ink-2"
                      >
                        <span className="text-accent mt-0.5 flex-shrink-0">
                          →
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
