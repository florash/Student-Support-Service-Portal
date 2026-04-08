import { Link } from "react-router-dom";

export default function QuickLinkCard({ item }) {
  return (
    <article className={item.featured ? "quick-link-card quick-link-card-featured" : "quick-link-card"}>
      <h3>
        <Link className="card-link" to={item.href}>
          {item.title}
        </Link>
      </h3>
      <p>{item.description}</p>
    </article>
  );
}
