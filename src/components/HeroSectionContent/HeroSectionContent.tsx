import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";
import BookMeetingButton from "../../components/BookMeetingButton/BookMeetingButton";
import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton";
import GlitchText from "../GlithText/GlitchText";
import TypewriterText from "../TypewriterText/TypewriterText";
import { glitchText, typewriterText } from "../../data";

function HeroSectionContent() {
  return (
    <div
      className="flex flex-col items-center text-center md:col-span-3"
      data-aos="fade-up"
    >
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
        Hello, I'm <br className="md:hidden" />
        <GlitchText
          text={glitchText}
          className="font-display bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl dark:from-green-400 dark:via-emerald-400 dark:to-teal-400"
        />
      </h1>

      <h2 className="mb-8 h-8 text-xl font-medium text-gray-700 md:text-2xl dark:text-gray-300">
        I'm <TypewriterText strings={typewriterText} />
      </h2>

      {/* Action Buttons */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <BookMeetingButton />
        <GetInTouchButton />
      </div>

      {/* Social media icons block */}
      <div className="flex items-center justify-center gap-6">
        <SocialMediaBar />
      </div>
    </div>
  );
}

export default HeroSectionContent;
