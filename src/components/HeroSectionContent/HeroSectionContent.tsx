import HeroCaption from "../../components/HeroCaption/HeroCaption";
import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";
import { heroCaptions } from "../../data";

function HeroSectionContent() {
  return (
    <div className="flex flex-col md:col-span-3" data-aos="fade-left">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl md:whitespace-nowrap dark:text-white">
        Hello, I'm{" "}
        <span className="inline-block bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 bg-clip-text pl-1 text-4xl text-transparent transition-all duration-500 md:text-5xl dark:from-teal-400 dark:via-lime-500 dark:to-green-600">
          Marouane
        </span>
      </h1>
      <h2 className="mb-6 text-lg font-semibold text-gray-700 md:text-xl dark:text-gray-300">
        I'm a Software Engineering Student and Fullsatck Devoloper
      </h2>

      <ul className="md:pl-5">
        {heroCaptions.map((caption, index) => (
          <HeroCaption key={index} content={caption.content} />
        ))}
      </ul>

      {/* Social media icons block */}
      <div className="flex items-center justify-center gap-6 md:justify-center">
        <SocialMediaBar />
      </div>
    </div>
  );
}

export default HeroSectionContent;
