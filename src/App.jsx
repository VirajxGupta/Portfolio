import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-purple-500 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm bg-dark border-t border-gray-800">
        <p>© {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
