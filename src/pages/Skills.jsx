import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiFlask, SiGithub, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
   return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-wrapper">

        {/* Frontend */}
        <div className="skill-group">
          <h3>Frontend</h3>
          <div className="skills-container">
            <div className="skill-box"><FaHtml5 /> <span>HTML</span></div>
            <div className="skill-box"><FaCss3Alt /> <span>CSS</span></div>
            <div className="skill-box"><FaJs /> <span>JavaScript</span></div>
            <div className="skill-box"><FaReact /> <span>React</span></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-group">
          <h3>Backend</h3>
          <div className="skills-container">
            <div className="skill-box"><FaPython /> <span>Python</span></div>
            <div className="skill-box"><SiFlask /> <span>Flask</span></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-group">
          <h3>Tools</h3>
          <div className="skills-container">
            <div className="skill-box"><FaGitAlt /> <span>Git</span></div>
            <div className="skill-box"><SiGithub /> <span>GitHub</span></div>
            <div className="skill-box"><VscVscode /> <span>VS Code</span></div>
            
          </div>
        </div>

      </div>
    </section>
  );
}