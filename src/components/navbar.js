import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../logo22.png";

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" className="logo" />
        <span>Vogue Bags</span>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="10" cy="10" r="6" fill="none" strokeWidth="2" stroke="currentColor"/>
            <path d="M14 14l6 6" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/>
          </svg>
        </button>
      </form>

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
              
              
            </div>
          )}
        </li>
        <li className="account-item">
          <button
            type="button"
            className="menu-link menu-button account-button"
            onClick={toggleAccountMenu}
            aria-label="Account menu"
          >
            <svg
              className="account-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.2 3.6-7 8-7s8 2.8 8 7" />
            </svg>
          </button>
          {showAccountMenu && (
            <div className="account-dropdown">
              <Link to="/login" className="dropdown-link" onClick={() => setShowAccountMenu(false)}>
                Login
              </Link>
              <Link to="/register" className="dropdown-link" onClick={() => setShowAccountMenu(false)}>
                Register
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;