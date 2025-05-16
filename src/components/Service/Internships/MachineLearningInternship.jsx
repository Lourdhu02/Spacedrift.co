import React from 'react'
import './MachineLearningInternship.css'
import { useNavigate } from 'react-router-dom'

function MachineLearningInternship() {
  const navigate = useNavigate()
  return (
    <div className="ml-container">
      <header className="ml-header">
        <h1>Machine Learning <strong>Internship</strong></h1>
        <p>Build Predictive Intelligence Through Core ML Concepts and Practical Application</p>
      </header>

      <section className="ml-section intro">
        <h2>Duration: 3–5 Months</h2>
        <p>
          This intensive internship equips aspiring ML engineers and data enthusiasts with the theoretical foundation and applied skills to solve complex data-driven problems. Participants will gain proficiency in building, evaluating, and deploying machine learning models, supported by real-world datasets and mentor-led guidance.
        </p>
      </section>

      <section className="ml-section highlights">
        <h2>What You’ll Learn</h2>
        <ul>
          <li>Fundamentals of Supervised and Unsupervised Learning: regression, classification, and clustering techniques</li>
          <li>Model performance evaluation through cross-validation and tuning hyperparameters for optimal outcomes</li>
          <li>Working with advanced algorithms including Decision Trees, Random Forests, XGBoost, and LightGBM</li>
          <li>Implementing feature selection, engineering, and dimensionality reduction using PCA and LDA</li>
          <li>Building end-to-end ML workflows using Scikit-learn and MLflow</li>
          <li>Deploying machine learning models with Flask and Streamlit for web-based interaction</li>
        </ul>
      </section>

      <section className="ml-section features">
        <h2>Internship Highlights</h2>
        <div className="ml-grid">
          <div className="ml-card">
            <h3>Project-Based Learning</h3>
            <p>
              Apply each concept to practical business problems including customer churn analysis, fraud detection, demand forecasting, and recommendation systems.
            </p>
          </div>
          <div className="ml-card">
            <h3>Dedicated Mentor Support</h3>
            <p>
              Receive direct feedback and technical support through scheduled live sessions, code reviews, and personalized career guidance.
            </p>
          </div>
          <div className="ml-card">
            <h3>Capstone Projects</h3>
            <p>
              Complete multiple end-to-end projects and showcase them on GitHub and your professional portfolio to strengthen your job readiness.
            </p>
          </div>
          <div className="ml-card">
            <h3>Industry-Recognized Certification</h3>
            <p>
              Earn a verified certificate from Spacedrift, accredited by MSME and StartupIndia, adding credibility to your resume and LinkedIn profile.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-section apply">
        <h2>Who Should Apply?</h2>
        <p>
          This internship is best suited for students pursuing degrees in Computer Science, IT, or related fields, as well as working professionals seeking to pivot into data roles. Applicants should have a basic understanding of Python, linear algebra, and statistics.
        </p>
        <button className="apply-btn" onClick={() => navigate('/services/internships/apply-now')}>Apply Now</button>
      </section>
    </div>
  )
}

export default MachineLearningInternship
