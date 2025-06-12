import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import NavBarLink from "../NavBarLink/NavBarLink";
import useScrollTop from "../../hooks/useScrollTop/useScrollTop";

export default function NavBar() {
  const [showNav, isNavTop] = useScrollTop();
  return (
    <nav
      className={`${showNav ? "translate-y-0" : "-translate-y-full"} ${isNavTop ? "py-2" : ""} fixed top-0 left-0 z-50 flex w-full justify-center bg-gray-200/10 shadow backdrop-blur-lg transition-all duration-300 dark:bg-gray-700/10`}
    >
      <div className="container flex max-w-200 items-center justify-between px-10">
        <NavBarLink href="#" className="" content="About me" />
        <NavBarLink href="#projects" className="" content="Projects" />
        <a
          href="#blog"
          className="flex items-center px-4 py-2 text-5xl font-bold text-gray-800 dark:text-white"
        >
          M1
        </a>
        <NavBarLink href="#contact" className="" content="Contact" />
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
