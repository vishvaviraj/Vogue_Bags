import React from 'react';
import './CategoryProductsPage.css';

function CategoryProductsPage({ title }) {
  const products = [1, 2, 3,4,5];

  return (
    <section className="category-page">
      <h1>{title}</h1>
      <div className="product-grid">
        {products.map((item) => (
          <article key={item} className="product-card">
            <div className="product-image-placeholder">Product Photo</div>
            <h3>{title} Product {item}</h3>
            <p>Add your product details here.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryProductsPage;
