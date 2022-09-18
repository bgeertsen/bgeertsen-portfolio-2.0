import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Project() {
  const [projects] = useState([
    {
      name: "Dose",
      description:
        "An app to keep track of prescriptions and get text notifications for refill dates",
      github: "https://github.com/kfisch2/dose",
      deploymnet: " https://cryptic-inlet-45736.herokuapp.com/",
    },
    {
      name: "Daily Cocktaily",
      description:
        "Get a random cocktail recipe based on the current weather in your area!",
      github: "https://github.com/slorreina369/cocktail-day",
      deploymnet: "https://slorreina369.github.io/cocktail-day/",
    },
    {
      name: "Tech Blog",
      description: "Blog site to discuss all things tech related",
      github: "https://github.com/bgeertsen/Tech-Blog",
      deploymnet: "https://floating-fjord-36919.herokuapp.com/",
    },
    {
      name: "Team Profile Generator",
      description: "Node app to generate a team profile html page",
      github: "https://github.com/bgeertsen/team-profile-generator",
    },
    {
      name: "Coding Quiz",
      description: "Web quiz with coding questions",
      github: "https://github.com/bgeertsen/bg-coding-quiz",
      deploymnet: "https://bgeertsen.github.io/bg-coding-quiz/",
    },
    {
      name: "Weather Dashboard",
      description: "Weather app",
      github: "https://github.com/bgeertsen/Weather-Dashboard",
      deploymnet: "https://bgeertsen.github.io/Weather-Dashboard/",
    },
  ]);

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
