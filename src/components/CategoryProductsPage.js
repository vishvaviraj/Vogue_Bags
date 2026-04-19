import React from 'react';
import './CategoryProductsPage.css';
import handbag1 from './images/handbag1.jpg';
import handbag2 from './images/handbag2.jpg';
import handbag3 from './images/handbag3.jpg';
import handbag4 from './images/handbag4.jpg';   
import handbag5 from './images/handbag5.jpeg';
import backpack1 from './images/backpack1.jpg';
import backpack2 from './images/backpack2.jpg';
import backpack3 from './images/backpack3.jpg';
import backpack4 from './images/backpack4.jpg';
import backpack5 from './images/backpack5.jpg';
import bag1 from './images/bag1.jpg';
import bag2 from './images/bag2.jpeg';
import bag3 from './images/bag3.jpg';
import bag4 from './images/bag4.jpeg';
import bag5 from './images/bag5.avif';
function CategoryProductsPage({ title }) {
  const handBagProducts = [
    { id: 1, name: 'Handbags For Women Shoulder Bags Casual Leather Messenger Bag Large Capacity Handbag Women\'s ', image: handbag1, price: 'Rs. 4999.99' },
    { id: 2, name: 'Home Ladies Purse Handbag The Perfect Double Strap Tote Rose Pink', image: handbag2, price: 'Rs. 5999.99' },
    { id: 3, name: 'Fashion Woman Bag Female Hand Tote Bag Messenger Shoulder Bag Lady HandBag ', image: handbag3, price: 'Rs. 6999.99' },
    { id: 4, name: 'IONIKK Shoulder Bag for Women Embroidered Women Leather Handbags Hand Bags For Women', image: handbag4, price: 'Rs. 7999.99' },
    { id: 5, name: 'Genuine Leather Luxury Ladies Handbag ', image: handbag5, price: 'Rs. 8999.99' }
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
const kidsbagProducts = [
    { id: 1, name: 'Stylbase Car Kids School Bags for Boys And Girls Printed Cartoon Water – Resistant Backpack for Kids', image: bag1, price: 'Rs. 1999.99' },
    { id: 2, name: 'Kids School Bag for Boys and Girls, Water Resistant, Lightweight and Durable', image: bag2, price: 'Rs. 2999.99' },
    { id: 3, name: 'Children\'s Backpack for School, Cute Cartoon Design, Multiple Pockets', image: bag3, price: 'Rs. 3999.99' },
    { id: 4, name: 'Toddler Backpack for Kids, Colorful and Fun Design, Easy to Carry', image: bag4, price: 'Rs. 4999.99' },
    { id: 5, name: 'Boys Girls School Backpack, Lightweight and Durable, Multiple Compartments', image: bag5, price: 'Rs. 5999.99' }
  ];


  const productsByCategory = {
    'Hand Bags': handBagProducts,
    'Back Pack': backpackProducts,
    'Kids Bags': kidsbagProducts,
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
