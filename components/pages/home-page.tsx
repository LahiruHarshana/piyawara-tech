import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteShell } from "@/components/site-shell";
import { homeCapabilities, processSteps, projects } from "@/lib/content";

export function HomePage() {
  return (
    <RevealObserver>
      <SiteShell>
        <Header />
        <main id="top">
          <section className="hero shell">
            <div className="hero-image" aria-hidden="true">
              <img src="/hero.webp" alt="" />
              <div className="hero-image-shade" />
            </div>
            <div className="eyebrow reveal">
              <span className="status-dot" /> BUILDING WHAT MOVES BUSINESS FORWARD
            </div>
            <h1 className="reveal">
              Technology that<br /><span>moves you forward.</span>
            </h1>
            <p className="hero-copy reveal">
              Piyawara Tech builds mobile apps, web systems, and custom software for people and businesses ready to do more.
            </p>
            <div className="hero-actions reveal">
              <Link className="button button-primary" href="/services">
                Explore our services <Arrow />
              </Link>
              <Link className="button button-quiet" href="/contact">
                Talk to our team
              </Link>
            </div>
            <div className="hero-foot reveal">
              <span>Independent technology partner</span>
              <span className="scroll-note"><b /> Scroll to explore</span>
            </div>
          </section>

          <section className="intro shell reveal">
            <div className="section-label">01 / ABOUT PIYAWARA</div>
            <div className="intro-copy">
              <h2>Ideas made<br /><span>useful.</span></h2>
              <p>
                We are an independent software company based in Colombo, Sri Lanka. Our work connects thoughtful design with dependable engineering to help businesses and communities move with confidence.
              </p>
              <div className="facts">
                <span><strong>01</strong> Colombo, Sri Lanka</span>
                <span><strong>02</strong> Software company</span>
                <span><strong>03</strong> Built for people</span>
              </div>
              <div className="cta-inline cta-inline-left">
                <Link className="button button-quiet" href="/about">
                  Learn about us <Arrow />
                </Link>
              </div>
            </div>
          </section>

          <section id="capabilities" className="section shell">
            <div className="section-heading reveal">
              <div className="section-label">02 / WHAT WE DO</div>
              <h2>Tools for the<br /><span>next chapter.</span></h2>
            </div>
            <div className="capability-grid">
              {homeCapabilities.map(({ number, title, copy, icon }) => (
                <article className="card reveal" key={title}>
                  <span className="card-number">{number}</span>
                  <div className="card-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/services">Learn more <Arrow /></Link>
                </article>
              ))}
            </div>
          </section>

          <section className="section shell">
            <div className="section-heading reveal">
              <div className="section-label">03 / SELECTED WORK</div>
              <h2>Problems solved<br /><span>in practice.</span></h2>
            </div>
            <div className="capability-grid capability-grid-2">
              {projects.slice(0, 2).map(({ number, title, category, copy, icon }) => (
                <article className="card reveal" key={title}>
                  <span className="card-number">{number} / {category}</span>
                  <div className="card-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/work">View case studies <Arrow /></Link>
                </article>
              ))}
            </div>
          </section>

          <section id="approach" className="process shell">
            <div className="section-label reveal">04 / HOW WE WORK</div>
            <div className="process-layout">
              <h2 className="reveal">Clear from<br /><span>day one.</span></h2>
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
            <div className="section-label">05 / THE PIYAWARA STANDARD</div>
            <p>Technology should feel human, perform beautifully, and make the hard things simpler.</p>
          </section>

          <CtaSection />
        </main>
        <Footer />
      </SiteShell>
    </RevealObserver>
  );
}
