import {
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";

import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import { experiences } from "../../data";
import FloatingTechnologiesBadge from "../../components/FloatingTechnologiesBadge";

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="py-6 md:px-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Experience" delay={300} />

        <div className="grid gap-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`group relative`}>
              <div
                className={`items-center gap-16 lg:grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Experience Visual */}
                <div
                  className={`relative mb-8 lg:mb-0 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="relative transition-transform duration-500 group-hover:scale-105">
                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                      <div className="p-8">
                        {/* Company Logo & Header */}
                        <div className="mb-6 flex items-center gap-4">
                          <div className="relative">
                            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 p-1 dark:bg-slate-800">
                              <img
                                src={exp.logo}
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

                    {/* Outline Effect */}
                    <div className="absolute inset-0 -z-10 rounded-xl border-2 border-blue-400/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:border-green-400/30"></div>
                  </div>
                </div>

                {/* Experience Details */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
