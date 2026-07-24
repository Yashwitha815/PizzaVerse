import "../../styles/SortDropdown.css";

function SortDropdown({ sortOption, setSortOption }) {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort By:</label>

      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Featured</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="nameAZ">Name: A to Z</option>
      </select>
    </div>
  );
}

export default SortDropdown;