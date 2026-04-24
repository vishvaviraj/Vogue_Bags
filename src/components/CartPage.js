import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cartItems }) {
  return (
    <section className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="cart-home-link">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <article key={item.id} className="cart-item-card">
              <div className="cart-item-image-wrap">
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
              <div className="cart-item-content">
                <h2>{item.name}</h2>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-qty">Quantity: {item.quantity}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default CartPage;
