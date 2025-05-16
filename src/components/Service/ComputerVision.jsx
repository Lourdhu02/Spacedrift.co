import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Torus, MeshDistortMaterial } from '@react-three/drei'
import './ComputerVision.css'

function HeroVisualization() {
  return (
    <Canvas className="hero-canvas" camera={{ position: [0, 0, 3.5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <Torus args={[1, 0.4, 128, 64]}>
        <MeshDistortMaterial
          color="yellowgreen"
          factor={0.5}
          speed={1.2}
          roughness={0.25}
        />
      </Torus>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

function ComputerVision() {
  return (
    <motion.section
      className="cv-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-3d-wrapper">
        <HeroVisualization />
      </div>

      <div className="container">
        <div className='hero-text'>
        <h1 className="title">Computer Vision <strong>Applications</strong></h1>
        <p className="intro">
          At Spacedrift, we develop intelligent vision systems that empower machines to understand and interpret visual data. From precision-based manufacturing quality checks to real-time surveillance and diagnostics, our AI-powered models bring automation and accuracy to image and video analysis.
        </p>
        </div>
        <div className="section">
        <h2>Our Offerings</h2>
   </div>
        <div className="cv-cards-grid">
          <div className="cv-card">
            <h3>Object Detection</h3>
            <p>
              Our object detection systems can identify and locate multiple objects in real time using YOLOv8 and TensorFlow. Ideal for inventory tracking, security, and autonomous navigation.
            </p>
          </div>

          <div className="cv-card">
            <h3>Facial Recognition</h3>
            <p>
              We implement secure and scalable facial recognition systems for access control, identity verification, and emotion detection using computer vision and deep learning techniques.
            </p>
          </div>

          <div className="cv-card">
            <h3>Defect & Quality Inspection</h3>
            <p>
              Automate product inspection in manufacturing lines to detect surface defects, misalignments, or missing components. Reduce manual errors and speed up quality assurance.
            </p>
          </div>

          <div className="cv-card">
            <h3>Healthcare Imaging</h3>
            <p>
              Enhance radiology and diagnostics with AI models that detect anomalies in medical images like X-rays, MRIs, and CT scans. Improve diagnosis accuracy and turnaround time.
            </p>
          </div>

          <div className="cv-card">
            <h3>Surveillance & Tracking</h3>
            <p>
              Our smart surveillance systems use motion detection, intrusion alerts, and object tracking to ensure proactive security monitoring in public and private spaces.
            </p>
          </div>

          <div className="cv-card">
            <h3>Retail Automation</h3>
            <p>
              Use computer vision for shelf analytics, customer behavior mapping, and queue detection to optimize retail operations and enhance in-store customer experience.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default ComputerVision
