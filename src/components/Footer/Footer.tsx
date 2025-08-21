import { personalInfo, socialMediaIcons2, stats } from "../../data";
import { HeartIcon, MapPinIcon } from "../../icons";
import SocialMediaIcon2 from "../SocialMediaIcon2/SocialMediaIcon2";
import Stats from "../Stats";
import GetInTouchButton from "../GetInTouchButton";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Top Section - Brand & CTA */}
      <div className="mb-12 text-center sm:mb-16" data-aos="fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-green-900/30 dark:text-green-400">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
          Available for new opportunities
        </div>

        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Let's build something{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-500">
            amazing
          </span>{" "}
          together
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Ready to turn your ideas into reality? Let's connect and create
          something extraordinary.
        </p>

        <GetInTouchButton />
      </div>

      {/* Stats Section */}
      <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:grid-cols-3 sm:gap-8">
        {stats.map((stat, index) => (
          <Stats key={index} index={index} stat={stat} />
        ))}
      </div>

      {/* Social Links */}
      <div className="mb-12 flex justify-center gap-4">
        {socialMediaIcons2.map((social, index) => (
          <SocialMediaIcon2 key={index} social={social} index={index} />
        ))}
      </div>

      {/* Bottom Section */}
      <div
        className="border-t border-gray-400/70 pt-8 text-center dark:border-slate-700/50"
        data-aos="zoom-in"
      >
        <div className="mb-4 flex flex-col items-center justify-center gap-2 text-gray-600 sm:flex-row dark:text-gray-400">
          <span>
            © {currentYear}{" "}
            <a
              href={personalInfo.socialMedia.github}
              target="_blank"
              className="interactive font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-green-400"
            >
              Mar1shell
            </a>
          </span>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <HeartIcon />
            <span>in Casablanca, Morocco</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-500">
          <MapPinIcon />
          <span>Based in Morocco, Working Globally</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
