import { useEffect, useState } from "react";

/**
 * Custom hook to manage scroll behavior for showing/hiding elements based on scroll position.
 * This hook tracks the scroll position and determines whether to show an element
 * or not, as well as whether the user is at the top of the page.
 * if the user is at the top of the page, the element will always be shown.
 * if the user scrolls down, the element will be hidden,
 * if the user scrolls up, the element will be shown again.
 * @returns {Array} - An array containing two boolean values:
 *   - `show`: Indicates whether the element should be shown.
 *   - `isTop`: Indicates whether the user is at the top of the page.
 */

export default function useScrollTop(): [boolean, boolean] {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        // At the top: always show
        setIsTop(true);
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsTop(false);
        setShow(false);
      } else {
        // Scrolling up
        setIsTop(false);
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return [show, isTop];
}
