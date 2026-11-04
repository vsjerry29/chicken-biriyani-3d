import type { Metadata } from "next";
import { MenuClient } from "@/components/menu-client";
export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return <main><section className="page-intro"><div className="kicker">02 / The menu</div><h1>Choose your<br /><em>feast.</em></h1><p>Browse the full menu, filter by category and add dishes to your picks. Prices are demonstration values and should be replaced with confirmed restaurant pricing.</p></section><section className="content-wrap"><MenuClient /><div className="content-panel" style={{marginTop:30}}><h2>Ready to place an order?</h2><p>This is a front-end prototype. Connect an ordering provider or backend to accept real orders and payments.</p><a className="pill" href="/contact">Contact / enquiry ↗</a></div></section></main>;
}
