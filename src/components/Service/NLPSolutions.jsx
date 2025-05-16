import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Octahedron, MeshDistortMaterial } from '@react-three/drei'
import './NLPSolutions.css'

function HeroVisualization() {
  return (
    <Canvas className="hero-canvas" camera={{ position: [0, 0, 3.5], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={1.3} />
      <Octahedron args={[1.4, 0]}>
        <MeshDistortMaterial
          color="deepskyblue"
          factor={0.6}
          speed={1.3}
          roughness={0.25}
        />
      </Octahedron>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  )
}

function NLPSolutions() {
  return (
    <motion.section
      className="nlp-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-3d-wrapper">
        <HeroVisualization />
      </div>

      <div className="container">
        <div className='hero-text'>
        <h1 className="title">Natural Language Processing <strong>Solutions</strong></h1>
        <p className="intro">
        Spacedrift builds advanced NLP systems that enable machines to understand and generate language, automating workflows and extracting insights from complex text across industries.
        </p>
        </div>

        <div className="section">
        <h2>Our Offerings</h2>
   </div>
        <div className="nlp-cards-grid">
          <div className="nlp-card">
            <h3>Sentiment Analysis</h3>
            <p>
              Our sentiment analysis tools interpret subjective language and identify emotions in real-time conversations, reviews, or social media feeds. Businesses can monitor brand perception, customer satisfaction, and emerging trends with precision.
            </p>
          </div>

          <div className="nlp-card">
            <h3>Smart Chatbots</h3>
            <p>
              We build intelligent conversational agents using transformer models like GPT and BERT. These chatbots not only answer queries contextually but also engage users in dynamic, human-like conversations for support and lead generation.
            </p>
          </div>

          <div className="nlp-card">
            <h3>Document Classification</h3>
            <p>
              Our NLP pipelines classify vast volumes of documents by category, topic, or sentiment. This automates tedious manual tasks in HR, legal, and publishing sectors while ensuring high accuracy and speed.
            </p>
          </div>

          <div className="nlp-card">
            <h3>Text Summarization</h3>
            <p>
              Extractive and abstractive summarization models condense lengthy articles or reports into key highlights. This accelerates content consumption and decision-making across newsrooms, law firms, and corporate communication.
            </p>
          </div>

          <div className="nlp-card">
            <h3>NER & Custom Extraction</h3>
            <p>
              Named Entity Recognition (NER) and custom entity extraction isolate important data such as names, locations, or contract terms from unstructured text. This is essential for compliance automation, CRM systems, and analytics.
            </p>
          </div>

          <div className="nlp-card">
            <h3>LangChain & RAG Integration</h3>
            <p>
              We integrate retrieval-augmented generation (RAG) pipelines with LangChain to connect your AI to proprietary databases. This enables grounded responses and context-aware answers for your knowledge-driven applications.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default NLPSolutions
