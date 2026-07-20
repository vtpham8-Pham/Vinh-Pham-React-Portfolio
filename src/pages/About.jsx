import usePageTitle from "../hooks/usePageTitle.js";
import FadeInSection from "../components/FadeInSection.jsx";
import headshot from "../assets/images/Headshot.jpg";

export default function About() {
  usePageTitle("About");

  return (
    <>
      <section className="hero-split">
        <div className="hero-left">
          <div>
            <h1>About Me</h1>
            <p>
              Hi, I'm Vinh! I'm a junior studying Computer Science and Business,
              and I am heavily interested in the software development, machine
              learning, and AI fields.
            </p>
            <p>
              In my free time, you'll see me playing tennis, golf, and
              pickleball, and working on my projects.
            </p>
          </div>
        </div>

        <div className="hero-right about-right">
          <div className="photo-frame">
            <img src={headshot} alt="Profile Picture" className="about-img" />
            <span className="photo-caption">Vinh Pham — Tempe, AZ</span>
          </div>
        </div>
      </section>

      <FadeInSection className="content-section">
        <h2>Who I Am</h2>
        <p>
          I am currently an AI/ML Researcher at Algoverse, where I explore how
          machine learning and AI can be applied to meaningful, real-world
          challenges.
        </p>
        <p>
          I focus on developing applications that leverage the power of machine
          learning and AI to create innovative solutions.
        </p>
        <p>
          I enjoy meeting new people from various backgrounds and collaborating
          on meaningful projects. If you're interested in working together,
          feel free to reach out.
        </p>
      </FadeInSection>

      <FadeInSection className="content-section">
        <h2>What I&rsquo;m Working On</h2>
        <ul>
          <li>Building and improving personal and academic software projects</li>
          <li>
            Expanding my knowledge in Machine Learning, AI, and Data Structures.
          </li>
          <li>Contributing to my current research role at Algoverse</li>
        </ul>
      </FadeInSection>

      <FadeInSection className="content-section">
        <h2>Technical Skills</h2>

        <table className="skills-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Languages</td>
              <td>Java, Python, C++, C#, JavaScript</td>
              <td>2+ Years</td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>HTML, CSS, React</td>
              <td>2+ Years</td>
            </tr>
            <tr>
              <td>Backend / Databases</td>
              <td>Node.js, MySQL, PostgreSQL</td>
              <td>1+ Year</td>
            </tr>
            <tr>
              <td>Tools</td>
              <td>Git, VS Code, Figma</td>
              <td>2+ Years</td>
            </tr>
          </tbody>
        </table>
      </FadeInSection>
    </>
  );
}
