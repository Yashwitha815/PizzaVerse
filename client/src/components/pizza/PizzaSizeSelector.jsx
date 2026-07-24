import "../../styles/PizzaSizeSelector.css";

function PizzaSizeSelector({ selectedSize, setSelectedSize }) {
  const sizes = [
    {
      name: "Small",
      price: -80,
      label: "-₹80",
    },
    {
      name: "Medium",
      price: 0,
      label: "Base Price",
    },
    {
      name: "Large",
      price: 80,
      label: "+₹80",
    },
  ];

  return (
    <div className="size-section">
      <h3>Choose Size</h3>

      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size.name}
            className={`size-btn ${
              selectedSize === size.name ? "active-size" : ""
            }`}
            onClick={() => setSelectedSize(size.name)}
          >
            <span>{size.name}</span>

            <small>{size.label}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PizzaSizeSelector;
