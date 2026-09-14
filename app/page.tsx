"use client";

import { useEffect } from "react";

const capabilities = [
  ["01", "Mobile app development", "Reliable Android and iOS experiences designed around real customer needs and business goals.", "⌁"],
  ["02", "Web systems", "Fast, responsive websites and web applications that make your digital presence work harder.", "◌"],
  ["03", "Custom software", "Purpose-built tools and connected systems that simplify operations and create room to grow.", "◒"],
];

const steps = [
  ["01", "Understand deeply", "We ask better questions before we suggest answers."],
  ["02", "Make it tangible", "We turn direction into prototypes you can see, use, and trust."],
  ["03", "Build for momentum", "We leave you with a system that grows with the business."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element, index) => {
      (element as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return <>
    <div className="noise" aria-hidden="true" /><div className="ambient-glow glow-one" aria-hidden="true" /><div className="ambient-glow glow-two" aria-hidden="true" />
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="Piyawara Tech home"><img src="/piyawara-logo.jpg" alt="" /><span>PIYAWARA <em>TECH</em></span></a>
      <nav aria-label="Main navigation"><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#contact">Contact <Arrow /></a></nav>
      <a className="menu-button" href="#contact" aria-label="Jump to contact"><span /><span /></a>
    </header>
    <main id="top">
      <section className="hero shell">
        <div className="hero-image" aria-hidden="true"><img src="/hero.webp" alt="" /><div className="hero-image-shade" /></div>
        <div className="eyebrow reveal"><span className="status-dot" /> BUILDING WHAT MOVES BUSINESS FORWARD</div>
        <h1 className="reveal">Technology that<br /><span>moves you forward.</span></h1>
        <p className="hero-copy reveal">Piyawara Tech builds mobile apps, web systems, and custom software for people and businesses ready to do more.</p>
        <div className="hero-actions reveal"><a className="button button-primary" href="#capabilities">Explore our services <Arrow /></a><a className="button button-quiet" href="#contact">Talk to our team</a></div>
        <div className="hero-foot reveal"><span>Independent technology partner</span><span className="scroll-note"><b /> Scroll to explore</span></div>
      </section>
      <section className="intro shell reveal"><div className="section-label">01 / ABOUT PIYAWARA</div><div className="intro-copy"><h2>Ideas made<br /><span>useful.</span></h2><p>We are an independent software company based in Colombo, Sri Lanka. Our work connects thoughtful design with dependable engineering to help businesses and communities move with confidence.</p><div className="facts"><span><strong>01</strong> Colombo, Sri Lanka</span><span><strong>02</strong> Software company</span><span><strong>03</strong> Built for people</span></div></div></section>
      <section id="capabilities" className="section shell"><div className="section-heading reveal"><div className="section-label">02 / WHAT WE DO</div><h2>Tools for the<br /><span>next chapter.</span></h2></div><div className="capability-grid">{capabilities.map(([number, title, copy, icon]) => <article className="card reveal" key={title}><span className="card-number">{number}</span><div className="card-icon">{icon}</div><h3>{title}</h3><p>{copy}</p><a href="#contact">Start a project <Arrow /></a></article>)}</div></section>
      <section id="approach" className="process shell"><div className="section-label reveal">03 / HOW WE WORK</div><div className="process-layout"><h2 className="reveal">Clear from<br /><span>day one.</span></h2><div className="steps">{steps.map(([number, title, copy]) => <div className="step reveal" key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>
      <section className="statement shell reveal"><div className="section-label">04 / THE PIYAWARA STANDARD</div><p>Technology should feel human, perform beautifully, and make the hard things simpler.</p></section>
      <section id="contact" className="contact shell reveal"><div className="section-label">05 / LET&apos;S TALK</div><h2>Have a good<br /><span>problem?</span></h2><p>Tell us where you want to go. We&apos;ll help you find the next right step.</p><div className="contact-details"><a className="contact-link" href="mailto:piyawaratech@gmail.com">piyawaratech@gmail.com <Arrow /></a><a className="contact-link" href="tel:+94704931092">+94 70 493 1092 <Arrow /></a></div></section>
    </main>
    <footer className="footer shell"><span>© {new Date().getFullYear()} PIYAWARA TECH</span><span>COLOMBO / SRI LANKA</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
