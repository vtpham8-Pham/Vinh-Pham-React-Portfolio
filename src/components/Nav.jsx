import { useLocation } from "react-router-dom";
import { MAIN_ACTION } from "./Kit.jsx";

const ORGS = [
  { name: "Benchmark Electronics", role: "AI Operations Intern, since Aug 2026", logo: "/photos/benchmark.png", bg: "#00599c", href: "/experience#benchmark" },
  { name: "APMAC Consulting", role: "AI Product Manager Intern, since Sep 2026", logo: "/photos/apmac.jpg", bg: "#7a0808", href: "/experience#apmac" },
  { name: "Algoverse", role: "AI/ML Research Intern, Jun to Sep 2026", logo: "/photos/algoverse.jpg", bg: "#ffffff", href: "/experience#algoverse" },
];

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience", menu: true },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// nav-split (sections-library.md): four words left, the name in the middle, the main action right.
// Projects opens the panel of photograph cards. Plain links: every page is a full load.
export default function Nav() {
  const { pathname } = useLocation();

  return (
    <header className="nav nav--split">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <a className="nav__logo" href="/">
          Vinh Pham
        </a>
        <nav className="nav__links" aria-label="Main">
          {LINKS.map((link) => (
            <div className="nav__item" key={link.href}>
              <a
                className="nav__link"
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
                {link.menu && (
                  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                    <path
                      d="M3 4.5l3 3 3-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
              {link.menu && (
                <div className="nav__menu">
                  <div className="wrap grid">
                    {ORGS.map((org) => (
                      <a className="menu-card span-3" href={org.href} key={org.name}>
                        <div className="panel org-panel" style={{ "--org-bg": org.bg }}>
                          <img src={org.logo} alt={`${org.name} logo`} />
                        </div>
                        <span className="t-card">{org.name}</span>
                        <span className="t-small muted">{org.role}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={MAIN_ACTION.href}>
            {MAIN_ACTION.label}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
