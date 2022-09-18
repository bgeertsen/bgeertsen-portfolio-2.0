import React from "react";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img
        src={require(`../../Assets/images/profile.jpg`)}
        alt="Profile Pic"
      ></img>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit euismod in
        pellentesque massa. In dictum non consectetur a erat nam at lectus. Nec
        nam aliquam sem et tortor consequat id. Sagittis id consectetur purus ut
        faucibus pulvinar. Dignissim convallis aenean et tortor. Nisl rhoncus
        mattis rhoncus urna neque viverra justo.
      </p>
    </div>
  );
}

export default About;
