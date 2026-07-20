import usePageTitle from "../hooks/usePageTitle.js";
import FadeInSection from "../components/FadeInSection.jsx";
import wasteNotPromptNot from "../assets/images/WasteNotPromptNot.png";
import recipeAi from "../assets/images/recipeai.png";
import nflStat from "../assets/images/NFL Stat.png";

const PROJECTS = [
  {
    href: "https://github.com/vinhhphvm/WasteNotPromptNot",
    image: wasteNotPromptNot,
    alt: "WasteNotPromptNot",
    tag: "Chrome Extension",
    title: "WasteNotPromptNot",
    description:
      "Chrome extension that detects redundant AI prompts using semantic similarity.",
  },
  {
    href: "https://github.com/vinhhphvm/Recipe-AI-Web-App",
    image: recipeAi,
    alt: "RecipeAI",
    tag: "Web App",
    title: "RecipeAI",
    description: "AI-powered tool that generates recipes based on ingredients.",
  },
  {
    href: "https://github.com/vinhhphvm/NFL-Stat-Predictor",
    image: nflStat,
    alt: "NFL Predictor",
    tag: "ML Model",
    title: "NFL Stats Predictor",
    description:
      "Machine learning model predicting NFL game outcomes using analytics.",
  },
];

export default function Projects() {
  usePageTitle("Projects");

  return (
    <div className="projects-page">
      <section className="hero-split">
        <div className="hero-left">
          <h1>Projects</h1>
          <p>Here are some of the projects I&rsquo;ve worked on recently.</p>
        </div>

        <div className="hero-right">
          <div className="scroll-cue">
            <span>Scroll</span>
            <span className="scroll-cue-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="projects-section">
        <FadeInSection as="div" className="project-grid">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
              </div>
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-link">View Project &rarr;</div>
            </a>
          ))}
        </FadeInSection>
      </section>
    </div>
  );
}
