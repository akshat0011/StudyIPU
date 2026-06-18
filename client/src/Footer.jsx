import { Link } from "react-router";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Everything USICT students need to study and grow — in one place.</p>
        </div>
        <div className="footer-links">
          <Link to="/materials">Notes</Link>
          <Link to="/materials">PYQs</Link>
          <Link to="/materials">Video Lectures</Link>
          <Link to="/">Jobs</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 StudyUSICT · studyusict.com</span>
        <span>Made by students, for students.</span>
      </div>
    </footer>
  );
}

export default Footer;