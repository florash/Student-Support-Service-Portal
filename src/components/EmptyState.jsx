export default function EmptyState({ title, children }) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <div className="empty-state-content">{children}</div>
    </div>
  );
}
