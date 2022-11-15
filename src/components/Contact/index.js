import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact">Email</h2>
      <p>brandon.geertsen@gmail.com</p>
      <h2 className="contact">Phone</h2>
      <p>509.771.2596</p>
      <h2 className="contact">On The Web</h2>
      <p>
        <a className="contact-links" href="https://github.com/bgeertsen">
          GitHub
        </a>{" "}
        |{" "}
        <a
          className="contact-links"
          href="https://www.linkedin.com/in/brandon-geertsen/"
        >
          Linkedin
        </a>
      </p>
    </div>
  );
}

export default Contact;
