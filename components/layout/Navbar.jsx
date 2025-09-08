import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-center gap-6 py-4 bg-gray-100 shadow-md">
    <Link href="/about-us" aria-label="About Us">
      <span className="text-blue-700 hover:underline cursor-pointer">About Us</span>
    </Link>
    <Link href="/services" aria-label="Services">
      <span className="text-blue-700 hover:underline cursor-pointer">Services</span>
    </Link>
    <Link href="/portfolio" aria-label="Portfolio">
      <span className="text-blue-700 hover:underline cursor-pointer">Portfolio</span>
    </Link>
    <Link href="/blog" aria-label="Blog">
      <span className="text-blue-700 hover:underline cursor-pointer">Blog</span>
    </Link>
    <Link href="/career" aria-label="Careers">
      <span className="text-blue-700 hover:underline cursor-pointer">Careers</span>
    </Link>
    <Link href="/contact" aria-label="Contact">
      <span className="text-blue-700 hover:underline cursor-pointer">Contact</span>
    </Link>
  </nav>
);

export default Navbar;
