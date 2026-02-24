import "./about.css";

export default function About() {
  const skills = [
    "MERN Stack Development",
    "REST API Development",
    "MongoDB Database Design",
    "React Component Architecture",
    "DSA Problem Solving",
    "Performance Optimization",
  "Computational Thinking",
    "Logical Problem Analysis",
    "Performance Tuning",
    "Code Efficiency Techniques"
  ];

  const stats = [
    { number: "25+", label: "Portfolio Features" },
    { number: "10+", label: "Projects Built" },
    { number: "4th", label: "Semester IT Student" },
    { number: "4+", label: "Programming Languages" },
  ];

  return (
    <div className="about-container">
      {/* HERO */}
      <section className="about-hero">
        <h1 className="about-title">Farooq Sultan</h1>
        <p className="about-subtitle">
          MERN Stack Developer passionate about building scalable and
          user-focused web applications with modern technologies.
        </p>
      </section>

      {/* INFO CARDS */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I am a 4th semester IT student and full stack developer with
            experience in building production-ready applications using the MERN
            stack and modern development practices.
          </p>
        </div>

        <div className="about-card">
          <h3>My Mission</h3>
          <p>
            To create high-performance digital products that solve real-world
            problems while maintaining clean architecture and scalable design.
          </p>
        </div>

        <div className="about-card">
          <h3>What I Focus On</h3>
          <p>
            Writing maintainable code, optimizing performance, and delivering
            intuitive user experiences with modern UI patterns.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <h2 className="section-title">Core Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}