import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="body">
      <Header />
      {/* <About /> */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;
