import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="body">
      <Header
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {aboutSelected && <About />}
        {projectSelected && <Project />}
        {resumeSelected && <Resume />}
        {contactSelected && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
