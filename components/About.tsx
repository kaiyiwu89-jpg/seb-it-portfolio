import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { BadgeCheck } from "lucide-react";

const techs = [
  "Windows Server",
  "Active Directory",
  "Cisco / Ubiquiti",
  "pfSense",
  "Microsoft 365",
  "Google Workspace",
  "macOS",
  "Remote Desktop",
];

const certs = ["CompTIA A+", "Microsoft 365", "Google Workspace"];

export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-12 bg-card">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <FadeIn direction="left">
          <div className="relative">
            <div
              className="w-full rounded-xl2 overflow-hidden shadow-card-lg flex items-center justify-center text-8xl"
              style={{
                aspectRatio: "4/5",
                maxHeight: 520,
                background: "linear-gradient(145deg, #eef2ff, #dde4ff)",
              }}
            >
              👨‍💻
            </div>
            {/* Stat card */}
            <div className="absolute -bottom-6 -right-4 bg-card border border-border rounded-2xl p-5 shadow-card-lg">
              <p className="font-display font-extrabold text-3xl text-accent leading-none">
                5+
              </p>
              <p className="text-xs text-ink-3 mt-1">Years of experience</p>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.15}>
          <SectionLabel>About</SectionLabel>
          <h2
            className="font-display font-extrabold text-ink leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Practical IT,
            <br />
            no fluff.
          </h2>
          <p className="text-ink-2 text-base leading-relaxed mb-4 font-light">
            I&apos;m an IT technician with over 5 years of experience supporting
            small businesses, restaurants, and offices across Montreal. I focus
            on delivering solutions that actually work for your team — not
            textbook fixes that create more confusion.
          </p>
          <p className="text-ink-2 text-base leading-relaxed font-light">
            My approach is straightforward: understand your business first, then
            build the right technology around it. Whether it&apos;s a single
            laptop issue or a full office network rollout, every client gets the
            same care and attention.
          </p>

          {/* Certs */}
          <div className="flex flex-wrap gap-2.5 mt-7">
            {certs.map((c) => (
              <span
                key={c}
                className="flex items-center gap-2 bg-accent-soft border border-accent/20 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full"
              >
                <BadgeCheck size={14} strokeWidth={1.5} />
                {c}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {techs.map((t) => (
              <span
                key={t}
                className="bg-surface border border-border text-ink-2 text-xs font-medium px-3 py-1.5 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
