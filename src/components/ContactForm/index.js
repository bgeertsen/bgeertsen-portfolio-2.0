import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function errorChecking(e) {
    if (e.target.name === "email") {
      const isValidEmail = validateEmail(e.target.value);

      if (!isValidEmail) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Form className="contact-form">
      <Form.Group className="mb-3" onBlur={errorChecking}>
        <Form.Label htmlFor="name">Name: </Form.Label>
        <Form.Control
          className="input-box"
          name="name"
          defaultValue={name}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" onBlur={errorChecking}>
        <Form.Label htmlFor="email">Email address:</Form.Label>
        <Form.Control
          className="input-box"
          name="email"
          defaultValue={email}
          type="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" onBlur={errorChecking}>
        <Form.Label htmlFor="message">Message:</Form.Label>
        <Form.Control
          name="message"
          defaultValue={message}
          as="textarea"
          rows={3}
          className="message-box"
        />
      </Form.Group>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}

      <Button
        className="send-button"
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Form>
  );
}

export default ContactForm;
