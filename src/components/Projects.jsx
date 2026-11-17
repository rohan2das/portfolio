import projects from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p className="section-label">PROJECTS</p>

        <h2>
          Things I've built and
          experimented with.
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>
                  GitHub ↗
                </a>

                {/* <a href={project.demo}>
                  Demo ↗
                </a> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects