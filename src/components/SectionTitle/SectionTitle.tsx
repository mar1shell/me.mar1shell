import type { SectionTitleProps } from "../../types";

function SectionTitle({ title, delay = 0 }: SectionTitleProps) {
  return (
    <div
      className="group relative mb-16"
      data-aos="fade-down"
      data-aos-delay={delay}
    >
      <h2 className="relative z-10 cursor-default overflow-hidden text-center text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-4xl dark:text-white group-hover:dark:text-green-400">
        {title}
      </h2>

      {/* Side decorative lines */}
      <div className="mt-4 flex items-center justify-center">
        <div className="h-px w-16 bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 transition-all duration-500 group-hover:w-24 dark:from-teal-600 dark:via-lime-600 dark:to-green-700"></div>
        <div className="mx-4 h-2 w-2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-cyan-600/50 dark:from-teal-600 dark:via-lime-600 dark:to-green-700"></div>
        <div className="h-px w-16 bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 transition-all duration-500 group-hover:w-24 dark:from-teal-600 dark:via-lime-600 dark:to-green-700"></div>
      </div>
    </div>
  );
}

export default SectionTitle;
