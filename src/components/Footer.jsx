import { MAIN_ACTION, MArrow, responsive } from "./Kit.jsx";

const LINKEDIN = "https://www.linkedin.com/in/vinhhphvm/";
const GITHUB = "https://github.com/vinhhphvm";

// footer.closing (layout-v4.md): row 1 the dealt close (close-photo), row 2 the footer-dark links.
export default function Footer({ close }) {
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
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
          <div className="close__media">
            <img
              src={close.photo.src}
              {...responsive(close.photo.src, "(max-width: 639px) 200vw, 100vw")}
              alt={close.photo.alt}
              style={close.photo.pos ? { "--pos": close.photo.pos } : undefined}
              loading="lazy"
              data-source="client"
              data-subject={close.photo.subject}
            />
          </div>
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__name" href="/">
                Vinh Pham
              </a>
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
