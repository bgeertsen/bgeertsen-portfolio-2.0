import React from "react";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="img-container">
        <img
          src={require(`../../Assets/images/profile.jpg`)}
          alt="Profile Pic"
        ></img>
      </div>

      <p>
        My name is Brandon Geertsen and I am a curently studying full-stack web
        development in the Universty of Oregon's coding bootcamp. I love to code
        and to collaborate with other developers.
      </p>
      <p>
        I prefer working with backend technologies like Express, Node, and
        MongoDB. However I also enjoy working with front-end javascript!
      </p>
    </div>
  );
}

export default About;
