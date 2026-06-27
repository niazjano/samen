import { mainNav } from "@/lib/navigation";

import { NavLink } from "./nav-link";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-5 lg:flex" aria-label="Huvudnavigation">
      {mainNav.slice(1).map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
