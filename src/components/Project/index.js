import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectModal from "../Modal";

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState([
    {
      name: "Dose",
      description:
        "An app to keep track of prescriptions and get text notifications for refill dates",
      github: "https://github.com/kfisch2/dose",
      deployment: " https://cryptic-inlet-45736.herokuapp.com/",
    },
    {
      name: "Daily Cocktaily",
      description:
        "Get a random cocktail recipe based on the current weather in your area!",
      github: "https://github.com/slorreina369/cocktail-day",
      deployment: "https://slorreina369.github.io/cocktail-day/",
    },
    {
      name: "Tech Blog",
      description: "Blog site to discuss all things tech related",
      github: "https://github.com/bgeertsen/Tech-Blog",
      deployment: "https://floating-fjord-36919.herokuapp.com/",
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
      deployment: "https://bgeertsen.github.io/bg-coding-quiz/",
    },
    {
      name: "Weather Dashboard",
      description: "Weather app",
      github: "https://github.com/bgeertsen/Weather-Dashboard",
      deployment: "https://bgeertsen.github.io/Weather-Dashboard/",
    },
  ]);

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
    window.scroll(0, 0);
  };

  return (
    <Container className="project-container">
      {isModalOpen && (
        <ProjectModal currentProject={currentProject} onClose={toggleModal} />
      )}
      <Row>
        {projects.map((project, i) => (
          <Col className="project" xs={12} md={6} xl={4}>
            <img
              className="project-pic"
              src={require(`../../Assets/images/project-images/${i}.png`)}
              alt={project.name}
              onClick={() => toggleModal(project, i)}
              key={project.name}
            ></img>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;
