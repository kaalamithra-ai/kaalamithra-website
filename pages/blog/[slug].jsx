import { useRouter } from "next/router";
import SEO from "@/components/seo/seo";
import defaultSEOConfig from "@/seo.config";
import posts from "@/data/blog/mdx.json";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { query } = useRouter();
  const { slug } = query;

  if (!slug) {
    return null;
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="p-10 text-center">Post not found</p>;
  }

  const pageTitle = `${post.title} | Blog | ${defaultSEOConfig.title}`;
  const pageDescription = post.excerpt;

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/blog/${post.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: {
            "@type": "Person",
            name: post.author || "Kaalamithra AI Tech",
          },
          datePublished: post.date,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
          image: post.image
            ? `${process.env.NEXT_PUBLIC_SITE_URL}${post.image}`
            : undefined,
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Blog title */}
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.title}
        </motion.h1>

        {/* Meta info */}
        <motion.p
          className="text-sm text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Published {post.date} • By {post.author || "Kaalamithra AI Tech"}
        </motion.p>

        {/* Blog content */}
        <motion.div
          className="prose prose-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {post.content}
        </motion.div>
      </article>
    </>
  );
}
