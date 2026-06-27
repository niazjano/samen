import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";

const testimonials = [
  {
    quote:
      "SAMEN gav mig en plats där jag kände mig sedd. Mentorskapsprogrammet förändrade mitt liv.",
    name: "Amina, 17",
    role: "Deltagare i mentorskapsprogrammet",
  },
  {
    quote:
      "Som volontär ser jag varje vecka hur små insatser skapar stora förändringar i ungas liv.",
    name: "Marcus, 34",
    role: "Volontär sedan 2022",
  },
  {
    quote:
      "Vår familj hittade gemenskap och stöd genom SAMEN. Vi är stolta medlemmar.",
    name: "Fatima & Ahmed",
    role: "Familjemedlemmar",
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-muted/40">
      <SectionHeader
        eyebrow="Röster"
        title="Det här säger vårt community"
        description="Berättelser från unga, volontärer och familjer som är en del av SAMEN."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <blockquote className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
              <p className="flex-1 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-border/60 pt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
