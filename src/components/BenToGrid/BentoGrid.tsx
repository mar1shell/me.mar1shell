import { aboutMeData } from "../../data";
import BentoItem from "../BenToItem/BentoItem";

const BentoGrid = () => {
  return (
    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
      {/* 1. Bio (Large) */}
      <BentoItem
        className="flex flex-col items-center justify-center md:col-span-2 md:row-span-2"
        title="About Me"
      >
        <div className="prose dark:prose-invert">{aboutMeData.description}</div>
      </BentoItem>

      {/* 2. Stack (Tall) */}
      <BentoItem className="md:col-span-1 md:row-span-1" title="Tech Stack">
        <div className="flex flex-wrap gap-3">
          {aboutMeData.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </BentoItem>

      {/* 3. Interests */}
      <BentoItem
        className="group relative overflow-hidden md:col-span-1 md:row-span-1"
        title="Interests"
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex h-full w-full flex-col justify-center gap-4">
          {aboutMeData.interests.map((interest) => (
            <div
              key={interest.title}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
            >
              {interest.icon}
              <span className="font-medium">{interest.title}</span>
            </div>
          ))}
        </div>
      </BentoItem>
    </div>
  );
};

export default BentoGrid;
