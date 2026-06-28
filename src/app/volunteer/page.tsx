import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Ta en roll",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagemang"
        title="Vill du göra skillnad?"
        description="Alla är välkomna att ansöka om en roll. Det spelar ingen roll om du har tidigare erfarenhet eller inte."
        image={muharramImages.community}
        imageAlt="Gemenskap och engagemang under Muharram"
        objectPosition="center center"
      />
      <Section className="py-12">
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
            Hjälp till före, under eller efter Muharram. Vi behöver engagerade personer inom
            organisation, teknik, välkomnande, kommunikation och mycket mer. Varje insats räknas.
          </p>
        </FadeIn>
      </Section>
      <FormSection
        title="Ansök om en roll"
        description="Berätta om dig själv och hur du vill bidra. Vi hör av oss inom kort."
        formId={tallyForms.volunteer.id}
        formTitle={tallyForms.volunteer.title}
      />
    </>
  );
}
