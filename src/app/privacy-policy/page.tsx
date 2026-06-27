import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Integritetspolicy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Juridiskt" title="Integritetspolicy" description="Hur vi samlar in, använder och skyddar dina uppgifter." />
      <Section>
        <div className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
          <FadeIn>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>SAMEN värnar om din integritet. Denna policy beskriver hur vi hanterar personuppgifter i enlighet med GDPR.</p>
              <section><h2 className="text-xl font-semibold text-foreground">Personuppgiftsansvarig</h2><p className="mt-2">SAMEN, {siteConfig.address}. Kontakt: {siteConfig.email}</p></section>
              <section><h2 className="text-xl font-semibold text-foreground">Vilka uppgifter samlar vi in?</h2><p className="mt-2">Namn, e-post, telefonnummer och medlemsrelaterad information via formulär och medlemsregister.</p></section>
              <section><h2 className="text-xl font-semibold text-foreground">Varför behandlar vi uppgifter?</h2><p className="mt-2">För att administrera medlemskap, kommunicera om aktiviteter och uppfylla rättsliga skyldigheter.</p></section>
              <section><h2 className="text-xl font-semibold text-foreground">Dina rättigheter</h2><p className="mt-2">Du har rätt till tillgång, rättelse, radering och dataportabilitet. Kontakta oss på {siteConfig.email}.</p></section>
              <section><h2 className="text-xl font-semibold text-foreground">Cookies</h2><p className="mt-2">Vi använder nödvändiga cookies och kan använda analysverktyg med ditt samtycke.</p></section>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
