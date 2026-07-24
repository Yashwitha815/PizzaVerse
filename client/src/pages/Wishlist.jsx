import { useSelector } from "react-redux";

import WishlistCard from "../components/wishlist/WishlistCard";
import EmptyWishlist from "../components/wishlist/EmptyWishlist";

import "../styles/Wishlist.css";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>❤️ My Wishlist</h1>

        <p>Save your favourite pizzas and order them anytime.</p>
      </div>

      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((pizza) => (
            <WishlistCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
