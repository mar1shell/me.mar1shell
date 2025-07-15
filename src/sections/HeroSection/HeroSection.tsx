import Avatar from "../../components/Avatar/Avatar";
import ScrollDownIndicator from "../../components/common/ScrollDownIndicator/ScrollDownIndicator";
import HeroCaption from "../../components/HeroCaption/HeroCaption";
import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";
import { heroCaptions } from "../../utils/data";

export default function HeroSection() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-between pt-20 pb-10">
      <section
        id="hero-section"
        className="grid grid-cols-1 items-center justify-center py-5 max-md:text-center md:grid-cols-5 md:gap-8 md:py-9"
      >
        <Avatar />
        <div
          className="col-span-1 flex flex-col max-md:pt-10 md:col-span-3"
          data-aos="fade-left"
        >
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl md:whitespace-nowrap dark:text-white">
            Hello, I'm{" "}
            <span className="inline-block bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 bg-clip-text pl-1 text-5xl text-transparent transition-all duration-500 dark:from-teal-400 dark:via-lime-500 dark:to-green-600">
              Marouane
            </span>
          </h1>
          <h2 className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-300">
            I'm a Software Engineering Student and Fullsatck Devoloper
          </h2>

          <ul className="hidden md:block md:pl-5">
            {heroCaptions.map((caption, index) => (
              <HeroCaption key={index} content={caption.content} />
            ))}
          </ul>

          {/* Social media icons block */}
          <div className="flex items-center justify-center gap-6 md:justify-center">
            <SocialMediaBar />
          </div>
        </div>
      </section>
      <div className="flex w-full items-center justify-center">
        <ScrollDownIndicator />
      </div>
    </div>
  );
}
