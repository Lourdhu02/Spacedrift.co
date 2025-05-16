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

    
    setResponseMsg('APPLICATION SUBMITTED SUCCESSFULLY!')
    setFormData({ name: '', email: '', phone: '', portfolio: '', reason: '' })

    // Refresh the page after 2 seconds
    setTimeout(() => {
      window.location.reload()
    }, 2000)
    
  } catch (error) {
    console.error(error)
    setResponseMsg('An error occurred. Please try again later.')
  }

  setLoading(false)
}


  return (
    <section className="inner-circle-section">
      <RevealOnScroll>
        <div className="inner-hero">
          <h1>THE INNER CIRCLE</h1>
          <p>
            The Inner Circle is a curated tech community where passionate learners, aspiring data scientists, and professionals converge to collaborate, grow, and innovate together. From exclusive access to advanced AI projects and mentorship from industry experts, to hands-on learning opportunities, this initiative is tailored to empower the next wave of tech leaders. Whether you're looking to boost your resume, gain experience, or find your next collaborator, the Inner Circle is your gateway to a thriving, resource-rich ecosystem designed for impactful growth.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="inner-benefits">
          <h2>WHY JOIN ?</h2>
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
    <h2>WHO SHOULD JOIN?</h2>
    <div className="eligibility-grid">
      <div className="eligibility-card">
        <strong>University Students</strong>
        <p>
          If you're an undergraduate or postgraduate student passionate about technology, this program offers hands-on experience with real-world AI/ML projects, mentorship from industry experts, and portfolio-building opportunities. It’s ideal for those aiming to gain a competitive edge in internships, research opportunities, or full-time tech roles post-graduation.
        </p>
      </div>
      <div className="eligibility-card">
        <strong>Working Professionals</strong>
        <p>
          Professionals in IT, software development, or adjacent fields who want to deepen their expertise or transition into AI, machine learning, or data science will benefit from our practical training, career guidance, and project-based mentorship. Build the knowledge and credibility needed to move into higher-impact technical roles.
        </p>
      </div>
      <div className="eligibility-card">
        <strong>Career Changers</strong>
        <p>
          If you're moving from a non-technical background and aiming to enter the tech industry, our program offers a guided pathway. Learn in-demand skills through a structured curriculum, hands-on projects, and community support that demystifies AI/ML and prepares you for entry-level roles or freelance opportunities.
        </p>
      </div>
      <div className="eligibility-card">
        <strong>Freelancers & Innovators</strong>
        <p>
          Whether you're a freelancer expanding your service offerings or an aspiring entrepreneur building a product, this program helps you harness the power of AI. Access technical mentorship, collaborate with peers, and gain skills that allow you to deliver smarter solutions and launch impactful tech-based ventures.
        </p>
      </div>
    </div>
  </div>
</RevealOnScroll>


      <RevealOnScroll>
        <div className="inner-network" ref={typewriterRef}>
          {isVisible && <Typewriter text="CONNECTED BY PURPOSE" speed={250} />}
          <div className="innersub">
            Start Building. Start Leading. Start with Spacedrift.
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="inner-form">
          <h2>APPLY NOW</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
            <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="LinkedIn or Portfolio URL" required />
            <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Why do you want to join?" rows="4"  style={{width:'95%'}} required></textarea>
  
            <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</button>

            {responseMsg && <p className="form-response">{responseMsg}</p>}
          </form>
           
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default InnerCircle
