import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import { Projects } from "../../utils/data";
import { motion } from "motion/react";

interface ProjectsSectionProps {
  className?: string;
}

export default function ProjectsSection({
  className = "",
}: ProjectsSectionProps) {
  const projects = Projects;

  return (
    <section className={`py-16 ${className}`}>
      <SectionTitle title="Projects" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="items-center lg:grid lg:grid-cols-2 lg:gap-12">
                {/* Project Mockup */}
                <motion.div
                  className="relative mb-8 lg:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 50,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <div className="relative transition-transform duration-500 group-hover:scale-105">
                    {/* Laptop Mockup */}
                    <div className="relative rounded-t-xl bg-gray-800 p-2 shadow-2xl">
                      {/* Laptop Header */}
                      <div className="mb-2 flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>

                      {/* Laptop Screen */}
                      <div className="aspect-video overflow-hidden rounded-lg bg-white dark:bg-slate-900">
                        <img
                          src={project.imageDesktop || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="h-4 rounded-b-xl bg-gray-700 shadow-lg"></div>

                    {/* Mobile Mockup */}
                    <div className="absolute -right-8 -bottom-8 w-20 lg:-right-12 lg:w-24">
                      <div className="rounded-2xl bg-gray-800 p-1 shadow-xl">
                        <div className="aspect-[9/16] overflow-hidden rounded-xl bg-white dark:bg-slate-900">
                          <img
                            src={project.imageMobile || "/placeholder.svg"}
                            alt={`${project.title} mobile`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 50,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  {project.featured && (
                    <span className="inline-block rounded-full border border-cyan-400/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-cyan-500 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-400">
                      Featured Project
                    </span>
                  )}
                  {project.unfinished && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-500 dark:border-yellow-400/30 dark:bg-yellow-500/10 dark:text-yellow-300">
                      <svg
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Under Construction
                    </span>
                  )}

                  <h3 className="text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-400 lg:text-4xl dark:text-white dark:group-hover:text-green-400">
                    {project.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-400 bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-300 hover:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center rounded-full bg-blue-400 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/25 dark:bg-green-400 dark:hover:bg-green-500"
                      >
                        <svg
                          className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}

                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center rounded-full border-2 border-blue-400 bg-transparent px-6 py-3 font-semibold text-blue-400 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-gray-900 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-500"
                      >
                        <svg
                          className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
