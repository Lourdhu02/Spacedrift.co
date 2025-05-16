import React from 'react'
import { motion } from 'framer-motion'
import './Service.css'
import { useNavigate } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { FiBarChart, FiCode, FiCpu, FiUsers } from "react-icons/fi";  // Updated icons from Feather icons

const services = [
  {
    title: 'AI-POWERED PREDICTIVE ANALYTICS',
    description:
      'We use data and machine learning models to predict future trends like sales, customer churn, and stock prices, helping industries like retail and finance make informed, proactive decisions.',
    route: '/services/predictive-analytics',
    icon: <FiBarChart />
  },
  {
    title: 'NATURAL LANGUAGE PROCESSING (NLP) SOLUTIONS',
    description:
      'We build intelligent NLP systems that enable computers to understand and process human language, supporting tasks like sentiment analysis, chatbots, and document summarization across industries.',
    route: '/services/nlp',
    icon: <FiCpu />
  },
  {
    title: 'COMPUTER VISION APPLICATIONS',
    description:
      'We develop advanced computer vision solutions for tasks like object detection, facial recognition, and quality control, empowering industries like manufacturing and healthcare with accurate, automated analysis.',
    route: '/services/computer-vision',
    icon: <FiCode />
  },
  {
    title: 'INTERNSHIPS & COURSES',
    description:
      'Our internships and courses offer hands-on learning experiences in data science, machine learning, and AI pipelines, giving participants real-world skills and mentorship for career growth.',
    route: '/services/internships',
    icon: <FiUsers />
  },
]


const ServiceCard = ({ title, description, route, icon }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="service-card-3d"
    >
      <div className="service-card-header">
        <h1 className="service-card-icon">{icon}</h1>
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-description">{description}</p>
      <button
        className="service-card-button"
        onClick={() => navigate(route)}
      >
        Know More <span> <GoArrowUpRight /></span>
      </button>
    </motion.div>
  )
}

function Services() {
  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className='title'>OUR SERVICES</h1>
      <div className="service-cards-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            route={service.route}
            icon={service.icon}  // Pass the icon to the ServiceCard component
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Services
