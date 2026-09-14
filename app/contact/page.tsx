import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteShell } from "@/components/site-shell";
import { contactSteps } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Piyawara Tech to discuss your mobile app, website, or custom software project. Based in Colombo, Sri Lanka.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <RevealObserver>
      <SiteShell>
        <Header />
        <main>
          <section className="page-intro shell reveal">
            <div className="section-label">01 / CONTACT</div>
            <div className="intro-copy">
              <h2>Let&apos;s start<br /><span>the conversation.</span></h2>
              <div className="content-block">
                <p>
                  Whether you have a detailed brief or just an idea worth exploring, we would like to hear from you. Reach out and we will respond within one business day.
                </p>
              </div>
            </div>
          </section>

          <section className="contact shell reveal contact-page">
            <div className="section-label">02 / GET IN TOUCH</div>
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
            <div className="facts facts-center">
              <span><strong>01</strong> {siteConfig.address.locality}, {siteConfig.address.country}</span>
              <span><strong>02</strong> Mon – Fri, 9:00 – 18:00</span>
              <span><strong>03</strong> Remote & on-site available</span>
            </div>
          </section>

          <section className="process shell">
            <div className="section-label reveal">03 / WHAT HAPPENS NEXT</div>
            <div className="process-layout">
              <h2 className="reveal">A simple<br /><span>process.</span></h2>
              <div className="steps">
                {contactSteps.map(({ number, title, copy }) => (
                  <div className="step reveal" key={number}>
                    <b>{number}</b>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="statement shell reveal">
            <div className="section-label">04 / PROJECT TYPES</div>
            <p>Mobile apps, web platforms, company websites, internal tools, redesigns, and ongoing product support.</p>
          </section>

          <section className="section shell reveal">
            <div className="section-heading">
              <div className="section-label">05 / EXPLORE MORE</div>
              <h2>Learn about<br /><span>our work.</span></h2>
            </div>
            <div className="cta-inline cta-inline-left">
              <Link className="button button-primary" href="/services">
                View services <Arrow />
              </Link>
              <Link className="button button-quiet" href="/work">
                See case studies
              </Link>
            </div>
          </section>

          <section className="contact shell reveal contact-page-end">
            <div className="section-label">READY WHEN YOU ARE</div>
            <p>Send us a note at {siteConfig.email} — we look forward to hearing from you.</p>
            <div className="cta-inline">
              <a className="button button-primary" href={`mailto:${siteConfig.email}`}>
                Send an email <Arrow />
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </SiteShell>
    </RevealObserver>
  );
}
