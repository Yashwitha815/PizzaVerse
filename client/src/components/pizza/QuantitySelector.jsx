import "../../styles/QuantitySelector.css";

function QuantitySelector({ quantity, setQuantity }) {
  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="customization-section">
      <h3 className="section-title">🔢 Quantity</h3>

      <div className="quantity-box">
        <button className="qty-btn" onClick={decrease}>
          −
        </button>

        <span className="qty-value">{quantity}</span>

        <button className="qty-btn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
