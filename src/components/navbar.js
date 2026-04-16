import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../logo22.jpg";

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" className="logo" />
        <span>Vogue Bags</span>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/" className="menu-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="menu-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="menu-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="menu-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="menu-link">
            Register
          </NavLink>
        </li>
        <li className="categories-item">
          <button type="button" className="menu-link menu-button" onClick={toggleCategories}>
            Categories
          </button>
          {showCategories && (
            <div className="categories-dropdown">
              <Link to="/categories/backpack" className="dropdown-link" onClick={() => setShowCategories(false)}>
                Back Pack
              </Link>
              <Link to="/categories/hand-bags" className="dropdown-link" onClick={() => setShowCategories(false)}>
                Hand Bags
              </Link>
              <Link to="/categories/kids-bags" className="dropdown-link" onClick={() => setShowCategories(false)}>
                Kids Bags
              </Link>
              <Link to="/categories/luggages" className="dropdown-link" onClick={() => setShowCategories(false)}>
                Luggages
              </Link>
              <Link to="/categories/wallets" className="dropdown-link" onClick={() => setShowCategories(false)}>
                Wallets
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;