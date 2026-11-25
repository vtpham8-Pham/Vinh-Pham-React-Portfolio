import usePageTitle from "../hooks/usePageTitle.js";
import Footer from "../components/Footer.jsx";
import { Hero, Rows, CodePanel, WASTENOT_CODE, NFL_CODE } from "../components/Kit.jsx";

// What WasteNotPromptNot's real rules (data/wasteful_patterns.json) cut from one prompt.
const PROMPT = [
  ["Hi", "Greeting not needed"],
  [" Claude, "],
  ["I was wondering if", "Verbose opener"],
  [" you "],
  ["could you", "Verbose opener"],
  [" "],
  ["please", "Politeness not needed"],
  [" summarize this report, "],
  ["if possible", "Hedging adds length"],
  [". "],
  ["Thanks!", "Politeness not needed"],
];

function PromptDemo() {
  const reasons = [...new Set(PROMPT.filter(([, why]) => why).map(([, why]) => why))];
  return (
    <div
      className="panel prompt-demo span-6 start-7"
      role="img"
      aria-label="A prompt with its greeting, verbose openers, please, a hedge and thanks struck out, leaving: summarize this report."
    >
      <div className="prompt-demo__card" aria-hidden="true">
        <p className="t-label muted">Prompt as typed</p>
        <p className="prompt-demo__text">
          {PROMPT.map(([text, why], i) => (why ? <del key={i}>{text}</del> : <span key={i}>{text}</span>))}
        </p>
        <ul className="prompt-demo__why">
          {reasons.map((why) => (
            <li key={why}>{why}</li>
          ))}
        </ul>
        <p className="t-label muted">Sent to the model</p>
        <p className="prompt-demo__text">Summarize this report.</p>
      </div>
    </div>
  );
}

export default function Projects() {
  usePageTitle("Vinh Pham's projects: a prompt-trimming extension and an NFL model");

  return (
    <>
      <main id="top">
        <Hero
          kicker="Two projects, both on GitHub"
          title="Product work in AI tooling and sports models"
          lead="WasteNotPromptNot trims wasted prompt text before it reaches a model. The NFL TD Predictor estimates touchdowns from past seasons' plays."
          secondary={{ href: "https://github.com/vinhhphvm", label: "See the code on GitHub" }}
          visual={<CodePanel {...WASTENOT_CODE} className="hero-code" />}
        />

        <section className="section" id="wastenot" aria-labelledby="wastenot-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-6">
                <div className="section-head">
                  <h2 id="wastenot-h">WasteNotPromptNot, a Chrome extension</h2>
                  <p>
                    It flags wasteful chatbot prompts as you type, using semantic similarity to known bad
                    patterns. September 2025.
                  </p>
                </div>
                <Rows
                  items={[
                    ["25% shorter prompts", "On average, before the prompt reaches the model"],
                    ["3rd place overall", "At the hackathon it was built for"],
                    ["Built with", "JavaScript, Firebase Cloud Functions, Chrome Extensions API, Figma"],
                  ]}
                />
                <p>
                  <a className="link" href="https://github.com/vinhhphvm/WasteNotPromptNot" target="_blank" rel="noopener noreferrer">
                    See WasteNotPromptNot on GitHub
                  </a>
                </p>
              </div>
              <PromptDemo />
            </div>
          </div>
        </section>

        <section className="section" id="nfl" aria-labelledby="nfl-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5 stack-6">
                <div className="section-head">
                  <h2 id="nfl-h">NFL TD Predictor, a scikit-learn model</h2>
                  <p>
                    An end-to-end pipeline that predicts touchdowns from the season before, with vectorized
                    features in pandas and NumPy. November 2025.
                  </p>
                </div>
                <Rows
                  items={[
                    ["50,000+ play records", "Play-by-play data from the 2023 to 2025 seasons"],
                    ["150% faster", "Pipeline runs after vectorizing the features"],
                    ["Built with", "Python, scikit-learn, pandas, NumPy, Jupyter"],
                  ]}
                />
                <p>
                  <a className="link" href="https://github.com/vinhhphvm/NFL-Stat-Predictor" target="_blank" rel="noopener noreferrer">
                    See the NFL TD Predictor on GitHub
                  </a>
                </p>
              </div>
              <CodePanel {...NFL_CODE} className="span-6 start-7" />
            </div>
          </div>
        </section>
      </main>

      <Footer
        close={{
          title: "Send Vinh a message",
          lead: "About a role, a project or research. Vinh is in Tempe, Arizona.",
          photo: {
            src: "/photos/headshot.jpg",
            alt: "Portrait of Vinh Pham in a grey suit",
            pos: "50% 30%",
            subject: "Vinh Pham",
          },
        }}
      />
    </>
  );
}
