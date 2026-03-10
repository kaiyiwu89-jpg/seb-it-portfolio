export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
