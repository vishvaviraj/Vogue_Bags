import React from 'react';
import './CategoryProductsPage.css';
import handbag1 from './images/handbag1.jpg';
import handbag2 from './images/handbag2.jpg';
import handbag3 from './images/handbag3.jpg';
import handbag4 from './images/handbag4.jpg';   
import handbag5 from './images/handbag5.png';

function CategoryProductsPage({ title }) {
  const handBagProducts = [
    { id: 1, name: 'Hand Bag 1', image: handbag1, price: '$49.99' },
    { id: 2, name: 'Hand Bag 2', image: handbag2, price: '$59.99' },
    { id: 3, name: 'Hand Bag 3', image: handbag3, price: '$69.99' },
    { id: 4, name: 'Hand Bag 4', image: handbag4, price: '$79.99' },
    { id: 5, name: 'Hand Bag 5', image: handbag5, price: '$89.99' }
  ];

  const defaultProducts = [1, 2, 3, 4, 5].map((item) => ({
    id: item,
    name: `${title} Product ${item}`,
    price: 'Add price',
  }));

  const products = title === 'Hand Bags' ? handBagProducts : defaultProducts;

  return (
    <section className="category-page">
      <h1>{title}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-placeholder">
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" />
              ) : (
                <span>Product Photo</span>
              )}
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryProductsPage;
