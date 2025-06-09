import SmoothFollower from "./components/common/SmoothFollower/SmoothFolllower";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import ScrollDownIndicator from "./components/common/ScrollDownIndicator/ScrollDownIndicator";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <SmoothFollower />
      <div className="min-h-screen bg-gray-100 pt-12 font-sans transition-colors duration-500 dark:bg-gray-900">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <motion.div
            className="hidden items-center justify-center md:flex"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ScrollDownIndicator />
          </motion.div>
        </main>
      </div>
    </>
  );
}

export default App;
