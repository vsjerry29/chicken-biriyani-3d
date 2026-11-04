
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="kicker">04 / Contact</div>
        <h1>Let&apos;s set the<br /><em>table.</em></h1>
        <p>
          Use this page for restaurant enquiries, catering requests or bulk orders.
          Connect it to your real email or backend before publishing.
        </p>
      </section>

      <section className="content-wrap">
        <div className="two-col">
          <div className="content-panel">
            <h2>Send an enquiry</h2>
            <ContactForm />
          </div>

          <div className="content-panel">
            <h2>Restaurant details</h2>
            <p>Replace these placeholders with verified business information before launch.</p>

            <p><strong style={{ color: "var(--cream)" }}>Address</strong><br />Restaurant address goes here</p>
            <p><strong style={{ color: "var(--cream)" }}>Phone</strong><br />+91 XXXXX XXXXX</p>
            <p><strong style={{ color: "var(--cream)" }}>Hours</strong><br />Update with confirmed opening hours</p>

            <a className="underlink" href="/menu">Browse the menu ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
