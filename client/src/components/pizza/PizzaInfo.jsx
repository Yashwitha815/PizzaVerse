import "../../styles/PizzaInfo.css";

import { FaStar } from "react-icons/fa";

function PizzaInfo({ pizza }) {
  return (
    <>
      <div className="pizza-info-header">
        <div>
          <h1>{pizza.name}</h1>

          <div className="pizza-meta">
            <span className="pizza-rating">
              <FaStar />
              4.8
            </span>

            <span
              className={
                pizza.category === "Veg" ? "veg-badge" : "nonveg-badge"
              }
            >
              {pizza.category}
            </span>
          </div>
        </div>

        <h2 className="pizza-main-price">₹{pizza.price}</h2>
      </div>

      <p className="pizza-desc">{pizza.description}</p>
    </>
  );
}

export default PizzaInfo;
