import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="contact shell reveal">
      <div className="section-label">LET&apos;S TALK</div>
      <h2>Have a good<br /><span>problem?</span></h2>
      <p>Tell us where you want to go. We&apos;ll help you find the next right step.</p>
      <div className="contact-details">
        <a className="contact-link" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email} <Arrow />
        </a>
        <a className="contact-link" href={`tel:${siteConfig.phone}`}>
          +94 70 493 1092 <Arrow />
        </a>
      </div>
      <div className="cta-inline">
        <Link className="button button-primary" href="/contact">
          Start a project <Arrow />
        </Link>
        <Link className="button button-quiet" href="/services">
          View services
        </Link>
      </div>
    </section>
  );
}
