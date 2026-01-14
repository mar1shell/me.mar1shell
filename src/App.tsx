import SmoothFollower from "./components/SmoothFollower/SmoothFolllower";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutMeSection from "./sections/AboutMeSection/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import useAosEffect from "./hooks/useAosEffect/useAosEffect";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import AchievementsSection from "./sections/AchievementsSection/AchievementsSection";

function App() {
  useAosEffect();

  return (
    <>
      <div className="overflow-x-hidden font-sans transition-colors duration-500">
        <AnimatedBackground />
        <NavBar />
        <main className="container mx-auto flex flex-col items-center justify-center px-4">
          <HeroSection />
          <AboutMeSection />
          <AchievementsSection />
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
