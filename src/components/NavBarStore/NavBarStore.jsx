import React from 'react'
import '../NavBarStore/Css/NavBarStore.css'
import { NavLink } from 'react-router-dom';
import shopping from '../NavBarStore/img/shopping-cart.svg'
import { Sneakers } from '../Sneakers/Sneakers';
import {Tshirts} from '../Tshirts/Tshirts'
import { Caps } from '../Caps/Caps';
import { Promos } from '../Promos/Promos';
import { useState } from 'react';

export const NavBarStore = () => {
  const [count, setCount] = useState(0);
    
  const Increment = () =>{
      setCount(count+1);
  }

  return (
    <>
    <div className="containerNav">
        <div className='container-Options'>
          <a><NavLink className='nav-element' to="/">Home</NavLink></a>
          <a><NavLink className='nav-element' to="/Sneakers">Products</NavLink></a>
          <a><NavLink className='nav-element' to="/Tshirts">Tshirts</NavLink></a>
          <a><NavLink className='nav-element' to="/Caps">Caps</NavLink></a>
          <a><NavLink className='nav-element' to="/Promos">Promos</NavLink></a>
            
        </div>
    </div>
    </>
    
    
  )
}
