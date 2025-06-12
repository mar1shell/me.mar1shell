import { motion } from "motion/react";
export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      className="group relative mb-16"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        ease: "easeInOut",
        delay: 0.2,
      }}
    >
      {/* Main title with hover effects */}
      <h2 className="relative cursor-default overflow-hidden text-center text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400 group-hover:dark:text-green-400">
          {title}
        </span>
      </h2>

      {/* Side decorative lines */}
      <div className="mt-4 flex items-center justify-center">
        <div className="h-px w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-500 group-hover:w-24 dark:from-teal-400 dark:via-lime-500 dark:to-green-600"></div>
        <div className="mx-4 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-cyan-400/50 dark:from-teal-400 dark:via-lime-500 dark:to-green-600"></div>
        <div className="h-px w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-500 group-hover:w-24 dark:from-teal-400 dark:via-lime-500 dark:to-green-600"></div>
      </div>
    </motion.div>
  );
}
