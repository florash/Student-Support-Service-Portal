export default function LoadingState({ label = "Loading content" }) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <div className="loading-indicator" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}
