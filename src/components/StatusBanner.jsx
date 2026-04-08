export default function StatusBanner({ tone, title, children }) {
  return (
    <div
      className={`status-banner status-${tone}`}
      role={tone === "error" ? "alert" : "status"}
      aria-live={tone === "error" ? "assertive" : "polite"}
    >
      <h3>{title}</h3>
      <div className="status-content">{children}</div>
    </div>
  );
}
