import Link from "next/link";

export default function ContactSuccess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Thanks for reaching out! 🎉</h1>
          <p className="text-gray-700 mb-8">
            We’ve received your message and our team will get back to you within 1–2 business days.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Back to home link"
          >
            Back to Home
          </Link>
        </div>
      </section>
  );
}
