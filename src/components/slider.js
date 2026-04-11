import React, { useState } from "react";
import "./Slider.css";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";


const images = [img1, img2, img3, img4,];

function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="left" onClick={prevSlide}>❮</button>

      <img src={images[current]} alt="slide" className="slide-image" />

      <button className="right" onClick={nextSlide}>❯</button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;