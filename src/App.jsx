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
import DeepLearningInternship from './components/Service/Internships/DeepLearningInternship';
import DataScienceInternship from './components/Service/Internships/DataScienceInternship';
import MachineLearningInternship from './components/Service/Internships/MachineLearningInternship';
import WebDevelopmentInternship from './components/Service/Internships/WebDevelopmentInternship';
import ApplyNow from './components/Service/Internships/ApplyNow';

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
        <Route path="/services/internships/deep-learning" element={<DeepLearningInternship/>} />
        <Route path="/services/internships/data-science" element={<DataScienceInternship/>} />
        <Route path="/services/internships/machine-learning" element={<MachineLearningInternship/>} />
        <Route path="/services/internships/web-development" element={<WebDevelopmentInternship/>} />
        <Route path="/services/internships/apply-now" element={<ApplyNow/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
