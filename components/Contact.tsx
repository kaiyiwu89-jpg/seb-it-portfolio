"use client";
import { useState } from "react";
import { Mail, Phone, CalendarDays } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const methods = [
  {
    icon: <Mail size={20} className="text-accent" />,
    label: "Email",
    value: "sebastienxqx@gmail.com",
    href: "sebastienxqx@gmail.com",
  },
  {
    icon: <Phone size={20} className="text-accent" />,
    label: "Phone",
    value: "+1 (438) 928-3609",
    href: "tel:+143892836009",
  },
  {
    icon: <CalendarDays size={20} className="text-accent" />,
    label: "Book a time",
    value: "Schedule via Calendly",
    href: "#",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 px-8 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <FadeIn direction="left">
          <SectionLabel>Contact</SectionLabel>
          <h2
            className="font-display font-extrabold text-ink leading-[1.1] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s talk about
            <br />
            your IT needs.
          </h2>
          <p className="text-ink-3 text-base font-light mb-10 leading-relaxed">
            Ready to get started? Reach out and I&apos;ll get back to you within
            one business day.
          </p>

          <div className="space-y-3">
            {methods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-accent hover:translate-x-1.5 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  {m.icon}
                </div>
                <div>
                  <p className="text-xs text-ink-3">{m.label}</p>
                  <p className="font-semibold text-ink text-sm group-hover:text-accent transition-colors">
                    {m.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.15}>
          <div className="bg-card border border-border rounded-xl2 p-8 shadow-card">
            <h3 className="font-display font-bold text-ink text-xl mb-6">
              Send a message
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body placeholder:text-ink-3"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="jane@yourbusiness.com"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body placeholder:text-ink-3"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  What do you need help with?
                </label>
                <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body">
                  <option value="">Select a service…</option>
                  <option>Email Setup (Microsoft 365 / Google)</option>
                  <option>Network / WiFi Setup</option>
                  <option>Computer Troubleshooting</option>
                  <option>IT Security</option>
                  <option>Ongoing IT Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your IT challenge or what you'd like to set up…"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-body resize-none placeholder:text-ink-3"
                />
              </div>
              <button
                onClick={() => setSubmitted(true)}
                className={`w-full font-semibold text-sm py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                  submitted
                    ? "bg-emerald-500 text-white"
                    : "bg-ink text-white hover:bg-accent"
                }`}
              >
                {submitted ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
