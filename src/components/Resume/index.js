import React from "react";

function Resume() {
  return (
    <div className="resume">
      <a
        className="download"
        href={require(`../../Assets/docs/Resume2022.pdf`)}
        download
      >
        Download
      </a>
      <h1>Resume</h1>
      <h2>Front-end Proficiencies</h2>
      <uL>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Responsive design</li>
      </uL>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQL, Apollo</li>
      </ul>
    </div>
  );
}

export default Resume;
