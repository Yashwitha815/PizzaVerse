import "../../styles/ToppingsSelector.css";

const toppings = [
  { id: "cheese", name: "Extra Cheese", price: 40, icon: "🧀" },
  { id: "olive", name: "Olives", price: 30, icon: "🫒" },
  { id: "mushroom", name: "Mushrooms", price: 35, icon: "🍄" },
  { id: "jalapeno", name: "Jalapeños", price: 25, icon: "🌶️" },
  { id: "corn", name: "Sweet Corn", price: 20, icon: "🌽" },
  { id: "paneer", name: "Paneer", price: 50, icon: "🧈" },
];

function ToppingsSelector({ selectedToppings, setSelectedToppings }) {
  const toggleTopping = (id) => {
    if (selectedToppings.includes(id)) {
      setSelectedToppings(selectedToppings.filter((item) => item !== id));
    } else {
      setSelectedToppings([...selectedToppings, id]);
    }
  };

  return (
    <div className="customization-section">
      <h3 className="section-title">🧀 Extra Toppings</h3>

      <div className="toppings-grid">
        {toppings.map((topping) => (
          <div
            key={topping.id}
            className={`topping-card ${
              selectedToppings.includes(topping.id) ? "active" : ""
            }`}
            onClick={() => toggleTopping(topping.id)}
          >
            <span className="topping-icon">{topping.icon}</span>

            <div className="topping-details">
              <h4>{topping.name}</h4>
              <p>+₹{topping.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToppingsSelector;
