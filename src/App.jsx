import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Service/Service';
import InnerCircle from './components/InnerCircle/InnerCircle';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PredictiveAnalytics from './components/Service/PredictiveAnalytics';
import NLPSolutions from './components/Service/NLPSolutions';
import ComputerVision from './components/Service/ComputerVision';
import InternshipCourses from './components/Service/InternshipCourses';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/inner-circle" element={<InnerCircle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/predictive-analytics" element={<PredictiveAnalytics/>} />
        <Route path="/services/nlp" element={<NLPSolutions/>} />
        <Route path="/services/computer-vision" element={<ComputerVision/>} />
        <Route path="/services/internships" element={<InternshipCourses/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
