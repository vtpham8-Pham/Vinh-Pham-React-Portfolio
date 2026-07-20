import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

export default function Home() {
  usePageTitle();

  return (
    <section className="hero-split hero-home">
      <div className="hero-left">
        <div>
          <span className="eyebrow">CS + Business — ASU &rsquo;27</span>
          <h1>Vinh Pham</h1>
          <p>
            Fourth Year Computer Science and Business student at Arizona State
            University.
          </p>
          <span className="role-pill">AI Operations Intern at Benchmark</span>
          <span className="role-pill">AI/ML Researcher at Algoverse</span>
        </div>
      </div>

      <div className="hero-right">
        <h2>
          <Link to="/about">ABOUT</Link>
        </h2>
        <h2>
          <Link to="/experience">EXPERIENCE</Link>
        </h2>
        <h2>
          <Link to="/projects">PROJECTS</Link>
        </h2>
        <h2>
          <Link to="/contact">CONTACT</Link>
        </h2>
      </div>
    </section>
  );
}
