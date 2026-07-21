import usePageTitle from "../hooks/usePageTitle.js";
import Slideshow from "../components/Slideshow.jsx";
import photo1 from "../assets/images/photo-1.jpeg";
import photo2 from "../assets/images/photo-2.JPG";
import photo3 from "../assets/images/photo-3.jpeg";
import photo4 from "../assets/images/photo-4.jpeg";
import photo5 from "../assets/images/photo-5.jpeg";

const SLIDES = [
  { src: photo1, alt: "Vinh Pham at the Euro sign sculpture in Frankfurt" },
  { src: photo2, alt: "Vinh Pham getting ice cream" },
  { src: photo3, alt: "Vinh Pham eating pho" },
  { src: photo4, alt: "Vinh Pham on a rooftop at sunset with a friend" },
  { src: photo5, alt: "Vinh Pham with friends" },
];

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
        <Slideshow images={SLIDES} />
      </div>
    </section>
  );
}
