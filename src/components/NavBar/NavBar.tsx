import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

import { MenuIcon } from "../../utils/icons";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavTop, setIsNavTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // At the top: always show
        setIsNavTop(true);
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavTop(false);
        setShowNav(false);
      } else {
        // Scrolling up
        setIsNavTop(false);
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={`${showNav ? "translate-y-0" : "-translate-y-full"} ${isNavTop ? "py-2" : ""} fixed top-0 left-0 z-50 flex w-full justify-center bg-gray-200/10 shadow backdrop-blur-lg transition-all duration-300 dark:bg-gray-700/10`}
    >
      <div className="container flex max-w-200 items-center justify-between px-10">
        <div className="block md:hidden dark:text-white">
          <MenuIcon />
        </div>

        <a
          href="#"
          className="hidden items-center px-4 py-2 text-gray-800 md:flex dark:text-white"
        >
          About me
        </a>
        <a
          href="#projects"
          className="hidden items-center px-4 py-2 text-gray-800 md:flex dark:text-white"
        >
          Projects
        </a>
        <a
          href="#blog"
          className="flex items-center px-4 py-2 text-5xl font-bold text-gray-800 dark:text-white"
        >
          M1
        </a>
        <a
          href="#contact"
          className="hidden items-center px-4 py-2 text-gray-800 md:flex dark:text-white"
        >
          Contact
        </a>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
