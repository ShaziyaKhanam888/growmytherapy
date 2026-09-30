export default function Intro() {
  return (
    <section
      id="about"
      className="bg-white py-16 md:py-24 px-6 border-y border-slate-200"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-serif text-2xl md:text-4xl text-[var(--color-brand-primary)] leading-relaxed italic">
          "You're holding onto hope that life can feel{" "}
          <span className="text-[var(--color-brand-accent)]">
            calmer, grounded, and manageable
          </span>{" "}
          than it is right now."
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left text-sm leading-relaxed text-[var(--color-brand-secondary)]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-accent)]">
              AT DR. MAYA REYNOLDS PRACTICE
            </p>
            <p>
              I work with high-achieving, thoughtful adults who feel externally
              functional but internally overwhelmed by anxiety, panic, or
              chronic pressure.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Sessions are structured enough to feel supportive while leaving
              space for reflection. Through CBT, EMDR, and mindfulness, we
              address both emotional and physiological symptoms so you can
              restore balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
