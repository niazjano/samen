import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/about",
  "/mission",
  "/become-member",
  "/volunteer",
  "/feedback",
  "/questions",
  "/support",
  "/transparency",
  "/contact",
  "/membership-agreement",
  "/privacy-policy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
