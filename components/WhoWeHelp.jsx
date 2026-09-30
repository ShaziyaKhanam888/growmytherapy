import { BrainIcon, HeartSparkIcon, BalanceIcon } from "./Icons";

export default function WhoWeHelp() {
  const services = [
    {
      icon: <BrainIcon />,
      title: "Anxiety & Burnout Therapy in Santa Monica",
      desc: "Break free from constant overthinking, perfectionism, and body tension. Restore peace of mind and sustainable energy.",
    },
    {
      icon: <HeartSparkIcon />,
      title: "Trauma & EMDR Therapy in Santa Monica",
      desc: "Heal from past experiences in a safe, structured space using evidence-based EMDR and body-centered regulation.",
    },
    {
      icon: <BalanceIcon />,
      title: "Therapy for High-Achievers & Perfectionism",
      desc: "Dismantle constant internal pressure and cultivate self-compassion while maintaining your goals and values.",
    },
  ];

  return (
    <section id="services" className="bg-[var(--color-brand-bg)] py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[var(--color-brand-primary)]">
            Specialized Areas of{" "}
            <span className="text-[var(--color-brand-accent)]">Care</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl text-[var(--color-brand-primary)] mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-brand-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
