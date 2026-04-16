import React from 'react';
import './CategoryProductsPage.css';
import handbag1 from './images/handbag1.jpg';
import handbag2 from './images/handbag2.jpg';
import handbag3 from './images/handbag3.jpg';
import handbag4 from './images/handbag4.jpg';   
import handbag5 from './images/handbag5.png';
import backpack1 from './images/backpack1.jpg';
import backpack2 from './images/backpack2.jpg';
import backpack3 from './images/backpack3.jpg';
import backpack4 from './images/backpack4.jpg';
import backpack5 from './images/backpack5.jpg';
function CategoryProductsPage({ title }) {
  const handBagProducts = [
    { id: 1, name: 'Hand Bag 1', image: handbag1, price: 'Rs. 4999.99' },
    { id: 2, name: 'Hand Bag 2', image: handbag2, price: 'Rs. 5999.99' },
    { id: 3, name: 'Hand Bag 3', image: handbag3, price: 'Rs. 6999.99' },
    { id: 4, name: 'Hand Bag 4', image: handbag4, price: 'Rs. 7999.99' },
    { id: 5, name: 'Hand Bag 5', image: handbag5, price: 'Rs. 8999.99' }
  ];


  const defaultProducts = [1, 2, 3, 4, 5].map((item) => ({
    id: item,
    name: `${title} Product ${item}`,
    price: 'Add price',
  }));

  const backpackProducts = [
    { id: 1, name: ' JD Backpack Laptop Bag, Multi layer storage for fast travel. ', image: backpack1, price: 'Rs. 3999.99' },
    { id: 2, name: ' AVI Unisex Backpack Blue ,PU leather Travel Backpack ', image: backpack2, price: 'Rs. 4999.99' },
    { id: 3, name: ' JD soundcore Backpack  ', image: backpack3, price: 'Rs. 5999.99' },
    { id: 4, name: ' Louiswill Laptop Backpack Water Resistant Bag Casual Business Laptop Bag ', image: backpack4, price: 'Rs. 6999.99' },
    { id: 5, name: 'Outdoor Waterproof Travel Backpack for, Laptop Bag, Climbing, Sports, Hiking Rucksack(C)', image: backpack5, price: 'Rs. 7999.99' }
  ];

  const productsByCategory = {
    'Hand Bags': handBagProducts,
    'Back Pack': backpackProducts,
  };

  const products = productsByCategory[title] || defaultProducts;

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
