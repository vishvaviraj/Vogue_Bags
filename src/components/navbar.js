import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../logo22.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" className="logo" />
        <span>MyBrand</span>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/" className="menu-link">
            Home
          </NavLink>
        </li>
        <li>About</li>
        <li>
          <NavLink to="/contact" className="menu-link">
            Contact
          </NavLink>
        </li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Navbar;