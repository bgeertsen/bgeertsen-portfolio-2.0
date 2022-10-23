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
        Full-stack web developer with a passion for learning new technologies
        and expanding my skill set. Recently earned a certificate in full stack
        development from the University of Oregon Coding Bootcamp. Developed
        skills in Javascript, CSS, React.js, MySQL, NOSQL, and MongoDB. Among my
        team members I’m known as a reliable workhorse and a creative problem
        solver. My goal with each project is to write clean code, and create
        applications with user friendly interfaces. I developed a single-page
        MERN app with 4 other developers that helps manage household chores and
        activities. I’m excited to leverage my skills as part of a first-rate
        team to create user friendly experiences on the web.
      </p>
    </div>
  );
}

export default About;
