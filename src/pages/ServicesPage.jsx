import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ServiceCard from "../components/ServiceCard";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import { serviceCategories } from "../data/services";

export default function ServicesPage({ services }) {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category")
    ? decodeURIComponent(searchParams.get("category"))
    : "All categories";
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isLoading, setIsLoading] = useState(true);

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === "All categories" || service.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${service.name} ${service.summary} ${service.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory, services]);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 150);
    return () => window.clearTimeout(timer);
  }, [query, selectedCategory]);

  return (
    <div className="page-section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
        <header className="page-header">
          <h1>Services</h1>
          <p>
            Browse student support services by category or search for a practical topic such
            as hardship, counselling, study skills, housing, or accessibility.
          </p>
        </header>

        <div className="toolbar-grid">
          <SearchBar
            id="services-search"
            label="Search services"
            value={query}
            onChange={setQuery}
          />
          <FilterBar
            categories={serviceCategories}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        <p className="results-summary" aria-live="polite">
          {filteredServices.length} service{filteredServices.length === 1 ? "" : "s"} found
        </p>

        {isLoading ? (
          <LoadingState label="Updating services" />
        ) : (
          <div className="card-grid">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        )}

        {!isLoading && filteredServices.length === 0 ? (
          <EmptyState title="No services match your search">
            <>
              <p>
                Try a broader keyword, remove the category filter, or search by the kind of
                help you need rather than a service name.
              </p>
              <p>
                <Link to="/services">Clear filters and browse all services</Link>
              </p>
            </>
          </EmptyState>
        ) : null}
      </div>
    </div>
  );
}
