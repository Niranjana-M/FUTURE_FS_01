const projects = [
  {
    title: "Smart Task Manager",
    description: "A task management app with add, delete, and tracking features.",
    tech: "React, CSS, JavaScript",
    github: "https://github.com/Niranjana-M/smart-task-manager",
    
  },
  {
    title: "Trading Bot",
    description: "Python-based Binance futures trading bot using API.",
    tech: "Python, API",
    github: "https://github.com/Niranjana-M/trading-bot-binance",
   
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>

            <div className="buttons">
              <a href={project.github} target="_blank">GitHub</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;