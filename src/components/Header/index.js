import React from "react";
import Nav from "../Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header(props) {
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
  return (
    <Container fluid={true} className="header">
      <Row>
        <Col xs={12} lg={4}>
          <h1>Brandon Geertsen</h1>
        </Col>
        <Col>
          <Nav
            projectSelected={projectSelected}
            setProjectSelected={setProjectSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
