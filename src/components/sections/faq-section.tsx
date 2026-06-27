import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";

const faqs = [
  {
    q: "Hur mycket kostar medlemskap?",
    a: "Individuellt medlemskap kostar 100 SEK/månad. Familjemedlemskap kostar 150 SEK/månad och gäller personer i samma hushåll.",
  },
  {
    q: "Finns det bindningstid?",
    a: "Nej. Medlemskapet är frivilligt och du kan avsluta när som helst.",
  },
  {
    q: "Hur blir jag volontär?",
    a: "Fyll i ansökningsformuläret på sidan Engagera dig. Vi kontaktar dig inom några dagar.",
  },
  {
    q: "Var verkar SAMEN?",
    a: "Vi är baserade i Näsby, Tumba, och arbetar i utsatta områden i regionen.",
  },
  {
    q: "Hur kan jag stötta ekonomiskt?",
    a: "Du kan swisha valfritt belopp till 123 186 51 46 eller bli medlem.",
  },
  {
    q: "Hur hanterar ni mina personuppgifter?",
    a: "Vi följer GDPR. Läs mer i vår integritetspolicy.",
  },
];

export function FaqSection() {
  return (
    <Section className="bg-muted/40">
      <SectionHeader title="Vanliga frågor" description="Snabba svar på det vi oftast får frågor om." />
      <div className="mx-auto grid max-w-3xl gap-4">
        {faqs.map((faq, i) => (
          <FadeIn key={faq.q} delay={i * 0.04}>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
