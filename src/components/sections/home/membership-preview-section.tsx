import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Individuellt",
    price: "100 SEK",
    period: "/månad",
    features: ["Fullständigt medlemskap", "Tillgång till alla aktiviteter", "Ingen bindningstid"],
  },
  {
    name: "Familj",
    price: "150 SEK",
    period: "/månad",
    featured: true,
    features: [
      "Gäller personer i samma hushåll",
      "Alla familjemedlemmar inkluderade",
      "Avsluta när som helst",
    ],
  },
];

export function MembershipPreviewSection() {
  return (
    <Section id="membership">
      <SectionHeader
        eyebrow="Bli medlem"
        title="Hjälp oss skapa en tryggare framtid"
        description="Genom att bli medlem stödjer du SAMENs arbete för unga människor i utsatta områden. Medlemskapet är frivilligt — ingen bindningstid."
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.1}>
            <div
              className={`relative h-full rounded-3xl border p-8 sm:p-10 ${
                tier.featured
                  ? "border-gold/50 bg-forest text-primary-foreground shadow-glow"
                  : "border-border/60 bg-card shadow-soft"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-forest">
                  Populärast
                </span>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {tier.period}
                </span>
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`size-4 shrink-0 ${tier.featured ? "text-gold" : "text-forest"}`} />
                    <span className={tier.featured ? "text-primary-foreground/85" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2}>
        <div className="mt-10 text-center">
          <Button
            render={<Link href="/become-member" />}
            size="lg"
            className="h-12 rounded-full bg-forest px-8"
            nativeButton={false}
          >
            Bli medlem nu
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
