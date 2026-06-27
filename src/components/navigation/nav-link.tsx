"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const path = href.split("#")[0] || "/";
  const isActive = path === "/" ? pathname === "/" : pathname === path;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative py-2 text-sm font-medium transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-gold"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
