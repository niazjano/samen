import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { FormSection } from "@/components/forms/form-section";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/sections/section";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Bli medlem",
};

const tiers = [
  {
    name: "Individuellt",
    price: "100 SEK/månad",
    features: ["Fullständigt medlemskap", "Tillgång till alla aktiviteter", "Ingen bindningstid", "Avsluta när som helst"],
  },
  {
    name: "Familj",
    price: "150 SEK/månad",
    features: ["Gäller personer i samma hushåll", "Alla familjemedlemmar inkluderade", "Ingen bindningstid", "Avsluta när som helst"],
  },
];

export default function BecomeMemberPage() {
  return (
    <>
      <PageHero
        eyebrow="Medlemskap"
        title="Bli en del av förändringen"
        description="Genom att bli medlem hjälper du oss skapa en tryggare framtid för unga människor. Medlemskapet är frivilligt."
      />
      <Section>
        <SectionHeader
          title="Medlemskap"
          description="Välj det alternativ som passar dig och din familj."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.08}>
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-2xl font-bold text-forest">{tier.price}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="size-4 shrink-0 text-forest" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Familjemedlemskap gäller personer som bor i samma hushåll. Läs vårt{" "}
          <Link href="/membership-agreement" className="font-medium text-forest underline-offset-4 hover:underline">
            medlemsavtal
          </Link>
          .
        </p>
      </Section>
      <FormSection
        title="Registrera ditt medlemskap"
        description="Fyll i formuläret nedan för att bli medlem i SAMEN."
        formId={tallyForms.becomeMember.id}
        formTitle={tallyForms.becomeMember.title}
      />
    </>
  );
}
