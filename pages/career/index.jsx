import Link from "next/link";

const jobs = [
  { title: "Full-Stack Developer", location: "Remote", slug: "full-stack-developer" },
  { title: "AI Engineer", location: "Remote", slug: "ai-engineer" },
  { title: "UI/UX Designer", location: "Remote", slug: "uiux-designer" },
];

export default function CareersPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Careers</h1>
        <p className="mb-8 text-gray-700">
          Join our growing team of innovators, builders, and problem solvers. 
          Explore our open roles below.
        </p>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.slug} className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold">{job.title}</h2>
              <p className="text-gray-500">{job.location}</p>
              <Link
                href={`/career/${job.slug}`}
                className="text-blue-600 font-medium hover:underline"
              >
                View details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
