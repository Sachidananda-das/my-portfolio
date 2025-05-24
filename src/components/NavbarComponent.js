import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import './NavbarComponent.css';

function NavbarComponent({ darkMode, toggleTheme }) {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="py-3 sticky-top"
      variant={darkMode ? 'dark' : 'light'}
      bg={darkMode ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand href="#home" className="homemade-apple-regular" style={{ fontSize: '2.4rem', fontWeight: 'bold', paddingRight: '1.5rem'}}>
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={handleNavClick} style={{paddingRight: '1.7rem'}}>About</Nav.Link>
            <Nav.Link href="#education" onClick={handleNavClick} style={{paddingRight: '1.7rem'}}>Education</Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick} style={{paddingRight: '1.7rem'}}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick} style={{paddingRight: '1.7rem'}}>Contact</Nav.Link>
            <Nav.Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNavClick} style={{paddingRight: '1.7rem'}}>
              Resume
            </Nav.Link>
          </Nav>

          {/* Theme toggle button aligned right with custom styling */}
          <div className="d-flex align-items-center ms-auto">
            <Button
              className="theme-toggle-button px-3 py-2"
              onClick={() => {
                toggleTheme();
                setExpanded(false);  // optional: close menu if open when toggling theme on mobile
              }}
              style={{
                backgroundColor: darkMode ? '#f39c12' : '#34495e',
                border: 'none',
                borderRadius: '25px',
                fontWeight: '600',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                paddingLeft: '2.8rem',
                paddingRight: '1.7rem',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {darkMode ? <BsSunFill style={{ marginBottom: '3px' }} /> : <BsMoonFill style={{ marginBottom: '3px' }} />}
              {darkMode ? ' Light Mode' : ' Dark Mode'}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
