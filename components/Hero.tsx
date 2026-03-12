"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  BarChart3,
  ArrowRight,
  Globe,
  Mail,
  ShieldCheck,
} from "lucide-react";

import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-8 md:px-12 overflow-hidden bg-surface"
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left ── */}
          <div>
            {/* Availability badge — like the studio tab in the reference */}
            <motion.div {...fadeUp(0)} className="mb-7">
              <div className="inline-flex items-center gap-2.5 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-card text-sm font-medium text-ink-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                Available for new clients — Montreal
              </div>{" "}
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-extrabold text-ink leading-[1.05] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.2rem)" }}
            >
              Hey! I&apos;m Seb,
              <br />
              <span className="text-ink-3 font-semibold">IT Support</span>
              <br />
              Specialist.
            </motion.h1>

            <motion.p
              {...fadeUp(0.18)}
              className="mt-6 text-ink-2 text-lg leading-relaxed max-w-md font-body font-light"
            >
              Helping small businesses, restaurants, and offices in Montreal run
              smoothly with reliable IT — no jargon, no surprises.
            </motion.p>

            {/* Pills */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-wrap gap-2 mt-6 mb-8"
            >
              {[
                {
                  icon: <Globe size={13} strokeWidth={1.5} />,
                  label: "Network Setup",
                },
                {
                  icon: <Mail size={13} strokeWidth={1.5} />,
                  label: "Microsoft 365",
                },
                {
                  icon: <ShieldCheck size={13} strokeWidth={1.5} />,
                  label: "Security",
                },
                {
                  icon: <MapPin size={13} strokeWidth={1.5} />,
                  label: "Montreal",
                },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="flex items-center gap-1.5 bg-accent-soft text-accent text-xs font-medium px-3.5 py-1.5 rounded-full"
                >
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-0.5 shadow-card-lg"
              >
                Book a Consultation
                <ArrowRight size={14} />
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-ink-2 hover:text-accent transition-colors"
              >
                View Services →
              </a>
            </motion.div>

            {/* "In the game since" — like reference */}
            <motion.p
              {...fadeUp(0.36)}
              className="mt-10 text-xs text-ink-3 font-medium tracking-wide"
            >
              In the game since 2019
            </motion.p>
          </div>

          {/* ── Right — photo card + floating widgets ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Photo card */}
            <div className="relative w-full max-w-sm">
              <div className="bg-card border border-border rounded-xl2 overflow-hidden shadow-card-lg">
                {/* Photo placeholder */}
                <div
                  className="relative w-full"
                  style={{
                    aspectRatio: "3/4",
                    maxHeight: 420,
                  }}
                >
                  <Image
                    src="/profile.png"
                    alt="IT Support Specialist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Card footer */}
                <div className="flex items-center justify-between px-5 py-4 border-t border-border">
                  <div>
                    <p className="font-display font-bold text-sm text-ink">
                      Seb
                    </p>
                    <p className="text-xs text-ink-3">IT Support Specialist</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink-3 font-medium">
                    <MapPin size={11} />
                    Montreal, QC
                  </div>
                </div>
              </div>

              {/* Float card 1 — top right */}
              <div className="bob absolute -top-4 -right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card-lg flex items-center gap-3 text-sm">
                <CheckCircle2
                  size={20}
                  className="text-emerald-500 flex-shrink-0"
                />
                <div>
                  <p className="text-xs text-ink-3 leading-none mb-0.5">
                    Last project
                  </p>
                  <p className="font-semibold text-ink text-xs">
                    Office network setup
                  </p>
                </div>
              </div>

              {/* Float card 2 — bottom left */}
              <div className="bob-slow absolute -bottom-6 -left-8 bg-card border border-border rounded-2xl px-4 py-3.5 shadow-card-lg">
                <div className="flex items-center gap-1.5 mb-1">
                  <BarChart3 size={14} className="text-accent" />
                  <span className="text-xs text-ink-3">Businesses helped</span>
                </div>
                <p className="font-display font-extrabold text-2xl text-accent leading-none">
                  50+
                </p>
              </div>

              {/* Co-founder style label — like reference */}
              <div className="absolute bottom-16 -right-10 hidden lg:flex items-center gap-1.5 text-xs text-ink-3 font-medium rotate-90 origin-left">
                <span className="w-4 h-px bg-border inline-block" />
                IT Specialist
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
