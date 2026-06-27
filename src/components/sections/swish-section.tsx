"use client";

import Image from "next/image";
import { Copy, Smartphone } from "lucide-react";
import { useCallback, useState } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { siteConfig } from "@/lib/site-config";

export function SwishSection() {
  const formatted = siteConfig.swishNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  const [toastOpen, setToastOpen] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.swishNumber);
      setToastOpen(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = siteConfig.swishNumber;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setToastOpen(true);
    }
  }, []);

  return (
    <>
      <Section id="swish" className="scroll-mt-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest p-1">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.1_85/0.2),transparent_50%)]" />
          <div className="relative rounded-[calc(2rem-4px)] bg-forest p-8 sm:p-12 lg:p-16">
            <SectionHeader
              eyebrow="Swish"
              title="Donera med Swish"
              description="Ditt bidrag hjälper oss att arrangera en välorganiserad Majlis under Muharram."
              className="mb-12 [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75 [&_span]:text-gold"
            />
            <FadeIn>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:p-8">
                  <Smartphone className="size-8 text-gold" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-semibold text-primary-foreground">Betala med Swish</h3>
                  <p className="mt-3 leading-relaxed text-primary-foreground/75">
                    Öppna Swish-appen, välj Skicka och ange numret nedan. Valfritt belopp — varje krona räknas.
                  </p>
                  <div className="mt-8 rounded-2xl bg-primary-foreground/10 p-6">
                    <p className="text-sm font-medium text-primary-foreground/60">Swish-nummer</p>
                    <p className="mt-2 break-all font-mono text-3xl font-bold tracking-wider text-gold sm:text-4xl">
                      {formatted}
                    </p>
                    <Button
                      type="button"
                      onClick={copy}
                      className="mt-4 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 text-primary-foreground hover:bg-primary-foreground/20"
                      aria-label={`Kopiera Swish-nummer ${formatted}`}
                    >
                      <Copy className="size-4" aria-hidden="true" />
                      Kopiera Swish-nummer
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 sm:p-10">
                  <div className="flex w-full max-w-[15rem] items-center justify-center rounded-2xl bg-white p-4 sm:max-w-[17rem]">
                    <Image
                      src="/swish-qr.png"
                      alt="Swish QR-kod för Masjid Hayat — 123 186 51 46"
                      width={496}
                      height={500}
                      className="h-auto w-full rounded-xl object-contain"
                      sizes="(max-width: 768px) 240px, 272px"
                    />
                  </div>
                  <p className="mt-6 text-center text-sm font-medium text-primary-foreground/75">
                    Skanna med Swish-appen
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
      <Toast
        message="Swish-numret har kopierats."
        open={toastOpen}
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
