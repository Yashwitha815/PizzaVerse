import "../../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">🍕 PizzaVerse</h2>

          <p>
            Freshly baked pizzas made with premium ingredients,
            delivered hot and delicious to your doorstep.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>

          <p><FaPhoneAlt /> +91 98765 43210</p>

          <p><FaEnvelope /> support@pizzaverse.com</p>

          <p><FaMapMarkerAlt /> Dharwad, Karnataka</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 PizzaVerse. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>Yashwitha</strong> 
        </p>
      </div>
    </footer>
  );
}

export default Footer;