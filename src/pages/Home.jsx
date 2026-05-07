import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <section id="home" className="hero">
      <h1>
        Hi, I'm <span style={{ color: "#38bdf8" }}>Niranjana M👋</span>
      </h1>

      <h2 style={{ color: "#94a3b8" }}>
  <Typewriter
    words={[
      "Full Stack Developer",
      "React Developer",
      "Python Developer",
      "Frontend Enthusiast"
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1200}
  />
</h2>

      <p>
        I build responsive web applications using React, JavaScript, and Python.
        I enjoy turning ideas into real projects.
      </p>

      <div style={{ marginTop: "25px" }}>
        <a href="#projects" className="btn">
  View Projects
</a>

<a href="/resume.pdf" download="Niranjana_Resume.pdf" className="btn">
  Download Resume
</a>
      </div>
    </section>
  );
}
