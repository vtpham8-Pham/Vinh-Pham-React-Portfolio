import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<About />} />
      </Routes>
    </>
  );
}
