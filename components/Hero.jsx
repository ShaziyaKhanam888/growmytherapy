export default function Hero() {
  return (
    <section className="bg-[var(--color-brand-bg)] py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
        {/* Left Image Column */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="w-full h-auto md:h-[500px] overflow-hidden rounded-lg shadow-md border border-slate-200">
            <img
              src="/images/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD"
              className="w-full h-auto md:h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Content Column */}
        <div className="md:col-span-7 order-1 md:order-2 space-y-6">
          <p className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold">
            Online & In-Person Counseling in Santa Monica, CA
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-[var(--color-brand-primary)] leading-tight">
            Anxiety & Trauma Therapy in{" "}
            <span className="text-[var(--color-brand-accent)] italic">
              Santa Monica, CA
            </span>
          </h1>
          <p className="text-[var(--color-brand-secondary)] text-base md:text-lg leading-relaxed">
            If you are feeling high-functioning on the outside but internally
            exhausted by anxiety, burnout, or past trauma, you don't have to
            carry it alone. I combine CBT, EMDR, and mindfulness to help you
            move past overthinking and feel grounded again.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-block bg-[var(--color-brand-accent)] text-white px-6 py-3 rounded-md text-xs uppercase tracking-widest font-semibold hover:opacity-90 shadow-md transition"
            >
              Book an Appointment →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
