import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";

export default function ContactPage() {
  const title = "Contact Us | Kaalamithra AI Tech";
  const description =
    "Get in touch with Kaalamithra AI Tech for AI solutions, full-stack development, and digital growth services. We’d love to hear from you.";

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Kaalamithra AI Tech",
      url: "https://kaalamithra-ai.com",
      logo: "https://kaalamithra-ai.com/images/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9876543210",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English"],
        },
      ],
    },
  };

  // Motion variants for stagger effect
  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/contact"
        jsonLd={contactJsonLd}
      />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions or want to start a project? Reach out to our team — we’d
          love to hear from you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div custom={0} variants={fieldVariants}>
            <label
              className="block text-gray-700 mb-2 font-medium"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
          </motion.div>

          <motion.div custom={1} variants={fieldVariants}>
            <label
              className="block text-gray-700 mb-2 font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="you@example.com"
              aria-label="Your email address"
              required
            />
          </motion.div>

          <motion.div custom={2} variants={fieldVariants}>
            <label
              className="block text-gray-700 mb-2 font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              rows="4"
              placeholder="Your message"
              aria-label="Your message"
              required
            ></textarea>
          </motion.div>

          <motion.div
            custom={3}
            variants={fieldVariants}
            className="flex justify-center"
          >
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Send message"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </main>
    </>
  );
}
