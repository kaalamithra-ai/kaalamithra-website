import { useRouter } from "next/router";
import posts from "@/data/blog/mdx.json";

export default function BlogPost() {
  const { query } = useRouter();
  const post = posts.find((p) => p.slug === query.slug);

  if (!post) {
    return <p className="p-10 text-center">Post not found</p>;
  }

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">Published {post.date}</p>
        <div className="prose prose-lg text-gray-700">{post.content}</div>
      </div>
    </article>
  );
}
