// components/ui/Card.jsx
import Link from "next/link";

/**
 * Generic Card component with hover "lift" interaction.
 * - Adds translate/scale on hover and smooth transitions
 * - Works as <div> by default, or as a link when `href` is provided
 * - Keeps API simple: { href?, title?, children, className? }
 */
export default function Card({ href, title, children, className = "", ...props }) {
  const base =
    "group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm " +
    "transition-transform duration-200 ease-out transform-gpu will-change-transform " +
    "hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg " +
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600";

  const titleEl = title ? (
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  ) : null;

  const bodyEl = children ? (
    <div className={title ? "mt-2 text-gray-600" : "text-gray-600"}>{children}</div>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`} {...props}>
        {titleEl}
        {bodyEl}
      </Link>
    );
  }

  return (
    <div className={`${base} ${className}`} {...props}>
      {titleEl}
      {bodyEl}
    </div>
  );
}
