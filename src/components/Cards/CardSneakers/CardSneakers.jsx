import React, { useEffect, useState } from 'react';
import '../CardSneakers/Css/CardSneakers.css';

export const CardSneakers = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bodySneakers">
      <div className="containerSneakers">
        {products.map((product) => (
          <div className="custom-card" key={product.id}>
            <img
              className="custom-card-img"
              src={product.image}
              alt={product.title}
            />
            <div className="custom-card-body">
              <h5 className="custom-card-title">{product.title}</h5>
              <p className="custom-card-text1">${product.price}</p>
              <button onClick={() => onAddToCart()}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


