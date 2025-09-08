import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kaalamithra delivered beyond our expectations. Their AI automation saved us hundreds of hours every month.",
      name: "Arun Kumar",
      role: "Founder, TechNova",
    },
    {
      quote: "The full-stack web platform they built scaled seamlessly as our user base grew. Great team, highly recommend!",
      name: "Priya Sharma",
      role: "CTO, StartEdge",
    },
    {
      quote:
        "They combine deep technical expertise with a genuine understanding of business needs. A rare mix in today’s world.",
      name: "David Miller",
      role: "Director, FutureWorks",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 text-lg mb-4">“{t.quote}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-base text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
