function AboutPage() {
  return (
    <div className="page">
      <section className="about-hero">
        <span className="about-badge">About</span>
        <h1 className="about-hero-title">Built for USICT students, by a USICT student.</h1>
        <p className="about-hero-text">
          StudyUSICT brings everything you need for GGSIPU / USICT — past papers, notes,
          curated video lectures, a GPA calculator, a jobs board, and an AI study tutor —
          into one clean, fast portal.
        </p>
      </section>

      <div className="about-body">
        <section className="about-block">
          <h2 className="about-h2">About the project</h2>
          <p>
            StudyUSICT was created by <strong>Akshat Saroha</strong>, a student at USICT,
            GGSIPU. It started from a simple idea: pull all the scattered resources a student
            actually needs into one place, and make it genuinely pleasant to use.
          </p>
          <p>
            It's a full-stack application built from the ground up — a React front-end, a
            Node.js and Express back-end, and a PostgreSQL database, with secure login via
            email/password and Google, plus an AI tutor powered by Google's Gemini that adapts
            to your branch and semester.
          </p>
        </section>

        <section className="about-block">
          <h2 className="about-h2">Get in touch</h2>
          <p>Questions, ideas, or want to collaborate? Reach out through any of these:</p>
          <div className="contact-grid">
            <a className="contact-card" href="https://github.com/akshat0011" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.3v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
              <div>
                <span className="contact-label">GitHub</span>
                <span className="contact-value">@akshat0011</span>
              </div>
            </a>
            <a className="contact-card" href="https://linkedin.com/in/akshatsaroha" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.5H5.67V18h2.67V9.5zM7 6.06a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zM18.34 18v-4.67c0-2.5-1.34-3.66-3.12-3.66-1.44 0-2.08.79-2.44 1.35V9.5h-2.67V18h2.67v-4.41c0-.23.02-.47.09-.64.18-.47.61-.95 1.33-.95.94 0 1.31.71 1.31 1.76V18h2.67z"/></svg>
              <div>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Akshat Saroha</span>
              </div>
            </a>
            <a className="contact-card" href="mailto:akshat@studyusict.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">akshat@studyusict.com</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;