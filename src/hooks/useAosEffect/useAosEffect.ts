import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Custom hook to initialize AOS (Animate On Scroll) library.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @param {boolean} once - Whether the animation should happen only once.
 * @param {number} delay - Delay before the animation starts in milliseconds.
 */
function useAosEffect(duration = 1000, once = true, delay = 200) {
  useEffect(() => {
    AOS.init({
      duration,
      once,
      delay,
    });
  }, [duration, delay, once]);
}

export default useAosEffect;
