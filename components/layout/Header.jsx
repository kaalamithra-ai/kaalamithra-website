import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Normalize path for active link checks (remove query/hash, trailing slash)
  const pathname = (router.asPath || "/").split(/[?#]/)[0].replace(/\/+$/, "") || "/";

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href) => {
    const target = href.replace(/\/+$/, "") || "/";
    return pathname === target;
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow z-50" role="banner">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded-md bg-blue-600 px-4 py-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Skip to main content
      </a>

      <nav className="flex justify-between items-center px-8 py-4" aria-label="Primary">
        <Link
          href="/"
          className="font-extrabold text-xl text-blue-700 tracking-tight leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          aria-label="Kaalamithra AI Tech home"
        >
          KAALAMITHRA AI TECH
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-x-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-1.5 py-2 text-gray-900 hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                  active ? "underline underline-offset-8 decoration-2 decoration-blue-600" : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {active && <span className="sr-only"> (current)</span>}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center px-3 py-2 text-gray-900 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-md"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white shadow px-4 pb-4 pt-2 flex flex-col gap-y-1.5 mt-2 rounded-lg"
          role="navigation"
          aria-label="Mobile Primary"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2 rounded-md text-gray-900 hover:text-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                  active ? "underline underline-offset-8 decoration-2 decoration-blue-600" : ""
                }`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {active && <span className="sr-only"> (current)</span>}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
