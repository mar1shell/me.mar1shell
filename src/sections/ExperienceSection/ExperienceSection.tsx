import { experiences } from "../../data";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="max-w-5xl px-4 py-6">
      <SectionTitle title="Experience" delay={500} />

      <div className="grid gap-16">
        {experiences.map((exp, index) => (
          <ExperienceCard experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
