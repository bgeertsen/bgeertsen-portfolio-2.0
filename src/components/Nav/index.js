import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Nav(props) {
  const {
    projectSelected,
    setProjectSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected,
    contactSelected,
    setContactSelected,
  } = props;

  function goToPortfolio() {
    setProjectSelected(true);
    setAboutSelected(false);
    setResumeSelected(false);
    setContactSelected(false);
  }

  function goToResume() {
    setResumeSelected(true);
    setAboutSelected(false);
    setProjectSelected(false);
    setContactSelected(false);
  }

  function goToContact() {
    setContactSelected(true);
    setAboutSelected(false);
    setProjectSelected(false);
    setResumeSelected(false);
  }

  return (
    <Container className="nav-container">
      <Row>
        <Col xs={6} md={3}>
          <h2 onClick={() => setAboutSelected(true)}>About</h2>
        </Col>
        <Col xs={6} md={3}>
          <h2 onClick={goToPortfolio}>Portfolio</h2>
        </Col>
        <Col xs={6} md={3}>
          <h2 onClick={goToResume}>Resume</h2>
        </Col>
        <Col xs={6} md={3}>
          <h2 onClick={goToContact}>Contact</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
