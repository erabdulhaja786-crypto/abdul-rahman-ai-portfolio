
import { useState } from "react";
import "./index.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Building intelligent solutions with machine learning concepts, model evaluation, and practical AI applications.",
    tags: ["Machine Learning", "Model Evaluation", "Data Processing"],
  },
  {
    number: "02",
    title: "Deep Learning",
    description:
      "Working with neural networks and deep learning workflows to solve real-world problems.",
    tags: ["Neural Networks", "CNN", "RNN"],
  },
  {
    number: "03",
    title: "Generative AI",
    description:
      "Developing LLM-powered applications, retrieval-based assistants, and agentic AI workflows.",
    tags: ["LLMs", "RAG", "Prompt Engineering"],
  },
  {
    number: "04",
    title: "AI Agents & Frameworks",
    description:
      "Designing structured AI workflows that plan tasks, generate code, inspect results, and recover from errors.",
    tags: ["LangChain", "LangGraph", "MCP"],
  },
  {
    number: "05",
    title: "Programming & Data",
    description:
      "Using Python and data tools to prepare datasets, implement logic, and build AI applications.",
    tags: ["Python", "NumPy", "Pandas"],
  },
  {
    number: "06",
    title: "Application Development",
    description:
      "Connecting AI capabilities to usable applications and presenting solutions through clear interfaces.",
    tags: ["REST APIs", "Streamlit", "React"],
  },
];

const projects = [
  {
    number: "01",
    category: "AGENTIC AI · SOFTWARE DEVELOPMENT",
    title: "Nexus Agentic Software Builder",
    description:
      "An agentic AI software-building workflow designed to transform user requirements into application files. Its workflow uses planning, architecture, code generation, testing, error analysis, and iterative fixes.",
    stack: ["Python", "LangGraph", "LangChain", "Groq"],
    github:
      "https://github.com/erabdulhaja786-crypto/nexus-agentic-software-builder",
    featured: true,
  },
  {
    number: "02",
    category: "AI AGENT · INTERACTIVE APPLICATION",
    title: "Sports Quiz Agent",
    description:
      "An interactive sports quiz project that demonstrates an AI-focused application workflow and a user-facing experience.",
    stack: ["Python", "AI", "Agent Workflow"],
    github: "https://github.com/erabdulhaja786-crypto/sports-quiz-agent",
    featured: false,
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="external-icon"
    >
      <path
        d="M14 4h6v6M20 4l-9 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">AR</span>
            <span className="brand-caption">AI ENGINEER</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}

            <a
              className="nav-github"
              href="https://github.com/erabdulhaja786-crypto"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub <ExternalIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="availability">
                <span className="availability-dot" />
                <span>AI ENGINEER · AI BUILDER</span>
              </div>

              <p className="eyebrow">HELLO, WORLD. I AM</p>

              <h1 className="hero-title">
                Abdul
                <br />
                <span>Rahman</span>
              </h1>

              <div className="hero-role">
                <span className="role-line" />
                <p>Building intelligent things with AI.</p>
              </div>

              <p className="hero-description">
                I build practical AI applications, LLM-powered tools, and
                agentic workflows that turn complex ideas into useful
                solutions.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#contact">
                  Let&apos;s connect
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/erabdulhaja786-crypto"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalIcon />
                </a>
                <span className="social-divider">/</span>
                <a
                  href="https://www.linkedin.com/in/abdul-rahman-9a54ab29b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-label visual-label-top">
                <span className="label-indicator" />
                PROFILE_001
              </div>

              <div className="portrait-frame">
                <div className="portrait-backdrop" />
                <div className="portrait-orbit orbit-one" />
                <div className="portrait-orbit orbit-two" />

                
              <img
                src="/profile.jpg"
                alt="Abdul Rahman — AI Engineer"
                className="profile-photo"
                onError={(event) => {
                  console.error("Photo failed to load:", event.currentTarget.src);
                  event.currentTarget.style.display = "none";
                }}
             />


                <div className="portrait-initials" aria-hidden="true">
                  AR
                </div>

                <div className="portrait-corner corner-top-left" />
                <div className="portrait-corner corner-bottom-right" />
              </div>

              <div className="visual-label visual-label-bottom">
                <span>CREATIVITY</span>
                <span className="label-divider" />
                <span>INTELLIGENCE</span>
              </div>

              <div className="floating-chip chip-ai">
                <span className="chip-symbol">✳</span>
                <span>
                  <strong>AI</strong>
                  <small>THINK · BUILD</small>
                </span>
              </div>

              <div className="floating-chip chip-code">
                <span className="code-symbol">&lt;/&gt;</span>
                <span>
                  <strong>BUILD</strong>
                  <small>IDEAS INTO REALITY</small>
                </span>
              </div>

              <span className="visual-index">01 — 04</span>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>MY DIGITAL SPACE</span>
          </div>
        </section>

        {/* MOVING SKILLS STRIP */}
        <div className="marquee" aria-label="Areas of interest">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy}>
                <span>ARTIFICIAL INTELLIGENCE</span>
                <i>✳</i>
                <span>MACHINE LEARNING</span>
                <i>✳</i>
                <span>GENERATIVE AI</span>
                <i>✳</i>
                <span>AGENTIC SYSTEMS</span>
                <i>✳</i>
                <span>LLM APPLICATIONS</span>
                <i>✳</i>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-index">01 / ABOUT</span>
              <span className="section-kicker">A LITTLE ABOUT ME</span>
            </div>

            <div className="about-grid">
              <h2 className="section-title about-title">
                Curious mind.
                <br />
                <span>Builder&apos;s mindset.</span>
                <br />
                Real-world impact.
              </h2>

              <div className="about-copy">
                <p className="about-lead">
                  I&apos;m Abdul Rahman, an aspiring AI Engineer passionate
                  about turning ideas into practical intelligent applications.
                </p>
                <p>
                  My focus is on Python, machine learning, deep learning,
                  generative AI, retrieval-augmented generation, and agentic
                  systems. I enjoy breaking complex problems into clear steps
                  and building solutions that are useful, understandable, and
                  testable.
                </p>
                <a className="text-link" href="#projects">
                  Discover my projects <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="principles-grid">
              <article className="principle-card">
                <span className="principle-number">01</span>
                <span className="principle-icon">⌘</span>
                <h3>Think in systems</h3>
                <p>Break complex problems into clear, connected steps.</p>
              </article>

              <article className="principle-card">
                <span className="principle-number">02</span>
                <span className="principle-icon">✳</span>
                <h3>Build with purpose</h3>
                <p>Focus on practical applications and meaningful outcomes.</p>
              </article>

              <article className="principle-card">
                <span className="principle-number">03</span>
                <span className="principle-icon">↗</span>
                <h3>Learn continuously</h3>
                <p>Improve through experimentation, testing, and iteration.</p>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <span className="section-index">02 / CAPABILITIES</span>
              <span className="section-kicker">TOOLS I WORK WITH</span>
            </div>

            <div className="skills-intro">
              <h2 className="section-title">
                My technical
                <br />
                <span>toolkit.</span>
              </h2>
              <p>
                A growing set of tools and concepts for building, evaluating,
                and connecting intelligent systems.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.number}>
                  <div className="skill-card-top">
                    <span className="skill-number">{skill.number}</span>
                    <ArrowIcon />
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="tag-list">
                    {skill.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="skills-note">
              * Skills listed reflect my areas of study and project experience.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <span className="section-index">03 / SELECTED WORK</span>
              <span className="section-kicker">IDEAS MADE TANGIBLE</span>
            </div>

            <div className="projects-intro">
              <h2 className="section-title">
                Things I've
                <br />
                <span>been building.</span>
              </h2>
              <p>
                A selection of AI projects exploring automation, intelligent
                workflows, and practical applications.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article
                  className={`project-card ${
                    project.featured ? "project-featured" : ""
                  }`}
                  key={project.number}
                >
                  <div className="project-number">{project.number}</div>

                  <div className="project-main">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tag-list project-tags">
                      {project.stack.map((item) => (
                        <span className="tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <ExternalIcon />
                    </a>
                  </div>

                  <a
                    className="project-arrow"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>

            <a
              className="all-projects-link"
              href="https://github.com/erabdulhaja786-crypto"
              target="_blank"
              rel="noreferrer"
            >
              Explore more on GitHub <ArrowIcon />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-decoration" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="contact-content">
                <span className="section-index">04 / GET IN TOUCH</span>
                <p className="contact-eyebrow">HAVE AN IDEA IN MIND?</p>
                <h2>
                  Let's build
                  <br />
                  something <span>intelligent.</span>
                </h2>
                <p className="contact-description">
                  Interested in AI, collaboration, or an exciting project?
                  Connect with me through LinkedIn or explore my work on GitHub.
                </p>

                <div className="contact-actions">
                  <a
                    className="button button-primary"
                    href="https://www.linkedin.com/in/abdul-rahman-9a54ab29b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect on LinkedIn <ExternalIcon />
                  </a>
                  <a
                    className="button button-secondary"
                    href="https://github.com/erabdulhaja786-crypto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit GitHub <ExternalIcon />
                  </a>
                </div>
              </div>

              <div className="contact-orb" aria-hidden="true">
                <span>AR</span>
                <i>✳</i>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">AR</span>
            <span className="brand-caption">AI ENGINEER</span>
          </a>

          <p>
            Designed with curiosity.
            <span> Built with intention.</span>
          </p>

          <a className="back-to-top" href="#home">
            BACK TO TOP ↑
          </a>

          <span className="footer-copyright">
            © {new Date().getFullYear()} Abdul Rahman
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
