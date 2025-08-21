import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import NavBarLink from "../NavBarLink/NavBarLink";
import useScrollTop from "../../hooks/useScrollTop/useScrollTop";

function NavBar() {
  const [showNav, isNavTop] = useScrollTop();

  return (
    <nav
      className={`z-2000 ${showNav ? "translate-y-0" : "-translate-y-full"} ${isNavTop ? "" : "bg-gray-200/40 dark:bg-gray-700/30"} fixed top-0 left-0 flex w-full items-center justify-between px-10 py-2 shadow backdrop-blur-lg transition-all duration-300 md:px-15 lg:px-20`}
    >
      <a
        href="/"
        className="interactive flex items-center text-4xl font-bold text-gray-800 md:text-5xl dark:text-white"
      >
        M1
      </a>
      <NavBarLink href="#about-me-section" content="About me" />
      <NavBarLink href="#projects-section" content="Projects" />
      <NavBarLink href="#experience-section" content="Experience" />
      <NavBarLink href="#contact-section" content="Contact" />
      <DarkModeSwitch />
    </nav>
  );
}

export default NavBar;
