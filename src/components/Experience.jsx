function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <p className="section-label">EXPERIENCE</p>

        <h2>
          Professional experience across
          software, data, automation, and engineering.
        </h2>
      </div>

      <div className="experience-list">

        <article className="experience-item">
          <div className="experience-meta">
            <span>2026 — Present</span>
            <span>Mphasis</span>
          </div>

          <div className="experience-content">
            <h3>Software Engineer</h3>

            <div className="experience-technologies">
              Power BI · Excel · CSV · Data Modeling ·
              Power Automate · Python
            </div>

            <p>
              Building executive Power BI dashboards using Excel and
              CSV data sources, defining data relationships and models,
              and developing automated workflows with Power Automate
              and Python.
            </p>
          </div>
        </article>


        <article className="experience-item">
          <div className="experience-meta">
            <span>2025</span>
            <span>Mphasis</span>
          </div>

          <div className="experience-content">
            <h3>Software Engineer Intern</h3>

            <div className="experience-technologies">
              Java · Spring Boot · SQL · JUnit
            </div>

            <p>
              Worked on process automation and backend development
              using Spring Boot and SQL, building REST-based services
              and writing unit tests with JUnit.
            </p>
          </div>
        </article>


        <article className="experience-item">
          <div className="experience-meta">
            <span>2021 — 2022</span>
            <span>Infosys</span>
          </div>

          <div className="experience-content">
            <h3>Operations Executive</h3>

            <div className="experience-technologies">
              Application Support · Mainframe
            </div>

            <p>
              Provided Level 2 application support for enterprise
              systems, investigating application issues and
              supporting production operations.
            </p>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Experience