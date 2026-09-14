import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteShell } from "@/components/site-shell";
import { principles, values } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Piyawara Tech — an independent software company in Colombo, Sri Lanka, building mobile apps, web systems, and custom software with clarity and care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <RevealObserver>
      <SiteShell>
        <Header />
        <main>
          <section className="page-intro shell reveal">
            <div className="section-label">01 / ABOUT US</div>
            <div className="intro-copy">
              <h2>Building software<br /><span>with purpose.</span></h2>
              <div className="content-block">
                <p>
                  Piyawara Tech is an independent software company based in Colombo, Sri Lanka. We partner with businesses, startups, and teams who need technology that is reliable, thoughtful, and built to grow.
                </p>
                <p>
                  From mobile apps to web platforms and custom internal tools, we help organisations turn ideas into products people actually use — without unnecessary complexity or jargon.
                </p>
              </div>
              <div className="facts">
                <span><strong>01</strong> {siteConfig.address.locality}, {siteConfig.address.country}</span>
                <span><strong>02</strong> Founded on craft</span>
                <span><strong>03</strong> Client-first delivery</span>
              </div>
            </div>
          </section>

          <section className="section shell">
            <div className="section-heading reveal">
              <div className="section-label">02 / OUR MISSION</div>
              <h2>Make technology<br /><span>work for people.</span></h2>
            </div>
            <div className="content-block reveal">
              <p>
                We believe good software should feel natural to use, perform under pressure, and earn trust over time. Our mission is to help businesses move forward with digital products that are clear, dependable, and designed around real needs.
              </p>
              <p>
                Whether you are launching something new or improving what already exists, we bring the same focus: understand the problem deeply, build with care, and deliver software you can depend on.
              </p>
            </div>
          </section>

          <section className="section shell">
            <div className="section-heading reveal">
              <div className="section-label">03 / OUR VALUES</div>
              <h2>What guides<br /><span>our work.</span></h2>
            </div>
            <div className="capability-grid">
              {values.map(({ number, title, copy, icon }) => (
                <article className="card reveal" key={title}>
                  <span className="card-number">{number}</span>
                  <div className="card-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="process shell">
            <div className="section-label reveal">04 / HOW WE PARTNER</div>
            <div className="process-layout">
              <h2 className="reveal">A team you can<br /><span>work with.</span></h2>
              <div className="steps">
                {principles.map(({ number, title, copy }) => (
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
            <div className="section-label">05 / WHY PIYAWARA</div>
            <p>We are small enough to care, skilled enough to deliver, and committed enough to see it through.</p>
          </section>

          <section className="section shell reveal">
            <div className="section-heading">
              <div className="section-label">06 / NEXT STEP</div>
              <h2>See what<br /><span>we build.</span></h2>
            </div>
            <div className="cta-inline cta-inline-left">
              <Link className="button button-primary" href="/services">
                Our services <Arrow />
              </Link>
              <Link className="button button-quiet" href="/work">
                View our work
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
