import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import ResourceListItem from "../components/ResourceListItem";

export default function ResourcesPage({ resources, services }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [isLoading, setIsLoading] = useState(true);
  const resourceCategories = ["All categories", ...new Set(resources.map((resource) => resource.category))];

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All categories" || resource.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        [resource.title, resource.type, resource.category, resource.description, resource.audience]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, resources, selectedCategory]);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 150);
    return () => window.clearTimeout(timer);
  }, [query, selectedCategory]);

  return (
    <div className="page-section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources" }]} />
        <header className="page-header">
          <h1>Resources</h1>
          <p>
            Practical guides, checklists, and reference material to help students prepare for
            support appointments and find the right information quickly.
          </p>
        </header>

        <div className="toolbar-grid">
          <SearchBar
            id="resources-search"
            label="Search resources"
            value={query}
            onChange={setQuery}
            placeholder="Search for forms, guides, policies, or support documents"
          />
          <div className="filter-bar">
            <label htmlFor="resource-category-filter">Filter by resource category</label>
            <select
              id="resource-category-filter"
              name="resource-category-filter"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {resourceCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="results-summary" aria-live="polite">
          {filteredResources.length} resource{filteredResources.length === 1 ? "" : "s"} found
        </p>

        {isLoading ? (
          <LoadingState label="Updating resources" />
        ) : filteredResources.length > 0 ? (
          <div className="resource-list">
            {filteredResources.map((resource) => (
              <ResourceListItem key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <EmptyState title="No resources match your search">
            <>
              <p>
                Try a broader keyword or choose a different category such as forms, guides, or
                policies.
              </p>
              <p>
                <Link to="/resources">Browse all resources</Link>
              </p>
            </>
          </EmptyState>
        )}

        <section className="section-inline">
          <h2>Service directory snapshot</h2>
          <ul className="content-list two-column-list">
            {services.map((service) => (
              <li key={service.slug}>{service.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
