export default function About() {
  return (
    <section id="about" className="about">

      <h2>About Me</h2>

      <div className="about-container">

        {/* IMAGE */}
        <div className="about-img">
          <img src="/images/profile.jpg" alt="Profile" />
        </div>

        {/* TEXT */}
        <div className="about-content">

          <p className="about-text">
            I am a Computer Science Engineering student passionate about building
            full-stack web applications. I enjoy learning new technologies and
            turning ideas into real-world projects.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <h3>🎯 Goal</h3>
              <p>Become a skilled full-stack developer.</p>
            </div>

            <div className="about-card">
              <h3>💻 Skills</h3>
              <p>HTML, CSS, JavaScript, React, Python, Flask</p>
            </div>

            <div className="about-card">
              <h3>🚀 Interests</h3>
              <p>Web dev, UI/UX, AI tools, automation</p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}