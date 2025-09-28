import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-50" aria-label="Call to Action">
      <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Ready to Build the Future with Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 mb-8"
        >
          Let’s turn your ideas into scalable, smart solutions that grow with your
          business.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          href="#contact"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
