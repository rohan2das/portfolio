function About() {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <p className="section-label">ABOUT</p>
        <h2>Building across software, AI, and hardware.</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a software developer interested in building systems at the
            intersection of software, artificial intelligence, and hardware.
          </p>

          <p>
            My work spans backend development, computer vision, edge AI,
            embedded systems, and intelligent applications. I've worked on
            projects ranging from autonomous drone systems and real-time
            object detection to backend services and data-driven dashboards.
          </p>

          <p>
            I'm also exploring LLMs, RAG, generative AI, and workflow
            automation, while strengthening my skills in modern web
            development, deployment, and cloud infrastructure.
          </p>
        </div>

        <div className="about-focus">
          <div className="focus-item">
            <span>01</span>
            <div>
              <h3>AI & Computer Vision</h3>
              <p>
                Object detection, deep learning, real-time inference,
                and edge deployment.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>02</span>
            <div>
              <h3>Backend Engineering</h3>
              <p>
                REST APIs, Spring Boot, Python services, databases,
                and application architecture.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>03</span>
            <div>
              <h3>Embedded & Autonomous Systems</h3>
              <p>
                Raspberry Pi, Pixhawk, Edge TPU, sensors, and
                hardware-software integration.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>04</span>
            <div>
              <h3>Intelligent Applications</h3>
              <p>
                LLMs, RAG, automation, data analytics, and
                AI-powered applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About