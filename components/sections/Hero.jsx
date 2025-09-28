import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          We Build AI-Powered Future-Ready Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-600 mt-4 mb-10 max-w-2xl mx-auto"
        >
          Custom AI tools, full-stack development, and digital growth strategies
          to transform your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, staggerChildren: 0.2 }}
          className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-4 justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
<<<<<<< ours
            <Link
              href="/contact"
<<<<<<< ours
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
=======
              aria-label="Start a Project"
              className="inline-block px-4 py-3 md:px-4 md:py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>>>>>>> theirs
            >
              Start a Project
=======
            <Link href="/contact" aria-label="Start a Project">
              <span className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
                Start a Project
              </span>
>>>>>>> theirs
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
<<<<<<< ours
            <Link
              href="/portfolio"
<<<<<<< ours
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-blue-600 text-blue-700 hover:bg-blue-50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
=======
              aria-label="View Portfolio"
              className="inline-block px-4 py-3 md:px-4 md:py-2 rounded-lg font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>>>>>>> theirs
            >
              View Portfolio
=======
            <Link href="/portfolio" aria-label="View Portfolio">
              <span className="px-6 py-3 rounded-lg font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition cursor-pointer">
                View Portfolio
              </span>
>>>>>>> theirs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;