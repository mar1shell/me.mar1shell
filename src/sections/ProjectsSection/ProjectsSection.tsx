import GithubProjectsButton from "../../components/GithubProjectsButton";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { projects } from "../../data";

function ProjectsSection() {
  return (
    <section id="projects-section" className="max-w-5xl px-4 py-6">
      <SectionTitle title="Projects" />

      <div className="grid gap-16">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.id} index={index} />
        ))}
      </div>

      {/* More Projects Button */}
      <GithubProjectsButton />
    </section>
  );
}

export default ProjectsSection;
