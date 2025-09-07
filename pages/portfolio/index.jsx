import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const portfolioDir = path.join(process.cwd(), "data/portfolio");
  const files = fs.readdirSync(portfolioDir);
  const projects = files.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(portfolioDir, file), "utf-8"));
    return { slug: data.slug, title: data.title, summary: data.summary };
  });

  return { props: { projects } };
}

export default function PortfolioPage({ projects }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.slug} className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 mb-4">{p.summary}</p>
              <a href={`/portfolio/${p.slug}`} className="text-blue-600 hover:underline">
                View case study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
