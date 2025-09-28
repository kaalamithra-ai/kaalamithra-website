import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "@/components/seo/seo";
import defaultSEOConfig from "@/seo.config";
import { findPortfolioProject } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function PortfolioDetail() {
  const { slug } = useRouter().query;

  if (!slug) {
    return null;
  }

  const project = findPortfolioProject(slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
        <p className="text-gray-800">
          Please check the URL or return to the portfolio page.
        </p>
      </div>
    );
  }

  const pageTitle = `${project.title} | Portfolio | ${defaultSEOConfig.title}`;
  const pageDescription = project.summary || project.description;

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/portfolio/${project.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: process.env.NEXT_PUBLIC_SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Portfolio",
              item: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.title,
              item: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/${project.slug}`,
            },
          ],
        }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <motion.h1
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-800 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.description || project.summary}
          </motion.p>

          {/* Results */}
          {project.result && (
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-2">Results</h2>
              <p className="text-gray-800">{project.result}</p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start your project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
