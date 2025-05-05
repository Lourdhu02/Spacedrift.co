import React from 'react'
import { motion } from 'framer-motion'
import './Service.css'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'AI-Powered Predictive Analytics',
    description:
      'We use historical data and machine learning models to forecast future trends, such as sales forecasting, customer churn prediction, and stock price estimation. These insights empower industries like retail, finance, healthcare, and logistics to make proactive, data-driven decisions. Our solutions integrate Python pipelines, time-series models, and AutoML platforms to deliver accurate and scalable predictive systems.',
    route: '/services/predictive-analytics'
  },
  {
    title: 'Natural Language Processing (NLP) Solutions',
    description:
      'We design intelligent NLP systems that automate text understanding—ranging from sentiment analysis and chatbots to document classification and summarization. Ideal for HR, customer service, legal firms, and content platforms, we leverage tools like BERT, GPT, spaCy, and LangChain to deliver state-of-the-art, domain-adapted solutions.',
    route: '/services/nlp'
  },
  {
    title: 'Computer Vision Applications',
    description:
      'We develop image and video processing applications for object detection, facial recognition, quality checks, and anomaly detection. Our solutions use YOLOv8, OpenCV, and TensorFlow to power use cases in manufacturing, healthcare imaging, smart surveillance, and retail automation.',
    route: '/services/computer-vision'
  },
  {
    title: 'Internships & Courses',
    description:
      'Our industry-grade internship and course programs provide hands-on experience in data science, machine learning, and full-stack AI pipelines. Participants work on real projects using Python, TensorFlow, and Flask. We offer beginner to advanced tracks with mentor support and certification.',
    route: '/services/internships'
  },
]

const ServiceCard = ({ title, description, route }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="service-card"
      style={{
        borderRadius: '0px',
        borderBottom: '1.5px solid var(--charcoal)',
        width: '100%',
        color: 'white',
        textAlign: 'left',
      }}
    >
      <h3 style={{ fontSize: '24px', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '14px', lineHeight: '1', color: 'var(--charcoal)' }}>{description}</p>
      <button
        style={{
          marginTop: '0.75rem',
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--orangeAccent)',
          color: 'white',
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}
        onClick={() => navigate(route)}
      >
        Know More
      </button>
    </motion.div>
  )
}

function Services() {
  return (
    <>
      <motion.section
        className="slide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          minHeight: '100vh',
          padding: '15px',
          color: 'white',
          textAlign: 'left',
        }}
      >
        <h1 className='title'>Our Services</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              route={service.route}
            />
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default Services
