import React, { useState } from 'react';
import { HeaderStore } from '../HeaderStore/HeaderStore';
import { FooterStore } from '../FooterStore/FooterStore';
import '../Sneakers/Css/Sneakers.css';
import { CardSneakers } from '../Cards/CardSneakers/CardSneakers';

export const Sneakers = () => {
  const [cartClickCount, setCartClickCount] = useState(0);

  const handleAddToCart = () => {
    setCartClickCount(cartClickCount + 1);
  };

  return (
    <>
      <div className="bodySneakers">
        <FooterStore />
        <HeaderStore />
        <h1 className='Cart'>Cart Click Count: {cartClickCount}</h1>
        <CardSneakers onAddToCart={handleAddToCart} />
      </div>
    </>
  );
};


