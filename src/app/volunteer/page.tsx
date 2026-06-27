import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Engagera dig",
};

const roles = [
  "Mentor för unga",
  "Läxhjälp och studiestöd",
  "Evenemangsorganisatör",
  "Sport- och fritidsledare",
  "Administration och kommunikation",
  "Fundraising och partnerskap",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volontär"
        title="Vill du göra skillnad?"
        description="Våra volontärer är hjärtat i SAMEN. Du behöver inte vara expert — bara villig att engagera dig."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
      />
      <Section>
        <FadeIn>
          <h2 className="text-2xl font-semibold">Möjligheter att engagera dig</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Oavsett om du har några timmar i månaden eller mer — vi har en plats för dig. Vi erbjuder
            introduktion, stöd och en meningsfull gemenskap.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {roles.map((role) => (
              <li
                key={role}
                className="rounded-2xl border border-border/60 bg-card px-5 py-4 text-sm font-medium shadow-soft"
              >
                {role}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>
      <FormSection
        title="Ansök om en roll"
        description="Berätta om dig själv och hur du vill bidra. Vi hör av oss inom några dagar."
        formId={tallyForms.volunteer.id}
        formTitle={tallyForms.volunteer.title}
      />
    </>
  );
}
