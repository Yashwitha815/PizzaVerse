import "../../styles/CategoryFilter.css";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Veg", "Non-Veg"];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;