import posts from "@/data/blog/mdx.json";

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Our Blog</h1>
        {posts.map((post) => (
          <article key={post.slug} className="mb-8">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none"
                aria-label={`Read more about ${post.title}`}
              >
                Read more →
              </a>
            </article>
          ))}
      </div>
    </section>
  );
}
