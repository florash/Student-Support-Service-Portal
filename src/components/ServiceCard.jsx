import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="card">
      <p className="card-category">{service.category}</p>
      <h3>
        <Link className="card-link" to={`/services/${service.slug}`}>
          {service.name}
        </Link>
      </h3>
      <p className="card-summary">{service.summary}</p>
      <Link className="text-link card-cta" to={`/services/${service.slug}`}>
        View service details
      </Link>
    </article>
  );
}
