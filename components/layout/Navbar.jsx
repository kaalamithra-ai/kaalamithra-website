import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-center gap-6 py-4 bg-gray-100 shadow-md" aria-label="Secondary">
    <Link
      href="/about-us"
      aria-label="About Us"
      className="text-blue-700 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      About Us
    </Link>
    <Link
      href="/services"
      aria-label="Services"
      className="text-blue-700 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Services
    </Link>
    <Link
      href="/portfolio"
      aria-label="Portfolio"
      className="text-blue-700 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Portfolio
    </Link>
    <Link
      href="/blog"
      aria-label="Blog"
      className="text-blue-700 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Blog
    </Link>
    <Link
      href="/career"
      aria-label="Careers"
      className="text-blue-700 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Careers
    </Link>
    <Link
      href="/contact"
      aria-label="Contact"
      className="text-blue-700 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Contact
    </Link>
  </nav>
);

export default Navbar;
