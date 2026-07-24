import "../../styles/EmptyWishlist.css";

import { Link } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";

function EmptyWishlist() {
  return (
    <div className="empty-wishlist">
      <FaHeartBroken className="empty-heart" />

      <h2>Your Wishlist is Empty</h2>

      <p>Save your favourite pizzas here and order them anytime.</p>

      <Link to="/menu" className="browse-menu-btn">
        🍕 Browse Menu
      </Link>
    </div>
  );
}

export default EmptyWishlist;
