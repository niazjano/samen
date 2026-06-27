import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "WhatsApp",
};

export default function WhatsAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Kommunikation"
        title="WhatsApp-gruppen"
        description="För att hålla kommunikationen organiserad använder Masjid Hayat en officiell WhatsApp-grupp."
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Ansök om tillgång genom formuläret nedan. I gruppen delas viktig information och
          uppdateringar inför och under Muharram.
        </p>
      </Section>
      <FormSection
        title="Ansök om tillgång"
        description="Fyll i formuläret så behandlar vi din ansökan så snart som möjligt."
        formId={tallyForms.whatsapp.id}
        formTitle={tallyForms.whatsapp.title}
      />
    </>
  );
}
