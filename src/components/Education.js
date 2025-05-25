import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
import { Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="education">
      <Container className="py-5">
        <h2 className="py-5">Education</h2>
        {/* <Row className="justify-content-center">
          <Col md={6} className="mb-4">
            <Card className="shadow-sm" id="box">
              <Card.Body>
                <Card.Title>Bachelor of Computer Applications</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">XYZ University, 2016 - 2019</Card.Subtitle>
                <Card.Text>
                  Studied core subjects like Data Structures, Algorithms, and Web Development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm" id="box">
              <Card.Body>
                <Card.Title>Master of Computer Applications</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ABC Institute of Technology, 2019 - 2022</Card.Subtitle>
                <Card.Text>
                  Focused on software engineering, cloud computing, and full-stack development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default Education;