import React from 'react'
import '../NavBarStore/Css/NavBarStore.css'
import { NavLink } from 'react-router-dom';
import shopping from '../NavBarStore/img/shopping-cart.svg'

export const NavBarStore = () => {
  return (
    <>
    <div className="containerNav">
        <div className='container-Options'>
          <a><NavLink className='nav-element' to="/">Home</NavLink></a>
          <a href="#">Tshirts</a>
          <a href="#">Cap</a>
          <a href="#">Promos</a>
          <a href="#"><img src={shopping} className='image-cart' /></a>
        </div>
    </div>
    </>
    
    
  )
}
