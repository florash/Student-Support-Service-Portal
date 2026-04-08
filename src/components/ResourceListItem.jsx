import { Link } from "react-router-dom";

export default function ResourceListItem({ resource }) {
  return (
    <Link className="resource-card resource-card-link" to={`/resources/${resource.id}`}>
      <div>
        <p className="resource-meta">
          {resource.category} · {resource.type}
        </p>
        <h2>{resource.title}</h2>
        <p>{resource.description}</p>
        <p className="helper-text">Audience: {resource.audience}</p>
      </div>
      <span className="text-link">
        {resource.linkLabel}
      </span>
    </Link>
  );
}
