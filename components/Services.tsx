import { Mail, Wifi, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const services = [
  {
    icon: <Mail size={22} className="text-accent" />,
    title: "Email Setup",
    desc: "Get your business running on a professional custom domain email.",
    items: [
      "Microsoft 365 & Google Workspace",
      "Domain & DNS configuration",
      "Email migration & transition",
      "Spam filtering & security",
    ],
  },
  {
    icon: <Wifi size={22} className="text-accent" />,
    title: "Network Setup",
    desc: "Reliable, fast, and secure connectivity for your office or shop.",
    items: [
      "Router & switch configuration",
      "WiFi optimization & coverage",
      "Firewall & security setup",
      "VPN for remote access",
    ],
  },
  {
    icon: <Wrench size={22} className="text-accent" />,
    title: "IT Support",
    desc: "Fast help when things break, and ongoing support to keep them running.",
    items: [
      "Computer & device troubleshooting",
      "Printer & peripheral support",
      "Backup & recovery setup",
      "Security monitoring",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-8 md:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Services</SectionLabel>
          <h2
            className="font-display font-extrabold text-ink leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Everything your
            <br />
            business IT needs.
          </h2>
          <p className="text-ink-3 text-base mt-3 max-w-md font-light leading-relaxed">
            Practical solutions for email, networking, and ongoing support —
            without the enterprise complexity.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group bg-surface border border-border rounded-xl2 p-8 h-full hover:-translate-y-1.5 hover:border-accent hover:shadow-card-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent-soft rounded-2xl flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-ink-3 text-sm mb-5 leading-relaxed">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-ink-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
