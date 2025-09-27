import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
  const title = "Our Portfolio | Kaalamithra AI Tech";
  const description =
    "Explore Kaalamithra AI Tech's portfolio — successful AI, full-stack, and digital projects built for global clients.";

  // Example portfolio projects (replace with real data later)
  const projects = [
    {
      title: "AI Chatbot for Healthcare",
      summary:
        "Built an AI-powered virtual assistant to streamline patient support.",
      link: "/portfolio/ai-chatbot",
    },
    {
      title: "E-commerce Growth Platform",
      summary:
        "Full-stack platform with personalized recommendations and analytics.",
      link: "/portfolio/ecommerce-platform",
    },
    {
      title: "Digital Transformation Dashboard",
      summary:
        "Custom BI dashboards and automation tools for enterprise workflows.",
      link: "/portfolio/digital-dashboard",
    },
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/portfolio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio`,
          publisher: {
            "@type": "Organization",
            name: "Kaalamithra AI Tech",
            url: process.env.NEXT_PUBLIC_SITE_URL,
          },
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Showcasing some of our impactful projects in AI, web development, and
          digital transformation.
        </motion.p>

        {/* Projects Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
              <p className="text-base text-gray-700 mb-4">{project.summary}</p>
              <Link
                href={project.link}
                className="text-blue-600 hover:text-blue-800 font-medium transition"
              >
                View Case Study →
              </Link>
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
            Want to create something impactful?
          </motion.h2>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Start your project"
          >
            Let’s Work Together
          </Link>
        </section>
      </main>
    </>
  );
}
