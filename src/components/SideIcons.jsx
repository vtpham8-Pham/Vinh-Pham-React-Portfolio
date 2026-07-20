import { Link } from "react-router-dom";
import linkedin from "../assets/images/LinkedIn.svg";
import github from "../assets/images/GitHub.svg";
import email from "../assets/images/email.png";

export default function SideIcons() {
  return (
    <div className="side-icons">
      <a
        href="https://www.linkedin.com/in/vinhhphvm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/vinhhphvm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
      <Link to="/contact">
        <img src={email} alt="Email" />
      </Link>
    </div>
  );
}
