import React from 'react'
import { motion } from 'framer-motion'
import BackgroundScene from '../BackgroundScene'
import './Home.css'
import Services from '../Service/Service'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
const slideVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
}

function Home() {
  return (
    <div>
      <motion.section
  className="slide"
  variants={slideVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  style={{
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignText: 'center',
    justifyContent: 'center',
    padding: '0 10vw',
    color: 'white',
  }}
>
  <BackgroundScene />

  <div style={{ zIndex: 1 }}>
    <h1 style={{ fontSize: '125px',color:"var(--grayish)" }}>SPACEDRIFT.CO</h1>
  </div>

  <div style={{ zIndex: 1 }}>
    <p style={{ fontSize: '14px', color: 'var(--grayish)' }}>
    Beyond Code. Beyond Data. We Craft Intelligence
    </p>
  </div>
</motion.section>

<motion.section
  className="slide"
  variants={slideVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  style={{
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    backgroundColor:"whitesmoke",
    alignItems: 'start',
    color: 'var(--grayish)',
    padding: '15px',
    textAlign: 'left',
  }}
>
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={{ fontSize: '32px', marginBottom: '1rem' ,color:"var(--orangeAccent)"}}
  >
    What We Do 
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ maxWidth: '100%', fontSize: '14px', lineHeight: '1.8' }}
  >
    At Spacedrift, we harness the power of Artificial Intelligence and Data Science to transform raw information into intelligent solutions. From crafting predictive models that anticipate business trends to building custom machine learning pipelines that optimize operations, our mission is to solve real-world challenges with code and curiosity. We specialize in natural language processing, data visualization, and model deployment for organizations and students alike. Whether you're scaling your startup or submitting your capstone project, we turn your data into direction — seamlessly, ethically, and intelligently.
  </motion.p>
</motion.section>


      <motion.section
        className="slide"
        variants={slideVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', color: 'white' }}
      >
        <Services/>
      </motion.section>

      <motion.section
  className="slide"
  variants={slideVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  style={{
    backgroundColor:"whitesmoke",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    color: 'var(--charcoal)',
    padding: '35px 15px',
    textAlign: 'left',
  }}
>
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ fontSize: '32px', marginBottom: '1rem' , color:"var(--orangeAccent)"}}
  >
    Why Choose Us
  </motion.h1>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
    style={{
      display: 'flex',
      
      flexDirection: 'column',
    }}
  >
    <p className='p-content' style={{ fontSize: '14px', lineHeight: '1' }}>
      <strong>Deep Tech Expertise:</strong> Our team combines industry-grade experience with academic depth in AI, ML, and data science. From OpenCV to advanced neural networks, we deliver cutting-edge solutions tailored to real-world problems.
    </p>
    <p className='p-content' style={{ fontSize: '14px', lineHeight: '1' }}>
      <strong>End-to-End Support:</strong> From ideation to deployment, we assist you every step of the way. Our agile workflows and responsive support ensure your project is always moving forward.
    </p>
    <p className='p-content' style={{ fontSize: '14px', lineHeight: '1' }}>
      <strong>Education Meets Innovation:</strong> With structured internships, student-focused mentorship, and real-world project exposure, we don’t just build solutions — we build talent.
    </p>
  </motion.div>
</motion.section>
<motion.section
        className="slide"
        variants={slideVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{color: 'white' }}
      >
        <Contact/>
      </motion.section>
      <motion.section
        className="slide"
        variants={slideVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', color: 'white',maxWidth:'100%', }}
      >
      </motion.section>
    </div>
  )
}

export default Home
