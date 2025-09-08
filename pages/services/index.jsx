import Link from "next/link";
import { services } from "@/constants/services";

export default function ServicesPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="text-blue-600 font-medium hover:underline focus-visible:underline focus-visible:outline-none"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
