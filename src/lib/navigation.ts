export type NavItem = { title: string; href: string };

export const mainNav: NavItem[] = [
  { title: "Hem", href: "/" },
  { title: "Bli medlem", href: "/member" },
  { title: "Ta en roll", href: "/volunteer" },
  { title: "Lämna synpunkt", href: "/feedback" },
  { title: "Frågor", href: "/questions" },
  { title: "WhatsApp", href: "/whatsapp" },
  { title: "Stöd Masjid Hayat", href: "/support" },
  { title: "Om oss", href: "/about" },
];

export const footerNav = {
  services: [
    { title: "Bli medlem", href: "/member" },
    { title: "Ta en roll", href: "/volunteer" },
    { title: "Lämna synpunkt", href: "/feedback" },
    { title: "Frågor", href: "/questions" },
    { title: "WhatsApp", href: "/whatsapp" },
    { title: "Stöd Masjid Hayat", href: "/support" },
  ],
  about: [{ title: "Om oss", href: "/about" }],
  legal: [
    { title: "Integritetspolicy", href: "/privacy-policy" },
    { title: "Medlemsavtal", href: "/membership-agreement" },
    { title: "Villkor", href: "/terms" },
    { title: "Tillgänglighet", href: "/accessibility" },
  ],
} as const;
