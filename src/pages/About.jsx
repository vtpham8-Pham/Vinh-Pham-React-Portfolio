import usePageTitle from "../hooks/usePageTitle.js";
import Footer from "../components/Footer.jsx";
import { Hero, Rows, responsive } from "../components/Kit.jsx";

const SKILLS = [
  ["Languages", "Python, C#, Java, C++, JavaScript, TypeScript, SQL, MATLAB"],
  ["AI and machine learning", "PyTorch, Hugging Face, scikit-learn, pandas, NumPy, Jupyter, LLM evaluation, retrieval-augmented generation, agentic memory, logistic regression"],
  ["Web and backend", "HTML, CSS, React, Next.js, Node.js, FastAPI, REST APIs, PostgreSQL, MySQL, Firebase Cloud Functions, Chrome Extensions API"],
  ["Tools", "Git, GitHub Copilot, VS Code, Claude Code, Docker, Jira, Figma, Power BI, Power Automate, Power Apps"],
  ["Practices", "Agile and Scrum, object-oriented programming, end-to-end testing, personal-data scrubbing"],
];

const WALL = [
  ["python", "Python"],
  ["pytorch", "PyTorch"],
  ["hugging-face", "Hugging Face"],
  ["pandas-icon", "pandas"],
  ["numpy", "NumPy"],
  ["jupyter", "Jupyter"],
  ["javascript", "JavaScript"],
  ["react", "React"],
  ["nextjs", "Next.js"],
  ["fastapi", "FastAPI"],
  ["postgres", "PostgreSQL"],
  ["docker", "Docker"],
  ["jira", "Jira"],
  ["figma", "Figma"],
  ["power-bi", "Power BI"],
  ["github-copilot", "GitHub Copilot"],
];

export default function About() {
  usePageTitle("About Vinh Pham: computer science senior at Arizona State University");

  return (
    <>
      <main id="top">
        <Hero
          kicker="Arizona State, Class of 2027, Dean's List"
          title="About Vinh, AI Operations and Product Intern"
          lead="A computer science major with a business minor, working where software, machine learning and AI meet a real team with real deadlines."
          secondary={{ href: "/projects", label: "See the projects" }}
          photo={{
            src: "/photos/pumpkin.jpg",
            alt: "Vinh Pham smiling on a hay bale at a pumpkin patch at night, holding a pumpkin",
            pos: "50% 90%",
            subject: "Vinh Pham at a pumpkin patch",
          }}
        />

        <section className="section" id="note" aria-labelledby="note-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-6">
                <div className="section-head">
                  <h2 id="note-h">A note from Vinh</h2>
                </div>
                <div className="stack-4 note">
                  <p>
                    Right now I&rsquo;m an AI Operations Intern at Benchmark Electronics and an AI
                    Product Manager Intern at APMAC Consulting, bringing AI into how teams run:
                    predictive tools, automated workflows and products that ship.
                  </p>
                  <p>
                    Before that I was an AI/ML Research Intern at Algoverse. I co-authored a paper on
                    harmful outputs from clinical language models, accepted to the GenAI4Health workshop
                    at NeurIPS 2026 in Sydney.
                  </p>
                  <p>
                    Outside work I play tennis, golf and pickleball, snowboard in the winter, and try new
                    food wherever I travel.
                  </p>
                </div>
              </div>
              <figure className="develop span-6 start-7" data-moment="picture-develops">
                <img
                  src="/photos/ice-cream.jpg"
                  {...responsive("/photos/ice-cream.jpg")}
                  alt="Vinh Pham in a Desert Dawgs tennis shirt holding a cup of ice cream at night"
                  width="1600"
                  height="1200"
                  loading="lazy"
                  data-source="client"
                  data-subject="Vinh Pham with ice cream"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="skills-h">Technical skills by area</h2>
            </div>
            <div className="grid grid--top">
              <Rows className="span-6" items={SKILLS} />
              <ul className="ic-wall skill-wall span-6 start-7" role="list" aria-label="Tools Vinh works with">
                {WALL.map(([icon, name]) => (
                  <li className="ic-tile" key={icon} title={name}>
                    <img className="ic" src={`/assets/icons/${icon}.svg`} alt={name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer
        close={{
          title: "Send Vinh a message",
          lead: "About a role, a project or research. Vinh is in Tempe, Arizona.",
        }}
      />
    </>
  );
}
