import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
};

const contacts = [
  { icon: Mail, label: "E-post", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Telefon", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Adress", value: siteConfig.address, href: "https://maps.google.com/?q=N%C3%A4sby,+Tumba" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Hör av dig till oss"
        description="Vi svarar gärna på frågor om medlemskap, volontärskap, partnerskap och allt annat."
        image={muharramImages.contact}
        imageAlt="Muharram — Masjid Hayat"
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              >
                <c.icon className="size-6 text-forest transition-colors group-hover:text-gold" />
                <p className="mt-4 text-sm font-medium text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-semibold">{c.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/40">
        <SectionHeader title="Hitta hit" description="Besök oss i Näsby, Tumba." />
        <FadeIn>
          <div className="flex aspect-[21/9] items-center justify-center rounded-3xl border border-dashed border-border/60 bg-card shadow-soft">
            <div className="text-center">
              <MapPin className="mx-auto size-10 text-muted-foreground/40" />
              <p className="mt-4 font-medium text-muted-foreground">Google Maps — kommer snart</p>
              <p className="mt-1 text-sm text-muted-foreground">{siteConfig.address}</p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
