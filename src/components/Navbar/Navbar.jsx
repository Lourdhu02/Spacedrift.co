import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.2 } }
  }

  return (
    <nav className="navbar">
      <div className="logo">Spacedrift</div>
      <div className="nav-desktop">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/inner-circle" className="nav-link">Inner Circle</Link>
        <Link to="/contact" className="nav-link">Get in Touch</Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <motion.span className="bar" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}></motion.span>
        <motion.span className="bar" animate={{ opacity: isOpen ? 0 : 1 }}></motion.span>
        <motion.span className="bar" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}></motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-links-mobile"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="nav-link">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="nav-link">Services</Link>
            <Link to="/inner-circle" onClick={() => setIsOpen(false)} className="nav-link">Inner Circle</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="nav-link">Get in Touch</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar