import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">Page not found</h1>
      <p className="text-6xl font-extrabold text-blue-500" aria-hidden="true">
        404
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">You’ve gone off the map 🗺️</h2>
      <p className="text-gray-800 mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Back to Home
      </Link>
    </main>
  );
}
