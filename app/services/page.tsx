import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteShell } from "@/components/site-shell";
import { industries, processSteps, services, technologies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Piyawara Tech offers mobile app development, web applications, company websites, custom software, UI/UX design, and ongoing product support in Sri Lanka.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <RevealObserver>
      <SiteShell>
        <Header />
        <main>
          <section className="page-intro shell reveal">
            <div className="section-label">01 / SERVICES</div>
            <div className="intro-copy">
              <h2>Software built<br /><span>for your business.</span></h2>
              <div className="content-block">
                <p>
                  We design and build digital products end to end — from first concept to launch and beyond. Every engagement is shaped around your goals, your users, and the outcomes that matter most.
                </p>
              </div>
            </div>
          </section>

          <section className="section shell">
            <div className="section-heading reveal">
              <div className="section-label">02 / WHAT WE OFFER</div>
              <h2>Capabilities across<br /><span>the stack.</span></h2>
            </div>
            <div className="capability-grid capability-grid-2">
              {services.map(({ number, title, copy, icon }) => (
                <article className="card reveal" key={title}>
                  <span className="card-number">{number}</span>
                  <div className="card-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/contact">Discuss this service <Arrow /></Link>
                </article>
              ))}
            </div>
          </section>

          <section className="section shell reveal">
            <div className="section-heading">
              <div className="section-label">03 / INDUSTRIES</div>
              <h2>Sectors we<br /><span>support.</span></h2>
            </div>
            <div className="facts facts-wrap">
              {industries.map((industry, index) => (
                <span key={industry}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong> {industry}
                </span>
              ))}
            </div>
          </section>

          <section className="section shell reveal">
            <div className="section-heading">
              <div className="section-label">04 / TECHNOLOGY</div>
              <h2>Modern tools,<br /><span>proven craft.</span></h2>
            </div>
            <div className="facts facts-wrap">
              {technologies.map((tech, index) => (
                <span key={tech}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong> {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="process shell">
            <div className="section-label reveal">05 / OUR PROCESS</div>
            <div className="process-layout">
              <h2 className="reveal">How every<br /><span>project runs.</span></h2>
              <div className="steps">
                {processSteps.map(({ number, title, copy }) => (
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
            <div className="section-label">06 / ENGAGEMENT MODELS</div>
            <p>Fixed-scope projects, phased delivery, or ongoing product partnerships — we adapt to how you need to work.</p>
          </section>

          <CtaSection />
        </main>
        <Footer />
      </SiteShell>
    </RevealObserver>
  );
}
