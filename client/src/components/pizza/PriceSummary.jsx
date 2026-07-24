import "../../styles/PriceSummary.css";

import { calculatePizzaPrice } from "../../utils/calculatePizzaPrice";

function PriceSummary({
  pizza,
  selectedSize,
  selectedCrust,
  selectedToppings,
  quantity,
}) {
  const { sizePrice, crustPrice, toppingsPrice, totalPrice } =
    calculatePizzaPrice({
      basePrice: pizza.price,
      selectedSize,
      selectedCrust,
      selectedToppings,
      quantity,
    });

  return (
    <div className="price-summary">
      <h3 className="section-title">💰 Price Summary</h3>

      <div className="price-row">
        <span>Base Pizza</span>
        <span>₹{pizza.price}</span>
      </div>

      <div className="price-row">
        <span>Size</span>

        <span>
          {sizePrice > 0
            ? `+₹${sizePrice}`
            : sizePrice < 0
              ? `-₹${Math.abs(sizePrice)}`
              : "Included"}
        </span>
      </div>

      <div className="price-row">
        <span>Crust</span>

        <span>{crustPrice > 0 ? `+₹${crustPrice}` : "Included"}</span>
      </div>

      <div className="price-row">
        <span>Toppings</span>

        <span>{toppingsPrice > 0 ? `+₹${toppingsPrice}` : "None"}</span>
      </div>

      <div className="price-row">
        <span>Quantity</span>

        <span>× {quantity}</span>
      </div>

      <div className="total-row">
        <span>Total</span>

        <span>₹{totalPrice}</span>
      </div>
    </div>
  );
}

export default PriceSummary;
