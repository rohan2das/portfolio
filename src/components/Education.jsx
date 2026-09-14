function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-heading">
        <p className="section-label">EDUCATION</p>

        <h2>
          Academic foundation in
          computer science and engineering.
        </h2>
      </div>

      <div className="education-list">

        <article className="education-item">
          <div className="education-meta">
            <span>2022 — Present</span>
            <span>Jadavpur University</span>
          </div>

          <div className="education-content">
            <h3>B.Tech — Computer Science & Engineering</h3>

            <p>
              Coursework includes Data Structures & Algorithms,
              Operating Systems, Computer Architecture, and
              Object-Oriented Programming.
            </p>
          </div>
        </article>


        <article className="education-item">
          <div className="education-meta">
            <span>2018 — 2021</span>
            <span>BPC Institute of Technology</span>
          </div>

          <div className="education-content">
            <h3>Diploma — Electrical Engineering</h3>

            <p>
              Foundation in electrical engineering, hardware,
              electronics, and embedded systems.
            </p>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Education