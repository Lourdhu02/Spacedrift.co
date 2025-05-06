import React from 'react'
import './DataScienceInternship.css'
import { useNavigate } from 'react-router-dom'

function DataScienceInternship() {

  const navigate = useNavigate()
  return (
    <div className="ds-container">
      <header className="ds-header">
        <h1>Data Science Internship</h1>
        <p>Master the End-to-End Data Science Pipeline through Real Projects</p>
      </header>

      <section className="ds-section intro">
        <h2>Duration: 3 Months</h2>
        <p>
          This 3-month internship provides a structured learning path for individuals aiming to break into the data science domain. With a strong focus on applied learning, participants will work on real business problems while developing technical expertise in data handling, modeling, and interpretation.
        </p>
      </section>

      <section className="ds-section highlights">
        <h2>What You’ll Learn</h2>
        <ul>
          <li>Perform comprehensive Exploratory Data Analysis (EDA) to uncover hidden patterns</li>
          <li>Clean, preprocess, and transform datasets for optimal model performance</li>
          <li>Visualize insights using tools like Seaborn, Matplotlib, and Plotly</li>
          <li>Build predictive models using regression, classification, and clustering algorithms</li>
          <li>Understand feature engineering techniques for enhancing model accuracy</li>
          <li>Evaluate model performance using appropriate metrics and validation strategies</li>
          <li>Deploy end-to-end machine learning pipelines with version control and performance reporting</li>
        </ul>
      </section>

      <section className="ds-section features">
        <h2>Internship Highlights</h2>
        <div className="ds-grid">
          <div className="ds-card">
            <h3>Real-World Datasets</h3>
            <p>
              Gain exposure to diverse datasets across domains like healthcare, e-commerce, and banking. Learn how to extract actionable insights from complex, messy data.
            </p>
          </div>
          <div className="ds-card">
            <h3>1-on-1 Mentorship</h3>
            <p>
              Personalized guidance from industry professionals ensures your questions are addressed, your work is reviewed, and you're progressing at the right pace.
            </p>
          </div>
          <div className="ds-card">
            <h3>Portfolio-Ready Projects</h3>
            <p>
              Build a professional GitHub portfolio with case studies such as customer segmentation, fraud detection, loan risk analysis, and predictive analytics.
            </p>
          </div>
          <div className="ds-card">
            <h3>Professional Certification</h3>
            <p>
              Upon completion, receive a certificate recognized by MSME and StartupIndia—ideal for resumes, LinkedIn profiles, and job applications.
            </p>
          </div>
        </div>
      </section>

      <section className="ds-section apply">
        <h2>Who Should Apply?</h2>
        <p>
          This internship is perfect for final-year students, recent graduates, and professionals transitioning into data roles. Applicants should have a basic understanding of Python and a genuine interest in data-driven problem-solving. No prior experience in machine learning is required, though familiarity with libraries such as pandas and NumPy will be beneficial.
        </p>
        <button className="apply-btn" onClick={() => navigate('/services/internships/apply-now')}>Apply Now</button>
      </section>
    </div>
  )
}

export default DataScienceInternship
