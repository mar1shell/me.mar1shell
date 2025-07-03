import {
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Code,
  Award,
  ChevronRight,
  X,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import { experiences } from "../../utils/data";

// Technologies Modal Component
function TechnologiesModal({
  isOpen,
  onClose,
  technologies,
  companyName,
}: {
  isOpen: boolean;
  onClose: () => void;
  technologies: string[];
  companyName: string;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6 text-blue-400 dark:text-green-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Technologies at {companyName}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-blue-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-green-400"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tech}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-green-400"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-green-400/5 dark:to-emerald-400/5"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6 dark:border-slate-700">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              {technologies.length} technologies used
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Floating Technologies Badge Component
function FloatingTechnologiesBadge({
  technologies,
  companyName,
}: {
  technologies: string[];
  companyName: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group/badge absolute -right-4 -bottom-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-green-400"
      >
        <div className="flex max-w-32 flex-wrap gap-1">
          {technologies.slice(0, 3).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 transition-colors duration-300 group-hover/badge:bg-blue-200 dark:bg-green-900/30 dark:text-green-400 dark:group-hover/badge:bg-green-900/50"
            >
              {skill}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 transition-all duration-300 group-hover/badge:bg-blue-100 group-hover/badge:text-blue-700 dark:bg-slate-700 dark:text-gray-400 dark:group-hover/badge:bg-green-900/30 dark:group-hover/badge:text-green-400">
              <Eye className="h-3 w-3" />+{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Hover indicator */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100 dark:from-green-400/10 dark:to-emerald-400/10"></div>
      </button>

      <TechnologiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        technologies={technologies}
        companyName={companyName}
      />
    </>
  );
}

export default function ExperienceSection() {
  return (
    <section className="py-6 md:px-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Experience" />

        <div className="grid gap-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`group relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <div
                className={`items-center gap-16 lg:grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Experience Visual */}
                <div
                  className={`relative mb-8 lg:mb-0 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative transition-transform duration-500 group-hover:scale-105">
                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-xl border-0 bg-white shadow-2xl dark:bg-slate-900">
                      <div className="p-8">
                        {/* Company Logo & Header */}
                        <div className="mb-6 flex items-center gap-4">
                          <div className="relative">
                            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 p-1 dark:bg-slate-800">
                              <img
                                src={
                                  exp.logo ||
                                  "/placeholder.svg?height=40&width=40&query=company logo" ||
                                  "/placeholder.svg" ||
                                  "/placeholder.svg"
                                }
                                alt={`${exp.company} logo`}
                                width="40"
                                height="40"
                                className="object-contain"
                              />
                            </div>
                            {exp.current && (
                              <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.company}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {exp.type}
                            </p>
                          </div>
                        </div>

                        {/* Duration & Location */}
                        <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Technologies Badge */}
                    <FloatingTechnologiesBadge
                      technologies={exp.skills}
                      companyName={exp.company}
                    />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-400/20 to-cyan-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-green-400/20 dark:to-emerald-500/20"></div>
                  </div>
                </div>

                {/* Experience Details */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Badges */}
                  <div className="flex flex-wrap gap-3">
                    {exp.featured && (
                      <span className="inline-block rounded-full border border-cyan-400/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-cyan-500 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-400">
                        Featured Experience
                      </span>
                    )}
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600 dark:border-green-400/30 dark:bg-green-500/10 dark:text-green-400">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-400 lg:text-4xl dark:text-white dark:group-hover:text-green-400">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>

                  {/* All Achievements */}
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-400 dark:text-green-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Key Achievements
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400 dark:text-green-400" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 pt-4 md:justify-start">
                    {exp.detailsLink !== "" && (
                      <a
                        href={exp.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="group/btn inline-flex items-center rounded-full bg-blue-400 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/25 dark:bg-green-400 dark:hover:bg-green-500">
                          <ExternalLink className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-12" />
                          View Details
                        </button>
                      </a>
                    )}
                    {exp.connectLink !== "" && (
                      <a
                        href={exp.connectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="group/btn inline-flex items-center rounded-full border-2 border-blue-400 bg-transparent px-6 py-3 font-semibold text-blue-400 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-gray-900 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-500">
                          <Users className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-12" />
                          Connect
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
