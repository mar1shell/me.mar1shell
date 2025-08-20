import Avatar from "../../components/Avatar/Avatar";
import HeroSectionContent from "../../components/HeroSectionContent/HeroSectionContent";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="grid min-h-screen grid-cols-1 items-center justify-center gap-6 py-20 max-md:text-center md:grid-cols-5 md:gap-8 md:py-0"
    >
      <Avatar alt="EL-HAMDAOUI MAROUANE" />
      <HeroSectionContent />
    </section>
  );
}
