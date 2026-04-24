import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './ProductDetailsPage.css';
import { getProductById } from './productsData';

function ProductDetailsPage({ onAddToCart }) {
  const { productId } = useParams();
  const location = useLocation();
  const productFromState = location.state?.product;
  const product = productFromState || getProductById(productId);
  const backPath = location.state?.fromPath || '/';

  if (!product) {
    return (
      <section className="product-details-page">
        <h1>Product Not Found</h1>
        <p>The product you selected is not available.</p>
        <Link to={backPath} className="details-home-link">
          Go Back Home
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    alert(`${product.name} added to cart.`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${product.name}.`);
  };

  return (
    <section className="product-details-page">
      <div className="details-card">
        <div className="details-image-wrap">
          <img src={product.image} alt={product.name} className="details-image" />
        </div>
        <div className="details-content">
          <p className="details-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="details-price">{product.price}</p>
          <p className="details-description">{product.description}</p>
          <div className="details-actions">
            <button type="button" className="details-btn details-btn-secondary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button type="button" className="details-btn details-btn-primary" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
          <Link to={backPath} className="details-home-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
