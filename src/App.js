// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Contact from './pages/Contact';
import About from './pages/About'; // Import the About component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><HeroSection /><InfoSection /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
