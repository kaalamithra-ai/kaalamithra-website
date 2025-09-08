import { useState } from "react";
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="font-bold text-xl text-blue-600 select-none">
          KAALAMITHRA AI TECH
        </div>
        <div className="hidden md:flex gap-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-label={link.label}>
              <span
                className={`text-gray-700 hover:text-blue-600 transition cursor-pointer ${
                  isActive(link.href) ? "underline underline-offset-8 decoration-2 decoration-blue-600" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex items-center px-2 py-1 text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 pt-2 flex flex-col gap-y-2 mt-2 rounded-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-label={link.label}>
              <span
                className={`block text-gray-700 hover:text-blue-600 transition cursor-pointer py-2 ${
                  isActive(link.href) ? "underline underline-offset-8 decoration-2 decoration-blue-600" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
