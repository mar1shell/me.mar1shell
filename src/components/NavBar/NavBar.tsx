import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import NavBarLink from "../NavBarLink/NavBarLink";
import useScrollTop from "../../hooks/useScrollTop/useScrollTop";

export default function NavBar() {
  const [showNav, isNavTop] = useScrollTop();
  return (
    <nav
      className={`z-2000 ${showNav ? "translate-y-0" : "-translate-y-full"} ${isNavTop ? "py-2" : ""} fixed top-0 left-0 w-full bg-gray-200/10 shadow backdrop-blur-lg transition-all duration-300 dark:bg-gray-700/10`}
    >
      <div className="flex items-center justify-between px-10 md:px-30">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-5xl font-bold text-gray-800 dark:text-white"
        >
          M1
        </a>
        <NavBarLink href="#about-me-section" className="" content="About me" />
        <NavBarLink href="#projects-section" className="" content="Projects" />
        <NavBarLink
          href="#experience-section"
          className=""
          content="Experience"
        />
        <NavBarLink href="#contact-section" className="" content="Contact" />
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
