export default function FilterBar({ categories, value, onChange }) {
  return (
    <div className="filter-bar">
      <label htmlFor="service-category-filter">Filter by category</label>
      <select
        id="service-category-filter"
        name="service-category-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="All categories">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
