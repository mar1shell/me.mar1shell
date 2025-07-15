import { useState } from "react";
import { Eye } from "lucide-react";
import TechnologiesModal from "../TechnologiesModal";

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

export default FloatingTechnologiesBadge;
