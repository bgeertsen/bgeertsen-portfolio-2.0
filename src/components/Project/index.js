import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Project() {
  return (
    <Container className="project-container">
      <Row>
        <Col xs={12} md={6} xl={4}>
          <img
            className="project-pic"
            src={require(`../../Assets/images/project-images/dose.png`)}
            alt="Dose"
          ></img>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <img
            className="project-pic"
            src={require(`../../Assets/images/project-images/daily-cocktaily-screenshot.png`)}
            alt="Daily Cocktaily"
          ></img>
        </Col>

        <Col xs={12} md={6} xl={4}>
          <img
            className="project-pic"
            src={require(`../../Assets/images/project-images/tech-blog.png`)}
            alt="Tech Blog picture"
          ></img>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <img
            className="project-pic"
            src={require(`../../Assets/images/project-images/team-profile-generator.png`)}
            alt="Team Profile Generator"
          ></img>
        </Col>

        <Col xs={12} md={6} xl={4}>
          <img
            className="project-pic"
            src={require(`../../Assets/images/project-images/coding-quiz.png`)}
            alt="Social Media Api"
          ></img>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <img
            className="project-pic"
            src={require(`../../Assets/images/project-images/weather-dashboard.png`)}
            alt="Coding Quiz"
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
