import React from 'react'
import './DeepLearningInternship.css'
import { useNavigate } from 'react-router-dom'

function DeepLearningInternship() {
  const navigate = useNavigate()

  return (
    <div className="dl-container">
      <header className="dl-header">
        <h1>Deep Learning Internship</h1>
        <p>Transform Your AI Skills with Hands-On Deep Learning Experience</p>
      </header>

      <section className="dl-section intro">
        <h2>Duration: 3 – 5 Months</h2>
        <p>
          This internship offers an immersive experience in cutting-edge Deep Learning technologies. Designed for those who want to gain industry-level expertise, the program includes detailed theoretical grounding, practical model building, and real-time project delivery. Interns will gain exposure to convolutional and recurrent neural networks, transformers, and deployment of AI models to cloud platforms.
        </p>
      </section>

      <section className="dl-section highlights">
        <h2>What You’ll Learn</h2>
        <ul>
          <li>Understand the core principles of artificial neural networks and backpropagation</li>
          <li>Build and train Convolutional Neural Networks (CNNs) for image recognition tasks</li>
          <li>Explore Recurrent Neural Networks (RNNs), LSTM, and GRU for sequential data analysis</li>
          <li>Dive into advanced Natural Language Processing using Transformers and Attention mechanisms</li>
          <li>Implement models in TensorFlow, Keras, and PyTorch from scratch and using pretrained architectures</li>
          <li>Apply techniques such as dropout, batch normalization, early stopping, and learning rate scheduling</li>
          <li>Deploy deep learning applications to cloud platforms and monitor performance metrics</li>
        </ul>
      </section>

      <section className="dl-section features">
        <h2>Internship Highlights</h2>
        <div className="dl-grid">
          <div className="dl-card">
            <h3>Hands-On Implementation</h3>
            <p>
              Every concept is accompanied by extensive code labs and Jupyter notebooks. You will build complete AI pipelines from data preprocessing to model inference and deployment.
            </p>
          </div>
          <div className="dl-card">
            <h3>1-on-1 Mentorship</h3>
            <p>
              Each intern receives personalized mentorship from experienced AI engineers. Weekly reviews, feedback sessions, and technical support ensure continuous learning and project growth.
            </p>
          </div>
          <div className="dl-card">
            <h3>Industry-Centric Projects</h3>
            <p>
              Apply your knowledge through guided projects in areas like image classification, object detection, facial recognition, language modeling, and sentiment analysis.
            </p>
          </div>
          <div className="dl-card">
            <h3>Recognized Certification</h3>
            <p>
              Upon successful completion, you will receive an industry-recognized certificate endorsed by the Ministry of MSME and StartupIndia—backing your expertise and project contributions.
            </p>
          </div>
        </div>
      </section>

      <section className="dl-section apply">
        <h2>Who Should Apply?</h2>
        <p>
          This program is ideal for students in their final year, recent graduates, and working professionals who have foundational knowledge of Python and machine learning. Familiarity with libraries like NumPy, pandas, and matplotlib is recommended. Whether you're preparing for advanced AI roles or planning to pursue research, this internship will provide the real-world foundation you need.
        </p>
        <button className="apply-btn" onClick={() => navigate('/services/internships/apply-now')}>Apply Now</button>
      </section>
    </div>
  )
}

export default DeepLearningInternship
