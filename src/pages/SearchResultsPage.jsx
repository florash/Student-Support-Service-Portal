import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCard from "../components/ServiceCard";
import ResourceListItem from "../components/ResourceListItem";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import { searchResources, searchServices } from "../lib/search";

export default function SearchResultsPage({ services, resources }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [isLoading, setIsLoading] = useState(true);
  const serviceMatches = searchServices(services, query);
  const resourceMatches = searchResources(resources, query);
  const totalResults = serviceMatches.length + resourceMatches.length;

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 180);
    return () => window.clearTimeout(timer);
  }, [query]);

  return (
    <div className="page-section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Search results" },
          ]}
        />
        <header className="page-header">
          <h1>Search results</h1>
          <p className="lead">
            Search across services and resources using a support topic, service name, or key
            word.
          </p>
          <div className="search-summary-card">
            <p className="search-summary-label">Current search</p>
            <p className="search-summary-term">{query || "No search term entered"}</p>
            <p className="helper-text">
              Use the homepage or service and resource pages to start a new search.
            </p>
          </div>
          <p className="results-summary" aria-live="polite">
            {totalResults} result{totalResults === 1 ? "" : "s"} found
          </p>
        </header>

        {isLoading ? (
          <LoadingState label="Searching services and resources" />
        ) : !query || totalResults === 0 ? (
          <EmptyState title="No results found">
            <>
              <p>
                Try a broader term such as counselling, hardship, housing, accessibility, or
                study support. You can also browse the service directory or resources page if
                you are not sure what words to use.
              </p>
              <p>
                <Link to="/services">Browse services</Link> or <Link to="/resources">browse resources</Link>.
              </p>
            </>
          </EmptyState>
        ) : (
          <div className="search-results-layout">
            <section>
              <div className="section-heading">
                <div>
                  <h2>Services</h2>
                  <p>Support services matching your search.</p>
                </div>
                <Link className="text-link" to="/services">
                  Browse all services
                </Link>
              </div>
              {serviceMatches.length > 0 ? (
                <div className="card-grid">
                  {serviceMatches.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </div>
              ) : (
                <EmptyState title="No matching services">
                  <>
                    <p>
                      No services matched this search term. Try searching for a support topic
                      rather than an internal service name.
                    </p>
                    <p>
                      <Link to="/services">Browse all services</Link>
                    </p>
                  </>
                </EmptyState>
              )}
            </section>

            <section>
              <div className="section-heading">
                <div>
                  <h2>Resources</h2>
                  <p>Guides, forms, and support documents matching your search.</p>
                </div>
                <Link className="text-link" to="/resources">
                  Browse all resources
                </Link>
              </div>
              {resourceMatches.length > 0 ? (
                <div className="resource-list">
                  {resourceMatches.map((resource) => (
                    <ResourceListItem key={resource.id} resource={resource} />
                  ))}
                </div>
              ) : (
                <EmptyState title="No matching resources">
                  <>
                    <p>
                      No resources matched this search term. Try terms like guide, form,
                      policy, accommodation, or financial support.
                    </p>
                    <p>
                      <Link to="/resources">Browse all resources</Link>
                    </p>
                  </>
                </EmptyState>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
