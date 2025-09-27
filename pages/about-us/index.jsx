import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";

export default function AboutPage() {
  const title = "About Us | Kaalamithra AI Tech";
  const description =
    "Learn more about Kaalamithra AI Tech Solutions — delivering AI-driven, scalable solutions for startups and enterprises.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/about-us"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
          publisher: {
            "@type": "Organization",
            name: "Kaalamithra AI Tech",
            url: process.env.NEXT_PUBLIC_SITE_URL,
          },
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Kaalamithra AI Tech Solutions
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We are a technology company focused on delivering AI-driven, scalable
          solutions for businesses and startups. From product design to
          development and automation, we help companies turn ideas into impactful
          digital products.
        </motion.p>

        {/* Values Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We bring cutting-edge AI and full-stack technology to solve real-world problems.",
            },
            {
              title: "Collaboration",
              desc: "Working closely with clients, we ensure every solution is tailored to business needs.",
            },
            {
              title: "Excellence",
              desc: "Our team strives for quality in every line of code, design, and strategy we deliver.",
            },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-2">{value.title}</h2>
              <p className="text-base text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Team Statement */}
        <motion.p
          className="text-base md:text-lg text-gray-700 text-center max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Our team combines expertise in full-stack development, artificial
          intelligence, UI/UX design, and growth strategy to ensure your business
          is always future-ready.
        </motion.p>
      </main>
    </>
  );
}
