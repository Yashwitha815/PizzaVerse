import "../../styles/AddToCartBar.css";

import { useDispatch } from "react-redux";

import { addToCart, updateCartItem } from "../../features/cart/cartSlice";

import { closePizza } from "../../features/pizza/pizzaSlice";

import { calculatePizzaPrice } from "../../utils/calculatePizzaPrice";

function AddToCartBar({
  pizza,
  mode,
  editingCartId,
  selectedSize,
  selectedCrust,
  selectedToppings,
  quantity,
}) {
  const dispatch = useDispatch();

  const { singlePizzaPrice, totalPrice } = calculatePizzaPrice({
    basePrice: pizza.price,
    selectedSize,
    selectedCrust,
    selectedToppings,
    quantity,
  });

  const handleSubmit = () => {
    const cartItem = {
      ...pizza,

      cartId: `${pizza._id}-${selectedSize}-${selectedCrust}-${selectedToppings
        .slice()
        .sort()
        .join("-")}`,

      size: selectedSize,
      crust: selectedCrust,
      toppings: [...selectedToppings],

      basePrice: pizza.price,
      singlePizzaPrice,

      quantity,
    };

    if (mode === "edit") {
      dispatch(
        updateCartItem({
          oldCartId: editingCartId,
          updatedItem: cartItem,
        }),
      );
    } else {
      dispatch(addToCart(cartItem));
    }

    dispatch(closePizza());
  };

  return (
    <div className="bottom-action">
      <div className="bottom-total">
        <span>Total</span>
        <h2>₹{totalPrice}</h2>
      </div>

      <button className="add-cart-btn" onClick={handleSubmit}>
        {mode === "edit"
          ? `💾 Update Cart • ₹${totalPrice}`
          : `🛒 Add to Cart • ₹${totalPrice}`}
      </button>
    </div>
  );
}

export default AddToCartBar;
