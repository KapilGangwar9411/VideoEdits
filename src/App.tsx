import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CGIAdvertisements from './components/CGIAdvertisements';
import ReelsEditing from './components/ReelsEditing';
import VideoEditing from './components/VideoEditing';
import VideoGallery from './components/VideoGallery';
import ShortsEditing from './components/ShortsEditing';
import GraphicDesign from './components/GraphicDesign';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainContent = () => {
  return (
    <div className="min-h-screen bg-[#fff8de] text-gray-900">
      <div className="scroll-container">
        <AnimatePresence mode="wait">
          <motion.section className="scroll-section">
            <Hero />
          </motion.section>
          
          <motion.section className="scroll-section">
            <CGIAdvertisements />
          </motion.section>
          
          <motion.section className="scroll-section">
            <ReelsEditing />
          </motion.section>
          
          <motion.section className="scroll-section">
            <VideoEditing />
          </motion.section>
          
          <motion.section className="scroll-section">
            <ShortsEditing />
          </motion.section>
          
          <motion.section className="scroll-section">
            <GraphicDesign />
          </motion.section>
          
          <motion.section className="scroll-section">
            <About />
          </motion.section>
          
          <motion.section className="scroll-section">
            <Contact />
          </motion.section>
          
          <motion.section>
            <Footer />
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
      </Routes>
    </Router>
  );
};

export default App;