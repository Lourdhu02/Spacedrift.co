import React from 'react'
import { motion } from 'framer-motion'
import BackgroundScene from '../BackgroundScene'
import { FiUsers, FiDatabase, FiTruck } from 'react-icons/fi';

import './Home.css'
import { FiBarChart, FiCpu, FiCode } from 'react-icons/fi';  // Import icons from react-icons

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
  {/* <BackgroundScene />  */}

  <div style={{ zIndex: 1 }}>
    <h1 style={{ fontSize: '75px',color:"var(--charcoal)",textAlign:'center',fontFamily:'Figtree' }}>WE ENGINEER THE FUTURE OF <span style={{color:'lightgray'}}>INTELLIGENCE </span><br /> <div style={{ fontSize: '18px',color:"var(--grayish)",textAlign:'center',fontFamily:'Figtree' }}>PIONEERING SOLUTIONS AT THE INTERSECTION OF DATA, DESIGN, AND DEEP TECHNOLOGY</div></h1>
   
  </div>
   

  <div style={{ zIndex: 1 }}>
    <p style={{ fontSize: '14px', color: 'var(--grayish)' }}>
   
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center', 
    backgroundColor:"white",
    alignItems: 'start',
    backgroundColor: 'var(--white)',
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
    style={{ fontSize: '18px' ,color:"var(--graish)",flex:'1',fontFamily:'Figtree'}}
  >
    OUR MISSION
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ maxWidth: '100%', fontSize: '32px',flex:'2',color:"var(--charcoal)",flex:2,fontFamily:'Figtree',fontWeight:'700'}}
  >
    AT SPACEDRIFT, WE BUILD AI-DRIVEN SOLUTIONS THAT TRANSFORM DATA INTO ACTIONABLE INSIGHTS — SOLVING REAL PROBLEMS WITH CLARITY, CREATIVITY, ETHICS, AND TECHNOLOGY FOR ALL USERS.
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
    backgroundColor: "whitesmoke",
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--charcoal)',
    padding: '15px',
    textAlign: 'left',
  }}
>
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ fontSize: '54px', marginBottom: '1rem', color: "var(--charcoal)" }}
  >
    WHY CHOOSE US?
  </motion.h1>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
    style={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', marginTop: '20px',marginBottom:'40px', fontFamily: 'Figtree' }}>
      <div className="step">
        <div className="step-icon">
          <FiUsers size={40} /> {/* Changed icon to FiUsers for better relatability */}
        </div>
        <h3>CONSULTATION</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
          WE ANALYZE YOUR BUSINESS NEEDS AND OBJECTIVES TO PROVIDE PERSONALIZED SOLUTIONS, OFFERING EXPERT ADVICE ON THE MOST SUITABLE TECHNOLOGY AND APPROACH.
        </p>
      </div>
      <div className="step">
        <div className="step-icon">
          <FiDatabase size={40} /> {/* Changed icon to FiDatabase for better relatability */}
        </div>
        <h3>SOLUTION</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
          OUR TEAM DESIGNS AND DEVELOPS THE OPTIMAL AI, ML, OR DATA-DRIVEN SOLUTIONS THAT MEET YOUR SPECIFIC CHALLENGES AND GOALS.
        </p>
      </div>
      <div className="step">
        <div className="step-icon">
          <FiTruck size={40} /> {/* Changed icon to FiTruck for better relatability */}
        </div>
        <h3>IMPLEMENTATION</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
          WE DEPLOY AND MAINTAIN YOUR SOLUTION, ENSURING ITS SMOOTH INTEGRATION WITH EXISTING SYSTEMS, AND PROVIDING ONGOING SUPPORT FOR LONG-TERM SUCCESS.
        </p>
      </div>
    </div>
  </motion.div>
</motion.section>

    </div>
  )
}

export default Home
