import { Cpu, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-brand-primary" />,
      title: "AI-Powered Solutions",
      desc: "Custom AI tools and automations designed to streamline your business processes.",
    },
    {
      icon: <Globe className="w-10 h-10 text-brand-primary" />,
      title: "Full-Stack Development",
      desc: "Scalable, modern web and mobile applications built with cutting-edge tech.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-brand-primary" />,
      title: "Digital Growth",
      desc: "Smart strategies and technology that accelerate growth and future-proof your business.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="services" className="py-20 bg-white" aria-label="Features">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          Our Core Services
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg
                         transition-transform duration-200 transform-gpu will-change-transform"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
