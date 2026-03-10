import {
  MessageCircle,
  ScanSearch,
  Settings2,
  HandshakeIcon,
} from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    icon: <MessageCircle size={20} className="text-accent" />,
    title: "Contact",
    desc: "Send a message describing your issue. I'll respond within one business day.",
  },
  {
    num: "02",
    icon: <ScanSearch size={20} className="text-accent" />,
    title: "Diagnose",
    desc: "Remote or on-site evaluation to understand the problem and find the best solution.",
  },
  {
    num: "03",
    icon: <Settings2 size={20} className="text-accent" />,
    title: "Solution",
    desc: "I implement the fix or configuration with clear communication throughout.",
  },
  {
    num: "04",
    icon: <HandshakeIcon size={20} className="text-accent" />,
    title: "Ongoing Support",
    desc: "Stay covered with ongoing help whenever new issues or questions come up.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-8 md:px-12 bg-ink">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/60 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            How It Works
          </div>
          <h2
            className="font-display font-extrabold text-white leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Simple process,
            <br />
            real results.
          </h2>
          <p className="text-white/40 text-base mt-3 max-w-md font-light leading-relaxed">
            No jargon. No surprises. Just clear steps from first contact to
            working solution.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-14 rounded-xl2 overflow-hidden border border-white/10">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div className="bg-white/[0.03] hover:bg-white/[0.1] p-8 h-full transition-colors duration-200 border border-white/[0.06]">
                <p className="font-display font-extrabold text-5xl text-white/[0.5] leading-none mb-5">
                  {step.num}
                </p>
                <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
