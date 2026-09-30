export default function Navbar() {
  return (
    <nav className="bg-[var(--color-brand-bg)] border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-xl tracking-wide font-medium text-[var(--color-brand-primary)]"
        >
          DR. MAYA REYNOLDS,{" "}
          <span className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-semibold block sm:inline">
            PsyD
          </span>
        </a>
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-[var(--color-brand-secondary)] font-medium">
          <a
            href="#about"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            Specialties
          </a>
          <a
            href="#office"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            Our Office
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="bg-[var(--color-brand-accent)] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:opacity-90 shadow-sm transition"
        >
          Book Consult
        </a>
      </div>
    </nav>
  );
}
