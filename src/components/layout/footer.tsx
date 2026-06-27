import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

const sections = [
  { title: "Om SAMEN", links: footerNav.about },
  { title: "Engagera dig", links: footerNav.participate },
  { title: "Kontakt", links: footerNav.connect },
  { title: "Juridiskt", links: footerNav.legal },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gold text-sm font-bold text-forest">
                S
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              {siteConfig.tagline}. Vi investerar i unga människor, gemenskap och en tryggare framtid.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="Instagram"
              >
                <Share2 className="size-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="LinkedIn"
              >
                <Globe className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-10 bg-primary-foreground/15" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Alla rättigheter förbehållna.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-foreground">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
