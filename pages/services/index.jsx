import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const title = "Our Services | Kaalamithra AI Tech";
  const description =
    "AI solutions, full-stack development, and digital growth services tailored to your business needs.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/services"
        jsonLdType="Service"
        jsonLdProps={{
          name: "Kaalamithra AI Tech - Services",
          description: description,
          url: "/services",
          provider: {
            "@type": "Organization",
            name: "Kaalamithra AI Tech",
            url: "https://kaalamithra-ai.com",
          },
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        {/* Services Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "AI Solutions",
              desc: "Custom AI models and automation tailored to your business.",
            },
            {
              title: "Full-Stack Development",
              desc: "Modern web and mobile applications that scale seamlessly.",
            },
            {
              title: "Digital Growth",
              desc: "Strategies and tools to accelerate your online presence.",
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {service.title}
              </h2>
              <p className="text-base text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to build the future with us?
          </motion.h2>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Start your project"
          >
            Start Your Project
          </Link>
        </section>
      </main>
    </>
  );
}
