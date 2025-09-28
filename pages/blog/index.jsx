import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";
import Link from "next/link";

// Example blog posts (replace with dynamic data later)
const posts = [
  {
    title: "The Future of AI in Business",
    excerpt: "Exploring how AI is transforming industries from healthcare to finance.",
    slug: "future-of-ai",
  },
  {
    title: "Scaling Full-Stack Apps",
    excerpt: "Best practices for building scalable, production-ready web applications.",
    slug: "scaling-fullstack-apps",
  },
  {
    title: "Digital Growth Strategies 2025",
    excerpt: "Proven methods to accelerate your digital presence and conversions.",
    slug: "digital-growth-2025",
  },
];

export default function BlogPage() {
  const title = "Our Blog | Kaalamithra AI Tech";
  const description =
    "Read insights on AI, full-stack development, and digital growth from Kaalamithra AI Tech’s expert team.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: title,
          description,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
          publisher: {
            "@type": "Organization",
            name: "Kaalamithra AI Tech",
            url: process.env.NEXT_PUBLIC_SITE_URL,
          },
        }}
      />

      <main id="main-content" className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Blog
        </motion.h1>
        <motion.p
          className="text-lg text-gray-800 mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Insights on AI, development, and strategies to scale your digital
          presence.
        </motion.p>

        {/* Blog posts grid */}
        <section className="grid md:grid-cols-3 gap-8" aria-label="Blog posts">
          <h2 className="sr-only">Latest blog posts</h2>
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-base text-gray-800 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-700 hover:text-blue-900 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
