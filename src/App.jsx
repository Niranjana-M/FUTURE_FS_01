import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}