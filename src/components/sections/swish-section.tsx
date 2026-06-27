"use client";

import { Check, Copy, QrCode, Smartphone } from "lucide-react";
import { useState } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function SwishSection() {
  const formatted = siteConfig.swishNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(siteConfig.swishNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section id="swish" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest p-1">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.1_85/0.2),transparent_50%)]" />
        <div className="relative rounded-[calc(2rem-4px)] bg-forest p-8 sm:p-12 lg:p-16">
          <SectionHeader
            eyebrow="Swish"
            title="Stöd vårt arbete"
            description="Varje bidrag hjälper oss att skapa en tryggare framtid för våra ungdomar."
            className="mb-12 [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75 [&_span]:text-gold"
          />
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm">
                <Smartphone className="size-8 text-gold" />
                <h3 className="mt-6 text-2xl font-semibold text-primary-foreground">Betala med Swish</h3>
                <p className="mt-3 leading-relaxed text-primary-foreground/75">
                  Öppna Swish-appen, välj Skicka och ange numret nedan. Valfritt belopp — varje krona räknas.
                </p>
                <div className="mt-8 rounded-2xl bg-primary-foreground/10 p-6">
                  <p className="text-sm font-medium text-primary-foreground/60">Swish-nummer</p>
                  <p className="mt-2 font-mono text-3xl font-bold tracking-wider text-gold sm:text-4xl">
                    {formatted}
                  </p>
                  <Button
                    onClick={copy}
                    variant="outline"
                    className="mt-4 rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                    {copied ? "Kopierat!" : "Kopiera nummer"}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-primary-foreground/20 bg-primary-foreground/5 p-10">
                <div className="flex size-52 items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5">
                  <QrCode className="size-32 text-primary-foreground/25" strokeWidth={1} />
                </div>
                <p className="mt-6 text-center text-sm font-medium text-primary-foreground/60">
                  QR-kod kommer snart
                </p>
                <p className="mt-1 text-center text-xs text-primary-foreground/40">
                  Skanna med Swish-appen
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
