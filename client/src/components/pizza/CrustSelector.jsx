import "../../styles/CrustSelector.css";

const crusts = [
  {
    id: "regular",
    name: "Regular",
    price: 0,
    icon: "🍞",
  },
  {
    id: "thin",
    name: "Thin Crust",
    price: 40,
    icon: "🥖",
  },
  {
    id: "cheese",
    name: "Cheese Burst",
    price: 80,
    icon: "🧀",
  },
];

function CrustSelector({ selectedCrust, setSelectedCrust }) {
  return (
    <div className="customization-section">
      <h3 className="section-title">🍞 Choose Crust</h3>

      <div className="crust-grid">
        {crusts.map((crust) => (
          <div
            key={crust.id}
            className={`crust-card ${
              selectedCrust === crust.id ? "active" : ""
            }`}
            onClick={() => setSelectedCrust(crust.id)}
          >
            <div className="crust-icon">{crust.icon}</div>

            <div className="crust-name">{crust.name}</div>

            <div className="crust-price">
              {crust.price === 0 ? "Included" : `+₹${crust.price}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrustSelector;
