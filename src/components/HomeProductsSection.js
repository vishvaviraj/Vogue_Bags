import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeProductsSection.css';
import { homeProducts } from './productsData';

function HomeProductsSection() {
  const navigate = useNavigate();

  const handbags = homeProducts.filter((product) => product.category === 'Hand Bags');
  const backpacks = homeProducts.filter((product) => product.category === 'Back Pack');

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart.`);
  };

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  const renderRow = (title, products) => (
    <div className="home-products-row">
      <h2>{title}</h2>
      <div className="home-products-grid">
        {products.map((product) => (
          <article key={product.id} className="home-product-card">
            <Link to={`/product/${product.id}`} className="home-product-image-link">
              <img src={product.image} alt={product.name} className="home-product-image" />
            </Link>
            <h3>
              <Link to={`/product/${product.id}`} className="home-product-name-link">
                {product.name}
              </Link>
            </h3>
            <p className="home-product-price">{product.price}</p>
            <div className="home-product-actions">
              <button type="button" className="home-btn home-btn-secondary" onClick={() => handleAddToCart(product.name)}>
                Add to Cart
              </button>
              <button type="button" className="home-btn home-btn-primary" onClick={() => handleBuyNow(product.id)}>
                Buy Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section className="home-products-section">
      {renderRow('Hand Bags', handbags)}
      {renderRow('Back Packs', backpacks)}
    </section>
  );
}

export default HomeProductsSection;
