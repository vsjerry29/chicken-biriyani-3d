"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="site-nav">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <span className="brand-icon">✦</span>
        <span>NEW CHICKEN BIRIYANI<small>THE ART OF A FEAST</small></span>
      </Link>
      <div className={`navlinks ${open ? "open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav-actions">
        <Link className="pill" href="/menu">Explore menu <span>↗</span></Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
      </div>
    </nav>
  );
}
