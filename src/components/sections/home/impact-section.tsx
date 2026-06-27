import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";

const stats = [
  { value: 850, label: "Unga nådda", suffix: "+" },
  { value: 2400, label: "Volontärtimmar", suffix: "+" },
  { value: 48, label: "Gemenskapsevenemang", suffix: "+" },
  { value: 120, label: "Familjer stöttade", suffix: "+" },
];

export function ImpactSection() {
  return (
    <Section className="bg-forest text-primary-foreground">
      <SectionHeader
        eyebrow="Vår påverkan"
        title="Siffror som berättar en historia"
        description="Varje siffra representerar ett liv, en möjlighet och ett steg mot en tryggare framtid."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08}>
            <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center backdrop-blur-sm">
              <p className="text-4xl font-semibold text-gold sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-primary-foreground/75">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
