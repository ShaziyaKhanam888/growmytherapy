export default function Office() {
  return (
    <section
      id="office"
      className="bg-white py-16 px-6 border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold">
            A Calm Space for Healing
          </p>
          <h2 className="font-serif text-3xl text-[var(--color-brand-primary)]">
            Our Santa Monica{" "}
            <span className="text-[var(--color-brand-accent)] italic">
              Office
            </span>
          </h2>
          <p className="text-sm text-[var(--color-brand-secondary)] max-w-2xl mx-auto leading-relaxed">
            Located at 123th Street 45 W, Santa Monica, CA, our office is a
            quiet, private space designed with natural light to help you feel
            comfortable and grounded during sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 sm:h-80 overflow-hidden rounded-lg shadow-sm border border-slate-200">
            <img
              src="/images/office1.jpeg"
              alt="Therapy Office Space in Santa Monica"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="h-64 sm:h-80 overflow-hidden rounded-lg shadow-sm border border-slate-200">
            <img
              src="/images/office2.jpeg"
              alt="Santa Monica Counseling Room"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
