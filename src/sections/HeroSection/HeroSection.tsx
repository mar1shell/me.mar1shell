import Avatar from "../../components/Avatar/Avatar";
import HeroSectionContent from "../../components/HeroSectionContent/HeroSectionContent";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="grid min-h-screen grid-cols-1 items-center justify-center gap-4 px-4 py-10 max-md:text-center md:grid-cols-5 md:gap-8"
    >
      <Avatar alt="EL-HAMDAOUI MAROUANE" />
      <HeroSectionContent />
    </section>
  );
}

export default HeroSection;
