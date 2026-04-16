import React from 'react';
import './AboutPage.css';
import img1 from './images/about.avif';
import img4 from './images/banner3.avif';

function AboutPage() {
  return (
    <section className="about-page">
      <h1>About Vogue Bags</h1>
      <p>
        Vogue Bags brings together stylish design and everyday comfort for work,
        travel, and casual outings.
      </p>
      <p>
        We focus on durable materials, practical storage, and modern looks that
        fit every lifestyle.
      </p>
      <p>
        Our goal is simple: create bags that feel premium, look great, and stay
        useful for years.
      </p>
      <img src={img1} alt="About Vogue Bags" />
    </section>
  );
}

export default AboutPage;
