import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = { title: "Medlemsavtal" };

const sections = [
  { title: "Frivilligt medlemskap", body: "Medlemskap i Masjid Hayat är helt frivilligt. Du väljer själv om och när du vill gå med." },
  { title: "Avgifter", body: "Individuellt medlemskap: 100 SEK/månad. Familjemedlemskap: 150 SEK/månad (gäller personer i samma hushåll)." },
  { title: "Ingen bindningstid", body: "Det finns ingen bindningstid. Du kan avsluta ditt medlemskap när som helst." },
  { title: "GDPR", body: "Vi behandlar dina personuppgifter i enlighet med GDPR och gällande svensk lagstiftning. Se vår integritetspolicy." },
  { title: "Respekt", body: "Alla medlemmar förväntas behandla varandra och organisationen med respekt." },
  { title: "Uppsägning av medlemskap", body: "Föreningen kan säga upp medlemskap som allvarligt skadar organisationen eller bryter mot våra värderingar." },
];

export default function MembershipAgreementPage() {
  return (
    <>
      <PageHero eyebrow="Juridiskt" title="Medlemsavtal" description="Villkor för medlemskap i Masjid Hayat." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <article className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
