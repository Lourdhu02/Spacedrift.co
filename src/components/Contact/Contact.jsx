import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import './Contact.css'
import Footer from '../Footer/Footer'

function AnimatedSphereBackground() {
  return (
    <Canvas className="contact-canvas" camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <Sphere args={[1.5, 64, 64]} scale={1}>
        <MeshDistortMaterial
          color="var(--orangeAccent)"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

function Contact() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="contact-section"
      >

        <div className="contact-card">
          <div className="contact-left">
            <h2 className="contact-heading">Contact Us</h2>
            <p className='contact-message'>
              We'd love to hear from you! Whether you have a question, feedback, or a project idea, drop us a message and we’ll get back to you soon.
            </p>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="contact-input" />
              <input type="email" placeholder="Your Email" className="contact-input" />
              <input type="tel" placeholder="Your Phone" className="contact-input" />
              <textarea rows="4" placeholder="Your Message" className="contact-textarea" />
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact
