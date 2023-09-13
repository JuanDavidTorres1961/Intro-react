import React, { useState, useEffect } from 'react';
import '../Advertising/Css/Advertising.css';
import logoGorra from '../Advertising/img/logoGorra.jpg';
import promos from '../Advertising/img/promos.jpg';
import Camiseta from '../Advertising/img/Camiseta.jpg';

export const Advertising = () => {
  const images = [logoGorra, promos, Camiseta];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="advertising-container">
      <div className="publicidad">
        <div className="carousel">
          <button onClick={prevImage} className="arrow left-arrow">
            &#9664;
          </button>
          <img src={images[currentIndex]} className="imagen" alt={`Image ${currentIndex + 1}`} />
          <button onClick={nextImage} className="arrow right-arrow">
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};