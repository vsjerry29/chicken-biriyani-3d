"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Biriyani enquiry: ${form.get("topic")}`);
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone") || "Not provided"}\nType: ${form.get("topic")}\n\n${form.get("message")}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setPrepared(true);
  }
  return <form onSubmit={submit}><div className="form-grid">
    <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name" /></div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="you@example.com" /></div>
    <div className="field"><label htmlFor="topic">Enquiry type</label><select id="topic" name="topic"><option>General enquiry</option><option>Bulk order</option><option>Catering</option><option>Feedback</option></select></div>
    <div className="field"><label htmlFor="phone">Phone (optional)</label><input id="phone" name="phone" type="tel" placeholder="Phone number" /></div>
    <div className="field wide"><label htmlFor="message">Message</label><textarea id="message" name="message" required placeholder="How can we help?" /></div>
    <div className="wide"><button className="pill" type="submit">Prepare enquiry ↗</button></div>
  </div>{prepared && <div className="success show" role="status">Email draft prepared. This demo does not store or send submissions.</div>}<p className="notice">Demo form: replace hello@example.com in components/contact-form.tsx before launch.</p></form>;
}
