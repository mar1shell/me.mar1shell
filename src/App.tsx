import SmoothFollower from "./components/SmoothFollower/SmoothFolllower";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutMeSection from "./sections/AboutMeSection/AboutMeSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-12 font-sans transition-colors duration-500 dark:bg-gray-900">
        <NavBar />
        <main className="container mx-auto flex flex-col items-center justify-center gap-5 px-4 py-8">
          <HeroSection />
          <AboutMeSection />
          <ProjectsSection />
        </main>
      </div>
      <SmoothFollower />
    </>
  );
}

export default App;
