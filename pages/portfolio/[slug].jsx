import { useRouter } from "next/router";

const portfolioItems = {
  "ai-dashboard": {
    title: "AI Dashboard Platform",
    description:
      "We built a real-time analytics dashboard with AI-powered forecasting and interactive visualizations.",
    result: "Increased efficiency by 35% and reduced reporting time by 70%.",
  },
  "mobile-banking": {
    title: "Mobile Banking App",
    description:
      "Designed and developed a next-gen mobile banking app with biometric authentication and secure payments.",
    result: "Adopted by 2M+ users within the first 6 months.",
  },
  "automation-suite": {
    title: "Business Automation Suite",
    description:
      "Created an enterprise-grade automation suite integrating ERP and CRM workflows.",
    result: "Saved 20,000+ staff hours annually and cut operational costs by 40%.",
  },
};

export default function PortfolioDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = portfolioItems[slug];

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
        <p className="text-gray-600">Please check the URL or return to the portfolio page.</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-gray-700 text-lg mb-8">{project.description}</p>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <p className="text-gray-600">{project.result}</p>
        </div>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Start your project
        </a>
      </div>
    </section>
  );
}
