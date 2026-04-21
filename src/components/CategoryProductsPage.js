import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CategoryProductsPage.css';
import { categoryProducts } from './productsData';

function CategoryProductsPage({ title }) {
  const location = useLocation();

  const defaultProducts = [1, 2, 3, 4, 5].map((item) => ({
    id: item,
    name: `${title} Product ${item}`,
    price: 'Add price',
    description: 'Product description will be available soon.',
  }));

  const products = categoryProducts[title] || defaultProducts;

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart.`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}.`);
  };

  return (
    <section className="category-page">
      <h1>{title}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-placeholder">
              {product.image ? (
                <Link
                  to={`/product/${product.id}`}
                  state={{ product: { ...product, category: title }, fromPath: location.pathname }}
                  className="product-image-link"
                >
                  <img src={product.image} alt={product.name} className="product-image" />
                </Link>
              ) : (
                <span>Product Photo</span>
              )}
            </div>
            <h3>
              <Link
                to={`/product/${product.id}`}
                state={{ product: { ...product, category: title }, fromPath: location.pathname }}
                className="product-name-link"
              >
                {product.name}
              </Link>
            </h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <button
                type="button"
                className="product-btn product-btn-secondary"
                onClick={() => handleAddToCart(product.name)}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="product-btn product-btn-primary"
                onClick={() => handleBuyNow(product.name)}
              >
                Buy Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryProductsPage;
