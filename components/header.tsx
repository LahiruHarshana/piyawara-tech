"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/arrow";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="nav shell">
      <Link className="brand" href="/" aria-label="Piyawara Tech home">
        <img src="/piyawara-logo.jpg" alt="" />
        <span>PIYAWARA <em>TECH</em></span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={pathname === href ? "active" : undefined}>
            {label}
            {href === "/contact" ? <> <Arrow /></> : null}
          </Link>
        ))}
      </nav>
      <Link className="menu-button" href="/contact" aria-label="Jump to contact">
        <span />
        <span />
      </Link>
    </header>
  );
}
