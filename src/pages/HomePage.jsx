import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { serviceCategories } from "../data/services";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import QuickLinkCard from "../components/QuickLinkCard";
import { searchResources, searchServices } from "../lib/search";

export default function HomePage({ services, resources, quickLinks }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const popularSearches = [
    { label: "Financial support", query: "financial support" },
    { label: "Counselling", query: "counselling" },
    { label: "Accommodation", query: "accommodation" },
  ];
  const startHereItems = [
    {
      title: "I need urgent help",
      description: "Find urgent contacts and after-hours support.",
      href: "/resources/emergency-contacts-canberra",
    },
    {
      title: "I need financial support",
      description: "Check help with hardship and unexpected costs.",
      href: "/services?category=Financial+Assistance",
    },
    {
      title: "I need wellbeing support",
      description: "Find counselling and wellbeing support.",
      href: "/services?category=Mental+Health+and+Wellbeing",
    },
    {
      title: "I need help with study",
      description: "Get help with writing, planning, and study skills.",
      href: "/services?category=Academic+Support",
    },
    {
      title: "I am an international student",
      description: "Find support for settling in and studying in Canberra.",
      href: "/services?category=International+Student+Support",
    },
  ];
  const featuredResources = resources.slice(0, 3);

  const matchedServices = useMemo(() => {
    if (!query.trim()) {
      return services.slice(0, 3);
    }

    return searchServices(services, query).slice(0, 3);
  }, [query, services]);

  const matchedResources = useMemo(() => searchResources(resources, query).slice(0, 3), [query, resources]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-entry-card">
              <p className="eyebrow">Student services information for Canberra</p>
              <h1>Get support for study, wellbeing, housing, and day-to-day needs.</h1>
              <p className="lead">
                Use this portal to find support services, check who a service is for, and see
                what to do next. Content is written in plain English to help students, carers,
                and staff find information quickly.
              </p>
              <div className="hero-primary-action">
                <Link className="button-link button-link-primary-hero" to="/contact">
                  Get support now
                </Link>
              </div>
              <form className="hero-search-inline" onSubmit={handleSearchSubmit}>
                <SearchBar
                  id="home-service-search"
                  label="Search"
                  hideLabel
                  value={query}
                  onChange={setQuery}
                  placeholder="Search by service, topic, or keyword (e.g. financial support, counselling, accommodation)"
                />
              </form>
            </div>

            <aside className="hero-side-panel" aria-label="Popular searches and browsing options">
              <div className="popular-searches" aria-label="Popular searches">
                <p className="search-summary-label">Popular searches</p>
                <div className="popular-search-links popular-search-links-stacked">
                  {popularSearches.map((item) => (
                    <Link
                      key={item.query}
                      className="popular-search-link"
                      to={`/search?q=${encodeURIComponent(item.query)}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hero-actions hero-secondary-action">
                <Link className="text-link hero-secondary-link" to="/services">
                  Browse all services
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Start here</h2>
              <p>Choose the option that best matches your situation.</p>
            </div>
          </div>
          <div className="start-here-grid">
            {startHereItems.map((item) => (
              <article className="start-here-card" key={item.title}>
                <h3>
                  <Link className="card-link" to={item.href}>
                    {item.title}
                  </Link>
                </h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Quick links</h2>
              <p>Common tasks you may want to complete now.</p>
            </div>
          </div>
          <div className="quick-link-grid">
            {quickLinks.map((item) => (
              <QuickLinkCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Service categories</h2>
          <p className="section-intro">
            Browse support by need. Each service page explains eligibility, how to apply,
            documents you may need, and who to contact.
          </p>
          <div className="category-grid">
            {serviceCategories.map((category) => (
              <article className="category-card" key={category}>
                <h3>
                  <Link className="card-link" to={`/services?category=${encodeURIComponent(category)}`}>
                    {category}
                  </Link>
                </h3>
                <p>
                  {services.find((service) => service.category === category)?.summary ||
                    "Support information available."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Featured support pathways</h2>
              <p>Common support needs presented as clear, practical pathways.</p>
            </div>
            <Link className="text-link" to="/services">
              View full service directory
            </Link>
          </div>
          <div className="card-grid">
            {matchedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Featured resources</h2>
              <p>Useful guides and forms for common student support needs.</p>
            </div>
            <Link className="text-link" to={query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/resources"}>
              Browse all resources
            </Link>
          </div>
          <div className="resource-preview-grid">
            {(query.trim() && matchedResources.length > 0 ? matchedResources : featuredResources).map((resource) => (
              <article className="resource-preview-card" key={resource.id}>
                <p className="resource-meta">{resource.type}</p>
                <h3>
                  <Link className="card-link" to={`/resources/${resource.id}`}>
                    {resource.title}
                  </Link>
                </h3>
                <p>{resource.description}</p>
                <Link className="text-link card-cta" to={`/resources/${resource.id}`}>
                  View resource
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout-grid">
          <article className="info-panel">
            <h2>How we can help</h2>
            <ol className="step-list">
              <li>Help you find the right service without needing to know team names.</li>
              <li>Explain eligibility, documents, and next steps in plain English.</li>
              <li>Connect you with staff who can provide support or a referral.</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="container callout-grid">
          <article className="info-panel">
            <h2>Contact summary</h2>
            <p>
              Phone support is available Monday to Friday, 8:30 am to 5:00 pm. If you are not
              sure where to start, submit a general support request and we will direct your
              enquiry to the right team.
            </p>
            <p>
              Email: <a href="mailto:supportportal@actstudentservices.gov.au">supportportal@actstudentservices.gov.au</a>
            </p>
          </article>
          <article className="info-panel info-panel-secondary">
            <h2>Need urgent help?</h2>
            <p>
              If there is an immediate risk to safety, call emergency services on 000. For
              urgent wellbeing concerns outside business hours, use the crisis contacts
              resource.
            </p>
            <Link className="text-link" to="/resources/emergency-contacts-canberra">
              View urgent contacts
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
