import { motion } from "motion/react";
import "./ScrollDownIndicator.css";

const ScrollDownIndicator = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className="interactive scrolldown cursor-pointer"
      onClick={handleScroll}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3, delay: 0 },
      }}
    >
      <div className="chevrons">
        <div className="chevrondown" />
        <div className="chevrondown" />
      </div>
    </motion.div>
  );
};

export default ScrollDownIndicator;
