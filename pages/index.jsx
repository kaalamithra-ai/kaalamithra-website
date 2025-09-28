import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const title = "Kaalamithra AI Tech | AI Solutions & Full-Stack Development";
  const description =
    "Kaalamithra AI Tech provides AI-driven solutions, full-stack development, and digital growth strategies to help businesses scale and innovate.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/" // ✅ relative; seo.jsx builds absolute
        jsonLdType="Organization"
        jsonLdProps={{
          title: "Kaalamithra AI Tech",
          url: "/",
          logo: "/logo.png",
          sameAs: [
            "https://www.linkedin.com/company/kaalamithra-ai",
            "https://twitter.com/kaalamithra-ai",
          ],
        }}
      />

      <main id="main-content" className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to <span className="text-blue-600">Kaalamithra AI Tech</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Empowering businesses with AI solutions, full-stack development, and
            digital growth strategies tailored to your success.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 shadow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg font-medium border border-blue-600 text-blue-700 hover:bg-blue-50 shadow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
            Our Core Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Solutions",
                desc: "Custom models and automation tailored to your workflows.",
              },
              {
                title: "Full-Stack Development",
                desc: "Modern web and mobile applications that scale seamlessly.",
              },
              {
                title: "Digital Growth",
                desc: "Strategies and tools to accelerate your online presence.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-8 rounded-xl shadow bg-white hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-800">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "Kaalamithra AI Tech helped us automate our workflows — saving hours every week.",
                author: "Anita R., Operations Lead",
              },
              {
                quote:
                  "Their full-stack team delivered a scalable platform that grew with our business.",
                author: "Rahul S., Startup Founder",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <p className="text-gray-800 italic mb-4 text-lg">“{t.quote}”</p>
                <footer className="text-sm font-medium text-gray-600">
                  — {t.author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to start your project?
          </motion.h2>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 shadow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
}
