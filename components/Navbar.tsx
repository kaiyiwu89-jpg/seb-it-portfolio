"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-display font-bold text-lg tracking-tight text-ink"
      >
        Seb<span className="text-accent">.</span>it
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium text-ink-2 hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="bg-ink text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
      >
        Book a Consultation
      </a>
    </motion.nav>
  );
}
