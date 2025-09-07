import { useRouter } from "next/router";
import { services } from "@/constants/services";

export default function ServiceDetail() {
  const { slug } = useRouter().query;
  const service = services.find((s) => s.slug === slug);

  if (!service) return <p className="p-10 text-center">Service not found</p>;

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        <p className="mb-6 text-gray-600">{service.description}</p>
        <ul className="list-disc pl-6 space-y-2">
          {service.bullets.map((b, i) => (
            <li key={i} className="text-gray-700">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
