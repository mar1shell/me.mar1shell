import Avatar from "../../components/Avatar/Avatar";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center justify-center py-5 max-md:text-center md:grid-cols-5 md:gap-8 md:py-20">
      <Avatar />
      <motion.div
        className="col-span-1 flex flex-col max-md:pt-10 md:col-span-3"
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 50,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl md:whitespace-nowrap dark:text-white">
          Hello, I'm{" "}
          <motion.span
            className="inline-block bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 bg-clip-text pl-1 text-5xl text-transparent transition-all duration-500 dark:from-teal-400 dark:via-lime-500 dark:to-green-600"
            whileHover={{
              scale: 1.1,
            }}
          >
            Marouane
          </motion.span>
        </h1>
        <h2 className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-300">
          I'm a Software Engineering Student and Fullsatck Devoloper
        </h2>
        <ul className="pl-5 max-md:pt-20">
          <li className="mb-2 text-gray-600 transition-transform duration-300 hover:translate-x-1 dark:text-gray-400">
            🌍 Based in Casablanca, Morocco
          </li>
          <li className="mb-2 text-gray-600 dark:text-gray-400">
            💻 Passionate about crafting impactful full-stack web applications
          </li>
          <li className="mb-2 text-gray-600 dark:text-gray-400">
            💼 AI Trainer at{" "}
            <a
              target="blank"
              href="https://outlier.ai"
              className="pr-1 text-blue-600 transition-all duration-300 hover:text-blue-800 hover:underline dark:text-green-400 dark:hover:text-green-700"
            >
              Outlier AI
            </a>
            and enthusiastic software builder
          </li>
          <li className="mb-2 text-gray-600 dark:text-gray-400">
            📚 Exploring software engineering deeply through projects and study
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
