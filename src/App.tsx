import SmoothFollower from "./components/SmoothFollower/SmoothFolllower";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutMeSection from "./sections/AboutMeSection/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="overflow-x-hidden bg-gray-100 font-sans transition-colors duration-500 dark:bg-gray-900">
        <NavBar />
        <main className="container mx-auto flex flex-col items-center justify-center gap-5 px-4">
          <HeroSection />
          <AboutMeSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
          <ScrollToTop />
        </main>
      </div>
      <SmoothFollower />
    </>
  );
}

export default App;
