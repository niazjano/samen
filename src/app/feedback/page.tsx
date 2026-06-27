import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Feedback",
};

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Vi lyssnar på dig"
        description="Varje förslag, synpunkt och idé hjälper oss att bli bättre. Din röst formar SAMENs framtid."
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Vi tar all feedback på allvar. Efter att du skickat in ditt formulär går det till vårt team
          som går igenom och återkopplar vid behov. Tack för att du hjälper oss växa.
        </p>
      </Section>
      <FormSection
        title="Dela din feedback"
        formId={tallyForms.feedback.id}
        formTitle={tallyForms.feedback.title}
      />
    </>
  );
}
