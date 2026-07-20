import usePageTitle from "../hooks/usePageTitle.js";
import FadeInSection from "../components/FadeInSection.jsx";
import algoverse from "../assets/images/algoverse.jpeg";
import handshake from "../assets/images/handshake.png";
import asu from "../assets/images/asu.png";

export default function Experience() {
  usePageTitle("Experience");

  return (
    <>
      <section className="hero-split">
        <div className="hero-left">
          <h1>Experience</h1>
          <p>Scroll down to see my roles, research, and education.</p>
        </div>

        <div className="hero-right">
          <div className="scroll-cue">
            <span>Scroll</span>
            <span className="scroll-cue-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      <FadeInSection className="content-section">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-logo">
              <img src={algoverse} alt="Algoverse Logo" />
            </div>

            <div className="timeline-text">
              <h3>AI/ML Researcher</h3>
              <p className="org">Algoverse</p>
              <p className="date">May 2026 &mdash; Present</p>

              <p>
                Selected for a 12-week research program focused on applying
                AI and machine learning techniques to real-world research.
              </p>

              <ul>
                <li>
                  Develop and evaluate machine learning models using
                  real-world datasets
                </li>
                <li>
                  Explore data analysis, model optimization, and performance
                  evaluation
                </li>
                <li>
                  Collaborate with researchers and mentors on AI-driven
                  projects
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-logo">
              <img src={handshake} alt="Handshake Logo" />
            </div>

            <div className="timeline-text">
              <h3>AI Trainer</h3>
              <p className="org">Handshake AI &mdash; Project Hedgehog</p>
              <p className="date">December 2025 &mdash; Present</p>

              <p>
                Contributed to training and improving AI systems by
                evaluating model outputs and refining prompt quality.
              </p>

              <ul>
                <li>
                  Analyzed AI-generated responses to improve accuracy and
                  relevance
                </li>
                <li>
                  Developed and refined prompts to enhance model performance
                </li>
                <li>
                  Provided structured feedback to optimize AI behavior and
                  outputs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="content-section">
        <h2 className="education-title">Education</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-logo">
              <img src={asu} alt="ASU Logo" />
            </div>

            <div className="timeline-text">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="org">Arizona State University</p>
              <p className="date">August 2023 &mdash; May 2027</p>

              <p className="coursework">
                Relevant coursework: Distributed Software Development,
                Operating Systems, Software Engineering, Data Structures &
                Algorithms, Object-Oriented Programming, Web Design,
                Information Assurance, Programming Languages
              </p>

              <p className="coursework">
                Organizations: Alpha Kappa Psi, Software Developer&rsquo;s
                Association, Dean&rsquo;s List
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
