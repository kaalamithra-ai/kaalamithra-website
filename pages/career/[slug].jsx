import Link from "next/link";
import { useRouter } from "next/router";

const jobDetails = {
  "full-stack-developer": {
    title: "Full-Stack Developer",
    description: "Work with Next.js, Node, and databases to build scalable apps.",
  },
  "ai-engineer": {
    title: "AI Engineer",
    description: "Build and deploy AI/ML models for real-world applications.",
  },
  "uiux-designer": {
    title: "UI/UX Designer",
    description: "Design intuitive and modern user experiences for our apps.",
  },
};

export default function JobDetail() {
  const { query } = useRouter();
  const job = jobDetails[query.slug];

  if (!job) {
    return (
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Job not found</h1>
          <p className="text-gray-800">Please check the role link or explore our open positions.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
        <p className="text-gray-800 mb-8">{job.description}</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Apply Now
        </Link>
      </div>
    </main>
  );
}
