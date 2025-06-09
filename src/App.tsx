import SmoothFollower from "./components/common/SmoothFollower/SmoothFolllower";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";

function App() {
  return (
    <>
      <SmoothFollower />
      <div className="min-h-screen bg-gray-100 pt-12 font-sans transition-colors duration-500 dark:bg-gray-900">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
        </main>
      </div>
    </>
  );
}

export default App;
