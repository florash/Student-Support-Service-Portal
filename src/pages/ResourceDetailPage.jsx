import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ResourceListItem from "../components/ResourceListItem";

export default function ResourceDetailPage({ resources }) {
  const { resourceId } = useParams();
  const resource = resources.find((entry) => entry.id === resourceId);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const relatedResources = resources
    .filter(
      (entry) =>
        entry.id !== resource.id &&
        (entry.category === resource.category || entry.audience === resource.audience),
    )
    .slice(0, 3);

  const primaryActionLabel =
    resource.type === "Form"
      ? "View form"
      : resource.type === "Guide"
        ? "Read guide"
        : "View resource";

  return (
    <div className="page-section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Resources", to: "/resources" },
            { label: resource.title },
          ]}
        />

        <div className="resource-detail-layout">
          <article className="resource-detail-content">
            <p className="card-category">{resource.category}</p>
            <header className="page-header">
              <h1>{resource.title}</h1>
              <p className="lead">{resource.summary}</p>
            </header>

            <section className="content-section" id="resource-content">
              <h2>About this resource</h2>
              <p>{resource.content}</p>
            </section>

            <section className="content-section">
              <h2>Who this may help</h2>
              <p>{resource.whoThisMayHelp}</p>
            </section>

            <section className="content-section">
              <h2>What&apos;s included</h2>
              <ul className="content-list">
                {resource.whatsIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="content-section">
              <h2>How to use this resource</h2>
              <p>{resource.howToUse}</p>
            </section>
          </article>

          <aside className="resource-detail-sidebar">
            <section className="sidebar-card">
              <h2>Resource information</h2>
              <dl className="details-list">
                <div>
                  <dt>Type</dt>
                  <dd>{resource.type}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{resource.category}</dd>
                </div>
                <div>
                  <dt>Last updated</dt>
                  <dd>{resource.lastUpdated}</dd>
                </div>
              </dl>
              <a className="button-link" href="#resource-content">
                {primaryActionLabel}
              </a>
              <button type="button" className="text-button" onClick={() => window.print()}>
                Print this page
              </button>
            </section>

            <section className="sidebar-card">
              <h2>Need more help?</h2>
              <p>
                If this resource does not fully answer your question, contact the support team
                or browse related services for the next step.
              </p>
              <Link className="text-link" to="/contact">
                Get support now
              </Link>
            </section>
          </aside>
        </div>

        <section className="section-inline">
          <div className="section-heading">
            <div>
              <h2>Related resources</h2>
              <p>Other documents that may be useful for this support topic.</p>
            </div>
            <Link className="text-link" to="/resources">
              Browse all resources
            </Link>
          </div>
          <div className="resource-list">
            {relatedResources.map((relatedResource) => (
              <ResourceListItem key={relatedResource.id} resource={relatedResource} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
