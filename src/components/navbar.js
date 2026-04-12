import React, { useState } from "react"
import "./navbar.css";
import logo from "../logo22.jpg";

function Navbar() {
  const [showContactDetails, setShowContactDetails] = useState(false);

  const toggleContactDetails = () => {
    setShowContactDetails((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" className="logo" />
        <span>MyBrand</span>
      </div>

      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li className="contact-item" onClick={toggleContactDetails}>
          Contact
          {showContactDetails && (
            <div className="contact-details">
              <p>Email: mybrand@example.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>WhatsApp: +91 98765 43210</p>
            </div>
          )}
        </li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Navbar;