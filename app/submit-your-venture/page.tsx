"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const stages = ["Just an Idea", "Research and Planning", "Early-Stage Startup", "Operating Business", "Established Business", "Expansion Stage"];
const support = ["Investment", "Strategic Partnership", "Business Development", "Complete Venture Building", "Business Growth and Expansion", "Not Sure Yet"];
const investment = ["Under 5,000 USD", "5,000–25,000 USD", "25,000–100,000 USD", "100,000–500,000 USD", "Above 500,000 USD", "Not Yet Determined", "Not Applicable"];

export default function SubmitYourVenture() {
  const [notice, setNotice] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setNotice("");
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const value = (name: string) => (new FormData(form).get(name) as string || "Not provided").trim();
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (!number) { setNotice("WhatsApp contact is not configured yet. Set NEXT_PUBLIC_WHATSAPP_NUMBER to enable this handoff."); return; }
    const message = `NEW VENTURE SUBMISSION - RICHESS VENTURES\n\nName: ${value("full_name")}\nEmail: ${value("email")}\nContact Number: ${value("whatsapp")}\nLocation: ${value("location")}\nVenture Name: ${value("venture_name")}\nCurrent Stage: ${value("venture_stage")}\nSupport Required: ${value("support_required")}\nInvestment Requirement: ${value("investment_requirement")}\n\nVenture Description:\n${value("venture_description")}\n\nWebsite / Portfolio: ${value("website")}\n\nSubmitted through the Richess Ventures website.`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  return <main className="application-page"><header className="application-nav"><Link href="/" className="brand"><span>RV</span> Richess Ventures</Link><Link href="/" className="back-link">Back to home <i>↖</i></Link></header><section className="application-hero"><p className="kicker">Let&apos;s build something meaningful</p><h1>Every great venture starts with <em>a conversation.</em></h1><p>Tell us about your vision, your business or the opportunity you want to explore. Share the details and start a conversation with Richess Ventures.</p></section><section className="application-layout"><aside><p className="kicker">Your opportunity</p><h2>Start with<br /><em>what matters.</em></h2><p>We review every submission with care. Investment and partnership opportunities are evaluated individually and are subject to mutually agreed terms.</p><img src="/method.jpg" alt="A person considering a business proposal" /></aside><form className="venture-form" onSubmit={submit}><div className="form-head"><h2>Tell us about your venture.</h2><p>Provide a few details so we can understand the opportunity.</p></div><div className="form-grid"><Field label="Full name" name="full_name" required /><Field label="Email address" name="email" type="email" required /><Field label="WhatsApp number" name="whatsapp" type="tel" required /><Field label="Country / location" name="location" required /><Field label="Business or venture name" name="venture_name" /><Select label="Current stage" name="venture_stage" options={stages} required /><Select label="What are you looking for?" name="support_required" options={support} required /><Select label="Estimated investment requirement" name="investment_requirement" options={investment} /><label className="form-full">Tell us about your idea or business<textarea name="venture_description" required placeholder="What are you building? What problem does it solve? What support do you need?" /></label><Field label="Website or portfolio" name="website" type="url" /></div><label className="consent"><input required type="checkbox" /> <span>I agree to share these details with Richess Ventures for the purpose of discussing my business or partnership opportunity.</span></label>{notice && <p className="form-notice" role="alert">{notice}</p>}<button className="button primary" type="submit">Continue on WhatsApp <i>↗</i></button><p className="form-note">You will be able to review and manually send your message in WhatsApp. Nothing is submitted automatically.</p></form></section></main>;
}
function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) { return <label>{label}<input name={name} type={type} required={required} /></label>; }
function Select({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) { return <label>{label}<select name={name} required={required} defaultValue=""><option value="" disabled>Select an option</option>{options.map(option => <option key={option}>{option}</option>)}</select></label>; }
