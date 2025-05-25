import React, { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
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

  }, []);

const sectionIds = ['home', 'about', 'education', 'projects', 'contact', 'resume'];
const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // triggers when 60% of the section is visible
    }
  );

  const sections = document.querySelectorAll('.scroll-section');
  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  return (
    <div className={`app-container transition-theme ${darkMode ? 'dark-theme' : 'light-theme'} ${isAnimating ? 'theme-change-animation' : ''}`}>
      <NavbarComponent darkMode={darkMode} toggleTheme={toggleTheme} activeSection={activeSection} />
      <Container fluid className="p-0">
      <div className="scroll-container">
        <section id="home" className="scroll-section"><HeroSection /></section>
        <section id="about" className="scroll-section"><About /></section>
        <section id="education" className="scroll-section"><Education /></section>
        <section id="projects" className="scroll-section"><Projects /></section>
        <section id="contact" className="scroll-section"><Contact /></section>
      </div>
      </Container>
    </div>
  );
}

export default App;
