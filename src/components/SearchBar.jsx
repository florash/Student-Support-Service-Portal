export default function SearchBar({
  label,
  value,
  onChange,
  placeholder = "Search services or support topics",
  id = "search-input",
  hideLabel = false,
}) {
  return (
    <div className="search-field">
      <label className={hideLabel ? "visually-hidden" : undefined} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
