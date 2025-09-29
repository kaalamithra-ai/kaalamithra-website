import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kaalamithra delivered beyond our expectations. Their AI automation saved us hundreds of hours every month.",
      name: "Arun Kumar",
      role: "Founder, TechNova",
    },
    {
      quote:
        "The full-stack web platform they built scaled seamlessly as our user base grew. Great team, highly recommend!",
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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-transform duration-200"
            >
              <p className="text-gray-700 text-lg mb-4">“{t.quote}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-base text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
