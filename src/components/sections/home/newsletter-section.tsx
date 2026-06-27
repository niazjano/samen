"use client";

import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <Section>
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-14 text-center sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.1_85/0.15),transparent_50%)]" />
          <div className="relative">
            <SectionHeader
              eyebrow="Nyhetsbrev"
              title="Håll dig uppdaterad"
              description="Få nyheter om våra program, evenemang och hur du kan engagera dig."
              className="mb-8 [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75 [&_span]:text-gold"
            />
            <p className="mx-auto max-w-md text-sm text-primary-foreground/60">
              Nyhetsbrev kommer snart. Under tiden — följ oss på sociala medier eller bli medlem.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                render={<Link href="/become-member" />}
                className="rounded-full bg-gold text-forest hover:bg-gold-light"
                nativeButton={false}
              >
                Bli medlem
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                nativeButton={false}
              >
                Kontakta oss
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
