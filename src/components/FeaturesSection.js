import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="feature-item">
        <div className="feature-icon">🚚</div>
        <h3>FREE SHIPPING</h3>
        <p>Free Shipping on all orders</p>
      </div>

      <div className="feature-item">
        <div className="feature-icon">💰</div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>100% Money Back Guarantee</p>
      </div>

      <div className="feature-item">
        <div className="feature-icon">🏠</div>
        <h3>FREE CUSTOMER SUPPORT</h3>
        <p>Support 24 hours online</p>
      </div>
    </section>
  );
}

export default FeaturesSection;
