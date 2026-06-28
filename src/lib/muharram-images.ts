import { assetPath } from "@/lib/asset-path";

const dir = "/images/muharram";

/** Central registry of Muharram imagery — only user-provided assets. */
export const muharramImages = {
  /** Homepage hero — strongest, most impactful */
  hero: `${dir}/IMG_8532.png`,
  /** About page hero — shrine & alam */
  aboutHero: `${dir}/IMG_8544.png`,
  /** About section — calligraphy & symbolic imagery */
  aboutSection: `${dir}/IMG_8531.png`,
  /** Donations / support */
  support: `${dir}/IMG_8529.png`,
  /** Community & volunteer engagement */
  community: `${dir}/IMG_8542.png`,
  /** Events & majlis gatherings */
  events: `${dir}/IMG_8534.png`,
  /** Membership */
  member: `${dir}/IMG_8540.png`,
  feedback: `${dir}/IMG_8525.png`,
  questions: `${dir}/IMG_8526.png`,
  whatsapp: `${dir}/IMG_8521.png`,
  /** Default for secondary page heroes */
  defaultHero: `${dir}/IMG_8541.png`,
  contact: `${dir}/IMG_8537.png`,
  mission: `${dir}/IMG_8519.png`,
  transparency: `${dir}/IMG_8522.png`,
} as const;

export const galleryImages = [
  "IMG_8517.png",
  "IMG_8518.png",
  "IMG_8519.png",
  "IMG_8520.png",
  "IMG_8521.png",
  "IMG_8522.png",
  "IMG_8523.png",
  "IMG_8524.png",
  "IMG_8525.png",
  "IMG_8526.png",
  "IMG_8528.png",
  "IMG_8529.png",
  "IMG_8530.png",
  "IMG_8531.png",
  "IMG_8532.png",
  "IMG_8534.png",
  "IMG_8535.png",
  "IMG_8536.png",
  "IMG_8537.png",
  "IMG_8540.png",
  "IMG_8541.png",
  "IMG_8542.png",
  "IMG_8543.png",
  "IMG_8544.png",
] as const;

export function imageSrc(path: string) {
  return assetPath(path);
}

export function muharramSrc(filename: (typeof galleryImages)[number]) {
  return imageSrc(`${dir}/${filename}`);
}
