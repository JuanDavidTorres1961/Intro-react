import React from 'react'
import '../Advertising/Css/Advertising.css'
import logoGorra from '../Advertising/img/logoGorra.jpg'
import promos from '../Advertising/img/promos.jpg'
import Camiseta from '../Advertising/img/Camiseta.jpg'

export const Advertising = () => {
    return (
        <div className="publicidad">
      <div className="container-imagen">
        <h1 className="titulo">NEW COLLECTION</h1>
        <img src={logoGorra} className="imagen" alt="Logo Gorra" />
      </div>
      <div className="container-imagen">
        <h1 className="titulo">NEW PROMOS</h1>
        <img src={promos} className="imagen" alt="Promos" />
      </div>
      <div className="container-imagen">
        <h1 className="titulo">NEW COLLECTION</h1>
        <img src={Camiseta} className="imagen" alt="Camiseta" />
      </div>
    </div>
    );
  };
