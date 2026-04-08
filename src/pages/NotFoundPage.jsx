import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function NotFoundPage() {
  return (
    <div className="page-section">
      <div className="container narrow-content">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Page not found" }]} />
        <h1>Page not found</h1>
        <p>
          The page you requested is not available or may have moved. Return to the homepage or
          use one of the common links below.
        </p>
        <Link className="button-link" to="/">
          Return to homepage
        </Link>
        <section className="section-inline">
          <h2>Common links</h2>
          <ul className="content-list">
            <li>
              <Link to="/services">Browse support services</Link>
            </li>
            <li>
              <Link to="/resources">Read resources and guides</Link>
            </li>
            <li>
              <Link to="/contact">Request support</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
