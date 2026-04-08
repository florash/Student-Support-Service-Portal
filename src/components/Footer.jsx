import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2 className="footer-heading">Contact</h2>
          <p>Student Support Service Portal</p>
          <p>
            <a href="tel:+61262003000">(02) 6200 3000</a>
          </p>
          <p>
            <a href="mailto:supportportal@actstudentservices.gov.au">
              supportportal@actstudentservices.gov.au
            </a>
          </p>
        </section>
        <section>
          <h2 className="footer-heading">Opening hours</h2>
          <p>Monday to Friday</p>
          <p>8:30 am to 5:00 pm</p>
          <p>Closed ACT public holidays</p>
        </section>
        <section>
          <h2 className="footer-heading">Quick links</h2>
          <ul className="footer-list">
            <li>
              <Link to="/services">Browse services</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/contact">Request support</Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="footer-heading">Accessibility</h2>
          <p>
            We aim to provide accessible digital services and plain-English content for
            students, carers, and community members.
          </p>
          <ul className="footer-list">
            <li>
              <Link to="/accessibility">Accessibility</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link to="/help">Help and support</Link>
            </li>
            <li>If you need information in another format, contact the portal for help.</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
