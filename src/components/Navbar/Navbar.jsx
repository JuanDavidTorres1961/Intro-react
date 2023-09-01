import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
        <ul className='options'>
            <li ><NavLink className='nav-element' to="/">Home</NavLink></li>
            <li><NavLink className='nav-element' to="/About">About</NavLink></li>
            <li><NavLink className='nav-element' to="/Contact">Contact</NavLink></li>
            <li><NavLink  className='nav-element'to="/Store">Store</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar;
