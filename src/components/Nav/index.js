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

  function goToAbout() {
    setAboutSelected(true);
    setProjectSelected(false);
    setResumeSelected(false);
    setContactSelected(false);
  }

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
          <button>
            <h2 onClick={goToAbout}>About</h2>
          </button>
        </Col>
        <Col xs={6} md={3}>
          <button>
            <h2 onClick={goToPortfolio}>Portfolio</h2>
          </button>
        </Col>
        <Col xs={6} md={3}>
          <button>
            <h2 onClick={goToResume}>Resume</h2>
          </button>
        </Col>
        <Col xs={6} md={3}>
          <button>
            <h2 onClick={goToContact}>Contact</h2>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
