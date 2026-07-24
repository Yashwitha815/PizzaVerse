import "../../styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaPizzaSlice, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const totalWishlistItems = wishlistItems.length;

  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <FaPizzaSlice className="logo-icon" />
        <span>PizzaVerse</span>
      </Link>

      {/* Navigation */}
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Menu
        </NavLink>

        <NavLink
          to="/offers"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Offers
        </NavLink>
      </nav>

      {/* Right Side */}

      <div className="nav-actions">
        <NavLink to="/wishlist" className="icon-btn wishlist-btn">
          <div className="wishlist-icon-wrapper">
            <FaHeart />

            {totalWishlistItems > 0 && (
              <span key={totalWishlistItems} className="wishlist-badge">
                {totalWishlistItems}
              </span>
            )}
          </div>
        </NavLink>

        <NavLink to="/cart" className="cart-btn">
          <div className="cart-icon-wrapper">
            <FaShoppingCart />

            {totalCartItems > 0 && (
              <span className="cart-badge">{totalCartItems}</span>
            )}
          </div>

          <span>Cart</span>
        </NavLink>

        <NavLink to="/login" className="login-btn">
          <FaUser />

          <span>Login</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
