import { personalInfo } from "../../data";
import { MailIcon } from "../../icons";

function GetInTouchButton() {
  return (
    <a
      href={`mailto:${personalInfo.email}`}
      className="group inline-flex items-center gap-2 rounded-full bg-blue-400 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 active:scale-95 dark:bg-green-400 dark:hover:shadow-green-400/25"
    >
      <MailIcon />
      Get In Touch
      <div className="h-2 w-2 rounded-full bg-gray-900 group-hover:animate-ping"></div>
    </a>
  );
}

export default GetInTouchButton;
