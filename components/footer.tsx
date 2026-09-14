import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-stack">
        <div className="footer-top">
          <span>© {new Date().getFullYear()} PIYAWARA TECH</span>
          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>COLOMBO / SRI LANKA</span>
          <Link href="/">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  );
}
