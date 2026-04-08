import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { resources } from "../data/resources";

export default function ServiceDetailPage({ services }) {
  const { serviceSlug } = useParams();
  const service = services.find((entry) => entry.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = service.relatedServices
    .map((slug) => services.find((entry) => entry.slug === slug))
    .filter(Boolean);
  const helpfulResources = resources.filter((resource) => {
    if (service.category === "Financial Assistance") {
      return resource.category === "Forms" || resource.title.includes("hardship");
    }

    if (service.category === "Accessibility and Inclusion") {
      return resource.title.includes("Accessible") || resource.category === "Policies";
    }

    if (service.category === "International Student Support") {
      return resource.title.includes("Canberra");
    }

    if (service.category === "Academic Support") {
      return resource.title.includes("Academic writing");
    }

    if (service.category === "Accommodation Support") {
      return resource.title.includes("Accommodation");
    }

    if (service.category === "Mental Health and Wellbeing") {
      return resource.title.includes("Emergency contacts");
    }

    return false;
  });

  return (
    <div className="page-section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: service.name },
          ]}
        />

        <div className="service-layout">
          <article className="service-content">
            <p className="card-category">{service.category}</p>
            <h1>{service.name}</h1>
            <p className="lead">{service.summary}</p>

            <section className="content-section">
              <h2>Who can use this service</h2>
              <p>{service.eligibility}</p>
            </section>

            <section className="content-section">
              <h2>How to apply</h2>
              <ol className="step-list">
                {service.howToApply.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="content-section">
              <h2>Required documents</h2>
              <ul className="content-list">
                {service.requiredDocuments.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </section>

            <section className="content-section">
              <h2>What happens next</h2>
              <ol className="step-list">
                {service.whatHappensNext.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="content-section">
              <h2>Helpful links and resources</h2>
              <ul className="content-list">
                {helpfulResources.map((resource) => (
                  <li key={resource.title}>
                    <Link to={`/resources/${resource.id}`}>{resource.title}</Link>
                  </li>
                ))}
                {helpfulResources.length === 0 ? (
                  <li>
                    <Link to="/resources">Browse related resources and support documents</Link>
                  </li>
                ) : null}
              </ul>
            </section>
          </article>

          <aside className="service-sidebar">
            <section className="sidebar-card">
              <h2>Key information</h2>
              <dl className="details-list">
                <div>
                  <dt>Category</dt>
                  <dd>{service.category}</dd>
                </div>
                <div>
                  <dt>Response time</dt>
                  <dd>{service.responseTime}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{service.contact.hours}</dd>
                </div>
              </dl>
              <Link className="button-link" to="/contact">
                Request support
              </Link>
            </section>

            <section className="sidebar-card">
              <h2>Contact details</h2>
              <dl className="details-list">
                <div>
                  <dt>Phone</dt>
                  <dd>{service.contact.phone}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{service.contact.email}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{service.contact.hours}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{service.contact.location}</dd>
                </div>
              </dl>
            </section>

            <section className="sidebar-card">
              <h2>Related services</h2>
              <ul className="content-list">
                {relatedServices.map((relatedService) => (
                  <li key={relatedService.slug}>
                    <Link to={`/services/${relatedService.slug}`}>{relatedService.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
