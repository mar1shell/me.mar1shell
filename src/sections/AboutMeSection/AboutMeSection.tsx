import TerminalTemplate from "../../components/TerminalTemplate/TerminalTemplate";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { terminalData } from "../../data";

export default function AboutMeSection() {
  return (
    <section
      id="about-me-section"
      className="flex flex-col items-center justify-center px-4 py-6"
    >
      <SectionTitle title="About Me" />
      <div data-aos="fade-up" className="w-full">
        <TerminalTemplate {...terminalData} />
      </div>
    </section>
  );
}
