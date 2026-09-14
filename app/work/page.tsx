import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore the kind of software Piyawara Tech builds — mobile apps, web platforms, company websites, and custom business tools for growing organisations.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <RevealObserver>
      <SiteShell>
        <Header />
        <main>
          <section className="page-intro shell reveal">
            <div className="section-label">01 / OUR WORK</div>
            <div className="intro-copy">
              <h2>Real products,<br /><span>real impact.</span></h2>
              <div className="content-block">
                <p>
                  We build software that helps businesses run better, serve customers faster, and grow with confidence. Here is a sample of the kinds of projects we deliver for clients across Sri Lanka and beyond.
                </p>
              </div>
            </div>
          </section>

          <section className="section shell">
            <div className="section-heading reveal">
              <div className="section-label">02 / CASE STUDIES</div>
              <h2>Selected<br /><span>engagements.</span></h2>
            </div>
            <div className="capability-grid capability-grid-2">
              {projects.map(({ number, title, category, copy, icon }) => (
                <article className="card reveal" key={title}>
                  <span className="card-number">{number} / {category}</span>
                  <div className="card-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/contact">Start something similar <Arrow /></Link>
                </article>
              ))}
            </div>
          </section>

          <section className="section shell reveal">
            <div className="section-heading">
              <div className="section-label">03 / DELIVERABLES</div>
              <h2>What clients<br /><span>receive.</span></h2>
            </div>
            <div className="facts facts-wrap">
              <span><strong>01</strong> Production-ready software</span>
              <span><strong>02</strong> Source code & documentation</span>
              <span><strong>03</strong> Deployment & handover support</span>
              <span><strong>04</strong> Post-launch maintenance options</span>
              <span><strong>05</strong> Clear timelines & communication</span>
              <span><strong>06</strong> Ongoing improvement roadmap</span>
            </div>
          </section>

          <section className="statement shell reveal">
            <div className="section-label">04 / YOUR PROJECT</div>
            <p>Every business has a different challenge. We shape each engagement around yours.</p>
          </section>

          <section className="section shell reveal">
            <div className="cta-inline cta-inline-left">
              <Link className="button button-primary" href="/contact">
                Discuss your project <Arrow />
              </Link>
              <Link className="button button-quiet" href="/services">
                View all services
              </Link>
            </div>
          </section>

          <CtaSection />
        </main>
        <Footer />
      </SiteShell>
    </RevealObserver>
  );
}
