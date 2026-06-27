import Link from "next/link";
import { Share2 } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-semibold">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gold text-sm font-bold text-forest">
                MH
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              {siteConfig.tagline}. Din digitala ingång till medlemskap, engagemang och stöd.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              aria-label="Sociala medier"
            >
              <Share2 className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold">Tjänster</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((link) => (
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
          <div>
            <h3 className="text-sm font-semibold text-gold">Om oss</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.about.map((link) => (
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
          <div>
            <h3 className="text-sm font-semibold text-gold">Juridiskt</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.legal.map((link) => (
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
        </div>
        <Separator className="my-10 bg-primary-foreground/15" />
        <p className="text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {siteConfig.name}. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
