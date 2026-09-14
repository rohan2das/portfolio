import skills from "../data/skills"

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p className="section-label">SKILLS</p>

        <h2>
          Technologies I use to build
          software and intelligent systems.
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills