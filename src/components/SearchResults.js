import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchResults.css';
import handbag1 from './images/handbag1.jpeg';
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

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get('q') || '';

  const allProducts = [
    { id: 1, name: 'Handbags For Women Shoulder Bags Casual Leather Messenger Bag Large Capacity Handbag Women\'s ', image: handbag1, price: 'Rs. 4999.99', category: 'Hand Bags' },
    { id: 2, name: 'Home Ladies Purse Handbag The Perfect Double Strap Tote Rose Pink', image: handbag2, price: 'Rs. 5999.99', category: 'Hand Bags' },
    { id: 3, name: 'Fashion Woman Bag Female Hand Tote Bag Messenger Shoulder Bag Lady HandBag ', image: handbag3, price: 'Rs. 6999.99', category: 'Hand Bags' },
    { id: 4, name: 'IONIKK Shoulder Bag for Women Embroidered Women Leather Handbags Hand Bags For Women', image: handbag4, price: 'Rs. 7999.99', category: 'Hand Bags' },
    { id: 5, name: 'Genuine Leather Luxury Ladies Handbag ', image: handbag5, price: 'Rs. 8999.99', category: 'Hand Bags' },
    { id: 6, name: ' JD Backpack Laptop Bag, Multi layer storage for fast travel. ', image: backpack1, price: 'Rs. 3999.99', category: 'Back Pack' },
    { id: 7, name: ' AVI Unisex Backpack Blue ,PU leather Travel Backpack ', image: backpack2, price: 'Rs. 4999.99', category: 'Back Pack' },
    { id: 8, name: ' JD soundcore Backpack  ', image: backpack3, price: 'Rs. 5999.99', category: 'Back Pack' },
    { id: 9, name: ' Louiswill Laptop Backpack Water Resistant Bag Casual Business Laptop Bag ', image: backpack4, price: 'Rs. 6999.99', category: 'Back Pack' },
    { id: 10, name: 'Outdoor Waterproof Travel Backpack for, Laptop Bag, Climbing, Sports, Hiking Rucksack(C)', image: backpack5, price: 'Rs. 7999.99', category: 'Back Pack' },
    { id: 11, name: 'Stylbase Car Kids School Bags for Boys And Girls Printed Cartoon Water – Resistant Backpack for Kids', image: bag1, price: 'Rs. 1999.99', category: 'Kids Bags' },
    { id: 12, name: 'Kids School Bag for Boys and Girls, Water Resistant, Lightweight and Durable', image: bag2, price: 'Rs. 2999.99', category: 'Kids Bags' },
    { id: 13, name: 'Children\'s Backpack for School, Cute Cartoon Design, Multiple Pockets', image: bag3, price: 'Rs. 3999.99', category: 'Kids Bags' },
    { id: 14, name: 'Toddler Backpack for Kids, Colorful and Fun Design, Easy to Carry', image: bag4, price: 'Rs. 4999.99', category: 'Kids Bags' },
    { id: 15, name: 'Boys Girls School Backpack, Lightweight and Durable, Multiple Compartments', image: bag5, price: 'Rs. 5999.99', category: 'Kids Bags' }
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <section className="search-results-page">
      <h1>Search Results</h1>
      {query && <p className="search-query">Results for: <strong>"{query}"</strong></p>}
      
      {results.length === 0 ? (
        <div className="no-results">
          <p>{query ? 'No products found matching your search.' : 'Enter a search term to find products.'}</p>
        </div>
      ) : (
        <div className="product-grid">
          {results.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-placeholder">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="product-image" />
                ) : (
                  <span>Product Photo</span>
                )}
              </div>
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">{product.price}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchResults;
