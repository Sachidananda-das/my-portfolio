import React from 'react';
import { Container } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center" id="home">
      <Container>
        <h1 className='silkscreen-regular'>SACHIDANANDA DAS</h1>
        <p className="lead">I'm a passionate developer who builds beautiful and functional websites.</p>
      </Container>
    </section>
  );
}

export default HeroSection;