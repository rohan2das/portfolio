function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-content">
        <p className="section-label">CONTACT</p>

        <h2>
          Let's build something
          interesting.
        </h2>

        <p className="contact-description">
          I'm open to conversations about software engineering,
          AI, computer vision, backend development, embedded
          systems, and interesting technical projects.
        </p>

        <a
          className="contact-email"
          href="mailto:your-email@example.com"
        >
          your-email@example.com ↗
        </a>

        <div className="contact-links">
          <a href="#" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact