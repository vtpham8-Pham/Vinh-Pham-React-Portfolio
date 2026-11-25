import usePageTitle from "../hooks/usePageTitle.js";
import Footer from "../components/Footer.jsx";
import { Hero, Rows, responsive, CodePanel, WASTENOT_CODE, NFL_CODE } from "../components/Kit.jsx";

const WORK = [
  ["Risk-detection agent", "Python and logistic regression flag at-risk projects early", "Benchmark"],
  ["Power Platform automation", "Technology compliance up from 12% to 48%", "Benchmark"],
  ["AI sales engine", "A 10-person team across 4 sub-teams", "APMAC"],
  ["Data-scrubbing layer", "FastAPI rules strip 8 kinds of personal data", "APMAC"],
];

export default function Home() {
  usePageTitle("Vinh Pham: AI Operations and Product Intern in Tempe, Arizona");

  return (
    <>
      <main id="top">
        <Hero
          kicker="Graduating from Arizona State in May 2027"
          title="Vinh Pham, AI Operations and Product Intern"
          lead="I build AI tools at Benchmark Electronics and lead a 10-person AI product team at APMAC Consulting, both in Tempe."
          secondary={{ href: "/experience", label: "See the experience" }}
          photo={{
            src: "/photos/headshot.jpg",
            alt: "Portrait of Vinh Pham in a grey suit and black tie",
            pos: "50% 30%",
            subject: "Vinh Pham",
          }}
          float={{
            label: "Now",
            when: "Since Aug 2026",
            title: "AI Operations Intern, Benchmark Electronics",
          }}
        />

        <section className="section" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-6">
                <div className="section-head">
                  <h2 id="work-h">Current work at two companies</h2>
                  <p>Both roles started this fall, alongside the last year of a computer science degree.</p>
                </div>
                <Rows items={WORK} />
              </div>
              <figure className="develop span-6 start-7" data-moment="picture-develops">
                <img
                  src="/photos/frankfurt.jpg"
                  {...responsive("/photos/frankfurt.jpg")}
                  alt="Vinh Pham in a long coat in front of the euro sculpture in Frankfurt"
                  width="1200"
                  height="1600"
                  loading="lazy"
                  data-source="client"
                  data-subject="Vinh Pham in Frankfurt"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section statement" id="research" data-moment="word-highlight" aria-label="Research">
          <div className="wrap">
            <p className="t-label">Research</p>
            <p className="mo-wh__text">
              At Algoverse I co-authored a paper on clinical LLM safety, accepted to the GenAI4Health
              workshop at NeurIPS 2026 in Sydney. Our corrective memory notes cut harmful outputs from
              63.4% to <strong>15.1%</strong>.
            </p>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projects-h">A Chrome extension and an NFL touchdown model</h2>
              <p>
                A Chrome extension that trims wasted prompt text by 25%, and a touchdown model trained on
                50,000+ NFL plays.
              </p>
            </div>
            <div className="grid fill">
              <a
                className="card card--open project-card span-6"
                href="https://github.com/vinhhphvm/WasteNotPromptNot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>WasteNotPromptNot, the Chrome extension</h3>
                <p>Cuts greetings, hedges and filler from a prompt before it is sent.</p>
                <CodePanel {...WASTENOT_CODE} />
              </a>
              <a
                className="card card--open project-card span-6"
                href="https://github.com/vinhhphvm/NFL-Stat-Predictor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>NFL TD Predictor, the touchdown model</h3>
                <p>Predicts a season&rsquo;s touchdowns from the season before.</p>
                <CodePanel {...NFL_CODE} />
              </a>
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
