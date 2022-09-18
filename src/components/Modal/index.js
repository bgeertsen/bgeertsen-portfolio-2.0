import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectModal({ onClose, currentProject }) {
  const { name, description, github, deployment } = currentProject;
  return (
    <Modal.Dialog className="project-modal">
      <Modal.Header>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{description}</p>
        <p>
          Github Repo: <a href={github}>{github}</a>
        </p>
        <p>
          Desployed App: <a href={deployment}>{deployment}</a>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ProjectModal;
