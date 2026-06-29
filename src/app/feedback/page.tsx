import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Lämna din synpunkt",
};

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Vi lyssnar på dig"
        description="Vi uppskattar alla idéer och förbättringsförslag. Alla synpunkter läses och behandlas."
        image={muharramImages.feedback}
        imageAlt="Muharram — Masjid Hayat"
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Har du en idé, ett förbättringsförslag eller något du vill dela med oss? Vi uppskattar alla
          synpunkter som hjälper oss att utveckla Masjid Hayat och skapa en ännu bättre verksamhet.
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
