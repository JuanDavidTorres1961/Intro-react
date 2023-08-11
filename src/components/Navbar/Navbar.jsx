import React from 'react'

import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
        <ul className='options'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>

        </ul>
    </nav>
  )
}

export default Navbar;
