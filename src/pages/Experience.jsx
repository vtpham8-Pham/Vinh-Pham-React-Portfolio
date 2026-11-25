import usePageTitle from "../hooks/usePageTitle.js";
import Footer from "../components/Footer.jsx";
import { Hero, Rows, ToolGrid } from "../components/Kit.jsx";

// The one still diagram of the page (diagrams.md): the three interventions the paper tested.
const PAPER_DIAGRAM = {
  layout: "lanes",
  alt: "Clinical prompts go to an agentic memory system, which applies three interventions: memory scaffolds, query-conditioned retrieval and runtime context interventions.",
  input: { label: "Prompts", icon: "ui:stethoscope", sub: "10,800+ runs" },
  core: { label: "Memory", icon: "ui:brain" },
  lanes: [
    { label: "Scaffolds", icon: "ui:layers", done: true, sub: "Notes" },
    { label: "Retrieval", icon: "ui:search", done: true, sub: "A-MEM" },
    { label: "Runtime", icon: "ui:shield-check", done: true, sub: "In context" },
  ],
};

export default function Experience() {
  usePageTitle("Vinh Pham's experience: AI operations, product and research");

  return (
    <>
      <main id="top">
        <Hero
          kicker="Current as of November 2026"
          title="Experience in AI operations and product work"
          lead="AI Operations Intern at Benchmark Electronics since August, AI Product Manager Intern at APMAC Consulting since September, after research at Algoverse."
          secondary={{ href: "/projects", label: "See the projects" }}
          photo={{
            src: "/photos/frankfurt.jpg",
            alt: "Vinh Pham in a long coat in front of the euro sculpture in Frankfurt",
            pos: "50% 62%",
            subject: "Vinh Pham in Frankfurt",
          }}
        />

        <section className="section g2" id="roles" aria-labelledby="roles-h">
          <div className="wrap">
            <div className="group">
            <div className="section-head">
              <h2 id="roles-h">Two current roles in Tempe</h2>
            </div>
            <div className="grid grid--top role" id="benchmark">
              <div className="span-5 role__title">
                <h3>AI Operations Intern, Benchmark Electronics</h3>
                <p className="muted">Since August 2026</p>
              </div>
              <div className="panel org-panel role__logo span-6 start-7" style={{ "--org-bg": "#00599c" }}>
                <img src="/photos/benchmark.png" alt="Benchmark Electronics logo" />
              </div>
              <Rows
                className="span-5"
                items={[
                  ["Risk-detection agent", "Logistic regression on past project data flags at-risk deals for leadership"],
                  ["Enterprise workflows", "Power Automate, Power Apps and Power BI for alerts and executive dashboards"],
                  ["Compliance from 12% to 48%", "Automation, tracking dashboards and standard workflow monitoring"],
                ]}
              />
              <div className="span-6 start-7">
                <ToolGrid
                  cols={2}
                  tools={[
                    ["python", "Python", "The risk-detection agent"],
                    ["github-copilot", "GitHub Copilot", "Agent development", "ic-ink"],
                    ["power-bi", "Power BI", "Product realization dashboards", "ic-tall"],
                    ["jupyter", "Jupyter", "Model training on project history", "ic-tall"],
                  ]}
                />
              </div>
            </div>
            </div>
            <div className="grid grid--top role" id="apmac">
              <div className="span-5 role__title">
                <h3>AI Product Manager Intern, APMAC Consulting</h3>
                <p className="muted">Since September 2026</p>
              </div>
              <div className="panel org-panel role__logo span-6 start-7" style={{ "--org-bg": "#7a0808" }}>
                <img src="/photos/apmac.jpg" alt="APMAC Consulting logo" />
              </div>
              <Rows
                className="span-5"
                items={[
                  ["A 10-person team", "Four sub-teams building an AI sales engine, 70+ Jira issues"],
                  ["Data-scrubbing layer", "73 header rules and 5 value patterns strip 8 kinds of personal data"],
                  ["14 defects logged", "Tested end to end in Docker, including a cross-tenant data leak"],
                ]}
              />
              <div className="span-6 start-7">
                <ToolGrid
                  cols={2}
                  tools={[
                    ["nextjs", "Next.js", "The sales engine's front end"],
                    ["fastapi", "FastAPI", "The data-scrubbing layer"],
                    ["postgres", "PostgreSQL", "Where clean records land"],
                    ["docker", "Docker", "End-to-end testing", "ic-land"],
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section research" id="algoverse" aria-labelledby="algoverse-h" style={{ "--h": 2 }}>
          <div className="wrap">
            <div className="research__statement" id="paper">
              <div className="paper-badge">
                <span className="ly-live">Accepted</span>
                <span className="paper-badge__venue">GenAI4Health workshop, NeurIPS 2026, Sydney</span>
              </div>
              <p className="mo-wh__text" data-moment="word-highlight">
                Our corrective memory notes cut harmful clinical LLM outputs from 63.4% to 15.1% across
                10,800+ generations, closing <strong>76.3%</strong> of the safety gap with no over-refusal on
                benign requests.
              </p>
            </div>
            <div className="section-head">
              <h2 id="algoverse-h">AI/ML Research Intern, Algoverse</h2>
              <p>Remote, June to September 2026. Co-authored paper accepted to the GenAI4Health workshop at NeurIPS 2026 in Sydney.</p>
            </div>
            <div className="grid grid--top fill">
              <Rows
                className="span-5"
                items={[
                  ["The paper", "Mitigating emergent clinical LLM misalignment with agentic memory"],
                  ["Corrective memory notes", "Harmful outputs down from 63.4% to 15.1%"],
                  ["Evaluation", "A-MEM and corrective retrieval across 10,800+ generations"],
                ]}
              />
              <div className="panel diagram-panel span-6 start-7">
                <div className="dg" data-diagram data-still>
                  <script
                    type="application/json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(PAPER_DIAGRAM) }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="education-h">Computer science at Arizona State</h2>
              <p>Bachelor of Science in Computer Science, minor in Business. August 2023 to May 2027.</p>
            </div>
            <div className="grid grid--top">
              <Rows
                className="span-6"
                items={[
                  [
                    "Coursework",
                    "Databases, software analysis, testing and engineering, distributed systems, operating systems, data structures and algorithms",
                  ],
                  ["Organizations", "Alpha Kappa Psi professional business fraternity, Software Developers Association"],
                  ["Honors", "Dean's List"],
                ]}
              />
              <div className="panel logo-panel span-6 start-7">
                <img src="/photos/asu.png" alt="Arizona State University logo" loading="lazy" />
              </div>
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
