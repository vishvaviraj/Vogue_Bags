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
    { id: 1, name: 'Handbags For Women Shoulder Bags Casual Leather Messenger Bag Large Capacity Handbag Women\'s ', image: handbag1, price: 'Rs. 4999.99', description: 'Large-capacity casual leather handbag with secure zip and comfortable shoulder carry.' },
    { id: 2, name: 'Home Ladies Purse Handbag The Perfect Double Strap Tote Rose Pink', image: handbag2, price: 'Rs. 5999.99', description: 'Double strap rose pink tote designed for daily office use and casual styling.' },
    { id: 3, name: 'Fashion Woman Bag Female Hand Tote Bag Messenger Shoulder Bag Lady HandBag ', image: handbag3, price: 'Rs. 6999.99', description: 'Elegant messenger style tote with multiple compartments and smooth finish.' },
    { id: 4, name: 'IONIKK Shoulder Bag for Women Embroidered Women Leather Handbags Hand Bags For Women', image: handbag4, price: 'Rs. 7999.99', description: 'Premium embroidered leather shoulder bag with a bold fashion-forward look.' },
    { id: 5, name: 'Genuine Leather Luxury Ladies Handbag ', image: handbag5, price: 'Rs. 8999.99', description: 'Luxury genuine leather handbag crafted for style, durability, and comfort.' }
  ];


  const defaultProducts = [1, 2, 3, 4, 5].map((item) => ({
    id: item,
    name: `${title} Product ${item}`,
    price: 'Add price',
    description: 'Product description will be available soon.',
  }));

  const backpackProducts = [
    { id: 1, name: ' JD Backpack Laptop Bag, Multi layer storage for fast travel. ', image: backpack1, price: 'Rs. 3999.99', description: 'Multi-layer laptop backpack with quick-access pockets for travel and work.' },
    { id: 2, name: ' AVI Unisex Backpack Blue ,PU leather Travel Backpack ', image: backpack2, price: 'Rs. 4999.99', description: 'Stylish blue unisex travel backpack with PU leather finish and spacious design.' },
    { id: 3, name: ' JD soundcore Backpack  ', image: backpack3, price: 'Rs. 5999.99', description: 'Everyday casual backpack with strong build and smart internal organization.' },
    { id: 4, name: ' Louiswill Laptop Backpack Water Resistant Bag Casual Business Laptop Bag ', image: backpack4, price: 'Rs. 6999.99', description: 'Water-resistant business backpack ideal for laptops, files, and accessories.' },
    { id: 5, name: 'Outdoor Waterproof Travel Backpack for, Laptop Bag, Climbing, Sports, Hiking Rucksack(C)', image: backpack5, price: 'Rs. 7999.99', description: 'Outdoor-ready waterproof rucksack built for climbing, sports, and hiking.' }
  ];
const kidsbagProducts = [
    { id: 1, name: 'Stylbase Car Kids School Bags for Boys And Girls Printed Cartoon Water – Resistant Backpack for Kids', image: bag1, price: 'Rs. 1999.99', description: 'Fun cartoon print school bag with water-resistant material and light carry.' },
    { id: 2, name: 'Kids School Bag for Boys and Girls, Water Resistant, Lightweight and Durable', image: bag2, price: 'Rs. 2999.99', description: 'Durable lightweight kids school backpack with comfortable shoulder support.' },
    { id: 3, name: 'Children\'s Backpack for School, Cute Cartoon Design, Multiple Pockets', image: bag3, price: 'Rs. 3999.99', description: 'Cute cartoon backpack featuring multiple pockets for books and lunch box.' },
    { id: 4, name: 'Toddler Backpack for Kids, Colorful and Fun Design, Easy to Carry', image: bag4, price: 'Rs. 4999.99', description: 'Colorful toddler backpack sized for easy carry and day-to-day essentials.' },
    { id: 5, name: 'Boys Girls School Backpack, Lightweight and Durable, Multiple Compartments', image: bag5, price: 'Rs. 5999.99', description: 'Spacious school backpack with strong stitching and practical compartments.' }
  ];


  const productsByCategory = {
    'Hand Bags': handBagProducts,
    'Back Pack': backpackProducts,
    'Kids Bags': kidsbagProducts,
  };

  const products = productsByCategory[title] || defaultProducts;

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
                <img src={product.image} alt={product.name} className="product-image" />
              ) : (
                <span>Product Photo</span>
              )}
            </div>
            <h3>{product.name}</h3>
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
