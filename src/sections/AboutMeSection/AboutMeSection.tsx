import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BentoGrid from "../../components/BenToGrid/BentoGrid";

function AboutMeSection() {
  return (
    <section id="about-me-section" className="max-w-5xl px-4 py-6">
      <SectionTitle title="About Me" />

      <div className="mt-10 h-auto md:h-[400px]">
        <BentoGrid />
      </div>
    </section>
  );
}

export default AboutMeSection;
