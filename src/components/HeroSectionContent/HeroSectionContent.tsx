import HeroCaption from "../../components/HeroCaption/HeroCaption";
import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";
import BookMeetingButton from "../../components/BookMeetingButton/BookMeetingButton";
import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton";
import { heroCaptions } from "../../data";

function HeroSectionContent() {
  return (
    <div className="flex flex-col md:col-span-3" data-aos="fade-left">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl md:whitespace-nowrap dark:text-white">
        Hello, I'm{" "}
        <span className="inline-block bg-gradient-to-tr from-blue-800 via-indigo-600 to-cyan-700 bg-clip-text pl-1 text-4xl font-extrabold text-transparent drop-shadow-sm transition-all duration-500 md:text-5xl dark:from-teal-400 dark:via-lime-500 dark:to-green-600">
          Marouane
        </span>
      </h1>
      <h2 className="mb-6 text-lg font-semibold text-gray-700 md:text-xl dark:text-gray-300">
        I'm a Software Engineering Student and Fullsatck Devoloper
      </h2>

      <ul className="mb-6 md:pl-5">
        {heroCaptions.map((caption, index) => (
          <HeroCaption key={index} content={caption.content} />
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
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
