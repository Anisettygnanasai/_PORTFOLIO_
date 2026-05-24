import {
  useEffect,
  useState,
} from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import GithubStats from "./components/GithubStats";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0f172a] text-white overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <Particles />
      <CursorGlow />
      <ScrollProgress />

      {/* MAIN CONTENT */}
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <GithubStats />

      <Projects />

      <Certifications />

      <Resume />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;