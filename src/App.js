import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
