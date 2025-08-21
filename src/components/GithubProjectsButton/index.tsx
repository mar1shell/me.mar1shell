import { personalInfo } from "../../data";
import { ArrowRightIcon, GithubMoreProjectsIcon } from "../../icons";

function GithubProjectsButton() {
  return (
    <div className="my-20 text-center" data-aos="fade-up">
      <a
        href={personalInfo.socialMedia.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group/more inline-flex items-center rounded-full border-2 border-dashed border-gray-400 bg-transparent px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-green-400 dark:hover:bg-green-400/10 dark:hover:text-green-400"
      >
        <GithubMoreProjectsIcon />
        <span className="text-sm md:text-base">
          View More Projects on GitHub
        </span>
        <ArrowRightIcon />
      </a>
    </div>
  );
}

export default GithubProjectsButton;
