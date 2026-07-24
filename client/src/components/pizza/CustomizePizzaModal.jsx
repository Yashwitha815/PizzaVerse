import "../../styles/CustomizePizzaModal.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closePizza } from "../../features/pizza/pizzaSlice";

import PizzaImage from "./PizzaImage";
import PizzaInfo from "./PizzaInfo";
import PizzaSizeSelector from "./PizzaSizeSelector";
import CrustSelector from "./CrustSelector";
import ToppingsSelector from "./ToppingsSelector";
import QuantitySelector from "./QuantitySelector";
import PriceSummary from "./PriceSummary";
import AddToCartBar from "./AddToCartBar";

function CustomizePizzaModal() {
  const dispatch = useDispatch();

  const { isOpen, selectedPizza, mode, editingCartId } = useSelector(
    (state) => state.pizza,
  );

  const [selectedSize, setSelectedSize] = useState(
    () => selectedPizza?.size ?? "Medium",
  );

  const [selectedCrust, setSelectedCrust] = useState(
    () => selectedPizza?.crust ?? "regular",
  );

  const [selectedToppings, setSelectedToppings] = useState(
    () => selectedPizza?.toppings ?? [],
  );

  const [quantity, setQuantity] = useState(() => selectedPizza?.quantity ?? 1);

  useEffect(() => {
    if (!isOpen || !selectedPizza) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dispatch(closePizza());
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isOpen, selectedPizza]);

  if (!isOpen || !selectedPizza) return null;

  return (
    <div className="pizza-modal-overlay" onClick={() => dispatch(closePizza())}>
      <div className="pizza-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => dispatch(closePizza())}>
          ✕
        </button>

        <div className="pizza-layout">
          <div className="left-panel">
            <PizzaImage pizza={selectedPizza} />
          </div>

          <div className="right-panel">
            <PizzaInfo pizza={selectedPizza} />

            <PizzaSizeSelector
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            <CrustSelector
              selectedCrust={selectedCrust}
              setSelectedCrust={setSelectedCrust}
            />

            <ToppingsSelector
              selectedToppings={selectedToppings}
              setSelectedToppings={setSelectedToppings}
            />

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <PriceSummary
              pizza={selectedPizza}
              selectedSize={selectedSize}
              selectedCrust={selectedCrust}
              selectedToppings={selectedToppings}
              quantity={quantity}
            />

            <AddToCartBar
              pizza={selectedPizza}
              mode={mode}
              editingCartId={editingCartId}
              selectedSize={selectedSize}
              selectedCrust={selectedCrust}
              selectedToppings={selectedToppings}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizePizzaModal;
