import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import './InnerCircle.css'
import InnerGlobe from './InnerGlobe'

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))
      index++
      if (index === text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <h2>{displayedText}<span className="blinker">|</span></h2>
}

function RevealOnScroll({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function InnerCircle() {
  const typewriterRef = useRef(null)
  const isVisible = useInView(typewriterRef, { once: true, margin: '-50px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    reason: ''
  })

  const [responseMsg, setResponseMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponseMsg('')

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyb5lUlMAUgh67px_4HkSaAJZ1atEF-M_jco2B53c51uhtjlhk3XYg_xaIcuy1rWA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.status === 'success') {
        setResponseMsg('Application submitted successfully!')
        setFormData({ name: '', email: '', phone: '', portfolio: '', reason: '' })
      } else {
        setResponseMsg('Submission failed: ' + result.message)
      }
    } catch (error) {
      console.error(error)
      setResponseMsg('')
    }

    setLoading(false)
  }

  return (
    <section className="inner-circle-section">
      <RevealOnScroll>
        <div className="inner-hero">
          <h1>Welcome to the Inner Circle</h1>
          <p>
            The Inner Circle is a curated tech community where passionate learners, aspiring data scientists, and professionals converge to collaborate, grow, and innovate together. From exclusive access to advanced AI projects and mentorship from industry experts, to hands-on learning opportunities, this initiative is tailored to empower the next wave of tech leaders. Whether you're looking to boost your resume, gain experience, or find your next collaborator, the Inner Circle is your gateway to a thriving, resource-rich ecosystem designed for impactful growth.
          </p>
          <button className="inner-cta">Apply to Join</button>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="inner-benefits">
          <h2>Why Join?</h2>
          <div className="inner-benefit-list">
            <div className="benefit">
              <strong>1-on-1 Mentorship</strong>
              <p>Personalized guidance from experienced mentors to help you grow in AI, ML, and software development careers.</p>
            </div>
            <div className="benefit">
              <strong>Real Project Experience</strong>
              <p>Work on real-world projects that boost your resume and technical proficiency across multiple domains.</p>
            </div>
            <div className="benefit">
              <strong>AI Learning Tracks</strong>
              <p>Structured paths in Data Science, NLP, and Computer Vision to help you specialize and advance efficiently.</p>
            </div>
            <div className="benefit">
              <strong>Peer Networking</strong>
              <p>Join a motivated community of learners, share knowledge, and collaborate on technical challenges together.</p>
            </div>
            <div className="benefit">
              <strong>Career Guidance</strong>
              <p>Resume reviews, mock interviews, and career roadmaps tailored to your personal goals and domain focus.</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="inner-eligibility">
          <h2>Who Should Join?</h2>
          <div className="eligibility-grid">
            <div className="eligibility-card">Students passionate about AI/ML</div>
            <div className="eligibility-card">Tech professionals seeking mentorship</div>
            <div className="eligibility-card">Career switchers eager to upskill</div>
            <div className="eligibility-card">Freelancers looking to grow</div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="inner-network" ref={typewriterRef}>
          {isVisible && <Typewriter text="Connected by Purpose" speed={200} />}
          <InnerGlobe />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="inner-form">
          <h2>Apply Now</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
            <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="LinkedIn or Portfolio URL" required />
            <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Why do you want to join?" rows="4" required></textarea>
            <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</button>
            {responseMsg && <p className="form-response">{responseMsg}</p>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default InnerCircle
