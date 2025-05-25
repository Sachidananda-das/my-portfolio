import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container} from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5" data-aos="fade-up">
      <Container>
        <h2>About Me</h2>
        {/* <Row>
          <Col md={6} data-aos="fade-right">
            <img
              src="https://via.placeholder.com/400"
              alt="About"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p>
              I'm a web developer skilled in React.js, Node.js, and modern web technologies. I love building dynamic and responsive web apps that solve real-world problems.
            </p>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
}

export default About;