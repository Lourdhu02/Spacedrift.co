import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-section"
    >
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-title">CONNECT WITH US</div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="NAME" className="form-input" />
              <input type="email" placeholder="EMAIL" className="form-input" />
               <input type="tel" placeholder="PHONE NUMBER" className="form-input" />
               <input type="text" placeholder="SERVICE YOU WANT" className="form-input" />
              <textarea placeholder="YOUR MESSAGE" rows="1" className="form-textarea" />
            </div>
           
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
