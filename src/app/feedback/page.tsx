import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Lämna synpunkt",
};

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Vi lyssnar på dig"
        description="Vi uppskattar alla idéer och förbättringsförslag. Alla synpunkter läses och behandlas."
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Har du en idé som kan förbättra vår verksamhet inför eller under Muharram? Dela den med
          oss — din röst hjälper Masjid Hayat att bli bättre.
        </p>
      </Section>
      <FormSection
        title="Lämna din synpunkt"
        formId={tallyForms.feedback.id}
        formTitle={tallyForms.feedback.title}
      />
    </>
  );
}
