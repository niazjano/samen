export type NavItem = { title: string; href: string };

export const mainNav: NavItem[] = [
  { title: "Hem", href: "/" },
  { title: "Om oss", href: "/about" },
  { title: "Vårt uppdrag", href: "/mission" },
  { title: "Bli medlem", href: "/become-member" },
  { title: "Engagera dig", href: "/volunteer" },
  { title: "Stöd oss", href: "/support" },
  { title: "Kontakt", href: "/contact" },
];

export const secondaryNav: NavItem[] = [
  { title: "Feedback", href: "/feedback" },
  { title: "Frågor", href: "/questions" },
  { title: "Transparens", href: "/transparency" },
];

export const footerNav = {
  about: [
    { title: "Om oss", href: "/about" },
    { title: "Vårt uppdrag", href: "/mission" },
    { title: "Transparens", href: "/transparency" },
  ],
  participate: [
    { title: "Bli medlem", href: "/become-member" },
    { title: "Engagera dig", href: "/volunteer" },
    { title: "Stöd oss", href: "/support" },
  ],
  connect: [
    { title: "Kontakt", href: "/contact" },
    { title: "Feedback", href: "/feedback" },
    { title: "Frågor", href: "/questions" },
  ],
  legal: [
    { title: "Integritetspolicy", href: "/privacy-policy" },
    { title: "Medlemsavtal", href: "/membership-agreement" },
    { title: "Villkor", href: "/terms" },
    { title: "Tillgänglighet", href: "/accessibility" },
  ],
} as const;
