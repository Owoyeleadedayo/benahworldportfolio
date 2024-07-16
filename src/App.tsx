import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
