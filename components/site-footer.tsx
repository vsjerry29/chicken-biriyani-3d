"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="footer">
      <div><strong>NEW CHICKEN BIRIYANI</strong><br /><span style={{ display: "block", marginTop: 7 }}>A FEAST IN EVERY GRAIN</span></div>
      <div className="footer-links">
        <Link href="/story">Story</Link><Link href="/menu">Menu</Link><Link href="/experience">Experience</Link><Link href="/contact">Contact</Link>
      </div>
      <span>© {year ?? "2026"} New Chicken Biriyani</span>
    </footer>
  );
}
