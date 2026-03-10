export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <a
        href="#"
        className="font-display font-bold text-ink text-base tracking-tight"
      >
        Seb<span className="text-accent">.</span>it
      </a>
      <p className="text-xs text-ink-3">
        © 2026 Seb IT Services · Montreal, QC
      </p>
      <p className="text-xs text-ink-3">Network · Email · Security · Support</p>
    </footer>
  );
}
