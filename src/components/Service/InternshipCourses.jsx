import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Tetrahedron, MeshWobbleMaterial } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import './InternshipCourses.css'

function HeroVisualization() {
  return (
    <Canvas className="hero-canvas" camera={{ position: [0, 0, 4], fov: 55 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.4} />
      <Tetrahedron args={[1.5, 0]}>
        <MeshWobbleMaterial
          color="#FF6B2D"
          factor={0.7}
          speed={1.5}
          roughness={0.2}
        />
      </Tetrahedron>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} />
    </Canvas>
  )
}

function InternshipCourses() {
  const navigate = useNavigate()

  return (
    <motion.section
      className="internship-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-3d-wrapper">
        <HeroVisualization />
      </div>

      <div className="container">
        <div className='hero-text'>
        <h1 className="title">Internships & Courses</h1>
        <p className="intro">
          Experience one of the most elite internship and course ecosystems tailored for aspiring data scientists, AI engineers, and tech enthusiasts. At Spacedrift, our programs are crafted to mirror real-world challenges, enabling participants to work hands-on with Python, TensorFlow, Flask, and more. With flexible timings, mentor support, and personal project tracking, you’ll graduate with confidence—and certification endorsed by MSME & StartupIndia.
        </p>
        </div>
        <div className="section">
        <h2>Our Courses & Internships</h2>
   </div>
        <div className="learning-cards-grid">
          <div className="learn-card">
            <h3>Deep Learning Internship</h3>
            <p>
              Dive into deep neural networks, CNNs, RNNs, and transformer architectures. Tackle image, text, and sequential tasks under expert supervision and deliver model-based solutions to real-world use cases.
            </p>
            <button onClick={() => navigate('deep-learning')}>Know More</button>
          </div>

          <div className="learn-card">
            <h3>Data Science Internship</h3>
            <p>
              A practical exploration of data pipelines, EDA, and modeling techniques. Participants tackle problems from domains like healthcare, finance, and e-commerce—equipping them with a complete data science toolkit.
            </p>
            <button onClick={() => navigate('data-science')}>Know More</button>
          </div>

          <div className="learn-card">
            <h3>Machine Learning Internship</h3>
            <p>
              Develop models using regression, classification, clustering, and ensemble learning. Work on live projects and learn how to apply ML algorithms in business and product settings.
            </p>
            <button onClick={() => navigate('machine-learning')}>Know More</button>
          </div>

          <div className="learn-card">
            <h3>Web Development Internship</h3>
            <p>
              Build dynamic web apps using React, Flask, and Node.js. Learn API creation, frontend/backend integration, and deploy full-stack solutions using modern dev tools and workflows.
            </p>
            <button onClick={() => navigate('web-development')}>Know More</button>
          </div>

          <div className="learn-card">
            <h3>Data Science Course</h3>
            <p>
              Perfect for freshers and early learners. Learn Python, data preprocessing, visualization, and basic ML through structured modules and mini projects. Includes personal mentor support.
            </p>
            <button onClick={() => navigate('/courses/data-science')}>Know More</button>
          </div>

          <div className="learn-card">
            <h3>Advanced AI/ML Course</h3>
            <p>
              Designed for professionals looking to upskill. Covers neural networks, model optimization, and full-stack AI deployment. Includes project tracking and StartupIndia-certified recognition.
            </p>
            <button onClick={() => navigate('/courses/advanced-ml')}>Know More</button>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default InternshipCourses
