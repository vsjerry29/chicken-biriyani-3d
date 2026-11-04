import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "New Chicken Biriyani", template: "%s | New Chicken Biriyani" },
  description: "A cinematic biriyani experience with real-time 3D food, an interactive menu, and restaurant story.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteNav /><div className="site-shell">{children}</div><SiteFooter /></body></html>;
}
