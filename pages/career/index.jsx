import SEO from "@/components/seo/seo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersPage() {
  const title = "Careers at Kaalamithra AI Tech";
  const description =
    "Join Kaalamithra AI Tech's growing team of innovators. Explore open roles in AI engineering, full-stack development, and digital innovation.";

  // Example job postings structured data
  const jobPosts = [
    {
      title: "AI Engineer",
      description:
        "Design, train, and deploy AI/ML solutions for real-world business challenges.",
      employmentType: "FULL_TIME",
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Remote",
          addressCountry: "IN",
        },
      },
    },
    {
      title: "Full-Stack Developer",
      description:
        "Build scalable applications using Next.js, Node.js, and cloud platforms.",
      employmentType: "FULL_TIME",
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Remote",
          addressCountry: "IN",
        },
      },
    },
    {
      title: "UI/UX Designer",
      description:
        "Design user-centered interfaces for web and mobile applications.",
      employmentType: "FULL_TIME",
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Remote",
          addressCountry: "IN",
        },
      },
    },
  ];

  const jsonLdData = jobPosts.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: new Date().toISOString().split("T")[0], // today’s date
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Kaalamithra AI Tech",
      sameAs: "https://kaalamithra-ai.com",
    },
    jobLocation: job.jobLocation,
  }));

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="/career"
        jsonLdType="JobPosting"
        jsonLdProps={jsonLdData[0]} // ✅ one JobPosting for Lighthouse
      />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Careers
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Join our growing team of innovators, builders, and problem solvers.
          Explore our open roles below.
        </motion.p>

        {/* Job listings */}
        <section className="grid md:grid-cols-3 gap-8">
          {jobPosts.map((job, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-3">{job.title}</h2>
              <p className="text-base text-gray-700 mb-4">{job.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Remote | Full-time
              </p>
              <Link
                href="#"
                className="px-6 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                View details →
              </Link>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
