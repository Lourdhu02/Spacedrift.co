import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Icosahedron, MeshWobbleMaterial } from '@react-three/drei'
import './PredictiveAnalytics.css'
import { FaPython, FaChartLine, FaTools, FaServer, FaChartBar } from 'react-icons/fa'
import Contact from '../Contact/Contact'

const slideVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
}
function HeroVisualization() {
  return (
    <Canvas className="hero-canvas" camera={{ position: [0, 0, 3], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <Icosahedron args={[1.3, 0]}>
        <MeshWobbleMaterial
          factor={0.6}
          speed={1}
          color="#FF6B2D"
          attach="material"
        />
      </Icosahedron>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

function PredictiveAnalytics() {
  return (
    <motion.section
      className="predictive-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-3d-wrapper">
        <HeroVisualization />
      </div>

      <div className="container">
        <div className='hero-text'>
        <h1 className="title">AI-Powered Predictive Analytics</h1>
        <p className="intro">
          Predictive analytics leverages historical data, statistical algorithms, and machine learning to forecast future events. At Spacedrift, we build custom predictive models to help businesses anticipate outcomes, make informed decisions, and gain competitive advantage.
        </p>
        </div>


   <div className="section">
        <h2>Our Offerings</h2>
   </div>

        <div className="cards-grid">
  <div className="offer-card">
    <h3>Sales Forecasting</h3>
    <p>We use historical sales data and seasonal trends to build models that predict future sales. This helps businesses optimize inventory, allocate marketing budgets, and set strategic targets with confidence.</p>
  </div>
  <div className="offer-card">
    <h3>Customer Churn Prediction</h3>
    <p>Our models analyze behavioral, transactional, and demographic data to detect customers likely to leave. By identifying churn risks early, you can take proactive steps to improve retention and loyalty.</p>
  </div>
  <div className="offer-card">
    <h3>Risk Scoring & Fraud Detection</h3>
    <p>We assess transactional risk and flag anomalies using classification models, decision trees, and ensemble learning. This is vital for financial institutions, e-commerce platforms, and insurance companies to prevent fraud and mitigate risk.</p>
  </div>
  <div className="offer-card">
    <h3>Inventory Demand Forecasting</h3>
    <p>We develop time-series and regression-based models that help businesses maintain optimal inventory levels. Accurate demand forecasts minimize holding costs, stockouts, and overproduction.</p>
  </div>
  <div className="offer-card">
    <h3>Predictive Maintenance for IoT/Manufacturing</h3>
    <p>We analyze sensor and log data from machinery to predict failures before they occur. This reduces downtime, extends equipment life, and enhances operational efficiency for factories and smart industries.</p>
  </div>
  <div className="offer-card">
    <h3>Healthcare Diagnostics & Readmission Predictions</h3>
    <p>Our predictive systems use patient history, diagnostics, and lab data to foresee potential readmissions and health outcomes. Hospitals can improve care quality and reduce costs through early intervention strategies.</p>
  </div>
</div>


        <div className="section">
          <h2>Industries Served</h2>
        </div>
        <div className="industry-cards-grid">
  <div className="industry-card">
    <h3>Retail</h3>
    <p>Product demand forecasting and personalized promotions to enhance customer experience and optimize stock levels.</p>
  </div>
  <div className="industry-card">
    <h3>Finance</h3>
    <p>Credit risk assessment, fraud detection, and intelligent portfolio modeling to streamline financial decision-making.</p>
  </div>
  <div className="industry-card">
    <h3>Healthcare</h3>
    <p>Predictive diagnostics and patient outcome modeling to improve care quality and reduce readmission rates.</p>
  </div>
  <div className="industry-card">
    <h3>Manufacturing</h3>
    <p>Predictive maintenance and supply chain optimization for smarter, leaner production and equipment reliability.</p>
  </div>
</div>


<div className="section">
  <h2>Tools & Technologies</h2>
  <p>We utilize a powerful tech stack to ensure accuracy and scalability:</p>

  <div className="tools-cards-grid">
    <div className="tool-card">
      <FaPython className="tool-icon" />
      <h3>Python</h3>
      <p>scikit-learn, pandas, statsmodels for robust statistical and ML pipelines.</p>
    </div>
    <div className="tool-card">
      <FaChartLine className="tool-icon" />
      <h3>Time Series Models</h3>
      <p>Forecasting with ARIMA, Prophet, and LSTM models for time-based data insights.</p>
    </div>
    <div className="tool-card">
      <FaTools className="tool-icon" />
      <h3>ML Frameworks</h3>
      <p>High-performance modeling using XGBoost, LightGBM, and AutoML platforms.</p>
    </div>
    <div className="tool-card">
      <FaServer className="tool-icon" />
      <h3>Deployment</h3>
      <p>Scalable APIs built using Flask, FastAPI, and Docker for production delivery.</p>
    </div>
    <div className="tool-card">
      <FaChartBar className="tool-icon" />
      <h3>Visualization</h3>
      <p>Interactive dashboards with Power BI, Tableau, and Plotly for business insight.</p>
    </div>
  </div>
</div>

      </div>
    
      
    </motion.section>
    
    
  )
}

export default PredictiveAnalytics
