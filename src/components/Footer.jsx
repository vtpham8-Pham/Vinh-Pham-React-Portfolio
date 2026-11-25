import { MAIN_ACTION, MArrow } from "./Kit.jsx";

const LINKEDIN = "https://www.linkedin.com/in/vinhhphvm/";
const GITHUB = "https://github.com/vinhhphvm";

// footer.closing: row 1 the invitation and its button, row 2 the footer-dark links.
export default function Footer({ close }) {
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">{close.title}</h2>
              <p className="t-lead">{close.lead}</p>
            </div>
            <a className="btn btn--primary" href={MAIN_ACTION.href}>
              {MAIN_ACTION.label}
              <MArrow />
            </a>
          </div>
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <p className="nav__logo footer__name">Vinh Pham</p>
              <p className="footer__lede">AI operations, product and research in Tempe, Arizona.</p>
            </div>
            <div className="span-2 start-9 footer__col">
              <h3>Pages</h3>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Elsewhere</h3>
              <ul>
                <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {new Date().getFullYear()} Vinh Pham</span>
            <span>Product names and logos are trademarks of their owners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
