import './Navbar.css';
import { Link } from 'react-router-dom';
import { LuDot } from "react-icons/lu";
import { useState } from 'react';
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0, transition: { duration: 0.4 } },
    exit: { y: '-100%', transition: { duration: 0.3 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <nav className="navbar">
      <button 
        className="menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
      <LuDot />MENU
      </button>

      <div className="logo"><strong>SPACEDRIFT</strong>.CO</div>

      <div className="contact-link">
        <Link to="/contact" className="nav-link">LET'S TALK  <span><MdOutlineArrowOutward /></span></Link>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="overlay" 
              variants={overlayVariants} 
              initial="hidden" 
              animate="visible" 
              exit="exit"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div 
              className="fullscreen-menu" 
              variants={menuVariants} 
              initial="hidden" 
              animate="visible" 
              exit="exit"
            >
              <button 
                className="close-button" 
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
              <Link to="/" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>HOME <small>01</small> </Link>
              <Link to="/services" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>SERVICES <small>02</small></Link>
              <Link to="/inner-circle" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>INNER CIRCLE <small>03</small></Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
