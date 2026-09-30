export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-brand-primary)] text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center border-b border-slate-700 pb-12">
        <div>
          <h2 className="font-serif text-3xl">Dr. Maya Reynolds, PsyD</h2>
          <p className="text-sm text-slate-300 mt-2">
            Licensed Clinical Psychologist | Santa Monica, CA & Telehealth
          </p>
        </div>
        <div className="md:text-right">
          <a
            href="mailto:contact@drmayareynolds.com"
            className="inline-block bg-[var(--color-brand-accent)] text-white px-6 py-3 rounded-md text-xs uppercase tracking-widest font-semibold hover:opacity-90 shadow-md transition"
          >
            Schedule a Free 15-Min Consult
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 text-xs text-slate-400 text-center">
        © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
      </div>
    </footer>
  );
}
