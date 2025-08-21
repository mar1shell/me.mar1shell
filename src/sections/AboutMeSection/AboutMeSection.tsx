import TerminalTemplate from "../../components/TerminalTemplate/TerminalTemplate";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { terminalData } from "../../data";

function AboutMeSection() {
  return (
    <section id="about-me-section" className="max-w-5xl px-4 py-6">
      <SectionTitle title="About Me" />

      <TerminalTemplate {...terminalData} />
    </section>
  );
}

export default AboutMeSection;
