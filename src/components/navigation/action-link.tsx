"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, type AnchorHTMLAttributes, type MouseEvent } from "react";

function isExternalHref(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

function scrollToHash(href: string, pathname: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return false;

  const path = href.slice(0, hashIndex) || pathname;
  const hash = href.slice(hashIndex + 1);
  if (!hash || path !== pathname) return false;

  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `${pathname}#${hash}`);
  return true;
}

type ActionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export const ActionLink = forwardRef<HTMLAnchorElement, ActionLinkProps>(function ActionLink(
  { href, onClick, target, rel, ...props },
  ref
) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (scrollToHash(href, pathname)) {
      event.preventDefault();
    }
  };

  if (isExternalHref(href)) {
    const isHttp = href.startsWith("http://") || href.startsWith("https://");
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        target={target ?? (isHttp ? "_blank" : undefined)}
        rel={rel ?? (isHttp ? "noopener noreferrer" : undefined)}
        {...props}
      />
    );
  }

  return <Link ref={ref} href={href} onClick={handleClick} {...props} />;
});

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  return null;
}
