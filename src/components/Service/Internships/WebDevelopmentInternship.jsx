import React from 'react'
import './WebDevelopmentInternship.css'
import { useNavigate } from 'react-router-dom'

function WebDevelopmentInternship() {
  const navigate = useNavigate()
  return (
    <div className="webdev-container">
      <header className="webdev-header">
        <h1>Web Development Internship</h1>
        <p>Develop Full-Stack Web Applications with Modern Frameworks and Real-World Deployments</p>
      </header>

      <section className="webdev-section intro">
        <h2>Duration: 3–4 Months</h2>
        <p>
          This internship is tailored for aspiring developers looking to gain real-world experience in building full-stack web applications. From frontend interfaces to backend logic and deployment pipelines, participants will work on practical projects using modern technologies such as React, Flask, Node.js, and RESTful APIs.
        </p>
      </section>

      <section className="webdev-section highlights">
        <h2>What You’ll Learn</h2>
        <ul>
          <li>Frontend development using React.js, JSX, Tailwind CSS, and component-driven design</li>
          <li>Backend development with Flask (Python) and Node.js including API design and database integration</li>
          <li>Connecting frontend and backend using RESTful APIs and asynchronous data handling</li>
          <li>Version control and collaborative coding using Git and GitHub</li>
          <li>Authentication, form handling, and session management for real-time applications</li>
          <li>Deployment using platforms like Vercel, Render, or Heroku</li>
        </ul>
      </section>

      <section className="webdev-section features">
        <h2>Internship Highlights</h2>
        <div className="webdev-grid">
          <div className="webdev-card">
            <h3>Real Project Development</h3>
            <p>
              Work on capstone projects such as portfolio websites, dashboards, SaaS platforms, and e-commerce stores from start to finish.
            </p>
          </div>
          <div className="webdev-card">
            <h3>Mentor-Guided Sessions</h3>
            <p>
              Weekly live coding sessions and personalized code reviews to reinforce core concepts and best practices.
            </p>
          </div>
          <div className="webdev-card">
            <h3>DevOps Exposure</h3>
            <p>
              Learn how to host, deploy, and manage your web apps using CI/CD practices and cloud services.
            </p>
          </div>
          <div className="webdev-card">
            <h3>Certification of Completion</h3>
            <p>
              Receive a certificate recognized by MSME and StartupIndia to strengthen your professional portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="webdev-section apply">
        <h2>Who Can Apply?</h2>
        <p>
          This program is ideal for students, recent graduates, or self-taught developers with a basic understanding of HTML, CSS, and JavaScript. No prior backend experience is required—our structured learning path will guide you through the full stack.
        </p>
        <button className="apply-btn" onClick={() => navigate('/services/internships/apply-now')}>Apply Now</button>
      </section>
    </div>
  )
}

export default WebDevelopmentInternship
