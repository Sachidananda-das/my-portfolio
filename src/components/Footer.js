import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <div className="mb-3">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;