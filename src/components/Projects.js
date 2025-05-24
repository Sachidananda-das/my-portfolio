import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="py-5" data-aos="fade-up" style={{ scrollMarginTop: '150px', marginTop: '60px' }}>
      <Container>
        <h2>Projects</h2>
        <Row>
          {[1, 2, 3].map((project) => (
            <Col md={4} key={project} className="mb-4" data-aos="zoom-in" data-aos-delay={project * 100}>
              <Card>
                <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=Project+${project}`} />
                <Card.Body>
                  <Card.Title>Project {project}</Card.Title>
                  <Card.Text>
                    Description for project {project}. A brief summary of the tech stack and features.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;