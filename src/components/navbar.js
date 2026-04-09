import React from "react"
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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Navbar;