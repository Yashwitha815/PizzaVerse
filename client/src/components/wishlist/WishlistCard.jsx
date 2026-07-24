import "../../styles/WishlistCard.css";

import { FaTrash, FaShoppingCart, FaStar } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { toggleWishlist } from "../../features/wishlist/wishlistSlice";
import { openPizza } from "../../features/pizza/pizzaSlice";
import toast from "react-hot-toast";

function WishlistCard({ pizza }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(openPizza(pizza));

    toast.success("Item Added", {
      duration: 1000,
    });
  };

  const handleRemove = () => {
    dispatch(toggleWishlist(pizza));

    toast("Removed from Wishlist", {
      icon: "💔",
      duration: 1200,
    });
  };

  return (
    <div className="wishlist-card">
      <img src={pizza.image} alt={pizza.name} />

      <div className="wishlist-content">
        <h2>{pizza.name}</h2>

        <div className="wishlist-rating">
          <FaStar />

          <span>4.8</span>
        </div>

        <p>{pizza.description}</p>

        <h3>₹{pizza.price}</h3>

        <div className="wishlist-buttons">
          <button className="wishlist-cart-btn" onClick={handleAddToCart}>
            <FaShoppingCart />
            Add to Cart
          </button>

          <button className="wishlist-remove-btn" onClick={handleRemove}>
            <FaTrash />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
