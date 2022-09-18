import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Nav() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>About</h2>
        </Col>
        <Col>
          <h2>Portfolio</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Resume</h2>
        </Col>
        <Col>
          <h2>Contact</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
