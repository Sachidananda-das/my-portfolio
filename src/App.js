import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => setDarkMode(!darkMode), 300);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`transition-theme ${darkMode ? 'dark-theme' : 'light-theme'} ${isAnimating ? 'theme-change-animation' : ''}`}>
      <NavbarComponent darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container fluid className="p-0">
        <HeroSection />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;